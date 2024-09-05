const CLICAR_CONTATO = 'a[title="Contact us"]';
const SELETOR_CUSTOMER_SERVICE = '#id_contact';
const CAMPO_MENSAGEM = '#message';
const BOTAO_SEND = '#submitMessage';
const ALERTA_MENSAGEM = '.alert';

Cypress.Commands.add('acessarBtnContact', () => {
    cy.get(CLICAR_CONTATO).click();
});

Cypress.Commands.add('selecionarCustomerService', () => {
    cy.get(SELETOR_CUSTOMER_SERVICE).select('2'); 
});

Cypress.Commands.add('digitarMensagem', (mensagem) => {
    cy.get(CAMPO_MENSAGEM).type(mensagem);
});

Cypress.Commands.add('clicarBotaoSend', () => {
    cy.get(BOTAO_SEND).click();
});

Cypress.Commands.add('verificarAlertaEnvio', (mensagemEsperada) => {
    cy.get(ALERTA_MENSAGEM).should('contain', mensagemEsperada);
});
