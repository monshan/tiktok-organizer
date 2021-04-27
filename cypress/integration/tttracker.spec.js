describe('TTTracker', () => {
  describe('Bad Paths', () => {
    it('Should display incorrect path error', () => {
      cy.visit('http://localhost:3000/any-invalid-route')
      cy.get('[for-cypress=bad-route]')
        .contains('This page doesn\'t exist! Please navigate back to Home with the Home tab above~')
        .and('be.visible')
    })
  })

  describe('CRUD Operations', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });

    it('Can display accurate Cards from App state', () => {
      cy.get('#gridContainer')
        .children()
        .should('have.length', 16)
        .and('exist')
        .and('be.visible')
    })

    it('Can use the controlled form to add a tiktok card to the home page', () => {
      cy.get('#openForm').click()
      cy.get('#inputTikTok').type('https://www.tiktok.com/oembed?url=https://www.tiktok.com/@lifeof.lori/video/6952626422070480133?sender_device=pc&sender_web_id=6925894707823576582&is_from_webapp=v1&is_copy_url=0')
      cy.get('#submit').click()
      cy.get('#gridContainer div')
        .first()
        .find('img')
        .should('have.attr', 'src', 'https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/fa9cc496f2034da499948dd8e1a1d4d7_1618784490~tplv-dmt-logom:tos-maliva-p-0000/cee815164a994f8493f93029a43fd407.image?x-expires=1619575200&x-signature=O8sRRwQNieHnJ%2FYXxzidlhZqjGA%3D')
    })
     
    it('Can remove a tiktok card from the home page', () => {
      cy.get('#gridContainer div')
        .first()
        .find('.trash-icon').click()
      cy.get('#gridContainer div')
        .first()
        .find('img')
        .should('have.attr', 'src', 'https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/e4fffc4a53704ceb8999bdf0a2c8a39d_1619136669~tplv-dmt-logom:tos-maliva-p-0000/06418759d39b47d3b28fa358debe468b.image?x-expires=1619575200&x-signature=SQibdmg43DNnSUBj4DxzEFRvU2c%3D')
    })

    it('Can bookmark a tiktok card', () => {
      cy.get('#gridContainer')
        .children()
        .eq(2)
        .find('.pin-icon').click()
      cy.get('#gridContainer div')
        .first()
        .find('img')
        .should('have.attr', 'src', 'https://p16-sign-va.tiktokcdn.com/obj/tos-maliva-p-0068/0d51215c6d9846958e23daa010b21b47?x-expires=1619575200&x-signature=L8g1cbDaBFdKv3620ZVhegHBQe4%3D')
    })

    // it('Can remove a bookmark from a tiktok card', () => {

    // })
  })

  describe('Indepenent Card', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
      cy.intercept({
        method: 'GET',
        url: "https://www.tiktok.com/oembed?url=https://www.tiktok.com/@str0ngzer0/video/6954499899572505862?sender_device=pc&sender_web_id=6925894707823576582&is_from_webapp=v1&is_copy_url=0"
      }, {
        fixture: 'forIndependent.json'
      })
    });


    it('Should have an image and two action buttons', () => {
      cy.get('#gridContainer')
        .children()
        .eq(3)
        .find('.pin-icon')
        .should('exist')
        .and('be.visible')
      
      cy.get('#gridContainer')
        .children()
        .eq(3)
        .find('.trash-icon')
        .should('exist')
        .and('be.visible')

      cy.get('#gridContainer')
        .children()
        .eq(3)
        .find('img')
        .should('have.attr', 'src', 'https://p16-sign-va.tiktokcdn.com/tos-maliva-p-0068/789ef91e8ae5437bbadac64918903652~tplv-dmt-logom:tos-maliva-p-0000/7935e17a2e554f888f1d3b67a160be04.image?x-expires=1619575200&x-signature=8xY7Kkl2RQWydWlLBnt6RWRiQYU%3D')
    })
  })
})