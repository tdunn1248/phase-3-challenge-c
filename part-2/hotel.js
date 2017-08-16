const db = require('./models/dbconfig')

const {listAllGuests, currentAndFutureBookings, roomCapacityAndAvailability} = require('./models/database')
const {print} = require('./print.js')

const managerInput = (command, argument) => {
  switch(command) {
    case 'guests':
      listAllGuests().then(results => print(results)).catch((e) => console.log(e))
      break
    case 'rooms':
      roomCapacityAndAvailability(argument).then(results => {
        console.log(results)
      }).catch(e => console.log(e))
      break
    case 'bookings':
      currentAndFutureBookings(argument).then((results)=> {
        console.log(results)
      }).catch(e=> console.log(e))
      break
    default:
      console.log(`Sorry, ${command} is not a valid command`)
      break
  }
}

managerInput(process.argv[2], process.argv[3])
