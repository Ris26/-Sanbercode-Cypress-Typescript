import * as checkoutPages from "../pages/checkout.pages";
import * as productsObject from "../pages-object/products.object";
import { hopePageTitle } from "../pages-object/products.object";

const firstname = "standard_user";
const lastname = "secret_sauce";
const zip = "101010";

export function checkout(): void {
    cy.get(checkoutPages.firstnameInput).type(firstname);
    cy.get(checkoutPages.lastnameInput).type(lastname);
    cy.get(checkoutPages.zipInput).type(zip);
    cy.get(checkoutPages.continueButton).click();

     cy.wait(1000);
}
