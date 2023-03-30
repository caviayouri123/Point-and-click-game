document.getElementById("mainTitle").innerText = "Point and click adventure";

const offsetCharacter = 16;
const gameWindow = document.getElementById("gameWindow");

const sec = 1000;

let tempTimeOut;

//Main character
const mainCharacter = document.getElementById("mainCharacter");
const characterAudio = document.getElementById("characterAudio");
const mainCharacterSpeech = document.getElementById("mainCharacterSpeech");

//Counter character
const counterSpeech = document.getElementById("counterSpeech");
const counterAudio = document.getElementById("counterAudio");
const counterPortrait = document.getElementById("counterCharacter");

//inventory
let inventory = [];
const inventoryList = document.getElementById("inventoryList");

gameWindow.onclick = function (e) {

    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element.
    var y = e.clientY - rect.top;  //y position within the element.
    mainCharacter.style.left = x - offsetCharacter + "px";
    mainCharacter.style.top = y - offsetCharacter + "px";

    console.log(e.target.id);

    switch (e.target.id) {
        case "princess":
            //something insert here
            if (checkItem("gold", "gold01", "gold02")) {
                showMessage(mainCharacterSpeech, characterAudio, "Yay, you colleted all the gold and saved me!");
            } else {
                showMessage(mainCharacterSpeech, characterAudio, "Help! Please save me from the monster and collect all the gold to save me.");
            }
            break;
        case "monster":
            //something insert here
            showMessage(mainCharacterSpeech, characterAudio, "Muahahahah, you never find the gold!");
            break;
        case "signToLeft":
            //something insert here
            showMessage(mainCharacterSpeech, characterAudio, "Okay that house on the left<br>that's the house of the town wizard.");
            break;
        case "statue":
            counterPortrait.style.opacity = 1;
            showMessage(mainCharacterSpeech, characterAudio, "What is this for statue?");
            setTimeout(showMessage, 4 * sec, counterSpeech, counterAudio, "Finaly someone to talk to");
            setTimeout(showMessage, 8 * sec, mainCharacterSpeech, characterAudio, "What do you mean? Statues are not supose to talk anyway..");
            setTimeout(showMessage, 12 * sec, counterSpeech, counterAudio, "You should check one off the graves");
            setTimeout(function () { counterPortrait.style.opacity = 0; }, 16 * sec);
            setTimeout(showMessage, 16 * sec, mainCharacterSpeech, characterAudio, "Wait! What?");
            break;
        case "chest":
            if (!checkItem("gold")) {
                getItem("gold", "gold");
                showMessage(mainCharacterSpeech, characterAudio, "Wow I found a gold!<br>Must been lying here for ages..");
                setTimeout(hideMessage, 4 * sec, mainCharacterSpeech, characterAudio);
            } else {
                showMessage(mainCharacterSpeech, characterAudio, "Nope nothing here...");
                setTimeout(hideMessage, 4 * sec, mainCharacterSpeech, characterAudio);
            }

            break;
            case "chest01":
            if (!checkItem("gold01")) {
                getItem("gold01", "gold01");
                showMessage(mainCharacterSpeech, characterAudio, "Wow I found a gold!<br>Must been lying here for ages..");
                setTimeout(hideMessage, 4 * sec, mainCharacterSpeech, characterAudio);
            } else {
                showMessage(mainCharacterSpeech, characterAudio, "Nope nothing here...");
                setTimeout(hideMessage, 4 * sec, mainCharacterSpeech, characterAudio);
            }

            break;
            case "chest02":
            if (!checkItem("gold02")) {
                getItem("gold02", "gold02");
                showMessage(mainCharacterSpeech, characterAudio, "Wow I found a gold!<br>Must been lying here for ages..");
                setTimeout(hideMessage, 4 * sec, mainCharacterSpeech, characterAudio);
            } else {
                showMessage(mainCharacterSpeech, characterAudio, "Nope nothing here...");
                setTimeout(hideMessage, 4 * sec, mainCharacterSpeech, characterAudio);
            }

            break;
        default:
            // do something when it doesn't have a case
            hideMessage(mainCharacterSpeech, characterAudio);
            hideMessage(counterSpeech, counterAudio);
            break;
    }

    //console.log(x);
}

function showMessage(targetBalloon, targetSound, message) {
    targetSound.play();
    targetBalloon.style.opacity = "1";
    targetBalloon.innerHTML = message;
    setTimeout(hideMessage, 4 * sec, targetBalloon, targetSound);
}

function hideMessage(targetBalloon, targetSound) {
    targetSound.pause();
    targetBalloon.style.opacity = "0";
    targetBalloon.innerHTML = "...";
}

function getItem(itemName, itemId) {
    if (!checkItem(itemName)) {
        inventory.push(itemName);
        showItem(itemName, itemId);
    }

}

function checkItem(item) {
    return inventory.includes(item);
}

function showItem(itemName, itemId) {
    //Make a list item from scratch and store it in a variable
    let listItem = document.createElement("li");

    //Give List Item an ID name
    listItem.id = itemId;

    //fill that list item with value of inputfield
    listItem.appendChild(document.createTextNode(itemName));

    //find UL with id todoContainer and attach the list item to it.
    inventoryList.appendChild(listItem);
}

function removeItem(itemName, itemId) {
    //remove item in Array
    inventory = inventory.filter(function (newInventory) {
        return newInventory !== itemName;
    });
    //removes list element in HTML
    document.getElementById(itemId).remove();

}

