import { Builder, By, Key } from "selenium-webdriver";
import * as chrome from "selenium-webdriver/chrome.js";

async function testRunner() {
  const driver = await new Builder().forBrowser("chrome").setChromeOptions(new chrome.Options()).build();

  await driver.manage().window().maximize();
  await driver.get("https://demo.evershop.io/");
  await driver.findElement(By.xpath("//a[@class='search__icon']")).click();



await driver.sleep(5000);
  await driver.quit();
}

testRunner();