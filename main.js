var now = new Date()
switch (now.getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
var year = now.getFullYear();
var month = now.getMonth();
var date = now.getDate(); 

document.getElementById("today").innerHTML = "Today is " + day + ", " + date + "/" + (month+1) + "/" + year;
 
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("http://b8c40s8.143.198.70.30.sslip.io/api/PlayerDataTotals/name/LeBron James", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  console.log(response.text())