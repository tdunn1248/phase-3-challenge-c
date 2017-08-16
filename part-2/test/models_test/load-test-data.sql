COPY guests(id, name,email)
FROM '/Users/jiggs/Documents/guildProjects/phase2/phase-3-challenge-c/part-2/models/data/guests.csv' DELIMITER ',' CSV HEADER;

COPY rooms(id, room_number,capacity)
FROM '/Users/jiggs/Documents/guildProjects/phase2/phase-3-challenge-c/part-2/models/data/rooms.csv' DELIMITER ',' CSV HEADER;

COPY bookings(id,room_id, guest_id, check_in, check_out)
FROM '/Users/jiggs/Documents/guildProjects/phase2/phase-3-challenge-c/part-2/models/data/bookings.csv' DELIMITER ',' CSV HEADER;
