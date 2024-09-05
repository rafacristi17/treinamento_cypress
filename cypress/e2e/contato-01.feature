#utf -8
#language: pt

Funcionalidade: validacaoContato-01 - validacao de funcionalidade contato 
Cenário: validacao de funcionalidade contato
    Dado que acesso o portal My Shop
    Quando realizo login no portal
    E acesso a pagina de Contact us
    E seleciono a opcao Customer Service
    E digito a minha duvida no campo mensagem
    E clico no botao Send
    Então um alert será exibido confirmando o envio da mensagem
