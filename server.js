const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

let users = [];

app.get('/users', (req, res) => {
    res.json(users);
});

app.post('/users', (req, res) => {
    const { name, email, age } = req.body;
    if (!name || !email || !age) {
        return res.status(400).json({ message: 'الرجاء إدخال جميع البيانات (name, email, age)' });
    }
    
    const newUser = { id: users.length + 1, name, email, age };
    users.push(newUser);
    res.status(201).json(newUser);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
