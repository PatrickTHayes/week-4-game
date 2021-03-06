$(document).ready(function() {
    var charList = setObject();
    //var clone = Object.assign({}, obj);
    var resetList = charList;
    var haveOpponent = false;
    var haveChar = false;
    var currentOpponent = "";
    var character = "";
    var characterSecond = "";
    var charIndex = "";
    var baseAttack = 0;
    var charListKeyArray = Object.keys(charList);
    var wins = 0;
    restart();

    function setObject() {
        return {
            excalibur: {
                name: "excalibur",
                charId: 0,
                attack: 25,
                health: 400,
                counterAttack: 35,
                imagesrc: "assets/images/excalibur.png" //?????????   //url("../images/excalibur.png")''
            },
            mirage: {
                name: "mirage",
                charId: 1,
                attack: 10,
                health: 500,
                counterAttack: 45,
                imagesrc: "assets/images/mirage.png"
            },
            trinity: {
                name: "trinity",
                charId: 2,
                attack: 30,
                health: 375,
                counterAttack: 25,
                imagesrc: "assets/images/trinity.png"
            },
            valkyr: {
                name: "valkyr",
                charId: 3,
                attack: 5,
                health: 800,
                counterAttack: 30,
                imagesrc: "assets/images/valkyr.png"
            }
        };

    }

    function restart() {
        charList = setObject();
        for (var i = 0; i < 4; i++) { //loop through charList and set up pictures. not sure if this code was messing up --Object.keys(charList).length
            character = charListKeyArray[i];
            $("#char" + i).html('<h3>' + charList[character].name + '</h3><img src =' + charList[character].imagesrc + '><h3> attack: ' + charList[character].attack + '</h3><h3>Health: ' + charList[character].health + '</h3><h3>Counter Attack :' + charList[character].counterAttack + '</h3>')
        }
        wins = 0;
        haveOpponent = false;
        haveChar = false;
        $("#opponentChar").text('');
        $("#yourChar").text('');
    }


    $(".charNames").on("click", function() {
        if (haveChar === false) {
            var characterFirst = $(this).text();
            console.log(characterFirst);
            characterFirst = characterFirst.split(' ')[0].toLowerCase();
            character = characterFirst.trim();
            haveChar = true;
            baseAttack = charList[character].attack
            displayYourChar();
            removeFromList(character);
        }
        else if (haveOpponent === false) {
            characterSecond = $(this).text();
            currentOpponent = characterSecond.split(' ')[0].trim();

            haveOpponent = true;
            displayOpponentChar();
            removeFromList(currentOpponent);
        }
        else {
            alert(" you must beat your opponent first before choosing your next opponent!")
        }
    })

    function removeFromList(charactername) {
        var clearout = "";
        charIndex = charList[charactername].charId;
        console.log(charIndex);
        if (charIndex === 0) {
            $("#char0").text(clearout);
        }
        else if (charIndex === 1) {
            $("#char1").text(clearout);
        }
        else if (charIndex === 2) {
            $("#char2").text(clearout);
        }
        else {
            $("#char3").text(clearout);
        }
    }
    $("#attackBtn").on("click", function() {
        if (haveChar === true && haveOpponent === true) {
            attack(character, currentOpponent);
            counterAttack(currentOpponent, character);
            displayYourChar();
            displayOpponentChar();
            if (charList[character].health <= 0) {
                alert("Your character has died oh my, Game Over");
                restart();
            }
            else if (charList[currentOpponent].health <= 0) {
                alert("you beat your opponent! good job!");
                $("#opponentChar").text('');
                haveOpponent = false;
                wins++;
                if (wins === 3) {
                    alert("You beat all opponents. Great job!!!");
                    restart();
                }
            }
        }
    })

    function displayYourChar() {
        $("#yourChar").html('<img src =' + charList[character].imagesrc + '><h3>' + charList[character].name + '</h3><h3>attack: ' + charList[character].attack + '</h3><h3>Health: ' + charList[character].health + '</h3>')

    }

    function displayOpponentChar() {
        $("#opponentChar").html('<img src =' + charList[currentOpponent].imagesrc + '><h3>' + charList[currentOpponent].name + '</h3><h3>Counter Attack: ' + charList[currentOpponent].counterAttack + '</h3><h3>Health: ' + charList[currentOpponent].health + '</h3>')
    }

    function attack(x, y) {
        charList[y].health = charList[y].health - charList[x].attack;
        charList[x].attack = charList[x].attack + baseAttack;
    }

    function counterAttack(x, y) {
        charList[y].health = charList[y].health - charList[x].counterAttack;
    }
})
