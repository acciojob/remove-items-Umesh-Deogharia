//your JS code here. If required.
let select = document.getElementById('colorSelect');
let btn = document.querySelector('input');
let option = document.querySelectorAll('option');

let arr = [];

let selectOpt = [...select.options];

btn.addEventListener("click",check);
function check(e){
    let selectedValue = select.value;
    select.innerHTML = "";
    arr = selectOpt.filter((elem)=> selectedValue !== elem.value);
   arr.forEach((option) => select.appendChild(option));
    // let filtered = selectOpt.filter((elem)=>{
    //     return elem.value !== check2
    // } );
    selectOpt = arr;
}




