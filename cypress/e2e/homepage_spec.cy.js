describe('empty spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {
      statusCode: 201,
      body: [ {
        date: "12/29",
        id: 1,
        name: "Christie",
        number: 12,
        time: "7:00"
      }
      ]
    })

  })

  it('As a user I should see a title Turing Cafe Reservations ', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.app-title').contains('Turing Cafe Reservations')
  })
  it(`As a user, i should be able to fill out name, date, time and number of people and create a reservation`, () => {
    cy.visit('http://localhost:3000/')
    .get('input[type="text"]').type('Hunter')
    .get('[type="date(mm/dd)"]').type('02/22')
    .get('[type="time"]')
    .get('[type="number"]').type(12)
    .get('form > button').click()
  } )

it('As a user, I should see a card with reservation details', () => {
  cy.visit('http://localhost:3000/')
  .get('.card')
  .get('.card > :nth-child(1)').contains('Christie')
  .get('.card > :nth-child(2)').contains('12/29')
  .get('.card > :nth-child(3)').contains('7:00')
  .get('.card > :nth-child(4)').contains('12')
  .get('.card > button').contains('Cancel')
})





})