
// foi adicionado um plugin para efetuar o teste porque o cypress - cypress-real-events
// não da superte a mousehover
it ('deve exibir o nome da tecnologia ao passar o mouse', function(){
    cy.visit('/hovers')

    const techs = [
        {img: 'img[src*=python]', tag: '.tag-python', brand: 'Python'},
        {img: 'img[src*=golang]', tag: '.tag-golang', brand: 'Golang'},
        {img: 'img[src*=nodejs]', tag: '.tag-nodejs', brand: 'Node.js'},
        {img: 'img[src*=netcore]', tag: '.tag-netcore', brand: '.NETCore'}
    ]

    techs.forEach(function(tech){
        cy.get(tech.img)
            .realHover('mouse') //cy busque pelo elemento da imagem e passe o mouse
        cy.get(tech.tag).should('be.visible').should('have.text', tech.brand)
// cy busque pelo elemento da descrição que foi exibido, verifique se esta visivel
// e se tem o texto Node.js

    })
// mouseover é quando você tem que passar o mouse por cima da imagem
// para aparecer uma descrição/informação

})