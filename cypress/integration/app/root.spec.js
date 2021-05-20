
describe('Main app functionality', () => {
  it('Should display main page', () => {
    cy.visit('http://localhost:3000/')
    cy.get('h1').contains('todos')
  })

  it('Should add new items to the todo list', () => {
   cy.get('input').type('it works!')
   cy.get('button').contains('add').click();

   cy.get('input').type('list is growing!')
   cy.get('button').contains('add').click();

   cy.get('input').type('and growing!')
   cy.get('button').contains('add').click();

   cy.get('input').type('Cypress is fun!')
   cy.get('button').contains('add').click();
  })
})