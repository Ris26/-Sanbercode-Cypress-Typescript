import * as loginPages from "../pages/login.pages";
import * as productsObject from "../pages-object/products.object"
import { hopePageTitle } from "../pages-object/products.object";

const hostUrl = "https://www.saucedemo.com/";
const username = "standard_user";
const password = "secret_sauce";

export function login(): void {
  cy.visit(hostUrl);
  cy.get(loginPages.usernameInput).type(username);
  cy.get(loginPages.passwordInput).type(password);
  cy.get(loginPages.logInButton).click();

  cy.wait(1000);
  cy.get(productsObject.productTitle).should("contain", hopePageTitle);
}
