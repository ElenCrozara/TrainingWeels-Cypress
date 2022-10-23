

it ('deve logar com sucesso', function(){
    cy.visit('/login')
    cy.get('#nickId').type('papitorocks')
    cy.get('#passId').type('pwd123')
    cy.get('button[type=submit]').click()
    cy.get('h3[class^="title"]').should('have.text', 'Olá Papito, bem-vindo ao Orkut')

    const expectText = 'Em breve você poderá participar de comunidades, adicionar amigos e deixar um Scraps. hahahahah'
    /// constante criada para guardar a frase
    cy.get('p[class*="subheader"]').should('have.text', expectText)

})