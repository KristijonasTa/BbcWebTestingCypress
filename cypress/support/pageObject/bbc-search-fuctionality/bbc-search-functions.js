import { searchLocators } from "./bbc-search-locators";

export default class SearchFunctions {
  static searchValue(value) {
    cy.get(searchLocators.SEARCH_HEADER_SVG).click();
    cy.wait(2000)
    cy.get(searchLocators.SEARCH_INPUT_FIELD)
      .type(value)
      .wait(2000)
      .should("have.value", value);
    cy.get(searchLocators.SEARCH_BUTTON).click();
  }
  static replaceSpacesForUrl(string) {
    return string.split(" ").join("%20");
  }
}
