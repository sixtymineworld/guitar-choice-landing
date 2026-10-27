import './styles/base.css';
import { getSettings, getPage } from './api.js';
import { header } from './layout/header.js';
import { footer } from './layout/footer.js';
import { renderBlocks } from './renderBlocks.js';
import { initHero3D } from './blocks/hero.js';

const app = document.querySelector('#app');

async function start() {
  app.textContent = 'Loading...';
  try {
    const [settings, page] = await Promise.all([
      getSettings(),
      getPage(location.pathname),
    ]);
    document.title = `${page.title} - ${settings.siteName}`;

    app.innerHTML = `
    ${header(settings)}
    <main>${renderBlocks(page.blocks)}</main>
    ${footer(settings)}
    `;
    // Ініціалізація інтерактивної 3D-моделі гітари
    initHero3D();

    // Плавний скрол по якірних посиланнях
    initSmoothScroll();

    // Плавне підтягування блоків при скролі
    initScrollReveal();

    // Підсвітка активного пункту меню при скролі
    initActiveNav();

  } catch (error) {
    app.textContent = `Something went wrong: ${error.message}`;
  }
}
/**
 * Плавний перехід по кліку на навігаційні якорі
 */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach((link) => {
        link.addEventListener('click', () => {
            const id = link.getAttribute('href');
            const section = document.querySelector(id);

            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}
/**
 * Легке підтягування блоків (Scroll Reveal) через IntersectionObserver
 */
function initScrollReveal() {
    const elements = document.querySelectorAll('.section-header, .feature, .testimonial, .contacts__container');

    elements.forEach((el) => {
        el.classList.add('reveal');
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    });

    elements.forEach((el) => {
        observer.observe(el);
    });
}
/**
 * Оновлення активної лінії під посиланням у навбарі під час скролу
 */
function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const links = document.querySelectorAll('.header__link[href^="#"]');

    function onScroll() {
        let currentId = '';
        sections.forEach((section) => {
            if (window.scrollY + 130 >= section.offsetTop) {
                currentId = '#' + section.id;
            }
        });
        links.forEach((link) => {
            link.classList.remove('is-active');

            if (link.getAttribute('href') === currentId) {
                link.classList.add('is-active');
            }
        });
    }

    window.addEventListener('scroll', onScroll);
    onScroll();
}


start();