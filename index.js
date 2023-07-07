const myDoc = document.body

function clearDocBody() {
  myDoc.innerHTML = ''
}

function createForm() {
  const myForm = document.createElement('form')
  myDoc.append(myForm)
}

class InputElements {
  #labelInput() {
    let inputLabel = document.createElement('label')
    let myForm = document.querySelector('form')
    myForm.append(inputLabel)
    return inputLabel
  }

  constructor(type, name, placeholder) {
    this.type = type
    this.name = name
    this.placeholder = placeholder
  }
  createBodyElement() {
    let myLabel = this.#labelInput()
    let myinput = document.createElement('input')
    myinput.type = this.type
    myinput.name = this.name
    myinput.placeholder = this.placeholder
    myLabel.insertAdjacentElement('beforeend', myinput)
  }
}

let createButton = (type) => {
  let myForm = document.querySelector('form')
  let myButton = document.createElement('button')
  myButton.innerHTML = 'Подтвердить'
  myForm.append(myButton)
}

clearDocBody()
createForm()

const firstInput = new InputElements('text', 'UserName', 'Введите ваше имя')
firstInput.createBodyElement()

const secondInput = new InputElements(
  'password',
  'password',
  'Придумайте Пароль'
)
secondInput.createBodyElement()

createButton('button')
