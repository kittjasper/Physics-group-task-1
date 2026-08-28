const massInput = document.querySelector('#ball-mass');
const diameterInput = document.querySelector('#ball-diameter');
const densityOutput = document.querySelector('#ball-density');
const workOutput = document.querySelector('#ball-work');

function updateBallDensity() {
  const mass = Number(massInput.value);
  const diameter = Number(diameterInput.value);
  const radius = diameter / 2;
  const volume = (4 / 3) * Math.PI * radius ** 3;
  const density = volume > 0 ? mass / volume : 0;

  densityOutput.textContent = Number.isFinite(density) ? density.toFixed(2) : '—';
  workOutput.textContent = `V = 4/3π(${radius.toFixed(2)})³ = ${volume.toFixed(2)} cm³  |  ρ = ${mass.toFixed(1)} ÷ ${volume.toFixed(2)}`;
}

massInput.addEventListener('input', updateBallDensity);
diameterInput.addEventListener('input', updateBallDensity);
updateBallDensity();
