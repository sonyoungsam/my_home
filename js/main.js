const CONTACT_ICONS = {
  email: '<svg viewBox="0 0 24 24"><path d="M2 4h20v16H2V4zm2 2v.01L12 13 20 6.01V6H4zm16 2.5l-8 6-8-6V18h16V8.5z"/></svg>',
  github:
    '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.58 2 12.17c0 4.43 2.87 8.18 6.84 9.5.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.56 2.36 1.11 2.93.85.09-.66.34-1.11.62-1.36-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.04a9.3 9.3 0 0 1 5 0c1.91-1.31 2.75-1.04 2.75-1.04.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.93.68 1.89v2.8c0 .27.18.59.69.49A10.02 10.02 0 0 0 22 12.17C22 6.58 17.52 2 12 2z"/></svg>',
  blog: '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.93 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14a8.1 8.1 0 0 1 0-4h3.38a16.6 16.6 0 0 0 0 4H4.26zm.81 2h2.95a15.65 15.65 0 0 0 1.38 3.56A8.03 8.03 0 0 1 5.07 16zm2.95-8H5.07a8.03 8.03 0 0 1 4.33-3.56A15.65 15.65 0 0 0 8.02 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.43 14H9.57a14.62 14.62 0 0 1 0-4h4.86a14.62 14.62 0 0 1 0 4zm.16 5.56A15.65 15.65 0 0 0 15.97 16h2.95a8.03 8.03 0 0 1-4.33 3.56zM16.36 14a16.6 16.6 0 0 0 0-4h3.38a8.1 8.1 0 0 1 0 4h-3.38z"/></svg>',
  linkedin:
    '<svg viewBox="0 0 24 24"><path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3 9h4v12H3V9zm6 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3-.02-2.97-1.82-2.97-1.82 0-2.1 1.42-2.1 2.88V21H9V9z"/></svg>'
};

const CONTACT_LABELS = { email: "Email", github: "GitHub", blog: "Blog", linkedin: "LinkedIn" };

function renderProfile(data) {
  document.getElementById("photo").src = data.photo;
  document.getElementById("name").textContent = data.name;
  document.getElementById("tagline").textContent = data.tagline;

  const contactEl = document.getElementById("contact");
  contactEl.innerHTML = Object.entries(data.contact || {})
    .map(([key, value]) => {
      const href = key === "email" ? `mailto:${value}` : value;
      const icon = CONTACT_ICONS[key] || "";
      const label = CONTACT_LABELS[key] || key;
      return `<li><a href="${href}" target="_blank" rel="noopener" aria-label="${label}">${icon}</a></li>`;
    })
    .join("");

  renderTimeline("career", data.career);
  renderTimeline("education", data.education);
}

function renderTimeline(elementId, items) {
  const el = document.getElementById(elementId);
  el.innerHTML = (items || [])
    .map(
      (item) => `
      <li>
        <span class="period">${item.period}</span>
        <span class="title">${item.title || item.school}</span>
        <span class="description">${item.description}</span>
      </li>
    `
    )
    .join("");
}

renderProfile(PROFILE_DATA);
