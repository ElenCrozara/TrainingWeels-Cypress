
//SELECT COMBO-BOX
// exemplo de busca COM 'id'
it('selecionar Bucky por id', function(){

    cy.visit('/select')
    cy.get('#avengerList').select('Bucky')
    // cy buscou o elemento pelo id e o select selecionou o elemento pelo nome
    //descrito no campo
    .should('have.value', '2')
    // aqui deve ter o valor igual a 2 que esta na inspeção do elemento Bucky
})


//exemplo de busca SEM 'id'
it ('selecionar tony stark sem ser pelo id', function(){

    cy.visit('/select')

    // contains é uma forma de achar um elemento que contem um texto, número, stc
    cy.contains('option', 'Selecione um personagem')
    .parent() // parente busca o pai, ou seja, é o passo anterior ao select
    .select('Tony Stark') // select para selecionar o elemento
    .should('have.value', '3') // verifica se o elemento tem 3 como valor
})