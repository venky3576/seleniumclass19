package stepdefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class StepDefinition {

	WebDriver driver;
	
	@Given("User in login page")
	public void user_in_login_page() {
		System.setProperty("webdriver.chrome.driver","\\C:\\Driver\\chromedriver.exe\\");
	    driver = new ChromeDriver();
        
        driver.get("http://techfios.com/test/billing/?ng=login/");
        
        //driver.manage().window().maximize(); //maximizes window size
        driver.manage().deleteAllCookies(); //deletes cookies
        driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS); //amount of time driver will wait for page to load
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	}

	@Then("User enter \"(.*)\" and \"(.*)\"")
	public void user_enter_user_name_and_password(String username,String password) {
		driver.findElement(By.id("username")).sendKeys(username);
        driver.findElement(By.name("password")).sendKeys(password);

	}

	@Then("User click Signin button")
	public void user_click_Signin_button() {
		driver.findElement(By.xpath("//button[@type=\"submit\"]")).click();
	}

	@Then("Verify user login successfully")
	public void verify_user_login_successfully() {
	  driver.findElement(By.xpath("//h2[text()='Dashboard ']")).isDisplayed();
	  driver.quit();
	}
	
	
	
}
