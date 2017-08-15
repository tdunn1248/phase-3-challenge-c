const db = require('./models/dbconfig')

const {listAllGuests, currentAndFutureBookings} = require('./models/database')
const {print} = require('./print.js')

const managerInput = (command, argument) => {
  switch(command) {
    case 'guests':
      listAllGuests().then(results => print(results)).catch((e) => console.log(e))
      break
    case 'rooms':
      console.log('rooms')
      break
    case 'bookings':
      currentAndFutureBookings(new Date()).then((results)=> {
        console.log(results)
      }).catch(e=> console.log(e))
      break
    default:
      console.log(`Sorry, ${command} is not a valid command`)
      break
  }
}

managerInput(process.argv[2], process.argv[3])
