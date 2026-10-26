export function contacts({ anchor, title, phone, email, address }) {
    return `
        <section class="contacts" id="${anchor}">
            <h2 class="section-title">${title}</h2>
            <div class="contacts__card">
                <div class="contacts__info">
                    <p><strong>Адреса:</strong> ${address}</p>
                    <p><strong>Телефон:</strong> ${phone}</p>
                    <p><strong>Email:</strong> ${email}</p>
                </div>
            </div>
        </section>
    `;
}
