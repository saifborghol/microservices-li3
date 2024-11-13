const express = require('express');
const app = express();
const userRoutes = require('./src/routes/userRoutes');
const connectDB = require('./config/db');
connectDB();
app.use(express.json());
app.use('/users', userRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`User Service is running on port ${PORT}`);
});