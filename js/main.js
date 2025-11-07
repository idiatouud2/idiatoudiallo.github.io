// Leaflet placeholder map
function initMap() {
  const map = L.map('map').setView([40.7128, -74.0060], 12); // Example: NYC

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  L.marker([40.7128, -74.0060]).addTo(map)
    .bindPopup('Moon & Tide Map Placeholder 🌊🌙')
    .openPopup();
}

// Time-slider interaction placeholder
const slider = document.getElementById('time-slider');
slider.addEventListener('input', (e) => {
  const val = e.target.value;
  console.log(`Slider moved to: ${val}`);
  // Later: update map layer for moon/tide data
});

initMap();

