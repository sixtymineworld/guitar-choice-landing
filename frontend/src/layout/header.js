export function header({ siteName, menu, shopUrl = 'https://guitar-choice.onrender.com/' }) {
    return `
        <header class="header">
            <a class="header__logo" href="#hero">
                <span class="header__logo-brand">${siteName}</span>
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
