/**
	@module circusAppDomGui
*/
circusAppDomGui = {

	animals: [],

	/**
		@method addAnimal
	*/
	addAnimal : function()
	{
		var animal = "";

		while ((animal != "bear") && (animal != "pig") && (animal != "monkey"))
		{
			animal = prompt("Choose animal (bear, pig or monkey): ");
		}
		
		var name = prompt("Animal name: ");
		var newAnimal = null;
		
		switch(animal)
		{
			case "bear":
				newAnimal = new circusAppDom.Bear(name);
				break;
			case "pig":
				newAnimal = new circusAppDom.Pig(name);
				break;
			case "monkey":
				newAnimal = new circusAppDom.Monkey(name);
				break;
		}
		
		//check to see if it exists
		if(newAnimal)
		{
			// add it to the array
			circusAppDomGui.animals.push( newAnimal );

			// get a hold of the target. 
			var aList = document.getElementById("animalList");

			// add event listeners to it's images.
			var imgRef = new Image();
			imgRef.src = newAnimal.getImgSmall();

			// add a reference to this animal so we can handle the roll in and roll out behavior.
			imgRef.animal = newAnimal;

			// add handlers that will swap the big and small images. 
			imgRef.addEventListener("mouseover", circusAppDomGui.imageToggleSrc, false);
			imgRef.addEventListener("mouseout", circusAppDomGui.imageToggleSrc, false);


			// create a div to put inside
			var theDiv = document.createElement("li");
			var textNode = document.createTextNode(newAnimal.getName());
			theDiv.appendChild(imgRef);
			theDiv.appendChild(textNode);
			aList.appendChild(theDiv);

			circusAppDomGui.log( "Animal Added: It is a " + newAnimal.getName());
		}
	},

	/**
		This will get called with the image is rolled over. 
	*/
	imageToggleSrc: function(e)
	{
		console.log("rollover" + e);

		// note that this function utilizes the reference that the Animal base 
		// class will insert into the image to reference itself. 
		var img = e.target;

		if(img.animal)
		{
			var referencedAnimal = img.animal;
			var newImgSrc = null;

			if(img.src.indexOf(referencedAnimal.getImgSmall()) != -1)
			{
				newImgSrc = referencedAnimal.getImgBig();
			}else{
				newImgSrc = referencedAnimal.getImgSmall();
			}
			
			img.src = newImgSrc;

		}else{
			circusAppDomGui.log("No 'animal' property found on the source image. Are you sure you are instantiating an Animal?");
		}
		

	},

	/**
		This is used to return the sound the song that the animals make. 
	*/
	groupSing : function()
	{
		var msgToLog = "Group Song! ";

		for (var i=0; i<circusAppDomGui.animals.length; i++)
		{
			msgToLog += circusAppDomGui.animals[i].getName() + " goes " + circusAppDomGui.animals[i].makesSound() + "! ";
		}
		circusAppDomGui.log(msgToLog);
	},

	/**
		This function is to make sure the students know how to use a switch statement. 
	*/
	groupTricks : function()
	{
		var msgToLog = "Group Tricks! ";
		for (var i=0; i<circusAppDomGui.animals.length; i++)
		{
			switch(circusAppDomGui.animals[i].getType())
			{
				case circusAppDom.Bear:
					msgToLog += circusAppDomGui.animals[i].hibernate();
					break;
				case circusAppDom.Pig:
					msgToLog += circusAppDomGui.animals[i].eatSnacks();
					break;
				case circusAppDom.Monkey:
					msgToLog += circusAppDomGui.animals[i].eatBanana();
					break;
				default:
					break;
			}
			msgToLog += ", ";

		}

		circusAppDomGui.log(msgToLog);
	},

	log : function(msg)
	{
		var ul = document.getElementById("log");

		var theLi = document.createElement("li");
		var textNode = document.createTextNode(msg);
		theLi.appendChild(textNode);
		ul.appendChild(theLi);
	},
};