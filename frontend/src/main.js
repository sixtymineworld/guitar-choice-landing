import './styles/base.css';
import { getSettings, getPage } from './api.js';
import { header } from './layout/header.js';
import { footer } from './layout/footer.js';
import { renderBlocks } from './renderBlocks.js';

const app = document.querySelector('#app');

/**
 * Ініціалізація та життєвий цикл сторінки лендінгу
 */
async function start() {
  app.innerHTML = `
    <div style="padding: 60px 20px; text-align: center; color: var(--color-muted);">
      <p style="font-size: 1.2rem;">Завантаження Guitar Choice...</p>
    </div>
  `;

  try {
    // Асинхронне паралельне отримання налаштувань та контенту сторінки
    const [settings, page] = await Promise.all([
      getSettings(),
      getPage(location.pathname === '/' ? '/' : location.pathname),
    ]);

    // Встановлення заголовка вкладки
    document.title = `${page.title || 'Головна'} — ${settings.siteName || 'Guitar Choice'}`;

    // Динамічна збірка повної структури лендінгу
    app.innerHTML = `
      ${header(settings)}
      <main id="main-content">
        ${renderBlocks(page.blocks || [])}
      </main>
      ${footer(settings)}
    `;

    // Плавний перехід за якірними посиланнями
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetEl = document.querySelector(targetId);
          if (targetEl) {
            e.preventDefault();
            targetEl.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });

  } catch (error) {
    console.error('[Landing Error]:', error);
    app.innerHTML = `
      <div style="padding: 60px 20px; text-align: center;">
        <h2 style="color: var(--color-accent); margin-bottom: 12px;">Щось пішло не так</h2>
        <p style="color: var(--color-muted); margin-bottom: 24px;">Не вдалося завантажити дані: ${error.message}</p>
        <button class="btn btn--primary" onclick="window.location.reload()">Спробувати знову</button>
      </div>
    `;
  }
}

// Запуск додатка
start();
