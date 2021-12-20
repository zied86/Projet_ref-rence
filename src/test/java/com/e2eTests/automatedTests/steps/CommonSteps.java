package com.e2eTests.automatedTests.steps;

import java.io.FileInputStream;
import java.util.Properties;

import com.automatedTests.common.PropertiesHelpers;
import com.e2eTests.automatedTests.utilis.Setup;

import cucumber.api.java.en.Given;

public class CommonSteps {
	
	private static final String HOME_PAGE_URL = "https://opensource-demo.orangehrmlive.com/";
	public static Properties prop;

	/*
		@Given("^open application$")
		public void openApplication() throws Throwable {
			prop = new Properties();
			FileInputStream fis = new FileInputStream("src/test/resources/profiles/recette/profile.properties");
			prop.load(fis);
			Setup.driver.get(prop.getProperty("home.url"));

			//Setup.driver.get(HOME_PAGE_URL);
			//Setup.driver.get(PropertiesHelpers.getProperty("home.url"));
		}*/

	@Given("^Je me connecte sur l'application Orange HRM$")
	public void jeMeConnecteSurLApplicationOrangeHRM() throws Throwable {
		prop = new Properties();
		FileInputStream fis = new FileInputStream("src/test/resources/profiles/recette/profile.properties");
		prop.load(fis);
		Setup.driver.get(prop.getProperty("home.url"));
	}


	}

