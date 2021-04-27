describe('TTTracker', () => {
  describe('Bad Paths', () => {
    it('Should display server error', () => {
      cy.intercept({
        method: 'GET',
        url: '/'
      },
      { headers: {
        "content-type": 'text/html',
        fixture: "serverError.json"
      }
      })

      // cy.intercept(
      //   { method: "GET", url: "/bankAccounts" },
      //   {
      //     headers: {
      //       "access-control-allow-origin": window.location.origin,
      //       "Access-Control-Allow-Credentials": "true",
      //     },
      //     body: { results: [] },
      //   }
      // );

      cy.visit('http://localhost:3000')
      cy.get('[for-cypress=card-error]').should('exist')
        .contains('Something went wrong, Cannot retrieve from TikTok!').and('be.visible')
    })
  
    it('Should display incorrect path error', () => {
      cy.visit('http://localhost:3000/any-invalid-route')
      cy.get('[for-cypress=bad-route]')
        .contains('This page doesn\'t exist! Please navigate back to Home with the Home tab above~')
        .and('be.visible')
    })
  })

  

  describe('CRUD Operations', () => {
    beforeEach(() => {
      // cy.intercept('/', { fixture: "forIndependent.json" })
      cy.visit('http://localhost:3000');
    });

    it('Can display accurate Cards from App state', () => {
      cy.get('[for-cypress=home-grid]').should('have.length', 1)
        
    })

    it('Can use the controlled form to add a tiktok card to the home page', () => {
      cy.get('')
    })
     
    it('Can remove a tiktok card from the home page', () => {

    })

    it('Can bookmark a tiktok card', () => {

    })

    it('Can remove a bookmark from a tiktok card', () => {

    })
  })
})