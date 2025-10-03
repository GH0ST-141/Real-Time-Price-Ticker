# 🚀 BTC/USDT Real-Time Price Ticker

A modern, responsive web application for tracking Bitcoin (BTC) to US Dollar (USDT) prices in real time with beautiful visualizations and smooth animations.  
**No backend required**—all data is fetched directly from Binance using Axios in the browser.

A modern, responsive web application for tracking Bitcoin (BTC) to US Dollar (USDT) prices in real-time with beautiful visualizations and smooth animations. Built with vanilla JavaScript and Bootstrap 5.

## ✨ Features

- **Live BTC/USDT prices** from Binance API using Axios (browser-side)
- **Automatic updates every 5 seconds**
- **Automatic retry logic** for connection failures
- **Connection status indicator** showing API connectivity
- **24-hour change calculations** updated every 5 seconds

### 📈 Advanced Visual Analytics

- **24-hour price change** with color-coded indicators
- **Percentage change display** with trend colors
- **Mini line charts** for 24-hour price trends
- **Smooth, animated transitions**
- **Light/Dark theme toggle** with Font Awesome icons
- **Responsive design** for all devices
- Professional styling with Bootstrap 5

---

## ⚠️ API Access Notice

Some internet service providers (ISPs) may block access to the Binance website and its API endpoints.  
If you notice the price data does not update or you see connection errors, your ISP may be restricting access to the Binance API.

**Solution:**  
Try using a VPN to access the app. Connecting from a different region may resolve the issue and allow the app to fetch real-time BTC/USDT prices successfully.

---

## 🚀 Getting Started

### Prerequisites

- Modern web browser with JavaScript enabled
- Internet connection for API access
- Any modern web browser

### Usage

1. **Clone the repository:**
    ```bash
    git clone https://github.com/GH0ST-141/Real-Time-Price-Ticker.git
    cd Real-Time-Price-Ticker
    ```
1. **Clone the repository**

    ```bash
    git clone https://github.com/yourusername/real-time-price-tracker.git
    cd real-time-price-tracker
    ```

2. **Open the application**

    Simply open `index.html` in your web browser, or use a local server:

    ```bash
    # Using Python (if available)
    python -m http.server 8000

    # Using Node.js (if available)
    npx http-server

    # Or simply open index.html directly in browser
    ```

3. **Optional: Handle SSL certificate issues**

    If you encounter SSL certificate errors with Binance API, configure your browser to ignore certificate errors for development (see Development section below).

### Deployment

The application is static and can be deployed to any web server or CDN:

#### Render Deployment
- **Service Type**: Static Site
- **Build Command**: Leave empty
- **Publish Directory**: `./` (important: not `build` or `dist`)
- **Free tier**: Available with automatic HTTPS

#### Other Platforms
- **GitHub Pages**: Push to gh-pages branch
- **Netlify/Vercel**: Connect repository for automatic deployment
- **Traditional hosting**: Upload files to web server

## 📁 Project Structure

real-time-price-tracker/
├── index.html          # Main HTML file with Bootstrap and Axios CDN
├── style.css           # Application styles and custom CSS
├── script.js           # Frontend JavaScript with ES6 classes and components
├── README.md           # This file
├── LICENSE             # MIT License
└── images/
    └── bitcoin-logo.gif # Bitcoin logo asset
```

## 🏗️ Architecture

### Frontend Components

- **UIComponent**: Base class for DOM manipulation
- **PriceDisplay**: Formats and displays BTC price with currency formatting
- **ChangePercentDisplay**: Shows 24h percentage change with color coding
- **Change24hDisplay**: Shows 24h dollar change with trend indicators
- **MiniChart**: Renders SVG line charts with grid lines
- **ConnectionStatusDisplay**: Shows API connection status
- **IndicatorDisplay**: Arrow indicators for price trends
- **IndicatorDotDisplay**: Colored dot indicators
- **ThemeManager**: Handles light/dark theme switching with persistence

### Core Features

- **PriceTracker**: Main orchestrator class managing API calls and UI updates
- **Axios Integration**: HTTP client for reliable API communication
- **Error Handling**: Automatic retry logic and graceful error states
- **Real-time Updates**: 5-second intervals for price and historical data
- **Responsive Design**: Bootstrap 5 for mobile-first approach

## 🎯 API Integration

### External APIs

- **Binance API**: Real-time cryptocurrency data (no authentication required)
  - `GET /api/v3/ticker/price?symbol=BTCUSDT` - Current BTC/USDT price
  - `GET /api/v3/klines?symbol=BTCUSDT&interval=1h&limit=24` - 24-hour hourly price history

### Browser Compatibility

- **SSL Certificate Handling**: May require browser configuration to bypass certificate errors for Binance API
- **CORS**: Direct API calls work without proxy in most modern browsers
- **Axios**: Handles HTTP requests with automatic JSON parsing and error handling

## 🎨 Customization

- **Edit `style.css`** to adjust colors, fonts, or layout.
- **Edit `script.js`** to tweak update intervals, retry logic, and API endpoint configuration.

---

## 🤝 Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgments

- **Binance API** for real-time cryptocurrency data
- **Axios** for HTTP requests
- **Bootstrap** and **Font Awesome** for styling and icons

---
