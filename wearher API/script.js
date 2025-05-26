async function getWeather() {
    const location = document.getElementById('locationInput').value.trim();
    const resultDiv = document.getElementById('result');

    if (!location) {
        resultDiv.innerHTML = 'Please enter a location.';
        return;
    }

    const apiKey = 'df490d88964e4703a2175442250905';
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(location)}&aqi=yes`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Location not found');

        const data = await response.json();
        const tempC = data.current.temp_c;
        const condition = data.current.condition.text;

        resultDiv.innerHTML = `Temperature in ${data.location.name}: <strong>${tempC}°C</strong><br>Condition: ${condition}`;
    } catch (error) {
        resultDiv.innerHTML = `Error: ${error.message}`;
    }
}
