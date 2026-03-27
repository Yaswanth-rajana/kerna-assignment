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