
// Get number value of Input field 
function getNumberValueOfInput(inputId) {
    const inputField = document.getElementById(inputId)
    const inputValueStr = inputField.value
    const inputValue = parseInt(inputValueStr)
    return inputValue;
}

// Get number value of text field 
function getNumberValueOfText(inputId) {
    const textField = document.getElementById(inputId)
    const textValueStr = textField.innerText
    const textValue = parseInt(textValueStr)
    return textValue;
}

// Set input field value 
function setInputValue(fieldId, value) {
    const getInputId = document.getElementById(fieldId)
    getInputId.value = value
}


// Set Text field value 
function setTextValue(textId, value) {
    const getTextId = document.getElementById(textId)
    getTextId.innerText = value
}

// Update Quantity / increase or decrease 
function updateQuantity(fieldId, isIncrease) {
    const quantityValue = getNumberValueOfInput(fieldId)
    let updateQty
    if (isIncrease) {
        updateQty = quantityValue + 1
    } else {
        updateQty = quantityValue - 1
    }
    setInputValue(fieldId, updateQty)
    return updateQty
}


// Each product price update with quantity 
function updatePrice(fieldId, updateQty, price) {
    const totalPrice = updateQty * price;
    setTextValue(fieldId, totalPrice)

}

// Calculate subtotal, tax, total 
function calculateTotalPrices() {
    // Subtotal 
    const phonePrice = getNumberValueOfText('phone-price')
    const casePrice = getNumberValueOfText('case-price')
    const subTotal = phonePrice + casePrice
    setTextValue('subtotal', subTotal)

    // tax 
    const taxValueStr = (subTotal * 0.1).toFixed(2)
    const taxValue = parseInt(taxValueStr)
    setTextValue('tax', taxValue)

    // total 
    const totalValue = subTotal + taxValue;
    setTextValue('total', totalValue)

}

// Phone Plus button Functionality 
document.getElementById('phone-btn-plus').addEventListener('click', function () {
    const updateQty = updateQuantity('phone-quantity', true)
    const price = 1219
    updatePrice('phone-price', updateQty, price)

    // Calculate subtotal, tax, total 
    calculateTotalPrices()
})


// Phone Minus button Functionality 
document.getElementById('phone-btn-minus').addEventListener('click', function () {
    const updateQty = updateQuantity('phone-quantity', false)
    if (updateQty >= 0) {
        const price = 1219
        updatePrice('phone-price', updateQty, price)
    } else {
        setInputValue('phone-quantity', 0)
    }

    // Calculate subtotal, tax, total 
    calculateTotalPrices()
})


// Case Plus button Functionality 
document.getElementById('case-btn-plus').addEventListener('click', function () {
    const updateQty = updateQuantity('case-quantity', true)
    const price = 59
    updatePrice('case-price', updateQty, price)

    // Calculate subtotal, tax, total 
    calculateTotalPrices()

})


// Case Minus button Functionality 
document.getElementById('case-btn-minus').addEventListener('click', function () {
    const updateQty = updateQuantity('case-quantity', false)
    if (updateQty >= 0) {
        const price = 59
        updatePrice('case-price', updateQty, price)
    } else {
        setInputValue('case-quantity', 0)
    }

    // Calculate subtotal, tax, total 
    calculateTotalPrices()
})

