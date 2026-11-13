# INFIEIGHT

INFIEIGHT is a responsive digital studio website built with Next.js, React, and TypeScript.

## Local development

```bash
npm ci
npm run dev
```

Open http://localhost:3000.

## Deploy to GitHub Pages

Pushing to `main` runs the GitHub Actions workflow in `.github/workflows/deploy-pages.yml`. It lints the project, builds a static export, and deploys the `out` directory to GitHub Pages.

The project site is published at https://harshavardhansr.github.io/Infieight/ after the first successful workflow run. In the repository's **Settings → Pages**, select **GitHub Actions** as the build and deployment source if it is not already selected.
