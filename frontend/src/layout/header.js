export function header({ siteName, menu }) {
    return `
        <header class="header">
            <a class="header__logo" href="#hero">${siteName}</a>
            <nav class="header__nav">
            ${menu.map(({ label, link }) => 
                `
                <a class="header__link" href="${link}">${label}</a>
                `
            ).join('')}
            </nav>
        </header>
    `;
}
