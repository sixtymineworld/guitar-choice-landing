/**
 * Генерація HTML підвалу сайту
 * @param {Object} settings - { footer }
 */
export function footer({ footer: footerData = {} }) {
  const text = footerData.text || 'Guitar Choice — офіційні гітари та обладнання.';

  return `
    <footer class="footer" style="padding: 40px 0; border-top: 1px solid var(--color-line); margin-top: 60px; color: var(--color-muted); font-size: 0.95rem;">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px;">
        <div>
          <strong style="color: var(--color-text);">🎸 Guitar Choice</strong>
          <p style="margin-top: 8px; max-width: 500px;">${text}</p>
        </div>
        <div>
          <a href="http://127.0.0.1:8000" target="_blank" rel="noopener noreferrer" class="btn btn--primary" style="padding: 10px 20px; font-size: 0.9rem;">
            Відкрити Django-магазин ↗
          </a>
        </div>
      </div>
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(0,0,0,0.06); text-align: center; font-size: 0.85rem;">
        © ${new Date().getFullYear()} Guitar Choice. Усі права захищено.
      </div>
    </footer>
  `;
}
