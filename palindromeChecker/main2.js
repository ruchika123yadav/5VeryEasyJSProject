
 function reverse(string){
   return  string.split("").reverse().join("");
 }


let input = document.querySelector('input');
let button=document.querySelector('.button')

button.addEventListener('click',function(){
    let string = input.value;
    input.value="";
  console.log(string);
    let oppo=reverse(string);
    console.log(oppo);
    if(oppo===string){
        return  alert("String is Palindrome")
    }
    return alert("String is not Palindrome")

}
)