var a = ['Головна', 'Завдання 1: Списки', 'Завдання 2: Таблиці', 'Завдання 3: Розклад групи'];
var b = ['index.html','lists.html', 'tables.html', 'schedule.html'];
var c = ['fa-home', 'fa-graduation-cap', 'fa-institution', 'fa-newspaper-o', 'fa-group'];

var href = location.href;
href = href.substr(href.lastIndexOf('/') + 1, href.length - href.lastIndexOf('/'));

for(key in a)
{
	var activ = '';

	if(href == b[key])
	{
		activ = 'activ';
	}	

	document.write( '<li><a href="' + b[key] + '" class="' + activ + '"><i class="fa ' + c[key] + '"></i> ' + a[key] + '</a></li>' );
}