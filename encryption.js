function aesEncryption(input){
    CryptoJS.pad.NoPadding = {pad: function(){}, unpad: function(){}} ;
        
    var CryptoJS = require("crypto-js");
    const inputString= getInput();
    var secretkey = CryptoJS.enc.Hex.parse("2345676fFKJBTOBGJL");
    var encrypted = CryptoJS.AES.encrypt(inputString,secretkey);
document.getElementById("AES").innerHTML
=  encrypted.toString();
    

}
function getInput() {
    const input = document.getElementById("input").value;
    if (input.length === 0) {
        alert('Enter the string because input cannot be empty, Thanks', null);
        alert('Try again',null);
 } }