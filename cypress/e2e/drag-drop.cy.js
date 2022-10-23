
//drag and drop é a ação de clicar e arrastar
it ('deve arrastar o cypress para a caixa do node',function(){

    cy.visit('/drag_and_drop')

    const dataTransfer = new DataTransfer()
    ///  transferir dados

    cy.get('img[alt=Cypress]').trigger('dragstart', {dataTransfer})
    /// buscou o elemento       // evento de arrastar
    
    cy.get('.nodejs figure[draggable=true]').trigger('drop', {dataTransfer})
    /// buscou o elemento final     // evento de soltar

    cy.get('img[alt="Robot Framework"]').trigger('dragstart', {dataTransfer})

    cy.get('.python [draggable="true"]').trigger('drop', {dataTransfer})


})