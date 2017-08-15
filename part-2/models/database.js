const db = require('./dbconfig')

// query of which guest have bookings
// query of which rooms have bookings
// lists all guests
// lists all rooms
/* query which rooms are booked by which guests
   with their checkin/checkout dates */

function listAllGuests() {
  return db.any('SELECT * from guests')
}

function selectAllRooms() {
  return db.any('SELECT * FROM rooms')
}

function currentAndFutureBookings() {
  return db.any('SELECT room.room_number, name, check_in, check_out FROM bookings,guests WHERE guests.id = bookings.guest_id')
}

module.exports = {
  listAllGuests
}
