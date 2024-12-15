const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const swaggerConfig = require('./swagger/swaggerConfig');

dotenv.config();
connectDB();

const app = express();

app.use(express.json());

// Import routes
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// Swagger setup
swaggerConfig(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
