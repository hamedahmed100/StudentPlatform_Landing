# GitHub Pages Deployment Guide

## Understanding the Error

The error `GET https://hamedahmed100.github.io/src/main.tsx net::ERR_ABORTED 404` occurs because:

1. **GitHub Pages serves from a subdirectory** (your repository name), not the root
2. **The app is trying to load source files** (`/src/main.tsx`) instead of built files
3. **The base path is not configured** correctly in Vite

## Solution

I've configured the project for GitHub Pages deployment. Follow these steps:

### Option 1: Automatic Deployment (Recommended)

1. **Enable GitHub Pages in your repository:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save

2. **Push the code:**
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```

3. **The GitHub Actions workflow will automatically:**
   - Build your project
   - Deploy to GitHub Pages
   - Your site will be available at: `https://hamedahmed100.github.io/StudentPlatform_Landing/`

### Option 2: Manual Deployment

If you prefer manual deployment:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder:**
   - Option A: Push `dist` to `gh-pages` branch
   - Option B: Use GitHub Pages with `docs` folder (change in Settings → Pages)

### Important: Base Path Configuration

The base path is set in `vite.config.ts`. 

**If your repository name is `StudentPlatform_Landing`:**
- The base path is already set to `/StudentPlatform_Landing/`
- Your site URL will be: `https://hamedahmed100.github.io/StudentPlatform_Landing/`

**If you want to use the root domain** (e.g., `hamedahmed100.github.io`):
- You need a repository named `hamedahmed100.github.io`
- Change the base path in `vite.config.ts` to `'/'`
- Or set `repositoryName = ''` in the config

### Update Base Path

To change the base path, edit `vite.config.ts`:

```typescript
const repositoryName = 'YourRepositoryName'; // Change this
```

Or for root domain:
```typescript
const repositoryName = ''; // Empty for root
```

### Testing Locally

To test the production build locally:

```bash
npm run build
npm run preview
```

This will serve the built files with the correct base path.

## Troubleshooting

1. **404 errors on routes:**
   - Make sure the base path in `vite.config.ts` matches your repository name
   - Ensure you're accessing the correct URL (with the repository name in the path)

2. **Assets not loading:**
   - Clear browser cache
   - Check that the build completed successfully
   - Verify the base path is correct

3. **GitHub Actions failing:**
   - Check the Actions tab in your repository
   - Ensure Pages permissions are enabled in Settings → Actions → General

## After Deployment

Once deployed, your site will be available at:
- **Project page:** `https://hamedahmed100.github.io/StudentPlatform_Landing/`
- **User page (if configured):** `https://hamedahmed100.github.io/`

Make sure to update any external links or references to use the correct URL!

