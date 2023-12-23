"use strict";
const year = document.getElementById("year");
const thisYear = new Date().getFullYear().toString();
console.log(thisYear);
year.setAttribute("dateTime", thisYear);
year.textContent = thisYear;
