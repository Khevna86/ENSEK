package org.example;

import org.openqa.selenium.By;

public class BuyEnergyPage extends Utils{

    //Declaration of locators
    private By _numberOfUnitsRequired = By.xpath("(//input[@name='energyType.AmountPurchased'])[1]");
    private By _buyButton = By.xpath("(//input[@name='Buy'])[1]");

    public void buyEnergy(String Number_of_Units_Required){

        //Type Number Of units required
        enterText(_numberOfUnitsRequired, Number_of_Units_Required);

        //Click on Buy
        clickOnElement(_buyButton);



    }
}
