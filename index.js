
const textArea = document.getElementById("text");
const bottonResult = document.getElementById("result");

function sum() {
    const text = textArea.value;
    const array = text.split("\n");
    const delimiter = array[0].substring(2);
    alert(Add(array[1], delimiter));
}

bottonResult.addEventListener('click', sum);

function Add(numbers, delimiter) {
    if (numbers === "") {
      return 0
    }
    
    const arrayNumbers = numbers.split(delimiter);
    
   let sum = 0;
   arrayNumbers.forEach(num => {
    sum = sum + (isNaN(Number(num))?0:Number(num))
   })
  
  return sum
    
  }
  