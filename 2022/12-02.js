// day 2
const year = 2024;
const holidays = ["01/06", "04/01", "12/25"]; // format MM/DD

function countHours(year, holidays) {
  if (!year) return;
  if (!holidays) return;

  // add year to dates
  //   const dates = holidays.map((e) => {
  //     return (e += `/${year}`);
  //   });

  // define weekdays (ie not sat & sun)
  const weekdays = [1, 2, 3, 4, 5];
  let hours = 0;
  // check day of week of each date
  holidays.forEach((d) => {
    const date = new Date(`${year}/${d}`);
    const day = date.getDay();
    if (weekdays.includes(day)) {
      hours += 2;
    }
  });
  return hours;
}

const hours = countHours(year, holidays);
console.log(hours);
