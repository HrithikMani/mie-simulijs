const puppeteer = require('puppeteer');

const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

// Constants
const BASE_URL = `file://${__dirname}`;
const CLICK_TEST_PATH = '/click-test.html';
const KEYPRESS_TEST_PATH = '/keypress-test.html';
const MOUSEENTER_TEST_PATH = '/mouseenter-test.html';
const DELAY_TIME = 3000;

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  page.on('console', msg => console.log('PAGE LOG:', msg.text()));

  // Function to test click event
  const testClickEvent = async () => {
    await page.goto(`${BASE_URL}${CLICK_TEST_PATH}`);
    await delay(DELAY_TIME);
    const clickResult = await page.$eval('#clickResult', el => el.textContent);
    console.log('Click Result:', clickResult);
    console.log('Click event test completed:', clickResult === 'Button was clicked!');
  };

  // Function to test keypress event
  const testKeypressEvent = async () => {
    await page.goto(`${BASE_URL}${KEYPRESS_TEST_PATH}`);
    await delay(DELAY_TIME);
    const keypressResult = await page.$eval('#keypressResult', el => el.textContent);
    const inputValue = await page.$eval('#testInput', el => el.value);
    console.log('Keypress Result:', keypressResult);
    console.log('Input Value:', inputValue);
    console.log('Keypress event test completed:', keypressResult === 'Key "abcd" was pressed!' && inputValue === 'abcd');
  };

  // Function to test mouse enter event
  const testMouseEnterEvent = async () => {
    await page.goto(`${BASE_URL}${MOUSEENTER_TEST_PATH}`);
    await delay(DELAY_TIME);
    const mouseenterResult = await page.$eval('#mouseenterResult', el => el.textContent);
    console.log('Mouse Enter Result:', mouseenterResult);
    console.log('Mouse enter event test completed:', mouseenterResult === 'Mouse entered the div!');
  };

  // Run tests
  await testClickEvent();
  await testKeypressEvent();
  await testMouseEnterEvent();

  await browser.close();
})();
