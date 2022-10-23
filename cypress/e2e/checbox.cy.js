it ('deve marcar os top 5 filmes da Marvel', function(){

    cy.visit('/checkboxes')

    //array
    const movies = [
        'capmarvel',
        'ironman3',
        'guardians',
        'avengers3',
        'eternals'
    ]

    //lopp criado para percorrer por uma lista de dados(lista de filmes)vai rodar 5 vezes
    movies.forEach(function(m){
        cy.get(`input[name=${m}]`)// foi tirado as aspas simples e inserido apostrofos para 
        // interpolar o valor que vai ser recebido através da variavel M
        .click()
        .should('be.checked') 
    }) 
})