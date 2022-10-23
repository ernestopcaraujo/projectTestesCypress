context('ex04', () => {

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
        cy.get("table tbody tr").should("have.length",5)
        cy.get("tbody tr")
            .each(($el,index,$list)=>
                {
                    if(index>0)
                    {
                        cy.get($el).find('#pCod').invoke('text').then( 
                            p=>{
                                if (index==1){expect(p).to.equal('1')}
                                if (index==2){expect(p).to.equal('2')}
                                if (index==3){expect(p).to.equal('3')}
                                if (index==4){expect(p).to.equal('4')}
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
                        cy.get($el).find('#pNome').invoke('text').then( 
                            p=>{
                                if (index==1){expect(p).to.equal('Boneca')}
                                if (index==2){expect(p).to.equal('Carrinho')}
                                if (index==3){expect(p).to.equal('Doces')}
                                if (index==4){expect(p).to.equal('Refrigerante')}
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
                                if (index==1){expect(p).to.equal('4')}
                                if (index==2){expect(p).to.equal('1')}
                                if (index==3){expect(p).to.equal('5')}
                                if (index==4){expect(p).to.equal('6')}
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
    

    it('entradas02', () => {

        cy.get('#txtN1').type('Boneca')
        cy.get('#txtV1').type(78)
        cy.get('#txtN2').type('Bolo')
        cy.get('#txtV2').type(3)
        cy.get('#txtN3').type('Doces')
        cy.get('#txtV3').type(8)
        cy.get('input').contains('Enviar').click()
        cy.get("tbody tr")
            .each(($el,index,$list)=>
                {
                    if(index>0)
                    {
                        cy.get($el).find('#pCod').invoke('text').then( 
                            p=>{
                                if (index==1){expect(p).to.equal('1')}
                                if (index==2){expect(p).to.equal('2')}
                                if (index==3){expect(p).to.equal('3')}
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
                        cy.get($el).find('#pNome').invoke('text').then( 
                            p=>{
                                if (index==1){expect(p).to.equal('Boneca')}
                                if (index==2){expect(p).to.equal('Bolo')}
                                if (index==3){expect(p).to.equal('Doces')}
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
                                if (index==1){expect(p).to.equal('78')}
                                if (index==2){expect(p).to.equal('3')}
                                if (index==3){expect(p).to.equal('8')}
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
        cy.get("tbody tr")
            .each(($el,index,$list)=>
                {
                    if(index>0)
                    {
                        cy.get($el).find('#pCod').invoke('text').then( 
                            p=>{
                                if (index==1){expect(p).to.equal('1')}
                                if (index==2){expect(p).to.equal('2')}
                                if (index==3){expect(p).to.equal('3')}
                                if (index==4){expect(p).to.equal('4')}
                                if (index==5){expect(p).to.equal('5')}
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
                        cy.get($el).find('#pNome').invoke('text').then( 
                            p=>{
                                if (index==1){expect(p).to.equal('Cafe')}
                                if (index==2){expect(p).to.equal('Coxinha')}
                                if (index==3){expect(p).to.equal('Pave')}
                                if (index==4){expect(p).to.equal('Bolo Seco')}
                                if (index==5){expect(p).to.equal('Gelatina')}
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
                                if (index==1){expect(p).to.equal('2')}
                                if (index==2){expect(p).to.equal('3')}
                                if (index==3){expect(p).to.equal('1')}
                                if (index==4){expect(p).to.equal('1')}
                                if (index==5){expect(p).to.equal('2')}
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