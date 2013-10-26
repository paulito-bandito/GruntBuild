===========================
SIMPLE GRUNT BUILD PROJECT
Author:	Paul Walter
Date: 	Oct 24 2013
===========================

The aim of this project is to get a current useful build environment to use in Node JS to automate alot of tedious things we don't want to manually do. Alot of examples exist for versions before 0.9, and this one bridges those gaps. 

The versions of "Grunt Command line" and "Grunt" we are using are (both are needed):

	* Command line: 	grunt-cli v0.1.9
	* Grunt Module: 	grunt v0.4.1

The example source code contained in this project is a simple project that stresses the separation of code into different namespaces, AND illustrates how to use Object inheritance in Javascript.

Steps to set up the build:
1.) Install node.js from the website, install the binary installer. 
2.) Open up a command line and navigate to the project base (that this readme.txt file exists in)
3.) Type in the command "npm install" to install all the dependencies specified in the "./package.json" file. 
4.) Type in "grunt default" so that the default task will be triggered, and the project solution will be built. 
5.) Navigate to the build folder that is generated, and open the index file in the browser.


Other commands you can use:
- "grunt test" This will check your spelling in your javascript and html files, run some unit tests (these are very trivial at the moment), 
- "grunt doc" This will generate YUI docs into a dynamically created folder in the project base called "doc". 