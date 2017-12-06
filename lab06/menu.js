var a = ['task1', 'task2', 'task3'];
var b = ['task1.html', 'task2.html','task3.html'];

var href = location.href;
href = href.substr(href.lastIndexOf('/') + 1, href.length - href.lastIndexOf('/'));

for(key in a)
{
	var activ = '';

	if(href == b[key])
	{
		activ = 'activ';
	}	

	document.write( '<li><a href="' + b[key] + '" class="' + activ + '">' + a[key] + '</a></li>' );
}