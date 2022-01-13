package com.e2eTests.automatedTests.admin.searchuser;

import com.e2eTests.automatedTests.utilis.BasePage;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import java.util.List;

public class searchUserPageObject extends BasePage {

    public searchUserPageObject() {
        PageFactory.initElements(driver, this);
    }

    final static String USERNAME = "searchSystemUser_userName";
    final static String USERROLE = "searchSystemUser_userType";
    final static String EMPLOYEENAME = "searchSystemUser_employeeName_empName";
    final static String STATS = "searchSystemUser_status";
    final static String SEARCH = "searchBtn";
    final static String RESET = "resetBtn";
    final static String RESULTAT = "attachmentsCheckAll";


    @FindBy(how = How.ID, using = USERNAME)
    public static WebElement userName;
    @FindBy(how = How.ID, using = USERROLE)
    public static WebElement userRole;
    @FindBy(how = How.ID, using = EMPLOYEENAME)
    public static WebElement employeeName;
    @FindBy(how = How.ID, using = STATS)
    public static WebElement status;
    @FindBy(how = How.ID, using = SEARCH)
    public static WebElement search;
    @FindBy(how = How.ID, using = RESET)
    public static WebElement reset;
    @FindBy(how = How.ID, using = RESULTAT)
    public static List<WebElement>  resultat;

    public void userNamesSearch(String name) {
        userName.sendKeys(name);
    }

    public void selectDropDownListByValueSearch(WebElement userRole, String value) {
        Select dropDownList = new Select(userRole);
        dropDownList.selectByValue(value);
    }

    public void employeeNameSearch(String name) {
        employeeName.sendKeys(name);
    }

    public void clickKyes() {
        employeeName.sendKeys(Keys.ENTER);
    }

    public void selectDropDownListByValueStatus(WebElement status, String value) {
        Select dropDownList = new Select(status);
        dropDownList.selectByValue(value);
    }

    public void search() {
        search.click();
    }

    public void reset() {
        reset.click();
    }

    public void resultatSearch(List<WebElement> resultat) {

        List<WebElement> tabs = resultat;
        WebElement q;
        System.out.println(tabs.size());
        for (int i = 0; i < tabs.size(); i++) {
            q = tabs.get(i);
            System.out.println(q.getText());
        }

    }
}