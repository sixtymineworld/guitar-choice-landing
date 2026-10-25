/**
 * Рендеринг блоку відгуків гітаристів
 */
export function testimonials({ anchor = 'testimonials', title = '', items = [] }) {
  const itemsHtml = items
    .map(
      ({ name, text, rating = 5 }) => `
        <article class="testimonial">
          <div class="testimonial__rating">${'★'.repeat(rating)}</div>
          <p class="testimonial__text">"${text}"</p>
          <div class="testimonial__name">— ${name}</div>
        </article>
      `
    )
    .join('');

  return `
    <section class="testimonials" id="${anchor}">
      <h2 class="section-title">${title}</h2>
      <div class="testimonials__list">
        ${itemsHtml}
      </div>
    </section>
  `;
}

