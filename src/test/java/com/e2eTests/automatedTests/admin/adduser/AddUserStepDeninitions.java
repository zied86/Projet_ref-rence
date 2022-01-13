package com.e2eTests.automatedTests.admin.adduser;

import com.e2eTests.automatedTests.admin.deleteUser.DeleteUserPageObject;
import com.e2eTests.automatedTests.admin.searchuser.searchUserPageObject;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.io.IOException;

public class AddUserStepDeninitions {

    private AddUserPageObject admin;
    private DeleteUserPageObject admindelete;
    private searchUserPageObject searchuser;

    public AddUserStepDeninitions() throws IOException {
        this.admin = new AddUserPageObject();
        this.searchuser = new searchUserPageObject();
    }

    @When("^Je clique sur le menu admin$")
    public void jeCliqueSurLeMenuAdmin() throws Throwable {
        admin.clickadmin();
    }

    @When("^Je clique sur le bouton add$")
    public void jeCliqueSurLeBoutonAdd() throws Throwable {
        admin.clickbtnadd();
    }

    @When("^Je selectionner le user role\"([^\"]*)\"$")
    public void jeSelectionnerLeUserRole(String value) throws Throwable {
        admin.selectDropDownListByValue(AddUserPageObject.clickUserType, value);
    }

    @When("^Je selectionner employee name$")
    public void jeSelectionnerEmployeeName() throws Throwable {
        admin.clikemployeeName();
    }

    @When("^Je saisie employee name \"([^\"]*)\"$")
    public void jeSaisieEmployeeName(String name) throws Throwable {
        admin.clikemployeeNameS(name);
        admin.clickEmpName();
    }

    @When("^Je saisie  username \"([^\"]*)\"$")
    public void jeSaisieUsername(String name1) throws Throwable {
        admin.clickUserName(name1);

    }

    @When("^Je selectionner le status \"([^\"]*)\"$")
    public void jeSelectionnerLeStatus(String value) throws Throwable {
        admin.selectDropDownListByValue1(AddUserPageObject.status, value);

    }

    @When("^Je saisie le Password \"([^\"]*)\"$")
    public void jeSaisieLePassword(String name) throws Throwable {
        admin.passWord(name);

    }

    @When("^Je confirme le passwrod \"([^\"]*)\"$")
    public void jeConfirmeLePasswrod(String name) throws Throwable {
        admin.confPassWord(name);
    }

    @Then("^Je clique sur le bouton save$")
    public void jeCliqueSurLeBoutonSave() throws Throwable {
        admin.save();
    }

    @Then("^Je vérifier l'ajout de user\"([^\"]*)\"$")
    public void jeVérifierLAjoutDeUser(String name) throws Throwable {

        searchuser.userNamesSearch(name);
        searchuser.search();

        admindelete.checkBox();

        admindelete.deleteUser();
        admindelete.confirmeDelete();

    }
}

