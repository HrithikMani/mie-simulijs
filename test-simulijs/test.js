const puppeteer = require('puppeteer');

const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

// Constants
const BASE_URL = `file://${__dirname}`;
const CLICK_TEST_PATH = '/click-test.html';
const KEYPRESS_TEST_PATH = '/keypress-test.html';
const MOUSEENTER_TEST_PATH = '/mouseenter-test.html';
const FOCUS_TEST_PATH = '/focus-test.html';
const CHANGE_TEST_PATH = '/change-test.html';
const MOUSELEAVE_TEST_PATH = '/mouseleave-test.html';
const DELAY_TIME = 3000;

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  page.on('console', msg => console.log('PAGE LOG:', msg.text()));

  // Function to test click event
  const testClickEvent = async () => {
    await page.goto(`${BASE_URL}${CLICK_TEST_PATH}`);
    await delay(DELAY_TIME);

    // Test left click
    await page.evaluate(() => {
      const { simulateClick } = window.simulijs;
      simulateClick(document.getElementById('testButton'), { button: 'left', callback: () => console.log('Left click simulated!') });
    });
    await delay(DELAY_TIME);
    let clickResult = await page.$eval('#clickResult', el => el.textContent);
    console.log('Click Result:', clickResult);
    console.log('Left Click event test completed:', clickResult.includes('Left click'));

    // Test right click
    await page.evaluate(() => {
      const { simulateClick } = window.simulijs;
      simulateClick(document.getElementById('testButton'), { button: 'right', callback: () => console.log('Right click simulated!') });
    });
    await delay(DELAY_TIME);
    clickResult = await page.$eval('#clickResult', el => el.textContent);
    console.log('Click Result:', clickResult);
    console.log('Right Click event test completed:', clickResult.includes('Right click'));

    // Test middle click
    await page.evaluate(() => {
      const { simulateClick } = window.simulijs;
      simulateClick(document.getElementById('testButton'), { button: 'middle', callback: () => console.log('Middle click simulated!') });
    });
  };

  // Function to test keypress event
  const testKeypressEvent = async () => {
    await page.goto(`${BASE_URL}${KEYPRESS_TEST_PATH}`);
    await delay(DELAY_TIME);
    const inputValue = await page.$eval('#testInput', el => el.value);
    console.log('Input Value:', inputValue);
    console.log('Keypress event test completed:',  inputValue === 'abcd');
  };

  // Function to test mouse enter event
  const testMouseEnterEvent = async () => {
    await page.goto(`${BASE_URL}${MOUSEENTER_TEST_PATH}`);
    await delay(DELAY_TIME);
    const mouseenterResult = await page.$eval('#mouseenterResult', el => el.textContent);
    console.log('Mouse Enter Result:', mouseenterResult);
    console.log('Mouse enter event test completed:', mouseenterResult === 'Mouse entered the div!');
  };

  // Function to test focus event
  const testFocusEvent = async () => {
    await page.goto(`${BASE_URL}${FOCUS_TEST_PATH}`);
    await delay(DELAY_TIME);
    const focusResult = await page.$eval('#focusResult', el => el.textContent);
    console.log('Focus Result:', focusResult);
    console.log('Focus event test completed:', focusResult === 'Input is focused!');
  };

  // Function to test change event
  const testChangeEvent = async () => {
    await page.goto(`${BASE_URL}${CHANGE_TEST_PATH}`);
    await delay(DELAY_TIME);
    const changeResult = await page.$eval('#changeResult', el => el.textContent);
    console.log('Change Result:', changeResult);
    console.log('Change event test completed:', changeResult === 'Input value changed!');
  };

  // Function to test mouse leave event
  const testMouseLeaveEvent = async () => {
    await page.goto(`${BASE_URL}${MOUSELEAVE_TEST_PATH}`);
    await delay(DELAY_TIME);
    await page.hover('#testDiv'); // Hover first to trigger mouseenter
    await page.mouse.move(0, 0);  // Move the mouse away to trigger mouseleave
    const mouseleaveResult = await page.$eval('#mouseleaveResult', el => el.textContent);
    console.log('Mouse Leave Result:', mouseleaveResult);
    console.log('Mouse leave event test completed:', mouseleaveResult === 'Mouse left the div!');
  };

  // Run tests
  await testClickEvent();
  await testKeypressEvent();
  await testMouseEnterEvent();
  await testFocusEvent();
  await testChangeEvent();
  await testMouseLeaveEvent();

  await browser.close();
})();
