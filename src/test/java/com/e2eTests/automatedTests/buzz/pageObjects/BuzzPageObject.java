package com.e2eTests.automatedTests.buzz.pageObjects;

import com.e2eTests.automatedTests.utilis.BasePage;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class BuzzPageObject  extends BasePage {

    private static final String HOME_PAGE_URL = "http://www.bouletcorp.com;";

    public BuzzPageObject() {
        PageFactory.initElements(driver, this);
    }

    public void goToHomePage(){
        driver.get(HOME_PAGE_URL);
        wait.forLoading(5);
    }



    /*Locators*/
    final static String BUZZ_ID ="menu_buzz_viewBuzz";
    final static String UPDATE_STATUS_ID = "status-tab-label";
    final static String PLACEHOLDER_ID = "createPost_content";
    final static String POSTBTN_ID ="postSubmitBtn";
    final static String STATUS_ID ="//*[contains(text(), 'Hello')]";


    /*@FindBy*/
    @FindBy(how=How.ID, using=BUZZ_ID)
    public static WebElement buzzBtn;
    @FindBy(how=How.ID, using=PLACEHOLDER_ID)
    public static WebElement placeHolderBtn;
    @FindBy(how=How.ID, using=POSTBTN_ID)
    public static WebElement postBtn;
    @FindBy(how=How.XPATH, using=STATUS_ID)
    public static WebElement status;



    /*Methods*/
    public void clickBuzz() {
        buzzBtn.click();
    }
    public void writeStatus(String status) {
        placeHolderBtn.sendKeys(status);
    }
    public void clickBtnPost() {
        postBtn.click();
    }
}