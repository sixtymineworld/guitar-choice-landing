/**
 * Рендеринг блоку контактів шоуруму
 */
export function contacts({ anchor = 'contacts', title = 'Контакти', phone = '', email = '', address = '' }) {
  return `
    <section class="contacts" id="${anchor}">
      <h2 class="section-title">${title}</h2>
      <div class="contacts__card">
        <div class="contacts__info">
          <p>📍 <strong>Адреса:</strong> ${address}</p>
          <p>📞 <strong>Телефон:</strong> <a href="tel:${phone.replace(/[^\d+]/g, '')}" style="color: var(--color-accent);">${phone}</a></p>
          <p>✉️ <strong>Email:</strong> <a href="mailto:${email}" style="color: var(--color-accent);">${email}</a></p>
        </div>
        <div>
          <a href="http://127.0.0.1:8000" target="_blank" rel="noopener noreferrer" class="btn btn--primary" style="padding: 14px 28px;">
            Перейти в Django-магазин ↗
          </a>
        </div>
      </div>
    </section>
  `;
}
