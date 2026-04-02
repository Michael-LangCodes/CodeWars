// You are given a string with results of NBA teams (see the data in "Sample Tests") separated by commas e.g:

// r = Los Angeles Clippers 104 Dallas Mavericks 88,New York Knicks 101 Atlanta Hawks 112,Indiana Pacers 103 Memphis Grizzlies 112,  Los Angeles Clippers 100 Boston Celtics 120.

// A team name is composed of one, two or more words built with letters or digits: Atlanta Hawks, Philadelphia 76ers...

// Given a string of results and the name of a team (parameter : to_find) your function nba_cup (or nbaCup or ...)  will return as a string

// the name of the team followed by : and
// the number of matches won by the team
// the number of draws
// the number of matches lost by the team
// the total number of points scored by the team
// the total number of points conceded by the team
// and finally a kind of marks in our ranking system

// a team marks 3 if it is a win
// a team marks 1 if it is a draw
// a team marks 0 if it is a loss.

//My Solution
function nbaCup(resultSheet, toFind) {
    // Handle empty team search
    if (toFind === "") return "";

    // Escape any regex special characters in team name
    const safeTeam = toFind.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    let splitResults = resultSheet.split(',');
    let numWins = 0;
    let numDraws = 0;
    let numLose = 0;
    let sumScored = 0;
    let sumOn = 0;
    let score = 0;
    let gamesPlayed = 0;

    splitResults.forEach((e) => {
        if (e.length === 0) return;

        // Match team name as a whole word
        if (new RegExp(`\\b${safeTeam}\\b`).test(e)) {

            // Reject float numbers in scores
            if (/\d+\.\d+/.test(e)) {
                score = `Error(float number):${e}`;
                return;
            }

            // Extract only numbers that are separated by spaces
            let gameScore = e.match(/(?<=\s)\d+(?=\s|$)/g);
            if (!gameScore || gameScore.length < 2) return;

            gameScore = gameScore.slice(0, 2);

            // Determine which score belongs to our team
            let firstScoreIndex = e.search(/\d/);
            let teamIndex = e.indexOf(toFind) < firstScoreIndex ? 0 : 1;
            let oppIndex = teamIndex === 0 ? 1 : 0;

            let teamScore = Number(gameScore[teamIndex]);
            let oppScore = Number(gameScore[oppIndex]);

            sumScored += teamScore;
            sumOn += oppScore;
            gamesPlayed++;

            if (teamScore > oppScore) {
                numWins++;
            } else if (teamScore < oppScore) {
                numLose++;
            } else {
                numDraws++;
            }

            score = 3 * numWins + numDraws;
        }
    });

    if (typeof score === "string") return score; // For float number errors

    if (gamesPlayed > 0) {
        return `${toFind}:W=${numWins};D=${numDraws};L=${numLose};Scored=${sumScored};Conceded=${sumOn};Points=${score}`;
    } else {
        return `${toFind}:This team didn't play!`;
    }
}