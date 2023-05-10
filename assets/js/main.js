// const mail = document.getElementById('mail')
// const parol = document.getElementById('parol')
// const add = document.getElementById('add')

// function buttonAdd(){
//     if(!(document.getElementById("mail").value.includes("@")))
//         mail.style.border="1px solid red"
//     if(!(parol.value.length>6 && isUpper(parol.value) && isLower(parol.value) && isNaN(parol.value))){
//         parol.style.border="1px solid red"
//     }
// }
// function isUpper(words){
//     for (const letter of words) {
//      if(letter == letter.toUpperCase())
//      return true
//     }
//     return false
// }
// function isLower(words){
//     for (const letter of words) {
//      if(letter == letter.toLowerCase())
//         return true
//     }
//     return false
// }
// function isDigit(num){
//     for  (const letter of num){
//         if(!isNaN(letter)){
//             return true
//         }
//     }   
//     return false
// }

const hamisi = document.getElementById('hamisi')
const hadise = document.getElementById('hadise')
const yildiz = document.getElementById('yildiz')
const edis = document.getElementById('edis')
const hadis = document.getElementsByClassName('hadise')
const edi = document.getElementsByClassName('edis')
const yildi = document.getElementsByClassName('yildiz')
function selectImg(){
    if(hadise.getAttribute('hadise') == false){
        hadise.style.display = none
    }
}