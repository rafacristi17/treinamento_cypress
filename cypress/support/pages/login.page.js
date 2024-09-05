const INPUT_EMAIL= '#email'
const INPUT_SENHA= '#passwd'
const BTN_LOGIN ='#SubmitLogin'


//REALIZA LOGIN
Cypress.Commands.add('realidarLogin',()=>{

    cy.get(INPUT_EMAIL).type(Cypress.env('usuario'), {log:false})
    cy.get(INPUT_SENHA).type(Cypress.env('senha'), {log:false})
   // cy.get(INPUT_EMAIL).type('academia_QA2024@teste.com')
   // cy.get(INPUT_SENHA).type('!QAZ2ws')
    cy.get(BTN_LOGIN).click()

})