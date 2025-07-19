# My Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, clean design, and professional presentation of skills and projects.

## 🚀 Features

- **Modern Design**: Clean, professional layout with beautiful animations
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **TypeScript**: Full type safety for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Framer Motion**: Smooth animations and transitions
- **React Router**: Client-side routing for seamless navigation

## 📋 Pages

- **Home**: Hero section with introduction and featured services
- **About**: Personal information, skills, and experience
- **Projects**: Portfolio showcase with project details
- **Contact**: Contact form and contact information

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Router** - Navigation
- **Lucide React** - Icons

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd my-profile
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
my-profile/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── pages/             # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

## 🎨 Customization

### Personal Information

Update the following files with your information:

1. **Home page** (`src/pages/Home.tsx`): Update your name and introduction
2. **About page** (`src/pages/About.tsx`): Update skills, experience, and personal details
3. **Projects page** (`src/pages/Projects.tsx`): Add your actual projects
4. **Contact page** (`src/pages/Contact.tsx`): Update contact information
5. **Footer** (`src/components/Footer.tsx`): Update social links and copyright

### Styling

- **Colors**: Modify the primary color palette in `tailwind.config.js`
- **Fonts**: Change fonts in `tailwind.config.js` and `index.html`
- **Layout**: Customize component layouts in individual files

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Add navigation link in `src/components/Navbar.tsx`

## 📦 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

If you have any questions or need help, feel free to reach out!