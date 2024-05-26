class CookieNotificationPage {
  get acceptCookiesButton() { return $('//button[@class="glue-cookie-notification-bar__accept"]'); }

  async acceptCookies() {
    if (await this.acceptCookiesButton.isDisplayed()) {
      await this.acceptCookiesButton.click();
    }
  }
}

export default new CookieNotificationPage();
