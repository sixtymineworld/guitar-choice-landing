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
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const targetId = link.getAttribute('href');
    if (!targetId || targetId === '#') return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      history.pushState(null, '', targetId);
    }
  });
}

/**
 * Легке підтягування блоків (Scroll Reveal) через IntersectionObserver
 */
function initScrollReveal() {
  const elements = document.querySelectorAll(
    '.section-header, .feature, .testimonial, .contacts__container'
  );
  elements.forEach((el) => el.classList.add('reveal'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
  );

  elements.forEach((el) => observer.observe(el));
}

/**
 * Оновлення активної лінії під посиланням у навбарі під час скролу
 */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.header__link[href^="#"]');
  if (!sections.length || !links.length) return;

  const onScroll = () => {
    let currentId = '';
    const scrollPos = window.scrollY + 130;

    sections.forEach((sec) => {
      if (scrollPos >= sec.offsetTop) {
        currentId = `#${sec.id}`;
      }
    });

    links.forEach((l) => {
      if (l.getAttribute('href') === currentId) {
        l.classList.add('is-active');
      } else {
        l.classList.remove('is-active');
      }
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

start();
