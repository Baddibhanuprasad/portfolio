# Bhanu Prasad Portfolio — Implementation Notes

The confirmed blueprint calls for a distinctive, polished, responsive 3D portfolio based on Baddi Bhanu Prasad's resume, with profile, education, skills, certificates, projects, achievement imagery, and contact/social channels.

## Design

- **Design movement:** cinematic cybernetic editorialism — part security console, part independent portfolio journal.
- **Core principles:** strong typographic hierarchy, visible signal lines, restrained motion, and content that feels engineered rather than decorated.
- **Color philosophy:** an almost-black field gives the page a dark-room / terminal quality; warm signal orange marks action and proof while a muted lime green marks active systems and capability.
- **Layout paradigm:** an asymmetric vertical scan with orbital hero visualization, wide editorial headers, timeline rows, and offset image proof rather than a centered resume grid.
- **Signature elements:** orbiting 3D security core, orange signal diagrams, and mono-spaced system labels / indices.
- **Interaction philosophy:** movement should reward inspection without blocking reading; hover, reveal, and pointer parallax are subordinate to navigation and accessible text.
- **Animation:** slow infinite orbital motion, gentle core float, signal waveform movement, and scroll reveals; `prefers-reduced-motion` disables decorative motion.
- **Typography system:** Space Grotesk for expressive headlines and DM Mono for system metadata, labels, technology pills, and contact details.
- **Brand essence:** practical cybersecurity curiosity made visible through prototypes, proof, and a resilient systems mindset. Personality: methodical, curious, grounded.
- **Brand voice:** direct, technical, human. Example lines: “Building systems that refuse to break.” / “Let’s make something safer.”
- **Wordmark & logo:** a circular `BP` node mark paired with a stacked BHANU / PRASAD wordmark.
- **Signature brand color:** signal orange `#f2633a`.

## Implementation

- Plain static HTML/CSS/JS for a dependency-light, fast portfolio. `index.html` owns the semantic page; `styles.css` owns the visual system and responsive fallbacks; `script.js` owns pointer parallax, navigation state, and reveal motion.
- The hero uses CSS 3D perspective and concentric orbit rings instead of a runtime 3D dependency, so it remains performant and degrades gracefully on mobile and reduced-motion settings.
- Achievement images remain on the supplied Cloudinary URLs; project, LinkedIn, GitHub, email, phone, and location use the supplied resume details.
- `server.js` provides the preview listener on the configured port. `package.json` builds a self-contained `dist/` static output for publication.
- `manus-routes.json` declares the root page route. `app.config.ts` supplies a durable logo URL for platform metadata.

## Project structure

- `index.html`: accessible single-page portfolio content and section structure.
- `styles.css`: tokens, layout, 3D hero, cards, responsive breakpoints, reduced-motion rules.
- `script.js`: pointer parallax and lightweight scroll interaction.
- `server.js`: no-dependency preview server.
- `package.json`: dev and static build commands.
- `manus-routes.json`: route manifest.
- `app.config.ts`: project logo metadata.
- `TODO.md`: outcome-based delivery record.
