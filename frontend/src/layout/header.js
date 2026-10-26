/**
 * Генерація HTML шапки сайту з якірною навігацією для односторінкового лендінгу
 * @param {Object} settings - { siteName, menu, shopUrl }
 */
export function header({ siteName, menu = [], shopUrl = 'http://127.0.0.1:8000' }) {
  const menuHtml = menu
    .map(
      ({ label, link }) => `
        <a class="header__link" href="${link}">${label}</a>
      `
    )
    .join('');

  return `
    <header class="header">
      <a class="header__logo" href="#hero">🎸 ${siteName || 'Guitar Choice'}</a>
      <nav class="header__nav" style="display: flex; align-items: center; gap: 20px;">
        ${menuHtml}
        ${shopUrl ? `<a class="btn btn--primary" href="${shopUrl}" target="_blank" rel="noopener noreferrer" style="padding: 8px 18px; font-size: 0.9rem; margin-left: 10px;">В магазин ↗</a>` : ''}
      </nav>
    </header>
  `;
}
