const infoBox = document.getElementById('baseballinfobox');
const message = {
    "anaheim" : {
        stadiumName : "Angel Stadium", 
        teamName : "Los Angeles Angels", 
        location : "Anaheim, CA",
        matchup : "Oakland Athletics", 
        date : "July 31, 2021",
        status : "Won",
        score : "1-0"
    },
    "arlington" : {
        stadiumName : "Globe Life Field", 
        teamName : "Texas Rangers", 
        location : "Arlington, TX", 
        matchup : "Houston Astros", 
        date : "April 7, 2024", 
        status : "Lost",
        score : "3-1"
    },
    "atlanta" : {
        stadiumName : "Truist Park", 
        teamName : "Atlanta Braves", 
        location : "Atlanta, GA", 
        matchup : "Minnesota Twins", 
        date : "April 19, 2025", 
        status : "Won",
        score: "4-3"
    },
    "denver" : {
        stadiumName : "Coors Field", 
        teamName : "Colorado Rockies", 
        location : "Denver, CO", 
        matchup : "Toronto Blue Jays", 
        date : "September 3, 2023", 
        status : "Lost",
        score: "7-5"
    },
    "fresno" : {
        stadiumName : "Chukchansi Park", 
        teamName : "Fresno Grizzlies", 
        location : "Fresno, CA", 
        matchup : "Modesto Nuts", 
        date : "May 6, 2022", 
        status : "Lost",
        score: "7-2"
    },
    "losangeles" : {
        stadiumName : "Dodger Stadium", 
        teamName : "Los Angeles Dodgers", 
        location : "Los Angeles, CA", 
        matchup : "Arizona Diamondbacks", 
        date : "July 3, 2019", 
        status : "Won",
        score: "5-4"
    },
    "miami" : {
        stadiumName : "LoanDepot Park", 
        teamName : "Miami Marlins", 
        location : "Miami, FL", 
        matchup : "Colorado Rockies", 
        date : "March 31, 2019", 
        status : "Won",
        score: "3-0"
    },
    "montgomery": {
        stadiumName : "Riverwalk Stadium", 
        teamName : "Montgomery Buscuits", 
        location : "Montgomery, AL", 
        matchup : "Rocket City Trash Pandas", 
        date : "April 16, 2025", 
        status : "Won",
        score: "2-1"
    },
    "oakland": {
        stadiumName : "Oakland Coliseum", 
        teamName : "Oakland Athletics", 
        location : "Oakland, CA (now Sacramento, CA)", 
        matchup : "Houston Astros", 
        date : "July 10, 2022", 
        status : "Lost",
        score: "6-1"
    },
    "phoenix": {
        stadiumName : "Chase Field", 
        teamName : "Arizona Diamondbacks", 
        location : "Phoenix, AZ", 
        matchup : "San Francisco Giants", 
        date : "September 24, 2022", 
        status : "Won",
        score: "5-2"
    },
    "portland": {
        stadiumName : "Walker Stadium", 
        teamName : "Portland Pickles", 
        location : "Portland, OR", 
        matchup : "Portland Rosebuds", 
        date : "July 28, 2024", 
        status : "Won",
        score: "8-2"
    },
    "sandiego": {
        stadiumName : "Petco Park", 
        teamName : "San Diego Padres", 
        location : "San Diego, CA", 
        matchup : "Washington Nationals", 
        date : "June 25, 2023", 
        status : "Lost",
        score: "8-3"
    },
    "sanfrancisco": {
        stadiumName : "Oracle Park", 
        teamName : "San Francisco Giants", 
        location : "San Francisco, CA", 
        matchup : "Boston Red Sox", 
        date : "July 30, 2023", 
        status : "Won",
        score: "4-3"
    },
    "seattle": {
        stadiumName : "T-Mobile Park", 
        teamName : "Seattle Mariners", 
        location : "Seattle, WA", 
        matchup : "Houston Astros", 
        date : "July 21, 2024", 
        status : "Won",
        score: "6-4"
    }
}

function displayText(evt) {
    let id          = evt.id,
        statsObj    = message[id],
        stadiumName = statsObj.stadiumName,
        teamName    = statsObj.teamName, 
        location    = statsObj.location,
        matchup     = statsObj.matchup,
        date        = statsObj.date,
        status      = (statsObj.status).toLowerCase(),
        score       = statsObj.score,
        infoText, matchupText, dateText, newHtml;
    
    infoText = `${stadiumName} | ${teamName} | ${location}`;
    matchupText = `They played the ${matchup} and ${status} with a final score of ${score}.`;
    dateText = `${date}`;

    newHtml = `<p> ${infoText} </p><p> ${matchupText} </p><p> ${dateText} </p>`;

    infoBox.innerHTML = newHtml;
}