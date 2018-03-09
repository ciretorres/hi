var index = document.querySelector('.index');
var cms = document.querySelector('.cms');
var smo = document.querySelector('.smo');
var wd = document.querySelector('.wd');

var wordpress = document.querySelector('.wordpress');
var marketing = document.querySelector('.marketing');
var development = document.querySelector('.development');

wordpress.addEventListener("click", function(){
	index.style.display = 'none';
	cms.style.display = 'block';
})

marketing.addEventListener("click", function(){	
	index.style.display = 'none';	
	smo.style.display = 'block';	
})

development.addEventListener("click", function(){
	index.style.display = 'none';
	wd.style.display = 'block';	
})