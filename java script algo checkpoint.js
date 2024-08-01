
//----------------checkpoint----------------------------
function analyzeSentence() {
  const sent = prompt("Enter a sentence ending with a point: ");
  let lengthc = 0;
  let vowelC = 0;
  const vowels = "aeiouAEIOU";
  for (let i = 0; i < sent.length; i++) {
      const elem = sent[i];
      lengthc++;
        
      if (vowels.includes(elem)) {
          vowelC++;
      }
      if (elem === '.') {
          break;
      }

  }
  console.log(lengthc);
  console.log( vowelC);
}
//---------------checkpoint2---------------------------
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentElement = arr[i];
    let position = i;
    while (position > 0 && arr[position - 1] > currentElement) {
      arr[position] = arr[position - 1];
      position--;
    }
    arr[position] = currentElement;
  }
  return arr;
}








