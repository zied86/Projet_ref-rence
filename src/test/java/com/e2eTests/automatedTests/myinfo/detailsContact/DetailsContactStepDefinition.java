package com.e2eTests.automatedTests.myinfo.detailsContact;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.io.IOException;

public class DetailsContactStepDefinition {

    private DetailsContactPageObject contact;

    public DetailsContactStepDefinition() throws IOException {
        this.contact = new DetailsContactPageObject();
    }


    @When("^Je clique sur contact details$")
    public void jeCliqueSurContactDetails() throws Throwable {
        contact.contactDetails();

    }


    @When("^je clique sur le bouton Edit$")
    public void jeCliqueSurLeBoutonEdit() throws Throwable {
        contact.editContactDetails();
    }

    @When("^je saisie Adresse street1 \"([^\"]*)\"$")
    public void jeSaisieAdresseStreet(String name) throws Throwable {
        contact.addStreet1(name);
    }

    @When("^je saisie Address Street2 \"([^\"]*)\"$")
    public void jeSaisieAddressStreet(String name) throws Throwable {
        contact.addStreet2(name);
    }

    @When("^je saisie city \"([^\"]*)\"$")
    public void jeSaisieCity(String adresse) throws Throwable {
        contact.cityContactDetails(adresse);
    }

    @When("^Je saisie stat/province \"([^\"]*)\"$")
    public void jeSaisieStatProvince(String province) throws Throwable {
        contact.contactProvince(province);
    }

    @When("^Je saisie Postal code \"([^\"]*)\"$")
    public void jeSaisiePostalCode(String code) throws Throwable {
        contact.zipCode(code);
    }

    @When("^Je selectionne country \"([^\"]*)\"$")
    public void jeSelectionneCountry(String value) throws Throwable {
        contact.selectDropDownListByValueCountry(DetailsContactPageObject.country, value);
    }

    @When("^je saisie le teliphone \"([^\"]*)\"$")
    public void jeSaisieLeTeliphone(String tel) throws Throwable {
        contact.homeTelephone(tel);
    }

    @When("^Je saisie Mobile \"([^\"]*)\"$")
    public void jeSaisieMobile(String number) throws Throwable {
        contact.mobileDetaisContacts(number);
    }

    @When("^Je saisie Work teliphone \"([^\"]*)\"$")
    public void jeSaisieWorkTeliphone(String mobile) throws Throwable {
        contact.workMobileDetaisContacts(mobile);
    }

    @When("^je saisie work email \"([^\"]*)\"$")
    public void jeSaisieWorkEmail(String mail) throws Throwable {
        contact.workEmailDetaisContacts(mail);
    }

    @When("^Je saisie other email \"([^\"]*)\"$")
    public void jeSaisieOtherEmail(String otherMail) throws Throwable {
        contact.otherMail(otherMail);
    }

    @When("^je clique sur save$")
    public void jeCliqueSurSave() throws Throwable {
        contact.saveDetaislconctact();
    }

    @When("^je clique sur Edit_attachement$")
    public void jeCliqueSurEdit_attachement() throws Throwable {
        contact.addAtta();
    }

    @When("^Je clique sur le champ comment \"([^\"]*)\"$")
    public void jeCliqueSurLeChampComment(String file) throws Throwable {
        contact.seclectFile(file);
    }


    @When("^Je clique un fichier \"([^\"]*)\"$")
    public void jeCliqueUnFichier(String file) throws Throwable {
        contact.seclectFile(file);
    }


    @When("^Je saisi dans le champ comment \"([^\"]*)\"$")
    public void jeSaisiDansLeChampComment(String comments) throws Throwable {
        contact.commentdetailsContact(comments);
    }


    @Then("^je clique sur upload$")
    public void jeCliqueSurUpload() throws Throwable {
        contact.uploaddetaislContact();

    }


}
