package com.e2eTests.automatedTests.admin.deleteUser;

import com.e2eTests.automatedTests.utilis.BasePage;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class DeleteUserPageObject extends BasePage {

    private static final String HOME_PAGE_URL = "";

    public DeleteUserPageObject() {
        PageFactory.initElements(driver, this);
    }

    /* |-------------------------------------------------------------------------------------------------------|
       |                         Declaration des variables                                                     |
       |-------------------------------------------------------------------------------------------------------| */

    final static String CHECKBOX = "ohrmList_chkSelectAll";
    final static String DELETE ="btnDelete";
    final static String CONFIRMEDELETE = "dialogDeleteBtn";

    /*|-------------------------------------------------------------------------------------------------------|
      |                         Definitions des methodes                                                      |
      |-------------------------------------------------------------------------------------------------------| */

    @FindBy(how = How.ID, using = CHECKBOX)
    public static WebElement checkBox;
    @FindBy(how = How.ID, using = DELETE)
    public static WebElement delete;
    @FindBy(how = How.ID, using = CONFIRMEDELETE)
    public static WebElement confirmedelete;



    public  void checkBox() {;
        WebDriverWait wait = new WebDriverWait(driver, 10);
        WebElement checkBox;
        checkBox = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[@id=\"ohrmList_chkSelectAll\"]")));
        checkBox.click();

    }
    public  void deleteUser() {;

        WebDriverWait wait = new WebDriverWait(driver, 10);
        WebElement delete;
        delete = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//input[@id = 'btnDelete']")));
        delete.click();


    }

    public void confirmeDelete (){
        WebDriverWait wait = new WebDriverWait(driver, 10);
        WebElement confirmedelete;
        confirmedelete = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//input[@id = 'dialogDeleteBtn']")));
        confirmedelete.click();
}
}
