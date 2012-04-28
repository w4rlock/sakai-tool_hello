/* Stuff that we always expect to be setup */
var helloErrorLog = new Object();

(function() {
	// Process parameters
    var arg = HelloUtils.getParameters(); 
    if(!arg || !helloToolSettings.siteId) {
    	console.log("I'm here");
        HelloUtils.showMessage(hello_err_no_siteid, 'error');
        return;
    }
    
    // Process permissions
    var permissions = HelloUtils.getUserPermissions();
    helloToolSettings.userPerms = new HelloPermissions(permissions);

    console.log(helloToolSettings);
    
    // We need the toolbar in a template so we can swap in the translations
    //HelloUtils.render('hello_toolbar_template', {}, 'hello_toolbar');
    //console.log('rendered toolbar');

    // Now we render the footer
    HelloUtils.render('hello_footer_template', {'helloVersionTag':helloToolSettings.version + '_' + helloToolSettings.buildSerial}, 'hello_footer');
    
    $('#hello_home_link').bind('click',function(e) {
        return switchState('listItems');
    });

    $('#hello_add_item_link').bind('click',function(e) {
        return switchState('addUpdateItem');
    });

    $('#hello_options_link').bind('click',function(e) {
        return switchState('options');
    });

    $('#hello_permissions_link').bind('click',function(e) {
        return switchState('permissions');
    });

    // This is always showing in every state.
    $('#hello_home_link').show();

    // Now switch into the requested state
    if(helloToolSettings.userId != null) {
        switchState(arg.state, arg);
    } else {
        HelloUtils.showMessage(bbb_err_no_user, 'error');
        jQuery('#hello_container').empty();
    }
    
})();

function switchState(state, arg) {
	
    HelloUtils.hideMessage();

    if('listItems_' === state) {
        
    } else if('options_' === state) {

    } else if('permissions_' === state) {

    }
}
