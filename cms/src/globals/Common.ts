import type { GlobalConfig } from "payload";

export const Common: GlobalConfig = {
    slug: 'common',
    label: 'Налаштування',
    access: {read: () => true},
    fields: [
        {name: 'siteName', type: 'text', label: 'Назва сайту', required: true},
        {name: 'shopUrl', type: 'text', label: 'Посилання на магазин', defaultValue: 'http://127.0.0.1:8000'},
        {name: 'menu', type: 'array', label: 'Меню', fields:[
            {name: 'label', type: 'text', required: true},
            {name: 'link', type: 'text', required: true},
        ]},
        {name: 'footer', type: 'group', label: 'Футер', fields: [{name: 'text', type: 'text'}]}
    ]
}