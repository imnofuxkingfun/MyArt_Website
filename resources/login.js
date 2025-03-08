
document.getElementById("login-form").addEventListener("submit", function (e){
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    fetch("users.json")
        .then((response) => response.json())
        .then((users) => {
            const userExist = users.some(
                (user) =>user.username === username && user.password === password
            );
            if (userExist){
                sessionStorage.setItem("username", username);
                const currentDateTime = new Date(); //metoda din clasa DATE  
                sessionStorage.setItem("date", formatDateTime(currentDateTime));
               

                setTimeout(function(){//set timeout
                    window.location.href = "requests.html";
                },500);
            }else{
                window.location.href = "404.html";
            }
        })
        .catch((error) =>{
            console.error("Error retrieving user list:",error);
        });
});

function formatDateTime(date) {
    const time = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };
    return date.toLocaleDateString('EU', time);
}


