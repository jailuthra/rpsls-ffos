var choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
user_score = parseInt(document.getElementById("user_score").innerHTML);
ai_score = parseInt(document.getElementById("ai_score").innerHTML);

function getNick() {
    var nick = document.getElementById("nick").value;
    if (nick == "")
        nick = "Unnamed";
    document.getElementById("user_name").innerHTML = nick;
}

function randomHand() {
    var num = Math.round(Math.random()*5);
    return choices[num];
}

function computeWinner(user_hand, ai_hand) {
    if (user_hand == "Rock") {
        if (ai_hand == "Scissors" || ai_hand == "Lizard")
            return "user";
        else
            return "ai";
    }
    else if (user_hand == "Paper") {
        if (ai_hand == "Rock" || ai_hand == "Spock")
            return "user";
        else
            return "ai";
    }
    else if (user_hand == "Scissors") {
        if (ai_hand == "Paper" || ai_hand == "Lizard")
            return "user";
        else
            return "ai";
    }    
    else if (user_hand == "Lizard") {
        if (ai_hand == "Paper" || ai_hand == "Spock")
            return "user";
        else
            return "ai";
    }
    else if (user_hand == "Spock") {
        if (ai_hand == "Rock" || ai_hand == "Scissors")
            return "user";
        else
            return "ai";
    }    
}

function computeScores(round_winner) {
    if (round_winner == "user")
        user_score += 1;
    else
        ai_score += 1;
}

function reflectScores() {
    document.getElementById("user_score").innerHTML = user_score;
    document.getElementById("ai_score").innerHTML = ai_score;
}

function getImageFor(hand) {
    return "img/" + hand.toLowerCase() + ".svg";
}

function reflectChoices(user_hand, ai_hand) {
    document.querySelector("#user_hand").setAttribute("src", getImageFor(user_hand)); 
    document.querySelector("#ai_hand").setAttribute("src", getImageFor(ai_hand));
    document.querySelector("#hands").setAttribute("style", "display:none;");
    document.querySelector("#result").setAttribute("style", "");
}

function buttonClick(user_hand) {
    var ai_hand, round_winner;
    ai_hand = randomHand();
    round_winner = computeWinner(user_hand, ai_hand);
    computeScores(round_winner);
    reflectChoices(user_hand, ai_hand);
    reflectScores();
}
