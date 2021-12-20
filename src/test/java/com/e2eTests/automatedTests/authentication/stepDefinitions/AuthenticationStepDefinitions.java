package com.e2eTests.automatedTests.authentication.stepDefinitions;
import com.e2eTests.automatedTests.authentication.pageObjects.AuthenticationPage;

import com.e2eTests.automatedTests.utilis.CommonMethods;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

import java.io.IOException;

import static com.e2eTests.automatedTests.utilis.Setup.driver;


public class AuthenticationStepDefinitions {
	
    private AuthenticationPage authenticationPage;

    public AuthenticationStepDefinitions() throws IOException {

        this.authenticationPage = new AuthenticationPage();
    }

    @When("^Je saisie le Username \"([^\"]*)\"$")
    public void jeSaisieLeUsername(String name) throws Throwable {
        authenticationPage.fillUserName(name);
    }

    @When("^Je saisie le mot de passe \"([^\"]*)\"$")
    public void jeSaisieLeMotDePasse(String password) throws Throwable {
        authenticationPage.fillPassword(password);
    }

    @When("^Je clique sur le bouton login$")
    public void jeCliqueSurLeBoutonLogin() throws Throwable {
        authenticationPage.clickBtnLogin();
    }

    @Then("^Je me redirige vers la pahe Home \\\"([^\\\"]*)\\\"$")
    public void jeMeRedirigeVersLaPaheHome(String text) throws Throwable {
        String messageToWelcome = AuthenticationPage.message.getText();
        Assert.assertTrue(messageToWelcome.contains(text));
    }

    /*
     * Login with senario outline
     */

    @When("^Je saisie le username \"([^\"]*)\"$")
    public void jeSaisieUsername(String name) throws Throwable {
        authenticationPage.fillUserName(name);
    }

    @When("^Je saisie le password \"([^\"]*)\"$")
    public void jeSaisiePassword(String password) throws Throwable {
        authenticationPage.fillPassword(password);
    }
}

