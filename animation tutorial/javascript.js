const projectName = 'technical-docs-page';
localStorage.setItem('example_project', 'Technical Docs Page');

$(document).ready(function(){
  $('#taja').click(function(){
    $(this).html($(this).html());
  });
});