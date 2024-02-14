function pentagonAreaCalculate() {
  const p = inputCalculateById('pentagon-p');
  const b = inputCalculateById('pentagon-b');
  const area = 0.5 * p * b;
  setInnerText('pentagon-inner-text',area)
}

function pentagonColorChange() {
  const eventListenerAdd = document.getElementById('pentagon-container');
  eventListenerAdd.style.backgroundColor='pink'
}