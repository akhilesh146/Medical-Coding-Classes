# Disha Samarth Coaching Classes

A modern, responsive static website for Disha Samarth Coaching Classes - Medical Coding Coaching. Built with React, Vite, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Create the project** (if starting fresh):
   ```bash
   npm create vite@latest disha-samarth-coaching --template react
   cd disha-samarth-coaching
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Install Tailwind CSS**:
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

   Note: The Tailwind configuration files (`tailwind.config.js` and `postcss.config.js`) are already included in this project.

4. **Start development server**:
   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:5173`

5. **Build for production**:
   ```bash
   npm run build
   ```

   This creates an optimized production build in the `dist` folder.

6. **Preview production build**:
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
disha-samarth-coaching/
├── README.md
├── package.json
├── vite.config.js
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── assets/
│   │   └── logo.svg
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Courses.jsx
│   │   ├── Features.jsx
│   │   ├── WhoCanJoin.jsx
│   │   ├── ContactCard.jsx
│   │   ├── EnquiryForm.jsx
│   │   └── Footer.jsx
│   └── data/
│       └── courses.js
└── public/
    └── favicon.ico
```

## 🎨 Features

- **Responsive Design**: Mobile-first approach, works on all devices
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
- **SEO Optimized**: Meta tags, Open Graph tags, semantic structure
- **Client-side Form Validation**: Enquiry form with validation and success messages
- **Smooth Scrolling**: Navigation between sections
- **Floating Contact Buttons**: Quick access to call/email
- **Modern UI**: Clean design with Tailwind CSS and subtle animations

## 📝 Components

- **Header**: Sticky navigation with logo and CTA
- **Hero**: Main banner with highlight badge and CTAs
- **Courses**: Course cards with pricing and features
- **Features**: Key highlights with icons
- **WhoCanJoin**: Eligibility criteria
- **ContactCard**: Contact information display
- **EnquiryForm**: Contact form with validation
- **Footer**: Footer with contact info and links

## 🔧 Configuration

### Tailwind CSS

The project uses Tailwind CSS with a custom color palette (primary teal/blue). Configuration is in `tailwind.config.js`.

### Fonts

The site uses system fonts for optimal performance. To use Google Fonts, add the link tag in `index.html` and update the font-family in `src/index.css`.

## 📧 Form Handling

The enquiry form currently performs client-side validation and shows a success message. Form data is logged to the console for development purposes.

### Connecting to a Backend

To connect the form to a backend service:

1. **Netlify Forms**: Add `netlify` attribute to the form and `data-netlify="true"`:
   ```jsx
   <form name="enquiry" method="POST" data-netlify="true" netlify>
   ```

2. **Custom API**: Replace the form submission handler in `EnquiryForm.jsx`:
   ```javascript
   const handleSubmit = async (e) => {
     e.preventDefault()
     if (validate()) {
       try {
         const response = await fetch('YOUR_API_ENDPOINT', {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify(formData)
         })
         // Handle response
       } catch (error) {
         // Handle error
       }
     }
   }
   ```

3. **Email Service**: Use services like EmailJS, Formspree, or SendGrid.

## 🚀 Deployment

### GitHub Pages

1. Install gh-pages:
   ```bash
   npm install -D gh-pages
   ```

2. Add to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

4. Enable GitHub Pages in repository settings (use `gh-pages` branch).

### Netlify

1. Build command: `npm run build`
2. Publish directory: `dist`
3. Deploy via:
   - Drag and drop the `dist` folder
   - Connect GitHub repository
   - Use Netlify CLI: `netlify deploy --prod`

### Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Or connect GitHub repository in Vercel dashboard.

## 🧪 Testing & Linting

### ESLint

The project includes ESLint configuration. To lint:

```bash
npm run lint
```

### Prettier (Optional)

To add Prettier for code formatting:

1. Install:
   ```bash
   npm install -D prettier
   ```

2. Create `.prettierrc`:
   ```json
   {
     "semi": false,
     "singleQuote": true,
     "tabWidth": 2
   }
   ```

3. Add script to `package.json`:
   ```json
   "format": "prettier --write \"src/**/*.{js,jsx}\""
   ```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Customization

### Logo

Replace `src/assets/logo.svg` with your own logo. The logo is referenced in the Header component.

### Colors

Update the color palette in `tailwind.config.js` under `theme.extend.colors.primary`.

### Content

- Course data: Edit `src/data/courses.js`
- Contact information: Update components directly or create a config file
- Meta tags: Edit `index.html`

## 📄 License

This project is private and proprietary.

## 👤 Contact

**Disha Samarth Coaching Classes**

- Phone: [9623163402](tel:9623163402)
- Email: [dishasamarthmedco@gmail.com](mailto:dishasamarthmedco@gmail.com)
- Enquiry Timing: Monday to Saturday, 10:00 AM to 8:00 PM

---

Built with ❤️ using React, Vite, and Tailwind CSS

