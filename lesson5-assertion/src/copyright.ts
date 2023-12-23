const year = document.getElementById("year") as HTMLSpanElement;
const thisYear: string = new Date().getFullYear().toString();
console.log(thisYear);

year.setAttribute("dateTime", thisYear);
year.textContent = thisYear;
