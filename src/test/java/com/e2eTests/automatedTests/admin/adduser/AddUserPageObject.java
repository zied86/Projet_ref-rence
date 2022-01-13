package com.e2eTests.automatedTests.admin.adduser;

import com.e2eTests.automatedTests.utilis.BasePage;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

public class AddUserPageObject extends BasePage {

	private static final String HOME_PAGE_URL = "";

	public AddUserPageObject() {
		PageFactory.initElements(driver, this);
	}

	/*
	 * public void goToHomePage() { driver.get(HOME_PAGE_URL); wait.forLoading(5); }
	 */

	/*
	 * -----------------------------------------------------------------------------
	 * ------------------------------------
	 */
	final static String ADMIN = "menu_admin_viewAdminModule";
	final static String ADD = "btnAdd";
	final static String USERTYPE = "systemUser_userType";
	final static String EMPLOYEE_NAME = "systemUser_employeeName_empName";
	final static String EMPLOYEE_NAMEID = "systemUser_employeeName_empName";
	final static String USERNAME = "systemUser_userName";
	final static String STATUS = "systemUser_status";
	final static String PASSWORD = "systemUser_password";
	final static String CONF_PASSWORD = "systemUser_confirmPassword";
	final static String EmName = "frmSystemUser";
	final static String SAVE = "btnSave";
	final static String SuccessSaved = "successDataModal";

	/*
	 * -----------------------------------------------------------------------------
	 * ------------------------------------
	 */
	@FindBy(how = How.ID, using = ADMIN)
	public static WebElement clickAdmin;
	@FindBy(how = How.ID, using = ADD)
	public static WebElement btnAdd;
	@FindBy(how = How.ID, using = USERTYPE)
	public static WebElement clickUserType;
	@FindBy(how = How.ID, using = EMPLOYEE_NAME)
	public static WebElement ClickEMPLOYEENAME;
	@FindBy(how = How.ID, using = EMPLOYEE_NAMEID)
	public static WebElement adminA;
	@FindBy(how = How.ID, using = EmName)
	public static WebElement EMNAME;
	@FindBy(how = How.ID, using = USERNAME)
	public static WebElement userName;
	@FindBy(how = How.ID, using = STATUS)
	public static WebElement status;
	@FindBy(how = How.ID, using = PASSWORD)
	public static WebElement passWord;
	@FindBy(how = How.ID, using = CONF_PASSWORD)
	public static WebElement confPassWord;
	@FindBy(how = How.ID, using = SAVE)
	public static WebElement save;
	@FindBy(how = How.ID, using = SuccessSaved)
	public static WebElement successSaved;

	/*
	 * -----------------------------------------------------------------------------
	 * ------------------------------------
	 */
	public void clickadmin() {
		clickAdmin.click();
	}

	public void clickbtnadd() {
		btnAdd.click();
	}

	public void selectDropDownListByValue(WebElement clickUserType, String value) {
		Select dropDownList = new Select(clickUserType);
		dropDownList.selectByValue(value);
	}

	public void clikemployeeName() {
		adminA.click();
	}

	public void clickEmpName() {
		EMNAME.click();
	}

	public void clikemployeeNameS(String name) {
		adminA.sendKeys(name);
	}

	public void clickUserName(String name1) {
		userName.sendKeys(name1);
		userName.getText();
	}

	public void selectDropDownListByValue1(WebElement status, String value) {
		Select dropDownList = new Select(status);
		dropDownList.selectByValue(value);
	}

	public void passWord(String name) {
		passWord.sendKeys(name);
	}

	public void confPassWord(String name) {
		confPassWord.sendKeys(name);
	}

	public void save() {
		WebDriverWait wait = new WebDriverWait(driver, 10);
		WebElement btnSave;
		btnSave = wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//input[@class='addbutton']")));
		btnSave.click();
	}

}