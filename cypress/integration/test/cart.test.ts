/// <reference types="cypress" />

import * as productObject from "../pages-object/products.object";
import { login } from "../steps/login.steps";
import { addToCard, removeFromCart } from "../steps/products.step";

describe("Products page validation tests", () => {
  beforeEach("Log in", () => {
    login();
    cy.wait(2000);
  });

  it("Add single product to card", () => {
    addToCard("Sauce Labs Backpack");
    cy.get(productObject.cartValue).should("contain", 1);
  });

  it("Add multiple product to card", () => {
    addToCard("Sauce Labs Backpack");
    addToCard("Sauce Labs Bike Light");
    addToCard("Sauce Labs Bolt T-Shirt");
    cy.get(productObject.cartValue).should("contain", 3);
  });

  it("Add and remove product to card", () => {
    addToCard("Sauce Labs Backpack");
    addToCard("Sauce Labs Bike Light");
    cy.get(productObject.cartValue).should("contain", 2);
    removeFromCart("Sauce Labs Backpack");
    cy.get(productObject.cartValue).should("contain", 1);
  });
});
