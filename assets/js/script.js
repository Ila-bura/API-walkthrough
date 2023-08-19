const API_KEY = "EUDJ8ch8ZntBjRH-bKHZEb-Zv5M";
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));

//Wire up the button with event listener//
//Arrow function is used as even handler//
//Takes one parameter, e, which represents the event object//

document.getElementById("status").addEventListener("click", e => getStatus(e));

async function getStatus(e) {

    const queryString = `${API_URL}?api_key=${API_KEY}`;

    const response = await fetch(queryString);
        //When the response comes back, convert to json//

    const data = await response.json();

    if (response.ok) {
        console.log(data.expiry);
    }

}