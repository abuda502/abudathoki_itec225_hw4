function binaryToDecimal() {
	var binary = document.getElementById("BiNum").value;
 var sum = 0, exp = 1;
	if(binary == ""){
		alert("Please fill up the required field with binary value");
	}else{
		if (!Number.isNaN(binary)) {
			for (let x=0; x < binary.length; x++) {
				sum += parseInt(binary[x]) * Math.pow(2, binary.length - exp);
				exp+=1;
			   }
			document.getElementById("result").innerHTML = "<label style='font-size:18px;'>The decimal number is </label>"+sum.toString()+"</h3>";
		}else{
			alert("Please enter binary numbers"); 
		}
    }}

function decimalToBinary(){
        var decimal = document.getElementById("Decimal").value;
		let b = "", n ="", ans = "";
 
	if(decimal == ""){
		alert("Please fill up the required field with decimal value");
	}
    else{
		if (!Number.isNaN(decimal)){
			decimal = parseInt(decimal);
		while(decimal >=1){
			b = parseInt(decimal/2);
			n+=Math.floor(decimal % 2);
			ans =n.toString();
			decimal = b;
		}
		ans = ans.split("").reverse().join("");
		}
		document.getElementById("result1").innerHTML = `<label style='font-size:18px;'>The binary number is </label>${ans}</h3>`;
	}
}

        
    

    
