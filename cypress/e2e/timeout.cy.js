
//aprendendo a usar o cy.wait - timeout 
it ('exemplo de timeout', function(){

    cy.visit('/timeout')
    cy.contains('button', 'Habilita').click()
    // primeira opção de delay do tempo
    //cy.wait(8000)// comando para desacelerar o cypress em 7 segundos
    cy.get('#firstname')
    .type('Elen', {timeout: 8000}) // timeout usado na função que estoura
    // o problema do tempo - type
    // forma mais usada
})