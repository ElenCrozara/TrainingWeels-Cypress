
it('deve exibir uma mensagem de alerta', function(){

    cy.visit('/javascript_alerts')

    cy.contains('button', 'Alerta').click()

    // a função on traz o evento de pegar a janela do javascript que tem o alert
    cy.on('window:alert',function(result){
        expect(result).to.equal('Isto é uma mensagem de alerta')
    // é esperado que o resultado seja igual a mensagem isto é uma mensagem de alerta
    })
})

it('deve confirma a solicitação', function(){
    cy.visit('/javascript_alerts')

    cy.contains('button', 'Confirma').click()

    cy.on('window:confirm', () => true)
// aqui o cypress além de pegar o a popup de confirma, o código () => true está
// simulando o evento de click no botão OK da popup

    cy.get('#result').should('have.text', 'Mensagem confirmada')
})

it('não deve confirma a solicitação', function(){

    cy.visit('/javascript_alerts')

    cy.contains('button', 'Confirma').click()

    cy.on('window:confirm', () => false)

    cy.get('#result').should('have.text', 'Mensagem não confirmada')
})

it('deve exibir mensagem de boas vindas com meu nome', function(){

    cy.visit('/javascript_alerts')
//a função then é uma promessa para substituir a janela do prompt
    cy.window().then(function($win){
        cy.stub($win, 'prompt').returns('Elen')
        // o stub vai simular o prompt
        cy.contains('button', 'Prompt').click()
    })

    cy.get('#result').should('have.text', 'Olá, Elen')
})