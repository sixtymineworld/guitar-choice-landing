import type { Endpoint, PayloadRequest } from "payload";

function cleanerToBlock(block: Record<string, any>) {
    const { id, blockName, blockType, image, ...rest } = block;

    const clean: Record<string, any> = { type: blockType, ...rest };

    if (image && typeof image === 'object') {
        clean.image = { src: image.url, alt: image.alt }
    }

    return clean;
}

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
};

export const commonEndpoint: Endpoint = {
    path: '/common',
    method: 'get',
    handler: async (req: PayloadRequest) => {
        const common = await req.payload.findGlobal({ slug: 'common', depth: 1 })

        return Response.json({
            siteName: common.siteName,
            shopUrl: common.shopUrl ?? 'https://guitar-choice.onrender.com/',
            menu: (common.menu ?? []).map(({ label, link }: any) => ({ label, link })),
            footer: { text: common.footer?.text ?? '' }
        }, { headers: corsHeaders })
    }
}

export const pageEndpoint: Endpoint = {

    path: '/page',
    method: 'get',
    handler: async (req: PayloadRequest) => {

        const path = req.query.path

        const result = await req.payload.find({
            collection: 'pages',
            where: { path: { equals: path } },
            depth: 2,
            limit: 1
        })

        const page = result.docs[0];

        if (!page){
            return Response.json({error: 'Сторінку не знайдено'}, { status: 404, headers: corsHeaders })
        }

        return Response.json({
            path: page.path,
            title: page.title,
            blocks: (page.blocks ?? []).map(cleanerToBlock)
        }, { headers: corsHeaders })
    }
}

export const seedEndpoint: Endpoint = {
    path: '/seed',
    method: 'get',
    handler: async (req: PayloadRequest) => {
        await req.payload.updateGlobal({
            slug: 'common',
            data: {
                siteName: 'Guitar Choice',
                shopUrl: 'https://guitar-choice.onrender.com/',
                menu: [
                    { label: 'Головна', link: '#hero' },
                    { label: 'Переваги', link: '#features' },
                    { label: 'Відгуки', link: '#testimonials' },
                    { label: 'Контакти', link: '#contacts' }
                ],
                footer: {
                    text: 'Guitar Choice - Система підтримки вибору, конфігурування та замовлення гітар. Обирайте інструмент, що звучить по-вашому.'
                }
            }
        });

        const existingPages = await req.payload.find({
            collection: 'pages',
            where: { path: { equals: '/' } }
        });

        const pageData = {
            path: '/',
            title: 'Головна',
            blocks: [
                {
                    blockType: 'hero',
                    anchor: 'hero',
                    badge: 'Система підтримки вибору',
                    title: 'Знайдіть гітару, що звучить як ви.',
                    subtitle: 'Guitar Choice — спеціалізований інтернет-магазин та сервіс підбору гітар. Обирай акустику, класику чи електрогітару та переходь у наш магазин за найкращою ціною.',
                    buttons: [
                        { text: 'Перейти в магазин', link: 'https://guitar-choice.onrender.com/', variant: 'primary' },
                        { text: 'Чому ми', link: '#features', variant: 'secondary' }
                    ]
                },
                {
                    blockType: 'features',
                    anchor: 'features',
                    title: 'Стандарти майстерні Guitar Choice',
                    items: [
                        {
                            icon: '✿',
                            title: 'Звузьте вибір',
                            text: 'Фільтруйте моделі за типом та ключовими характеристиками.'
                        },
                        {
                            icon: '⇧',
                            title: 'Перевірте деталі',
                            text: 'Відкрийте картку, щоб оцінити специфікацію й доступність.'
                        },
                        {
                            icon: '✉︎',
                            title: 'Замовте консультацію',
                            text: 'Ми допоможемо скласти фінальну конфігурацію.'
                        }
                    ]
                },
                {
                    blockType: 'testimonials',
                    anchor: 'testimonials',
                    title: 'Досвід музикантів',
                    items: [
                        {
                            name: 'Максим Ковальчук',
                            role: 'Гітарист гурту «Океани», Львів',
                            text: 'Замовляв Stratocaster через каталог. Гітара приїхала повністю відбудована, струни низько над грифом, стрій тримає залізобетонно одразу з коробки.',
                            rating: 5
                        },
                        {
                            name: 'Дарина Мельник',
                            role: 'Викладач акустичної гітари',
                            text: "Обирала класичну гітару для учениці. Майстер провів ретельну перевірку геометрії деки та натягнув м'які струни Savarez. Рівень сервісу вражає.",
                            rating: 5
                        },
                        {
                            name: 'Ігор Савченко',
                            role: 'Сесійний музикант',
                            text: 'Швидка відправка в день замовлення, надійне пакування в посилений бокс. Дуже круто, що сайт напряму веде в каталог магазину з актуальною наявністю.',
                            rating: 5
                        }
                    ]
                },
                {
                    blockType: 'contacts',
                    anchor: 'contacts',
                    title: 'Шоурум та Майстерня',
                    phone: '+38 (044) 123-45-67',
                    email: 'guitarchoice@mail.com',
                    address: 'м. Львів, вул. Дорога Кривчацька, 17А',
                    schedule: 'Пн–Пн: 10:00 — 19:00 | Сб: 11:00 — 16:00'
                }
            ]
        };

        if (existingPages.totalDocs > 0) {
            await req.payload.update({
                collection: 'pages',
                id: existingPages.docs[0].id,
                data: pageData as any
            });
        } else {
            await req.payload.create({
                collection: 'pages',
                data: pageData as any
            });
        }

        return Response.json({ success: true, message: 'Дані успішно завантажено в Neon PostgreSQL!' });
    }
};