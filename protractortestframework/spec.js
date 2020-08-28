describe('User login', function() {
	
	var obj=require("../protractortest/pages/Login.js")
	
  it('User should be logged in successfully', function() {
	browser.ignoreSynchronization = true;
    browser.get('http://automationpractice.com/');
    browser.sleep(2000);
    
    obj.signin.click();
    browser.sleep(2000);
    obj.username.sendKeys('sundaragile23@gmail.com');
   obj.password.sendKeys('sundarking');
    //var loginBtn = element(by.css(button[type = 'submit']));
    //loginBtn.click();
    obj.submitbutton.click();
    browser.sleep(5000);
  });
});