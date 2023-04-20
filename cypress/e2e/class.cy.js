class BasePage {
    static loadHomePage() {
        cy.visit('https://devexpress.github.io/testcafe/example/')
    }

    static wait(number) {
        cy.wait(number)
    }
}

class HomePage extends BasePage {
    static scrollToBottom() {
        cy.get('#submit-button').scrollIntoView()
    }

    static scrToTop() {
        cy.get('header').scrollIntoView()
    }
}

describe('Abstraction with Classes' , () => {
    before(function() {
            //run before all tests inside describe
            //setup test data or test context
            //send or reset the database
            HomePage.loadHomePage()
    })

    after(function(){
        //runs aftter all tests inside describe block are done
        // test clean up
        //clean cookies or localStorage
    })
    
    beforeEach(function(){
        //runs before each it block i the describe
    })

    afterEach(function(){
        // runs after each it block in the describe
    })

    it('should scroll down and up on the page', () => {
    
        HomePage.loadHomePage()
        HomePage.scrollToBottom()
        HomePage.wait(5000)
        HomePage.scrToTop()
        HomePage.wait(3000)





        // cy.wait(5000)
        // cy.get('#submit-button').scrollIntoView()
        // cy.wait(5000)
        // cy.get('header').scrollIntoView()
    })
})