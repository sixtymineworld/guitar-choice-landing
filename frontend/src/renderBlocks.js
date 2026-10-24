import { hero } from './blocks/hero.js';
import { features } from './blocks/features.js';
import { testimonials } from './blocks/testimonials.js';
import { contacts } from './blocks/contacts.js';

/**
 * Реєстр шаблонів блоків за їхнім type
 */
const renderers = {
  hero,
  features,
  testimonials,
  contacts,
};

/**
 * Рендеринг масиву блоків сторінки
 * @param {Array} blocks
 * @returns {string} HTML
 */
export function renderBlocks(blocks = []) {
  return blocks
    .map((block) => {
      const render = renderers[block.type];

      if (!render) {
        console.warn(`[renderBlocks] Не знайдено шаблон для блоку: ${block.type}`);
        return '';
      }

      return render(block);
    })
    .join('');
}
