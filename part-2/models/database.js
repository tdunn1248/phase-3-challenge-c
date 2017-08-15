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

function currentAndFutureBookings(currentDate) {
  return db.any('SELECT rooms.room_number, name, check_in, check_out FROM bookings,guests,rooms WHERE rooms.id = bookings.room_id AND guests.id = bookings.guest_id AND bookings.check_out > $1 ORDER BY bookings.check_out ASC', [currentDate])
}

function roomCapacityAndAvailibility(currentDate) {
  return db.any(`
        SELECT
          rooms.room_number,
          rooms.capacity,
          exists (
            SELECT true FROM bookings, rooms WHERE  
          )

        FROM
          bookings,
          rooms
        WHERE
          rooms.id = bookings.room_id
          AND bookings.check_out > $1
          AND bookings.check_in < $1
        ORDER BY bookings.check_out ASC
        `, [currentDate])
}

module.exports = {
  listAllGuests,
  currentAndFutureBookings
}
