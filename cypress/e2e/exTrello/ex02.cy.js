context('ex01', () => {


    before(() => {
        cy.visit('https://localhost:44360/CalcSimples.aspx')
    });

    it('soma10+123', () => {

        cy.get('#txtN1').type(10)
        cy.get('#rbFuncao_0').click()
        cy.get('#txtN2').type(123)
        cy.get('input').contains('Calcular').click()
        cy.get('#lbFormulaCalculo').invoke('text').then(formula=>{expect(formula).to.equal('10 + 123')})
        cy.get('#lbResultado').invoke('text').then(resultado=>{expect(resultado).to.equal('133')})
        cy.get('input').contains('Limpar').click()    
    });

    it('sub35-25', () => {

        cy.get('#txtN1').type(35)
        cy.get('#rbFuncao_1').click()
        cy.get('#txtN2').type(25)
        cy.get('input').contains('Calcular').click()
        cy.get('#lbFormulaCalculo').invoke('text').then(formula=>{expect(formula).to.equal('35 - 25')})
        cy.get('#lbResultado').invoke('text').then(resultado=>{expect(resultado).to.equal('10')})
        cy.get('input').contains('Limpar').click()     
    });

    it('mul5x55', () => {

        cy.get('#txtN1').type(5)
        cy.get('#rbFuncao_2').click()
        cy.get('#txtN2').type(55)
        cy.get('input').contains('Calcular').click()
        cy.get('#lbFormulaCalculo').invoke('text').then(formula=>{expect(formula).to.equal('5 * 55')})
        cy.get('#lbResultado').invoke('text').then(resultado=>{expect(resultado).to.equal('275')})
        cy.get('input').contains('Limpar').click()      
    });

    it('div20/2', () => {

        cy.get('#txtN1').type(20)
        cy.get('#rbFuncao_3').click()
        cy.get('#txtN2').type(2)
        cy.get('input').contains('Calcular').click()
        cy.get('#lbFormulaCalculo').invoke('text').then(formula=>{expect(formula).to.equal('20 / 2')})
        cy.get('#lbResultado').invoke('text').then(resultado=>{expect(resultado).to.equal('10')})
        cy.get('input').contains('Limpar').click()   
    });


    it('sub70-(45)', () => {

        cy.get('#txtN1').type(70)
        cy.get('#rbFuncao_1').click()
        cy.get('#txtN2').type(-45)
        cy.get('input').contains('Calcular').click()
        cy.get('#lbFormulaCalculo').invoke('text').then(formula=>{expect(formula).to.equal('70 - -45')})
        cy.get('#lbResultado').invoke('text').then(resultado=>{expect(resultado).to.equal('115')})
        cy.get('input').contains('Limpar').click()  
    });

    
    it('tab2x0', () => {

        cy.get('#txtN1').type(2)
        cy.get('#rbFuncao_2').click()
        cy.get('#txtN2').type(0)
        cy.get('input').contains('Calcular').click()
        cy.get('#lbFormulaCalculo').invoke('text').then(formula=>{expect(formula).to.equal('2 * 0')})
        cy.get('#lbResultado').invoke('text').then(resultado=>{expect(resultado).to.equal('0')})
        cy.get('input').contains('Limpar').click()
    });

    it('tab2x1', () => {

        cy.get('#txtN1').type(2)
        cy.get('#rbFuncao_2').click()
        cy.get('#txtN2').type(1)
        cy.get('input').contains('Calcular').click()
        cy.get('#lbFormulaCalculo').invoke('text').then(formula=>{expect(formula).to.equal('2 * 1')})
        cy.get('#lbResultado').invoke('text').then(resultado=>{expect(resultado).to.equal('2')})
        cy.get('input').contains('Limpar').click()   
    });
    it('tab2x2', () => {

        cy.get('#txtN1').type(2)
        cy.get('#rbFuncao_2').click()
        cy.get('#txtN2').type(2)
        cy.get('input').contains('Calcular').click()
        cy.get('#lbFormulaCalculo').invoke('text').then(formula=>{expect(formula).to.equal('2 * 2')})
        cy.get('#lbResultado').invoke('text').then(resultado=>{expect(resultado).to.equal('4')})
        cy.get('input').contains('Limpar').click()      
    });
    it('tab2x3', () => {

        cy.get('#txtN1').type(2)
        cy.get('#rbFuncao_2').click()
        cy.get('#txtN2').type(3)
        cy.get('input').contains('Calcular').click()
        cy.get('#lbFormulaCalculo').invoke('text').then(formula=>{expect(formula).to.equal('2 * 3')})
        cy.get('#lbResultado').invoke('text').then(resultado=>{expect(resultado).to.equal('6')})
        cy.get('input').contains('Limpar').click()  
    });
    it('tab2x4', () => {

        cy.get('#txtN1').type(2)
        cy.get('#rbFuncao_2').click()
        cy.get('#txtN2').type(4)
        cy.get('input').contains('Calcular').click()
        cy.get('#lbFormulaCalculo').invoke('text').then(formula=>{expect(formula).to.equal('2 * 4')})
        cy.get('#lbResultado').invoke('text').then(resultado=>{expect(resultado).to.equal('8')})
        cy.get('input').contains('Limpar').click()  
    });
    it('tab2x5', () => {

        cy.get('#txtN1').type(2)
        cy.get('#rbFuncao_2').click()
        cy.get('#txtN2').type(5)
        cy.get('input').contains('Calcular').click()
        cy.get('#lbFormulaCalculo').invoke('text').then(formula=>{expect(formula).to.equal('2 * 5')})
        cy.get('#lbResultado').invoke('text').then(resultado=>{expect(resultado).to.equal('10')})
        cy.get('input').contains('Limpar').click()
    });
    it('tab2x6', () => {

        cy.get('#txtN1').type(2)
        cy.get('#rbFuncao_2').click()
        cy.get('#txtN2').type(6)
        cy.get('input').contains('Calcular').click()
        cy.get('#lbFormulaCalculo').invoke('text').then(formula=>{expect(formula).to.equal('2 * 6')})
        cy.get('#lbResultado').invoke('text').then(resultado=>{expect(resultado).to.equal('12')})
        cy.get('input').contains('Limpar').click()
    });
    it('tab2x7', () => {

        cy.get('#txtN1').type(2)
        cy.get('#rbFuncao_2').click()
        cy.get('#txtN2').type(7)
        cy.get('input').contains('Calcular').click()
        cy.get('#lbFormulaCalculo').invoke('text').then(formula=>{expect(formula).to.equal('2 * 7')})
        cy.get('#lbResultado').invoke('text').then(resultado=>{expect(resultado).to.equal('14')})
        cy.get('input').contains('Limpar').click()
    });
    it('tab2x8', () => {

        cy.get('#txtN1').type(2)
        cy.get('#rbFuncao_2').click()
        cy.get('#txtN2').type(8)
        cy.get('input').contains('Calcular').click()
        cy.get('#lbFormulaCalculo').invoke('text').then(formula=>{expect(formula).to.equal('2 * 8')})
        cy.get('#lbResultado').invoke('text').then(resultado=>{expect(resultado).to.equal('16')})
        cy.get('input').contains('Limpar').click()
    });

    it('tab2x9', () => {

        cy.get('#txtN1').type(2)
        cy.get('#rbFuncao_2').click()
        cy.get('#txtN2').type(9)
        cy.get('input').contains('Calcular').click()
        cy.get('#lbFormulaCalculo').invoke('text').then(formula=>{expect(formula).to.equal('2 * 9')})
        cy.get('#lbResultado').invoke('text').then(resultado=>{expect(resultado).to.equal('18')})
        cy.get('input').contains('Limpar').click()
    });

    it('tab2x10', () => {

        cy.get('#txtN1').type(2)
        cy.get('#rbFuncao_2').click()
        cy.get('#txtN2').type(10)
        cy.get('input').contains('Calcular').click()
        cy.get('#lbFormulaCalculo').invoke('text').then(formula=>{expect(formula).to.equal('2 * 10')})
        cy.get('#lbResultado').invoke('text').then(resultado=>{expect(resultado).to.equal('20')})
        cy.get('input').contains('Limpar').click()
    });

    afterEach(() => {
        cy.get('#txtN1').invoke('text').then(txtN1=>{expect(txtN1).to.equal('')})
        cy.get('#txtN2').invoke('text').then(txtN2=>{expect(txtN2).to.equal('')})
        cy.get('#lbFormulaCalculo').invoke('text').then(txtN1=>{expect(txtN1).to.equal('')})
        cy.get('#lbResultado').invoke('text').then(txtN1=>{expect(txtN1).to.equal('')})
    });

});