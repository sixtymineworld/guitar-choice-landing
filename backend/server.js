import express from "express";
import cors from 'cors';

import settings from "./data/common.json" with {type: 'json'};
import pages from "./data/pages.json" with {type: 'json'};


const app = express();
app.use(cors({
    origin: process.env.FRONTEND_URL || '*'
}));

const PORT = process.env.PORT || 3000;

const sendSettings = (req, res) => {
    res.json(settings);
};

app.get('/api/settings', sendSettings);
app.get('/api/common', sendSettings);

const sendPage = (req, res) => {
    const page = pages.find((p) => p.path === req.query.path);

    if(!page){
        return res.status(404).json({error: 'Page not found'})
    }

    res.json(page);
};

app.get('/api/pages', sendPage);
app.get('/api/page', sendPage);

app.listen(PORT, () => {
    console.log(`Server works on http://localhost:${PORT}`);
})