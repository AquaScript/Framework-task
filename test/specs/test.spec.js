import HomePage from './homePage.js';
import SearchResultsPage from './searchResultsPage.js';
import CalculatorPage from './calculatorPage.js';
import cookieNotificationPage from './cookieNotificationPage.js';

describe('Webdriver 03 test', () => {
  before(async () => {
    await HomePage.open();
    await cookieNotificationPage.acceptCookies();
  });

  it('Navigate to calculator', async () => {
    await HomePage.search('Google Cloud Platform Pricing Calculator');
    await SearchResultsPage.navigateToCalculator();
  });

  it('Click the Add to Estimate button', async () => {
    await CalculatorPage.clickAddToEstimate();
  });

  it('Click the Compute Engine button', async () => {
    await CalculatorPage.clickComputeEngine();
  });

  it('Verify Compute Engine title', async () => {
    await CalculatorPage.verifyComputeEngineTitle();
  });

  it('Set instances value', async () => {
    await CalculatorPage.setInstancesValue(4);
  });

  it('Select and verify provisioning model', async () => {
    await CalculatorPage.selectProvisioningModel();
    await CalculatorPage.verifyProvisioningModel();
  });

  it('Select machine family', async () => {
    await CalculatorPage.selectMachineFamily();
  
  });

  it('Select series', async () => {
    await CalculatorPage.selectSeries();
  });

  it('Select machine type', async () => {
    await CalculatorPage.selectMachineType();
  });
  
  it('Click Add GPUs button', async () => {
    await CalculatorPage.clickAddGpus();
  });

  it('Select GPU type', async () => {
    await CalculatorPage.selectGpuType();
  });

  it('Select number of GPUs', async () => {
    await CalculatorPage.selectNumberOfGpus();
  });

  it('Select Local SSD: 2x375 Gb', async () => {
    await CalculatorPage.selectLocalSsd();
  });

  it('Select Datacenter location: Netherlands', async () => {
    await CalculatorPage.selectDatacenterLocation();
  });

  it('Select Committed usage: 1 Year', async () => {
    await CalculatorPage.selectCommittedUsageOneYear();
  });

  it('Check that the price label contains $2,133.59', async () => {
    const expectedText = '$2,133.59';
    const actualText = await CalculatorPage.getPriceLabelText();
    expect(actualText).toContain(expectedText);
  });

  it('Click the Share button', async () => {
    await CalculatorPage.clickShareButton();
  });

  it('Click the Open estimate summary button', async () => {
    await CalculatorPage.clickOpenEstimateSummaryButton();
  });

  it('Verify that the Cost Estimate Summary matches $2,133.59', async () => {
    const expectedCost = '$2,133.59';
    const actualCost = await CalculatorPage.getCostEstimateSummaryText();
    expect(actualCost).toEqual(expectedCost);
  });

});
