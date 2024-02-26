describe("Register form", () => {
  beforeEach(() => {
    cy.visit("/register-form");
  });

  it("allows the user to fill in the form and submit it.", () => {
    cy.get("#username").type("testuser");
    cy.get("#email").type("test@example.com");
    cy.get("#password").type("P@ssw0rd");
    cy.get("#confirm").type("P@ssw0rd");
    cy.get("button").click();

    cy.contains("span", "Send success").should("be.visible");
  });
  it("do not allow to submit form if at least one field is not valid", () => {
    cy.get("#username").type("testuser");
    cy.get("#email").type("notEmail");
    cy.get("#password").type("P@ssw0rd");
    cy.get("#confirm").type("P@ssw0rd");

    cy.get("button").should("be.disabled");
  });

  it("displays error messages when invalid name is entered", () => {
    cy.get("#username").type("12").blur();

    cy.contains("p", "Required field").should("be.visible");
  });
  it("displays error messages when invalid email is entered", () => {
    cy.get("#email").type("notEmail").blur();

    cy.contains("p", "A valid email address is required").should("be.visible");
  });
  it("displays error messages when invalid password is entered", () => {
    cy.get("#password").type("testpassword").blur();

    cy.contains(
      "p",
      "A valid password requires 8 alphanumeric characters"
    ).should("be.visible");
  });
  it("displays error messages when the confirmed password is different from the entered password", () => {
    cy.get("#password").type("P@ssw0rd").blur();
    cy.get("#confirm").type("P@ssw0rddddd").blur();

    cy.contains("p", "The value entered does not match the passwor:").should(
      "be.visible"
    );
  });
});
