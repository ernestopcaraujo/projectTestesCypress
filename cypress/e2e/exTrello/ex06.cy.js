context('ex06', () => {

    it('cenario01', () => {
        
        cy.visit('https://localhost:44360/ControleEntradasSaidas.aspx')

        cy.get('#txtN1').type('Pássaros')
        cy.get('#txtV1').type(133)
        cy.get('#txtN2').type('Peixes')
        cy.get('#txtV2').type(-27)
        cy.get('input').contains('Enviar').click()
        cy.get("table tbody tr").should("have.length",3)

        cy.get("tbody tr")

        .each(($el,index,$list)=>
            {
                if(index>0)
                {
                    cy.get($el).find('#pNome').invoke('text').then( 
                        p=>{
                            if (index==1){expect(p).to.equal('Pássaros')}
                            if (index==2){expect(p).to.equal('Peixes')}
                        } 
                    )
                }
            }
        )
        
        cy.get("tbody tr")
        .each(($el,index,$list)=>
            {
                if(index>0)
                {
                    cy.get($el).find('#pValor').invoke('text').then( 
                        p=>{
                            if (index==1){expect(p).to.equal('133')}
                            if (index==2){expect(p).to.equal('-27')}
                        } 
                    )
                }
            }
        )
        
        cy.get('input').contains('Limpar').click()

        cy.visit('https://localhost:44360/ControleEntradasSaidas.aspx')

        cy.get('#txtN1').type('Ração')
        cy.get('#txtV1').type(1000)
        cy.get('#txtN2').type('Petiscos')
        cy.get('#txtV2').type(30)
        cy.get('#txtN3').type('Coleiras')
        cy.get('#txtV3').type(150)
        cy.get('#txtN4').type('Remédios')
        cy.get('#txtV4').type(-1)
        cy.get('input').contains('Enviar').click()

        cy.get("table tbody tr").should("have.length",5)

        cy.get("tbody tr")
        .each(($el,index,$list)=>
            {
                if(index>0)
                {
                    cy.get($el).find('#pNome').invoke('text').then( 
                        p=>{
                            if (index==1){expect(p).to.equal('Ração')}
                            if (index==2){expect(p).to.equal('Petiscos')}
                            if (index==3){expect(p).to.equal('Coleiras')}
                            if (index==4){expect(p).to.equal('Remédios')}
                        } 
                    )
                }
            }
        )
        cy.get("tbody tr")
        .each(($el,index,$list)=>
            {
                if(index>0)
                {
                    cy.get($el).find('#pValor').invoke('text').then( 
                        p=>{
                            if (index==1){expect(p).to.equal('1000')}
                            if (index==2){expect(p).to.equal('30')}
                            if (index==3){expect(p).to.equal('150')}
                            if (index==4){expect(p).to.equal('-1')}
                        } 
                    )
                }
            }
        )

        cy.get('input').contains('Limpar').click()
        cy.get('#txtN1').invoke('text').then(campo => {expect(campo).to.equal('')})
        cy.get('#txtN2').invoke('text').then(campo => {expect(campo).to.equal('')}) 
        cy.get('#txtN3').invoke('text').then(campo => {expect(campo).to.equal('')}) 
        cy.get('#txtN4').invoke('text').then(campo => {expect(campo).to.equal('')}) 
        cy.get('#txtN5').invoke('text').then(campo => {expect(campo).to.equal('')}) 
        cy.get('#txtN6').invoke('text').then(campo => {expect(campo).to.equal('')}) 
        cy.get('#txtN7').invoke('text').then(campo => {expect(campo).to.equal('')})
        cy.get('#txtV1').invoke('text').then(campo => {expect(campo).to.equal('')})
        cy.get('#txtV2').invoke('text').then(campo => {expect(campo).to.equal('')}) 
        cy.get('#txtV3').invoke('text').then(campo => {expect(campo).to.equal('')}) 
        cy.get('#txtV4').invoke('text').then(campo => {expect(campo).to.equal('')}) 
        cy.get('#txtV5').invoke('text').then(campo => {expect(campo).to.equal('')}) 
        cy.get('#txtV6').invoke('text').then(campo => {expect(campo).to.equal('')}) 
        cy.get('#txtV7').invoke('text').then(campo => {expect(campo).to.equal('')}) 
           
    });









    
});