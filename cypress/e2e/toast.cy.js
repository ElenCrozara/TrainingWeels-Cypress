it('deve validar notificação toast', function () {

    cy.visit('/toaster')

    cy.contains('button', 'Toast Lento').click()

    cy.get('.notification')
        .should('be.visible')
        .should('have.text', 'Essa notificação é mais fácil para testar!')
    //na hora do teste é possível parar a msg e inspecionar pelo Cypress
    //cy.get('body')
    //cy.wait(3000)
})