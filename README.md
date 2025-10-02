# 🚀 BTC/USDT Real-Time Price Tracker

A modern, responsive web application for tracking Bitcoin (BTC) to US Dollar (USDT) prices in real-time with beautiful visualizations and smooth animations.

## ✨ Features

### 📊 Real-Time Price Tracking

- **Live BTC/USDT prices** from Binance API
- **5-second updates** for real-time data
- **Automatic retry logic** for connection failures
- **Connection status indicator** showing API connectivity
- **Health check endpoints** for system monitoring

### 📈 Advanced Visual Analytics

- **24-hour price change** with color-coded indicators
- **Percentage change display** with trend colors
- **Mini line charts** with grid lines showing 24-hour price trends
- **Interactive trend indicators** with smooth animations
- **Theme-aware chart styling** for optimal visibility

### 🎨 Modern UI/UX

- **Light/Dark theme toggle** with Font Awesome icons
- **Responsive design** works on all devices
- **Smooth animations** and transitions throughout
- **Professional styling** with Bootstrap 5
- **Theme-aware color schemes** for optimal contrast

### 🔧 Enterprise-Grade Backend

- **Security middleware** (Helmet, CORS, CSP)
- **GZIP compression** for faster loading
- **Graceful error handling** and logging
- **Production-ready Express server**
- **Environment variable configuration**
- **API status monitoring endpoints**

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/real-time-price-tracker.git
   cd real-time-price-tracker
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**

   ```bash
   http://localhost:3000
   ```

### Production Deployment

```bash
# Set production environment
export NODE_ENV=production

# Start the server
npm start
```

## 📁 Project Structure

```text
real-time-price-tracker/
├── index.html          # Main HTML file
├── style.css           # Application styles
├── script.js           # Frontend JavaScript (components)
├── server.js           # Express server
├── package.json        # Dependencies and scripts
├── README.md           # This file
└── images/
    └── bitcoin-logo.gif # Bitcoin logo
```

## 🏗️ Architecture

### Frontend Components

- **PriceDisplay**: Formats and displays BTC price
- **ChangePercentDisplay**: Shows 24h percentage change
- **Change24hDisplay**: Shows 24h dollar change
- **MiniChart**: Renders small line charts
- **ConnectionStatusDisplay**: Shows API connection status
- **ThemeManager**: Handles light/dark theme switching

### Backend Features

- **Express.js server** with security middleware
- **CORS support** for cross-origin requests
- **Compression** for faster loading
- **Helmet** for security headers
- **Health check endpoints**

## 🎯 API Endpoints

### Application Endpoints

- `GET /` - Main price tracker application
- `GET /health` - System health check with uptime and version info
- `GET /api/status` - API status with feature information

### External APIs

- **Binance API**: Real-time cryptocurrency data
  - `GET /api/v3/ticker/24hr?symbol=BTCUSDT` - Current price and 24h stats
  - `GET /api/v3/klines?symbol=BTCUSDT&interval=1h&limit=24` - 24-hour price history

## 🎨 Customization

### Environment Variables

```bash
# Server configuration
PORT=3000                    # Server port
NODE_ENV=development         # Environment mode
ALLOWED_ORIGINS=http://localhost:3000,https://yourdomain.com  # CORS origins
```

### Styling

Modify `style.css` to customize:

- Color schemes
- Chart dimensions
- Animation timings
- Responsive breakpoints

### Configuration

Update `script.js` to modify:

- Update intervals
- API endpoints
- Retry logic
- Chart parameters

## 🔧 Development

### Available Scripts

```bash
npm run dev         # Start development server with auto-reload (nodemon)
npm run dev:simple  # Start simple development server (no auto-reload)
npm run dev:win     # Windows-optimized development server
npm start           # Start production server
npm test            # Run tests (when implemented)
```

### Code Style

- **ES6+ JavaScript** with modern syntax
- **Component-based architecture** for reusability
- **Bootstrap 5** for responsive design
- **Font Awesome** icons for consistency

## 🌟 Key Features Explained

### Real-Time Updates

- Fetches live data every 5 seconds
- Automatic retry on connection failures
- Visual connection status indicator

### Price Visualization

- **Green indicators**: Price increases
- **Red indicators**: Price decreases
- **Gray indicators**: No change
- **Smooth color transitions**

### Historical Charts

- 24-hour price trend lines
- Grid-based chart containers
- Responsive SVG graphics
- Automatic scaling

### Theme System

- Light/Dark mode toggle
- Smooth theme transitions
- Persistent theme preference
- Bootstrap theme integration

## 🛡️ Security & Performance

### Security Features

- **Helmet.js**: Security headers
- **CORS**: Controlled cross-origin access
- **CSP**: Content Security Policy
- **Input validation**: Safe data handling

### Performance Optimizations

- **GZIP compression**: Reduced bandwidth
- **Static file caching**: Faster reloads
- **Efficient rendering**: Optimized DOM updates
- **Lazy loading**: On-demand chart rendering

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Binance API** for real-time cryptocurrency data
- **Bootstrap** for responsive UI components
- **Font Awesome** for beautiful icons
- **Express.js** for robust server framework
