const {Builder, By, Key} = require('selenium-webdriver');


(async function TestFocusServices()
    {
    let driver = await new Builder().forBrowser('chrome').build();

    try {
    // open chrome browser
    await driver.get('http://www.google.com');

    //Search "Focus Services"
    await driver.findElement(By.name('q')).sendKeys('Focus Services', Key.RETURN);

    // click on Focus Services – Beyond Expectations  hyperlink
    await driver.findElement(By.className('LC20lb')).click();

    // verify if button 'now hiring' exist
    var buttonExist = await driver.findElement(By.xpath('//*[@id="text-4"]/div/p/a/span')).then(function() {
        return true;
    }, function(err) {
        if (err) {
            console.log(err);
            return false;
            
        }
    });
  
    //if button exist keep navigating in FocusServices
    if (buttonExist === true) {
        //click on tab carrers
        await driver.findElement(By.xpath('//*[@id="menu-item-6497"]/a/span[2]')).click();
        //filter by inbound
        await driver.findElement(By.xpath('//*[@id="search_keywords"]')).sendKeys('inbound', Key.RETURN);
        // going to second result 
        await driver.findElement(By.xpath('//*[@id="317531"]/div[1]/h3')).click();
        // verify that job description exist
        await driver.findElement(By.xpath('//*[@id="description"]/p[3]/span')).then(console.log('Element "jobs description" exists'));
        
    }

    }
    catch (e) {
        console.log(e);
    }

    finally {

    }

    })();

