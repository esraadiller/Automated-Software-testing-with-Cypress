describe('Xpaths with cypress example', () =>{
    beforeEach(function(){
        cy.visit("http://zero.webappsecurity.com/index.html")
    })

    it('should click on element using xpath' , () => {
        cy.xpath('//button[@id="signin_button"]').should('be.visible')
        cy.xpath('//button[@id="signin_button"]').click()
    })
    it('should display login form' , () => {
        cy.xpath('//form').should('have.length',1)
        
    })
})