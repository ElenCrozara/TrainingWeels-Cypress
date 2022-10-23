it ('deve exibir a mensagem de sucesso no popup', function(){
    cy.visit('sweet_alert')

    cy.contains('button', 'Sucesso').click()
    cy.get('div [class$="title"]').should('have.text', 'Tudo certo!')
    cy.get('div [class$="text"]').should('have.text', 'Você clicou no botão verde.')
    cy.contains('button', 'OK').click()
})

it ('deve exibir a mensagem deu ruim no popup', function(){
    cy.visit('sweet_alert')

    cy.contains('button', 'Deu Ruim').click()
    cy.get('div [class$="title"]').should('have.text', 'Deu Ruim!')
    cy.get('div [class$="text"]').should('have.text', 'Você clicou no botão vermelho.')
    cy.contains('button', 'OK').click()
})