package com.e2eTests.automatedTests.buzz.stepDefinitions;


import com.e2eTests.automatedTests.buzz.pageObjects.BuzzPageObject;
import org.junit.Assert;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.io.IOException;

public class BuzzStepDefinition {
    private final BuzzPageObject buzzPage;

    public BuzzStepDefinition() throws IOException {


        this.buzzPage = new BuzzPageObject();
    }


    @When("^Je clique sur le bouton buzz$")
    public void jeCliqueSurLeBoutonBuzz() throws Throwable {

        buzzPage.clickBuzz();
    }

    @When("^Je saisie le statut \"([^\"]*)\"$")
    public void jeSaisieLeStatut(String status) throws Throwable {
        buzzPage.writeStatus(status);
    }

    @When("^Je clique sur le bouton post$")
    public void jeCliqueSurLeBoutonPost() throws Throwable {
        buzzPage.clickBtnPost();
    }

    @Then("^Le statut sera affiché \"([^\"]*)\"$")
    public void leStatutSeraAffiché(String status) throws Throwable {
        String StatusInsered = BuzzPageObject.status.getText();
        Assert.assertTrue(StatusInsered.contains(status));
    }


}