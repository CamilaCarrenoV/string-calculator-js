
const textArea = document.getElementById("text");
const bottonResult = document.getElementById("result");

function sum() {
    const text = textArea.value;
    alert(Add(text));
}

bottonResult.addEventListener('click', sum);

function Add(numbers) {
    if (numbers === "") {
      return 0
    }
    const arrayNumbers = numbers.split(",");
    if (arrayNumbers.length > 2) {
      return "error"
    }
    const sum = arrayNumbers.reduce(function (a, b) {
      return (isNaN(parseInt(a))?0:parseInt(a)) + (isNaN(parseInt(b))?0:parseInt(b));
    })
  
  return sum
    
  }
  