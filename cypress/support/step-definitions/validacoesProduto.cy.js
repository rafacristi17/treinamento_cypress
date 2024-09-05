import {Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

And('acesso a categoria Women',()=>{
    cy.acessarCategoriaWomen()
})
And('valido a quantidade de produtos em tela',()=>{
    cy.validarQtdProdutos()
})
And('acesso o produto {string}', produto =>{
    Cypress.env('produto', produto)
    cy.clicarProduto(produto)
})
Then('realizo as validacoes do produto', ()=>{
    cy.validarProduto()
})