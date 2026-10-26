import './features.css';

export function features({ anchor, title, items }) {
    return `
        <section class="features" id="${anchor}">
            <div class="section-header">
                <span class="section-kicker">МАЙСТЕРНЯ & СЕРВІС</span>
                <h2 class="section-title">${title}</h2>
            </div>
            <div class="features__grid">
            ${items.map(({ icon, title, text }) => `
                <article class="feature">
                    <span class="feature__index">${icon}</span>
                    <h3 class="feature__title">${title}</h3>
                    <p class="feature__text">${text}</p>
                </article>
            `).join('')}
            </div>
        </section>
    `;
}
