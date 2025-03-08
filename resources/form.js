window.onload = function () {
    var colorSchemeInput = document.getElementById("colorScheme");
    const submitButton = document.getElementById("submit");

    //crearea unui element html
    var colorHexDisplay = document.createElement("span");
    colorHexDisplay.id = "colorHex";
    var pinkColor = window.getComputedStyle(document.getElementById("submit") ).color;
    colorHexDisplay.style.color = pinkColor; //folosire getComputedStyle
    colorSchemeInput.parentNode.insertBefore(colorHexDisplay, colorSchemeInput.nextSibling);

    // local storage
    if (!localStorage.getItem("colorScheme")) {
        populateStorage();
    }

    colorSchemeInput.onchange = function() {
        populateStorage();
    };

    const value = document.querySelector("#value");
    const input = document.querySelector("#budget");
    if (value && input) {
        value.textContent = input.value;
        input.addEventListener("input", (event) => {
            value.textContent = event.target.value;
        });
    }
};

function populateStorage() {
    localStorage.setItem("colorScheme", document.getElementById("colorScheme").value);
    setStyle();
}

function setStyle() {
    var currentColor = localStorage.getItem("colorScheme");
    //modificarea stilului unui element
    document.getElementById("ryu2").style.backgroundColor = currentColor;
    updateColorHexDisplay(currentColor);
}

function updateColorHexDisplay(color) {
    var colorHexDisplay = document.getElementById("colorHex");
    colorHexDisplay.textContent = ` ${color}`;//modificare proprietate
    
}

getElementById("form").onsubmit = function(event) {
    event.preventDefault();
    alert("Lol"); //nu stiu cum sa fac sa mearga  :(
};
