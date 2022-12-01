const prompt = require("prompt-sync")({ sigint: true });


const word = prompt("Enter Word? ");
const key = parseInt(prompt("Enter your Key Value? "));
var cipher_var=[]
const ch= word.split("")

for(var i=0; i< word.length ;i++){
  if(key < 26){
      
      let var1= word.charCodeAt(i);
      //console.log(var1)
    let var2=(((var1+key)-64)%26+65);
    //console.log(var2)
    let var3=String.fromCharCode(var2);
    cipher_var.push(var3)

    
    // let var1= word.charCodeAt(i);

    // let var2=var1+key
    // let var3=String.fromCharCode(var2);
    // cipher_var.push(var3)
  }
  
  //let a= cipher_var.trim();
  //let a=Character.toString(cipher_var)
  //const strippedString = cipher_var.replace(/(<([^>]+)>)/gi, "");
  //console.log(cipher_var.toString())
 

}
let a=cipher_var.toString();
console.log("Cipher Text:"+a.replace(/,/g,""))

//x="hello"
//a=x.split(" ")
//console.log(a)
//console.log(a.toString())






