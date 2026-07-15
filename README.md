# TicketNest

A movie ticket booking website — black and red theme, plain HTML/CSS/JS, no build tools required.

## Structure

- `index.html` — homepage: featured movie, now showing grid, coming soon, theater locations, booking modal
- `about.html` — about the company
- `faq.html` — frequently asked questions
- `contact.html` — contact form and support info
- `styles.css` — all styling
- `script.js` — booking flow (showtime → seats → confirmation) and contact form handling

## Running locally

No build step needed. Just open `index.html` in a browser, or serve the folder with any static file server, e.g.:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Notes

- Booking and the contact form are front-end only — no backend or payment processing is wired up yet.
- Movie titles and posters are placeholders — swap in real content before launch.
