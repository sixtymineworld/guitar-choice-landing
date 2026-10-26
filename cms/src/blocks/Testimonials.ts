import { Block } from 'payload';

export const Testimonials: Block = {
    slug: 'testimonials',
    labels: { singular: 'Відгуки', plural: 'Відгуки' },
    fields: [
        { name: 'anchor', type: 'text', label: 'ID секції' },
        { name: 'title', type: 'text', label: 'Заголовок секції', required: true },
        {
            name: 'items',
            type: 'array',
            label: 'Список відгуків',
            fields: [
                { name: 'name', type: 'text', label: "Ім'я автора", required: true },
                { name: 'role', type: 'text', label: 'Роль / Професія' },
                { name: 'text', type: 'textarea', label: 'Текст відгуку', required: true },
                { name: 'rating', type: 'number', label: 'Оцінка (1-5)', min: 1, max: 5, defaultValue: 5 },
            ],
        },
    ],
};

