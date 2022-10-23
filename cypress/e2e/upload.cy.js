it ('deve fazer upload da imagem', function(){

    cy.visit('/upload')

    const imageFile = 'cypress/fixtures/fundoreunioes.png'
    
    cy.get('input[name=file]').selectFile(imageFile, {force: true})
    // cypress não acessa janelas abertas pelo navegador
    // então é necessário inserir a imagem para a pasta fixtures
    cy.get('#file-submit').click()
        .should('be.visible')
})