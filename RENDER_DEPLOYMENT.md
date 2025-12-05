# Render Deployment Guide

Complete step-by-step guide to deploy your Disha Samarth Coaching Classes website on Render.

## Prerequisites

✅ Your code is pushed to GitHub  
✅ You have a Render account (sign up at [render.com](https://render.com) if needed)

---

## Method 1: Using Render Dashboard (Recommended for First Time)

### Step 1: Create a New Static Site

1. **Log in to Render**
   - Go to [dashboard.render.com](https://dashboard.render.com)
   - Sign in with your GitHub account (recommended for easy access)

2. **Create New Static Site**
   - Click **"New +"** button (top right)
   - Select **"Static Site"**

3. **Connect Your Repository**
   - Click **"Connect account"** if not already connected
   - Select your GitHub account
   - Find and select your repository: `disha-samarth-coaching` (or your repo name)
   - Click **"Connect"**

### Step 2: Configure Build Settings

Fill in the following fields:

#### Basic Settings:
- **Name**: `disha-samarth-coaching` (or any name you prefer)
- **Branch**: `main` (or `master` if that's your default branch)
- **Root Directory**: Leave empty (or `./` if required)

#### Build Settings:
- **Build Command**: 
  ```
  npm install && npm run build
  ```
  
- **Publish Directory**: 
  ```
  dist
  ```

#### Environment:
- **Node Version**: `18` or `18.x` (optional, but recommended)

### Step 3: Advanced Settings (Optional)

Click **"Advanced"** to configure:

- **Auto-Deploy**: `Yes` (automatically deploys on every push to main branch)
- **Pull Request Previews**: `Yes` (optional, creates previews for PRs)

### Step 4: Deploy

1. Click **"Create Static Site"**
2. Render will start building your site
3. Wait for the build to complete (usually 2-5 minutes)
4. Once deployed, you'll get a URL like: `https://disha-samarth-coaching.onrender.com`

### Step 5: Custom Domain (Optional)

1. Go to your site's settings
2. Click **"Custom Domains"**
3. Add your domain name
4. Follow DNS configuration instructions

---

## Method 2: Using render.yaml (Alternative)

If you prefer configuration as code, you can use the `render.yaml` file included in this project.

### Steps:

1. **Create Static Site via Dashboard**
   - Follow Step 1 from Method 1
   - When connecting repository, Render will detect `render.yaml`
   - Most settings will be auto-filled

2. **Verify Settings**
   - Check that build command and publish directory match
   - Adjust if needed

---

## Important Configuration Details

### Build Command Breakdown:
```bash
npm install && npm run build
```
- `npm install`: Installs all dependencies
- `npm run build`: Builds the production-ready static files

### Publish Directory:
```
dist
```
- This is where Vite outputs the built files
- Render will serve files from this directory

### Node Version:
- Recommended: `18.x` or `18`
- You can specify in Environment Variables:
  - Key: `NODE_VERSION`
  - Value: `18.x`

---

## Troubleshooting

### Build Fails

**Error: "Command failed"**
- Check that all dependencies are in `package.json`
- Verify Node version compatibility
- Check build logs in Render dashboard

**Error: "Cannot find module"**
- Make sure `node_modules` is not in `.gitignore` incorrectly
- Run `npm install` locally to verify dependencies

**Error: "Build command not found"**
- Verify build command: `npm install && npm run build`
- Check that `package.json` has the `build` script

### Site Not Loading

**Blank page or 404 errors**
- Verify publish directory is set to `dist`
- Check that `dist` folder exists after build
- Verify `index.html` is in the `dist` folder

**Assets not loading (CSS/JS missing)**
- Check `vite.config.js` - may need to set `base` if using subdirectory
- Verify all assets are in `public` folder or imported correctly

### Environment Variables

If you need environment variables later:
1. Go to your site's settings
2. Click **"Environment"**
3. Add key-value pairs
4. Redeploy

---

## Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All pages are accessible
- [ ] CSS/styles are loading
- [ ] Images/assets are loading
- [ ] Forms work (client-side validation)
- [ ] Contact links (tel: and mailto:) work
- [ ] Mobile responsive design works
- [ ] Custom domain configured (if applicable)

---

## Updating Your Site

### Automatic Deployments:
- Every push to the `main` branch automatically triggers a new deployment
- Render will rebuild and redeploy automatically

### Manual Deploy:
1. Go to your site dashboard
2. Click **"Manual Deploy"**
3. Select branch and click **"Deploy latest commit"**

---

## Render Pricing

- **Free Tier**: 
  - Static sites are free
  - Automatic SSL certificates
  - Custom domains supported
  - Perfect for this project!

---

## Useful Links

- [Render Documentation](https://render.com/docs)
- [Static Site Guide](https://render.com/docs/static-sites)
- [Render Dashboard](https://dashboard.render.com)

---

## Quick Reference

**Build Command**: `npm install && npm run build`  
**Publish Directory**: `dist`  
**Node Version**: `18.x` (optional)  
**Auto-Deploy**: Enabled (recommended)

---

**Your site will be live at**: `https://your-site-name.onrender.com` 🚀

