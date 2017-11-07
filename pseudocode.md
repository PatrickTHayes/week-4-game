Identify rpg world

Html/CSS
1 make a bootstrap layout first
    Be sure to set id's to the different columns where items will goes
    Draw a picture first so you know how many rows, subrows, columns, and where things will go in them.
2 Set a base css
    for an image class (make sure all images are same size and will fit nicely in their columns. characters come as objects show attack and health around image (health bar?)
    Background
    text?
3 Input pictures with Id's (could do this before css maybe) as a paired object with health and attack
4 Check the layout after this, make sure it looks how you want and a fighting space is set aside

JS JQuery interactions

1  Create global variables and attributes
    set array or object for health, attack, AttChange for each character. Think array in an array??
    Your character
    current opponent
    Have opponent T/F

2  Set images as a clickable option
    First image clicked sets your character until end of game. Runs once at begginning
        Removes picture object from area 1
        sets picture object to your character area
    Create a function to choose opponent on click
        function only runs if Have opponent === F
        removes original set picture object
        sets a object in the opponent area

3  Set up an attack function on click
    Button invokes this function.
    calls function requires input of player character and an opponent from correct area
    returns an alert if input isn't met
    input is met then applies function Damage to both characters and attackchange to your character only
            Damage function inputs attacker and defender
             Dhealth = Dhealth - Aattack
             YCattack = YCattack + YCattchanges
            After both functions run display should update
        End of this checks logic to see if Loss or if opponent loss
             if loss brings up an alert and calls function reset game.
             if  opponent loss removes opponent and checks logic
                if win , alert to win then call function reset game
                if there are still opponents set alert to choose new opponent.