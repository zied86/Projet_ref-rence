package com.e2eTests.automatedTests.pim;

import com.e2eTests.automatedTests.utilis.BasePage;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class SearchPimPageObject extends BasePage {


    public SearchPimPageObject() {
        PageFactory.initElements(driver, this);
    }

     /*---------------------------------------------------------------------------------------|
                                 PIM
     ----------------------------------------------------------------------------------------*/

    final static String PIM = "//b[normalize-space()='PIM']";
    final static String EMPLOYELIST = "menu_pim_viewEmployeeList";
    final static String EMPLOYEEINFORMATION = "//*[normalize-space()='>']";
    final static String EMPLOYEENAME = "//*[normalize-space()='Employee Name']";
    final static String IDPIM = "//a[normalize-space()='Id']";
    final static String EMPLOYEESATUTS = "label[for='empsearch_employee_status']";
    final static String INCLUDE = "//label[contains(text(),'Include')]";
    final static String SUPERVISORNAME = "label[for='empsearch_supervisor_name']";
    final static String JOBTITLE = "label[for='empsearch_job_title']";
    final static String SUBUNIT = "label[for='empsearch_sub_unit']";
    final static String FILLEMPLOYEENAME = "empsearch_id";
    final static String SEARCHEPIM = "searchBtn";
    final static String RESETPIM = "resetBtn";
    final static String DELETEPIM = "btnDelete";

    /*---------------------------------------------------------------------------------------|
                                   EMPLOYEE INFORMATION
    ----------------------------------------------------------------------------------------*/
    @FindBy(how = How.XPATH, using = PIM)
    public static WebElement pim;
    @FindBy(how = How.ID, using = EMPLOYELIST)
    public static WebElement employeeList;
    @FindBy(how = How.XPATH, using = EMPLOYEEINFORMATION)
    public static WebElement employeeInformation;
    @FindBy(how = How.XPATH, using = EMPLOYEENAME)
    public static WebElement employeeName;
    @FindBy(how = How.XPATH, using = IDPIM)
    public static WebElement idPim;
    @FindBy(how = How.CSS, using = EMPLOYEESATUTS)
    public static WebElement employeeSatuts;
    @FindBy(how = How.XPATH, using = INCLUDE)
    public static WebElement include;
    @FindBy(how = How.CSS, using = SUPERVISORNAME)
    public static WebElement supervisorName;
    @FindBy(how = How.CSS, using = JOBTITLE)
    public static WebElement jobTitle;
    @FindBy(how = How.CSS, using = SUBUNIT)
    public static WebElement subUnit;
    @FindBy(how = How.ID, using = FILLEMPLOYEENAME)
    public static WebElement fillEmployeeName;
    @FindBy(how = How.ID, using = SEARCHEPIM)
    public static WebElement searchPim;
    @FindBy(how = How.XPATH, using = RESETPIM)
    public static WebElement resetPim;
    @FindBy(how = How.XPATH, using = DELETEPIM)
    public static WebElement deletePim;


    /*---------------------------------------------------------------------------------------|
                                    METHOD EMPLOYEE INFORMATION
      ----------------------------------------------------------------------------------------*/
    public void clickPim() {
        pim.click();
    }

    public void clickEmployeeList() {
        employeeList.click();
    }

    public void employeeInformation(String text) {
        String employeeinformation = employeeInformation.getText();
        //System.out.println(employeeinformation);
        Assert.assertTrue(employeeinformation.contains(text));
    }

    public void employeName(String text1) {
        String employename = employeeName.getText();
        System.out.println(employename);
        Assert.assertTrue(employename.contains(text1));

    }

    public void idPim(String text2) {
        String idpm = idPim.getText();
        System.out.println(idpm);
        Assert.assertTrue(idpm.contains(text2));
    }

    public void employeeStatusPim(String text3) {
        String satutspim = employeeSatuts.getText();

        System.out.println(satutspim);
        Assert.assertTrue(satutspim.contains(text3));
    }

    public void includePim(String text4) {
        String includepim = include.getText();
        System.out.println(includepim);
        Assert.assertTrue(includepim.contains(text4));
    }

    public void supervisorNamePim(String text5) {
        String supervisoname = supervisorName.getText();
        Assert.assertTrue(supervisoname.contains(text5));
    }

    public void jobTiltePIM(String text6) {
        String jobtitlename = jobTitle.getText();
        Assert.assertTrue(jobtitlename.contains(text6));
    }

    public void subUnitPIM(String text7) {
        String subunnitname = subUnit.getText();
        Assert.assertTrue(subunnitname.contains(text7));

    }

    public void fillEmployeeName(String name) {
        fillEmployeeName.clear();
        fillEmployeeName.sendKeys(name);

    }

    ;

    public void clickSearchPim() {

        searchPim.click();
    }

    public void clickResetPim() {
        resetPim.click();
    }

    public void clickDeletePim() {
        deletePim.click();
    }


}
