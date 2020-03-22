package stepDefinitions;

import org.testng.Assert;

import com.qa.base.BaseClass;
import com.qa.pages.BasePage;
import com.qa.pages.HomePage;

import cucumber.api.java.en.*;

public class CreditCardPayment_StpDef extends BasePage{

	
	HomePage homePage = new HomePage();
	
	@Given("^user is in home page and title of the page is \"([^\"]*)\"$")
	public void user_is_in_home_page_and_title_of_the_page_is(String title) throws Throwable {
		
		APP_LOGS.info("Setup job completed");
		boolean flag=homePage.validateTitle(title);
		Assert.assertEquals(flag, true);
	}

	@Then("^click on BUY NOW button$")
	public void click_on_BUY_NOW_button() throws Throwable {
	   homePage.clickOnBuyNowButton();
	}

	@Then("^click on CHECKOUT button$")
	public void click_on_CHECKOUT_button() throws Throwable {
	   homePage.clickCheckOutButton();
	}

	@Then("^click on CONTINUE button$")
	public void click_on_CONTINUE_button() throws Throwable {
		homePage.clickContinueButton();
	}

	@Then("^verify credit card option is visible$")
	public void verify_credit_card_option_is_visible() throws Throwable {
	    boolean flag=homePage.verifyCreditCardOption();
	    Assert.assertEquals(flag, true);
		
	}

	@Then("^click on credit card$")
	public void click_on_credit_card() throws Throwable {
	    	
		homePage.selectCreditCardOption();
	}

	@Then("^enter card number \"([^\"]*)\"$")
	public void enter_card_number(String cardNumber) throws Throwable {
        homePage.enterCardNumber(cardNumber);	    
	}

	@Then("^enter date \"([^\"]*)\"$")
	public void enter_date(String date) throws Throwable {
	    homePage.enterDate(date);
	}

	@Then("^enter CVV \"([^\"]*)\"$")
	public void enter_CVV(String cvv) throws Throwable {
	    homePage.enterCVV(cvv);
	}

	@Then("^click PAY NOW button$")
	public void click_PAY_NOW_button() throws Throwable {
	   homePage.clickPayNowButton();
	}
	
	@Then("^verify payment page appears$")
	public void verify_payment_page_appears() throws Throwable {
	    boolean flag=homePage.verifyPaymentPage();
	    Assert.assertEquals(flag, true);
	}


	@Then("^enter password \"([^\"]*)\"$")
	public void enter_password(String pwd) throws Throwable {
	    homePage.enterPassword(pwd);
	}


	@Then("^click OK button$")
	public void click_OK_button() throws Throwable {
	    homePage.clickOKButton();
	}

	@Then("^verify message \"([^\"]*)\"$")
	public void verify_message(String msg) throws Throwable {
	   String txtMsgFromPage=homePage.getSuccessMsg();
	   Assert.assertEquals(txtMsgFromPage, msg);
	}

	@Then("^close browser$")
	public void close_browser() throws Throwable {
	  homePage.close_browser();
	}

	
}
