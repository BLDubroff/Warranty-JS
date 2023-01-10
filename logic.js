const warrentyHeader = document.createElement('h1')
warrentyHeader.textContent = 'Warrenty Information'
warrentyHeader.style.fontWeight ='bold'

document.body.appendChild(warrentyHeader)

// const firstNameLabel = document.createElement('label')
// firstNameLabel.textContent = 'First Name: '
// const firstNameInput = document.createElement('input')
// document.body.appendChild(firstNameLabel)
// document.body.appendChild(firstNameInput)

function textForm(value) {
    let label = document.createElement('label')
    label.textContent = value
    let input = document.createElement('input')
    const lb = document.createElement('br')


    document.body.appendChild(label)
    document.body.appendChild(lb)
    document.body.appendChild(input)
    document.body.appendChild(lb)
    document.body.appendChild(lb)
}

textForm('First Name:')
textForm('Last Name:')
textForm('Company Name:')