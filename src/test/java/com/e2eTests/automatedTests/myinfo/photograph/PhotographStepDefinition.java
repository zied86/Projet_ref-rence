package com.e2eTests.automatedTests.myinfo.photograph;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.io.IOException;

public class PhotographStepDefinition {

    private PhotographPageObject profil;

    public PhotographStepDefinition() throws IOException {
        this.profil = new PhotographPageObject();
    }


    @When("^Je clique sur sur le menu MyInfo$")
    public void jeCliqueSurSurLeMenuMyInfo() throws Throwable {
        profil.myInfo();
    }

    @When("^Je clique sur changer photo$")
    public void jeCliqueSurChangerPhoto() throws Throwable {
        profil.photoProfil();
    }
    @When("^Je clique sur le bouton choisir un fichier \"([^\"]*)\"$$")
    public void jeCliqueSurLeBoutonChoisirUnFichier(String photo) throws Throwable {
       profil.choisirPhoto(photo);
    }


    @Then("^Je clique sur Upload$")
    public void jeCliqueSurUpload() throws Throwable {
       profil.choisirUpload();
       profil.deletePhoto();
    }



}
