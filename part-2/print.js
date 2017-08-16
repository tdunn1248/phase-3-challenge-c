function logGuests(results) {
  let spacer = formatSpacer(2)
  console.log(`--${spacer}------------${spacer}----------------------------------------`)
  console.log(`ID${spacer}Guest Name${spacer}  Email`)
  console.log(`--${spacer}------------${spacer}----------------------------------------`)
  results.forEach(result => {
    console.log(`${result.id}${spacer}${result.name}    ${spacer}${result.email}`)
  })
}

function logRooms(results) {
  let spacer = formatSpacer(2)
  console.log(`-----${spacer}-----------${spacer}-----------`)
  console.log(`Room#${spacer} Capactiy${spacer}   Available`)
  console.log(`-----${spacer}-----------${spacer}-----------`)
  results.forEach(result => {
    console.log(result.room_number,'      ', result.capacity, '            ', result.availability);
  })
}

function logBookings(results) {
  let spacer = formatSpacer(4)
  console.log(`-----${spacer}--------------        ---------${spacer}-----------`)
  console.log(`Room#${spacer}Guest Name${spacer}        Check-in ${spacer}Check Out`)
  console.log(`-----${spacer}--------------        ---------${spacer}-----------`)
  results.forEach(result => {
    console.log(`${result.room_number }${spacer}   ${result.name}${spacer}        ${result.check_in.toLocaleDateString()}${spacer}     ${result.check_out.toLocaleDateString()}`)
  })
}

function formatSpacer(count) {
  let spacer = ''
  for(let i =0; i < count; i++) {
    spacer += '\xa0'
  }
  return spacer
}

module.exports = {
  logGuests,
  logRooms,
  logBookings
}
