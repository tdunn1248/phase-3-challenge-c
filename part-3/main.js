const bookingUL = document.getElementsByClassName('content-details')[0]
const modal = document.getElementsByClassName('modal')[0]
const bookButtons = document.getElementsByClassName('btn-book')
const dropdown = document.getElementsByClassName('nights')[0]
const bookingTotal = document.getElementsByClassName('booking-total')[0]

const room = document.createElement('li')
const price = document.createElement('span')

let booking = []

dropdown.addEventListener('change', () => {
  calculateNights()
})

function toggleModal() {
  if(modal.style.display == 'flex') {
    modal.style.display = 'none'
    clearCart()
    resetModal()
  } else {
    modal.style.display = 'flex'
    calculateNights()
  }
}

(function buttonListeners() {
  for (let i = 0; i < bookButtons.length; i++) {
    bookButtons[i].addEventListener('click', () => {
      const theParent = bookButtons[i].parentNode
      const godFather = theParent.parentNode
      const roomNum = godFather.children[0].innerHTML
      const roomPrice = godFather.children[2].innerHTML
      bookItem(roomNum, roomPrice)
      modalData()
      toggleModal()
    })
  }
}())

function bookItem(room, price) {
  booking.push(room)
  booking.push(price)
}

function modalData() {
  room.classList.add('list-item')
  price.classList.add('list-item')
  room.textContent = booking[0]
  price.textContent = booking[1] + ' / per night'
  room.appendChild(price)
  bookingUL.prepend(room)
}

function resetModal() {
  room.textContent = ''
  price.textContent = ''
  dropdown.value = 1
}

function calculateNights() {
  const price = booking[1].slice(1)
  const total = parseFloat(price) * parseFloat(dropdown.value)
  bookingTotal.innerHTML = `$ ${total.toFixed(2)}`
}

function clearCart() {
  booking = []
}
