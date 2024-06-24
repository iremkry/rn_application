const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
const cors = require('cors'); // cors paketini ekleyin

// .env dosyasını yükle
dotenv.config();

// Express uygulamasını oluşturma
const app = express();
app.use(bodyParser.json());
app.use(cors()); // cors middleware'ini kullanın

// Veritabanı bağlantısı
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
    }
);

// Kullanıcı modeli tanımlama
const User = sequelize.define('user', {
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

// Veritabanını senkronize etme
sequelize.sync().then(() => {
    console.log('Veritabanı senkronize edildi.');
});

// Login endpoint
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username, password } });
    if (user) {
        res.json({ message: 'Başarılı giriş' });
    } else {
        res.status(401).json({ message: 'Hatalı kullanıcı adı veya şifre' });
    }
});

// Sunucuyu başlatma
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor.`);
});
