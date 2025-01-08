
const textArea = document.getElementById("text");
const bottonResult = document.getElementById("result");

function sum() {
  const text = textArea.value;
  const auxDelimiter = text.substring(0, text.indexOf('\n'));
  const delimiter = getDelimiter(auxDelimiter);
  let result = '';
  if (!delimiter) {
    result = Add(text, ',');
  } else {
    result = Add(text.substring(text.indexOf('\n') + 1), delimiter);
  }
  alert(result);
}

bottonResult.addEventListener('click', sum);


function Add(numbers, delimiter) {
    if (numbers === "") {
      return 0
    }
    numbers = numbers.replaceAll('\n', delimiter);

    const arrayNumbers = numbers.split(delimiter);
    
    const negativeNumb = arrayNumbers.filter((number) => Number(number) < 0)
   
    if (negativeNumb.length > 0) {
      return "negatives not allowed: " + negativeNumb;
    }

   let sum = 0;
   arrayNumbers.forEach(num => {
    sum = sum + (isNaN(Number(num))?0:Number(num))
   })
  
  return 'The total sum is: ' + sum;
    
  }
  
  function getDelimiter(text) {
    if (text.substring(0, 2) !== '//') {
      return '';
    } else {
      return text.substring(2);
    }
  }