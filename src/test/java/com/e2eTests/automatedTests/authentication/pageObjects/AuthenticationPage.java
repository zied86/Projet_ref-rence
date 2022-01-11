package com.e2eTests.automatedTests.authentication.pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import com.e2eTests.automatedTests.utilis.BasePage;

public class AuthenticationPage extends BasePage{
	
	   private static final String HOME_PAGE_URL = "https://opensource-demo.orangehrmlive.com/";

	    public AuthenticationPage() {
	        PageFactory.initElements(driver, this);
	    }

	    public void goToHomePage(){
	        driver.get(HOME_PAGE_URL);
	        wait.forLoading(5);
	    }

	/* Locators */
	final static String USER_NAME_ID = "txtUsername";
	final static String USER_PASSWORD_ID = "txtPassword";
	final static String BTN_LOGIN_ID = "btnLogin";
	final static String MESSAGE_TXT = "welcome";

	/* @FindBy */
	@FindBy(how=How.ID, using=USER_NAME_ID)
	public static WebElement userName;
	@FindBy(how=How.ID, using=USER_PASSWORD_ID)
	public static WebElement userPassword;
	@FindBy(how=How.ID, using=BTN_LOGIN_ID)
	public static WebElement btnLogin;
	@FindBy(how=How.ID, using=MESSAGE_TXT)
	public static WebElement message;

	/* Methods */
public void fillUserName(String name) {userName.sendKeys(name);}
	public void fillPassword(String password) {userPassword.sendKeys(password);}
	public void clickBtnLogin() {btnLogin.click();
	}

	public void loginPage(String name, String password) {
		userName.sendKeys(name);
		userPassword.sendKeys(password);
		btnLogin.click();
	}

}
