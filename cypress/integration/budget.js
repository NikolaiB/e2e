describe('Calculate the Budget', () => {

    before(()=>{
        cy.visit('https://budget.modus.app/budget')
    })

    it('Add an item to budget', () => {

        cy
            .get('select').select('Car')
        cy
            .get(':nth-child(2) > input')
            .type('Rent')
        cy
            .get(':nth-child(3) > input')
            .type('320')
        cy
            .get('.submit').click()
        cy
            .get(':nth-child(7) > .MBPvA > ._3-t-g')
            .should('have.text', '-$320.00')
        cy
            .get(':nth-child(5) > ._3S2Fs > .sG1fB')
            .should('have.text', '$1,893.93')
    })

    it('Edit Paycheck item', () => {

        cy
            .get('tbody > :nth-child(6)').click()
        cy
            .get('tbody > ._3Tz1l > td > form > :nth-child(2) > input').clear()
            .type('Uber')
        cy
            .get('tbody > ._3Tz1l > td > form > :nth-child(3) > input').clear()
            .type('6700')
        cy
            .get('tbody > ._3Tz1l > td > form > :nth-child(4) > .submit').click()
        cy
            .get(':nth-child(6) > ._3XkHf > ._3-t-g')
            .should('have.text', '$6,700.00')
        cy
            .get(':nth-child(5) > ._3S2Fs > .sG1fB')
            .should('have.text', '$2,893.93')
    })

    it('Delete Rent item', () => {

        cy
            .get('tbody > :nth-child(7)').click()
        cy
            .get('.delete').click()
        cy
            .get('.opmhI').should('not.have.text', 'Rent')
        cy
            .get(':nth-child(5) > ._3S2Fs > .sG1fB')
            .should('have.text', '$3,213.93')
    })

    it('Value field validation', () => {

        cy
            .get('select').select('Car')
        cy
            .get(':nth-child(2) > input')
            .type('Rent')
        cy
            .get(':nth-child(3) > input')
            .type('test')
        cy
            .get('.submit').should('disabled')
    });
})
