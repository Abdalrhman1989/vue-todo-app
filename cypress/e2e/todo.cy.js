describe('Todo App', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should allow a user to add a todo', () => {
      cy.get('input[placeholder="Add a new task"]').type('New Todo{enter}');
      cy.contains('li', 'New Todo');
    });
  
    it('should allow a user to remove a todo', () => {
      cy.get('input[placeholder="Add a new task"]').type('New Todo{enter}');
      cy.contains('li', 'New Todo').find('button').click();
      cy.contains('li', 'New Todo').should('not.exist');
    });
  });
  