const puppeteer = require('puppeteer');

const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  page.on('console', msg => console.log('PAGE LOG:', msg.text()));

  // Test Click Event
  await page.goto(`file://${__dirname}/click-test.html`);
  await delay(3000); // Wait for the event to be logged
  const clickResult = await page.$eval('#clickResult', el => el.textContent);
  console.log('Click Result:', clickResult);
  console.log('Click event test completed:', clickResult === 'Button was clicked!');

  // Test Keypress Event
  await page.goto(`file://${__dirname}/keypress-test.html`);
  await delay(3000); // Wait for the event to be logged
  const keypressResult = await page.$eval('#keypressResult', el => el.textContent);
  const inputValue = await page.$eval('#testInput', el => el.value);
  console.log('Keypress Result:', keypressResult);
  console.log('Input Value:', inputValue);
  console.log('Keypress event test completed:', keypressResult === 'Key "abcd" was pressed!' && inputValue === 'abcd');

  await browser.close();
})();
