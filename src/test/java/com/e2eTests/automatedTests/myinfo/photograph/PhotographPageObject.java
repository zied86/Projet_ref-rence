package com.e2eTests.automatedTests.myinfo.photograph;

import com.e2eTests.automatedTests.utilis.BasePage;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class PhotographPageObject extends BasePage {
    private static final String HOME_PAGE_URL = "";

    public PhotographPageObject() {
        PageFactory.initElements(driver, this);
    }


    /*|-------------------------------------------------------------------------------------------------------|
      |                         Declaration des variables                                                     |
      |-------------------------------------------------------------------------------------------------------| */
    final static String MYINFO = "menu_pim_viewMyDetails";
    final static String PHOTO = "//*[@id=\"empPic\"]";
    final static String CHOISIRPHOTO = "photofile";
    final static String UPLOAD = "btnSave";
    final static String DELETE = "btnDelete";
    final static String CONFDELETE = "btnYes";


    /*|-------------------------------------------------------------------------------------------------------|
      |                         Definitions des methodes                                                      |
      |-------------------------------------------------------------------------------------------------------| */
    @FindBy(how = How.ID, using = MYINFO)
    public static WebElement myinfo;
    @FindBy(how = How.ID, using = PHOTO)
    public static WebElement clickphoto;
    @FindBy(how = How.XPATH, using = CHOISIRPHOTO)
    public static WebElement choisirphoto;
    @FindBy(how = How.ID, using = UPLOAD)
    public static WebElement clickupload;
    @FindBy(how = How.ID, using = DELETE)
    public static WebElement delete;
    @FindBy(how = How.ID, using = CONFDELETE)
    public static WebElement confdelete;

    public void myInfo() {
        myinfo.click();
    }

    ;

    public void photoProfil() {
        WebDriverWait wait = new WebDriverWait(driver, 10);
        WebElement clickphoto;
        clickphoto = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"empPic\"]")));
        clickphoto.click();

    }

    ;

    public void choisirPhoto(String photo) {
        WebDriverWait wait = new WebDriverWait(driver, 10);
        WebElement choisirphoto;
        choisirphoto = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"photofile\"]")));
        choisirphoto.sendKeys(photo);
    }

    ;

    public void upPhoto(String photo) {
        WebDriverWait wait = new WebDriverWait(driver, 10);
        WebElement choisirphoto;
        choisirphoto = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"photofile\"]")));
        choisirphoto.sendKeys(photo);
    }

    ;

    public void choisirUpload() {

        clickupload.click();
    }

    public void deletePhoto() {

        delete.click();
        confdelete.click();
    }
}





