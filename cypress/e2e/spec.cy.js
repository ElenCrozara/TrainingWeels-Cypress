

it ('deve exibir a home page', function(){
  cy.visit('https://training-wheels-qaninja.herokuapp.com')
  
  cy.title().should('eq', 'Training Wheels | QAninja') 
  //// 'eq' significa ecols - operador de verificação/comparação
  /// esta validando se o titulo é igual a Training Wheels | QAninja 
  cy.get('ul[class=menu-list]')
      .should('be.visible')
})