# 🚀 BTC/USDT Real-Time Price Tracker

A modern, responsive web application for tracking Bitcoin (BTC) to US Dollar (USDT) prices in real-time with beautiful visualizations and smooth animations. Built with vanilla JavaScript and Bootstrap 5.

## ✨ Features

### 📊 Real-Time Price Tracking

- **Live BTC/USDT prices** from Binance API
- **5-second updates** for real-time data
- **Automatic retry logic** for connection failures
- **Connection status indicator** showing API connectivity
- **24-hour change calculations** updated every 5 seconds

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

### 🔧 Technical Features

- **Component-based architecture** with ES6 classes
- **Axios HTTP client** for reliable API calls
- **Error handling and recovery** mechanisms
- **Modular code organization** with JSDoc documentation
- **No server dependencies** - runs directly in browser

## 🚀 Quick Start

### Prerequisites

- Modern web browser with JavaScript enabled
- Internet connection for API access

### Installation

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

```text
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

### Styling

Modify `style.css` to customize:

- Color schemes and themes
- Chart dimensions and styling
- Animation timings and transitions
- Responsive breakpoints
- Font families and sizes

### Configuration

Update `script.js` to modify:

- **Update Intervals**: Change `updateInterval` in PriceTracker constructor
- **API Endpoints**: Modify `apiUrl` and `historicalApiUrl` for different data sources
- **Retry Logic**: Adjust `maxRetries` and `retryDelay` for error handling
- **Chart Parameters**: Customize chart dimensions in MiniChart class
- **Theme Persistence**: Modify localStorage key in ThemeManager

### Component Customization

Each UI component can be easily extended:

- **PriceDisplay**: Modify currency formatting and display options
- **MiniChart**: Adjust chart dimensions, grid lines, and styling
- **ThemeManager**: Add new themes or modify existing color schemes

## 🔧 Development

### Local Development

1. **Clone and open**: Download the repository and open `index.html` in your browser
2. **Live editing**: Edit files directly and refresh browser to see changes
3. **Browser dev tools**: Use F12 to inspect elements and debug JavaScript
4. **SSL handling**: Configure browser to ignore certificate errors if needed (see Quick Start)

### Code Style

- **ES6+ JavaScript** with classes, arrow functions, and modern syntax
- **Component-based architecture** with inheritance and composition
- **JSDoc documentation** for all classes and methods
- **Modular organization** with clear section separators
- **Bootstrap 5** for responsive design and utilities
- **Font Awesome** icons for consistent UI elements
- **Axios** for reliable HTTP requests with error handling

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

### Security Considerations

- **No server-side processing**: All logic runs client-side
- **API authentication**: Uses public Binance endpoints (no sensitive data)
- **Content Security Policy**: Relies on Bootstrap/Axios CDNs
- **Input validation**: Client-side data sanitization
- **HTTPS enforcement**: Modern browsers require secure connections

### Performance Optimizations

- **Efficient DOM updates**: Targeted element manipulation
- **SVG charts**: Lightweight vector graphics for charts
- **Bootstrap utilities**: Optimized CSS classes
- **Axios caching**: Browser-level HTTP caching
- **Lazy initialization**: Components created on demand
- **Minimal dependencies**: Only essential libraries loaded

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Binance API** for providing free, reliable cryptocurrency data
- **Bootstrap 5** for responsive UI components and utilities
- **Font Awesome** for consistent and beautiful icons
- **Axios** for robust HTTP client functionality
- **Bootstrap Icons** for additional iconography
