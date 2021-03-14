const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(require('./routes'));

// Use this to log mongo queries being executed!
mongoose.set('debug', true);

mongoose.connect(process.env.MONGOOSE_URI || 'mongodb://localhost/pizza-hunt', {
    userFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
