package org.example;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class SaleConfirmationPage extends Utils{

    //Declaration of locators
    private By _confirmationMessage = By.className("well");

    public void messageOfPurchaseAssert(String Purchase_message){

        //save actual purchase message in purchase message variable
        WebElement purchase_Confirmation = driver.findElement(_confirmationMessage);
        //get text from actual purchase message
        String Actual_Purchase_Message = purchase_Confirmation.getText();
        //compare error message is same as actual purchase message
        if (Purchase_message.equals(Actual_Purchase_Message)) {
            //print output
            System.out.println("Actual And Expected Message are same and it is : " + Actual_Purchase_Message);
        } else {

            //print actual purchase message
            System.out.println("Actual is :" + Actual_Purchase_Message);
            //print expected purchase message
            System.out.println("Expected is :" + Purchase_message);
        }

    }
}
