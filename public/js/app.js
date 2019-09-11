const moment = require('moment')

const dateForm = document.querySelector('form')
const psDate = document.querySelector('input.psDate')
const subMonth = document.querySelector('input.subMonth')
const messageOne = document.querySelector('#message-1')

dateForm.addEventListener('submit', (e) => {
   e.preventDefault()
   const newDate = moment(psDate.value).subtract(subMonth.value,'months')
   const formatDate = moment(newDate).format("YYYY-MM-DD")
   messageOne.textContent = formatDate
})