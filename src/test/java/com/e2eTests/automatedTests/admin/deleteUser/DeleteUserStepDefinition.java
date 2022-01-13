package com.e2eTests.automatedTests.admin.deleteUser;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.io.IOException;

public class DeleteUserStepDefinition {

    private DeleteUserPageObject admin;

    public DeleteUserStepDefinition() throws IOException {
        this.admin = new DeleteUserPageObject();
    }

    @When("^Je selectionner le checkbox$")
    public void jeSelectionnerLeCheckbox() throws Throwable {
        admin.checkBox();
    }

    @Then("^Je clique sur le bouton delete$")
    public void jeCliqueSurLeBoutonDelete() throws Throwable {
        admin.deleteUser();

    }

    @Then("^Je confirme la suppression$")
    public void jeConfirmeLaSuppression() throws Throwable {
        admin.confirmeDelete();

    }
}
