const {  chromium } = require('playwright');
// initialize chromium browser
const browser = await chromium.launch({headless:false});
// create new context
 const context= await browser.newContext();

 //page1 functions
 ("page1 functions",async () => {
  try {
  // create new page
  const page1 = await context.newPage();
  //navigate to the given url
  await page1.goto('https://marisan-portal.akumina.dev/');
  
  //go to the log in id
  await page1.locator('#i0116').fill('MarisanTest01@akuminadev.onmicrosoft.com');
  await page1.locator('#idSIButton9').click();

  //go to the log in password
  await page1.locator('#i0118').fill('Fawa19441');
  await page.locator('#idSIButton9').click();
  await page1.locator('#idBtn_Back').click();

  //create a new path save the cookes into json file
  await context.storageState({ path: 'new1.json' });

  //close page1
  await page1.close();
  } catch (error) {
    await browser.close();
  }
})();

//page 2 functions
("page2 functions",async () => {
  try {
  //get already saved cookies for login authentication  
  await browser.newContext({storageState: 'new1.json'} );
  //create page2 new context
  const page2 = await context.newPage();
  //navigate to the page2 url
  await page2.goto('https://marisan-portal.akumina.dev/');
  await page2.close();
} catch (error) {
  await browser.close();
}

})();