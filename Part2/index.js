console.log('the house always wins ')
const idInput = document.getElementById('idInput')
const color = document.getElementById('colorInput')

console.log( idInput)
console.log ( color )

function setCard () {
    const card = document.getElementById(idInput.value)
    card.style.color = colorInput.value;
    console.log(card)
}