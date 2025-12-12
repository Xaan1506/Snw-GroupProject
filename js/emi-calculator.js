// emi-calculator.js - EMI Calculator for Property Loans

/**
 * Calculate EMI using the formula:
 * EMI = [P x R x (1+R)^N] / [(1+R)^N-1]
 * where:
 * P = Principal loan amount
 * R = Monthly interest rate (annual rate / 12 / 100)
 * N = Number of monthly installments
 */
function calculateEMI(principal, annualRate, tenureMonths) {
    if (principal <= 0 || annualRate <= 0 || tenureMonths <= 0) {
        return null;
    }

    const monthlyRate = annualRate / 12 / 100;
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
        (Math.pow(1 + monthlyRate, tenureMonths) - 1);

    const totalAmount = emi * tenureMonths;
    const totalInterest = totalAmount - principal;

    return {
        emi: Math.round(emi),
        totalAmount: Math.round(totalAmount),
        totalInterest: Math.round(totalInterest),
        principal: principal
    };
}

/**
 * Format number as Indian currency
 */
function formatIndianCurrency(amount) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    }).format(amount);
}

/**
 * Create EMI Calculator HTML
 */
function createEMICalculator(propertyPrice, deposit = 0) {
    const defaultLoanAmount = propertyPrice - deposit;
    const defaultRate = 8.5; // Default interest rate
    const defaultTenure = 20; // Default tenure in years

    return `
    <div class="emi-calculator">
      <div class="emi-calculator-header">
        <h4>💰 EMI Calculator</h4>
        <p class="emi-subtitle">Calculate your monthly home loan payment</p>
      </div>

      <div class="emi-inputs">
        <div class="emi-input-group">
          <label for="emi-loan-amount">Loan Amount</label>
          <div class="input-wrapper">
            <span class="input-prefix">₹</span>
            <input 
              type="number" 
              id="emi-loan-amount" 
              class="emi-input" 
              value="${defaultLoanAmount}"
              min="100000"
              max="100000000"
              step="100000"
            >
          </div>
          <input 
            type="range" 
            id="emi-loan-slider" 
            class="emi-slider"
            min="100000"
            max="${propertyPrice * 2}"
            step="100000"
            value="${defaultLoanAmount}"
          >
          <div class="slider-labels">
            <span>₹1L</span>
            <span>${formatIndianCurrency(propertyPrice * 2)}</span>
          </div>
        </div>

        <div class="emi-input-group">
          <label for="emi-interest">Interest Rate (%)</label>
          <div class="input-wrapper">
            <input 
              type="number" 
              id="emi-interest" 
              class="emi-input" 
              value="${defaultRate}"
              min="1"
              max="20"
              step="0.1"
            >
            <span class="input-suffix">%</span>
          </div>
          <input 
            type="range" 
            id="emi-interest-slider" 
            class="emi-slider"
            min="6"
            max="15"
            step="0.1"
            value="${defaultRate}"
          >
          <div class="slider-labels">
            <span>6%</span>
            <span>15%</span>
          </div>
        </div>

        <div class="emi-input-group">
          <label for="emi-tenure">Loan Tenure</label>
          <div class="input-wrapper">
            <input 
              type="number" 
              id="emi-tenure" 
              class="emi-input" 
              value="${defaultTenure}"
              min="1"
              max="30"
              step="1"
            >
            <span class="input-suffix">Years</span>
          </div>
          <input 
            type="range" 
            id="emi-tenure-slider" 
            class="emi-slider"
            min="5"
            max="30"
            step="1"
            value="${defaultTenure}"
          >
          <div class="slider-labels">
            <span>5 Years</span>
            <span>30 Years</span>
          </div>
        </div>
      </div>

      <div class="emi-results">
        <div class="emi-result-main">
          <div class="emi-label">Monthly EMI</div>
          <div class="emi-value" id="emi-monthly">₹0</div>
        </div>

        <div class="emi-breakdown">
          <div class="emi-breakdown-item">
            <span class="breakdown-label">Principal Amount</span>
            <span class="breakdown-value" id="emi-principal">₹0</span>
          </div>
          <div class="emi-breakdown-item">
            <span class="breakdown-label">Total Interest</span>
            <span class="breakdown-value" id="emi-interest-total">₹0</span>
          </div>
          <div class="emi-breakdown-item">
            <span class="breakdown-label">Total Amount</span>
            <span class="breakdown-value total-amount" id="emi-total">₹0</span>
          </div>
        </div>

        <div class="emi-chart">
          <div class="chart-legend">
            <div class="legend-item">
              <span class="legend-color principal-color"></span>
              <span>Principal</span>
            </div>
            <div class="legend-item">
              <span class="legend-color interest-color"></span>
              <span>Interest</span>
            </div>
          </div>
          <div class="chart-container">
            <div class="chart-bar" id="emi-chart-bar">
              <div class="chart-segment principal-segment" id="principal-segment"></div>
              <div class="chart-segment interest-segment" id="interest-segment"></div>
            </div>
          </div>
        </div>

        <button class="btn-apply-loan primary-btn">
          Apply for Loan
        </button>
      </div>
    </div>
  `;
}

/**
 * Initialize EMI Calculator functionality
 */
function initializeEMICalculator() {
    const loanInput = document.getElementById('emi-loan-amount');
    const loanSlider = document.getElementById('emi-loan-slider');
    const interestInput = document.getElementById('emi-interest');
    const interestSlider = document.getElementById('emi-interest-slider');
    const tenureInput = document.getElementById('emi-tenure');
    const tenureSlider = document.getElementById('emi-tenure-slider');

    if (!loanInput || !interestInput || !tenureInput) return;

    // Sync input with slider
    loanInput.addEventListener('input', (e) => {
        loanSlider.value = e.target.value;
        updateEMI();
    });

    loanSlider.addEventListener('input', (e) => {
        loanInput.value = e.target.value;
        updateEMI();
    });

    interestInput.addEventListener('input', (e) => {
        interestSlider.value = e.target.value;
        updateEMI();
    });

    interestSlider.addEventListener('input', (e) => {
        interestInput.value = e.target.value;
        updateEMI();
    });

    tenureInput.addEventListener('input', (e) => {
        tenureSlider.value = e.target.value;
        updateEMI();
    });

    tenureSlider.addEventListener('input', (e) => {
        tenureInput.value = e.target.value;
        updateEMI();
    });

    // Apply loan button
    const applyBtn = document.querySelector('.btn-apply-loan');
    if (applyBtn) {
        applyBtn.addEventListener('click', () => {
            alert('Loan application feature coming soon! Contact our agents for assistance.');
        });
    }

    // Initial calculation
    updateEMI();
}

/**
 * Update EMI calculation and display
 */
function updateEMI() {
    const loanAmount = parseInt(document.getElementById('emi-loan-amount').value) || 0;
    const interestRate = parseFloat(document.getElementById('emi-interest').value) || 0;
    const tenureYears = parseInt(document.getElementById('emi-tenure').value) || 0;
    const tenureMonths = tenureYears * 12;

    const result = calculateEMI(loanAmount, interestRate, tenureMonths);

    if (result) {
        // Update display values
        document.getElementById('emi-monthly').textContent = formatIndianCurrency(result.emi);
        document.getElementById('emi-principal').textContent = formatIndianCurrency(result.principal);
        document.getElementById('emi-interest-total').textContent = formatIndianCurrency(result.totalInterest);
        document.getElementById('emi-total').textContent = formatIndianCurrency(result.totalAmount);

        // Update chart
        const principalPercentage = (result.principal / result.totalAmount) * 100;
        const interestPercentage = (result.totalInterest / result.totalAmount) * 100;

        document.getElementById('principal-segment').style.width = principalPercentage + '%';
        document.getElementById('interest-segment').style.width = interestPercentage + '%';
    }
}

/**
 * Create EMI calculator for modal
 */
function addEMICalculatorToModal(propertyPrice, deposit) {
    const calculatorHTML = createEMICalculator(propertyPrice, deposit);

    // Find modal body and append calculator
    const modalBody = document.querySelector('.modal__body');
    if (modalBody) {
        const calculatorDiv = document.createElement('div');
        calculatorDiv.innerHTML = calculatorHTML;
        modalBody.appendChild(calculatorDiv);

        // Initialize after adding to DOM
        setTimeout(() => {
            initializeEMICalculator();
        }, 100);
    }
}

// Export functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        calculateEMI,
        createEMICalculator,
        initializeEMICalculator,
        addEMICalculatorToModal,
        formatIndianCurrency
    };
}
