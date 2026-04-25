const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const telemetryRoutes = require('./routes/telemetry');
const leadRoutes = require('./routes/leads');

app.use('/api/telemetry', telemetryRoutes);
app.use('/api/leads', leadRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'ok', message: 'LaunchPad backend is running.' });
});

// Start server
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

// Export for Vercel serverless
module.exports = app;
