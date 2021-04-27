describe('TTTracker', () => {
  describe('Bad Paths', () => {
    it('Should display server error', () => {
      cy.intercept({
        method: 'GET',
        url: '/'
      },{
        status_msg: 'Something went wrong'
      })

      cy.get('[forCypress=card-error]').should('exist')
      cy.contains('Something went wrong, Cannot retrieve from TikTok!').and('be.visible')
    })
  
    it('Should display incorrect path error', () => {
      cy.visit('http://localhost:3000/any-invalid-route')
      cy.get('[forCypress=bad-route]').includes('This page doesn\'t exist! Please navigate back to Home with the Home tab above~')
    })
  })

  // beforeEach(() => {
  //   cy.intercept('/', { fixture: "forIndependent.json" })
  //   cy.visit('http://localhost:3000');
  //  });


})