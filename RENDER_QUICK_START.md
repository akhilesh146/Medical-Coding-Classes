# 🚀 Render Quick Start Guide

## Essential Fields for Render Deployment

When creating a **Static Site** on Render, use these exact values:

---

## 📋 Configuration Fields

### **Name**
```
disha-samarth-coaching
```
*(Or any name you prefer)*

### **Branch**
```
main
```
*(Or `master` if that's your default branch)*

### **Root Directory**
```
(Leave empty)
```
*Or `./` if required*

### **Build Command** ⚠️ IMPORTANT
```
npm install && npm run build
```

### **Publish Directory** ⚠️ IMPORTANT
```
dist
```

### **Node Version** (Optional but Recommended)
```
18
```
*Or `18.x`*

---

## ✅ Quick Checklist

- [ ] Repository connected to GitHub
- [ ] Build Command: `npm install && npm run build`
- [ ] Publish Directory: `dist`
- [ ] Auto-Deploy: Enabled
- [ ] Branch: `main` (or your default branch)

---

## 🎯 Step-by-Step (TL;DR)

1. Go to [dashboard.render.com](https://dashboard.render.com)
2. Click **"New +"** → **"Static Site"**
3. Connect your GitHub repository
4. Fill in:
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
5. Click **"Create Static Site"**
6. Wait 2-5 minutes for deployment
7. Your site is live! 🎉

---

## 🔗 After Deployment

Your site will be available at:
```
https://your-site-name.onrender.com
```

You can customize the URL in settings!

---

**Need detailed instructions?** See `RENDER_DEPLOYMENT.md`

