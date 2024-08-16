/*Типізуйте функцію isWeekend яка приймає день тижня з enumDayOfWeek 
і повертає boolean значення, що вказує, чи це день робочий чи вихідний.*/
enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}


const isWeekend = (day: DayOfWeek):boolean => {
    if (day === DayOfWeek.Monday
        || day === DayOfWeek.Tuesday
        || day === DayOfWeek.Wednesday
        || day === DayOfWeek.Thursday
        || day === DayOfWeek.Friday) {
        return true; 
    }
    else {
        return false;
    }
}
console.log(isWeekend(DayOfWeek.Friday));
console.log(isWeekend(DayOfWeek.Saturday));