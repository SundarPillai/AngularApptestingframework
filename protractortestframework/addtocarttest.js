describe('Add item to cart', function() {
	
	var cart=require("../protractortest/pages/addToCart.js")
	var obj=require("../protractortest/pages/Login.js")
  

	
  it('Verify item is added to cart successfully', function() {
	browser.ignoreSynchronization = true;
	browser.get('http://automationpractice.com/');
	browser.sleep(10000);
	browser.executeScript('window.scrollTo(0,700);').then(function () {
		
//element(by.xpath("//*[@id='homefeatured']/li[4]/div/div[1]/div/a[1]/img")).click().then(function () {
	browser.sleep(10000);
	obj.addtocartbutton.click(); 	
	//browser.executeScript('window.scrollTo(0,500);').then(function () {
		//browser.sleep(10000);
		//element(by.xpath("//*[@id='add_to_cart']/button")).click();
		
		//obj.addtocartbutton.click(); 
		//element(by.xpath("//*[@id='group_1']")).click();
		//selectvalue.click();
	})
		})
		})
  //});
//});



  
