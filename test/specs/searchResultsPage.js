class SearchResultsPage {
  get calculatorLink() {
    return $('a.gs-title[href*="products/calculator"]');
  }

  async navigateToCalculator() {
    await this.calculatorLink.waitForDisplayed({ timeout: 10000 });
    await this.calculatorLink.click();

    await expect(browser).toHaveUrlContaining('https://cloud.google.com/products/calculator');
  }
}

export default new SearchResultsPage();