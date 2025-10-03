/**
 * Base UI Component class for DOM element manipulation
 */
class UIComponent {
    constructor(elementId) {
        this.element = document.getElementById(elementId);
    }

    setText(text) {
        this.element.textContent = text;
    }

    addClass(className) {
        this.element.classList.add(className);
    }

    removeClass(className) {
        this.element.classList.remove(className);
    }

    setClasses(classes) {
        this.element.className = classes;
    }

    clearClasses() {
        this.element.className = '';
    }
}

// ========================================
// UI DISPLAY COMPONENTS
// ========================================

/**
 * Price display component with currency formatting
 */
class PriceDisplay extends UIComponent {
    constructor() {
        super('price');
        this.formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }

    updatePrice(price) {
        this.setText(this.formatter.format(price));
    }

    setColor(color) {
        this.clearClasses();
        this.addClass('display-2');
        this.addClass('fw-semibold');
        this.addClass('font-monospace');
        this.addClass('transition-all');
        if (color) {
            this.addClass(`text-${color}`);
        } else {
            this.addClass('text-body');
        }
    }
}

/**
 * 24-hour change percentage display component
 */
class ChangePercentDisplay extends UIComponent {
    constructor() {
        super('changePercent');
        this.formatter = new Intl.NumberFormat('en-US', {
            style: 'percent',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
            signDisplay: 'always'
        });
    }

    updateChange(percent) {
        this.clearClasses();
        this.addClass('h5');
        this.addClass('mb-0');
        if (percent > 0) {
            this.addClass('text-success');
        } else if (percent < 0) {
            this.addClass('text-danger');
        } else {
            this.addClass('text-muted');
        }
        this.setText(this.formatter.format(percent / 100));
    }
}

/**
 * 24-hour change amount display component
 */
class Change24hDisplay extends UIComponent {
    constructor() {
        super('change24h');
        this.formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
            signDisplay: 'always'
        });
    }

    updateChange(change) {
        this.clearClasses();
        this.addClass('h5');
        this.addClass('mb-0');
        if (change > 0) {
            this.addClass('text-success');
        } else if (change < 0) {
            this.addClass('text-danger');
        } else {
            this.addClass('text-muted');
        }
        this.setText(this.formatter.format(change));
    }
}

/**
 * Last updated timestamp display component
 */
class LastUpdatedDisplay extends UIComponent {
    constructor() {
        super('lastUpdated');
        this.formatter = new Intl.DateTimeFormat('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });
    }

    updateTime() {
        const now = new Date();
        this.setText(`Last updated: ${this.formatter.format(now)}`);
    }
}

/**
 * Connection status display component
 */
class ConnectionStatusDisplay extends UIComponent {
    constructor() {
        super('connectionStatus');
    }

    setConnected() {
        this.element.innerHTML = '<small class="text-success">Connected to Binance</small>';
    }

    setDisconnected() {
        this.element.innerHTML = '<small class="text-danger">Disconnected from Binance</small>';
    }
}

// ========================================
// CHART COMPONENTS
// ========================================

/**
 * Mini chart component for displaying price trends
 */
class MiniChart extends UIComponent {
    constructor(elementId) {
        super(elementId);
        this.data = [];
        this.width = 80;
        this.height = 30;
    }

    updateChart(data) {
        this.data = data;
        this.render();
    }

    render() {
        if (this.data.length === 0) return;

        const min = Math.min(...this.data);
        const max = Math.max(...this.data);
        const range = max - min || 1;

        let pathData = '';
        this.data.forEach((value, index) => {
            const x = (index / (this.data.length - 1)) * this.width;
            const y = this.height - ((value - min) / range) * this.height;
            pathData += index === 0 ? `M ${x} ${y}` : ` L ${x} ${y}`;
        });

        // Create grid lines
        const gridLines = [];
        // Horizontal grid lines (3 lines)
        for (let i = 1; i < 3; i++) {
            const y = (this.height / 3) * i;
            gridLines.push(`<line x1="0" y1="${y}" x2="${this.width}" y2="${y}" stroke-width="0.5" class="grid-line"/>`);
        }
        // Vertical grid lines (4 lines for 24 hours)
        for (let i = 1; i < 4; i++) {
            const x = (this.width / 4) * i;
            gridLines.push(`<line x1="${x}" y1="0" x2="${x}" y2="${this.height}" stroke-width="0.5" class="grid-line"/>`);
        }

        this.element.innerHTML = `
            <div class="mini-chart-container">
                <svg width="${this.width}" height="${this.height}" class="mini-chart">
                    ${gridLines.join('')}
                    <path d="${pathData}" stroke="currentColor" stroke-width="2" fill="none" opacity="0.8"/>
                </svg>
            </div>
        `;
    }
}

// ========================================
// INDICATOR COMPONENTS
// ========================================

/**
 * Price change indicator dot component
 */
class IndicatorDotDisplay extends UIComponent {
    constructor() {
        super('indicatorDot');
    }

    setColor(color) {
        this.clearClasses();
        this.addClass('rounded-circle');
        if (color) {
            this.addClass(`bg-${color}`);
        } else {
            this.addClass('bg-secondary');
        }
    }
}

/**
 * Price trend indicator arrow component
 */
class IndicatorDisplay extends UIComponent {
    constructor() {
        super('indicator');
    }

    updateIndicator(direction) {
        this.clearClasses();
        this.addClass('fs-5');
        this.addClass('transition-all');

        switch (direction) {
            case 'up':
                this.element.innerHTML = '<i class="fas fa-arrow-trend-up"></i>';
                this.addClass('text-success');
                break;
            case 'down':
                this.element.innerHTML = '<i class="fas fa-arrow-trend-down"></i>';
                this.addClass('text-danger');
                break;
            default:
                this.element.innerHTML = '';
                this.addClass('text-muted');
        }
    }
}

// ========================================
// THEME MANAGEMENT
// ========================================

/**
 * Theme manager for light/dark mode switching
 */
class ThemeManager {
    constructor() {
        this.button = document.getElementById('themeToggle');
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.applyTheme(this.currentTheme);
        this.updateButton();
        this.button.addEventListener('click', () => this.toggleTheme());
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme(this.currentTheme);
        this.updateButton();
        localStorage.setItem('theme', this.currentTheme);
    }

    applyTheme(theme) {
        document.documentElement.setAttribute('data-bs-theme', theme);
        document.body.className = theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark';
    }

    updateButton() {
        const isDark = this.currentTheme === 'dark';
        this.button.innerHTML = isDark
            ? '<i class="fas fa-sun"></i> Light'
            : '<i class="fas fa-moon"></i> Dark';
        this.button.className = isDark
            ? 'btn btn-outline-light btn-sm'
            : 'btn btn-outline-secondary btn-sm';
    }
}

// ========================================
// MAIN PRICE TRACKER
// ========================================

/**
 * Main price tracker class that manages API calls and UI updates
 */
class PriceTracker {
    constructor(config = {}) {
        // API Configuration
        this.apiUrl = config.apiUrl || 'https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT';
        this.historicalApiUrl = 'https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1h&limit=24';

        // Update Configuration
        this.updateInterval = config.updateInterval || 5000;
        this.maxRetries = config.maxRetries || 3;
        this.retryDelay = config.retryDelay || 1000;

        // Data Storage
        this.previousPrice = null;
        this.historicalData = [];
        this.changePercent = 0;
        this.change24h = 0;
        this.intervalId = null;
        this.isRunning = false;

        // Initialize UI Components
        this.priceDisplay = new PriceDisplay();
        this.changePercentDisplay = new ChangePercentDisplay();
        this.change24hDisplay = new Change24hDisplay();
        this.indicatorDisplay = new IndicatorDisplay();
        this.indicatorDotDisplay = new IndicatorDotDisplay();
        this.lastUpdatedDisplay = new LastUpdatedDisplay();
        this.connectionStatusDisplay = new ConnectionStatusDisplay();
        this.priceChart = new MiniChart('priceChart');
        this.changeChart = new MiniChart('changeChart');
        this.card = document.getElementById('priceCard');
    }

    /**
     * Fetches historical price data from Binance API
     */
    async fetchHistoricalData() {
        try {
            const response = await axios.get(this.historicalApiUrl);
            const data = response.data;
            // Extract close prices from Binance klines data
            if (Array.isArray(data)) {
                this.historicalData = data.map(item => parseFloat(item[4]));
            } else {
                console.warn('Historical data is not an array or missing');
                this.historicalData = [];
            }
            // Calculate 24h change
            if (this.historicalData.length > 1) {
                const firstPrice = this.historicalData[0];
                const lastPrice = this.historicalData[this.historicalData.length - 1];
                this.change24h = lastPrice - firstPrice;
                this.changePercent = (this.change24h / firstPrice) * 100;
            } else {
                this.change24h = 0;
                this.changePercent = 0;
            }
            this.updateCharts();
        } catch (error) {
            console.error('Error fetching historical data:', error);
            // Set empty data on error to prevent chart errors
            this.historicalData = [];
            this.change24h = 0;
            this.changePercent = 0;
            this.updateCharts();
        }
    }

    /**
     * Fetches current price data from Binance API
     */
    async fetchPrice(retryCount = 0) {
        try {
            const response = await axios.get(this.apiUrl);
            const data = response.data;
            this.connectionStatusDisplay.setConnected();
            // Format data to match expected structure
            const formattedData = {
                lastPrice: parseFloat(data.price),
                priceChangePercent: this.changePercent,
                priceChange: this.change24h
            };
            this.updateUI(formattedData);
        } catch (error) {
            console.error('Error fetching price:', error);
            if (retryCount < this.maxRetries) {
                console.log(`Retrying in ${this.retryDelay}ms... (${retryCount + 1}/${this.maxRetries})`);
                setTimeout(() => this.fetchPrice(retryCount + 1), this.retryDelay);
            } else {
                this.connectionStatusDisplay.setDisconnected();
                this.showError('Failed to fetch price data');
            }
        }
    }

    /**
     * Updates the mini charts with historical data
     */
    updateCharts() {
        if (this.historicalData.length > 0) {
            this.priceChart.updateChart(this.historicalData);
            // For change chart, we could show percentage changes or just the price trend
            this.changeChart.updateChart(this.historicalData);
        }
    }

    /**
     * Updates all UI components with new data
     */
    updateUI(data) {
        const currentPrice = parseFloat(data.lastPrice);
        const changePercent = parseFloat(data.priceChangePercent);
        const change24h = parseFloat(data.priceChange);

        // Update components
        this.priceDisplay.updatePrice(currentPrice);
        this.changePercentDisplay.updateChange(changePercent);
        this.change24hDisplay.updateChange(change24h);
        this.lastUpdatedDisplay.updateTime();
        this.updateIndicator(currentPrice);

        this.previousPrice = currentPrice;
    }

    /**
     * Initializes UI components to loading state
     */
    initializeUI() {
        // Set initial loading state
        this.priceDisplay.setText('--');
        this.priceDisplay.setColor(null);
        this.changePercentDisplay.setText('--');
        this.changePercentDisplay.clearClasses();
        this.changePercentDisplay.addClass('h5');
        this.changePercentDisplay.addClass('mb-0');
        this.changePercentDisplay.addClass('text-body-secondary');
        this.changePercentDisplay.addClass('mb-0');
        this.change24hDisplay.setText('--');
        this.change24hDisplay.clearClasses();
        this.change24hDisplay.addClass('h5');
        this.change24hDisplay.addClass('text-body-secondary');
        this.indicatorDisplay.updateIndicator(null);
        this.indicatorDotDisplay.setColor(null);
        this.card.classList.remove('border-success', 'border-danger', 'border-warning');
        this.card.classList.add('border-secondary');
        this.connectionStatusDisplay.setText('--');
    }

    /**
     * Updates price change indicators and card styling
     */
    updateIndicator(currentPrice) {
        // Remove previous border classes
        this.card.classList.remove('border-success', 'border-danger', 'border-secondary');

        if (this.previousPrice === null) {
            this.priceDisplay.setColor(null);
            this.indicatorDisplay.updateIndicator(null);
            this.indicatorDotDisplay.setColor(null);
            this.card.classList.add('border-secondary');
            return;
        }

        if (currentPrice > this.previousPrice) {
            this.priceDisplay.setColor('success');
            this.indicatorDisplay.updateIndicator('up');
            this.indicatorDotDisplay.setColor('success');
            this.card.classList.add('border-success');
        } else if (currentPrice < this.previousPrice) {
            this.priceDisplay.setColor('danger');
            this.indicatorDisplay.updateIndicator('down');
            this.indicatorDotDisplay.setColor('danger');
            this.card.classList.add('border-danger');
        } else {
            this.priceDisplay.setColor(null);
            this.indicatorDisplay.updateIndicator('neutral');
            this.indicatorDotDisplay.setColor('secondary');
            this.card.classList.add('border-secondary');
        }
    }

    /**
     * Displays error state in UI
     */
    showError(message) {
        console.error(message);
        // Update UI to show error state
        this.priceDisplay.setText('Error');
        this.priceDisplay.setColor('danger');
        this.changePercentDisplay.setText('--');
        this.change24hDisplay.setText('--');
        this.change24hDisplay.clearClasses();
        this.change24hDisplay.addClass('h5');
        this.change24hDisplay.addClass('mb-0');
        this.change24hDisplay.addClass('text-body-secondary');
        this.changePercentDisplay.clearClasses();
        this.changePercentDisplay.addClass('h5');
        this.changePercentDisplay.addClass('mb-0');
        this.changePercentDisplay.addClass('text-body-secondary');
        this.indicatorDisplay.updateIndicator(null);
        this.indicatorDotDisplay.setColor('warning');
        this.card.classList.remove('border-success', 'border-danger', 'border-secondary');
        this.card.classList.add('border-warning');
        this.connectionStatusDisplay.setDisconnected();
    }

    /**
     * Starts the price tracking
     */
    start() {
        if (this.isRunning) return;
        this.isRunning = true;
        this.initializeUI(); // Initialize UI to loading state
        this.fetchHistoricalData(); // Initial historical data fetch
        this.fetchPrice(); // Initial price fetch
        this.intervalId = setInterval(() => {
            this.fetchPrice();
            // Fetch historical data every 5 seconds
            if (Date.now() % 5000 < 1000) { // Roughly every 5 seconds
                this.fetchHistoricalData();
            }
        }, this.updateInterval);
        console.log('Price tracker started');
    }

    /**
     * Stops the price tracking
     */
    stop() {
        if (!this.isRunning) return;
        this.isRunning = false;
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
        console.log('Price tracker stopped');
    }

    /**
     * Updates tracker configuration
     */
    updateConfig(newConfig) {
        Object.assign(this, newConfig);
        if (this.isRunning) {
            this.stop();
            this.start();
        }
    }
}

// ========================================
// APPLICATION INITIALIZATION
// ========================================

// Initialize theme manager
const themeManager = new ThemeManager();

// Initialize price tracker
const tracker = new PriceTracker();
tracker.start();

// Export for potential use in other scripts
window.PriceTracker = PriceTracker;
window.tracker = tracker;
window.themeManager = themeManager;