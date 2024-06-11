const express = require('express');
const app = express();
const port = 3000;


// Генерація випадкового масиву з моделями телефонів
function generateRandomPhoneModels() {
    const phoneModels = [
        "iPhone 12", "Samsung Galaxy S21", "Google Pixel 6", "OnePlus 9",
        "Xiaomi Mi 11", "Sony Xperia 5", "Huawei P40", "Nokia 8.3",
        "Motorola Edge", "Oppo Find X3", "Vivo X60", "Asus ROG Phone 5"
    ];

    // Перемішування масиву моделей телефонів для випадковості
    for (let i = phoneModels.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [phoneModels[i], phoneModels[j]] = [phoneModels[j], phoneModels[i]];
    }

    return phoneModels;
}

// Функція для сортування масиву по алфавіту
function sortPhoneModelsAlphabetically(phoneModels) {
    return phoneModels.sort();
}

app.get('/', (req, res) => {
    const randomPhoneModels = generateRandomPhoneModels();
    const sortedPhoneModels = sortPhoneModelsAlphabetically(randomPhoneModels);
    res.send(`
        <h1>Sorted Phone Models</h1>
        <ul>
            ${sortedPhoneModels.map(model => `<li>${model}</li>`).join('')}
        </ul>
    `);
});

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`);
});
