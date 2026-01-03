# HSDESIGN React

This converts the static site to a React (Vite) app while reusing existing assets under the parent folder (`css/`, `fonts/`, `img/`, `video/`).

## Dev

```bash
cd hs-react
npm install
npm run dev
```

Open the printed local URL. The Home page mirrors your `index.html`, and `/video` mirrors `test_video.html`.

## Build

```bash
npm run build
npm run preview
```

## Assets note
Currently, `vite.config.js` allows serving assets from the parent folder for local development. For production, copy required assets into `hs-react/public` or replace with CDN references.

## Contact form (Formspree)
The contact form posts to Formspree. Update the action URL in `src/components/Contact.jsx` to your Form ID (e.g., `https://formspree.io/f/abcde123`).
Steps:
- Create a form at https://formspree.io and copy your form endpoint.
- Replace `your_form_id` in `Contact.jsx`.
- Fields used: `name`, `email`, `message`. Optionally customize `_subject`.

## Editing Content
- Services data: edit JSON at `src/data/services.json`.
- Works/Portfolio data: edit JSON at `src/data/works.json`.
	- Schema supports multiple images per project:
		### Portfolio Viewer
		- Smooth image preview with fade-in transitions and preloading.
		- Keyboard support: `Esc` closes, `←/→` navigate images.
		```json
		{
			"title": "Project X",
			"images": [
				{ "small": "../img/portfolio/x1-small.jpg", "large": "../img/portfolio/x1-large.jpg" },
				{ "small": "../img/portfolio/x2-small.jpg", "large": "../img/portfolio/x2-large.jpg" }
			]
		}
		```
 - Team data: edit JSON at `src/data/team.json`.
Changes reflect immediately on the Home page.
