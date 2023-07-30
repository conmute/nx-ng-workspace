describe('ng-sample-app', () => {
  beforeEach(() => cy.visit('/iframe.html?id=nxwelcomecomponent--primary'));
  it('should render the component', () => {
    cy.get('nx-ng-workspace-nx-welcome').should('exist');
  });
});
