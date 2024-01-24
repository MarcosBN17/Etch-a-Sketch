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

    //Create slide
    const gridSlide = document.createElement('input');
    gridSlide.setAttribute('type', 'range');
    gridSlide.setAttribute('min', '1');
    gridSlide.setAttribute('max', '64');
    gridSlide.setAttribute('value', '18');
    gridSlide.setAttribute('class', 'input-slider');
    gridSlide.setAttribute('id', 'slider');

    //Append elements to sidebox div
    sidebox.appendChild(heading);
    sidebox.appendChild(label);
    sidebox.appendChild(colorPicker);
    sidebox.appendChild(clearButton);
    sidebox.appendChild(gridSlide);

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
    const slider = document.getElementById('slider');

    // Color Picker function
    colorpicker.addEventListener('input', function() {
        const selectedColor = colorPicker.value;
        document.documentElement.style.setProperty('--selected-color', selectedColor);
    });

    // Reset button function
    clearbutton.addEventListener('click', function() {
        const squares = document.querySelectorAll('.grid-square');
        squares.forEach(square => {
<<<<<<< HEAD
            square.style.backgroundColor = '';
=======
>>>>>>> 9dabc66f9cb7b0a685159429b6b3bf84eee16dfc
            square.style.backgroundColor = 'transparent';
            square.style.transition = 'background-color 0.5s ease';
        });
    });

    slider.addEventListener("change", () => {
        let squares = slider.value;

        container.innerHTML = "";

        container.style.gridTemplateRows = `repeat(${squares}, 1fr)`;
        container.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;

        for (let i = 0; i < (squares * squares); i++) {
            let square = document.createElement('div');
            square.classList.add("grid-square");

            //Add event listener for hover effect
            square.addEventListener('mouseover', function() {
                square.style.backgroundColor = document.documentElement.style.getPropertyValue('--selected-color');

            });
            container.appendChild(square);
        }
    });

       /*   
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
    */
    
    

    // Retrieve the placeholder and append the footer container
    const footerContainer = document.createElement('div');
    footerContainer.classList.add('footer-container');
    const footerText = document.createElement('p');
    footerText.textContent = 'Developed by Marcos Neves | Copyright © 2024';
    footerContainer.appendChild(footerText);

    //Append footer container to body
    document.body.appendChild(footerContainer);

});




