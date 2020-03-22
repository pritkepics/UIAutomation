package com.qa.base;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.events.EventFiringWebDriver;

import com.qa.util.TestUtils;
import com.qa.util.WebEventListener;

public class BaseClass {

	public static WebDriver driver;
	public static Properties prop = null;
	public static EventFiringWebDriver e_driver = null;
	public static WebEventListener eventListener = null;
	public static Logger APP_LOGS = null;

	public BaseClass() {

		prop = new Properties();
		try {
			FileInputStream ip = new FileInputStream(
					System.getProperty("user.dir") + "//src//main//java//com//qa//config//config.properties");

			prop.load(ip);

		} catch (FileNotFoundException e) {

			e.printStackTrace();
		} catch (IOException e) {

			e.printStackTrace();
		}

	}

	/**
	 * Initializes the browser ,drivers, or OS names according to the properties file values.
	 */
	
	public static void initialize() {

		APP_LOGS = LogManager.getLogger(BaseClass.class);

		String browserName = prop.getProperty("browser");
		
		if (browserName.equalsIgnoreCase("chrome")) {
			System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "\\lib\\chromedriver.exe");
			APP_LOGS.info("Chrome is selected as browser");
			driver = new ChromeDriver();
			
		} else if (browserName.equalsIgnoreCase("firefox")) {
			System.out.println("Firefox is selected as browser");
			System.setProperty("webdriver.gecko.driver", System.getProperty("user.dir") + "\\lib\\geckodriver");
			APP_LOGS.info("Firefox is selected as browser");
			driver = new FirefoxDriver();
			
		} else if (browserName.equalsIgnoreCase("ie")) {
			System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "\\lib\\IEDriverServer.exe");
			APP_LOGS.info("IE is selected as browser");
			driver = new InternetExplorerDriver();  
			
		} else {
			APP_LOGS.debug("No Browser got selected as browser");
		}

		
		// For logging event listener is registered

		e_driver = new EventFiringWebDriver(driver);
		eventListener = new WebEventListener();
		e_driver.register(eventListener);
		driver = e_driver;

		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(TestUtils.PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(TestUtils.IMPLICIT_WAIT, TimeUnit.SECONDS);

		driver.get(prop.getProperty("url"));
		APP_LOGS.debug("Completed inialization");
	}
	
	

}
