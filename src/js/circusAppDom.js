circusAppDom = {

	mediaPath : "media/", // what folder the image resources exist at.
	imgBigPostfix :"_big.png", //This is going to be the string that get's appended to the end of the image for large images.
	imgSmallPostfix : "_sm.png", //This is going to be the string that get's appended to the end of the image for small images.


	/**
		Animal is the super class that contains images that will be swaped

		<p>Note, that this object will insert a reference inside it'self into it;s two associated images. </p>

		@param name Is the name of the animal
		@param sound Is the string representation of what noise the animal makes.
		@param imageBaseName Is the part of the file name that will be used. For 
				example, if 'bear' is inputted, then this class will generate a 'bear_sm.png', or a 'bear_lg.png'.
	*/
	Animal: function(a_name, a_sound, a_imageBaseName)
	{
		var name = a_name; // The name of the animal
		var sound = a_sound; //The sound that the animal makes.
		var imageBaseName = a_imageBaseName;
		
		var imgSmall = circusAppDom.mediaPath + imageBaseName + circusAppDom.imgSmallPostfix;

		var imgBig = circusAppDom.mediaPath + imageBaseName + circusAppDom.imgBigPostfix;

		this.makesSound = function(){
			return sound;
		};

		this.getName = function(){
			return name;
		};

		this.getImgBig = function()
		{
			return imgBig;
		};

		this.getImgSmall = function()
		{
			return imgSmall;
		};
	},

	Bear: function(name)
	{
		var thisBear = Object.create(new circusAppDom.Animal(name, "rarrrr", "bear"));
		thisBear.hibernate = function(){
			return name + " sleeps for the winter";
		};
		
		thisBear.type = function(){
			return "bear";
		};

		return thisBear;
	},

	Monkey: function(name)
	{
		var thisMonkey = Object.create(new circusAppDom.Animal(name, "ohhh haaa", "monkey"));
		
		thisMonkey.eatBanana = function(){
			return name + " eats a banana";
		};
		
		thisMonkey.type = function(){
			return "monkey";
		};

		return thisMonkey;
	},

	Pig: function(name)
	{
		var thisPig = Object.create(new circusAppDom.Animal(name, "oink", "pig"));
		
		thisPig.eatSnacks = function(){
			return name + " eats some snacks";
		};
		
		thisPig.type = function(){
			return "pig";
		};

		return thisPig;
	},
};