function calculateTriangle() {
  
  // get the triangle base 
  const triangleBaseInput = document.getElementById('base-input')
  const triangleBaseText = triangleBaseInput.value 
  const base = parseFloat(triangleBaseText)

  // get the triangle heights 
  const triangleHeightInput = document.getElementById('height-input')
  const triangleHeightText = triangleHeightInput.value 
  const height = parseFloat(triangleHeightText)
  
  // caculate the area 
  const area = 0.5 * base * height;

  // display the area 
  document.getElementById('area').innerText = area;
}