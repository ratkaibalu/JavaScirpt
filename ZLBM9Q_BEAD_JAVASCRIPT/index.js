var elements = document.getElementsByClassName("random");
var Roads = new Array("horizontalRoad.jpg", "verticalRoad.jpg")
var Corners = new Array("leftBottom.jpg", "leftUpper.jpg", "rightBottom.jpg", "rightUpper.jpg");
var Side3 = new Array("bottomSide3.jpg", "leftSide3.jpg", "upperSide3.jpg", "rightSide3.jpg");
var lastimg = document.getElementById("lastimg");
var treasureMap = document.getElementsByClassName("treasureMap")
var playField = document.getElementsByClassName("field");
let treasure;

let tValue = document.getElementsByClassName("treasureValue")[0];
let playerNumber = document.getElementById("playerNumber");
var playerValue = document.getElementById("playerValue");
var treasureV = document.getElementById("treasureV");
let treasureVal = document.getElementById("treasureVal");

playerValue.innerText = playerNumber.value;
playerNumber.addEventListener("input" , treasureMax);
function treasureMax() {
    playerValue.innerText = playerNumber.value;
    treasureVal.setAttribute("max", (24/playerNumber.value) );
    treasureV.innerText = treasureVal.value;

}

treasureV.innerText = treasureVal.value;
treasureVal.addEventListener("input" , treasureFunc);
function treasureFunc() {
    treasureV.innerText = treasureVal.value;
}



function gameStart(){
    document.getElementsByClassName("div1")[0].style.display = "none";
    document.getElementsByClassName("div3")[0].style.display = "none";
    document.getElementsByClassName("div2")[0].style.display = "block";

    treasure = document.getElementsByClassName("treasureValue")[0].value;

    onLoad();
}
function gameDescription() {
    if(document.getElementsByClassName("div3")[0].style.display == "none"){
            document.getElementsByClassName("div3")[0].style.display = "block";
    }else{
        document.getElementsByClassName("div3")[0].style.display = "none";
    }


}
function newGame() {
    location.reload();
}

let elementNumber = elements.length;

function onLoad() {
    let roadCounter = 13;
    let cornerCounter = 6;
    let side3Counter = 15;
    let allCounter = roadCounter + cornerCounter + side3Counter;
    let i = 0;
    while (allCounter != 1) {
        let randNumber = Math.floor(Math.random() * 3);
        if (roadCounter != 0 && randNumber == 0) {
            let randRoads = Math.floor(Math.random() * Roads.length);
            elements[i].src = Roads[randRoads];
            i++;
            roadCounter--;
            allCounter--;
        }
        if (cornerCounter != 0 && randNumber == 1) {
            let randCorners = Math.floor(Math.random() * Corners.length);
            elements[i].src = Corners[randCorners];
            i++;
            cornerCounter--;
            allCounter--;
        }
        if (side3Counter != 0 && randNumber == 2) {
            let randSide = Math.floor(Math.random() * Side3.length);
            elements[i].src = Side3[randSide];
            i++;
            side3Counter--;
            allCounter--;
        }
    }
    if (roadCounter != 0) {
        let randRoads = Math.floor(Math.random() * Roads.length);
        lastimg.src = Roads[randRoads];
    }
    if (cornerCounter != 0) {
        let randCorners = Math.floor(Math.random() * Corners.length);
        lastimg.src = Corners[randCorners];
    }
    if (side3Counter != 0) {
        let randSide = Math.floor(Math.random() * Side3.length);
        lastimg.src = Side3[randSide];
    }
    while (treasure != 0) {
        let randNumber = Math.floor(Math.random() * treasureMap.length);
        let img = document.createElement('img');
        img.src = "blueTreasure.jpg";
        img.className = "treasure";
        let childCount = treasureMap[randNumber].childElementCount;
        if (childCount == 1) {
            treasureMap[randNumber].appendChild(img);
            treasure--;
        }
    }

    var img = document.createElement('img');
    img.src = "bluePlayer.jpg";
    img.className = "player";
    playField[6].appendChild(img);
}



//Room move
function upper1Arrow() {
    let seged = elements[30].src;
    elements[30].src = elements[24].src;
    elements[24].src = elements[20].src;
    elements[20].src = elements[14].src;
    elements[14].src = elements[10].src;
    elements[10].src = elements[4].src;
    elements[4].src = elements[0].src;
    elements[0].src = lastimg.src;
    lastimg.src = seged;
}

function upper2Arrow() {
    let seged = elements[31].src;
    elements[31].src = elements[26].src;
    elements[26].src = elements[21].src;
    elements[21].src = elements[16].src;
    elements[16].src = elements[11].src;
    elements[11].src = elements[6].src;
    elements[6].src = elements[1].src;
    elements[1].src = lastimg.src;
    lastimg.src = seged;
}

function upper3Arrow() {
    let seged = elements[32].src;
    elements[32].src = elements[28].src;
    elements[28].src = elements[22].src;
    elements[22].src = elements[18].src;
    elements[18].src = elements[12].src;
    elements[12].src = elements[8].src;
    elements[8].src = elements[2].src;
    elements[2].src = lastimg.src;
    lastimg.src = seged;
}

function left1Arrow() {
    let seged = elements[9].src;
    elements[9].src = elements[8].src;
    elements[8].src = elements[7].src;
    elements[7].src = elements[6].src;
    elements[6].src = elements[5].src;
    elements[5].src = elements[4].src;
    elements[4].src = elements[3].src;
    elements[3].src = lastimg.src;
    lastimg.src = seged;
}

function right1Arrow() {
    let seged = elements[3].src;
    elements[3].src = elements[4].src;
    elements[4].src = elements[5].src;
    elements[5].src = elements[6].src;
    elements[6].src = elements[7].src;
    elements[7].src = elements[8].src;
    elements[8].src = elements[9].src;
    elements[9].src = lastimg.src;
    lastimg.src = seged;
}

function left2Arrow() {
    let seged = elements[19].src;
    elements[19].src = elements[18].src;
    elements[18].src = elements[17].src;
    elements[17].src = elements[16].src;
    elements[16].src = elements[15].src;
    elements[15].src = elements[14].src;
    elements[14].src = elements[13].src;
    elements[13].src = lastimg.src;
    lastimg.src = seged;
}
function right2Arrow() {
    let seged = elements[13].src;
    elements[13].src = elements[14].src;
    elements[14].src = elements[15].src;
    elements[15].src = elements[16].src;
    elements[16].src = elements[17].src;
    elements[17].src = elements[18].src;
    elements[18].src = elements[19].src;
    elements[19].src = lastimg.src;
    lastimg.src = seged;
}
function left3Arrow() {
    let seged = elements[29].src;
    elements[29].src = elements[28].src;
    elements[28].src = elements[27].src;
    elements[27].src = elements[26].src;
    elements[26].src = elements[25].src;
    elements[25].src = elements[24].src;
    elements[24].src = elements[23].src;
    elements[23].src = lastimg.src;
    lastimg.src = seged;
}
function right3Arrow() {
    let seged = elements[23].src;
    elements[23].src = elements[24].src;
    elements[24].src = elements[25].src;
    elements[25].src = elements[26].src;
    elements[26].src = elements[27].src;
    elements[27].src = elements[28].src;
    elements[28].src = elements[29].src;
    elements[29].src = lastimg.src;
    lastimg.src = seged;
}
function bottom1Arrow() {
    let seged = elements[0].src;
    elements[0].src = elements[4].src;
    elements[4].src = elements[10].src;
    elements[10].src = elements[14].src;
    elements[14].src = elements[20].src;
    elements[20].src = elements[24].src;
    elements[24].src = elements[30].src;
    elements[30].src = lastimg.src;
    lastimg.src = seged;
}

function bottom2Arrow() {
    let seged = elements[1].src;
    elements[1].src = elements[6].src;
    elements[6].src = elements[11].src;
    elements[11].src = elements[16].src;
    elements[16].src = elements[21].src;
    elements[21].src = elements[26].src;
    elements[26].src = elements[31].src;
    elements[31].src = lastimg.src;
    lastimg.src = seged;
}
function bottom3Arrow() {
    let seged = elements[2].src;
    elements[2].src = elements[8].src;
    elements[8].src = elements[12].src;
    elements[12].src = elements[18].src;
    elements[18].src = elements[22].src;
    elements[22].src = elements[28].src;
    elements[28].src = elements[32].src;
    elements[32].src = lastimg.src;
    lastimg.src = seged;
}

//Room rotate
function rotate() {
    if(lastimg.src.includes("verticalRoad.jpg")){
        lastimg.src = "horizontalRoad.jpg";
    }
    else if(lastimg.src.includes("horizontalRoad.jpg")){
        lastimg.src = "verticalRoad.jpg";
    }
    else if(lastimg.src.includes("leftBottom.jpg")){
        lastimg.src = "leftUpper.jpg";
    }
    else if(lastimg.src.includes("leftUpper.jpg")){
        lastimg.src = "rightUpper.jpg";
    }
    else if(lastimg.src.includes("rightUpper.jpg")){
        lastimg.src = "rightBottom.jpg";
    }
    else if(lastimg.src.includes("rightBottom.jpg")){
        lastimg.src = "leftBottom.jpg";
    }
    else if(lastimg.src.includes("bottomSide3.jpg")){
        lastimg.src = "leftSide3.jpg";
    }
    else if(lastimg.src.includes("leftSide3.jpg")){
        lastimg.src = "upperSide3.jpg";
    }
    else if(lastimg.src.includes("upperSide3.jpg")){
        lastimg.src = "rightSide3.jpg";
    }
    else if(lastimg.src.includes("rightSide3.jpg")){
        lastimg.src = "bottomSide3.jpg";
    }

}
//---Player move
function moveUp() {
    let playerIndex;
    for (let i = 0; i < playField.length; i++) {
        if (playField[i].lastChild.className == "player") {
            playerIndex = i;
        }
    }

    if (playerIndex > 6) {
        if (playField[playerIndex].firstChild.src.includes("verticalRoad.jpg") && (playField[playerIndex - 7].firstChild.src.includes("verticalRoad.jpg") || playField[playerIndex - 7].firstChild.src.includes("upperSide3.jpg") || playField[playerIndex - 7].firstChild.src.includes("rightUpperCorner.jpg") || playField[playerIndex - 7].firstChild.src.includes("leftUpperCorner.jpg") || playField[playerIndex - 7].firstChild.src.includes("rightSide3.jpg") || playField[playerIndex - 7].firstChild.src.includes("leftSide3.jpg") || playField[playerIndex - 7].firstChild.src.includes("leftUpper.jpg") || playField[playerIndex - 7].firstChild.src.includes("rightUpper.jpg"))) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 7;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        else if (playField[playerIndex].firstChild.src.includes("leftSide3.jpg") && (playField[playerIndex - 7].firstChild.src.includes("verticalRoad.jpg") || playField[playerIndex - 7].firstChild.src.includes("upperSide3.jpg") || playField[playerIndex - 7].firstChild.src.includes("rightUpperCorner.jpg") || playField[playerIndex - 7].firstChild.src.includes("leftUpperCorner.jpg") || playField[playerIndex - 7].firstChild.src.includes("rightSide3.jpg") || playField[playerIndex - 7].firstChild.src.includes("leftSide3.jpg") || playField[playerIndex - 7].firstChild.src.includes("leftUpper.jpg") || playField[playerIndex - 7].firstChild.src.includes("rightUpper.jpg"))) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 7;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        else if (playField[playerIndex].firstChild.src.includes("rightSide3.jpg") && (playField[playerIndex - 7].firstChild.src.includes("verticalRoad.jpg") || playField[playerIndex - 7].firstChild.src.includes("upperSide3.jpg") || playField[playerIndex - 7].firstChild.src.includes("rightUpperCorner.jpg") || playField[playerIndex - 7].firstChild.src.includes("leftUpperCorner.jpg") || playField[playerIndex - 7].firstChild.src.includes("rightSide3.jpg") || playField[playerIndex - 7].firstChild.src.includes("leftSide3.jpg") || playField[playerIndex - 7].firstChild.src.includes("leftUpper.jpg") || playField[playerIndex - 7].firstChild.src.includes("rightUpper.jpg"))) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 7;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        else if (playField[playerIndex].firstChild.src.includes("leftBottom.jpg") && (playField[playerIndex - 7].firstChild.src.includes("verticalRoad.jpg") || playField[playerIndex - 7].firstChild.src.includes("upperSide3.jpg") || playField[playerIndex - 7].firstChild.src.includes("rightUpperCorner.jpg") || playField[playerIndex - 7].firstChild.src.includes("leftUpperCorner.jpg") || playField[playerIndex - 7].firstChild.src.includes("rightSide3.jpg") || playField[playerIndex - 7].firstChild.src.includes("leftSide3.jpg") || playField[playerIndex - 7].firstChild.src.includes("leftUpper.jpg") || playField[playerIndex - 7].firstChild.src.includes("rightUpper.jpg"))) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 7;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        else if (playField[playerIndex].firstChild.src.includes("rightBottom.jpg") && (playField[playerIndex - 7].firstChild.src.includes("verticalRoad.jpg") || playField[playerIndex - 7].firstChild.src.includes("upperSide3.jpg") || playField[playerIndex - 7].firstChild.src.includes("rightUpperCorner.jpg") || playField[playerIndex - 7].firstChild.src.includes("leftUpperCorner.jpg") || playField[playerIndex - 7].firstChild.src.includes("rightSide3.jpg") || playField[playerIndex - 7].firstChild.src.includes("leftSide3.jpg") || playField[playerIndex - 7].firstChild.src.includes("leftUpper.jpg") || playField[playerIndex - 7].firstChild.src.includes("rightUpper.jpg"))) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 7;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        else if (playField[playerIndex].firstChild.src.includes("leftBottomCorner.jpg") && (playField[playerIndex - 7].firstChild.src.includes("verticalRoad.jpg") || playField[playerIndex - 7].firstChild.src.includes("upperSide3.jpg") || playField[playerIndex - 7].firstChild.src.includes("rightUpperCorner.jpg") || playField[playerIndex - 7].firstChild.src.includes("leftUpperCorner.jpg") || playField[playerIndex - 7].firstChild.src.includes("rightSide3.jpg") || playField[playerIndex - 7].firstChild.src.includes("leftSide3.jpg") || playField[playerIndex - 7].firstChild.src.includes("leftUpper.jpg") || playField[playerIndex - 7].firstChild.src.includes("rightUpper.jpg"))) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 7;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        else if (playField[playerIndex].firstChild.src.includes("rightBottomCorner.jpg") && (playField[playerIndex - 7].firstChild.src.includes("verticalRoad.jpg") || playField[playerIndex - 7].firstChild.src.includes("upperSide3.jpg") || playField[playerIndex - 7].firstChild.src.includes("rightUpperCorner.jpg") || playField[playerIndex - 7].firstChild.src.includes("leftUpperCorner.jpg") || playField[playerIndex - 7].firstChild.src.includes("rightSide3.jpg") || playField[playerIndex - 7].firstChild.src.includes("leftSide3.jpg") || playField[playerIndex - 7].firstChild.src.includes("leftUpper.jpg") || playField[playerIndex - 7].firstChild.src.includes("rightUpper.jpg"))) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 7;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        else if (playField[playerIndex].firstChild.src.includes("bottomSide3.jpg") && (playField[playerIndex - 7].firstChild.src.includes("verticalRoad.jpg") || playField[playerIndex - 7].firstChild.src.includes("upperSide3.jpg") || playField[playerIndex - 7].firstChild.src.includes("rightUpperCorner.jpg") || playField[playerIndex - 7].firstChild.src.includes("leftUpperCorner.jpg") || playField[playerIndex - 7].firstChild.src.includes("rightSide3.jpg") || playField[playerIndex - 7].firstChild.src.includes("leftSide3.jpg") || playField[playerIndex - 7].firstChild.src.includes("leftUpper.jpg") || playField[playerIndex - 7].firstChild.src.includes("rightUpper.jpg"))) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 7;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
    }
}
function moveDown() {
    let playerIndex;
    for (let i = 0; i < playField.length; i++) {
        if (playField[i].lastChild.className == "player") {
            playerIndex = i;
        }
    }

    if (playerIndex < 42) {
        if (playField[playerIndex].firstChild.src.includes("verticalRoad.jpg") && (playField[playerIndex + 7].firstChild.src.includes("verticalRoad.jpg") || playField[playerIndex + 7].firstChild.src.includes("bottomSide3.jpg") || playField[playerIndex + 7].firstChild.src.includes("leftBottom.jpg") || playField[playerIndex + 7].firstChild.src.includes("leftBottomCorner.jpg") || playField[playerIndex + 7].firstChild.src.includes("leftSide3.jpg") || playField[playerIndex + 7].firstChild.src.includes("rightBottom.jpg") || playField[playerIndex + 7].firstChild.src.includes("rightBottomCorner.jpg") || playField[playerIndex + 7].firstChild.src.includes("rightSide3.jpg"))) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 7;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        else if (playField[playerIndex].firstChild.src.includes("leftSide3.jpg") && (playField[playerIndex + 7].firstChild.src.includes("verticalRoad.jpg") || playField[playerIndex + 7].firstChild.src.includes("bottomSide3.jpg") || playField[playerIndex + 7].firstChild.src.includes("leftBottom.jpg") || playField[playerIndex + 7].firstChild.src.includes("leftBottomCorner.jpg") || playField[playerIndex + 7].firstChild.src.includes("leftSide3.jpg") || playField[playerIndex + 7].firstChild.src.includes("rightBottom.jpg") || playField[playerIndex + 7].firstChild.src.includes("rightBottomCorner.jpg") || playField[playerIndex + 7].firstChild.src.includes("rightSide3.jpg"))) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 7;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        else if (playField[playerIndex].firstChild.src.includes("rightSide3.jpg") && (playField[playerIndex + 7].firstChild.src.includes("verticalRoad.jpg") || playField[playerIndex + 7].firstChild.src.includes("bottomSide3.jpg") || playField[playerIndex + 7].firstChild.src.includes("leftBottom.jpg") || playField[playerIndex + 7].firstChild.src.includes("leftBottomCorner.jpg") || playField[playerIndex + 7].firstChild.src.includes("leftSide3.jpg") || playField[playerIndex + 7].firstChild.src.includes("rightBottom.jpg") || playField[playerIndex + 7].firstChild.src.includes("rightBottomCorner.jpg") || playField[playerIndex + 7].firstChild.src.includes("rightSide3.jpg"))) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 7;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        else if (playField[playerIndex].firstChild.src.includes("leftUpper.jpg") && (playField[playerIndex + 7].firstChild.src.includes("verticalRoad.jpg") || playField[playerIndex + 7].firstChild.src.includes("bottomSide3.jpg") || playField[playerIndex + 7].firstChild.src.includes("leftBottom.jpg") || playField[playerIndex + 7].firstChild.src.includes("leftBottomCorner.jpg") || playField[playerIndex + 7].firstChild.src.includes("leftSide3.jpg") || playField[playerIndex + 7].firstChild.src.includes("rightBottom.jpg") || playField[playerIndex + 7].firstChild.src.includes("rightBottomCorner.jpg") || playField[playerIndex + 7].firstChild.src.includes("rightSide3.jpg"))) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 7;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        else if (playField[playerIndex].firstChild.src.includes("leftUpperCorner.jpg") && (playField[playerIndex + 7].firstChild.src.includes("verticalRoad.jpg") || playField[playerIndex + 7].firstChild.src.includes("bottomSide3.jpg") || playField[playerIndex + 7].firstChild.src.includes("leftBottom.jpg") || playField[playerIndex + 7].firstChild.src.includes("leftBottomCorner.jpg") || playField[playerIndex + 7].firstChild.src.includes("leftSide3.jpg") || playField[playerIndex + 7].firstChild.src.includes("rightBottom.jpg") || playField[playerIndex + 7].firstChild.src.includes("rightBottomCorner.jpg") || playField[playerIndex + 7].firstChild.src.includes("rightSide3.jpg"))) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 7;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        else if (playField[playerIndex].firstChild.src.includes("rightUpper.jpg") && (playField[playerIndex + 7].firstChild.src.includes("verticalRoad.jpg") || playField[playerIndex + 7].firstChild.src.includes("bottomSide3.jpg") || playField[playerIndex + 7].firstChild.src.includes("leftBottom.jpg") || playField[playerIndex + 7].firstChild.src.includes("leftBottomCorner.jpg") || playField[playerIndex + 7].firstChild.src.includes("leftSide3.jpg") || playField[playerIndex + 7].firstChild.src.includes("rightBottom.jpg") || playField[playerIndex + 7].firstChild.src.includes("rightBottomCorner.jpg") || playField[playerIndex + 7].firstChild.src.includes("rightSide3.jpg"))) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 7;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        else if (playField[playerIndex].firstChild.src.includes("rightUpperCorner.jpg") && (playField[playerIndex + 7].firstChild.src.includes("verticalRoad.jpg") || playField[playerIndex + 7].firstChild.src.includes("bottomSide3.jpg") || playField[playerIndex + 7].firstChild.src.includes("leftBottom.jpg") || playField[playerIndex + 7].firstChild.src.includes("leftBottomCorner.jpg") || playField[playerIndex + 7].firstChild.src.includes("leftSide3.jpg") || playField[playerIndex + 7].firstChild.src.includes("rightBottom.jpg") || playField[playerIndex + 7].firstChild.src.includes("rightBottomCorner.jpg") || playField[playerIndex + 7].firstChild.src.includes("rightSide3.jpg"))) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 7;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        else if (playField[playerIndex].firstChild.src.includes("upperSide3.jpg") && (playField[playerIndex + 7].firstChild.src.includes("verticalRoad.jpg") || playField[playerIndex + 7].firstChild.src.includes("bottomSide3.jpg") || playField[playerIndex + 7].firstChild.src.includes("leftBottom.jpg") || playField[playerIndex + 7].firstChild.src.includes("leftBottomCorner.jpg") || playField[playerIndex + 7].firstChild.src.includes("leftSide3.jpg") || playField[playerIndex + 7].firstChild.src.includes("rightBottom.jpg") || playField[playerIndex + 7].firstChild.src.includes("rightBottomCorner.jpg") || playField[playerIndex + 7].firstChild.src.includes("rightSide3.jpg"))) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 7;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
    }
}
function moveLeft() {
    let playerIndex;
    for (let i = 0; i < playField.length; i++) {
        if (playField[i].lastChild.className == "player") {
            playerIndex = i;
        }
    }

    if (playField[playerIndex].firstChild.src.includes("horizontalRoad.jpg") && (playField[playerIndex - 1].firstChild.src.includes("horizontalRoad.jpg") || playField[playerIndex - 1].firstChild.src.includes("leftBottom.jpg") || playField[playerIndex - 1].firstChild.src.includes("leftUpper.jpg") || playField[playerIndex - 1].firstChild.src.includes("leftBottomCorner.jpg") || playField[playerIndex - 1].firstChild.src.includes("leftUpperCorner.jpg") || playField[playerIndex - 1].firstChild.src.includes("leftSide3.jpg") || playField[playerIndex - 1].firstChild.src.includes("bottomSide3.jpg") || playField[playerIndex - 1].firstChild.src.includes("upperSide3.jpg"))) {
        if (playerIndex > 0 && playerIndex <= 6) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex > 7 && playerIndex <= 13) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex > 14 && playerIndex <= 20) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex > 21 && playerIndex <= 27) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex > 28 && playerIndex <= 34) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex > 35 && playerIndex <= 41) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex > 42 && playerIndex <= 48) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
    }
    else if (playField[playerIndex].firstChild.src.includes("bottomSide3.jpg") && (playField[playerIndex - 1].firstChild.src.includes("horizontalRoad.jpg") || playField[playerIndex - 1].firstChild.src.includes("leftBottom.jpg") || playField[playerIndex - 1].firstChild.src.includes("leftUpper.jpg") || playField[playerIndex - 1].firstChild.src.includes("leftBottomCorner.jpg") || playField[playerIndex - 1].firstChild.src.includes("leftUpperCorner.jpg") || playField[playerIndex - 1].firstChild.src.includes("leftSide3.jpg") || playField[playerIndex - 1].firstChild.src.includes("bottomSide3.jpg") || playField[playerIndex - 1].firstChild.src.includes("upperSide3.jpg"))) {
        if (playerIndex > 0 && playerIndex <= 6) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex > 7 && playerIndex <= 13) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex > 14 && playerIndex <= 20) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex > 21 && playerIndex <= 27) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex > 28 && playerIndex <= 34) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex > 35 && playerIndex <= 41) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex > 42 && playerIndex <= 48) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
    }
    else if (playField[playerIndex].firstChild.src.includes("rightBottom.jpg") && (playField[playerIndex - 1].firstChild.src.includes("horizontalRoad.jpg") || playField[playerIndex - 1].firstChild.src.includes("leftBottom.jpg") || playField[playerIndex - 1].firstChild.src.includes("leftUpper.jpg") || playField[playerIndex - 1].firstChild.src.includes("leftBottomCorner.jpg") || playField[playerIndex - 1].firstChild.src.includes("leftUpperCorner.jpg") || playField[playerIndex - 1].firstChild.src.includes("leftSide3.jpg") || playField[playerIndex - 1].firstChild.src.includes("bottomSide3.jpg") || playField[playerIndex - 1].firstChild.src.includes("upperSide3.jpg"))) {
        if (playerIndex > 0 && playerIndex <= 6) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex > 7 && playerIndex <= 13) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex > 14 && playerIndex <= 20) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex > 21 && playerIndex <= 27) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex > 28 && playerIndex <= 34) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex > 35 && playerIndex <= 41) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex > 42 && playerIndex <= 48) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
    }
    else if (playField[playerIndex].firstChild.src.includes("rightBottomCorner.jpg") && (playField[playerIndex - 1].firstChild.src.includes("horizontalRoad.jpg") || playField[playerIndex - 1].firstChild.src.includes("leftBottom.jpg") || playField[playerIndex - 1].firstChild.src.includes("leftUpper.jpg") || playField[playerIndex - 1].firstChild.src.includes("leftBottomCorner.jpg") || playField[playerIndex - 1].firstChild.src.includes("leftUpperCorner.jpg") || playField[playerIndex - 1].firstChild.src.includes("leftSide3.jpg") || playField[playerIndex - 1].firstChild.src.includes("bottomSide3.jpg") || playField[playerIndex - 1].firstChild.src.includes("upperSide3.jpg"))) {
        if (playerIndex > 0 && playerIndex <= 6) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex > 7 && playerIndex <= 13) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex > 14 && playerIndex <= 20) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex > 21 && playerIndex <= 27) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex > 28 && playerIndex <= 34) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex > 35 && playerIndex <= 41) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex > 42 && playerIndex <= 48) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
    }
    else if (playField[playerIndex].firstChild.src.includes("rightSide3.jpg") && (playField[playerIndex - 1].firstChild.src.includes("horizontalRoad.jpg") || playField[playerIndex - 1].firstChild.src.includes("leftBottom.jpg") || playField[playerIndex - 1].firstChild.src.includes("leftUpper.jpg") || playField[playerIndex - 1].firstChild.src.includes("leftBottomCorner.jpg") || playField[playerIndex - 1].firstChild.src.includes("leftUpperCorner.jpg") || playField[playerIndex - 1].firstChild.src.includes("leftSide3.jpg") || playField[playerIndex - 1].firstChild.src.includes("bottomSide3.jpg") || playField[playerIndex - 1].firstChild.src.includes("upperSide3.jpg"))) {
        if (playerIndex > 0 && playerIndex <= 6) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex > 7 && playerIndex <= 13) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex > 14 && playerIndex <= 20) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex > 21 && playerIndex <= 27) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex > 28 && playerIndex <= 34) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex > 35 && playerIndex <= 41) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex > 42 && playerIndex <= 48) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
    }
    else if (playField[playerIndex].firstChild.src.includes("rightUpper.jpg") && (playField[playerIndex - 1].firstChild.src.includes("horizontalRoad.jpg") || playField[playerIndex - 1].firstChild.src.includes("leftBottom.jpg") || playField[playerIndex - 1].firstChild.src.includes("leftUpper.jpg") || playField[playerIndex - 1].firstChild.src.includes("leftBottomCorner.jpg") || playField[playerIndex - 1].firstChild.src.includes("leftUpperCorner.jpg") || playField[playerIndex - 1].firstChild.src.includes("leftSide3.jpg") || playField[playerIndex - 1].firstChild.src.includes("bottomSide3.jpg") || playField[playerIndex - 1].firstChild.src.includes("upperSide3.jpg"))) {
        if (playerIndex > 0 && playerIndex <= 6) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex > 7 && playerIndex <= 13) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex > 14 && playerIndex <= 20) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex > 21 && playerIndex <= 27) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex > 28 && playerIndex <= 34) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex > 35 && playerIndex <= 41) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex > 42 && playerIndex <= 48) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
    }
    else if (playField[playerIndex].firstChild.src.includes("rightUpperCorner.jpg") && (playField[playerIndex - 1].firstChild.src.includes("horizontalRoad.jpg") || playField[playerIndex - 1].firstChild.src.includes("leftBottom.jpg") || playField[playerIndex - 1].firstChild.src.includes("leftUpper.jpg") || playField[playerIndex - 1].firstChild.src.includes("leftBottomCorner.jpg") || playField[playerIndex - 1].firstChild.src.includes("leftUpperCorner.jpg") || playField[playerIndex - 1].firstChild.src.includes("leftSide3.jpg") || playField[playerIndex - 1].firstChild.src.includes("bottomSide3.jpg") || playField[playerIndex - 1].firstChild.src.includes("upperSide3.jpg"))) {
        if (playerIndex > 0 && playerIndex <= 6) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex > 7 && playerIndex <= 13) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex > 14 && playerIndex <= 20) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex > 21 && playerIndex <= 27) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex > 28 && playerIndex <= 34) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex > 35 && playerIndex <= 41) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex > 42 && playerIndex <= 48) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
    }
    else if (playField[playerIndex].firstChild.src.includes("upperSide3.jpg") && (playField[playerIndex - 1].firstChild.src.includes("horizontalRoad.jpg") || playField[playerIndex - 1].firstChild.src.includes("leftBottom.jpg") || playField[playerIndex - 1].firstChild.src.includes("leftUpper.jpg") || playField[playerIndex - 1].firstChild.src.includes("leftBottomCorner.jpg") || playField[playerIndex - 1].firstChild.src.includes("leftUpperCorner.jpg") || playField[playerIndex - 1].firstChild.src.includes("leftSide3.jpg") || playField[playerIndex - 1].firstChild.src.includes("bottomSide3.jpg") || playField[playerIndex - 1].firstChild.src.includes("upperSide3.jpg"))) {
        if (playerIndex > 0 && playerIndex <= 6) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex > 7 && playerIndex <= 13) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex > 14 && playerIndex <= 20) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex > 21 && playerIndex <= 27) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex > 28 && playerIndex <= 34) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex > 35 && playerIndex <= 41) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex > 42 && playerIndex <= 48) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex - 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
    }
}

function moveRight() {
    let playerIndex;
    for (let i = 0; i < playField.length; i++) {
        if (playField[i].lastChild.className == "player") {
            playerIndex = i;
        }
    }
    if (playField[playerIndex].firstChild.src.includes("horizontalRoad.jpg") && (playField[playerIndex + 1].firstChild.src.includes("horizontalRoad.jpg") || playField[playerIndex + 1].firstChild.src.includes("bottomSide3.jpg") || playField[playerIndex + 1].firstChild.src.includes("rightBottom.jpg") || playField[playerIndex + 1].firstChild.src.includes("rightBottomCorner.jpg") || playField[playerIndex + 1].firstChild.src.includes("rightSide3.jpg") || playField[playerIndex + 1].firstChild.src.includes("rightUpper.jpg") || playField[playerIndex + 1].firstChild.src.includes("rightUpperCorner.jpg") || playField[playerIndex + 1].firstChild.src.includes("upperSide3.jpg"))) {
        if (playerIndex >= 0 && playerIndex < 6) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex >= 7 && playerIndex < 13) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex >= 14 && playerIndex < 20) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex >= 21 && playerIndex < 27) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex >= 28 && playerIndex < 34) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex >= 35 && playerIndex < 41) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex >= 42 && playerIndex < 48) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
    }
    else if (playField[playerIndex].firstChild.src.includes("bottomSide3.jpg") && (playField[playerIndex + 1].firstChild.src.includes("horizontalRoad.jpg") || playField[playerIndex + 1].firstChild.src.includes("bottomSide3.jpg") || playField[playerIndex + 1].firstChild.src.includes("rightBottom.jpg") || playField[playerIndex + 1].firstChild.src.includes("rightBottomCorner.jpg") || playField[playerIndex + 1].firstChild.src.includes("rightSide3.jpg") || playField[playerIndex + 1].firstChild.src.includes("rightUpper.jpg") || playField[playerIndex + 1].firstChild.src.includes("rightUpperCorner.jpg") || playField[playerIndex + 1].firstChild.src.includes("upperSide3.jpg"))) {
        if (playerIndex >= 0 && playerIndex < 6) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex >= 7 && playerIndex < 13) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex >= 14 && playerIndex < 20) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex >= 21 && playerIndex < 27) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex >= 28 && playerIndex < 34) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex >= 35 && playerIndex < 41) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex >= 42 && playerIndex < 48) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
    }
    else if (playField[playerIndex].firstChild.src.includes("leftBottom.jpg") && (playField[playerIndex + 1].firstChild.src.includes("horizontalRoad.jpg") || playField[playerIndex + 1].firstChild.src.includes("bottomSide3.jpg") || playField[playerIndex + 1].firstChild.src.includes("rightBottom.jpg") || playField[playerIndex + 1].firstChild.src.includes("rightBottomCorner.jpg") || playField[playerIndex + 1].firstChild.src.includes("rightSide3.jpg") || playField[playerIndex + 1].firstChild.src.includes("rightUpper.jpg") || playField[playerIndex + 1].firstChild.src.includes("rightUpperCorner.jpg") || playField[playerIndex + 1].firstChild.src.includes("upperSide3.jpg"))) {
        if (playerIndex >= 0 && playerIndex < 6) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex >= 7 && playerIndex < 13) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex >= 14 && playerIndex < 20) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex >= 21 && playerIndex < 27) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex >= 28 && playerIndex < 34) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex >= 35 && playerIndex < 41) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex >= 42 && playerIndex < 48) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
    }
    else if (playField[playerIndex].firstChild.src.includes("leftBottomCorner.jpg") && (playField[playerIndex + 1].firstChild.src.includes("horizontalRoad.jpg") || playField[playerIndex + 1].firstChild.src.includes("bottomSide3.jpg") || playField[playerIndex + 1].firstChild.src.includes("rightBottom.jpg") || playField[playerIndex + 1].firstChild.src.includes("rightBottomCorner.jpg") || playField[playerIndex + 1].firstChild.src.includes("rightSide3.jpg") || playField[playerIndex + 1].firstChild.src.includes("rightUpper.jpg") || playField[playerIndex + 1].firstChild.src.includes("rightUpperCorner.jpg") || playField[playerIndex + 1].firstChild.src.includes("upperSide3.jpg"))) {
        if (playerIndex >= 0 && playerIndex < 6) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex >= 7 && playerIndex < 13) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex >= 14 && playerIndex < 20) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex >= 21 && playerIndex < 27) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex >= 28 && playerIndex < 34) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex >= 35 && playerIndex < 41) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex >= 42 && playerIndex < 48) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
    }
    else if (playField[playerIndex].firstChild.src.includes("leftSide3.jpg") && (playField[playerIndex + 1].firstChild.src.includes("horizontalRoad.jpg") || playField[playerIndex + 1].firstChild.src.includes("bottomSide3.jpg") || playField[playerIndex + 1].firstChild.src.includes("rightBottom.jpg") || playField[playerIndex + 1].firstChild.src.includes("rightBottomCorner.jpg") || playField[playerIndex + 1].firstChild.src.includes("rightSide3.jpg") || playField[playerIndex + 1].firstChild.src.includes("rightUpper.jpg") || playField[playerIndex + 1].firstChild.src.includes("rightUpperCorner.jpg") || playField[playerIndex + 1].firstChild.src.includes("upperSide3.jpg"))) {
        if (playerIndex >= 0 && playerIndex < 6) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex >= 7 && playerIndex < 13) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex >= 14 && playerIndex < 20) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex >= 21 && playerIndex < 27) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex >= 28 && playerIndex < 34) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex >= 35 && playerIndex < 41) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex >= 42 && playerIndex < 48) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
    }
    else if (playField[playerIndex].firstChild.src.includes("leftUpper.jpg") && (playField[playerIndex + 1].firstChild.src.includes("horizontalRoad.jpg") || playField[playerIndex + 1].firstChild.src.includes("bottomSide3.jpg") || playField[playerIndex + 1].firstChild.src.includes("rightBottom.jpg") || playField[playerIndex + 1].firstChild.src.includes("rightBottomCorner.jpg") || playField[playerIndex + 1].firstChild.src.includes("rightSide3.jpg") || playField[playerIndex + 1].firstChild.src.includes("rightUpper.jpg") || playField[playerIndex + 1].firstChild.src.includes("rightUpperCorner.jpg") || playField[playerIndex + 1].firstChild.src.includes("upperSide3.jpg"))) {
        if (playerIndex >= 0 && playerIndex < 6) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex >= 7 && playerIndex < 13) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex >= 14 && playerIndex < 20) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex >= 21 && playerIndex < 27) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex >= 28 && playerIndex < 34) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex >= 35 && playerIndex < 41) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex >= 42 && playerIndex < 48) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
    }
    else if (playField[playerIndex].firstChild.src.includes("leftUpperCorner.jpg") && (playField[playerIndex + 1].firstChild.src.includes("horizontalRoad.jpg") || playField[playerIndex + 1].firstChild.src.includes("bottomSide3.jpg") || playField[playerIndex + 1].firstChild.src.includes("rightBottom.jpg") || playField[playerIndex + 1].firstChild.src.includes("rightBottomCorner.jpg") || playField[playerIndex + 1].firstChild.src.includes("rightSide3.jpg") || playField[playerIndex + 1].firstChild.src.includes("rightUpper.jpg") || playField[playerIndex + 1].firstChild.src.includes("rightUpperCorner.jpg") || playField[playerIndex + 1].firstChild.src.includes("upperSide3.jpg"))) {
        if (playerIndex >= 0 && playerIndex < 6) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex >= 7 && playerIndex < 13) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex >= 14 && playerIndex < 20) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex >= 21 && playerIndex < 27) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex >= 28 && playerIndex < 34) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex >= 35 && playerIndex < 41) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex >= 42 && playerIndex < 48) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
    }
    else if (playField[playerIndex].firstChild.src.includes("upperSide3.jpg") && (playField[playerIndex + 1].firstChild.src.includes("horizontalRoad.jpg") || playField[playerIndex + 1].firstChild.src.includes("bottomSide3.jpg") || playField[playerIndex + 1].firstChild.src.includes("rightBottom.jpg") || playField[playerIndex + 1].firstChild.src.includes("rightBottomCorner.jpg") || playField[playerIndex + 1].firstChild.src.includes("rightSide3.jpg") || playField[playerIndex + 1].firstChild.src.includes("rightUpper.jpg") || playField[playerIndex + 1].firstChild.src.includes("rightUpperCorner.jpg") || playField[playerIndex + 1].firstChild.src.includes("upperSide3.jpg"))) {
        if (playerIndex >= 0 && playerIndex < 6) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex >= 7 && playerIndex < 13) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex >= 14 && playerIndex < 20) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex >= 21 && playerIndex < 27) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex >= 28 && playerIndex < 34) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex >= 35 && playerIndex < 41) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
        if (playerIndex >= 42 && playerIndex < 48) {
            var Player = document.getElementsByClassName("player");
            Player[0].parentNode.removeChild(Player[0]);

            playerIndex = playerIndex + 1;
            var player = document.createElement('img');
            player.src = "bluePlayer.jpg";
            player.className = "player";
            playField[playerIndex].appendChild(player);
        }
    }
}