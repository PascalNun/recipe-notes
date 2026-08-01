# GitHub and VPS Deployment

The project is a static Astro site. Deployment has two independent parts:

1. GitHub stores the source code and project history.
2. The VPS serves the generated files from `dist/` through nginx.

The production site is available at `https://recipes.pascalnun.eu`. It runs alongside the existing WordPress website using its own document root, nginx site, and TLS certificate. This separation is important because the recipe site uses root-relative URLs such as `/de/` and `/en/`.

## 1. Publish the Source on GitHub

The local repository is already initialised on the `main` branch. Before publishing, decide:

- repository name, recommended: `contemporary-regional-kitchen`
- visibility: public or private
- licence: no licence is selected yet

Create an empty repository on GitHub without adding a README, `.gitignore`, or licence. Then run:

```bash
git add .
git commit -m "Initial recipe zine"
git remote add origin https://github.com/<account>/contemporary-regional-kitchen.git
git push -u origin main
```

Alternatively, with an authenticated GitHub CLI:

```bash
gh repo create contemporary-regional-kitchen --public --source=. --remote=origin --push
```

Replace `--public` with `--private` if required. Do not run both methods.

## 2. Prepare Local Deployment Configuration

Copy the example configuration:

```bash
cp .env.example .env.local
```

Fill in the VPS details in `.env.local`:

```bash
CRK_VPS_HOST="server.example.com"
CRK_VPS_USER="deploy-user"
CRK_VPS_SSH_KEY="/absolute/path/to/private-key"
CRK_VPS_WEB_ROOT="/var/www/contemporary-regional-kitchen"
CRK_VPS_WEB_GROUP="www-data"
```

`.env.local` is ignored by Git and must never be committed. The optional SSH key value can be omitted when the default SSH agent already knows the correct key.

## 3. Prepare the VPS

The deployment helper creates an independent document root using passwordless `sudo`, assigns it to the deployment user and nginx's group, and applies read-only public file permissions after synchronisation. The existing server already uses this privilege pattern for controlled deployments. To prepare it manually instead, run:

```bash
sudo mkdir -p /var/www/contemporary-regional-kitchen
sudo chown -R <deploy-user>:www-data /var/www/contemporary-regional-kitchen
sudo chmod -R 775 /var/www/contemporary-regional-kitchen
```

Use a dedicated nginx server block. Replace the domain and paths as required:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name recipes.pascalnun.eu;

    root /var/www/contemporary-regional-kitchen;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

Enable and validate the configuration using the conventions of the existing server, then add TLS with the same certificate workflow already used for the main website. For a typical Debian or Ubuntu nginx installation:

```bash
sudo ln -s /etc/nginx/sites-available/contemporary-regional-kitchen /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

DNS must point the chosen domain or subdomain to the VPS before a public certificate can be issued.

## 4. Deploy

The deployment helper validates the content, creates a production build, ensures the remote directory exists, and synchronises only `dist/`:

```bash
npm run deploy:vps
```

The sync uses `--delete`, so files removed from the new build are also removed from this project's remote document root. It never targets the existing WordPress document root.

## 5. Future Updates

For each release:

```bash
git add .
git commit -m "Describe the change"
git push
npm run deploy:vps
```

GitHub Actions deployment can be added later, once the manual workflow and final domain are confirmed. Starting manually keeps server credentials out of GitHub until they are actually needed.

## Server Coexistence Checklist

- The recipe zine has its own nginx `server_name`.
- Its document root is separate from WordPress and uploaded media.
- The deployment script points only to the recipe zine directory.
- DNS resolves to the existing VPS.
- TLS is configured for the new hostname.
- `/de/`, `/en/`, and both recipe routes return HTTP 200 after deployment.
