function calculateRhombusArea() {
  const d1 = inputCalculateById('rhombus-d1');
  const d2 = inputCalculateById('rhombus-d2');
  const area = 0.5 * d1 * d2;
setInnerText('rhombus-inner-text',area)
}