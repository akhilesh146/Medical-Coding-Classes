# GitHub Upload Guide

Your project is ready to be uploaded to GitHub! Follow these steps:

## Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `disha-samarth-coaching` (or any name you prefer)
   - **Description**: "Medical Coding Coaching Classes Website - React + Vite + Tailwind CSS"
   - **Visibility**: Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click **"Create repository"**

## Step 2: Connect Your Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these commands in your terminal:

### Option A: If you haven't created the repo yet
```bash
# Make sure you're in the project directory
cd Medical-Coding-Classes

# Add the remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/disha-samarth-coaching.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

### Option B: If GitHub shows you different commands
Copy and paste the commands that GitHub provides after creating the repository. They will look similar to:
```bash
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

## Step 3: Verify Upload

1. Go to your GitHub repository page
2. You should see all your files there
3. The README.md will be displayed on the repository homepage

## Troubleshooting

### If you get "remote origin already exists" error:
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/disha-samarth-coaching.git
git push -u origin main
```

### If you need to authenticate:
- GitHub may ask for your username and password
- For password, use a **Personal Access Token** (not your GitHub password)
- To create a token: GitHub → Settings → Developer settings → Personal access tokens → Generate new token

### If you get permission errors:
- Make sure the repository name matches
- Check that you have write access to the repository
- Verify your GitHub username is correct

## Next Steps After Upload

1. **Add a description** to your GitHub repository
2. **Add topics/tags** like: `react`, `vite`, `tailwindcss`, `medical-coding`, `coaching`
3. **Enable GitHub Pages** (if you want to host it):
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` / `root`
   - Save

## Quick Commands Reference

```bash
# Check current status
git status

# See remote repositories
git remote -v

# Push changes (after initial setup)
git add .
git commit -m "Your commit message"
git push

# Pull latest changes
git pull
```

---

**Your project is already committed and ready to push!** 🚀

