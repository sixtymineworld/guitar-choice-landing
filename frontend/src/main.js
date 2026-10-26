import './styles/base.css';
import { getSettings, getPage } from './api.js';
import { header } from './layout/header.js';
import { footer } from './layout/footer.js';
import { renderBlocks } from './renderBlocks.js';

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
  } catch (error) {
    app.textContent = `Something went wrong: ${error.message}`;
  }
}

start();
