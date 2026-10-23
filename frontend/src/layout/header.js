/**
 * Генерація HTML шапки сайту
 * @param {Object} settings - { siteName, menu }
 */
export function header({ siteName, menu = [] }) {
  const menuHtml = menu
    .map(
      ({ label, link }) => `
        <a class="header__link" href="${link}">${label}</a>
      `
    )
    .join('');

  return `
    <header class="header">
      <a class="header__logo" href="/">🎸 ${siteName || 'Guitar Choice'}</a>
      <nav class="header__nav">
        ${menuHtml}
      </nav>
    </header>
  `;
}
