// Add your code here




function submitData(name, email) {
    let conObj = {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: name,
            email: email,
        })
    }
    return fetch('http://localhost:3000/users', conObj)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        document.body.innerHTML - object["id"]
    })
    .catch(function (error) {
        document.body.innerHTML = error.message
    })
}