export function footer({ siteName, footer: { text }, shopUrl = 'http://127.0.0.1:8000' }) {
    const year = new Date().getFullYear();

    return `
        <footer class="footer">
            <div class="footer__inner">
                <div class="footer__brand-col">
                    <div class="footer__logo">${siteName}</div>
                    <p class="footer__text">${text}</p>
                    <div class="footer__badge">OFFICIAL STORE & ATELIER</div>
                </div>

                <div class="footer__nav-col">
                    <span class="footer__col-title">НАВІГАЦІЯ</span>
                    <a href="#hero" class="footer__link">Головна</a>
                    <a href="#features" class="footer__link">Майстерня та стандарти</a>
                    <a href="#testimonials" class="footer__link">Досвід музикантів</a>
                    <a href="#contacts" class="footer__link">Шоурум у Львові</a>
                </div>

                <div class="footer__nav-col">
                    <span class="footer__col-title">ОСНОВНИЙ МАГАЗИН</span>
                    <a href="${shopUrl}" target="_blank" rel="noopener noreferrer" class="footer__link">Каталог інструментів ↗</a>
                    <a href="${shopUrl}" target="_blank" rel="noopener noreferrer" class="footer__link">Акустичні та класичні ↗</a>
                    <a href="${shopUrl}" target="_blank" rel="noopener noreferrer" class="footer__link">Електрогітари та бас ↗</a>
                    <a href="${shopUrl}" target="_blank" rel="noopener noreferrer" class="footer__link">Гарантійне обслуговування ↗</a>
                </div>
            </div>

            <div class="footer__bottom">
                <span>© ${year} ${siteName}. Спеціалізований шоурум та сервіс гітар.</span>
                <span class="footer__credit">CRAFTED FOR MUSICIANS</span>
            </div>
        </footer>
    `;
}
