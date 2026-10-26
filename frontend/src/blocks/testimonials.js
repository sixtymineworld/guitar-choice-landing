export function testimonials({ anchor, title, items }) {
    return `
        <section class="testimonials" id="${anchor}">
            <h2 class="section-title">${title}</h2>
            <div class="testimonials__list">
            ${items.map(({ name, text, rating }) => `
                <article class="testimonial">
                    <span class="testimonial__rating">${'★'.repeat(rating)}</span>
                    <p class="testimonial__text">${text}</p>
                    <span class="testimonial__name">${name}</span>
                </article>
            `).join('')}
            </div>
        </section>
    `;
}
