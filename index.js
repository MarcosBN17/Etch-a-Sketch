
//Container div
const container = document.querySelector('#container');

//16x16 grid of square divs
for (let i= 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        //Create new div element
        let square = document.createElement('div');

        //Add a class to the div for styling
        square.classList.add('grid-square');
        //square.textContent = "Hello";

        //Append the div to the container
        container.appendChild(square);
    }
}