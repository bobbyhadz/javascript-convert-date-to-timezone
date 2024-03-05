// EXAMPLE 1 - Convert a Date to another Time Zone using JavaScript

function changeTimeZone(date, timeZone) {
  if (typeof date === 'string') {
    return new Date(
      new Date(date).toLocaleString('en-US', {
        timeZone,
      }),
    );
  }

  return new Date(
    date.toLocaleString('en-US', {
      timeZone,
    }),
  );
}

const laDate = changeTimeZone(new Date(), 'America/Los_Angeles');
console.log(laDate); // 👉️ "Tue Jul 25 2023 08:31:12"

const berlinDate = changeTimeZone(new Date(), 'Europe/Berlin');
console.log(berlinDate); // 👉️ "Tue Jul 25 2023 17:31:13"

// ------------------------------------------------------------------

// // EXAMPLE 2 - The toLocaleString() method uses the Intl.DateTimeFormat API

// const date = new Date();

// // US English uses month-day-year order
// console.log(new Intl.DateTimeFormat('en-US').format(date));
// // "7/25/2023"

// // British English uses day-month-year order
// console.log(new Intl.DateTimeFormat('en-GB').format(date));
// // "25/07/2023"

// // German uses day-month-year order
// console.log(new Intl.DateTimeFormat('de-DE').format(date));
// // "25.7.2023"
