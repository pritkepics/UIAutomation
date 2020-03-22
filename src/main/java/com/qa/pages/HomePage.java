package com.qa.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.qa.util.WebDriverUtils;

public class HomePage extends BasePage {

	// page factory

	@FindBy(xpath = "//a[contains(.,'BUY NOW')]")
	WebElement buyNowButton;

	@FindBy(xpath = "//div[@class='cart-checkout']")
	WebElement checkOutButton;

	@FindBy(xpath = "//a[@class='button-main-content'][contains(.,'Continue')]")
	WebElement continueButton;
	
	@FindBy(xpath = "//div[@class='list-title text-actionable-bold'][contains(.,'Credit Card')]")
	WebElement creditCardOption;

	@FindBy(xpath = "//input[@name='cardnumber']")
	WebElement cardNumber;
	
	@FindBy(xpath = "//input[@placeholder='MM / YY']")
	WebElement expiry;
	
	@FindBy(xpath = "//input[@inputmode='numeric']")
	WebElement CVV;
	
	@FindBy(xpath = "//a[@class='button-main-content'][contains(.,'Pay Now')]")
	WebElement payNowButton;
	
	@FindBy(xpath = "//h1[contains(.,'Issuing Bank')]")
	WebElement paymentTitle;
	
	@FindBy(xpath = "//input[@type='password']")
	WebElement password;
	
	@FindBy(xpath = "//button[@name='ok']")
	WebElement OKButton;
	
	@FindBy(xpath = "//div[@class='text-success text-bold'][contains(.,'Transaction successful')]")
	WebElement succMsg;
	
	@FindBy(xpath = "//span[contains(.,'Your card got declined by the bank')]")
	WebElement errMsg;
	
	public HomePage() {

		// This method will initialize all the above mentioned Page Factory variables
		// with this driver.
		super();
		PageFactory.initElements(driver, this);
	}

	/**
	 * Validates the title of the page
	 * 
	 * @return returns true or false depending upon the String match.
	 */

	public boolean validateTitle(String homePageTitle) {

		if (driver.getTitle().equals(homePageTitle)) {
			return true;
		}
		return false;
	}


	public void clickOnBuyNowButton() throws InterruptedException {

		WebDriverUtils.click(buyNowButton);

	}
		
   public void clickCheckOutButton() {
	    WebDriverUtils.waitForElementToBePresent(checkOutButton, 10);
	    WebDriverUtils.click(checkOutButton);
   }
   public void clickContinueButton() throws InterruptedException {
	   
	   
	   WebDriverUtils.switchToFrameByIndex(0);
	   WebDriverUtils.waitForElementToBePresent(continueButton, 10);
	   WebDriverUtils.click(continueButton);
  }
   
  public boolean verifyCreditCardOption() {
	  
	  WebDriverUtils.waitForElementToBePresent(creditCardOption, 10);
	  boolean result=WebDriverUtils.isElementPresent(creditCardOption);
	  return result;
  } 
  public void selectCreditCardOption() {
	  
	  
	  WebDriverUtils.click(creditCardOption);
  } 
   
  public void enterCardNumber (String crdNum) {
	  WebDriverUtils.setText(cardNumber, crdNum);
  }
	
  public void enterDate (String dt) {
	  WebDriverUtils.setText(expiry, dt);
  }
  public void enterCVV (String cvv) {
	  WebDriverUtils.setText(CVV, cvv);
  }
  
  public void clickPayNowButton() throws InterruptedException {
	  
	  WebDriverUtils.switchToFrameByIndex(1);
	  WebDriverUtils.click(payNowButton);
  }
  
  public boolean verifyPaymentPage() {
	  WebDriverUtils.switchToFrameByIndex(0);
	  WebDriverUtils.waitForElementToBePresent(paymentTitle,12);
	  boolean flag=WebDriverUtils.isElementPresent(paymentTitle);
	  return flag;
  }
 
  public void enterPassword(String pwd) {
	  WebDriverUtils.setText(password, pwd);
  }
  
  public void clickOKButton() {
	  WebDriverUtils.click(OKButton);
  }
  
  public String getSuccessMsg() throws InterruptedException {
	Thread.sleep(1000);  
	WebDriverUtils.switchToFrameByIndex(0);  
	String textMsg=null;
	
	  if (WebDriverUtils.isElementPresent(succMsg)) {
		   textMsg=WebDriverUtils.getText(succMsg);
	  }
	  else if (WebDriverUtils.isElementPresent(errMsg)) {
		  textMsg=WebDriverUtils.getText(errMsg);
	  }
	  else {
		  
	  }
	return textMsg;
  }
  
  public void close_browser() {
	  WebDriverUtils.closeBrowser();
  }
}
