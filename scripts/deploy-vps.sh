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

: "${RECIPE_NOTES_VPS_HOST:?Missing RECIPE_NOTES_VPS_HOST in .env.local}"
: "${RECIPE_NOTES_VPS_USER:?Missing RECIPE_NOTES_VPS_USER in .env.local}"
: "${RECIPE_NOTES_VPS_WEB_ROOT:?Missing RECIPE_NOTES_VPS_WEB_ROOT in .env.local}"

SSH_OPTIONS=()
REMOTE_SUDO=""
RECIPE_NOTES_VPS_WEB_GROUP="${RECIPE_NOTES_VPS_WEB_GROUP:-www-data}"

if [[ -n "${RECIPE_NOTES_VPS_SSH_KEY:-}" ]]; then
	SSH_OPTIONS+=(-i "$RECIPE_NOTES_VPS_SSH_KEY")
fi

if [[ "$RECIPE_NOTES_VPS_USER" != "root" ]]; then
	REMOTE_SUDO="sudo -n"
fi

ssh_command() {
	ssh "${SSH_OPTIONS[@]}" "${RECIPE_NOTES_VPS_USER}@${RECIPE_NOTES_VPS_HOST}" "$@"
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

echo "Preparing ${RECIPE_NOTES_VPS_WEB_ROOT} on the VPS..."
remote_web_root=$(printf '%q' "$RECIPE_NOTES_VPS_WEB_ROOT")
remote_owner=$(printf '%q' "${RECIPE_NOTES_VPS_USER}:${RECIPE_NOTES_VPS_WEB_GROUP}")
ssh_command "${REMOTE_SUDO} mkdir -p ${remote_web_root} && ${REMOTE_SUDO} chown ${remote_owner} ${remote_web_root}"

echo "Synchronising the production build..."
rsync -az --delete \
	-e "$(rsync_ssh_command)" \
	"${PROJECT_ROOT}/dist/" \
	"${RECIPE_NOTES_VPS_USER}@${RECIPE_NOTES_VPS_HOST}:${RECIPE_NOTES_VPS_WEB_ROOT}/"

echo "Applying static-site permissions..."
ssh_command "${REMOTE_SUDO} chown -R ${remote_owner} ${remote_web_root} && ${REMOTE_SUDO} find ${remote_web_root} -type d -exec chmod 755 {} + && ${REMOTE_SUDO} find ${remote_web_root} -type f -exec chmod 644 {} +"

echo "Deployment complete."
