import { alertEror, alertText, checkoutOverview, checkoutSucces, overviewText, succesText } from "../pages-object/checkout.object";
import * as productObject from "../pages-object/products.object";
import { continueButton, finishButton, firstnameInput, lastnameInput, zipInput } from "../pages/checkout.pages";
import { login } from "../steps/login.steps";
import { addToCard, cartButton, checkoutButton } from "../steps/products.step";

const firstname = "standard_user";
const lastname = "secret_sauce";
const zip = "101010";

beforeEach("Log in", () => {
  login();
  cy.wait(2000);
});

beforeEach("Add single product to card", () => {
  addToCard("Sauce Labs Backpack");
  cy.get(productObject.cartValue).should("contain", 1);
  cy.get(cartButton).click();
  cy.get(checkoutButton).click();
  cy.wait(1000);
});

describe("Checkout page validation tests", () => {
  it("all customer information is mandatory", () => {
    cy.get(firstnameInput).type(firstname).clear();
    cy.get(lastnameInput).type(lastname).clear();
    cy.get(zipInput).type(zip).clear();
    cy.get(continueButton).click();

    // Alert not input information
    cy.get(alertEror).contains(alertText);
  });

  it("the items in the cart should be shown in the overview", () => {
    cy.get(firstnameInput).type(firstname);
    cy.get(lastnameInput).type(lastname);
    cy.get(zipInput).type(zip);
    cy.get(continueButton).click();

    //validation product checkout
    cy.get(checkoutOverview).contains(overviewText);
  });

  it("the items in the cart should be shown in the overview", () => {
    cy.get(firstnameInput).type(firstname);
    cy.get(lastnameInput).type(lastname);
    cy.get(zipInput).type(zip);
    cy.get(continueButton).click();
    cy.get(finishButton).click();

    //validation product checkout succes
    cy.get(checkoutSucces).contains(succesText);
  });
});
