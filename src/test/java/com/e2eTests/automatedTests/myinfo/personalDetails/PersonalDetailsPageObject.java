package com.e2eTests.automatedTests.myinfo.personalDetails;

import com.e2eTests.automatedTests.utilis.BasePage;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;

public class PersonalDetailsPageObject extends BasePage {

    private static final String HOME_PAGE_URL = "";

    public PersonalDetailsPageObject() {
        PageFactory.initElements(driver, this);
    }

    /*---------------------------------------------------------------------------------------|
                                      Personal Details
     ----------------------------------------------------------------------------------------*/

    final static String PERSONALDETAILS = "//*[normalize-space()='Personal Details']/a";
    final static String EDITPERSONAL = "btnSave";
    final static String FULLNAME = "personal_txtEmpFirstName";
    final static String MIDDELNAME = "personal_txtEmpMiddleName";
    final static String LASTNAME = "personal_txtEmpLastName";
    final static String EMPLOYEEID = "personal_txtEmployeeId";
    final static String OTHERID = "personal_txtOtherID";
    final static String LICENSENUMBER = "personal_txtLicenNo";
    final static String EXPIRYDATE = "personal_txtLicExpDate";
    final static String SSNNAMBER = "personal_txtNICNo";
    final static String SINNUMBER = "personal_txtSINNo";
    final static String GENRE = "/*[@id=\"frmEmpPersonalDetails\"]/fieldset/ol[3]/li[1]";
    final static String MARITALSTATUS = "personal_cmbMarital";
    final static String NATIONNALTITY = "personal_cmbNation";
    final static String DATEOFBIRTH = "personal_DOB";
    final static String NICKNAME = "personal_txtEmpNickName";
    final static String SMOKER = "//*[@id=\"personal_chkSmokeFlag\"]";
    final static String MILITARYSERVICE = "personal_txtMilitarySer";
    final static String SAVEDETAILS = "btnSave";
    /*---------------------------------------------------------------------------------------|
                                      Personal Details
     ----------------------------------------------------------------------------------------*/

    @FindBy(how = How.XPATH, using = PERSONALDETAILS)
    public static WebElement personnaldetails;
    @FindBy(how = How.ID, using = EDITPERSONAL)
    public static WebElement editpersonnal;
    @FindBy(how = How.ID, using = FULLNAME)
    public static WebElement fullname;
    @FindBy(how = How.ID, using = MIDDELNAME)
    public static WebElement middlname;
    @FindBy(how = How.ID, using = LASTNAME)
    public static WebElement lastname;
    @FindBy(how = How.ID, using = EMPLOYEEID)
    public static WebElement employeeid;
    @FindBy(how = How.ID, using = OTHERID)
    public static WebElement otherid;
    @FindBy(how = How.ID, using = LICENSENUMBER)
    public static WebElement licensenumber;
    @FindBy(how = How.ID, using = EXPIRYDATE)
    public static WebElement expirydate;
    @FindBy(how = How.ID, using = SSNNAMBER)
    public static WebElement snnnamber;
    @FindBy(how = How.ID, using = SINNUMBER)
    public static WebElement sinnumber;
    @FindBy(how = How.XPATH, using = GENRE)
    public static WebElement genre;
    @FindBy(how = How.ID, using = MARITALSTATUS)
    public static WebElement maritalstatus;
    @FindBy(how = How.ID, using = NATIONNALTITY)
    public static WebElement nationnality;
    @FindBy(how = How.ID, using = DATEOFBIRTH)
    public static WebElement dateofbirth;
    @FindBy(how = How.ID, using = NICKNAME)
    public static WebElement nickname;
    @FindBy(how = How.XPATH, using = SMOKER)
    public static WebElement smoker;
    @FindBy(how = How.ID, using = MILITARYSERVICE)
    public static WebElement militaryservice;
    @FindBy(how = How.ID, using = SAVEDETAILS)
    public static WebElement savesetails;

    /*---------------------------------------------------------------------------------------|
                                    Custom Fields
    ----------------------------------------------------------------------------------------*/
    final static String EDITCUSTOMFIELDS = "btnEditCustom";
    final static String BLOODTYPE = "//*[@id=\"frmEmpCustomFields\"]/ol/li/select";
    final static String SAVE = "//*[@id=\"btnEditCustom\"]";
    /*---------------------------------------------------------------------------------------|
                                     Custom Fields
     ----------------------------------------------------------------------------------------*/
    @FindBy(how = How.ID, using = EDITCUSTOMFIELDS)
    public static WebElement editcuctome;
    @FindBy(how = How.XPATH, using = BLOODTYPE)
    public static WebElement bloodtype;
    @FindBy(how = How.XPATH, using = SAVE)
    public static WebElement savefields;

    /*---------------------------------------------------------------------------------------|
                                    Attachments
    ----------------------------------------------------------------------------------------*/

    final static String ADD = "btnAddAttachment";
    final static String SELECTFILE = "ufile";
    final static String COMMENT = "txtAttDesc";
    final static String UPLOAD = "btnSaveAttachment";
    final static String RECHERCHE = "//*[@id='tblAttachments']";
   /*---------------------------------------------------------------------------------------|
                                    Attachments
    ----------------------------------------------------------------------------------------*/

    @FindBy(how = How.ID, using = ADD)
    public static WebElement addattachemnt;
    @FindBy(how = How.ID, using = SELECTFILE)
    public static WebElement selectfile;
    @FindBy(how = How.ID, using = COMMENT)
    public static WebElement comment;
    @FindBy(how = How.ID, using = UPLOAD)
    public static WebElement uoloadattachment;
    @FindBy(how = How.XPATH, using = RECHERCHE)
    public static List<WebElement>  deleteattachment;

    /*---------------------------------------------------------------------------------------|
                                     Personal Details
    ----------------------------------------------------------------------------------------*/
    public void personalDetails() {
        personnaldetails.click();
    }

    ;

    public void editPersonalDetails() {
        editpersonnal.click();
    }

    ;

    public void fullname(String name) {
        fullname.clear();
        fullname.sendKeys(name);
    }

    ;

    public void middelName(String name) {
        middlname.clear();
        middlname.sendKeys(name);
    }

    ;

    public void employeeId(String name) {
        employeeid.clear();
        employeeid.sendKeys(name);
    }

    ;
    public void lastName(String name) {
        lastname.clear();
        lastname.sendKeys(name);
    }

    ;

    public void otherId(String name) {
        otherid.clear();
        otherid.sendKeys(name);
    }

    ;

    public void licenseNamber(String name) {
        licensenumber.clear();
        licensenumber.sendKeys(name);
    }

    ;

    public void expiryDate(String name) {
        expirydate.clear();
       expirydate.sendKeys(name);
    }

    ;

    public void ssnNamber(String name) {
        snnnamber.clear();
        snnnamber.sendKeys(name);
    }

    ;

    public void sinNumber(String name) {
        sinnumber.clear();
        sinnumber.sendKeys(name);
    }

    ;

    public void selectDropDownListByValueMaritialStatus(WebElement maritalstatus, String value) {
        Select dropDownList = new Select(maritalstatus);
        dropDownList.selectByValue(value);
    }

    public void selectDropDownListByValueNationality(WebElement nationnality, String value) {
        Select dropDownList = new Select(nationnality);
        dropDownList.selectByValue(value);
    }

    public void dateOfBirth(String name) {
        dateofbirth.clear();
        dateofbirth.sendKeys(name);
    }

    ;

    public void nickName(String name) {
        nickname.clear();
        nickname.sendKeys(name);
    }

    ;

    public void smoker(){ smoker.click();

    }

    public void militaryService(String name) {
        militaryservice.clear();

        militaryservice.sendKeys(name);
    }

    ;

    public void saveDetails() {
        savesetails.click();
    }

    ;

    /*--------------------------------------------------------------------------------------*/
    /*---------------------------------------------------------------------------------------|
     |                              Custom Fields                                            |
     |---------------------------------------------------------------------------------------*/
    public void editcustomfields() {
        editcuctome.click();
    }

    ;

    public void waitSlectBloodType(){
        WebDriverWait wait = new WebDriverWait(driver, 10);
        WebElement bloodtype;
        bloodtype = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"frmEmpCustomFields\"]/ol/li/select")));

    }
    public void selectDropDownListByValueBloodType(WebElement bloodtype, String value) {

        Select dropDownList = new Select(bloodtype);
        dropDownList.selectByValue(value);
    }

    public void saveCustomFields() {

        WebDriverWait wait = new WebDriverWait(driver, 10);
        WebElement savefields;
        savefields = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"btnEditCustom\"]")));
        savefields.click();
    }

    ;

    /*---------------------------------------------------------------------------------------|
    |                             Add Attachment                                             |
    |---------------------------------------------------------------------------------------*/
    public void editAttachments() {
        addattachemnt.click();
    }

    public void selectFile(String file) {
        selectfile.sendKeys(file);
    }

    public void comment(String comments) {
        comment.sendKeys(comments);
    }

    public void uploadattAttachment() {
        uoloadattachment.click();

    }
    public void deletAttachments(List<WebElement> deleteattachment) {

        List<WebElement> tabs = deleteattachment;
        WebElement q;
        System.out.println(tabs.size());
        for (int i = 0; i < tabs.size(); i++) {
            System.out.println(tabs.size());
            q = tabs.get(i);
            System.out.println(q.getText());

        }


    }
}

