describe('TTTracker', () => {
  describe('Bad Paths', () => {
    // it('Should display server error', () => {
    //   cy.intercept({
    //     method: 'GET',
    //     url: '/'
    //   },{
    //     statusCode: 200,
    //     status_msg: 'Something went wrong'
    //   })
    //   cy.visit('http://localhost:3000/')
    //   cy.get('[forCypress=card-error]').should('exist')
    //     .contains('Something went wrong, Cannot retrieve from TikTok!').and('be.visible')
    // })
  
    it('Should display incorrect path error', () => {
      cy.visit('http://localhost:3000/any-invalid-route')
      cy.get('[forCypress=bad-route]')
        .contains('This page doesn\'t exist! Please navigate back to Home with the Home tab above~')
        .and('be.visible')
    })
  })

  beforeEach(() => {
    cy.intercept('/', { fixture: "forIndependent.json" })
    cy.visit('http://localhost:3000');
   });

   describe('CRUD Operations', () => {
     it('Can display accurate Cards from App state', () => {

     })

     it('Can use the controlled form to add a tiktok card to the home page', () => {

     })
     
     it('Can remove a tiktok card from the home page', () => {

     })

     it('Can bookmark a tiktok card', () => {

     })

     it('Can remove a bookmark from a tiktok card', () => {

     })

   })
})