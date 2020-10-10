function gameFunction() {
    var game_output;
    var games = document.getElementById("game_input").value;
    var game_string = " is definitely a great game!";
    switch(games) {
        case "The Legend of Zelda: Breath of the Wild":
            game_output = "The Legend of Zelda: Breath of the Wild" + game_string;
        break;
        case "Star Citizen":
            game_output = "Star Citzen" + game_string;
        break;
        case "Super Mario Odyssey":
            game_output = "Super Mario Odyssey" + game_string;
        break;
        case "Perfect Dark":
            game_output = "Perfect Dark" + game_string;
        break;
        case "The Witcher 3: Wild Hunt":
            game_output = "The Witcher 3: Wild Hunt" + game_string;
        break;
        case "Destiny 2":
            game_output = "Destiny 2" + game_string;
        break;
        case "Super Smash Bros: Ultimate":
            game_output = "Super Smash Bros: Ultimate" + game_string;
        break;
        default:
            game_output = "*Please enter a game exactly as written in the list.*";
    }
    document.getElementById("choice").innerHTML = game_output;
}