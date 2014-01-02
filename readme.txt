===========================
SIMPLE GRUNT BUILD PROJECT
Author:	Paul Walter
Date: 	Dec 24 2013
===========================

-------------------------------------------
		TABLE OF CONTENTS
-------------------------------------------
1.) Overview
2.) Steps to Build
3.) Availble Commands
4.) Debug Tips


-------------------------------------------
		1.) OVERVIEW
-------------------------------------------
The aim of this project is to get a current useful build environment to use in Node JS to automate a lot of tedious things we don't want to manually do. A lot of examples exist for versions before 0.9, and this one bridges those gaps. 

The versions of "Grunt Command line" and "Grunt" we are using are (both are needed):

	* Command line: 	grunt-cli v0.1.9
	* Grunt Module: 	grunt v0.4.1

The example source code contained in this project is a simple project that stresses the separation of code into different namespaces, AND illustrates how to use Object inheritance in JavaScript.



-------------------------------------------
		2.) STEPS TO BUILD
-------------------------------------------
1.) Download and install the Node.js binary from their website
		- If you are using Windows you may need to restart your machine after installing so that the PATH vars were set. 
		- To test this, open a command line and type in "npm" or "node" and you should see recognition. 
2.) Install the "Grunt Command Line Tools" 
		- To do this, type into the command line "npm install -g grunt-cli"
		- The "-g" in that string will install it globally, which means it will exist outside a particular project. 
		- "Npm" stands for "Node Package Manager". 
2.) Navigate to this project base (that this readme.txt file exists in)
		- Via Command Line. 
3.) Type in the command "npm install" 
		- This will install all the dependencies specified in the "./package.json" file. 
4.) Type in "grunt", watch the build process occur. 
		- check out the ./Gruntfile.js, at the bottom you will see where tasks are registered and the pipeline is created. 
5.) Type in "grunt server", and you should see server notification occur. 
4.) Navigate to "localhost:9001", and you should see the sample application.



-------------------------------------------
		3.) AVAILABLE COMMANDS
-------------------------------------------
1.) "grunt", this will run the default build task (minify, uglify, package, deploy to the "build" folder.)
2.) "grunt server", this will run your application on a local server.
3.) "grunt test" This will check your spelling in your JavaScript and html files, run some unit tests (these are very trivial at the moment), 
4.) "grunt doc" This will generate YUI docs into a dynamically created folder in the project base called "doc". 
5.) "grunt watch", this will watch all the files, and as soon as you make a change and press save, it will pipe the whole project through the "grunt" task.

-------------------------------------------
		4.) DEBUG TIPS
-------------------------------------------
By default, this build script minifies and uglifies (renames vars to something short and obscure) everything. This is problematic when you are debugging and you get an error message specifying the line number. When you need to debug use the following strategy to make the outputted javascript legible:

1.) Open the ./Gruntfile.js
2.) You will see the following code snippet:

	uglify: {
	      options: {
	        banner: '/*! Project name: \"<%= pkg.name %>\", version # <%= pkg.version %>\n Created on <%= grunt.template.today("dddd, mmmm dS, yyyy, h:MM:ss TT") %> */\n',
	        mangle: true,     // rename all the variables to non sensical data. 
	        compress: true,
	        beautify: false,  // set this to true for debugging. It will make it human readable. 
	        report: 'none'    // this will GZip the file decreasing the size SIGNIFICANTLY
	      },
	      build: {
	        src: '<%= pkg.pathBuild %>js/*.js',
	        dest: '<%= pkg.pathBuild %>js/<%= pkg.name %>.min.js'
	      }
	    },
3.) Change the 'mangle' attribute to have a value of 'false'
4.) Change the 'beautify' attribute to have a value of 'true'
5.) Then you can find out which line your JavaScript errors are associated with.
