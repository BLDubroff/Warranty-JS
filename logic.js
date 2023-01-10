const warrentyHeader = document.createElement('h1')
warrentyHeader.textContent = 'Warrenty Information'
warrentyHeader.style.fontWeight ='bold'

document.body.appendChild(warrentyHeader)

const firstNameLabel = document.createElement('label')
firstNameLabel.textContent = 'First Name: '
const firstNameInput = document.createElement('input')
document.body.appendChild(firstNameLabel)
document.body.appendChild(firstNameInput)