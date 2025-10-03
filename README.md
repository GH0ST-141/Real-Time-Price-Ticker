# 🚀 BTC/USDT Real-Time Price Ticker

A modern, responsive web application for tracking Bitcoin (BTC) to US Dollar (USDT) prices in real time with beautiful visualizations and smooth animations.  
**No backend required**—all data is fetched directly from Binance using Axios in the browser.

---

## ✨ Features

- **Live BTC/USDT prices** from Binance API using Axios (browser-side)
- **Automatic updates every 5 seconds**
- **Automatic retry logic** for connection failures
- **Connection status indicator** showing API connectivity
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

- Any modern web browser

### Usage

1. **Clone the repository:**
    ```bash
    git clone https://github.com/GH0ST-141/Real-Time-Price-Ticker.git
    cd Real-Time-Price-Ticker
    ```

2. **Open `index.html` directly in your browser**  
   (Or, for best results, use a simple local server such as VS Code Live Server, Python `http.server`, or `npm install -g serve`.)

---

## 📁 Project Structure

real-time-price-tracker/
├── index.html
├── style.css
├── script.js # All logic, including Axios API calls, is here
├── images/
│ └── bitcoin-logo.gif
└── README.md

---

## 🏗️ How It Works

- **Frontend Only:** No backend, Node.js, or Express server is included.
- **Data Fetching:** All API calls are made using Axios from the browser directly to Binance endpoints:
  - `https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT`
  - `https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1h&limit=24`

---

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
