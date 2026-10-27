import './hero.css';

export function hero({ anchor, badge, title, subtitle, buttons }) {
    return `
        <section class="hero" id="${anchor}">
            <div class="hero__content">
                <span class="hero__badge">${badge}</span>
                <h1 class="hero__title">${title}</h1>
                <p class="hero__subtitle">${subtitle}</p>
                <div class="hero__actions">
                    ${buttons.map(({ text, link, variant }) => `
                        <a class="btn btn--${variant}" href="${link}">${text}</a>
                    `).join('')}
                </div>
            </div>
            <div class="hero__3d-wrapper" id="hero-3d">
                <model-viewer
                    id="guitar-3d-model"
                    src="/media/guitar.glb?v=2"
                    alt="Справжня 3D Модель Електрогітари"
                    camera-controls
                    disable-zoom
                    interaction-prompt="none"
                    shadow-intensity="1.8"
                    shadow-softness="0.8"
                    exposure="1.25"
                    camera-orbit="0deg 80deg 105%"
                    style="width: 100%; outline: none; background: transparent;"
                ></model-viewer>
            </div>
        </section>
    `;
}

/**
 * Інтерактивне відстеження курсору для 3D-гітари
 */
export function initHero3D() {
    const viewer = document.querySelector('#guitar-3d-model');
    const heroSection = document.querySelector('.hero');
    if (!viewer || !heroSection) return;

    let isInteracting = false;
    viewer.addEventListener('pointerdown', () => { isInteracting = true; });
    window.addEventListener('pointerup', () => { isInteracting = false; });

    const baseTheta = 0;
    const basePhi = 80;

    heroSection.addEventListener('mousemove', (e) => {
        if (isInteracting) return;
        const rect = heroSection.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        viewer.cameraOrbit = `${baseTheta + x * 40}deg ${basePhi + y * 20}deg 105%`;
    });

    heroSection.addEventListener('mouseleave', () => {
        if (isInteracting) return;
        viewer.cameraOrbit = `${baseTheta}deg ${basePhi}deg 105%`;
    });
}
