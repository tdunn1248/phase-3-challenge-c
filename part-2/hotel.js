const db = require('./models/dbconfig')
const {logGuests,logRooms, logBookings} = require('./print.js')
const {listAllGuests, currentAndFutureBookings, roomCapacityAndAvailability} = require('./models/database')

const managerInput = (command, argument) => {
  switch(command) {
    case 'guests':
      listAllGuests()
        .then(guests => {logGuests(guests)})
        .catch(e => console.log(e))
      break
    case 'rooms':
      roomCapacityAndAvailability(argument)
        .then(rooms => {logRooms(rooms)})
        .catch(e => console.log(e))
      break
    case 'bookings':
      currentAndFutureBookings(argument)
        .then(bookings => {logBookings(bookings)})
        .catch(e => console.log(e))
      break
    default:
      console.log(`${command} is not valid input`)
      break
  }
}

managerInput(process.argv[2], process.argv[3])
