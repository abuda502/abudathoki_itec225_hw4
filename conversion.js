function binaryToDecimal() {
	var binary = document.getElementById("BiNum").value;
 
	if(binary == ""){
		alert("Please fill up the required field with binary value");
	}else{
		if(/^[01]+$/.test(binary)){
			var decimal = parseInt(binary, 2);
			document.getElementById("result").innerHTML = "<label style='font-size:18px;'>The decimal number is </label>"+decimal+"</h3>";
		}else{
			alert("Please enter binary numbers"); 
		}
    }}

function decimalToBinary(){
        var decimal = document.getElementById("Decimal").value;
 
	if(decimal == ""){
		alert("Please fill up the required field with decimal value");
	}
    else{
		decimal = parseInt(decimal);
		var binary = decimal.toString(2);
		document.getElementById("result1").innerHTML = `<label style='font-size:18px;'>The binary number is </label>${binary}</h3>`;
	}
}

        
    

    