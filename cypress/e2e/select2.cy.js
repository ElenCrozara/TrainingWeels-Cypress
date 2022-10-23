

it('deve selecionar apenas um', function () {

    cy.visit('/apps/select2/index.html')

    cy.get('.select2-selection--single').click()

    // exemplo usando contains quando os elementos são parecidos ou se repetem
    cy.contains('.select2-results__option', 'Protractor')
        .click()
})

it ('deve selecionar MULTIPLOS', function(){
 
    cy.visit('/apps/select2/index.html')
  
    cy.get('ul.select2-selection__rendered').click()
    cy.contains('.select2-results__option', 'Cypress').click()
    // cy buscou o campo, clicou, buscou o elemento contendo Cypress e  clicou
  
    cy.get('ul.select2-selection__rendered').click()
    cy.contains('.select2-results__option', 'Robot Framework').click()
    // cy buscou o campo, clicou, buscou o elemento contendo Robot Framework e  clicou
  
    cy.get('ul.select2-selection__rendered').click()
    cy.contains('.select2-results__option', 'Playwright').click()
    // cy buscou o campo, clicou, buscou o elemento contendo Playwright e  clicou
   
 })
 
it('deve selecionar mais de 2', function () {

    cy.visit('/apps/select2/index.html')

    const frameworks = [
        'Cypress',
        'Robot Framework',
        'Playwright'
    ]

    frameworks.forEach(function (framework) {
        cy.get('ul.select2-selection__rendered').click()
        cy.contains('.select2-results__option', framework).click()
    })

})