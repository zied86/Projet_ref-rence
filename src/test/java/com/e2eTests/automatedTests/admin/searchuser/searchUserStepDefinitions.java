package com.e2eTests.automatedTests.admin.searchuser;


import com.e2eTests.automatedTests.admin.searchuser.searchUserPageObject;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.io.IOException;

public class searchUserStepDefinitions {

    private searchUserPageObject admin;

    public searchUserStepDefinitions() throws IOException {
        this.admin = new searchUserPageObject();
    }


    @When("^Je saisi le userrname \"([^\"]*)\"$")
    public void jeSaisiUnUsername(String name) throws Throwable {
        admin.userNamesSearch(name);
    }

    /*@When("^Je selectionner userrole \"([^\"]*)\"$")
    public void je_selectionner_userrole(String value) throws Throwable {
        admin.selectDropDownListByValueSearch(searchUserPageObject.userRole, value);
    }*/

    @When("^Je selectionner userrole \"([^\"]*)\"$")
    public void jeSelectionnerUserrole(String value) throws Throwable {
        if(value != null) {
            admin.selectDropDownListByValueSearch(searchUserPageObject.userRole, value);
        }

    }

    @When("^Je saisi employee name \"([^\"]*)\"$")
    public void jeSaisiEmployeeName(String name) throws Throwable {
        admin.employeeNameSearch(name);
        admin.clickKyes();

    }

    @When("^Je seclectionner le status \"([^\"]*)\"$")
    public void jeSeclectionnerLeStatus(String value) throws Throwable {
        admin.selectDropDownListByValueStatus(searchUserPageObject.status, value);
    }

    @When("^Je clique sur le bouton search$")
    public void jeCliqueSurLeBoutonSearch() throws Throwable {
        admin.search();

    }

    @Then("^Resultat de recherche sera affiché$")
    public void resultatDeRechercheSeraAffiché() throws Throwable {

        admin.resultatSearch(searchUserPageObject.resultat);
        admin.reset();
    }


}
