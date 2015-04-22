var paperkit = new Paperkit(); // Instantiate Paperkit on a variable of your choice
window.addEventListener('load', function(){
	paperkit.initListener(function(){
		paperkit.fab.addEventListener('click', function(e){
			console.log(e.clientX,e.clientY);
		});
		var title = document.getElementById('title');
		paperkit.content.addEventListener('scroll', function(){
			console.log(paperkit.content.scrollTop);
			if (paperkit.content.scrollTop > 0) {
				title.style.marginTop = '0';
			} else {
				title.style.marginTop = '56px';
			}
		});
	});
	paperkit.init(); // Initialize Paperkit on window load
	rekt.pre();
});

function closeShare(){
	transition.morphBack();
}

function getRekt(e){
	transition.morph(e, false, function(){
		var bigfab = document.getElementById('md-morph');
		bigfab.style.zIndex = 4500;
	});
	rekt.get(false,function(){
		var div = document.getElementById("md-morph");
		var paper = document.createElement('md-paper');
		paper.setAttribute('md-width','x10');
		paper.setAttribute('md-color','white');
		paper.setAttribute('md-shadow','shadow-2');
		paper.style.position = 'absolute';
		paper.style.borderRadius = '2px';
		paper.style.top = '50%';
		paper.style.left = '50%';
		paper.style.transform = 'translate(-50%,-50%)';

		var toolbar = document.createElement('md-toolbar');
		toolbar.setAttribute('md-color','indigo');
		toolbar.setAttribute('md-fill','indigo-900');
		var row = document.createElement('md-row');
		var space = document.createElement('md-space');
		var iconToolbar = document.createElement('md-icon-button');
		iconToolbar.setAttribute('md-image','icon:close');
		iconToolbar.setAttribute('md-action','custom: closeShare');
		row.appendChild(space);
		row.appendChild(iconToolbar);
		toolbar.appendChild(row);
		paper.appendChild(toolbar);

		var text = document.createElement('span');
		text.setAttribute('md-typo','display-1');
		text.setAttribute('md-position','text-center-x');
		text.setAttribute('md-padding','');
		text.textContent = "I don't regret anything. Did you enjoy?";
		text.style.display = "block";
		paper.appendChild(text);

		var list = document.createElement('md-list');

		var plus = document.createElement('md-tile');
		plus.setAttribute('md-font-color','red');
		plus.setAttribute('md-fill','red');
		plus.setAttribute('md-action','link-out: https://plus.google.com/share?url=http://rekt.daniguardiola.me/');
		var iconGp = document.createElement('md-icon');
		iconGp.setAttribute('md-image','icon:google-plus');
		plus.appendChild(iconGp);
		var textGp = document.createElement('md-text');
		textGp.textContent = 'Google Plus';
		plus.appendChild(textGp);
		list.appendChild(plus);

		var twitter = document.createElement('md-tile');
		twitter.setAttribute('md-font-color','blue');
		twitter.setAttribute('md-fill','blue');
		twitter.setAttribute('md-action','link-out: https://twitter.com/home?status=Get%20your%20webpage%20%23rekt%20with%20%0A%23rektJS,%20the%20first%20useless%20framework%20not%20suitable%20for%20epileptics%0ADemo%20%26%20info%20http://goo.gl/d4lhxA%20%23GetRekt%20RT');
		var iconTw = document.createElement('md-icon');
		iconTw.setAttribute('md-image','icon:twitter');
		var textTw = document.createElement('md-text');
		textTw.textContent = 'Twitter';
		twitter.appendChild(iconTw);
		twitter.appendChild(textTw);
		list.appendChild(twitter);

		var facebook = document.createElement('md-tile');
		facebook.setAttribute('md-font-color','indigo');
		facebook.setAttribute('md-fill','indigo');
		facebook.setAttribute('md-action','link-out: https://www.facebook.com/sharer/sharer.php?u=http://rekt.daniguardiola.me/');
		var iconFb = document.createElement('md-icon');
		iconFb.setAttribute('md-image','icon:facebook');
		facebook.appendChild(iconFb);
		var textFb = document.createElement('md-text');
		textFb.textContent = 'Facebook';
		facebook.appendChild(textFb);
		list.appendChild(facebook);

		var logo = document.createElement('img');
		logo.setAttribute('src','sunglasses.png');

		var box = document.createElement('div');
		box.setAttribute('md-width','full');
		box.setAttribute('md-flex','display');

		box.appendChild(list);
		box.appendChild(document.createElement('md-space'));
		box.appendChild(logo);
		paper.appendChild(box);
		div.appendChild(paper);
		paperkit.initElement(paper);
	});
}

function downloadRekt() {
  var link = document.createElement("a");
  link.download = "rekt.js";
  link.href = "rekt.js";
  link.click();
}