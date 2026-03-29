// main.js — rbomfim.pro

function renderHeader() {
  document.querySelector('header').innerHTML = `
    <p class="cmd" aria-hidden="true">$ whoami</p>
    <h1>${PROFILE.nome}</h1>
    <p class="subtitle">${PROFILE.titulo}</p>
    <p class="bio">${PROFILE.bio}</p>
  `;
}

function renderStack() {
  document.getElementById('stack-grid').innerHTML = Object.entries(PROFILE.stack)
    .map(([label, tags]) => `
      <div class="stack-card">
        <p class="stack-label">${label}</p>
        <ul class="tags" role="list">
          ${tags.map(t => `<li class="tag">${t}</li>`).join('')}
        </ul>
      </div>
    `).join('');
}

function renderExperiencia() {
  const items = PROFILE.experiencia.map((exp, i) => `
    <div class="timeline-item">
      <div class="timeline-dot ${i === 0 ? 'active' : 'past'}" aria-hidden="true"></div>
      <p class="timeline-title">${exp.cargo}</p>
      <p class="timeline-company${i > 0 ? ' timeline-company--past' : ''}">${exp.empresa}</p>
      <p class="timeline-date">${exp.periodo}</p>
    </div>
  `).join('');
  document.getElementById('timeline-container').innerHTML =
    `<div class="timeline-line" aria-hidden="true"></div>${items}`;
}

function renderCertificacoes() {
  document.getElementById('certs-grid').innerHTML = PROFILE.certificacoes
    .map(cert => `
      <div class="cert-card">
        <p class="cert-label">CERTIFIED</p>
        <p class="cert-name">${cert}</p>
      </div>
    `).join('');
}

function renderContato() {
  document.getElementById('contact-row').innerHTML = `
    <a href="mailto:${PROFILE.email}">${PROFILE.email}</a>
    <span class="separator" aria-hidden="true">|</span>
    <a href="https://linkedin.com/in/${PROFILE.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    <span class="separator" aria-hidden="true">|</span>
    <a href="https://github.com/${PROFILE.github}" target="_blank" rel="noopener noreferrer">GitHub</a>
  `;
}

renderHeader();
renderStack();
renderExperiencia();
renderCertificacoes();
renderContato();
