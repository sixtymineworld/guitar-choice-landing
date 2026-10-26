export function testimonials({ anchor, title, items }) {
    return `
        <section class="testimonials" id="${anchor}">
            <div class="section-header">
                <span class="section-kicker">РЕАЛЬНИЙ ДОСВІД</span>
                <h2 class="section-title">${title}</h2>
            </div>
            <div class="testimonials__list">
            ${items.map(({ name, role, text }) => `
                <article class="testimonial">
                    <div class="testimonial__quote-mark">“</div>
                    <p class="testimonial__text">${text}</p>
                    <div class="testimonial__author">
                        <strong class="testimonial__name">${name}</strong>
                        ${role ? `<span class="testimonial__role">${role}</span>` : ''}
                    </div>
                </article>
            `).join('')}
            </div>
        </section>
    `;
}
