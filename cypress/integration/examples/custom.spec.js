describe('Costum Commands', () => {
    it('should login to applications using custom cypress command', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.log_in('username', 'password')
    })
})