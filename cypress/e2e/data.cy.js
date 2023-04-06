describe('Write / Read Data to JSON / Text file', () => {
    it('should write data into JSON', () => {
        cy.writeFile('log.json', { name: 'Mike', age: 25})
        cy.visit('https://zero.webappsecurity.com/index.html')
    })
    it('should write data to the text file', () => {
        cy.writeFile('log.txt', 'hello world')
    })
    it('should write data to the text file', () => {
        cy.readFile('log.json').its('age').should('eq', 25)
    })
    it('should read and verify data from the text file', () => {
        cy.readFile('log.json').its('age').should('eq', 25)
    })
})