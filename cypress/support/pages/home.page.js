const BTN_ACESSAR_LOGIN= '.login'
const BTN_CONTA = '.account'
const BTN_WOMAN = 'a[title= "Women"]'

Cypress.Commands.add('acessarLogin',()=>{
    cy.get(BTN_ACESSAR_LOGIN).click()
})

Cypress.Commands.add('validarLogin',()=>{
    cy.get(BTN_CONTA).should('be.visible')
})

Cypress.Commands.add('acessarCategoriaWomen',()=>{
    cy.get(BTN_WOMAN).click()
})

