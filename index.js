const askName = () => {
    let name = prompt("Please , enter your name!");

    if(name == null) name = "Unknown";
    document.querySelector("h1").innerHTML = `Hello ${name} !!`;

}
function Time() {
    
    let time = new Date()
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    let today = time.getDay();
  

    today = convertString(today);
  
    hour = addZero(hour);
    minute = addZero(minute);
    second = addZero(second);

    function addZero(value) {
      if (value < 10) {
        value = "0" + value;
      }
      return value;
    }
  
    function convertString(value) {
      if (today == 0) {
        today = "Sunday";
        return today;
      } else if (today == 1) {
        today = "Monday";
        return today;
      } else if (today == 2) {
        today = "Tuesday";
        return today;
      } else if (today == 3) {
        today = "Wednesday";
        return today;
      } else if (today == 4) {
        today = "Thursday";
        return today;
      } else if (today == 5) {
        today = "Friday";
        return today;
      } else if (today == 6) {
        today = "Saturday";
        return today;
      }
    }
  
    time = setInterval('Time()', 1000);
  
    document.querySelector("h2").innerHTML = `${hour}:${minute}:${second} ${today}`;
  }
  Time();
  
  