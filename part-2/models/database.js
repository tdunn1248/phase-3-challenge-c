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

function currentAndFutureBookings(roomNum) {
  let currentDate = new Date()
  let whereClause = 'rooms.room_number = $1 AND '
  if (typeof(roomNum) == 'undefined' ) whereClause = ''
  return db.any(`SELECT
                  rooms.room_number, name, check_in, check_out
                FROM
                  bookings,guests,rooms
                WHERE
                  ${whereClause}
                  rooms.id = bookings.room_id
                  AND guests.id = bookings.guest_id
                  AND bookings.check_out > $2
                ORDER BY bookings.check_out ASC`, [roomNum, currentDate])
}


function roomCapacityAndAvailibility(onlyAvailable) {
  let currentDate = new Date();
  let whereClause = ` WHERE
    booked.room_id is NULL`
  let query = `
      SELECT rooms.room_number, rooms.capacity,
      CASE
        WHEN booked.room_id IS NULL
        THEN 'true'
        ELSE 'false'
      END
      as availability
      FROM
        rooms

        LEFT JOIN
        (
          SELECT
            bookings.room_id
          FROM
            bookings
          WHERE
              bookings.check_out > $1 AND bookings.check_in < $1
          ) booked
        ON rooms.id = booked.room_id
  `
  if (onlyAvailable) query = query + whereClause;
  return db.any(query, [currentDate])
}

module.exports = {
  listAllGuests,
  currentAndFutureBookings,
  roomCapacityAndAvailibility
}
