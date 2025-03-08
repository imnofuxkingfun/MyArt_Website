// const currentDateTime = new Date(); //metoda din clasa DATE
// const datetimeElement = document.getElementById('datetime');
// datetimeElement.textContent = formatDateTime(currentDateTime);

// function formatDateTime(date) {
//     const time = {
//         year: 'numeric',
//         month: 'long',
//         day: 'numeric',
//         hour: 'numeric',
//         minute: 'numeric',
//         second: 'numeric'
//     };
//     return date.toLocaleDateString('EU', time);
// }


const datetimeElement = document.getElementById('datetime');
const currentDateTime = sessionStorage.getItem("date");
datetimeElement.textContent = currentDateTime;



document.addEventListener("DOMContentLoaded", () => {
    fetch("requests.xml")
      .then((response) => response.text())
      .then((xmlString) => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlString, "application/xml");
  
        const requests = xmlDoc.getElementsByTagName("request");
        const requestContainer = document.getElementById("commRequest");
  
        for (let request of requests) {
          const ul = document.createElement("ul");
          const name = request.getElementsByTagName("name")[0].textContent;
          const email = request.getElementsByTagName("email")[0].textContent;
          const phone = request.getElementsByTagName("phone")[0].textContent;
          const type = request.getElementsByTagName("type")[0].textContent;
          const budget = request.getElementsByTagName("budget")[0].textContent;
          const deadline = request.getElementsByTagName("deadline")[0].textContent;
          const style = request.getElementsByTagName("style")[0].textContent;
  
          ul.innerHTML = `
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Phone:</strong> ${phone}</li>
            <li><strong>Type:</strong> ${type}</li>
            <li><strong>Budget:</strong> ${budget}</li>
            <li><strong>Deadline:</strong> ${deadline}</li>
            <li><strong>Style:</strong> ${style}</li>
          `;
  
          requestContainer.appendChild(ul);
        }
      })
      .catch((error) =>
        console.error("Error retrieving data from XML file:", error)
      );
  });


const userNameDisplay = document.getElementById("userDisplay");
const loggedInUser = sessionStorage.getItem("username");
if(loggedInUser){
    userNameDisplay.textContent = loggedInUser;
}
else{
    window.location.href="/index.html";
}

document.getElementById("logout").addEventListener("click", () =>{
    sessionStorage.clear();
    window.location.href = "/index.html";
});