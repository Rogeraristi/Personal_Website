# Personal Portfolio Website

A modern, responsive personal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- ⚡ **Next.js 14** with App Router
- 🎨 **Tailwind CSS** for styling
- 📱 **Fully Responsive** design
- 🌙 **Dark Theme** with glassmorphism effects
- ✨ **Smooth Animations** and micro-interactions
- 🚀 **Vercel-Ready** for instant deployment

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Building for Production

```bash
npm run build
npm start
```

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy!

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page
│   └── components/
│       ├── Hero.tsx       # Hero section
│       ├── About.tsx      # About section
│       ├── Experience.tsx # Work experience
│       ├── Education.tsx  # Education
│       ├── Skills.tsx     # Skills & technologies
│       ├── Projects.tsx   # Featured projects
│       └── Contact.tsx    # Contact & social links
├── public/                # Static assets
├── tailwind.config.ts     # Tailwind configuration
└── next.config.ts         # Next.js configuration
```

## Customization

Edit the component files in `src/components/` to update your personal information, projects, and social links.

## License

MIT License
