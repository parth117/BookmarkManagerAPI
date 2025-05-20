const express = require('express');
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 7007;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));