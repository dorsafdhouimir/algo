function tagetVAL(arr,targetV){
  for(let i=0;i<arr.length;i++){
    if(arr[i]===targetV){
      console.log(arr[i])
      return i 
    }
    }
      
    return -1      
    
    
  }


let arr=[1,2,3,4]
let targetV=3
console.log(tagetVAL(arr,targetV))
//----------------------------------------
function palindrome(str){
  for(let i=0;i<str.length;i++){
    if(str[i]===str[str.length - 1 - i]){
      return true

    }
    return false
  }
}
console.log (palindrome(kayak))
//----------------------------------------
function voyelles(str){
  let vowels= [a, e, i, o, u]
  count=0
  for(let i=0;i<str.length;i++){
    if(str[i]===vowels){
      count++

    }
    return -1
  }
  
}
console.log(voyelles(dorsaf))

//-----------------------------------------------
function findmax(arr){
  let maxuimum=arr[0]
  let arr=[10,50,60,70,80,90,100]
  for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
       max=arr[i]
    }
    return max
  }

}
console.log (findmax(arr))
//------------------------------------------------------
function factorial(n){
  if(n<0){
    return undefined1
  }else if(n == 0 or n == 1){
    return 1
  }else{

    return n * factorial(n - 1)

  }
}
let n= 5
console.log(factorial(n))
//-------------------------------------------------------
function sortedarr(arr1,arr2){
  let Soarray=[]
  for(let i=0;i<arr1.length;i++)
    for(let j=0;j<arr2.length;j++)
      if (arr1[i] < arr2[j]) {
        Soarray.push(arr1[i]);
      }
    }else{
      Soarray.push(arr2[j]);
    
}
const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
console.log(sortedarr(arr1, arr2))
//--------------------------------------
function sortedarr(arr1, arr2) {
  const merged = [...arr1, ...arr2];
  return merged.sort((a, b) => a - b)

}
const array1 = [1, 3, 5];
const array2 = [2, 4, 6];
const result = sortedarr(array1, array2);
console.log(result);
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





