# Render Deployment Troubleshooting

## Issue: Site Not Showing Anything (Blank Page)

If your site is deployed but showing a blank page, try these solutions:

### ✅ Solution 1: Verify Build Command and Publish Directory

**In Render Dashboard, make sure:**

1. **Build Command**: 
   ```
   npm install && npm run build
   ```

2. **Publish Directory**: 
   ```
   dist
   ```

3. **Root Directory**: 
   ```
   (Leave empty or use ./)
   ```

### ✅ Solution 2: Check Build Logs

1. Go to your Render dashboard
2. Click on your service
3. Go to **"Logs"** tab
4. Check for any build errors

**Common errors:**
- `npm: command not found` → Add Node version in environment variables
- `Cannot find module` → Dependencies issue
- Build succeeds but no files → Check publish directory

### ✅ Solution 3: Verify Build Output Locally

Test the build locally first:

```bash
npm run build
```

Then check if `dist` folder is created with:
- `index.html`
- `assets/` folder with JS and CSS files

### ✅ Solution 4: Check Render Build Logs

Look for these in the build logs:

**Good signs:**
```
✓ built in Xs
dist/index.html
dist/assets/index-xxxxx.js
dist/assets/index-xxxxx.css
```

**Bad signs:**
```
Error: ...
Command failed
Cannot find module
```

### ✅ Solution 5: Environment Variables (if needed)

If build fails, add in Render → Environment:

- **Key**: `NODE_VERSION`
- **Value**: `18` or `18.x`

### ✅ Solution 6: Verify Static Site Settings

Make sure you selected **"Static Site"** not **"Web Service"**

- Static Site = ✅ Correct (for this project)
- Web Service = ❌ Wrong (needs server)

### ✅ Solution 7: Check Browser Console

1. Open your deployed site
2. Press `F12` to open Developer Tools
3. Go to **Console** tab
4. Look for errors like:
   - `Failed to load resource`
   - `404 Not Found`
   - `CORS error`

### ✅ Solution 8: Clear Cache and Redeploy

1. In Render dashboard, click **"Manual Deploy"**
2. Select **"Clear build cache & deploy"**
3. Wait for rebuild

### ✅ Solution 9: Verify File Structure

After build, `dist` folder should contain:
```
dist/
├── index.html
├── assets/
│   ├── index-xxxxx.js
│   ├── index-xxxxx.css
│   └── logo-xxxxx.svg
└── favicon.ico (if exists)
```

### ✅ Solution 10: Test Locally First

Before deploying, test the production build locally:

```bash
npm run build
npm run preview
```

Visit `http://localhost:4173` - if it works locally, it should work on Render.

---

## Quick Checklist

- [ ] Build Command: `npm install && npm run build`
- [ ] Publish Directory: `dist`
- [ ] Service Type: **Static Site** (not Web Service)
- [ ] Build logs show success
- [ ] `dist` folder contains `index.html`
- [ ] No errors in browser console
- [ ] Node version set (if needed)

---

## Still Not Working?

1. **Check Render Logs**: Look for specific error messages
2. **Test Build Locally**: Run `npm run build` and `npm run preview`
3. **Verify GitHub**: Make sure latest code is pushed
4. **Contact Support**: Render has good support - check their docs

---

## Common Render Settings Summary

```
Service Type: Static Site
Build Command: npm install && npm run build
Publish Directory: dist
Branch: main
Auto-Deploy: Yes
```

---

**Most Common Issue**: Wrong publish directory or build command. Double-check these first! 🔍

