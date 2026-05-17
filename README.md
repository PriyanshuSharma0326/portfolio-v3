# Portfolio v3

A modern personal portfolio for Priyanshu Sharma, built with Next.js, React, TypeScript, Tailwind CSS, Redux Toolkit, and Framer Motion.

The site presents a frontend developer profile with animated sections for introduction, about, experience, skills, projects, social links, resume access, and contact.

## Features

- Responsive portfolio layout for desktop, tablet, and mobile screens.
- Animated page sections and UI elements using Framer Motion.
- App Router structure with reusable React components.
- Redux-powered UI state for mobile menu and language selection.
- English, Spanish, and Hindi content support.
- Project cards with live links, source links, screenshots, descriptions, and tech stacks.
- Custom Tailwind theme with portfolio colors, typography, and scrollbar styling.
- Optimized images through Next.js image configuration.

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Redux Toolkit
- React Redux
- Framer Motion
- Next Font

## Getting Started

### Prerequisites

- Node.js 18.18 or newer
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

## Available Scripts

```bash
npm run dev
```

Starts the local development server.

```bash
npm run build
```

Creates an optimized production build.

```bash
npm run start
```

Runs the production build locally.

```bash
npm run lint
```

Runs the configured lint command.

## Project Structure

```text
public/
  ProfilePicture.png
  UserLogo.png
  Wink.png

src/
  app/
    _lib/
      features/
      icons/
      fonts.ts
      store.ts
      types.ts
    globals.css
    layout.tsx
    page.tsx
    StoreProvider.tsx
  components/
    AboutMe.tsx
    ContactMe.tsx
    Experience.tsx
    Footer.tsx
    Header.tsx
    Introduction.tsx
    Menu.tsx
    ProjectCard.tsx
    ProjectsSection.tsx
    SkillsSection.tsx
    SocialLinks.tsx
  constants/
    lists.ts
```

## Content Updates

Most portfolio content is managed in `src/constants/lists.ts`.

- Update navigation labels in `headerLinks`.
- Update work history in `experienceList`.
- Update skill badge groups in `skillsList`.
- Update featured work in `projects`.
- Update the resume URL in `RESUME_LINK`.

Profile images and logo assets live in `public/`.

## Styling

Global styles are defined in `src/app/globals.css`, and the custom Tailwind theme is configured in `tailwind.config.ts`.

The app uses Google fonts loaded through `next/font` in `src/app/_lib/fonts.ts`.

## Image Domains

Remote images are configured in `next.config.ts` for:

- `img.shields.io`
- `raw.githubusercontent.com`
- `private-user-images.githubusercontent.com`

Add additional domains there before using new remote image sources with `next/image`.

## Deployment

This project is ready to deploy on Vercel or any platform that supports Next.js.

For Vercel, connect the repository and use the default Next.js build settings:

```bash
npm run build
```

No environment variables are required for the current portfolio content.
