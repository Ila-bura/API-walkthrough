const API_KEY = "EUDJ8ch8ZntBjRH-bKHZEb-Zv5M";
const API_URL = "https://ci-jshint.herokuapp.com/api";
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));

//Wire up the run checks button//
document.getElementById("status").addEventListener("click", e => getStatus(e));
document.getElementById("submit").addEventListener("click", e => postForm(e));

async function postForm(e) {
    const form = new FormData(document.getElementById("checksform"));
    const response = await fetch(API_URL, {
                        method: "POST",
                        headers: {
                                    "Authorization": API_KEY,
                                 },
                                 body: form,
                        })
   
}

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
        displayStatus(data);
    }
        else {
            throw new Error(data.error);
        }
    }
function displayStatus(data) {
    let heading = "API Key Status";
    let results = `<div>Your key is valid until</div>`;
    results += `<div class="key-status">${data.expiry}</div>`;

    document.getElementById("resultsModalTitle").innerText = heading;
    document.getElementById("results-content").innerHTML = results;
    resultsModal.show();
}


