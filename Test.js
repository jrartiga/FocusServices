const {Builder, By, Key} = require('selenium-webdriver');


(async function TestFocusServices()
    {
    let driver = await new Builder().forBrowser('chrome').build();

    try {

    await driver.get('http://www.google.com');

    await driver.findElement(By.name('q')).sendKeys('Focus Services', Key.RETURN);

    await driver.findElement(By.className('LC20lb')).click();

      // Verify if button Now Hiring exist


    var existed = await driver.findElement(By.xpath('//*[@id="text-4"]/div/p/a/span')).then(function() {
        return true;//it existed
    }, function(err) {
        if (err instanceof webdriver.error.NoSuchElementError) {
            console.log(err);
            return false;//it was not found
            
        } else {
            webdriver.promise.rejected(err);
        }
    });
  
    if (existed = true) {
        await driver.findElement(By.xpath('//*[@id="menu-item-6497"]/a/span[2]')).click();

        await driver.findElement(By.xpath('//*[@id="search_keywords"]')).sendKeys('inbound', Key.RETURN);

        await driver.findElement(By.xpath('//*[@id="317531"]/div[1]/h3')).click();

      await driver.findElement(By.xpath('//*[@id="description"]/p[3]/span')).then(console.log('Element exists'));
        
    }
    //else {
    //   console.log('Element not founded');
   // }
  
  
  
    // Keep working
    //    await driver.findElement(By.xpath('//*[@id="search_keywords"]')).sendKeys('inbound');

    //verify if element exist


    }

    catch (e) {
        console.log(e);
    }

    finally {

    // await driver.quit();

    }

    })();

