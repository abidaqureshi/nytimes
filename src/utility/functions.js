import MONTH_NAMES from './constants'
/*
  formatDate: A helper function used for converting
  dates in different formats
  Arguments: date object, dateFormat, symbole for styling the date
*/
const formatDate = (date, dateFormat = 'Ymd', symbol = '-') => {
  const d = date
  const month = d.getMonth()
  let day = d.getDate() - 1
  const year = d.getFullYear()

  if (day < 10) day = `0${day}`
  if (dateFormat === 'Ymd') {
    return [year, month, day].join(symbol)
  }

  return [day, MONTH_NAMES[month], year].join(symbol)
}

export default formatDate
