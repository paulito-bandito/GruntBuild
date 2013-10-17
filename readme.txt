===========================
SIMPLE GRUNT BUILD PROJECT
===========================

The aim of this project is to get a current useful build environment to use in Node JS to automate alot of tedious things we don't want to manually do. Alot of examples exist for versions before 0.9, and this one bridges those gaps. The versions of Grunt we are using are:

	* Command line: 	grunt-cli v0.1.9
	* Grunt Module: 	grunt v0.4.1

The example source code contained in this project is a simple project that stresses the separation of code into different namespaces, AND illustrates how to use Object inheritance in Javascript.

Steps to set up the build:
1.) Install node.js from the website, install the binary installer. 
2.) open up a command line and navigate to the project base (that this readme.txt file exists in)
3.) type in the command "npm install" to install all the dependencies specified in the "./package.json" file. 
4.) In the "./package.json" specify the new name of your project. 
	-	Note that this will create minified CSS and html with the same name. 
5.) Remove the content HTML and Javascript in the src/index.html and src/js/workspace.js to use your own code.


Other commands you can use:
- "grunt spell" This will check your spelling in your javascript and html files. 