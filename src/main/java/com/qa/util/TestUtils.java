package com.qa.util;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.apache.poi.EncryptedDocumentException;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import com.qa.base.BaseClass;

public class TestUtils extends BaseClass{

	public static long PAGE_LOAD_TIMEOUT=20;
	public static long IMPLICIT_WAIT = 20;

	/**
	   * Takes screen shot where failure occured, and names it with current time in milliseconds
	   */
	  
	   public static void takeScreenShot() {
		   try {
		     File srcFile= ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
		     String currentDir=System.getProperty("user.dir");
		     
				FileUtils.copyFile(srcFile, new File(currentDir+ "/screenShots/"+System.currentTimeMillis()+".png"));
			} catch (Exception e) {
				
				APP_LOGS.error("Couldn't take screen shot:: "+e);
			}
	   }
	  
}
