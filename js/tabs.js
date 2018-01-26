var button_js = window.document.querySelector('#javascript');
var button_html = window.document.querySelector('#html');
var button_css = window.document.querySelector('#css');

button_js.addEventListener('click', testFn_js);
button_html.addEventListener('click', testFn_html);
button_css.addEventListener('click', testFn_css);

var content_js = document.querySelector('#content_js');
var content_html = document.querySelector('#content_html');
var content_css = document.querySelector('#content_css');

function testFn_init() {
  content_js.style.display = 'none';
  content_html.style.display = 'none';
  content_css.style.display = 'none';
};

function testFn_js() {
  content_js.style.display = 'block';
  content_html.style.display = 'none';
  content_css.style.display = 'none';
};
function testFn_html() {
  content_js.style.display = 'none';
  content_html.style.display = 'block';
  content_css.style.display = 'none';
};
function testFn_css() {
  content_js.style.display = 'none';
  content_html.style.display = 'none';
  content_css.style.display = 'block';
};