#!/usr/bin/env bash
set -euo pipefail

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$PROJECT_ROOT"

if [[ ! -f ".env.local" ]]; then
	echo "Missing .env.local. Copy .env.example and add the VPS details first."
	exit 1
fi

set -a
source .env.local
set +a

: "${CRK_VPS_HOST:?Missing CRK_VPS_HOST in .env.local}"
: "${CRK_VPS_USER:?Missing CRK_VPS_USER in .env.local}"
: "${CRK_VPS_WEB_ROOT:?Missing CRK_VPS_WEB_ROOT in .env.local}"

SSH_OPTIONS=()
REMOTE_SUDO=""
CRK_VPS_WEB_GROUP="${CRK_VPS_WEB_GROUP:-www-data}"

if [[ -n "${CRK_VPS_SSH_KEY:-}" ]]; then
	SSH_OPTIONS+=(-i "$CRK_VPS_SSH_KEY")
fi

if [[ "$CRK_VPS_USER" != "root" ]]; then
	REMOTE_SUDO="sudo -n"
fi

ssh_command() {
	ssh "${SSH_OPTIONS[@]}" "${CRK_VPS_USER}@${CRK_VPS_HOST}" "$@"
}

rsync_ssh_command() {
	printf 'ssh'

	for option in "${SSH_OPTIONS[@]}"; do
		printf ' %q' "$option"
	done
}

echo "Validating and building the static site..."
npm run check
npm run build

echo "Preparing ${CRK_VPS_WEB_ROOT} on the VPS..."
remote_web_root=$(printf '%q' "$CRK_VPS_WEB_ROOT")
remote_owner=$(printf '%q' "${CRK_VPS_USER}:${CRK_VPS_WEB_GROUP}")
ssh_command "${REMOTE_SUDO} mkdir -p ${remote_web_root} && ${REMOTE_SUDO} chown ${remote_owner} ${remote_web_root}"

echo "Synchronising the production build..."
rsync -az --delete \
	-e "$(rsync_ssh_command)" \
	"${PROJECT_ROOT}/dist/" \
	"${CRK_VPS_USER}@${CRK_VPS_HOST}:${CRK_VPS_WEB_ROOT}/"

echo "Applying static-site permissions..."
ssh_command "${REMOTE_SUDO} chown -R ${remote_owner} ${remote_web_root} && ${REMOTE_SUDO} find ${remote_web_root} -type d -exec chmod 755 {} + && ${REMOTE_SUDO} find ${remote_web_root} -type f -exec chmod 644 {} +"

echo "Deployment complete."
