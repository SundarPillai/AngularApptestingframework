function login()
{
	
	this.signin=element(by.xpath("//*[@id='header']/div[2]/div/div/nav/div[1]/a"));
	this.username=element(by.id("email"));
	this.password=element(by.id("passwd"));
	this.submitbutton=element(by.id("SubmitLogin"));
	this.resulttext=element(by.xpath("//*[@id='columns']/div[1]/span[2]"));
	//this.addtocartbutton=element(by.id("add_to_cart"));
	this.addtocartbutton=element(by.xpath("//*[@type='submit' and @name='Submit']"));
	}

this.getURL=function()
{
	browser.get('http://automationpractice.com/');	
}


module.exports= new login();