context('ex01', () => {


    before(() => {
        cy.visit('https://localhost:44360/CalcSimples.aspx')
    });

    it('soma10+123', () => {

        cy.get('#txtN1').type(10)
        cy.get('#rbFuncao_0').click()
        cy.get('#txtN2').type(123)    
    });

    it('sub35-25', () => {

        cy.get('#txtN1').type(35)
        cy.get('#rbFuncao_1').click()
        cy.get('#txtN2').type(25)        
    });

    it('tab2x0', () => {

        cy.get('#txtN1').type(5)
        cy.get('#rbFuncao_2').click()
        cy.get('#txtN2').type(55)        
    });

    it('div20x2', () => {

        cy.get('#txtN1').type(20)
        cy.get('#rbFuncao_3').click()
        cy.get('#txtN2').type(2)        
    });


    it('sub70-(45)', () => {

        cy.get('#txtN1').type(70)
        cy.get('#rbFuncao_1').click()
        cy.get('#txtN2').type(-45)      
    });

    
    it('tab2x0', () => {

        cy.get('#txtN1').type(2)
        cy.get('#rbFuncao_2').click()
        cy.get('#txtN2').type(0)        
    });

    it('tab2x1', () => {

        cy.get('#txtN1').type(2)
        cy.get('#rbFuncao_2').click()
        cy.get('#txtN2').type(1)        
    });
    it('tab2x2', () => {

        cy.get('#txtN1').type(2)
        cy.get('#rbFuncao_2').click()
        cy.get('#txtN2').type(2)        
    });
    it('tab2x3', () => {

        cy.get('#txtN1').type(2)
        cy.get('#rbFuncao_2').click()
        cy.get('#txtN2').type(3)        
    });
    it('tab2x4', () => {

        cy.get('#txtN1').type(2)
        cy.get('#rbFuncao_2').click()
        cy.get('#txtN2').type(4)        
    });
    it('tab2x5', () => {

        cy.get('#txtN1').type(2)
        cy.get('#rbFuncao_2').click()
        cy.get('#txtN2').type(5)        
    });
    it('tab2x6', () => {

        cy.get('#txtN1').type(2)
        cy.get('#rbFuncao_2').click()
        cy.get('#txtN2').type(6)        
    });
    it('tab2x7', () => {

        cy.get('#txtN1').type(2)
        cy.get('#rbFuncao_2').click()
        cy.get('#txtN2').type(7)        
    });
    it('tab2x8', () => {

        cy.get('#txtN1').type(2)
        cy.get('#rbFuncao_2').click()
        cy.get('#txtN2').type(8)        
    });

    it('tab2x9', () => {

        cy.get('#txtN1').type(2)
        cy.get('#rbFuncao_2').click()
        cy.get('#txtN2').type(9)        
    });

    it('tab2x10', () => {

        cy.get('#txtN1').type(2)
        cy.get('#rbFuncao_2').click()
        cy.get('#txtN2').type(10)        
    });

    afterEach(() => {
        cy.get('input').contains('Calcular').click()
        cy.get('input').contains('Limpar').click()
    });
    
});