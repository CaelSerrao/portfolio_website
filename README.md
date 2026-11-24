# Cael Serrao — React Portfolio

A complete developer portfolio rebuilt with **React, TypeScript, Vite, and Tailwind CSS**. The dark visual design and expanded set of products, research, and software projects are carried over from the original site. This package is ready for you to edit and host yourself.

## Quick start on Windows

1. Install **Node.js 24 LTS** from https://nodejs.org/ (npm is included).
2. Extract this ZIP and open the `cael-portfolio-react` folder in VS Code.
3. Open **Terminal → New Terminal** in VS Code.
4. Run:

```powershell
npm ci
npm run dev
```

Open the local URL printed by Vite. Save an edited source file to see the page update. Press **Ctrl+C** in the terminal to stop the server. On macOS and Linux, use the same npm commands.

If PowerShell blocks `npm.ps1`, run the commands in a Command Prompt terminal, or use `npm.cmd ci` and `npm.cmd run dev`.

## Stack

| Layer                 | Technology                             | Role                                                  |
| --------------------- | -------------------------------------- | ----------------------------------------------------- |
| UI                    | React 19                               | Reusable components and state management              |
| Language              | TypeScript 7, strict mode              | Typed project data and component props                |
| Development and build | Vite 8                                 | Development server, hot reload, optimized output      |
| Styling               | Tailwind CSS 4 + custom CSS            | Responsive layouts, utilities, design system, artwork |
| Code quality          | Oxlint + Prettier                      | React/TypeScript linting and consistent formatting    |
| Tests                 | Vitest + React Testing Library + jsdom | Visitor interaction tests                             |
| Dependencies          | npm + package-lock.json                | Reproducible installations                            |

The package lock records the exact resolved dependency versions. Use `npm ci` to reproduce them. Node.js is used for development and builds. Visitors run the compiled application in their browsers.

## What works

- Responsive desktop and mobile layouts.
- Project filtering with accessible selected state and result announcements.
- Native project dialogs with keyboard cancellation, scroll locking, and focus return.
- Mobile navigation that closes when a section is selected.
- Locally generated SVG/CSS artwork.
- Safe external GitHub links, page metadata, favicon, and reduced-motion support.

## Source guide

| Path                                | Purpose                                                  |
| ----------------------------------- | -------------------------------------------------------- |
| `src/App.tsx`                       | Page assembly, About, Contact, footer                    |
| `src/components/Header.tsx`         | Branding and mobile navigation                           |
| `src/components/Hero.tsx`           | Introduction and primary actions                         |
| `src/components/Projects.tsx`       | Category filters and project selection                   |
| `src/components/ProjectCard.tsx`    | Reusable project card                                    |
| `src/components/ProjectDialog.tsx`  | Accessible project details                               |
| `src/components/ProjectArtwork.tsx` | Project illustrations                                    |
| `src/components/DecorativeMesh.tsx` | Hero SVG artwork                                         |
| `src/components/ExternalLink.tsx`   | Shared external-link behavior                            |
| `src/data/profile.ts`               | Name, GitHub URL, biography, skills                      |
| `src/data/projects.ts`              | Featured project content and repository links            |
| `src/types/portfolio.ts`            | Shared project and category types                        |
| `src/index.css`                     | Tailwind import, theme, custom styling, breakpoints      |
| `src/test/`                         | Interaction tests and DOM test setup                     |
| `public/favicon.svg`                | Browser icon, copied into production output              |
| `index.html`                        | Document title, description, social metadata             |
| `vite.config.ts`                    | React/Tailwind plugins, build paths, test configuration  |
| `dist/`                             | Included production build; regenerate after source edits |

## Common edits

**Your name, bio, skills, or GitHub:** edit `src/data/profile.ts`. Update the document metadata in `index.html` when changing the name or title.

**Project copy:** edit `src/data/projects.ts`. The same record supplies both the card and its details dialog. `fullTitle` optionally supplies a longer title in the dialog, `status` describes progress, `achievements` lists awards, and `artwork` selects the visual style. `repoUrl` is optional; omit it when no public source link has been supplied. The project categories determine which filters include it. When adding a new illustration ID or category, update `src/types/portfolio.ts` and the corresponding artwork/filter components.

**Colors, fonts, spacing:** edit `src/index.css`. Layout utilities also appear in React `className` attributes. The site uses Google Fonts with system font fallbacks; a network connection is needed to download those optional fonts. You can self-host or replace them.

**Resume:** place your actual PDF in `public/`, then link to it from a component using `import.meta.env.BASE_URL + 'resume.pdf'` so it also works under a repository subpath. Only add public contact information you want visitors to see. The supplied contact section links to GitHub.

## Commands

| Command                | Purpose                                                        |
| ---------------------- | -------------------------------------------------------------- |
| `npm ci`               | Install the exact locked dependency set                        |
| `npm run dev`          | Start Vite with live reload                                    |
| `npm run typecheck`    | Run strict TypeScript checks                                   |
| `npm run lint`         | Run React/TypeScript linting with warnings treated as failures |
| `npm test`             | Run all interaction tests once                                 |
| `npm run test:watch`   | Watch and rerun tests during editing                           |
| `npm run format`       | Format source and configuration files                          |
| `npm run format:check` | Check formatting without changing files                        |
| `npm run build`        | Type-check and build `dist/`                                   |
| `npm run preview`      | Serve the production build locally                             |
| `npm run check`        | Run type checks, linting, formatting checks, tests, and build  |

The tests cover the ten-project gallery, product/research/mobile filters, award rendering, unpublished-project link behavior, full thesis title and progress, restoring the full gallery, opening the right project, cancelling/closing dialogs, returning focus, scroll restoration, and closing mobile navigation. Browser-native dialog behavior is also reviewed in a real browser when the preview environment is available. jsdom uses small shims for the native dialog methods.

## Build and host it yourself

```powershell
npm ci
npm run build
npm run preview
```

Upload the **contents of `dist/`** to your static host. Generic host settings:

| Setting                  | Value           |
| ------------------------ | --------------- |
| Node.js                  | 24              |
| Install command          | `npm ci`        |
| Build command            | `npm run build` |
| Output/publish directory | `dist`          |
| Environment variables    | None required   |
| Runtime backend          | None required   |

`base: './'` in the Vite configuration creates relative asset URLs, so the build can be served from a domain root or a repository subpath. This is a one-page site using section anchors, so no client-side routing rewrite is required. `npm run preview` is for checking the build locally; your hosting service should serve `dist/` in production.

The downloaded package contains no deployment credentials, no host-specific project identity, and no deployment workflow. You choose the host and publish it yourself. Editing this package does not update the earlier hosted site.

## Content and limitations

Project descriptions are carried over from the earlier portfolio and grounded in the public project repositories listed below. This React migration does not fetch new GitHub data automatically. It does not add a contact-form backend, analytics, database, or login. The page uses client-side rendering; its metadata is present in HTML, while most visible content is rendered by React.

## Project sources

- https://github.com/CaelSerrao/Jarvis-HackAtlantic-Project/blob/main/README-INTEGRATION.md
- https://github.com/CaelSerrao/Technation-Escape-the-Feed/blob/main/README.md
- https://github.com/CaelSerrao/Kat-Translator/blob/main/GUI.py
- https://github.com/CaelSerrao/Kat-Translator/blob/main/predict2.py
- https://github.com/CaelSerrao/Few-Shot-Face-Recog/blob/main/README.md

## Framework documentation

- https://react.dev/
- https://www.typescriptlang.org/docs/
- https://vite.dev/guide/
- https://tailwindcss.com/docs/installation/using-vite
- https://vitest.dev/guide/
- https://testing-library.com/docs/react-testing-library/intro/

## Expanded portfolio content

The gallery contains Modsquad, the honours thesis, Quorum, Flexora (tentative name), the Kotlin Android gaming demo, Katseye, Jarvis, Escape the Feed, Kat Translator, and this portfolio itself. The recognition section highlights Modsquad’s two awards and the thesis publication progress.

The thesis is titled “The Mitigation of Ethical Bias in Text-to-Video Models Using Facial Synthesis.” Its manuscript is in preparation and the Research Ethics Board application is complete. These statements do not claim a published paper or ethics approval. New project descriptions and awards were supplied by the portfolio owner. No dates, additional technical stacks, or repository URLs have been invented. The Android gaming and battery-information demo is named DroidDex. Katseye reuses the existing few-shot project’s repository and implementation details.

No deployment has been performed for this update.

## Research and AI-agent experience update

The honours-research entry now describes the pipeline from the supplied thesis: frame extraction, primary-face selection, identity/landmark-guided synthesis, compositing, and video reconstruction. It lists ComfyUI, FLUX.1-dev, PuLID, MediaPipe, ArcFace, and OpenCV, with a four-generated-clip pilot evaluated using identity similarity, LPIPS, and temporal embedding drift. The scope remains face-focused; manuscript preparation and REB application completion are retained as progress statements. The uploaded thesis file and its personal identifiers are not bundled into the website.

The About skills include hands-on AI-agent experience with Mistral, ChatGPT, and Claude. No API, SDK, framework, or deployment experience is inferred from those provider names. The project dialog includes explicit viewport-centering CSS.

## Black and purple visual theme

The background is black (`#000000`) with `#8626FF` as the primary accent. Lighter purple tints are used for small text and icon strokes. All project illustrations, the hero mesh, buttons, filters, focus outlines, and favicon follow the same palette. The shared SVG symbols in `src/components/ProjectIcon.tsx` replace the letter marks for Modsquad (shield/check), Quorum (scales), Flexora (dumbbell), DroidDex (gamepad), and the honours thesis (document/magnifier). These are inline SVG components; no additional icon package is needed.
