package org.example;

import org.openqa.selenium.By;

public class HomePage extends Utils{

    //Declaration of locators
    private By _buy_Energy = By.xpath("(//a[@class='btn btn-default'])[1]");


    public void verifyCurrentUrl(){
        //expected url
        String url = "https://ensekautomationcandidatetest.azurewebsites.net/";
        //verify url
        assertCurrentUrl(url);
    }

    public void click_Buy_Energy(){

        //Click on Buy Energy
        clickOnElement(_buy_Energy);
    }
}
