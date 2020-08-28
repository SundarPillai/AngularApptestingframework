# AngularApptestingframework
This protractor framework helps to automate applications built using Angular JS.

To use this framework, Download this framework and save it any drive.

To run this framework, Please install Node.js,Protractor, selenium and java.You can follow the steps given in https://www.protractortest.org/#/
To install protractor --> npm install -g protractor
To install selenium webdriver -->webdriver-manager update
To start selenium server-->webdriver-manager start
Open command prompt in Windows and Terminal in MAC OS, Go to project saved folder and run the commands to complete Installation.

Once Installation is completed you will see a folder named node_modules inside your project folder.Since you gave the project path while installing.
This folder contains all the libraries downloaded from npm. 

Project structure:

DataProvider - Contains Input data required for the application login, webpages
Node_Modules - Contains all the Libraries downloaded from npm.
Pages - Contains locators for different webpages
Tests - Contains actual jasmine test files for logging in, Choose product and adding product to cart as of now.
Package.json - Contains dependencies like protractor info,Jasmine Html reporter, Jasmine data provider
Config.js --> This file drives the project, like it contains browser details in capabilities,Seleniumaddress, Specs to run, Reporting details, OnPrepare,Oncomplete functions
Spec.js -->Contains the actual test case to be executed.


NOTE: In the next release, we can run this framework in chrome headless mode in a docker container, For that we need to have docker image created with all the dependencies installed.
I will add a Docker file and yml file and create a docker image which contains all the dependencies. 
we can run this framework in chrome headless mode in a docker container.
