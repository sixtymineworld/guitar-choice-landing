export function header({ siteName, menu, shopUrl = 'http://127.0.0.1:8000' }) {
    return `
        <header class="header">
            <a class="header__logo" href="#hero">
                <span class="header__logo-brand">${siteName}</span>
                <span class="header__logo-tag">ATELIER & STORE</span>
            </a>
            <nav class="header__nav">
                ${menu.map(({ label, link }) => `
                    <a class="header__link" href="${link}">${label}</a>
                `).join('')}
                <a class="btn btn--header" href="${shopUrl}" target="_blank" rel="noopener noreferrer">
                    В магазин ↗
                </a>
            </nav>
        </header>
    `;
}
