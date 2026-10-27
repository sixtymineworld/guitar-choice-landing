const defaultUrl = typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')
  ? 'http://localhost:3000'
  : 'https://guitar-choice-landing.vercel.app';

const rawUrl = import.meta.env.VITE_API_URL || defaultUrl;
const API_URL = rawUrl.replace(/\/+$/, '');

async function getJson(path) {
  const url = `${API_URL}${path}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`HTTP status: ${res.status} (url: ${url})`);
  }

  return res.json();
}

export function getSettings() {
  return getJson('/api/common');
}

export function getPage(path) {
  return getJson(`/api/page?path=${encodeURIComponent(path)}`);
}
