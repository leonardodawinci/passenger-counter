

let count = 0

let passengercount = document.getElementById('passenger-count')


function increment() {
  count += 1
  passengercount.textContent = count 
    console.log(count)
}

let savetext = document.getElementById('save-entry')

function save() {
    let countsave = count + ' - '
    savetext.textContent += countsave
    passengercount.textContent = 0
    count = 0
}

function reset() {
   passengercount.textContent = 0
    savetext.textContent = 'Previous Entries: '
}