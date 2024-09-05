import {Given, When, And, Then, Before, After } from 'cypress-cucumber-preprocessor/steps'

And('acesso a pagina de Contact us', () => {
    cy.acessarBtnContact();
  });
And('seleciono a opcao Customer Service', ()=>{
    cy.get('#id_contact').select('2');
})
And('digito a minha duvida no campo mensagem',()=>{
    cy.get('#message').type('Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.');
})
And('clico no botao Send', () =>{
    cy.get('#submitMessage').click();
})
And('um alert será exibido confirmando o envio da mensagem', ()=>{
    cy.get('.alert').should('contain', 'Your message has been successfully sent to our team.');

})


