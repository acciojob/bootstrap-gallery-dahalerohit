 function openModal(imageSrc) {
            document.getElementById('modalImage').src = imageSrc;
            var myModal = new bootstrap.Modal(document.getElementById('imageModal'));
            myModal.show();
        }

() => {
  cy.get('h2').should('have.text', 'Cards Gallery');
  cy.get('.container .row').should('have.length', 1);
}

() => {
  const tags = ['img', 'h6', 'p'];
  tags.forEach(tag => {
    cy.get(tag).should('have.length', 6); // expect exactly 6 of each
  });
}

cy.get('.card img').should('have.length', 6);
cy.get('.card h6').should('have.length', 6);
cy.get('.card p').should('have.length', 6);


cy.get('.card').should('have.length.at.least', 6).within(() => {
  cy.get('.card-body').should('exist');
});
cy.get('.lightbox').should('have.length.at.least', 6);


