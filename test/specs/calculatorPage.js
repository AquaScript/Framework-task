class CalculatorPage {
  get addToEstimateButton() {
    return $('span.UywwFc-vQzf8d');
  }
  
  get computeEngineButton() {
    return $('div.d5NbRd-EScbFb-JIbuQc.PtwYlf h2.honxjf');
  }

  get computeEngineTitle() {
    return $('//*[@id="ow4"]/div/div/div/div/div/div/div[1]/div/div[1]/h1');
  }

  get instancesInput() {
    return $('input[jsname="YPqjbf"]');
  }

  get provisioningModelRegular() {
    return $('input[id="regular"]');
  }

  get machineFamilyDropdown() {
    return $('//*[@id="ow4"]/div/div/div/div/div/div/div[1]/div/div[2]/div[3]/div[11]/div/div/div[2]/div/div[1]/div[1]/div/div/div/div[1]/div');
  }

  get machineFamilyOption() {
    return $('li[data-value="general-purpose"]');
  }

  get seriesDropdown() {
    return $('//*[@id="ow4"]/div/div/div/div/div/div/div[1]/div/div[2]/div[3]/div[11]/div/div/div[2]/div/div[1]/div[2]/div/div/div/div[1]/div');
  }

  get seriesOption() {
    return $('//*[@id="ow4"]/div/div/div/div/div/div/div[1]/div/div[2]/div[3]/div[11]/div/div/div[2]/div/div[1]/div[2]/div/div/div/div[2]/ul/li[1]');
  }

  get machineTypeDropdown() {
    return $('//*[@id="ow4"]/div/div/div/div/div/div/div[1]/div/div[2]/div[3]/div[11]/div/div/div[2]/div/div[1]/div[3]/div/div/div/div[1]/div');
  }

  get machineTypeOption() {
    return $('//*[@id="ow4"]/div/div/div/div/div/div/div[1]/div/div[2]/div[3]/div[11]/div/div/div[2]/div/div[1]/div[3]/div/div/div/div[2]/ul/li[7]');
  }

  get addGpusButton() {
    return $('//*[@id="ow4"]/div/div/div/div/div/div/div[1]/div/div[2]/div[3]/div[21]/div/div/div[1]/div/div/span/div/button/div/span[1]');
  }

  get gpuTypeDropdown() {
    return $('//*[@id="ow4"]/div/div/div/div/div/div/div[1]/div/div[2]/div[3]/div[23]/div/div[1]/div/div/div/div[1]/div');
  }

  get gpuTypeOption() {
    return $('//*[@id="ow4"]/div/div/div/div/div/div/div[1]/div/div[2]/div[3]/div[23]/div/div[1]/div/div/div/div[2]/ul/li[4]');
  }

  get numberOfGpusDropdown() {
    return $('//*[@id="ow4"]/div/div/div/div/div/div/div[1]/div/div[2]/div[3]/div[24]/div/div[1]/div/div/div/div[1]/div');
  }

  get numberOfGpusOption() {
    return $('//*[@id="ow4"]/div/div/div/div/div/div/div[1]/div/div[2]/div[3]/div[24]/div/div[1]/div/div/div/div[2]/ul/li[1]');
  }

  get localSsdDropdown() {
    return $('//*[@id="ow4"]/div/div/div/div/div/div/div[1]/div/div[2]/div[3]/div[27]/div/div[1]/div/div/div/div[1]/div');
  }

  get localSsdOption() {
    return $('//*[@id="ow4"]/div/div/div/div/div/div/div[1]/div/div[2]/div[3]/div[27]/div/div[1]/div/div/div/div[2]/ul/li[3]');
  }

  get datacenterLocationDropdown() {
    return $('//*[@id="ow4"]/div/div/div/div/div/div/div[1]/div/div[2]/div[3]/div[29]/div/div[1]/div/div/div/div[1]/div');
  }

  get datacenterLocationOption() {
    return $('//*[@id="ow4"]/div/div/div/div/div/div/div[1]/div/div[2]/div[3]/div[29]/div/div[1]/div/div/div/div[2]/ul/li[7]');
  }

  get committedUsageOneYearButton() {
    return $('//*[@id="ow4"]/div/div/div/div/div/div/div[1]/div/div[2]/div[3]/div[31]/div/div/div[2]/div/div/div[2]/label');
  }

  get priceLabel() {
    return $('//*[@id="ow4"]/div/div/div/div/div/div/div[2]/div[1]/div/div[4]/div[1]/div[2]/label');
  }

  get openEstimateSummaryButton() {
    return $('#yDmH0d > div.bwApif-Sx9Kwc.bwApif-Sx9Kwc-OWXEXe-vOE8Lb.bwApif-Sx9Kwc-OWXEXe-di8rgd-bN97Pc-QFlW2.no1KDb.bwApif-Sx9Kwc-OWXEXe-FNFY6c > div.bwApif-wzTsW > div > div > div > div.v08BQe > a');
  }

  get costEstimateSummary() {
    return $('//*[@id="yDmH0d"]/c-wiz[1]/div/div/div/div/div[2]/div[2]/div[2]/div');
}



  async clickAddToEstimate() {
    await this.addToEstimateButton.click();
  }

  async clickComputeEngine() {
    await this.computeEngineButton.click();
  }

  async verifyComputeEngineTitle() {
    await expect(this.computeEngineTitle).toHaveText('Compute Engine');
  }

  async setInstancesValue(value) {
    await this.instancesInput.setValue(value);
  }

  
  async selectProvisioningModel() {
    await browser.execute(function() {
      const regularRadioButton = document.querySelector('input[id="regular"]');
      regularRadioButton.click();
    });
  }

  async verifyProvisioningModel() {
    await expect(this.provisioningModelRegular).toBeSelected();
  }

  async selectMachineFamily() {
    await this.machineFamilyDropdown.click();
    await this.machineFamilyOption.click();
  }

  async selectSeries() {
    await (await this.seriesDropdown).click();
    await (await this.seriesOption).click();
  }

  async selectMachineType() {
    await (await this.machineTypeDropdown).click();
    await (await this.machineTypeOption).click();
  }

  async clickAddGpus() {
    await (await this.addGpusButton).click();
    await browser.pause(2000);
  }

  async selectGpuType() {
    await (await this.gpuTypeDropdown).click();
    await (await this.gpuTypeOption).waitForDisplayed();
    await (await this.gpuTypeOption).click();
  }

  async selectNumberOfGpus() {
    await (await this.numberOfGpusDropdown).click();
    await (await this.numberOfGpusOption).click();
  }

  async selectLocalSsd() {
    await (await this.localSsdDropdown).click();
    await (await this.localSsdOption).click();
  }

  async selectDatacenterLocation() {
    await (await this.datacenterLocationDropdown).click();
    await (await this.datacenterLocationOption).click();
  }

  async selectCommittedUsageOneYear() {
    await (await this.committedUsageOneYearButton).click();
  }

  async getPriceLabelText() {
    return await (await this.priceLabel).getText();
  }
  
  async clickShareButton() {
    const shareButtonSelector = '#ow4 > div > div > div > div > div > div > div.nQSTsf.AZgcHf > div.C7J75c > div > div.KDVqKe > div.OCM48 > div:nth-child(2) > div > button > span.FOBRw-RLmnJb';
    await browser.execute((selector) => {
      document.querySelector(selector).click();
    }, shareButtonSelector);
  }

  async clickOpenEstimateSummaryButton() {
    const button = await this.openEstimateSummaryButton;
    await button.waitForExist({ timeout: 5000 });
    await button.waitForDisplayed({ timeout: 5000 });
    await browser.execute((element) => element.click(), button);
  }

  async getCostEstimateSummaryText() {
    return await (await this.costEstimateSummary).getText();
}


}

export default new CalculatorPage();
