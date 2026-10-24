import './features.css';

/**
 * Рендеринг блоку переваг Guitar Choice
 */
export function features({ anchor = 'features', title = '', items = [] }) {
  const itemsHtml = items
    .map(
      ({ icon, title: itemTitle, text }) => `
        <article class="feature">
          <span class="feature__icon">${icon}</span>
          <h3 class="feature__title">${itemTitle}</h3>
          <p class="feature__text">${text}</p>
        </article>
      `
    )
    .join('');

  return `
    <section class="features" id="${anchor}">
      <h2 class="section-title">${title}</h2>
      <div class="features__grid">
        ${itemsHtml}
      </div>
    </section>
  `;
}
