function projectCard(p) {
  return `
    <a class="card" href="projects/${p.slug}.html">
      <img src="${p.image.replace('../', '')}" alt="${p.title}">
      <div class="card-body">
        <div class="eyebrow">${p.eyebrow}</div>
        <h3>${p.title}</h3>
        <p>${p.summary}</p>
        <span class="btn">View case study</span>
        <div class="tags">
          ${p.stack.slice(0, 5).map((t) => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>
    </a>
  `;
}

function renderHome() {
  const el = document.querySelector('#project-grid');
  if (!el) return;
  el.innerHTML = projects.map(projectCard).join('');
}

renderHome();
