import './hero.css';

/**
 * Рендеринг блоку Hero (перший екран)
 */
export function hero({ anchor = 'hero', badge = '', title = '', subtitle = '', image = {}, buttons = [] }) {
  const { src = '', alt = '' } = image;

  const buttonsHtml = buttons
    .map(
      ({ text, link, variant }) => `
        <a class="btn btn--${variant}" href="${link}" ${link.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''}>
          ${text} ${link.startsWith('http') ? '↗' : ''}
        </a>
      `
    )
    .join('');

  return `
    <section class="hero" id="${anchor}">
      <div class="hero__content">
        ${badge ? `<span class="hero__badge">⚡ ${badge}</span>` : ''}
        <h1 class="hero__title">${title}</h1>
        <p class="hero__subtitle">${subtitle}</p>
        <div class="hero__actions">
          ${buttonsHtml}
        </div>
      </div>
      ${src ? `<img class="hero__image" src="${src}" alt="${alt}">` : ''}
    </section>
  `;
}
