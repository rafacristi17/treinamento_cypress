Given ('que acesso o portal My Shop',()=>{
    cy.visit('/')
})
When ('realizo login no portal',()=>{
    cy.acessarLogin()
    cy.realidarLogin()
})
Then ('valido o acesso a home',()=>{
    cy.validarLogin()
})