const seasonsWallpapper = document.getElementById("seasons");
const calendarWallpaper = document.getElementById("calendarWallpaper");
const showCurrentDayName = document.getElementsByTagName("th");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const currentDate = new Date();

let currentMonthNumber = new Date().getMonth();
let today = document.querySelector(".today");
let currentYearToday = new Date();
let currentYear = currentYearToday.getFullYear();
let dayName = new Date().toLocaleString("eng", { weekday: "long" });

prevButton.addEventListener("click", () => {
  if (currentMonthNumber === 0) {
    currentMonthNumber = 11;
    currentYear--;
  } else {
    currentMonthNumber--;
  }
  seasonsWallpapper.innerHTML = "";
  createTable(currentYear, currentMonthNumber);
});

nextButton.addEventListener("click", () => {
  if (currentMonthNumber === 11) {
    currentMonthNumber = 0;
    currentYear++;
  } else {
    currentMonthNumber++;
  }
  seasonsWallpapper.innerHTML = "";
  createTable(currentYear, currentMonthNumber);
});

function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

function updateCalendarTitle(currentMonth) {
  document.querySelector(".info").innerHTML = currentMonth;
}
function setDayOfWeek() {
  for (let i = 0; i < showCurrentDayName.length; i++) {
    if (dayName == "Sunday") {
      if (
        currentMonthNumber === currentDate.getMonth() &&
        currentYear === currentDate.getFullYear()
      ) {
        showCurrentDayName[6].style.backgroundColor = "blue";
      } else {
        showCurrentDayName[6].style.backgroundColor = "red";
      }
    }
    if (dayName == "Monday") {
      if (
        currentMonthNumber === currentDate.getMonth() &&
        currentYear === currentDate.getFullYear()
      ) {
        showCurrentDayName[0].style.backgroundColor = "blue";
      } else {
        showCurrentDayName[0].style.backgroundColor = "orange";
      }
    }
    if (dayName == "Tuesday") {
      if (
        currentMonthNumber === currentDate.getMonth() &&
        currentYear === currentDate.getFullYear()
      ) {
        showCurrentDayName[1].style.backgroundColor = "blue";
      } else {
        showCurrentDayName[1].style.backgroundColor = "orange";
      }
    }
    if (dayName == "Wednesday") {
      if (
        currentMonthNumber === currentDate.getMonth() &&
        currentYear === currentDate.getFullYear()
      ) {
        showCurrentDayName[2].style.backgroundColor = "blue";
      } else {
        showCurrentDayName[2].style.backgroundColor = "orange";
      }
    }
    if (dayName == "Thursday") {
      if (
        currentMonthNumber === currentDate.getMonth() &&
        currentYear === currentDate.getFullYear()
      ) {
        showCurrentDayName[3].style.backgroundColor = "blue";
      } else {
        showCurrentDayName[3].style.backgroundColor = "orange";
      }
    }
    if (dayName == "Friday") {
      if (
        currentMonthNumber === currentDate.getMonth() &&
        currentYear === currentDate.getFullYear()
      ) {
        showCurrentDayName[4].style.backgroundColor = "blue";
      } else {
        showCurrentDayName[4].style.backgroundColor = "orange";
      }
    }
    if (dayName == "Saturday") {
      if (
        currentMonthNumber === currentDate.getMonth() &&
        currentYear === currentDate.getFullYear()
      ) {
        showCurrentDayName[5].style.backgroundColor = "blue";
      } else {
        showCurrentDayName[5].style.backgroundColor = "red";
      }
    }
  }
}

function setBackground(year, month) {
  let currentMonth = new Date(year, month).toLocaleString("eng", {
    month: "long",
  });
  updateCalendarTitle(currentMonth);
  switch (currentMonth) {
    case "January":
    case "February":
    case "December":
      seasonsWallpapper.className = "winter";
      calendarWallpaper.append(seasonsWallpapper);

      break;

    case "April":
    case "May":
    case "March":
      seasonsWallpapper.className = "spring";
      calendarWallpaper.append(seasonsWallpapper);

      break;
    case "July":
    case "August":
    case "June":
      seasonsWallpapper.className = "summer";
      calendarWallpaper.append(seasonsWallpapper);

      break;

    case "September":
    case "October":
    case "November":
      seasonsWallpapper.className = "autumn";
      calendarWallpaper.append(seasonsWallpapper);

      break;

    default:
  }
}

function createTable(year, month) {
  let currentDay = 1;
  setDayOfWeek();
  setBackground(year, month);

  const lastDayOfPrevMonths = new Date(year, month, 0);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  const daysInMonth = lastDayOfMonth.getDate();
  const firstDayOfWeek = lastDayOfPrevMonths.getDay();

  for (let i = 0; i < 5; i++) {
    let tr = document.createElement("tr");
    for (let j = 0; j < 7; j++) {
      let td = document.createElement("td");
      let cellDate = new Date(year, month, currentDay);
      td.innerHTML = currentDay;

      if (i === 0 && j < firstDayOfWeek) {
        td.textContent = lastDayOfPrevMonths.getDate() - firstDayOfWeek + j + 1;
        td.id = "prev-month";
      } else if (currentDay <= daysInMonth) {
        td.textContent = currentDay;

        if (
          cellDate.getDate() === new Date().getDate() &&
          cellDate.getMonth() === new Date().getMonth() &&
          cellDate.getFullYear() === new Date().getFullYear()
        ) {
          td.className = "today";
        }

        currentDay++;
      } else {
        td.textContent = currentDay - daysInMonth;
        td.id = "next-month";
        currentDay++;
      }

      tr.appendChild(td);
    }
    seasonsWallpapper.appendChild(tr);
  }
}

createTable(currentDate.getFullYear(), currentDate.getMonth());
