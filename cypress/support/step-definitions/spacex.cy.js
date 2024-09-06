import {Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'


Given('que gero uma requisicao spaceX', ()=>{
    cy.requisicaoSpace()
})
Then('valido as informações no response', ()=>{
    cy.validarResponse()
})
