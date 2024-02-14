function ellipseAreCalculate() {
  const a = inputCalculateById('ellipse-a');
  const b = inputCalculateById('ellipse-b');
  // area calculate 
  const area = 3.1416 * a * b;
  // display the area 
  setInnerText('ellipse-inner-text', area);
}
function colorChange() {
  const eventListenerAdd = document.getElementById('ellipse-container');
  eventListenerAdd.style.backgroundColor='red'
}