
//Container div
const container = document.querySelector('#container');
const colorPicker = document.getElementById('colorPicker');
const clearButton = document.getElementById('clearButton');

//Color Picker function
colorPicker.addEventListener('input', function() {
    const selectedColor = colorPicker.value;
    document.documentElement.style.setProperty('--selected-color', colorPicker.value);
});

//Reset button function
clearButton.addEventListener('click', function() {
    const squares = document.querySelectorAll('.grid-square');
    squares.forEach(square => {
        square.style.backgroundColor = '';
    });
});




//16x16 grid of square divs
for (let i= 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        //Create new div element
        let square = document.createElement('div');

        //Add a class to the div for styling
        square.classList.add('grid-square');
        
        square.addEventListener('mouseover', function() {
            square.style.backgroundColor = document.documentElement.style.getPropertyValue('--selected-color');
        });

        //Append the div to the container
        container.appendChild(square);
    }
}