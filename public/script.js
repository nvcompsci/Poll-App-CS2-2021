const $submit = document.getElementById("submit_min_wage")
$submit.onclick = sendAnswer

function sendAnswer() {
    fetch("http://localhost:3000/poll",{
        method: "POST",
        body: {},
        headers: {
            "Content-Type":"application/json"
        }
    })
}