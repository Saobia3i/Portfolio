# Portfolio Implementation Guide

This file explains how the current `index.html` implementation works, especially themes, CTA buttons, responsive layout, and motion/performance. Use this as a reference before adding new portfolio sections or features.

## Theme / Mode System

Themes are controlled with CSS variables at the top of `index.html`.

Main pattern:

```css
:root, [data-theme="light"] {
  --primary-color: #001f3f;
  --secondary: #001f3f;
  --text-main: #001f3f;
}

[data-theme="dark"] {
  --primary-color: #ffffff;
  --secondary: #00ffff;
  --text-main: #e8e8e8;
}
```

JavaScript applies the selected theme:

```js
document.documentElement.setAttribute("data-theme", theme);
document.body.classList.toggle("dark", theme === "dark");
localStorage.setItem("portfolio-theme", theme);
```

Important:
- Use `[data-theme="..."]` variables for general theme values.
- Use `body.dark ...` only when the dark theme needs a specific visual override.
- Do not assume `--primary-color` is always dark. In dark mode it is white, so using it as both background and text can make buttons invisible.

## CTA Button Colors

Hero CTAs use `.btn`, `.btn-primary`, and `.btn-secondary`.

Current hero buttons:
- `View Projects`: `.btn.btn-primary`
- `My Resume`: `.btn.btn-secondary`
- `Get in Touch`: `.btn.btn-secondary`

The primary CTA is intentionally not fully variable-based:

```css
.btn-primary {
  background: #001f3f;
  color: #ffffff;
}

body.dark .btn-primary {
  background: #73d2de;
  color: #001f3f;
}
```

Reason: in some themes, `--secondary` and `--primary-color` can become the same or very close. Explicit contrast keeps the CTA visible in every mode.

For future CTA buttons:
- Use `.btn-primary` for the most important action.
- Use `.btn-secondary` for supporting actions.
- If a button uses theme variables, check light and dark modes manually.
- Always make sure background and text are visibly different.
- For external links, use:

```html
target="_blank" rel="noopener noreferrer"
```

## Project Buttons

Project cards use:

```html
<a class="project-btn btn-live">View Live</a>
<a class="project-btn btn-github">GitHub</a>
```

Dark mode has special handling for live project buttons because dark mode makes `--primary-color` white:

```css
body.dark .btn-live {
  background: var(--secondary);
  color: #001f3f;
}
```

When adding a new project:

```html
<div class="project-card">
  <h3>Project Name</h3>
  <p>Short project description.</p>
  <div class="tech-tags">
    <span class="tech-tag">React.js</span>
    <span class="tech-tag">Node.js</span>
  </div>
  <div class="project-links">
    <a href="LIVE_URL" target="_blank" class="project-btn btn-live">
      <span class="material-icons" style="font-size: 18px">visibility</span> View Live
    </a>
    <a href="GITHUB_URL" target="_blank" class="project-btn btn-github">
      <span class="material-icons" style="font-size: 18px">code</span> GitHub
    </a>
  </div>
</div>
```

If there is no GitHub link, only add the live button.

## Featured Projects Grid

Featured projects use:

```css
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}
```

At `max-width: 1024px`, it becomes one column:

```css
.projects-grid {
  grid-template-columns: 1fr;
}
```

When adding new project cards, add them inside:

```html
<section id="projects">
  <div class="projects-grid">
    ...
  </div>
</section>
```

## Certificates Grid

Certificates are intentionally set to `3 x 3` on desktop:

```css
.certificates-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
}
```

Responsive fallbacks:

```css
@media (max-width: 1024px) {
  .certificates-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 560px) {
  .certificates-grid {
    grid-template-columns: 1fr;
  }
}
```

When adding a certificate:

```html
<div class="certificate-card">
  <img src="assets/certificate-file.jpg" alt="Certificate title" />
  <div class="cert-content">
    <p><strong>Certificate Name</strong><br />Short source or description</p>
  </div>
</div>
```

Keep certificate images inside `assets/`.

## Responsive Layout Rules

Important responsive breakpoints:

- `1024px`: sections become tighter, projects become one column, certificates become two columns.
- `900px`: hero padding becomes smaller.
- `768px`: hero text and profile image scale down.
- `560px`: mobile layout becomes very compact, project buttons go full width, certificates become one column.

Horizontal scroll prevention:

```css
html {
  overflow-x: hidden;
}

body {
  overflow-x: hidden;
  max-width: 100vw;
}
```

Also:
- Use `min-width: 0` inside grid/flex children.
- Use `overflow-wrap: anywhere` for long text.
- Avoid fixed widths wider than the mobile viewport.
- If adding a new nav item or selector, check mobile width carefully.

## Motion / Performance

Motion is kept, but optimized for smoother performance.

Preferred animation properties:
- `transform`
- `opacity`

Avoid animating:
- `left`
- `top`
- `width`
- `height`
- `filter`
- `background-position`

Reveal cards use:

```css
.motion-reveal.in-view {
  will-change: transform, opacity;
}

.motion-reveal.motion-done {
  will-change: auto;
}
```

This means `will-change` is used only while animation is active, then removed after animation ends.

The hero canvas particles are capped:

```js
const maxParticles = 80;
```

This prevents too many particles from building up during mouse/touch movement.

Mouse and touch listeners are passive:

```js
hero.addEventListener("mousemove", handler, { passive: true });
hero.addEventListener("touchmove", handler, { passive: true });
```

## Adding A New Feature

Use this checklist:

1. Decide where it belongs:
   - Project: add inside `#projects .projects-grid`
   - Experience: add inside `#experience .experience-grid`
   - Certificate: add inside `#certificates .certificates-grid`
   - Contact/social: add inside `#contact .contact-grid`

2. Reuse existing classes:
   - Project: `.project-card`, `.tech-tags`, `.project-btn`
   - Experience: `.experience-card`
   - Certificate: `.certificate-card`
   - Button: `.btn`, `.btn-primary`, `.btn-secondary`

3. Check all themes:
   - Light
   - Dark
   - Cupcake
   - Synthwave
   - Valentine
   - Cyberpunk
   - Business
   - Corporate
   - Halloween

4. Check responsiveness:
   - Desktop
   - Tablet
   - Mobile under `560px`

5. Check motion:
   - Use transform/opacity.
   - Do not add heavy blur/filter animations.
   - Respect `prefers-reduced-motion`.

6. Run a quick syntax check:

```powershell
node -e "const fs=require('fs'); const html=fs.readFileSync('index.html','utf8'); const css=(html.match(/<style>([\s\S]*?)<\/style>/)||[])[1]||''; let b=0,min=0; for (const ch of css) { if (ch==='{') b++; if (ch==='}') b--; min=Math.min(min,b); } const js=(html.match(/<script>([\s\S]*?)<\/script>/)||[])[1]||''; new Function(js); console.log(JSON.stringify({cssBraceBalance:b, cssMinBalance:min, jsSyntax:'ok'}));"
```

Expected output:

```json
{"cssBraceBalance":0,"cssMinBalance":0,"jsSyntax":"ok"}
```

## Common Bugs And Fixes

### Button text invisible

Cause: background and text both use theme variables that become the same color.

Fix: add explicit contrast for that mode.

```css
body.dark .some-button {
  background: #73d2de;
  color: #001f3f;
}
```

### Dropdown text invisible

Native select options may inherit bad colors.

Fix:

```css
.theme-selector select option {
  background: #ffffff;
  color: #001f3f;
}
```

### Horizontal scroll on mobile

Check:
- default body margin is reset
- nav/select/logo are constrained
- long text wraps
- no element uses fixed width larger than viewport

### Motion feels laggy

Check:
- animation uses `transform` / `opacity`
- particle count is capped
- `will-change` is not permanent on many elements
- no blur/filter animation is running repeatedly

