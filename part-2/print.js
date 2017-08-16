function logGuests(results) {
  console.log('--   ------------   -----------')
  console.log('ID', '  Guest Name', '     Email')
  console.log('--   ------------   -----------')
  results.forEach(result => {
    console.log(result.id, result.name, result.email)
  })
}

function logRooms(results) {
  console.log('-----    ------------   -----------')
  console.log('Room#', '   Capactiy', '      Available')
  console.log('-----    ------------   -----------')
  results.forEach(result => {
    console.log(result.room_number,'      ', result.capacity, '            ', result.availability);
  })
}

function logBookings(results) {
  console.log('-----    ------------   -----------   -----------')
  console.log('Room#', '   Guest Name', '    Check-in', '     Check Out')
  console.log('-----    ------------   -----------   -----------')
  results.forEach(result => {
    console.log(result.room_number,'     ', result.name,'    ', result.check_in.toLocaleDateString(),'      ', result.check_out.toLocaleDateString());
  })
}

module.exports = {
  logGuests,
  logRooms,
  logBookings
}
