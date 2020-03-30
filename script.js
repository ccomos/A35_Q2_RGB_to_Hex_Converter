const convertBtn = document.getElementById('convertBtn')

// Convert RGB to HEX and show color
convertBtn.addEventListener('click', function(){
  let rValue = Number(document.getElementById('r-value').value)
  let gValue = Number(document.getElementById('g-value').value)
  let bValue = Number(document.getElementById('b-value').value)
  let rHEX = rValue.toString(16).padStart(2, '0')
  let gHEX = gValue.toString(16).padStart(2, '0')
  let bHEX = bValue.toString(16).padStart(2, '0')
  
  if (rValue >= 0 && rValue <= 255 && gValue >= 0 && gValue <= 255 && bValue >= 0 && bValue <= 255  ){
    hexValue = `#${rHEX}${gHEX}${bHEX}`
    document.getElementById("HEX-result").value = `${hexValue}`
    document.getElementById("HEX-color").style.backgroundColor = `${hexValue}`
    //console.log(hexValue)
  } else{
    alert('請於RGB輸入0~255數字');
  }
  
})