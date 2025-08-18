const slider = document.getElementById("billionaireSlider");
const countDisplay = document.getElementById("billionaireCount");
const output = document.getElementById("output");
const zeroBtn = document.getElementById("zeroBtn");

function formatCurrency(num) {
  return "$" + num.toLocaleString();
}

function updateDashboard(billionaires) {
  const avgWealth = 2_000_000_000; // avg billionaire net worth
  const totalWealth = billionaires * avgWealth;
  
  const teachers = Math.floor(totalWealth / 80000); // salary per teacher
  const hospitalBeds = Math.floor(totalWealth / 250000);
  const homes = Math.floor(totalWealth / 300000);
  
  output.innerHTML = `
    <p>Total wealth: ${formatCurrency(totalWealth)}</p>
    <p>Could fund:</p>
    <ul>
      <li>${teachers.toLocaleString()} public school teachers</li>
      <li>${hospitalBeds.toLocaleString()} hospital beds</li>
      <li>${homes.toLocaleString()} affordable homes</li>
    </ul>
  `;
}

slider.addEventListener("input", () => {
  const count = parseInt(slider.value);
  countDisplay.textContent = count;
  updateDashboard(count);
});

zeroBtn.addEventListener("click", () => {
  slider.value = 0;
  countDisplay.textContent = 0;
  updateDashboard(0);
});

// Initial state
updateDashboard(parseInt(slider.value));
