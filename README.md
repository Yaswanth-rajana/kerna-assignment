# Kerna — Marketing Website

A multi-page marketing website for Kerna, a PR & marketing agency focused on small businesses. Built as a frontend internship assignment.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Icons:** Lucide React
- **Animations:** CSS transitions + Framer Motion
- **Deployment:** Vercel (Node.js server)

## Features

- **4 Pages:** Home, Work, Careers, Contact/Apply
- **Dark/Light Theme:** System preference detection, manual toggle, and localStorage persistence (no flash of wrong theme)
- **Fully Responsive:** Mobile, tablet, and desktop layouts with a hamburger menu
- **Form Validation:** Client-side validation with inline errors, loading state, and success feedback
- **Google Maps Integration:** Embedded responsive map on Home and Contact pages
- **Micro-interactions:** Hover effects (scale, shadow, border glow), active state scaling, and smooth scroll-to-top button
- **Accessibility:** WCAG AA compliant colors and focus-visible styles for keyboard navigation

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, About, 7 Services, 4 Steps, 5 Reasons, Work Preview, Careers Preview, Contact with Map |
| Work | `/work` | 3 sample projects with industry tags and Problem → Solution summaries |
| Careers | `/careers` | 3 internship roles with skills, 12-week duration, and Apply Now buttons |
| Contact / Apply | `/contact` | Application form (Full Name, Email, Role dropdown, Portfolio, Message) with validation |

## Theme Logic

The website implements automatic light/dark theme handling:

1. **System Preference:** On first visit, `prefers-color-scheme` media query determines the initial theme.
2. **Anti-flash Script:** An inline script in `layout.tsx` applies the correct theme class before React hydration, preventing a flash of the wrong theme.
3. **Manual Toggle:** A sun/moon icon in the header switches themes instantly.
4. **Persistence:** User preference is saved in `localStorage` and takes priority on subsequent visits.

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install

Run the development server:

bash
npm run dev
# or
yarn dev
Open http://localhost:3000 with your browser to see the result.

Building for Production
Create an optimized production build:

bash
npm run build
Start the production server locally:

bash
npm run start
Deployment
This project is optimized for deployment on the Vercel Platform from the creators of Next.js.

The easiest way to deploy is:

Push your code to a GitHub repository.

Import the repository into Vercel.

Vercel will automatically detect Next.js and deploy.

Your live site is available at: https://kerna-website.vercel.app

Deployment Details
Framework Preset: Next.js (default)

Build Command: next build

Output Directory: .next

Node.js Server: Supports all Next.js features (server-side rendering, API routes, etc.)

Project Structure
text
src/
├── app/               # App Router pages and layouts
├── components/        # Reusable UI components and sections
├── hooks/             # Custom React hooks (useTheme)
├── lib/               # Constants and data (services, steps, roles)
└── styles/            # Global CSS and Tailwind imports
Known Limitations
Form Submission: No backend — the form simulates a successful submission without sending data.

Placeholder Content: Project previews use sample data (not real client work).

Google Maps: Maps load via an external iframe.

Social Links: Instagram and LinkedIn placeholders are non-functional (#).

License
This project was created for the Kerna Frontend Internship Assignment.

text

This README is now tailored to your project, explains the technical decisions (especially the theme system), and provides clear instructions for both local development and deployment.