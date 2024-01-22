//DOM Content
document.addEventListener('DOMContentLoaded', function() {

    // Create wrapper div
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');

    //Create sidebox div
    const sidebox = document.createElement('div');
    sidebox.classList.add('sidebox');

    //Create heading for sidebox
    const heading = document.createElement('h2');
    heading.textContent = 'Color Picker';

    //Create label for color picker
    const label = document.createElement('label');
    label.setAttribute('for', 'colorPicker');
    label.textContent = 'Choose a color:';

    // Create color picker input
    const colorPicker = document.createElement('input');
    colorPicker.setAttribute('type', 'color');
    colorPicker.setAttribute('id', 'colorPicker');
    colorPicker.setAttribute('value', '#000000');

    // Create Clear button
    const clearButton = document.createElement('button');
    clearButton.setAttribute('id', 'clearButton');
    clearButton.textContent = 'Clear';

    //Append elements to sidebox div
    sidebox.appendChild(heading);
    sidebox.appendChild(label);
    sidebox.appendChild(colorPicker);
    sidebox.appendChild(clearButton);

    //Append sidebox to wrapper div
    wrapper.appendChild(sidebox);

    //Create container div
    const container = document.createElement('div');
    container.setAttribute('id', 'container');

    //Append container to wrapper
    wrapper.appendChild(container);

    //Append wrapper to body
    document.body.appendChild(wrapper);

    //Container div
    const colorpicker = document.getElementById('colorPicker');
    const clearbutton = document.getElementById('clearButton');

    // Color Picker function
    colorpicker.addEventListener('input', function() {
        const selectedColor = colorPicker.value;
        document.documentElement.style.setProperty('--selected-color', selectedColor);
    });

    // Reset button function
    clearbutton.addEventListener('click', function() {
        const squares = document.querySelectorAll('.grid-square');
        squares.forEach(square => {
            square.style.backgroundColor = 'transparent';
            square.style.transition = 'background-color 0.5s ease';
        });
    });

    // 16x16 grid of square divs
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            // Create new div element
            let square = document.createElement('div');

            // Add a class to the div for styling
            square.classList.add('grid-square');

            square.addEventListener('mouseover', function() {
                square.style.backgroundColor = document.documentElement.style.getPropertyValue('--selected-color');
            });

            // Append the div to the container
            container.appendChild(square);
        }
    }

    // Retrieve the placeholder and append the footer container
    const footerContainer = document.createElement('div');
    footerContainer.classList.add('footer-container');
    const footerText = document.createElement('p');
    footerText.textContent = 'Developed by Marcos Neves | Copyright © 2024';
    footerContainer.appendChild(footerText);

    //Append footer container to body
    document.body.appendChild(footerContainer);

});




