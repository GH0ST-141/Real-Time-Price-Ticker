const express = require('express');
const path = require('path');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');

// Environment variables with defaults
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

// Create Express application
const app = express();

// Security middleware
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            styleSrc: ["'self'", "'unsafe-inline'", "https://cdn.jsdelivr.net", "https://cdnjs.cloudflare.com"],
            scriptSrc: ["'self'", "https://cdn.jsdelivr.net", "https://cdnjs.cloudflare.com"],
            imgSrc: ["'self'", "data:", "https://cdn.jsdelivr.net"],
            fontSrc: ["'self'", "https://cdnjs.cloudflare.com"],
            connectSrc: ["'self'", "https://api.binance.com"]
        }
    },
    crossOriginEmbedderPolicy: false
}));

// CORS configuration
app.use(cors({
    origin: process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : ['http://localhost:3000', 'http://127.0.0.1:3000'],
    credentials: true
}));

// Compression middleware
app.use(compression({
    level: 6,
    threshold: 1024
}));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Static files with caching
const staticOptions = {
    maxAge: NODE_ENV === 'production' ? '1d' : 0,
    etag: true,
    lastModified: true
};
app.use(express.static(path.join(__dirname), staticOptions));

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        environment: NODE_ENV,
        version: process.version
    });
});

// API status endpoint
app.get('/api/status', (req, res) => {
    res.json({
        server: 'running',
        timestamp: new Date().toISOString(),
        features: ['price-tracking', 'historical-data', 'theme-switching']
    });
});

// Serve index.html for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'), {
        maxAge: NODE_ENV === 'production' ? '1h' : 0
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        error: 'Not Found',
        message: 'The requested resource was not found on this server',
        path: req.path
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Server Error:', err);

    // Don't leak error details in production
    const isDevelopment = NODE_ENV === 'development';

    res.status(err.status || 500).json({
        error: isDevelopment ? err.message : 'Internal Server Error',
        ...(isDevelopment && { stack: err.stack }),
        timestamp: new Date().toISOString()
    });
});

// Graceful shutdown handling
const gracefulShutdown = () => {
    console.log('Shutting down gracefully...');
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
};

process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    process.exit(1);
});

// Start server
const server = app.listen(PORT, () => {
    console.log(`🚀 BTC/USDT Price Tracker Server`);
    console.log(`📍 Running at: http://localhost:${PORT}`);
    console.log(`🌍 Environment: ${NODE_ENV}`);
    console.log(`🔒 Security: Helmet enabled`);
    console.log(`🗜️  Compression: Enabled`);
    console.log(`🏥 Health check: http://localhost:${PORT}/health`);
    console.log(`📊 API status: http://localhost:${PORT}/api/status`);

    if (process.platform === 'win32') {
        console.log(`\n🛑 To stop the server: Press Ctrl+C (instant shutdown on Windows)`);
        console.log(`💡 Server will cleanup resources before exiting`);
    } else {
        console.log(`\n🛑 To stop the server: Press Ctrl+C (graceful shutdown)`);
        console.log(`💡 Server will cleanup resources before exiting`);
    }
});

// Handle server startup errors
server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`❌ Port ${PORT} is already in use`);
        console.log(`💡 Try using a different port: PORT=3001 npm run dev`);
    } else {
        console.error('❌ Server startup error:', err);
    }
    process.exit(1);
});

module.exports = app;