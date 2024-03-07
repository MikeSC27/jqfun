

// Define the generateCharacterString function
function generateCharacterString(char, count) {
    return char.repeat(count);
}

// Call window.onload after defining generateCharacterString
window.onload = function(){
    const body = document.body;
    console.log("Keep Going");

    body.style.backgroundColor = "coral";

    const div = createPageElement("div", body, "div")
    
    const h1 = createPageElement("h1", body, "h1", "GVN");
    const nav = createPageElement("nav", body, "nav", "");
    const navMenu = createPageElement("ul", nav, "nav__menu", "GVN Interns");
    // const navMenuDon = createPageElement("li", navMenu, "nav__menu__item", "Don");
    // const navMenuSzymon = createPageElement("li", navMenu, "nav__menu__item", "Szymon");
    const navMenuMike = createPageElement("li", navMenu, "nav__menu__item", "Mike");
    const navMenuGrant = createPageElement("li", navMenu, "nav__menu__item", "Grant");



    // Create select element
    const contentSelect = createPageElement("select", body, "", "");
    contentSelect.id = "contentSelect";

    // Create options for the select element
    const options = ["CHOOSE", "Five", "Ten", "Fifteen", "Twenty", "Thirty"];
    options.forEach(optionText => {
        createPageElement("option", contentSelect, "", optionText, "");
    });

    // Insert a line break
    const br = createPageElement("br", body);
    createPageElement("br", body);


    // Create textarea element
    const contentArea1 = createPageElement("textarea", body, "", "");
    contentArea1.style.color = "blue";
    contentArea1.style.backgroundColor = "yellow";

    // Create second textarea element
    const contentArea2 = createPageElement("textarea", body, "", "");
    contentArea2.style.color = "yellow";
    contentArea2.style.backgroundColor = "blue";


    createPageElement("br", body);
    createPageElement("br", body);

    // Create button element
    const copyButton = createPageElement("button", body, "", "Szymon Says Copy", "");

    createPageElement("br", body);
    createPageElement("br", body);


    const h2 = createPageElement("h2", body, "h2", "ReSizE");

    // const h3 = createPageElement("h3", body, "h3", "Height:");
    // createPageElement("h3", body, "h3", "Width:");

     // Create first input text box with associated h3 tags for numbers only
     const heightInputContainer = createPageElement("div", body, "input-container", "");
     heightInputContainer.style.display = "flex"; // Set display to flex
 
     const heightLabel = createPageElement("h3", heightInputContainer, "", "Height:", "");
     const heightInput = createPageElement("input", heightInputContainer, "", "", "");
     heightInput.style.height = "40px"; 
     heightInput.style.width = "80px"; 
     heightInput.addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9]/g, ''); 
    });
     const heightUnit = createPageElement("h3", heightInputContainer, "", "pixels", "");
 
      createPageElement("br", body);


    // Create second input text box with associated h3 tags
    const widthInputContainer = createPageElement("div", body, "input-container", "");
    widthInputContainer.style.display = "flex"; // Set display to flex

    const widthLabel = createPageElement("h3", widthInputContainer, "", "Width:", "");
    const widthInput = createPageElement("input", widthInputContainer, "", "", "");
    widthInput.style.height = "40px"; 
    widthInput.style.width = "80px"; 
    widthInput.addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9]/g, ''); 
    });
    const widthUnit = createPageElement("h3", widthInputContainer, "", "pixels", "");

    // Create "Action" button
    const actionButton = createPageElement("button", body, "action-button", "Action", "");
    createPageElement("br", body);
    createPageElement("br", body);

        // Create a new box with initial size of 100x100 pixels
        const newBox = createPageElement("div", body, "resized-box", "");
        newBox.style.width = "100px";
        newBox.style.height = "100px";
        newBox.style.border = "2px solid blue";
        newBox.style.backgroundColor = "yellow"
    
        // Add event listener to the "Action" button
        actionButton.addEventListener('click', () => {
            // Get height and width values
            let heightValue = parseInt(heightInput.value);
            let widthValue = parseInt(widthInput.value);
    
            // Check if heightValue or widthValue are equal to or less than 0
            if (heightValue <= 0 || widthValue <= 0 || heightInput.value === "" || widthInput.value === "") {
                alert("Height and width input values can not be empty and must be greater than 0.");
                return; // Exit the function
            }
    
            // Resize the new box
            newBox.style.width = `${widthValue}px`;
            newBox.style.height = `${heightValue}px`;
        });

// // Add event listener to the "Action" button
// actionButton.addEventListener('click', () => {
//     // Get height and width values
//     const heightValue = parseInt(heightInput.value);
//     const widthValue = parseInt(widthInput.value);

//     // Check if heightValue or widthValue are equal to or less than 0
//     if (heightValue <= 0 || widthValue <= 0) {
//         alert("Height and width values must be greater than 0.");
//         return; // Exit the function
//     }

//     createPageElement("br", body);
//     // Create a new box with specified dimensions
//     const newBox = createPageElement("div", body, "resized-box", "");
//     newBox.style.width = `${widthValue}px`;
//     newBox.style.height = `${heightValue}px`;
//     newBox.style.border = "2px solid blue";
//     newBox.style.backgroundColor = "yellow"
// });


    // Add event listener to the button
    copyButton.addEventListener('click', () => {
        // Copy text from first textarea to second textarea
        contentArea2.value = contentArea1.value;
    });

    // Event listener for select element change
    contentSelect.addEventListener('change', () => {
        const selectedValue = contentSelect.value;
        let characterString = '';

        // Generate character string based on selected value
        switch(selectedValue) {
            case 'Five':
                characterString = generateCharacterString('A', 50);
                break;
            case 'Ten':
                characterString = generateCharacterString('B', 100);
                break;
            case 'Fifteen':
                characterString = generateCharacterString('C', 150);
                break;
            case 'Twenty':
                characterString = generateCharacterString('D', 200);
                break;
            case 'Thirty':
                characterString = generateCharacterString('F', 300);
                break;
            default:
                characterString = '';
        }

        // Update text area with character string
        contentArea1.value = characterString;
    });

    // Function to create HTML elements dynamically
    function createPageElement($element = "div", $parent = body, $classList = null, $innerText = "", $innerHTML = "") {
        const element = document.createElement($element);
        if ($classList != null) 
            element.className = $classList;
        if ($innerText != "") 
            element.innerText = $innerText;
        if ($innerHTML != "") 
            element.innerHTML = $innerHTML;
        $parent.appendChild(element);
        return element;
    }
};




    // nav.style.backgroundColor = "grey";

    // const restOfPage = createPageElement("div", body, "rest-of-page", "", "");
    // restOfPage.style.backgroundColor = "lightblue";