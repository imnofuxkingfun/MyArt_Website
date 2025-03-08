document.addEventListener('DOMContentLoaded', function() {
    const sizeButton = document.getElementById('size');
    const colorButton = document.getElementById('color');
    const clearButton = document.getElementById('clear');
    const skrunklyImage = document.getElementById('skrunklyImage');
    const clickMeButton = document.getElementById('clickMe');

    const minSize = 200;
    const maxSize = 700;

    sizeButton.addEventListener('click', function() {
        const randomSize = Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
        skrunklyImage.style.height = randomSize + 'px';
        skrunklyImage.style.width = 'auto';
        //modificare proprietati, metode din clasa MATH
    });

    colorButton.addEventListener('click', function() {
        const randomHue = Math.floor(Math.random() * 361);
        skrunklyImage.style.filter = 'hue-rotate(' + randomHue + 'deg)';
    });

    clearButton.addEventListener('click', function(){
        skrunklyImage.style.height = '700px';
        skrunklyImage.style.width = 'auto';
        skrunklyImage.style.filter = 'none';
        var txt = document.getElementById("skrunklyText")
        txt.textContent = "";
    });

    clickMeButton.addEventListener('click', function() {
        clickMeButton.textContent = 'idiot.';
        setTimeout(function(){
            clickMeButton.remove();
            //stergerea unui element html
        }, 2000);
    });
    
});

document.addEventListener('click', function(event){
    if(event.target.id === 'size' || event.target.id === 'color')
        {
            var txt = document.getElementById("skrunklyText")
            txt.textContent = "You messed with the: " + event.target.id;
        }
});