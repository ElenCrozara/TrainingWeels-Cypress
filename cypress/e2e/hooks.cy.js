
// aprendendo a usar ganchos
// palavra reservada para criar um agrupador ou suite de testes
describe('Suite de testes', function(){

    //palavra reservada para indicar que ALGO vai ser executado ANTES do teste 
    before(function(){
        cy.log('Aqui temos algo que roda antes de todos os testes')
    })

    beforeEach(function(){
        cy.log('Aqui temos algo que roda antes de CADA testes')
    })

    it ('teste 1', function(){

        cy.log('testando o teste 1')
    })
    
    it ('teste 2', function(){
    
        cy.log('testando o teste 2')
    })
    
    it ('teste 3', function(){
    
        cy.log('testando o teste 3')
    })


    afterEach(function(){
        cy.log('Aqui temos algo que roda DEPOIS de CADA testes')
    })

    // palavra reservada AFTER para indicar que algo vai ser rodado depois de todos os testes
    after(function(){
        cy.log('Aqui temos algo que roda DEPOIS de todos os testes')
    })

})

