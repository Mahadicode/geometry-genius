// function for calculate area 

function calculateParallelogram() {
  const base = inputCalculateById('parallelogram-base')
  const height = inputCalculateById('parallelogram-height')
  const area = base * height
  setInnerText('parallelogram-area', area)
}

// function for get base and height 
function inputCalculateById(parallelogramInputId) {
  const inputText = document.getElementById(parallelogramInputId)
  const inputValue = inputText.value;
  const input = parseFloat(inputValue)
  return input;
}

// function for set innerText 
function setInnerText(innerId,area) {
  const innerTextId = document.getElementById(innerId)
  innerTextId.innerText = area;
  return innerTextId;
}