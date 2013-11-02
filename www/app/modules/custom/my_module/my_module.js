/**
 * Implements hook_menu().
 */
function my_module_menu() {
    var items = {
    landing_page:{
    title:'Casablanca',
    page_callback:'my_module_landing_page',
    },
    };
    return items;
}

function my_module_landing_page() {
    var content = {
        'my_intro_text':{
            'markup':'<p>Welcome back!</p><br><a href="http://casablanca.metastripe.com/casablanca7/Movies">Click me</a><br><br<br>',
        },
    };
    return content;
}



function my_module_vendetta() {
    var node = node_load(1000);
    if (node) {
        alert('Loaded ' + node.title);
    }
    
}
