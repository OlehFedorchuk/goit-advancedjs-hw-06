/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Days {
  MONDAY = "monday",
  TUSDAY = "tuesday",
  WEDNERSDAY = "wednesday",
  THURSDAY = "thursday",
  FRIDAY = "friday",
  SATURDAY = "saturday",
  SUNDAY = "sunday",
}

function isWeekend(Day: Days): boolean {
  if (Day === Days.SATURDAY || Day === Days.SUNDAY) {
    return true;
  } else {
    return false;
  }
}
console.log(isWeekend(Days.SUNDAY));
