package com.qa.pages;

import org.openqa.selenium.support.PageFactory;

import com.qa.base.BaseClass;

public class BasePage extends BaseClass{

	public BasePage() {
		PageFactory.initElements(driver, this);
		initialize();
	}
	
}
