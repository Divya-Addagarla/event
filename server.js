const express = require('express');
const admin = require('firebase-admin');
const path = require('path');
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());

// --- ROUTES ---
app.get('/', (req, res) => res.render('login'));
app.get('/admin', (req, res) => res.render('admin-dashboard'));
app.get('/user', (req, res) => res.render('user-dashboard'));
app.get('/registered-events', (req, res) => res.render('registered-events'));

// --- ADMIN API ENDPOINTS ---
app.post('/api/delete-event', async (req, res) => {
    try {
        await db.collection('events').doc(req.body.eventId).delete();
        res.status(200).send({ message: "Deleted" });
    } catch (e) { res.status(500).send(e); }
});

app.post('/api/update-event', async (req, res) => {
    try {
        const { id, ...data } = req.body;
        await db.collection('events').doc(id).update(data);
        res.send({ message: "Updated" });
    } catch (e) { res.status(500).send(e); }
});

app.listen(3000, () => console.log('Server: http://localhost:3000'));