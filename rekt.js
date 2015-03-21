var rekt = {
	get: function(options, callback){
		rekt.pre(function(options){
			var nextTimeOut = 0;
			if (!options || !options.cantDealWithIt) {
				rekt.sg.style.top = '50%';
				rekt.sg.style.transform = 'translate(-50%,-50%)';
				nextTimeOut = 1000;
			}
			if (nextTimeOut>250) {
				setTimeout(function(){
					rekt.sound.play();
					if (rekt.sound.duration > 0 && !rekt.sound.paused) {
					} else {
						rekt.soundButton(callback);
						setTimeout(function(){
							if (!rekt.cancelTime) {
								rekt.text.stop();
								rekt.bg.stop();
								rekt.img.stop();
								rekt.sg.style.opacity = '1';
								rekt.soundEnable.parentNode.removeChild(rekt.soundEnable);
								rekt.soundEnable = false;
								callback();
							} else {
								rekt.cancelTime = false;
							}
						},10000);
					}
					rekt.sound.addEventListener('ended',function(){
						rekt.text.stop();
						rekt.bg.stop();
						rekt.img.stop();
						rekt.sg.style.opacity = '1';
						callback();
					});
				}, nextTimeOut-250);
			}
			setTimeout(function(){
				rekt.sg.style.opacity = '0';
				rekt.text.start();
				rekt.bg.start();
				rekt.img.start();
			},nextTimeOut);
			setTimeout(function(){
				rekt.sg.style.top = '-50%';
				rekt.sg.style.transform = 'translate(-50%,0)';
			},3000);
		},options);
	},
	soundButton: function(callback){
		rekt.soundEnable = document.createElement('md-paper');
		rekt.soundEnable.style.width = "100%";
		rekt.soundEnable.style.position = "fixed";
		rekt.soundEnable.style.bottom = 0;
		rekt.soundEnable.style.left = 0;
		rekt.soundEnable.style.opacity = "0.5";
		rekt.soundEnable.style.textAlign = "center";
		rekt.soundEnable.style.padding = "22px 0";
		rekt.soundEnable.textContent = "TOUCH HER 4 DA DABSTEP";
 		rekt.soundEnable.setAttribute("md-typo", "display-1");
		rekt.soundEnable.setAttribute("md-color", "white");
		rekt.soundEnable.style.zIndex = '9999';
		rekt.soundEnable.addEventListener('click',function(){
			rekt.cancelTime = true;
			rekt.soundEnable.style.display = 'none';
			rekt.sound.play();
			rekt.sound.addEventListener('ended',function(){
				rekt.text.stop();
				rekt.bg.stop();
				rekt.img.stop();
				rekt.sg.style.opacity = '1';
				callback();
			});
		});
		rekt.div.appendChild(rekt.soundEnable);
	},
	pre: function(then, options){
		[].forEach.call(document.querySelectorAll('.rekt-illuminati'),function(el){
			console.log('HOLAAAAAAAAAAAAAAAAA'+el);
			el.addEventListener('mouseover',function(){
				rekt.illum.play();
			});
		});
		if (!rekt.div) {
			rekt.div = document.createElement('div');
			rekt.div.id = 'rekt';
			document.body.appendChild(rekt.div);
		}
		if (!options || !options.cantDealWithIt) {
			if (!rekt.sg) {
				rekt.sg = document.createElement('img');
				rekt.sg.setAttribute('src','http://rekt.daniguardiola.me/sunglasses.png');
				rekt.sg.style.width = '50%';
				rekt.sg.style.height = 'auto';
				rekt.sg.style.position = 'fixed';
				rekt.sg.style.zIndex = '9999';
				rekt.sg.style.top = '-50%';
				rekt.sg.style.left = '50%';
				rekt.sg.style.transform = 'translate(-50%,0)';
				rekt.sg.style.opacity = '1';
				rekt.sg.style.transition = 'top 0.75s, transform 0.5s, opacity 0.3s';
				rekt.div.appendChild(rekt.sg);
			}
		}
		if (!options || !options.noTextPls) {
			if (!rekt.text.el) {
				rekt.text.el = {};
				rekt.text.db = [
					'omg get rekt',
					'u mad bro',
					'noscope loll',
					'SMOK EVR DAY'
				];
				var count = 0;
				[].forEach.call(rekt.text.db,function(mate){
					rekt.text.el['shit'+count] = document.createElement('span');
					console.log(count);
					rekt.text.el['shit'+count].style.fontFamily = 'serif';
					rekt.text.el['shit'+count].style.fontSize = '30px';
					rekt.text.el['shit'+count].style.position = 'fixed';
					rekt.text.el['shit'+count].style.top = 0;
					rekt.text.el['shit'+count].style.left = 0;
					rekt.text.el['shit'+count].style.display = 'none';
					rekt.text.el['shit'+count].style.zIndex = '9999';
					rekt.text.el['shit'+count].textContent = mate;
					rekt.div.appendChild(rekt.text.el['shit'+count]);
					count = count + 1;
				});
			}
		}
		if (!options || !options.noBgPls) {
			if (!rekt.bg.el) {
				rekt.bg.el = document.createElement('div');
				rekt.bg.el.style.zIndex = 5000;
				rekt.bg.el.style.height = "100%";
				rekt.bg.el.style.width = "100%";
				rekt.bg.el.style.position = "fixed";
				rekt.bg.el.style.top = "0";
				rekt.bg.el.style.left = "0";
				rekt.bg.el.style.opacity = "0.5";
				rekt.bg.el.style.backgroundColor = "red";
				rekt.bg.el.style.display = "none";
				rekt.div.appendChild(rekt.bg.el);
			}
		}
		if (!options || !options.noImgPls) {
			if (!rekt.img.el) {
				rekt.img.el = {};
				rekt.img.db = [
					['snoop.gif','','300px'],
					['kid.gif','','300px'],
					['frog.gif','','60%'],
					['chicken.gif','','300px'],
					['techno-frog.gif','','60%'],
					['woman.gif','','300px']
				];
				var prefix = 'http://rekt.daniguardiola.me/';
				var count = 0;
				[].forEach.call(rekt.img.db,function(image){
					rekt.img.el['shit'+count] = document.createElement('img');
					rekt.img.el['shit'+count].style.zIndex = 9900;
					rekt.img.el['shit'+count].style.maxWidth = image[1];
					rekt.img.el['shit'+count].style.maxHeight = image[2];
					rekt.img.el['shit'+count].style.height = "auto";
					rekt.img.el['shit'+count].style.position = "fixed";
					rekt.img.el['shit'+count].style.bottom = "0";
					rekt.img.el['shit'+count].style.left = "20%";
					rekt.img.el['shit'+count].style.display = "none";
					rekt.img.el['shit'+count].setAttribute('src',prefix+image[0]);
					rekt.div.appendChild(rekt.img.el['shit'+count]);
					count = count + 1;			
				});
			}
		}
		if (!options || !options.noSoundPls) {
			if (!rekt.sound) {
				rekt.sound = document.createElement('audio');
				var source = document.createElement('source');
				source.setAttribute('src','http://rekt.daniguardiola.me/dubstep.mp3');
				source.setAttribute('type','audio/mp3');
				rekt.sound.appendChild(source);
				rekt.div.appendChild(rekt.sound);
			}
		}
		if (!options || !options.noSoundPls) {
			if (!rekt.illum) {
				rekt.illum = document.createElement('audio');
				var source = document.createElement('source');
				source.setAttribute('src','http://rekt.daniguardiola.me/ufo.mp3');
				source.setAttribute('type','audio/mp3');
				rekt.illum.appendChild(source);
				rekt.div.appendChild(rekt.illum);
			}
		}
		setTimeout(function(){
			if (!options) {
				var options = false;
			}
			if(then){
				then(options);
			}
		},500);
	},
	img: {
		db: false,
		cancelTime: false,
		el: false,
		on: false,
		start: function(){
			rekt.img.on = true;
			rekt.img.print();
		},
		stop: function(){
			rekt.img.on = false;
		},
		print: function(){
			console.log('Hola');
			var right = [
				'20%',
				'40%',
				'',
				''
			];
			var left = [
				'',
				'',
				'20%',
				'40%'
			];
			var chosenOne = Math.floor(Math.random()*rekt.objSize(rekt.img.el));
			var chosenTwo = Math.floor(Math.random()*left.length);
			var chosenThree = Math.floor(Math.random()*6)*250;
			var mate = rekt.img.el['shit'+chosenOne];
			mate.style.left = left[chosenTwo];
			mate.style.right = right[chosenTwo];
			mate.style.display = '';
			setTimeout(function(){
				mate.style.display = 'none';
			},1500);
			setTimeout(function(){
				if (rekt.img.on) {
					rekt.img.print();
				}
			},chosenThree+1750);
		}
	},
	text: {
		db: false,
		el: false,
		on: false,
		start: function(){
			rekt.text.on = true;
			rekt.text.print();
		},
		stop: function(){
			rekt.text.on = false;
		},
		print: function(){
			var transforms = [
				'rotate(50deg)',
				'rotate(-17deg)',
				'rotate(8deg)'
			];
			var top = [
				'80px',
				'30%',
				''
			];
			var left = [
				'',
				'10%',
				'19%'
			];
			var right = [
				'25px',
				'',
				''
			];
			var bottom = [
				'',
				'',
				'6%'
			];
			var colors = [
				'blue'
			];
			var chosenOne = Math.floor(Math.random()*rekt.objSize(rekt.text.el));
			var chosenTwo = Math.floor(Math.random()*transforms.length);
			var chosenThree = Math.floor(Math.random()*6)*150;
			var chosenFour = Math.floor(Math.random()*colors.length);
			var mate = rekt.text.el['shit'+chosenOne];
			mate.style.transform = transforms[chosenTwo];
			mate.style.top = top[chosenTwo];
			mate.style.left = left[chosenTwo];
			mate.style.right = right[chosenTwo];
			mate.style.bottom = bottom[chosenTwo];
			mate.style.display = '';
			setTimeout(function(){
				mate.style.display = 'none';
			},550);
			setTimeout(function(){
				if (rekt.text.on) {
					rekt.text.print();
				}
			},chosenThree+600);
		}
	},
	bg: {
		el: false,
		on: false,
		start: function(){
			rekt.bg.on = true;
			rekt.bg.print();
		},
		stop: function(){
			rekt.bg.on = false;
		},
		print: function(){
			var colors = [
				"red",
				"blue",
				"orange",
				"green",
				"yellow",
				"purple",
				"white"
			];
			var chosenOne = Math.floor(Math.random()*colors.length);
			rekt.bg.el.style.backgroundColor = colors[chosenOne];
			rekt.bg.el.style.display = '';
			setTimeout(function(){
				if (rekt.bg.on) {
					rekt.bg.print();
				} else {
					rekt.bg.el.style.display = 'none';
				}
			},250);
		}
	},
	div: false,
	soundEnable: false,
	sg: false,
	objSize: function(obj) {
	    var size = 0, key;
	    for (key in obj) {
	        if (obj.hasOwnProperty(key)) size++;
	    }
	    return size;
	}
};