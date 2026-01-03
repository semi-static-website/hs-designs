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
Currently, `vite.config.js` allows serving assets from the parent folder for local development. On deploy, the GitHub Actions workflow copies the top-level asset folders (`css`, `fonts`, `img`, `js`, `video`) into the published site automatically.

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
				{ "small": "img/portfolio/x1-small.jpg", "large": "img/portfolio/x1-large.jpg" },
				{ "small": "img/portfolio/x2-small.jpg", "large": "img/portfolio/x2-large.jpg" }
			]
		}
		```
 - Team data: edit JSON at `src/data/team.json`.
Changes reflect immediately on the Home page.

---

## Simple Updates Guide (Photos & Details)

Follow these steps to keep the site up to date without touching code:

1) Team members
- Place new photos in `img/team/` (recommended square images ~600×600px).
- Open `src/data/team.json` and add a new item:
	```json
	{
		"name": "Full Name",
		"role": "Job Title",
		"photo": "img/team/full_name.jpg",
		"bio": "Short 1–2 line description."
	}
	```
- Photos render circular and centered automatically.

2) Services
- Place service images in `img/services/` (optional).
- Open `src/data/services.json` and add/update items:
	```json
	{
		"img": "img/services/service-new.jpg",
		"title": "Service Name",
		"desc": "1–2 sentence description of the service."
	}
	```

3) Works / Portfolio
- Place project images in `img/portfolio/`.
- For each project in `src/data/works.json`, you can link multiple images. Use the same file for `small` and `large` if you don’t have two sizes:
	```json
	{
		"title": "Project Name",
		"images": [
			{ "small": "img/portfolio/project_12.1.jpg", "large": "img/portfolio/project_12.1.jpg" },
			{ "small": "img/portfolio/project_12.2.jpg", "large": "img/portfolio/project_12.2.jpg" }
		]
	}
	```
- The homepage shows a continuous left‑to‑right strip; clicking opens a viewer with next/previous and keyboard navigation.

4) Favicon
- Replace `img/favicon.svg` with your logo (keep the same file name) to update the browser tab icon.

5) Contact & Map
- Open `src/components/Contact.jsx` and update:
	- Formspree endpoint: replace the `action="https://formspree.io/f/..."` URL with your Form ID.
	- WhatsApp number: set `whatsappNumber` to your phone in international format (e.g., `919876543210`).
	- Address, phones, email: edit the static text under “Contact Info”.
	- Map business name: set `businessName` to match your listing.
	- Exact place link: set `mapsShortUrl` to your Google Maps short link.
	- Social links: update the URLs at the bottom of the component.

Tips
- Use paths like `img/...` (relative to the site root). The app handles the GitHub Pages subpath automatically.
- File names without spaces make updates easier.

---

## Deploy (GitHub Pages)

- Push changes to the `main` branch. GitHub Actions will:
	- Run basic checks and build the site.
	- Publish to the `gh-pages` branch.
- Your site appears at `https://<your-username>.github.io/hs-designs/`.
- If the page doesn’t update:
	- Check the Actions tab for workflow status.
	- Confirm GitHub Pages source is set to branch `gh-pages` (root).
	- Hard refresh the browser (Ctrl+Shift+R).

---

## FAQ

- Images not showing?
	- Make sure the file exists under `img/...` and the JSON path matches exactly.
	- Avoid uppercase/lowercase mismatches in file names.
- Want to reorder items?
	- Edit the JSON files; items render in the order they appear.
- Need bigger images?
	- Use larger JPG/PNG files; the viewer will scale them to fit.
