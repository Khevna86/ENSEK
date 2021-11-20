package org.example;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyStepDefs {

    //creating object of class
    HomePage homePage = new HomePage();
    BuyEnergyPage buyEnergyPage = new BuyEnergyPage();
    SaleConfirmationPage saleConfirmationPage = new SaleConfirmationPage();

    @Given("^User on the homepage$")
    public void user_on_the_homepage() {
        homePage.verifyCurrentUrl();
    }

    @When("^User click on Buy energy button$")
    public void user_click_on_Buy_energy_button() {
        homePage.click_Buy_Energy();
    }



    @And("^Type \"([^\"]*)\" and Click on Buy$")
    public void typeAndClickOnBuy(String Number_of_Units_Required) {
        buyEnergyPage.buyEnergy(Number_of_Units_Required);

    }


    @Then("^User should be able to see the \"([^\"]*)\"$")
    public void user_should_be_able_to_see_the(String Purchase_message){
        saleConfirmationPage.messageOfPurchaseAssert(Purchase_message);
    }


    }

