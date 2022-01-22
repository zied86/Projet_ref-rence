package com.e2eTests.automatedTests.pim;

import com.e2eTests.automatedTests.qualification.QualificationsPageObject;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.io.IOException;

public class SearchPimStepDefinition {
    private SearchPimPageObject pim;

    public SearchPimStepDefinition() throws IOException {
        this.pim = new SearchPimPageObject();
    }


    @When("^Je clique sur le menu PIM$")
    public void jeCliqueSurLeMenuPIM() throws Throwable {
        pim.clickPim();
    }

    @When("^Je clique sur le bouton Employeelist$")
    public void jeCliqueSurLeBoutonEmployeelist() throws Throwable {
        pim.clickEmployeeList();
    }

    @When("^Je vérifier le titre de bloc recherche \"([^\"]*)\"$")
    public void jeVérifierLeTitreDeBlocRecherche(String name) throws Throwable {
        pim.employeeInformation(name);
    }

    @When("^Je vérifier l'existance des champs\"([^\"]*)\" et \"([^\"]*)\" et \"([^\"]*)\"et \"([^\"]*)\"et \"([^\"]*)\"et \"([^\"]*)\"et\"([^\"]*)\"$")
    public void jeVérifierLExistanceDesChampsEtEtEtEtEtEt(String employeename, String idPim, String employeeSatuts, String include, String supervisorName, String jobTitle, String subUnit) throws Throwable {
        pim.employeName(employeename);
        pim.employeeStatusPim(employeeSatuts);
        pim.idPim(idPim);
        pim.includePim(include);
        pim.supervisorNamePim(supervisorName);
        pim.jobTiltePIM(jobTitle);
        pim.subUnitPIM(subUnit);
    }

    @When("^Je recherche le l'employee \"([^\"]*)\"$")
    public void jeRechercheLeLEmployee(String name) throws Throwable {
     pim.fillEmployeeName(name);
    }

    @When("^Je clique sur le bouton recherche$")
    public void jeCliqueSurLeBoutonRecherche() throws Throwable {
        pim.clickSearchPim();

    }

    @When("^Je vérifier le resultat de recherche$")
    public void jeVérifierLeResultatDeRecherche() throws Throwable {


    }

    @Then("^Je clique sur le bouton reset$")
    public void jeCliqueSurLeBoutonReset() throws Throwable {

    }


}
