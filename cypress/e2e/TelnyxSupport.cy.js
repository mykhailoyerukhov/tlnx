describe('Finds article and checks url and header', () => {
  it('Login', () => {
    
    cy.visit('https://support.telnyx.com/en/')
    // cy.visit('https://telnyx.com/')
    

    // cy.viewport(1280, 720)
    // cy.wait(1000)
    // cy.get('[id="radix-:R2l6jm:"]').click()
    // cy.wait(500)
    // cy.get('[id="2JP5fssvV1BRHANzkChEBz"]').invoke('attr', 'target', '_self').click()
    // cy.wait(1000)
    cy.get('[class^="peer"][placeholder^="Search"]').click().type('API {enter}')
    cy.wait(1000)
    cy.get('[class^="collection-link"]').eq(2).click()
    cy.wait(1000)
    cy.get('#h_2aec4b0b51').should('have.text', 'Calling All Telnyx API Enthusiasts: Share Your Tutorials for Rewards!')
    cy.url().should('eq', 'https://support.telnyx.com/en/articles/7892344-api-tutorials-share-reward')

    // Contact us form
    cy.get('[href="https://telnyx.com/contact-us"]').contains('a', '24/7 Support +1.888.980.9750').invoke('attr', 'target', '_self').click()
    cy.wait(5000)
    cy.get('[aria-labelledby="LblReason_for_Contact__c InstructReason_for_Contact__c"]').select('Support')
    cy.get('[id="FirstName"]').type('Jacob')
    cy.get('[id="LastName"]').type('Wazowski')
    cy.get('[id="Email"]').type('Fake@emails.com')
    cy.get('[id="Phone_Number_Extension__c"]').select('+380')
    cy.get('#Phone_Number_Base__c').type('930618565')
    cy.get('#Website').type('https://fake-website.com')
    cy.get('#How_did_you_hear_about_Telnyx_Open__c').type('It was an accident')
    cy.get('#mktoCheckbox_15545_0').click()
    cy.get('button.mktoButton')


  })
})