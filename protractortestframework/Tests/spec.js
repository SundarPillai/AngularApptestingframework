describe('User login', function() {
	
	var obj=require("../protractortest/pages/Login.js")
	var data=require("../protractortest/DataProvider/DataProvider.js")
	
	
beforeEach(function(){
	   obj.getURL();
});
	
  it('User should be logged in successfully', function() {
	browser.ignoreSynchronization = true;
    //browser.sleep(2000);
    obj.signin.click();
    //browser.sleep(2000);
    obj.username.sendKeys(data.datadrive.username);
    obj.password.sendKeys(data.datadrive.password);
    obj.submitbutton.click();
    //browser.sleep(5000);
    expect(obj.resulttext.getText()).toContain(data.datadrive.resulttext);
    obj.resulttext.getText().then(function(text){	
    console.log(text);
  });
  });
});