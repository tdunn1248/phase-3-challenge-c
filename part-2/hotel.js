const db = require('./models/dbconfig')

const {listAllGuests} = require('./models/database')
const {print} = require('./print.js')

const managerInput = (command, argument) => {
  switch(command) {
    case 'guests':
      listAllGuests().then(results => print(results).catch((e) => console.log(e))
      break
    case 'rooms':
      console.log('rooms')
      break
    case 'bookings':
      console.log('bookings')
      break
    default:
      console.log(`Sorry, ${command} is not a valid command`)
      break
  }
}

managerInput(process.argv[2], process.argv[3])
