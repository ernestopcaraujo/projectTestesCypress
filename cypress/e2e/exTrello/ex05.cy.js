context('ex05', () => {

    it('cenario01', () => {

        cy.visit('https://localhost:44360/CalcSimples.aspx')

        cy.get('#txtN1').type(10)
        cy.get('#rbFuncao_0').click()
        cy.get('#txtN2').type(123)
        cy.get('input').contains('Calcular').click()
        cy.get('input').contains('Limpar').click()

        cy.get('#txtN1').type(70)
        cy.get('#rbFuncao_1').click()
        cy.get('#txtN2').type(97)
        cy.get('input').contains('Calcular').click()
        cy.get('input').contains('Limpar').click()
        
        cy.visit('https://localhost:44360/ControleEntradasSaidas.aspx')

        cy.get('#txtN1').type('Pássaros')
        cy.get('#txtV1').type(133)
        cy.get('#txtN2').type('Pássaros')
        cy.get('#txtV2').type(-27)
        cy.get('input').contains('Enviar').click()
        

        cy.visit('https://localhost:44360/CalcSimples.aspx')

        cy.get('#txtN1').type(10)
        cy.get('#rbFuncao_2').click()
        cy.get('#txtN2').type(100)
        cy.get('input').contains('Calcular').click()
        cy.get('input').contains('Limpar').click()

        cy.get('#txtN1').type(90)
        cy.get('#rbFuncao_3').click()
        cy.get('#txtN2').type(3)
        cy.get('input').contains('Calcular').click()
        cy.get('input').contains('Limpar').click()

        cy.get('#txtN1').type(125)
        cy.get('#rbFuncao_0').click()
        cy.get('#txtN2').type(25)
        cy.get('input').contains('Calcular').click()
        cy.get('input').contains('Limpar').click()

        cy.get('#txtN1').type(1)
        cy.get('#rbFuncao_1').click()
        cy.get('#txtN2').type(2)
        cy.get('input').contains('Calcular').click()
        cy.get('input').contains('Limpar').click()

        cy.visit('https://localhost:44360/ControleEntradasSaidas.aspx')

        cy.get('#txtN1').type('Ração')
        cy.get('#txtV1').type(1000)
        cy.get('#txtN2').type('Petiscos')
        cy.get('#txtV2').type(30)
        cy.get('#txtN3').type('Coleiras')
        cy.get('#txtV3').type(150)
        cy.get('#txtN4').type('Remedios')
        cy.get('#txtV4').type(-1)
        cy.get('input').contains('Enviar').click()
           
    });

    //Exemplo do uso do invoke('prop','value') para comparar duas células: o valor digitado no
    // input e o valor que foi impresso no grid
    // it('outroExemploVerificaComInvoke', () => {
    //     cy.get('#txtN1').type('Boneca')
    //     cy.get('#txtV1').type(4)
    //     cy.get('#txtN2').type('Carrinho')
    //     cy.get('#txtV2').type(1)
    //     cy.get('#txtN3').type('Doces')
    //     cy.get('#txtV3').type(5)
    //     cy.get('#txtN4').type('Refrigerante')
    //     cy.get('#txtV4').type(6)
    //     cy.get('input').contains('Enviar').click()
    //     cy.get("table tbody tr").should("have.length",5)
    //     cy.get('#txtN1').invoke('prop','value').then(
    //         valinput =>{
    //             cy.get("tbody tr").each(($el,index,$list)=>
    //                     {
    //                         if(index>0)
    //                         {
    //                             cy.get($el).find('#pNome').invoke('text').then( 
    //                                 valgrid=>{ if (index==1) {expect(valgrid).to.equal(valinput)} } 
    //                             )
    //                         }
    //                     }
    //                 )                 
    //         }
    //     )
    //     cy.get('input').contains('Limpar').click()


});