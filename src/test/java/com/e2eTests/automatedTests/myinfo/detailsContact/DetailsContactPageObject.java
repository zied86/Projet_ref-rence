package com.e2eTests.automatedTests.myinfo.detailsContact;


import com.e2eTests.automatedTests.utilis.BasePage;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

public class DetailsContactPageObject extends BasePage {

    private static final String HOME_PAGE_URL = "";

    public DetailsContactPageObject() {

        PageFactory.initElements(driver, this);
    }

    /*---------------------------------------------------------------------------------------|
                                         Locators Contact Details
     ----------------------------------------------------------------------------------------*/
    final static String CONTACT_DETAILS = "//a[normalize-space()='Contact Details']";
    final static String EDIT = "btnSave";
    final static String CONTACT_STREET1 = "contact_street1";
    final static String CONTACT_STREET2 = "contact_street2";
    final static String CITY = "contact_city";
    final static String CONTACT_PROVINCE = "contact_province";
    final static String ZIPCODE = "contact_emp_zipcode";
    final static String COUNTRY = "contact_country";
    final static String HOME_TELEPHONE = "contact_emp_hm_telephone";
    final static String MOBILE = "contact_emp_mobile";
    final static String WORKMOBILE = "contact_emp_work_telephone";
    final static String EMAIL = "contact_emp_work_email";
    final static String OTHEREMAIL = "contact_emp_oth_email";
    final static String SAVEDETAILS = "btnSave";
    final static String BTNADD = "btnAddAttachment";
    final static String CHOISIRFICHIER = "ufile";
    final static String COMMENT = "txtAttDesc";
    final static String UPLOAD = "btnSaveAttachment";

      /*---------------------------------------------------------------------------------------|
                                          Contact Details
       ----------------------------------------------------------------------------------------*/

    @FindBy(how = How.XPATH, using = CONTACT_DETAILS)
    public static WebElement contactdetails;
    @FindBy(how = How.ID, using = EDIT)
    public static WebElement btnSave;
    @FindBy(how = How.ID, using = CONTACT_STREET1)
    public static WebElement contactsreet1;
    @FindBy(how = How.ID, using = CONTACT_STREET2)
    public static WebElement contactsreet2;
    @FindBy(how = How.ID, using = CITY)
    public static WebElement city;
    @FindBy(how = How.ID, using = CONTACT_PROVINCE)
    public static WebElement contactProvince;
    @FindBy(how = How.ID, using = ZIPCODE)
    public static WebElement zipCode;
    @FindBy(how = How.ID, using = COUNTRY)
    public static WebElement country;
    @FindBy(how = How.ID, using = HOME_TELEPHONE)
    public static WebElement homeTelephone;
    @FindBy(how = How.ID, using = MOBILE)
    public static WebElement mobile;
    @FindBy(how = How.ID, using = WORKMOBILE)
    public static WebElement workMobile;
    @FindBy(how = How.ID, using = EMAIL)
    public static WebElement email;
    @FindBy(how = How.ID, using = OTHEREMAIL)
    public static WebElement otherEmail;
    @FindBy(how = How.ID, using = SAVEDETAILS)
    public static WebElement savedetailscontacts;
    @FindBy(how = How.ID, using = BTNADD)
    public static WebElement btnAddAttachements;
    @FindBy(how = How.ID, using = CHOISIRFICHIER)
    public static WebElement choisirFichier;
    @FindBy(how = How.ID, using = COMMENT)
    public static WebElement commentcontact;
    @FindBy(how = How.ID, using = UPLOAD)
    public static WebElement upload;


  /*---------------------------------------------------------------------------------------|
                                         Methodes Contact Details
  ----------------------------------------------------------------------------------------*/

    public void contactDetails() {
        contactdetails.click();
    }

    public void editContactDetails() {
        btnSave.click();
    }

    public void addStreet1(String adresse) {
        contactsreet1.sendKeys(adresse);
    }

    public void addStreet2(String adresse) {
        contactsreet2.sendKeys(adresse);
    }

    public void cityContactDetails(String adresse) {
        city.sendKeys(adresse);
    }

    public void contactProvince(String adresse) {
        contactProvince.sendKeys(adresse);
    }

    public void zipCode(String adresse) {
        zipCode.sendKeys(adresse);
    }

    public void selectDropDownListByValueCountry(WebElement country, String value) {
        Select dropDownList = new Select(country);
        dropDownList.selectByValue(value);
    }

    public void homeTelephone(String number) {
        homeTelephone.sendKeys(number);
    }

    public void mobileDetaisContacts(String number) {
        mobile.sendKeys(number);
    }

    public void workMobileDetaisContacts(String number) {
        workMobile.clear();
        workMobile.sendKeys(number);
    }

    public void workEmailDetaisContacts(String mail) {
        email.clear();
        email.sendKeys(mail);
    }

    public void otherMail(String mail) {
        otherEmail.clear();

        otherEmail.sendKeys(mail);
    }

    public void saveDetaislconctact() {
        WebDriverWait wait = new WebDriverWait(driver, 10);
        WebElement savedetailscontacts;
        savedetailscontacts = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id='btnSave']")));
        savedetailscontacts.click();
    }

    /*---------------------------------------------------------------------------------------|
                                         Methodes Attachments
     ----------------------------------------------------------------------------------------*/
    public void addAtta() {
        btnAddAttachements.click();
    }

    public void seclectFile(String file) {

        choisirFichier.sendKeys(file);
    }

    public void commentdetailsContact(String comment) {

        commentcontact.sendKeys(comment);
    }

    public void uploaddetaislContact() {
        upload.click();
    }

}



