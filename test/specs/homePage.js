class HomePage {
  get searchIcon() { return $('/html/body/c-wiz[2]/header/div[2]/div[1]/div/div[2]/div[2]/div[1]/form/div'); }
  get searchInput() { return $('/html/body/c-wiz[2]/header/div[2]/div[1]/div/div[2]/div[2]/div[1]/form/div/input'); }

  async open() {
    await browser.url('https://cloud.google.com/');
  }

  async search(query) {
    await this.searchIcon.click();
    await this.searchInput.setValue(query);
    await browser.keys('Enter');
  }
}

export default new HomePage();