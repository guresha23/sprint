async function getExchangeRates() {
    const response = await fetch('https://api.exchangeratesapi.io/latest');
    const data = await response.json();
    return { base: data.base, rates: data.rates };
  }
  
  async function getExchangeRates() {
    const response = await fetch('https://api.exchangeratesapi.io/latest');
    const data = await response.json();
    return { base: data.base, rates: data.rates };
  }
  
  async function populateCurrencyDropdowns() {
    const { base, rates } = await getExchangeRates();
    const fromCurrencyDropdown = document.getElementById('from');
    const toCurrencyDropdown = document.getElementById('to');
  
    const currencies = ['USD', 'EUR']; 
  
    currencies.forEach(currency => {
      const option1 = document.createElement('option');
      const option2 = document.createElement('option');
  
      option1.text = currency;
      option1.value = currency;
      option2.text = currency;
      option2.value = currency;
  
      fromCurrencyDropdown.add(option1);
      toCurrencyDropdown.add(option2);
    });
  
    for (const currency in rates) {
      if (!currencies.includes(currency)) {
        const option1 = document.createElement('option');
        const option2 = document.createElement('option');
  
        option1.text = currency;
        option1.value = currency;
        option2.text = currency;
        option2.value = currency;
  
        fromCurrencyDropdown.add(option1);
        toCurrencyDropdown.add(option2);
      }
    }
  
 
    const baseOption = document.createElement('option');
    baseOption.text = base;
    baseOption.value = base;
    fromCurrencyDropdown.add(baseOption);
  }
  
  async function calculate() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from').value;
    const toCurrency = document.getElementById('to').value;
  
    const { rates } = await getExchangeRates();
    const exchangeRate = rates[toCurrency] / rates[fromCurrency];
    const result = amount * exchangeRate;
  
    document.getElementById('result').textContent = `Converted Amount: ${result.toFixed(2)} ${toCurrency}`;
  }
  
  populateCurrencyDropdowns();
  