export function contacts({ anchor, title, phone, email, address, schedule, shopUrl = 'http://127.0.0.1:8000' }) {
    return `
        <section class="contacts" id="${anchor}">
            <div class="contacts__container">
                <div class="contacts__header-col">
                    <span class="section-kicker">ЛЬВІВСЬКИЙ ШОУРУМ</span>
                    <h2 class="section-title">${title}</h2>
                    <p class="contacts__lead">
                        Запрошуємо на індивідуальне прослуховування гітар у лампові підсилювачі та відбудову інструмента під ваш стиль гри.
                    </p>
                </div>

                <div class="contacts__grid">
                    <div class="contacts__info-col">
                        <div class="contacts__item">
                            <span class="contacts__label">ЛОКАЦІЯ ШОУРУМУ</span>
                            <span class="contacts__val">${address}</span>
                        </div>
                        <div class="contacts__item">
                            <span class="contacts__label">ГОДИНИ РОБОТИ</span>
                            <span class="contacts__val">${schedule || 'Пн–Сб: 10:00 — 20:00 | Нд: 11:00 — 18:00'}</span>
                        </div>
                        <div class="contacts__item">
                            <span class="contacts__label">ПРЯМИЙ ЗВ'ЯЗОК</span>
                            <span class="contacts__val">
                                <a href="tel:${phone.replace(/[^\d+]/g, '')}">${phone}</a> • 
                                <a href="mailto:${email}">${email}</a>
                            </span>
                        </div>
                    </div>

                    <div class="contacts__action-col">
                        <div class="contacts__cta-card">
                            <span class="contacts__cta-tag">ПЕРЕХІДНИК У КАТАЛОГ</span>
                            <h3 class="contacts__cta-title">Обирайте з понад 500+ інструментів</h3>
                            <p class="contacts__cta-desc">Усі ціни, характеристики та наявність на складі доступні в нашому основному магазині.</p>
                            <a href="${shopUrl}" target="_blank" rel="noopener noreferrer" class="btn btn--primary btn--cta">
                                Відкрити магазин ↗
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}
