package MyRunner;

import org.junit.runner.RunWith;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import cucumber.api.testng.CucumberFeatureWrapper;
import cucumber.api.testng.TestNGCucumberRunner;
import cucumber.runtime.model.CucumberFeature;

	@RunWith(Cucumber.class)
	@CucumberOptions(
			features = ".\\src\\main\\java\\Features", //the path of the feature files
			
			glue={"stepDefinitions"}, //the path of the step definition files
			
			plugin= {"pretty","html:test-outout", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"}, //to generate different types of reporting
			
			monochrome = true, //display the console output in a proper readable format
			
			strict = true, //it will check if any step is not defined in step definition file
			
			dryRun = false //to check the mapping is proper between feature file and step def file
					
			)
	 
	public class TestRunner {
		 
		private TestNGCucumberRunner testNGCucumberRunner;

		@BeforeClass(alwaysRun = true)
		public void setUpClass() throws Exception {
		    testNGCucumberRunner = new TestNGCucumberRunner(this.getClass());
		}

		@Test(groups = "cucumber scenarios", description = "Runs Cucumber Scenarios", dataProvider = "scenarios")
		public void scenario(CucumberFeatureWrapper cucumberFeature) throws Throwable{
		testNGCucumberRunner.runCucumber(cucumberFeature.getCucumberFeature());
		}
		@DataProvider
		public Object[][] scenarios() {
		    return testNGCucumberRunner.provideFeatures();
		}

		@AfterClass(alwaysRun = true)
		public void tearDownClass() throws Exception {
		    testNGCucumberRunner.finish();
		}
	
	}
	
	
