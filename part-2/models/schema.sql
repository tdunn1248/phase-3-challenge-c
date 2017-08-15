DROP TABLE IF EXISTS guests CASCADE;
DROP TABLE IF EXISTS rooms CASCADE;
DROP TABLE IF EXISTS bookings CASCADE;

CREATE TABLE guests (
  id PRIMARY KEY,
  name VARCHAR(60),
  email VARCHAR(100)
);

CREATE TABLE rooms (
  id PRIMARY KEY,
  room_number VARCHAR(4),
  capacity INT
);

CREATE TABLE bookings (
  id PRIMARY KEY,
  guest_id INT references guests(id),
  room_id INT references rooms(id),
  check_in DATE,
  check_out DATE
);
