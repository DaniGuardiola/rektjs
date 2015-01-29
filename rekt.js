var rekt = {
	get: function(options){
		rekt.pre(function(options){
			var nextTimeOut = 0;
			if (!options || !options.cantDealWithIt) {
				rekt.sg.style.top = '50%';
				rekt.sg.style.transform = 'translate(-50%,-50%)';
				nextTimeOut = 500;
			}
			setTimeout(function(){
				rekt.startm8();
			},nextTimeOut);
		},options);
	},
	pre: function(then, options){
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
				rekt.sg.style.top = '-50%';
				rekt.sg.style.left = '50%';
				rekt.sg.style.transform = 'translate(-50%,0)';
				rekt.sg.style.transition = 'top 0.5s, transform 0.25s';
				rekt.div.appendChild(rekt.sg);
			}
		}
		if (!options || !options.m8noPls) {
			if (!rekt.m8) {
				rekt.m8 = {};
				var m8s = [
					'omg get rekt',
					'u mad bro',
					'noscope loll',
					'SMOK EVR DAY'
				];
				var count = 0;
				[].forEach.call(m8s,function(mate){
					rekt.m8['shit'+count] = document.createElement('span');
					console.log(count);
					rekt.m8['shit'+count].style.fontFamily = 'serif';
					rekt.m8['shit'+count].style.fontSize = '30px';
					rekt.m8['shit'+count].style.position = 'fixed';
					rekt.m8['shit'+count].style.top = 0;
					rekt.m8['shit'+count].style.left = 0;
					rekt.m8['shit'+count].style.display = 'none';
					rekt.m8['shit'+count].style.zIndex = '9999';
					rekt.m8['shit'+count].textContent = mate;				
					rekt.div.appendChild(rekt.m8['shit'+count]);
					count = count + 1;
				});
			}
			setTimeout(function(){
				if (!options) {
					var options = false;
				}
				if(then){
					then(options);
				}
			},500);
		}
	},
	startm8: function(){
		rekt.m8on = true;
		rekt.him8();
	},
	stopm8: function(){
		rekt.m8on = false;
	},
	him8: function(){
		var transforms = [
			'rotate(50deg)',
			'rotate(-17deg)'
		];
		var top = [
			'80px',
			'30%'
		];
		var left = [
			'',
			'10%'
		];
		var right = [
			'25px',
			''
		];
		var bottom = [
			'',
			''
		];
		var chosenOne = Math.floor(Math.random()*rekt.objSize(rekt.m8));
		var chosenTwo = Math.floor(Math.random()*transforms.length);
		var mate = rekt.m8['shit'+chosenOne];
		mate.style.transform = transforms[chosenTwo];
		mate.style.top = top[chosenTwo];
		mate.style.left = left[chosenTwo];
		mate.style.right = right[chosenTwo];
		mate.style.bottom = bottom[chosenTwo];
		mate.style.display = '';
		setTimeout(function(){
			mate.style.display = 'none';
			setTimeout(function(){
				if (rekt.m8on) {
					rekt.him8();
				}
			},1500);
		},500);
	},
	div: false,
	m8on: false,
	sg: false,
	m8: false,
	objSize: function(obj) {
	    var size = 0, key;
	    for (key in obj) {
	        if (obj.hasOwnProperty(key)) size++;
	    }
	    return size;
	}
};