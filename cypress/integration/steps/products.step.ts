export function addToCard(item: string): void {
  var productName = item.toLowerCase().split(" ").join("-");
  cy.get(`button[name=add-to-cart-${productName}]`).click();
}

export function removeFromCart(item: string): void {
  var productName = item.toLowerCase().split(" ").join("-");
  cy.get(`button[name=remove-${productName}]`).click();
}

export const checkoutButton = "button[id=checkout]";
export const cartButton = ".shopping_cart_link";
