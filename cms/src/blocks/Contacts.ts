import { Block } from 'payload';

export const Contacts: Block = {
    slug: 'contacts',
    labels: { singular: 'Контакти', plural: 'Контакти' },
    fields: [
        { name: 'anchor', type: 'text', label: 'ID секції' },
        { name: 'title', type: 'text', label: 'Заголовок секції', required: true },
        { name: 'phone', type: 'text', label: 'Телефон', required: true },
        { name: 'email', type: 'text', label: 'Email', required: true },
        { name: 'address', type: 'text', label: 'Адреса шоуруму', required: true },
        { name: 'schedule', type: 'text', label: 'Години роботи' },
    ],
};

