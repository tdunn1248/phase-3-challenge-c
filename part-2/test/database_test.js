const chai = require('chai')
const expect = chai.expect

const {listAllGuests, currentAndFutureBookings, roomCapacityAndAvailability} = require('../models/database.js')

describe('listAllGuests()', function() {
  it('should list all guests', function() {
    return listAllGuests().then(results => {
      expect(results.length).to.be.equal(20)
      expect(typeof results).to.eql('object')
      expect(results[0]).to.be.eql({id: 1, name: 'Aurthur Velti', email: 'avelti0@live.com'})
      expect(results[19]).to.be.eql({id: 20, name: 'Penelope Searchfield', email: 'psearchfieldj@youtube.com'})
    })
  })
})

describe('currentAndFutureBookings()', function() {
  it('lists rooms and current availability', function() {
    return currentAndFutureBookings().then(results => {
      expect(results.length).to.be.equal(39)
      expect(typeof results).to.eql('object')
      expect(results[0]).to.deep.include({room_number: '5A', name: 'Billi Coyne'})
      expect(results[38]).to.deep.include({room_number: '4A', name: 'Janie Powers'})
    })
  })
})

describe('roomCapacityAndAvailability()', function() {
  it('lists the room bookings (room # and guest name)', function() {
    return roomCapacityAndAvailability().then(results => {
      expect(results.length).to.be.equal(18)
      expect(typeof results).to.eql('object')
      expect(results[1]).to.deep.eql({ room_number: '3F', capacity: 6, availability: 'true' })
      expect(results[17]).to.deep.eql({ room_number: '3E', capacity: 3, availability: 'true' })
    })
  })
})
