context('ex03', () => {

    before(() => {
        cy.visit('https://localhost:44360/ControleEntradasSaidas.aspx')
    });

    it('entradas01', () => {

        cy.get('#txtN1').type('Boneca')
        cy.get('#txtV1').type(4)
        cy.get('#txtN2').type('Carrinho')
        cy.get('#txtV2').type(1)
        cy.get('#txtN3').type('Doces')
        cy.get('#txtV3').type(5)
        cy.get('#txtN4').type('Refrigerante')
        cy.get('#txtV4').type(6)
        cy.get('input').contains('Enviar').click()


    });

    it('entradas02', () => {

        cy.get('input').contains('Limpar').click()

        cy.get('#txtN1').type('Boneca')
        cy.get('#txtV1').type(78)
        cy.get('#txtN2').type('Bolo')
        cy.get('#txtV2').type(3)
        cy.get('#txtN3').type('Doces')
        cy.get('#txtV3').type(8)
        cy.get('input').contains('Enviar').click()
    });

    it('entradas03', () => {

        cy.get('input').contains('Limpar').click()

        cy.get('#txtN1').type('Cafe')
        cy.get('#txtV1').type(2)
        cy.get('#txtN2').type('Coxinha')
        cy.get('#txtV2').type(3)
        cy.get('#txtN3').type('Pave')
        cy.get('#txtV3').type(1)
        cy.get('#txtN4').type('Bolo Seco')
        cy.get('#txtV4').type(1)
        cy.get('#txtN5').type('Gelatina')
        cy.get('#txtV5').type(2)
        cy.get('input').contains('Enviar').click()
        
    });

    after(() => {
        cy.get('input').contains('Limpar').click()
    });
    
});