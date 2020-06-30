// Data
const contacts = [
  {
      name: 'Karimov Abdurahmon',
      phone_numbers: ['(97) 4620235'],
      emails: ['kabouniversal@gmail.com'],
      addresses: [ 'Yashnobod Obod Makon 17-26', 'Shayhontoxur 44-05'],
  },
  {
      name: 'Minnie Steeves',
      phone_numbers: ['(649)-003-9398'],
      emails: ['minnie.steeves@example.com', 'minnie@example.com'],
      addresses: [ '5443 Ranchview Dr'],
  },
  {
      name: 'Glen Griffin',
      phone_numbers: ['(223)-422-2673'],
      emails: ['glen.griffin@example.com'],
      addresses: [ '1278 Valley View Ln'],
  },
  {
      name: 'Lillie Castro',
      phone_numbers: ['(877)-024-3136'],
      emails: ['lillie.castro@example.com', 'example@gmail.com'],
      addresses: [ '3212 Blossom Hill Rd'],
  },
  {
      name: 'Stacy Torres',
      phone_numbers: ['(642)-202-9445'],
      emails: ['stacy.torres@example.com'],
      addresses: [ '3857 Dogwood Ave'],
  },
  {
      name: 'Jorge Evans',
      phone_numbers: ['(247)-896-0426', '(099)-204-6543'],
      emails: ['jorge.evans@example.com'],
      addresses: [ '2981 Ash Dr'],
  },
]

// Varaibles
const names = document.getElementById('names')
const name = document.getElementById('name')
const phone = document.getElementById('phone')
const email = document.getElementById('email')
const address = document.getElementById('address')
const itemName = document.getElementById('itemName')
const modalDialog = document.getElementById('modalDialog')

// EventListeners
document.addEventListener("DOMContentLoaded", LoadContacts)

// Load Contacts
function LoadContacts() {
  for( let i = 0; i < contacts.length; i++) {
    let phone_numbers = ''
    contacts[i].phone_numbers.map( (phone_number, index) => {
      phone_numbers += `<div class="row">
                          <div class="col-8">
                            <h6>${phone_number}</h6>
                          </div>
                          <div class="col-4">
                            <button class="btn btn-danger btn-sm ml-2 mb-1" onclick="itemDelete(${i},${index}, 'phone_numbers')">
                              <i class="fa fa-trash"></i>
                            </button>
                            <button class="btn btn-secondary btn-sm mb-1" onclick="editItem(${i},${index}, 'phone_numbers')" data-toggle="modal" data-target="#editContact">
                              <i class="fa fa-pencil"></i>
                            </button>
                          </div>
                        </div>`
    })
    let emails = ''
    contacts[i].emails.map( (email, index) => {
      emails += ` <div class="row">
                    <div class="col-8">
                      <h6>${email}</h6>
                    </div>
                    <div class="col-4">
                      <button class="btn btn-danger btn-sm ml-2 mb-1" onclick="itemDelete(${i},${index}, 'emails')">
                        <i class="fa fa-trash"></i>
                      </button>
                      <button class="btn btn-secondary btn-sm mb-1" onclick="editItem(${i},${index}, 'emails')" data-toggle="modal" data-target="#editContact">
                        <i class="fa fa-pencil"></i>
                      </button>
                    </div>
                  </div>`
    })
    let addresses = ''
    contacts[i].addresses.map( (address,index) => {
      addresses += `<div class="row">
                      <div class="col-8">
                        <h6>${address}</h6>
                      </div>
                      <div class="col-4">
                        <button class="btn btn-danger btn-sm ml-2 mb-1" onclick="itemDelete(${i},${index}, 'addresses')">
                          <i class="fa fa-trash"></i>
                        </button>
                        <button class="btn btn-secondary btn-sm mb-1" onclick="editItem(${i},${index}, 'addresses')" data-toggle="modal" data-target="#editContact">
                          <i class="fa fa-pencil"></i>
                        </button>
                      </div>
                    </div>`
    })
    names.innerHTML += `<li class="list-group-item list-group-item-action" id="li">
                        <div class="row">
                          <div class="col-8">
                            <h4>${contacts[i].name}</h4>
                          </div>
                          <div class="col-4">
                            <button class="btn btn-danger" onclick="deleteContact(${i})">
                              <i class="fa fa-trash"></i>
                            </button>
                            <button class="btn btn-secondary" onclick="editItem(${i}, 1, 'name')" data-toggle="modal" data-target="#editContact">
                              <i class="fa fa-pencil"></i>
                            </button>
                          </div>
                        </div>
                        <h5>Phone Numbers:</h5>
                        ${phone_numbers}
                        <button type="button" class="btn btn-success btn-sm" data-toggle="modal" onclick="openAddItem(${i}, 'phone_numbers')" data-target="#addItem">
                          <i class="fa fa-plus-square"></i>
                        </button>
                        <h5  class="mt-4">Emails:</h5>
                        ${emails}
                        <button type="button" class="btn btn-success btn-sm" data-toggle="modal" onclick="openAddItem(${i}, 'emails')" data-target="#addItem">
                          <i class="fa fa-plus-square"></i>
                        </button>
                        <h5 class="mt-4">Addresses:</h5>
                        ${addresses}
                        <button type="button" class="btn btn-success btn-sm" data-toggle="modal" onclick="openAddItem(${i}, 'addresses')" data-target="#addItem">
                          <i class="fa fa-plus-square"></i>
                        </button>
                        </li>
                        `
  }
}

// Add New Item
let joinable = null
let userIndex = null
function openAddItem(i, item) {
  userIndex = i
  joinable = item
  return userIndex, joinable
}
function addItem() {
  if (joinable == 'phone_numbers' && itemName) {
    contacts[userIndex].phone_numbers.push(itemName.value)
    itemName.value = ''
  }
  if (joinable == 'emails' && itemName ) {
    contacts[userIndex].emails.push(itemName.value)
    itemName.value = ''
  }
  if (joinable == 'addresses' && itemName ) {
    contacts[userIndex].addresses.push(itemName.value)
    itemName.value = ''
  }
  names.innerHTML = ''
 LoadContacts()
}

// Delete Item
function itemDelete(i, index, item) {
  if (item == 'phone_numbers') {
    contacts[i].phone_numbers.splice(index, 1)
  }
  if (item == 'emails') {
    contacts[i].emails.splice(index, 1)
  }
  if (item == 'addresses') {
    contacts[i].addresses.splice(index, 1)
  }
  names.innerHTML = ''
  LoadContacts()
}

// Edit Contact
let contactI = null
let contactIndex = null
let contactItem = null 
function editItem(i, index, item) {
  if (item == 'phone_numbers') {
    modalDialog.innerHTML = `<input type="text" class="form-control" id="editableName" value="${contacts[i].phone_numbers[index]}">`
    contactItem = 'phone_numbers'
  }
  if (item == 'emails') {
    modalDialog.innerHTML = `<input type="text" class="form-control" id="editableName" value="${contacts[i].emails[index]}">`
    contactItem = 'emails'
  }
  if (item == 'addresses') {
    modalDialog.innerHTML = `<input type="text" class="form-control" id="editableName" value="${contacts[i].addresses[index]}">`
    contactItem = 'addresses'
  }
  if ( item == 'name') {
    modalDialog.innerHTML = `<input type="text" class="form-control" id="editableName" value="${contacts[i].name}">`
    contactItem = 'name'
  }
  contactI = i
  contactIndex = index
  return contactI, contactIndex, contactItem
}
function saveEditedContact() {
  if (contactItem == 'phone_numbers') {
    contacts[contactI].phone_numbers[contactIndex] = editableName.value
  }
  if (contactItem == 'emails') {
    contacts[contactI].emails[contactIndex] = editableName.value
  }
  if (contactItem == 'addresses') {
    contacts[contactI].addresses[contactIndex] = editableName.value
  }
  if ( contactItem == 'name') {
    contacts[contactI].name = editableName.value
  }
  names.innerHTML = ''
  LoadContacts()
  editableName.value = ''
}

// Delete Contact
function deleteContact(index) {
  contacts.splice(index, 1)
  names.innerHTML = ''
  LoadContacts()
}

// Add Contact
function addContact() {
 let isNull  = name.value != '' && phone.value != '' && email.value != '' && address.value != ''
  if(isNull) {
    let contact = {
      name: name.value,
      phone_numbers: [phone.value],
      emails: [email.value],
      addresses: [address.value],
    }
    contacts.push(contact)
    name.value = ''
    phone.value = ''
    email.value = ''
    address.value = ''
    names.innerHTML = ''
    LoadContacts()
  } else {
    alert('Oxirigacha to`ldirmismi')
  }
}

// Search Contacts
function SearchContacts(){
  let searchValue = document.getElementById('searchInput').value.toUpperCase()
  let li = names.getElementsByTagName('li')
  for( let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName('h4')[0].innerText
    a.toUpperCase().indexOf(searchValue) > -1 ? li[i].style.display = '' : li[i].style.display = 'none'
  }  
}