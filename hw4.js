
const key = 'Anita'

// all html elements
const encryptBtn = document.querySelector('.encryptBtn')
const userInput = document.querySelector('.userInput')
const actualText = document.querySelector('.actual-text')
const aesResult = document.querySelector('.aes-result')
const sha1Result = document.querySelector('.sha1-result')
const sha224Result = document.querySelector('.sha224-result')
const sha256Result = document.querySelector('.sha256-result')

// getting user input string when button is clicked
encryptBtn.addEventListener("click", () => {
    // get user input
    let inputString = userInput.value

    // reseting text containers 
    actualText.textContent = ""
    aesResult.textContent = ""
    sha1Result.textContent = ""
    sha224Result.textContent = ""
    sha256Result.textContent = ""

    // if user input value length is 0 then give an alert
    if (inputString.trim().length === 0 ){
        alert("You should must enter string to encrypt")
    }
    else{
        // encrypting and showing values in html
        let aesVal = CryptoJS.AES.encrypt(inputString, key).toString()
        let sha1Val = CryptoJS.SHA1(inputString).toString()
        let sha224Val = CryptoJS.SHA224(inputString).toString()
        let sha256Val = CryptoJS.SHA256(inputString).toString()

        actualText.textContent = inputString
        aesResult.textContent = aesVal
        sha1Result.textContent = sha1Val
        sha224Result.textContent = sha224Val
        sha256Result.textContent = sha256Val
    }
})