
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

  it('Should delete tasks after clicking delete button', () => {
    cy.get('button').contains(/delete/i).click();
    cy.get('button').contains(/delete/i).click();
    cy.get('button').contains(/delete/i).click();
    cy.get('button').contains(/delete/i).click();
  })

  it('Should submit the task from after hitting enter key', () => {
    cy.get('input').type('The form is submited by hiting Enter key! {enter}')
  })

  it('Should change location after using nav links', () => {
    cy.get('nav').within(() => cy.contains(/history/i)).click();
    cy.location().should((location) => expect(location.pathname).to.eq('/history'))
  })

  it('Should save deleted tasks in history', () => {
   cy.get('p').should('contain', 'it works!')
   cy.get('p').should('contain', 'list is growing!')
   cy.get('p').should('contain', 'and growing!')
   cy.get('p').should('contain', 'Cypress is fun!')

  })
})