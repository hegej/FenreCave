function showFeedback(answer) {
    var feedbackBox = document.getElementById('feedback');
    var teamNamePrompt = document.getElementById('team-name-prompt');
    var feedbackText = "";

    switch (answer) {
        case 1:
            feedbackText = "Feil: Fenrisulven er for sterk til å bli overmannet av ren fysisk makt.";
            break;
        case 2:
            feedbackText = "Feil: Fenrisulven er ikke en motstander som kan beseires gjennom konvensjonell kamp.";
            break;
        case 3:
            feedbackText = "Riktig: Dette alternativet fanger opp essensen av historien og Tyrs offer, " +
                "samtidig som det viser tillitens rolle i den dramatiske hendelsen. <br><br>Desverre så medførte dette at " +
                "lagkameraten som frivillig tilbød sin hånd for å gi tillit, desverre har mistet denne da Fenrisulven bet " +
                "den av når han forsto at han er blitt lurt.";
            teamNamePrompt.style.display = 'block';
            break;
        case 4:
            feedbackText = "Feil: Selv om dette kan virke som en diplomatisk tilnærming, viser historien om Fenrisulven at " +
                "han var for mistenksom til å akseptere slike tilbud uten at det er noen baktanker, " +
                "spesielt etter gudenes tidligere forsøk på å binde ham med mindre magiske bånd.";
            break;
        default:
            teamNamePrompt.style.display = 'none';
        break;
    }
    
    var feedbackBox = document.getElementById('feedback');
    feedbackBox.innerHTML = feedbackText;
    feedbackBox.style.display = 'block';
}    

function sendTeamName() {
    var teamName = document.getElementById('team-name').value.trim();
    if (teamName === "") {
        alert("Please enter a team name.");
        return;
    }

    var data = {
        TeamName: teamName
    };

    fetch(' https://localhost:7202/api/EasterWinner', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), 
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        alert("Team registered successfully!");
    })
    .catch((error) => {
        console.error('Error:', error);
        alert("An error occurred. Please try again.");
    });
}
