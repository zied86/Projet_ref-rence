package com.e2eTests.automatedTests.myinfo.qualification;

import com.e2eTests.automatedTests.utilis.BasePage;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;

public class QualificationsPageObject extends BasePage {


    public QualificationsPageObject() {

        PageFactory.initElements(driver, this);
    }

/*------------------------------------------------------------------------------------------------------------------------------|
                                    Locators Qualification & Work Experience
---------------------------------------------------------------------------------------------------------------------------------*/

    final static String QUALIFICATION = "//*[normalize-space()='Qualifications']/a";
    final static String EDITIEXPERIENCE = "addWorkExperience";
    final static String ADDWORKEXPREIENCE = "headChangeWorkExperience";
    final static String COMPANY = "experience_employer";
    final static String JOBTILE = "experience_jobtitle";
    final static String FROM = "experience_from_date";
    final static String TODATE = "experience_to_date";
    final static String COMMENT = "experience_comments";
    final static String SAVEEXPERIENCE = "btnWorkExpSave";
    final static String WORKCHECKALL = "//*[@id=\"frmDelWorkExperience\"]/table/tbody";
    final static String DELETEWORKEXPERIENCE = "delWorkExperience";

    /*------------------------------------------------------------------------------------------------------------------------------|
                                    Locators Education
---------------------------------------------------------------------------------------------------------------------------------*/

    final static String EDITEDUCATION = "addEducation";
    final static String LEVELEDUCATION = "education_code";
    final static String EDUCATION = "//h1[normalize-space()='Education']";
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
    final static String SKILLS = "//h1[normalize-space()='Skills']";
    final static String SELECTSKILS = "skill_code";
    final static String SKILSYEARS = "skill_years_of_exp";
    final static String SKILSCOMMENT = "skill_comments";
    final static String SKILSBTNSAVE = "btnSkillSave";

    /*------------------------------------------------------------------------------------------------------------------------------|
                                     Locators Languages
 ---------------------------------------------------------------------------------------------------------------------------------*/
    final static String EDITLANGUAGE = "addLanguage";
    final static String LANGUAGES = "//h1[normalize-space()='Languages']";
    final static String LANGUAGETYPE = "language_code";
    final static String LANGUAGEFLUENCY = "language_lang_type";
    final static String LANGUAGECOMPETENCY = "language_competency";
    final static String LANGUAGECOMMENT = "language_comments";
    final static String LANGUAGEBTNSAVE = "btnLanguageSave";
    final static String CHEKLANGUAGES = "//*[@id=\"lang_data_table\"]/tbody";
    final static String DELETELANGUAGE = "delLanguage";
    /*------------------------------------------------------------------------------------------------------------------------------|
                                   Locators License
---------------------------------------------------------------------------------------------------------------------------------*/
    final static String LICENCEADD = "addLicense";
    final static String LICENSE = "//h1[normalize-space()='License']";
    final static String LICENSETYPE = "license_code";
    final static String LICENCENUMBER = "license_license_no";
    final static String LICENSEISSUESDATE = "license_date";
    final static String LICENSEEXPIREDATE = "license_renewal_date";
    final static String LLICENSEBTNSAVE = "btnLicenseSave";
    /*------------------------------------------------------------------------------------------------------------------------------|
                                     Locators Attachments
 ---------------------------------------------------------------------------------------------------------------------------------*/
    final static String ATTACHEMENTADD = "btnAddAttachment";
    final static String ATTACHEMENT = "//h1[normalize-space()='Attachments']";
    final static String ATTACHEMENTFILE = "ufile";
    final static String ATTACHEMENTCOMMENT = "txtAttDesc";
    final static String ATTACHEMENTUPLOAD = "btnSaveAttachment";

    /*------------------------------------------------------------------------------------------------------------------------------|
                            Identification of the elements Qualification & Work Experience
 ---------------------------------------------------------------------------------------------------------------------------------*/
    @FindBy(how = How.XPATH, using = QUALIFICATION)
    public static WebElement qualifications;
    @FindBy(how = How.ID, using = EDITIEXPERIENCE)
    public static WebElement editExperience;
    @FindBy(how = How.ID, using = ADDWORKEXPREIENCE)
    public static WebElement addWorkExpreience;
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
    @FindBy(how = How.XPATH, using = WORKCHECKALL)
    public static WebElement workChekAll;
    @FindBy(how = How.ID, using = DELETEWORKEXPERIENCE)
    public static WebElement deleteWorkExperience;
    /*------------------------------------------------------------------------------------------------------------------------------|
                                   Identification of the elements Education
---------------------------------------------------------------------------------------------------------------------------------*/
    @FindBy(how = How.ID, using = EDITEDUCATION)
    public static WebElement editEducation;
    @FindBy(how = How.XPATH, using = EDUCATION)
    public static WebElement education;
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
    @FindBy(how = How.XPATH, using = SKILLS)
    public static WebElement skills;
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
    @FindBy(how = How.XPATH, using = LANGUAGES)
    public static WebElement languageBloc;
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
    @FindBy(how = How.XPATH, using = CHEKLANGUAGES)
    public static WebElement checkLanguages;
    @FindBy(how = How.ID, using = DELETELANGUAGE)
    public static WebElement deleteLanguages;

    /*------------------------------------------------------------------------------------------------------------------------------|
                                     Identification of the elements License
---------------------------------------------------------------------------------------------------------------------------------*/
    @FindBy(how = How.ID, using = LICENCEADD)
    public static WebElement licenseAdd;

    @FindBy(how = How.XPATH, using = LICENSE)
    public static WebElement license;
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
    @FindBy(how = How.XPATH, using = ATTACHEMENT)
    public static WebElement attachement;
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

        WebDriverWait wait = new WebDriverWait(driver, 10);
        qualifications = wait.until(ExpectedConditions.elementToBeClickable(By.xpath(QUALIFICATION)));
        qualifications.click();

    }

    public void workExperience() {
        editExperience.click();
    }

    public void blocAddWorkExperience(String text) {
        String messageToWelcome = addWorkExpreience.getText();
        Assert.assertTrue(messageToWelcome.contains(text));
    }

    public void fillCompany(String name) {
        company.sendKeys(name);
    }

    public void fillJobTitle(String title) {
        jobTitle.sendKeys(title);
    }

    public void fillFrome(String fromedate) {
        from.clear();
        from.sendKeys(fromedate);
    }

    public void fillToDte(String todate) {
        toDate.clear();
        toDate.sendKeys(todate);
    }


    public void filleComment(String comment) {
        commentExperience.sendKeys(comment);
    }


    public void clickSaveExperience() {
        saveExperience.click();
    }

    public void resultatSearch(WebElement workChekAll) {

        WebElement tabs = workChekAll;
        List<WebElement> lines = tabs.findElements(By.tagName("tr"));
        WebElement q;
        System.out.println(lines.size());
        for (int i = 0; i < lines.size(); i++) {
            q = lines.get(i);
            // System.out.println(q.findElement(By.className("name")).getText());
            if (q.findElement(By.className("name")).getText().equals("Zied")) {
                q.findElement(By.className("check")).click();
            }
            System.out.println(q.getText());
        }
    }

    public Boolean isElementDisplayed(WebElement editExperience) {
        Boolean isElementDisplayed = editExperience.isDisplayed();
        System.out.println(isElementDisplayed);
        System.out.println(editExperience.getSize());
        System.out.println(editExperience.getLocation());
        System.out.println(editExperience.getRect());
        System.out.println(editExperience.hashCode());
        return isElementDisplayed;
    }

    public void getElementColor() {
        String color = driver.findElement(By.id(SAVEEXPERIENCE)).getCssValue("background-color");
        String[] hexValue = color.replace("rgba(", "").replace(")", "").split(", ");

        int hexValue1 = Integer.parseInt(hexValue[0]);
        hexValue[1] = hexValue[1].trim();

        int hexValue2 = Integer.parseInt(hexValue[1]);
        hexValue[2] = hexValue[2].trim();

        int hexValue3 = Integer.parseInt(hexValue[2]);

        String editExperience = String.format("#%02x%02x%02x", hexValue1, hexValue2, hexValue3);
        Assert.assertEquals("#848484", editExperience);
        System.out.println("The color of the text is: " + editExperience);
    }

    public void deLleteWorkExperience() {
        deleteWorkExperience.click();
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

    public void fillInstitue(String institue) {
        institute.sendKeys(institue);
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
        saveEducation = wait.until(ExpectedConditions.elementToBeClickable(By.id(SAVEEDUCATION)));
        saveEducation.click();
    }

    /*------------------------------------------------------------------------------------------------------------------------------|
                                     Method Skills
 ---------------------------------------------------------------------------------------------------------------------------------*/

    public void clickEditSkils() {
        WebDriverWait wait = new WebDriverWait(driver, 10);
        editSkils = wait.until(ExpectedConditions.elementToBeClickable(By.id(EDITSKILS)));
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
        skilsBtnSave = wait.until(ExpectedConditions.elementToBeClickable(By.id(SKILSBTNSAVE)));
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

    public void selectDropDownListByValueFluency(WebElement languageGefluency, String value) {
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
        languageBtnSave = wait.until(ExpectedConditions.elementToBeClickable(By.id(LANGUAGEBTNSAVE)));
        languageBtnSave.click();
    }

    public void resultatSearchLanguages(WebElement checkLanguages) {

        WebElement tabs = checkLanguages;
        List<WebElement> lines = tabs.findElements(By.tagName("tr"));
        WebElement q;
        System.out.println(lines.size());
        for (int i = 0; i < lines.size(); i++) {
            q = lines.get(i);
            // System.out.println(q.findElement(By.className("name")).getText());
            if (q.findElement(By.className("name")).getText().equals("English")) {
                q.findElement(By.className("check")).click();
            }
            System.out.println(q.getText());
        }

        WebDriverWait wait = new WebDriverWait(driver, 10);
        deleteLanguages = wait.until(ExpectedConditions.elementToBeClickable(By.id(DELETELANGUAGE)));
        deleteLanguages.click();
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
        licenseIssuesDate.clear();
        licenseIssuesDate.sendKeys(name8);
    }

    public void fillExpiryDate(String name9) {
        licenseExpireDate.clear();
        licenseExpireDate.sendKeys(name9);
    }

    public void licenseSave() {
        WebDriverWait wait = new WebDriverWait(driver, 10);
        licenseBtnSave = wait.until(ExpectedConditions.elementToBeClickable(By.id(LLICENSEBTNSAVE)));
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