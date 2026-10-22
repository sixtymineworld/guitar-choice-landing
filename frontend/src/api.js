const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

async function getJson(path) {
  const res = await fetch(`${API_URL}${path}`);

  if (!res.ok) {
    throw new Error(`HTTP status: ${res.status}`);
  }

  return res.json();
}

/**
 * Отримання загальних налаштувань сайту (меню, назва, футер)
 */
export function getSettings() {
  return getJson('/api/common');
}

/**
 * Отримання структури та блоків сторінки за її шляхом
 * @param {string} path - наприклад '/'
 */
export function getPage(path) {
  return getJson(`/api/page?path=${encodeURIComponent(path)}`);
}
