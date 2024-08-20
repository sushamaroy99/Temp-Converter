document.addEventListener('DOMContentLoaded', () => {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('Fahrenheit');

    function celsiusToFahrenheit(celsius) {
        return (celsius * 9/5) + 32;
    }

    function fahrenheitToCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5/9;
    }

    celsiusInput.addEventListener('input', () => {
        const celsius = parseFloat(celsiusInput.value);
        if (!isNaN(celsius)) {
            fahrenheitInput.value = celsiusToFahrenheit(celsius).toFixed(2);
        } else {
            fahrenheitInput.value = '';
        }
    });

    fahrenheitInput.addEventListener('input', () => {
        const fahrenheit = parseFloat(fahrenheitInput.value);
        if (!isNaN(fahrenheit)) {
            celsiusInput.value = fahrenheitToCelsius(fahrenheit).toFixed(2);
        } else {
            celsiusInput.value = '';
        }
    });
});
