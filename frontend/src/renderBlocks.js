import { hero } from "./blocks/hero.js";
import { features } from "./blocks/features.js";
import { testimonials } from "./blocks/testimonials.js";
import { contacts } from "./blocks/contacts.js";

const renderers = { hero, features, testimonials, contacts };

export function renderBlocks(blocks) {
    return blocks.map((block) => {
        const render = renderers[block.type];

        if (!render) {
            console.warn(`no block ${block.type}`);
            return '';
        }

        return render(block);
    }).join('');
}
