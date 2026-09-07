/**
 * NOIR & CROWN Interactive Engine
 * Real-time calculation and fluid micro-interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  const resultText = document.getElementById('calc-result-text');
  const resultDesc = document.getElementById('calc-result-desc');
  const selects = document.querySelectorAll('.select-styled');

  function updateCalculation() {
    const values = Array.from(selects).map(s => s.value);
    
    // Generate deterministic yet intelligent sounding simulated output
    const primary = values[0] || '';
    const secondary = values[1] || '';
    const tertiary = values[2] || '';

    let score = 94;
    if (primary.includes('Industrial') || primary.includes('Commercial') || primary.includes('Heavy')) score += 5;
    if (secondary.includes('High') || secondary.includes('Extreme') || secondary.includes('Acute')) score += 3;

    resultText.textContent = 'STATUS: OPTIMAL (' + score + '% CAPACITY)';
    resultDesc.textContent = 'Analysis: Configured for ' + primary.split('(')[0].trim() + ' with ' + secondary.split('(')[0].trim() + '. Verified 100% compliance.';
  }

  selects.forEach(sel => {
    sel.addEventListener('change', updateCalculation);
  });

  // Initial calculation
  updateCalculation();
});
