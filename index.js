const input = document.querySelector('.value');
const button = document.querySelector('.submit');
const display = document.querySelector('.display');

function reverseArray(event){
    return event.split("").reverse().join("");
}

button.addEventListener('click',()=>{
    const userValue = input.value;
    const reverse = reverseArray(userValue);

    display.innerHTML = reverse;
})