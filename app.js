// The array -> months, containing the names of all the months in order.
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

//The array -> weekday, containing the names of all the days of the week in order.
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

//The code selects an HTML element with the class giveaway. This element is likely where information about the giveaway is displayed.
const giveaway = document.querySelector('.giveaway');

//The code also selects an HTML element with the class deadline.
//This element is probably where the countdown timer will be displayed.
const deadline = document.querySelector('.deadline');

//Multiple HTML elements with the class deadline-format are selected. Inside these elements, 
//there are h4 elements that likely represent the different components 
//of the countdown timer (e.g., days, hours, minutes, seconds).
const items = document.querySelectorAll('.deadline-format h4');

//tempDate is created as a new JavaScript Date object, which represents the current date and time.
let tempDate = new Date();

//tempYear, tempMonth, and tempDay are initialized with the year, month, and day values from tempDate, respectively.
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// months are ZERO index based;
// const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);

//futureDate is created as a JavaScript Date object, representing a specific future date and time. 
//In this case, I set to September 1st, 2023, at 8:17 PM.
let futureDate = new Date(2023, 8, 1, 20, 17, 0);

//The year, hours, and minutes constants are extracted from the futureDate object. 
//These will be used to display the year, hour, and minute of the future date in the giveaway message.
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

//The month variable is initialized with the month value from the futureDate object. 
//Then, the code retrieves the corresponding month name from the months array 
//(likely defined earlier in the code) and assigns it to the month variable.
let month = futureDate.getMonth();
month = months[month];

//Similarly, the weekday variable is assigned the corresponding day of the week name
// (e.g., "Sunday," "Monday") based on the day value of the futureDate object.
const weekday = weekdays[futureDate.getDay()];

//The date variable is set to the day of the month from the futureDate object.
const date = futureDate.getDate();

//The giveaway element's text content is updated using the extracted information to create a formatted message 
//indicating when the giveaway ends. It displays the day of the week, date, month, year, and time of the future date.
giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

//futureTime is assigned the value of the futureDate object's time in milliseconds using the getTime() method.
const futureTime = futureDate.getTime();

//The getRemainingTime() function is defined to calculate the remaining time until the future date. 
//It does this by obtaining the current time in milliseconds using new Date().getTime() and then subtracting futureTime from it. 
//This yields the difference in milliseconds between the current time and the future time.
function getRemaindingTime() {
  const today = new Date().getTime();

  const t = futureTime - today;
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr
  // values in miliseconds
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // calculate all values
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // set values array
  const values = [days, hours, minutes, seconds];
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
  }
}
// countdown;
let countdown = setInterval(getRemaindingTime, 1000);
//set initial values
getRemaindingTime();
