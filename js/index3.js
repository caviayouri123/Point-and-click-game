document.getElementById("mainTitle").innerText = "Point and Click adventure";
const offsetCharacter = 16;
const gameWindow = document.getElementById("gameWindow");
const mainCharacter = document.getElementById("mainCharacter");

gameWindow.onclick = function (e) {
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element.
    var y = e.clientY - rect.top;  //y position within the element.

    mainCharacter.style.left = x - offsetCharacter + "px";
    mainCharacter.style.top = y - offsetCharacter + "px";

    console.log(e.target.id);
    switch (e.target.id) {
        case "door1":
            console.log("this door is closed.. DAMN YOU DOOR!");
            break;
        case "door2":
            console.log("Nobody is here... what should I do?");
            break;
        default:
            console.log("I don't know what I want to do...");
            break;
    }

}