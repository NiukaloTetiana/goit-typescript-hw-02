/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Weekdays {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(weekday: Weekdays): boolean {
  return weekday === Weekdays.Saturday || weekday === Weekdays.Sunday;
}
