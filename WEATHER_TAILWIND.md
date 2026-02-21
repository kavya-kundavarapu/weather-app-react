Tailwind conversion notes for WeatherWise

Goal: map the existing CSS tokens to Tailwind theme colors/utilities and provide sample component classes.

1. Tailwind config (tailwind.config.js) - extend theme colors

module.exports = {
content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
theme: {
extend: {
colors: {
'ww-bg': '#f4f7fb',
'ww-card': '#ffffff',
'ww-muted': '#6c757d',
'ww-accent1': '#e3f2fd',
'ww-accent2': '#f8fbff',
'ww-text': '#0f172a',
},
boxShadow: {
'ww-soft': '0 4px 12px rgba(2,6,23,0.08)',
}
}
}
}

2. Example markup classes

- Root: <div className="min-h-screen bg-ww-bg text-ww-text font-sans">
- Top bar: "flex justify-between items-center bg-ww-card p-4 rounded-lg shadow-ww-soft"
- Search box: "bg-white/60 rounded-md px-3 py-2 outline-none"
- Dashboard: "mt-8 grid gap-6 grid-cols-1 lg:grid-cols-[1fr_320px]"
- Main card: "p-6 rounded-xl bg-gradient-to-br from-ww-accent1 to-ww-accent2 text-center"
- Info card: "bg-ww-card p-4 rounded-lg shadow-ww-soft text-center"
- Map section: "mt-4 rounded-lg overflow-hidden bg-gradient-to-b from-white/80 to-ww-card shadow-2xl h-80"

3. Dark mode

Enable Tailwind dark mode (class) and map colors to dark variants in the config or use `dark:` utilities.

4. Notes

- Use `@apply` in a component-level CSS/SCSS file to compose repeated sets of utility classes for elements like `.info-card`.
- Provide breakpoints `lg` and `md` to match the media queries in the original CSS.

If you want, I can generate a Tailwind-based React component file (`weather.tailwind.jsx`) that mirrors the current layout using these classes.
