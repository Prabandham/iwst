$(document).ready(function () {
    console.log("ready!");
    nunjucks.configure('', { autoescape: true });
    nunjucks.render('index.html', { title: 'IWST' });
});