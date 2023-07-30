describe('ng-sample-app', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary'));
  it('should render the component', () => {
    cy.get('nx-ng-workspace-root').should('exist');
  });
});
