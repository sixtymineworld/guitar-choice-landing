import express from "express";
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(cors({
    origin: process.env.FRONTEND_URL || '*'
}));

const PORT = process.env.PORT || 3000;

function readJsonFile(filename) {
    const filePath = path.join(__dirname, 'data', filename);
    const content = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(content);
}

const sendSettings = (req, res) => {
    try {
        const settings = readJsonFile('common.json');
        res.json(settings);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

app.get('/api/settings', sendSettings);
app.get('/api/common', sendSettings);

const sendPage = (req, res) => {
    try {
        const pages = readJsonFile('pages.json');
        const page = pages.find((p) => p.path === req.query.path);

        if(!page){
            return res.status(404).json({error: 'Page not found'});
        }

        res.json(page);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

app.get('/api/pages', sendPage);
app.get('/api/page', sendPage);

app.listen(PORT, () => {
    console.log(`Server works on http://localhost:${PORT}`);
});