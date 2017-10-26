var a = ['Головна', 'Завдання 1: Реєстрація', 'Завдання 2:Реєстрація в таблиці', 'Завдання 3: Карта'];
var b = ['home.html','form1.html', 'form2.html', 'map.html'];

var href = location.href;
href = href.substr(href.lastIndexOf('/') + 1, href.length - href.lastIndexOf('/'));

for(key in a)
{
	var activ = '';

	if(href == b[key])
	{
		activ = 'activ';
	}	

	document.write( '<li><a target="Content" href="' + b[key] + '" class="' + activ + '">' + a[key] + '</a></li>' );
}