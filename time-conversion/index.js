function timeConversion(s) {
  let ampm = s.charAt(8)
  let militaryHour = '';
  let hour = s.substring(0,2)
  
  if (ampm === 'A') {
   if (hour === '12') {
     militaryHour = '00'
   } else {
     militaryHour = hour
   }
  } else {
    if (hour === '12') {
      militaryHour = hour
    } else {
      militaryHour = parseInt(hour, 10) + 12
    }
  }
  return militaryHour + s.substring(2,8)
}

console.log(timeConversion('12:01:00AM')) // '00:01:00'