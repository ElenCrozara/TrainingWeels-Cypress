
it ('deve marcar thor', function(){

    cy.visit('/radios')
    cy.get('input[value=thor]')
    .click()
    .should('be.checked') 

    cy.get('h3[class^="title"]').should('have.text', 'Radio Buttons')
    cy.get('p[class^="subtitle"]').should('have.text', 'Todos os filmes do MCU em ordem cronológica \\o/')

})