// One explicit selection controls the desktop readout and mobile expanded row.
// No automatic cycling: a focused or tapped case stays selected.
const caseButtons = [...document.querySelectorAll('[data-case]')];
const casePoints = [...document.querySelectorAll('[data-point]')];
const panel = document.querySelector('.focus-panel');

for (const button of caseButtons) {
  button.addEventListener('click', () => {
    for (const candidate of caseButtons) {
      const selected = candidate === button;
      candidate.classList.toggle('selected', selected);
      candidate.setAttribute('aria-pressed', String(selected));
    }
    for (const point of casePoints) {
      point.classList.toggle('selected', point.dataset.point === button.dataset.case);
    }
    panel.querySelector('h2').textContent = button.querySelector('strong').textContent;
    panel.querySelector('.focus-description').textContent = button.querySelector('.case-description').textContent;
    panel.querySelector('.focus-meta').textContent = button.querySelector('.case-meta').textContent;
  });
}
