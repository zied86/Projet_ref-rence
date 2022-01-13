package com.e2eTests.automatedTests.myinfo.qualification;

import com.e2eTests.automatedTests.myinfo.photograph.PhotographPageObject;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.io.IOException;

public class QualificationsStepDefinition {

    private QualificationsPageObject qualification;

    public QualificationsStepDefinition() throws IOException {
        this.qualification = new QualificationsPageObject();
    }

/*--------------------------------------------------------------------------------------------------------------------------
                              Method Qualification &Work Experience
 ---------------------------------------------------------------------------------------------------------------------------*/

    @When("^Je clique sur le bouton qualification$")
    public void jeCliqueSurLeBoutonQualification() throws Throwable {
        qualification.clickQualifiquation();
    }

    @When("^Je clique sue le boutton edition experience$")
    public void jeCliqueSueLeBouttonEditionExperience() throws Throwable {
        qualification.clickEditAttachement();
    }

    @When("^Je saisi le company \"([^\"]*)\"$")
    public void jeSaisiLeCompany(String String) throws Throwable {
        qualification.fillCommentAttachment(String);
    }

    @When("^Je saisi le job tilte \"([^\"]*)\"$")
    public void jeSaisiLeJobTilte(String text) throws Throwable {
        qualification.fillJobTitle(text);
    }

    @When("^Je selectionner la date from \"([^\"]*)\"$")
    public void jeSelectionnerLaDateFrom(String date) throws Throwable {
        qualification.fillFrome(date);
    }

    @When("^Je selectionner la date to \"([^\"]*)\"$")
    public void jeSelectionnerLaDateTo(String date) throws Throwable {
        qualification.fillToDte(date);
    }

    @When("^Je salis un comment \"([^\"]*)\"$")
    public void jeSalisUnComment(String comment) throws Throwable {
        qualification.fillCommentAttachment(comment);
    }

    @Then("^Je clique sur le bouton daveexperience$")
    public void jeCliqueSurLeBoutonDaveexperience() throws Throwable {
        qualification.clickSaveExperience();
    }
/*--------------------------------------------------------------------------------------------------------------------------
                              Method Education
 ---------------------------------------------------------------------------------------------------------------------------*/

    @When("^Je clique sur le bouton editeducation$")
    public void jeCliqueSurLeBoutonEditeducation() throws Throwable {
        qualification.clickEditEducation();
    }

    @When("^Je selectionner un level \"([^\"]*)\"$")
    public void jeSelectionnerUnLevel(String value) throws Throwable {
        qualification.selectDropDownListByValueEducation(QualificationsPageObject.levelEducation,value);
    }

    @When("^Je saisi l'instutite \"([^\"]*)\"$")
    public void jeSaisiLInstutite(String text) throws Throwable {
        qualification.fillInstitue(text);
    }

    @When("^Je saisi Major Specialization \"([^\"]*)\"$")
    public void jeSaisiMajorSpecialization(String text) throws Throwable {
        qualification.fillSpesialization(text);
    }

    @When("^Je saisi  year \"([^\"]*)\"$")
    public void jeSaisiYear(String text) throws Throwable {
        qualification.fillYear(text);
    }

    @When("^Je saisi gpa/Score \"([^\"]*)\"$")
    public void jeSaisiGpaScore(String text) throws Throwable {
        qualification.fillGpaScore(text);
    }

    @When("^Je saisi start date \"([^\"]*)\"$")
    public void jeSaisiStartDate(String date) throws Throwable {
        qualification.fillstartDate(date);
    }

    @When("^Je saisi end date \"([^\"]*)\"$")
    public void jeSaisiEndDate(String date) throws Throwable {
        qualification.fillEndDate(date);
    }

    @When("^Je clique sur le bouton saveeducation$")
    public void jeCliqueSurLeBoutonSaveeducation() throws Throwable {
        qualification.educationSave();
    }
/*--------------------------------------------------------------------------------------------------------------------------
                                       Method Skills
 ---------------------------------------------------------------------------------------------------------------------------*/
    @When("^Je clique sur le bouton editskill$")
    public void jeCliqueSurLeBoutonEditskill() throws Throwable {
        qualification.clickEditSkils();
    }

    @When("^Je selectionner un skill \"([^\"]*)\"$")
    public void jeSelectionnerUnSkill(String Skills) throws Throwable {
        qualification.selectDropDownListByValueSkils(QualificationsPageObject.selectSkils,Skills);
    }

    @When("^Je saisi years of experience\"([^\"]*)\"$")
    public void jeSaisiYearsOfExperience(String text) throws Throwable {
        qualification.fillYearsOfExperience(text);
    }

    @When("^Je saisi Commentsskill\"([^\"]*)\"$")
    public void jeSaisiCommentsskill(String text) throws Throwable {
        qualification.fillCommentSkils(text);
    }

    @When("^Je clique sur saveskill$")
    public void jeCliqueSurSaveskill() throws Throwable {
        qualification.clickSaveExperience();
    }
    /*--------------------------------------------------------------------------------------------------------------------------
                                           Method Languages
     ---------------------------------------------------------------------------------------------------------------------------*/
    @When("^je clique sur le bouton edit language$")
    public void jeCliqueSurLeBoutonEditLanguage() throws Throwable {
        qualification.clickEditLanguage();
    }

    @When("^je select language\"([^\"]*)\"$")
    public void jeSelectLanguage(String value) throws Throwable {
        qualification.selectDropDownListByValueLanguage(QualificationsPageObject.language,value);

    }

    @When("^je select Fluency\"([^\"]*)\"$")
    public void jeSelectFluency(String value) throws Throwable  {
        qualification.selectDropDownListByValueFluency(QualificationsPageObject.languageGefluency,value);
    }

    @When("^je select competency\"([^\"]*)\"$")
    public void jeSelectCompetency(String value) throws Throwable {

        qualification.selectDropDownListByValueCompetency(QualificationsPageObject.languageComptency,value);
    }

    @When("^je saisie comments \"([^\"]*)\"$")
    public void jeSaisieComments(String text) throws Throwable {
        qualification.filllanguageComment(text);
    }

    @Then("^je clique sur le bouton save_language$")
    public void jeCliqueSurLeBoutonSave_language() throws Throwable {
        qualification.languageSave();
    }
    /*--------------------------------------------------------------------------------------------------------------------------
                                              Method  License
        ---------------------------------------------------------------------------------------------------------------------------*/
    @When("^je clique sur le bouton add_license$")
    public void jeCliqueSurLeBoutonAdd_license() throws Throwable {
        qualification.clickEditLicense();
    }

    @When("^je select Type de certif\"([^\"]*)\"$")
    public void jeSelectTypeDeCertif(String value)throws Throwable {
        qualification.selectDropDownListByValueLicenseType(QualificationsPageObject.licenseType,value);
    }

    @When("^je saisie license Number\"([^\"]*)\"$")
    public void jeSaisieLicenseNumber(String text) throws Throwable {
        qualification.fillLicenseNumber(text);
    }

    @When("^je saisie issued date \"([^\"]*)\"$")
    public void jeSaisieIssuedDate(String date) throws Throwable {
        qualification.fillIssueDate(date);
    }

    @When("^le saisie Expired Date \"([^\"]*)\"$")
    public void leSaisieExpiredDate(String date) throws Throwable {
        qualification.fillExpiryDate(date);
    }

    @Then("^je clique sur le bouton save_license$")
    public void jeCliqueSurLeBoutonSave_license() throws Throwable {
        qualification.licenseSave();
    }
    /*--------------------------------------------------------------------------------------------------------------------------
                                                 Method Attachment
     --------------------------------------------------------------------------------------------------------------------------------*/
    @When("^je clique sur le bouton Add_Attachement$")
    public void jeCliqueSurLeBoutonAdd_Attachement() throws Throwable {
        qualification.clickEditAttachement();
    }

    @When("^je choisie un fichier \"([^\"]*)\"$")
    public void jeChoisieUnFichier(String text) throws Throwable {
        qualification.selectFileAttachment(text);
    }

    @When("^je saisie un comment \"([^\"]*)\"$")
    public void jeSaisieUnComment(String text) throws Throwable {
        qualification.fillCommentAttachment(text);
    }

    @Then("^je clique sur le bouton Upload$")
    public void jeCliqueSurLeBoutonUpload() throws Throwable {
        qualification.uploadAttachement();
     }


}
