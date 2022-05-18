describe('accessibility for the home page', () => {
  beforeEach(() => {
    cy.visit('/');
  })
      it('should pass accessibility', () => {
        cy.checkForDetectableAccessibilityIssues();
      });
});
