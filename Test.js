const {Builder, By, Key} = require('selenium-webdriver');


(async function TestFocusServices()
    {
    let driver = await new Builder().forBrowser('chrome').build();

    try {

    //open browser
    await driver.get('http://www.google.com');
    //find Focus Services
    await driver.findElement(By.name('q')).sendKeys('Focus Services', Key.RETURN);
    //go to focus services
    await driver.findElement(By.className('LC20lb')).click();

      // Verify if button Now Hiring exist
    var buttonExist = await driver.findElement(By.xpath('//*[@id="text-4"]/div/p/a/span')).then(function() {
        return true;
    }, function(err) {
        if (err) {
            console.log(err);
            return false;
            
        } 
    });
  
    if (buttonExist === true) {

        //click tab carrears 
        await driver.findElement(By.xpath('//*[@id="menu-item-6497"]/a/span[2]')).click();
        //filter by inbound
        await driver.findElement(By.xpath('//*[@id="search_keywords"]')).sendKeys('inbound', Key.RETURN);
        // click on second element
        await driver.findElement(By.xpath('//*[@id="317531"]/div[1]/h3')).click();
        //verify job description
        await driver.findElement(By.xpath('//*[@id="description"]/p[3]/span')).then(console.log('job description exists '));
        
    }
   


    }

    catch (e) {
        console.log(e);
    }

    finally {

    // await driver.quit();

    }

    })();

