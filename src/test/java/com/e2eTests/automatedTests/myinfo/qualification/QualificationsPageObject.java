package com.e2eTests.automatedTests.myinfo.qualification;

import com.e2eTests.automatedTests.utilis.BasePage;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

public class QualificationsPageObject extends BasePage {


    public QualificationsPageObject() {

        PageFactory.initElements(driver, this);
    }

/*------------------------------------------------------------------------------------------------------------------------------|
                                    Locators Qualification & Work Experience
---------------------------------------------------------------------------------------------------------------------------------*/
    final static String QUALIFICATION = "//*[@class='selected']/a";
    final static String EDITIEXPERIENCE = "addWorkExperience";
    final static String COMPANY = "experience_employer";
    final static String JOBTILE = "experience_jobtitle";
    final static String FROM = "experience_jobtitle";
    final static String TODATE = "experience_to_date";
    final static String COMMENT = "experience_comments";
    final static String SAVEEXPERIENCE = "btnWorkExpSave";
    /*------------------------------------------------------------------------------------------------------------------------------|
                                    Locators Education
---------------------------------------------------------------------------------------------------------------------------------*/

    final static String EDITEDUCATION = "btnEducationSave";
    final static String LEVELEDUCATION = "education_code";
    final static String INSTITUTE = "education_institute";
    final static String SPECIALIZATION = "education_major";
    final static String YEAR = "education_year";
    final static String SCORE = "education_gpa";
    final static String STARTDATE = "education_start_date";
    final static String ENDDATE = "education_end_date";
    final static String SAVEEDUCATION = "btnEducationSave";

   /*------------------------------------------------------------------------------------------------------------------------------|
                                    Locators Skills
---------------------------------------------------------------------------------------------------------------------------------*/

    final static String EDITSKILS = "addSkill";
    final static String SELECTSKILS = "skill_code";
    final static String SKILSYEARS = "skill_years_of_exp";
    final static String SKILSCOMMENT = "skill_comments";
    final static String SKILSBTNSAVE = "btnSkillSave";
    /*------------------------------------------------------------------------------------------------------------------------------|
                                     Locators Languages
 ---------------------------------------------------------------------------------------------------------------------------------*/
    final static String EDITLANGUAGE = "addLanguage";
    final static String LANGUAGETYPE = "language_code";
    final static String LANGUAGEFLUENCY = "language_lang_type";
    final static String LANGUAGECOMPETENCY = "language_competency";
    final static String LANGUAGECOMMENT = "language_comments";
    final static String LANGUAGEBTNSAVE = "btnLanguageCancel";
    /*------------------------------------------------------------------------------------------------------------------------------|
                                   Locators License
---------------------------------------------------------------------------------------------------------------------------------*/
    final static String LICENCEADD = "addLicense";
    final static String LICENSETYPE = "license_code";
    final static String LICENCENUMBER = "license_license_no";
    final static String LICENSEISSUESDATE = "license_date";
    final static String LICENSEEXPIREDATE = "license_renewal_date";
    final static String LLICENSEBTNSAVE = "btnLicenseSave";
    /*------------------------------------------------------------------------------------------------------------------------------|
                                     Locators Attachments
 ---------------------------------------------------------------------------------------------------------------------------------*/
    final static String ATTACHEMENTADD = "btnAddAttachment";
    final static String ATTACHEMENTFILE = "ufile";
    final static String ATTACHEMENTCOMMENT = "txtAttDesc";
    final static String ATTACHEMENTUPLOAD = "btnSaveAttachment";

    /*------------------------------------------------------------------------------------------------------------------------------|
                            Identification of the elements Qualification & Work Experience
 ---------------------------------------------------------------------------------------------------------------------------------*/    @FindBy(how = How.XPATH, using = QUALIFICATION)
    public static WebElement qualification;
    @FindBy(how = How.ID, using = EDITIEXPERIENCE)
    public static WebElement editExperience;
    @FindBy(how = How.ID, using = COMPANY)
    public static WebElement company;
    @FindBy(how = How.ID, using = JOBTILE)
    public static WebElement jobTitle;
    @FindBy(how = How.ID, using = FROM)
    public static WebElement from;
    @FindBy(how = How.ID, using = TODATE)
    public static WebElement toDate;
    @FindBy(how = How.ID, using = COMMENT)
    public static WebElement commentExperience;
    @FindBy(how = How.ID, using = SAVEEXPERIENCE)
    public static WebElement saveExperience;
    /*------------------------------------------------------------------------------------------------------------------------------|
                                   Identification of the elements Education
---------------------------------------------------------------------------------------------------------------------------------*/
    @FindBy(how = How.ID, using = EDITEDUCATION)
    public static WebElement editEducation;
    @FindBy(how = How.ID, using = LEVELEDUCATION)
    public static WebElement levelEducation;
    @FindBy(how = How.ID, using = INSTITUTE)
    public static WebElement institute;
    @FindBy(how = How.ID, using = SPECIALIZATION)
    public static WebElement specialization;
    @FindBy(how = How.ID, using = YEAR)
    public static WebElement year;
    @FindBy(how = How.ID, using = SCORE)
    public static WebElement score;
    @FindBy(how = How.ID, using = STARTDATE)
    public static WebElement stardate;
    @FindBy(how = How.ID, using = ENDDATE)
    public static WebElement endDate;
    @FindBy(how = How.ID, using = SAVEEDUCATION)
    public static WebElement saveEducation;

       /*------------------------------------------------------------------------------------------------------------------------------|
                          Identification of the elements Skills
---------------------------------------------------------------------------------------------------------------------------------*/

    @FindBy(how = How.XPATH, using = EDITSKILS)
    public static WebElement editSkils;
    @FindBy(how = How.ID, using = SELECTSKILS)
    public static WebElement selectSkils;
    @FindBy(how = How.ID, using = SKILSYEARS)
    public static WebElement skilsYears;
    @FindBy(how = How.ID, using = SKILSCOMMENT)
    public static WebElement skilsComment;
    @FindBy(how = How.ID, using = SKILSBTNSAVE)
    public static WebElement skilsBtnSave;

    /*------------------------------------------------------------------------------------------------------------------------------|
                                    Identification of the elements Languages
 ---------------------------------------------------------------------------------------------------------------------------------*/
    @FindBy(how = How.ID, using = EDITLANGUAGE)
    public static WebElement editLanguage;
    @FindBy(how = How.ID, using = LANGUAGETYPE)
    public static WebElement language;
    @FindBy(how = How.ID, using = LANGUAGEFLUENCY)
    public static WebElement languageGefluency;
    @FindBy(how = How.ID, using = LANGUAGECOMPETENCY)
    public static WebElement languageComptency;
    @FindBy(how = How.ID, using = LANGUAGECOMMENT)
    public static WebElement languageComment;
    @FindBy(how = How.ID, using = LANGUAGEBTNSAVE)
    public static WebElement languageBtnSave;

    /*------------------------------------------------------------------------------------------------------------------------------|
                                     Identification of the elements License
---------------------------------------------------------------------------------------------------------------------------------*/
    @FindBy(how = How.ID, using = LICENCEADD)
    public static WebElement licenseAdd;
    @FindBy(how = How.ID, using = LICENSETYPE)
    public static WebElement licenseType;
    @FindBy(how = How.ID, using = LICENCENUMBER)
    public static WebElement licenseNumber;
    @FindBy(how = How.ID, using = LICENSEISSUESDATE)
    public static WebElement licenseIssuesDate;
    @FindBy(how = How.ID, using = LICENSEEXPIREDATE)
    public static WebElement licenseExpireDate;
    @FindBy(how = How.ID, using = LLICENSEBTNSAVE)
    public static WebElement licenseBtnSave;

    /*------------------------------------------------------------------------------------------------------------------------------|
                                       Identification of the elements Attachments
 ---------------------------------------------------------------------------------------------------------------------------------*/
    @FindBy(how = How.ID, using = ATTACHEMENTADD)
    public static WebElement attachementAdd;
    @FindBy(how = How.ID, using = ATTACHEMENTFILE)
    public static WebElement attachementFile;
    @FindBy(how = How.ID, using = ATTACHEMENTCOMMENT)
    public static WebElement attachementComment;
    @FindBy(how = How.ID, using = ATTACHEMENTUPLOAD)
    public static WebElement attachemetUpload;


    /*------------------------------------------------------------------------------------------------------------------------------|
                                     Method Qualification & Work Experience
---------------------------------------------------------------------------------------------------------------------------------*/
    public void clickQualifiquation() {
        qualification.click();
    }

    public void workExperience() {
        editExperience.click();
    }

    public void fillCompany(String name) {
        company.sendKeys(name);
    }

    public void fillJobTitle(String title) {
        jobTitle.sendKeys(title);
    }

    public void fillFrome(String fromedate) {
        from.sendKeys(fromedate);
    }

    public void fillToDte(String todate) {
        toDate.sendKeys(todate);
    }

    public void filleComment(String comment) {
        commentExperience.sendKeys(comment);
    }

    public void clickSaveExperience() {
        saveExperience.click();
    }
    /*------------------------------------------------------------------------------------------------------------------------------|
                                         Method Education
 ---------------------------------------------------------------------------------------------------------------------------------*/

    public void clickEditEducation() {
        editEducation.click();
    }

    public void selectDropDownListByValueEducation(WebElement levelEducation, String value) {
        Select dropDownList = new Select(levelEducation);
        dropDownList.selectByValue(value);
    }

    public void fillInstitue(String name) {
        institute.sendKeys(name);
    }

    public void fillSpesialization(String name1) {
        specialization.sendKeys(name1);
    }

    public void fillYear(String name2) {
        year.sendKeys(name2);
    }

    public void fillGpaScore(String name3) {
        score.sendKeys(name3);
    }

    public void fillstartDate(String name4) {
        stardate.clear();
        stardate.sendKeys(name4);
    }

    public void fillEndDate(String name5) {
        endDate.clear();
        endDate.sendKeys(name5);
    }

    public void educationSave() {
        WebDriverWait wait = new WebDriverWait(driver, 10);
        WebElement saveEducation;
        saveEducation = wait.until(ExpectedConditions.elementToBeClickable(By.id("btnEducationSave")));
        saveEducation.click();
    }

       /*------------------------------------------------------------------------------------------------------------------------------|
                                     Method Skills
 ---------------------------------------------------------------------------------------------------------------------------------*/

    public void clickEditSkils() {
        editSkils.click();
    }

    public void selectDropDownListByValueSkils(WebElement selectSkils, String value) {
        Select dropDownList = new Select(selectSkils);
        dropDownList.selectByValue(value);
    }

    public void fillYearsOfExperience(String name5) {
        skilsYears.sendKeys(name5);
    }

    public void fillCommentSkils(String name6) {
        skilsComment.sendKeys(name6);
    }

    public void skilsSave() {
        WebDriverWait wait = new WebDriverWait(driver, 10);
        WebElement skilsBtnSave;
        skilsBtnSave = wait.until(ExpectedConditions.elementToBeClickable(By.id("btnSkillSave")));
        skilsBtnSave.click();

    }

    /*------------------------------------------------------------------------------------------------------------------------------|
                                Method Languages
---------------------------------------------------------------------------------------------------------------------------------*/
    public void clickEditLanguage() {
        editLanguage.click();
    }

    public void selectDropDownListByValueLanguage(WebElement language, String value) {
        Select dropDownList = new Select(language);
        dropDownList.selectByValue(value);
    }

    public void selectDropDownListByValueFluency(WebElement languageGefluency,String value) {
        Select dropDownList = new Select(languageGefluency);
        dropDownList.selectByValue(value);
    }

    public void selectDropDownListByValueCompetency(WebElement languageComptency, String value) {
        Select dropDownList = new Select(languageComptency);
        dropDownList.selectByValue(value);
    }

    public void filllanguageComment(String name7) {
        languageComment.sendKeys(name7);
    }

    public void languageSave() {
        WebDriverWait wait = new WebDriverWait(driver, 10);
        WebElement languageBtnSave;
        languageBtnSave = wait.until(ExpectedConditions.elementToBeClickable(By.id("btnLanguageCancel")));
        languageBtnSave.click();
    }

    /*------------------------------------------------------------------------------------------------------------------------------|
                                        Method License
 ---------------------------------------------------------------------------------------------------------------------------------*/
    public void clickEditLicense() {
        licenseAdd.click();
    }

    public void selectDropDownListByValueLicenseType(WebElement licenseType, String value) {
        Select dropDownList = new Select(licenseType);
        dropDownList.selectByValue(value);
    }

    public void fillLicenseNumber(String name7) {
        licenseNumber.sendKeys(name7);
    }

    public void fillIssueDate(String name8) {
        licenseIssuesDate.sendKeys(name8);
    }

    public void fillExpiryDate(String name9) {
        licenseExpireDate.sendKeys(name9);
    }

    public void licenseSave() {
        WebDriverWait wait = new WebDriverWait(driver, 10);
        WebElement licenseBtnSave;
        licenseBtnSave = wait.until(ExpectedConditions.elementToBeClickable(By.id("btnLicenseSave")));
        licenseBtnSave.click();
    }

    /*------------------------------------------------------------------------------------------------------------------------------|
                                     Method Attachments
---------------------------------------------------------------------------------------------------------------------------------*/
    public void clickEditAttachement() {
        attachementAdd.click();
    }

    public void selectFileAttachment(String name9) {
        attachementFile.sendKeys(name9);
    }

    public void fillCommentAttachment(String name10) {
        attachementComment.sendKeys(name10);
    }

    public void uploadAttachement() {
        attachemetUpload.click();
    }


}