// toDisplayNone
var index = document.querySelector('.index');
// toDisplayBlock
var web = document.querySelector('.web');
var soc = document.querySelector('.social');
var viz = document.querySelector('.visualization');
// addEventListener
var bik = document.querySelector('.bibiki');
var des = document.querySelector('.design');
var dev = document.querySelector('.development');
var mkt = document.querySelector('.marketing');

// toDisplayNoneBlock
des.addEventListener("click", function(){ //--- index/viz
	index.style.display = 'none';
	viz.style.display = 'block';	
})
dev.addEventListener("click", function(){ //--- index/web
	index.style.display = 'none';
	web.style.display = 'block';
})
mkt.addEventListener("click", function(){ //--- index/soc
	index.style.display = 'none';	
	soc.style.display = 'block';	
})
