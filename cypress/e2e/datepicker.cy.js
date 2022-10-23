// data 12/11/1984
it ('selecionar a data de nascimento', function(){
    cy.visit('/datepicker')

    //fazendo a massa de teste
    const date = {
        month : 'nov',
        year : '1984',
        day : /^1$/g
    }
    // sobre o day, o sistema do teste não estava buscando com
    //precisão o número 1, então foi usao uma expressão regular
    //do javascript: a / é usada para identificar que é uma regExp,
    // o ^ indica que começa com 1 e $ indica que termina com 1
    // a letra g indica que vc quer que seja único
    // site: busca por regular expression w3c
    cy.get('.datetimepicker-dummy-input').click()

    cy.get('.datepicker-nav-month').click()
    cy.contains('.datepicker-month', date.month).click()

    cy.get('.datepicker-nav-year').click()
    cy.contains('.datepicker-year span', date.year).click()

    cy.contains('button', date.day).click()
})