const BTN_PRODUTO = '.product-container'

Cypress.Commands.add('validarQtdProdutos',()=>{
    cy.get(BTN_PRODUTO).should('have.length', 7)
})
Cypress.Commands.add('clicarProduto', produto =>{
    cy.get(BTN_PRODUTO).contains(produto).click()
})
