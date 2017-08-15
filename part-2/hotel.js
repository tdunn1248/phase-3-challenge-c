const db = require('./models/dbconfig')

const managerInput = (command, argument) => {
  switch(command) {
    case 'guests':
      console.log('guests')
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
