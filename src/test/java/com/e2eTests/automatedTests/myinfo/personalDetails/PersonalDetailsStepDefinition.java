package com.e2eTests.automatedTests.myinfo.personalDetails;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.io.IOException;


public class PersonalDetailsStepDefinition {

    private PersonalDetailsPageObject personnal;

    public PersonalDetailsStepDefinition() throws IOException {
        this.personnal = new PersonalDetailsPageObject();
    }

    @When("^Je clique sur le sous menu detail presonnel$")
    public void jeCliqueSurLeSousMenuDetailPresonnel() throws Throwable {
        personnal.personalDetails();
    }

    @When("^Je clique sur le bouton edit dans le boc detai personnel$")
    public void jeCliqueSurLeBoutonEditDansLeBocDetaiPersonnel() throws Throwable {
        personnal.editPersonalDetails();
    }

    @When("^Je saisi le First Name \"([^\"]*)\"$")
    public void jeSaisiLeFirstName(String name) throws Throwable {
        personnal.fullname(name);
    }

    @When("^Je saisi le Middle Name \"([^\"]*)\"$")
    public void jeSaisiLeMiddleName(String name) throws Throwable {
        personnal.middelName(name);
    }

    @When("^Je saisi le Last Name \"([^\"]*)\"$")
    public void jeSaisiLeLastName(String name) throws Throwable {
        personnal.lastName(name);
    }

    @When("^Je saisi le Employee Id \"([^\"]*)\"$")
    public void jeSaisiLeEmployeeId(String name) throws Throwable {
        personnal.employeeId(name);

    }

    @When("^Je saisi le Other Id \"([^\"]*)\"$")
    public void jeSaisiLeOtherId(String id) throws Throwable {
        personnal.otherId(id);
    }

    @When("^Je saisi le Driver's License Number \"([^\"]*)\"$")
    public void jeSaisiLeDriverSLicenseNumber(String namber) throws Throwable {
        personnal.licenseNamber(namber);
    }

    @When("^Je saisi le License Expiry Date \"([^\"]*)\"$")
    public void jeSaisiLeLicenseExpiryDate(String date) throws Throwable {
        personnal.expiryDate(date);
    }

    @When("^Je saisi le SSN Number \"([^\"]*)\"$")
    public void jeSaisiLeSSNNumber(String name) throws Throwable {
        personnal.ssnNamber(name);
    }

    @When("^Je saisi le SIN Number \"([^\"]*)\"$")
    public void jeSaisiLeSINNumber(String number) throws Throwable {
        personnal.sinNumber(number);
    }

    // @When("^Je clique sur le checkbox le Gender$")
    // public void jeCliqueSurLeCheckboxLeGender() throws Throwable {

    //}

    @When("^Je selectionner Marital Status \"([^\"]*)\"$")
    public void jeSelectionnerMaritalStatus(String value) throws Throwable {
        personnal.selectDropDownListByValueMaritialStatus(PersonalDetailsPageObject.maritalstatus, value);
    }

    @When("^Je selectionner Nationality  \"([^\"]*)\"$")
    public void jeSelectionnerNationality(String value) throws Throwable {
        personnal.selectDropDownListByValueNationality(PersonalDetailsPageObject.nationnality, value);

    }

    @When("^Je saisi Date of Birth \"([^\"]*)\"$")
    public void jeSaisiDateOfBirth(String date) throws Throwable {

        personnal.dateOfBirth(date);

    }

    @When("^Je Saisi Nick Nam \"([^\"]*)\"$")
    public void jeSaisiNickNam(String name) throws Throwable {
        personnal.nickName(name);
    }

    /* @When("^Je cocher Smoker$")   And Je cocher Smoker
     public void jeCocherSmoker() throws Throwable {
         personnal.smoker();

     }*/

    @When("^Je saisi  Military Service \"([^\"]*)\"$")
    public void jeSaisiMilitaryService(String name) throws Throwable {

        personnal.militaryService(name);
    }

    @When("^Je clique sur SaveDetais$")
    public void jeCliqueSurSaveDetais() throws Throwable {
        personnal.saveDetails();
    }

    @When("^Je clique sur editCustom Fields$")
    public void jeCliqueSurEditCustomFields() throws Throwable {
        personnal.editcustomfields();
    }

    @When("^Je selectionner Custom Fields \"([^\"]*)\"$")
    public void jeSelectionnerCustomFields(String value ) throws Throwable {
        personnal.waitSlectBloodType();
        personnal.selectDropDownListByValueBloodType(PersonalDetailsPageObject.bloodtype, value);
    }

    @When("^Je clique sur saveCustom Fields$")
    public void jeCliqueSurSaveCustomFields() throws Throwable {
        personnal.saveCustomFields();
    }

    @When("^Je clique sur Add Attachment$")
    public void jeCliqueSurAddAttachment() throws Throwable {
        personnal.editAttachments();
    }

    @When("^Je choisi un fichier Select File \"([^\"]*)\"$")
    public void jeChoisiUnFichierSelectFile(String file) throws Throwable {
        personnal.selectFile(file);
    }

    @Then("^Je clique sur upload$")
    public void jeCliqueSurUpload() throws Throwable {
        personnal.uploadattAttachment();
        personnal.deletAttachments(PersonalDetailsPageObject.deleteattachment);
    }

}
