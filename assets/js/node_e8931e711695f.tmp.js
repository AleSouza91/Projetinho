const express = require('express');
const app = express();

app.get('/datetime', (req, res) => {
    const now = new Date();
    const dateTime = now.toISOString();
    res.json({
        datetime: dateTime
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
