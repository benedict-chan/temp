var system = require('system');


var page = require('webpage').create();

page.onConsoleMessage = function(msg) {
    system.stderr.writeLine('console: ' + msg);
};

page.onLoadFinished = function() {
    console.log("page.onLoadFinished");
    page.evaluate(function(){
		$j.ajax({
			async: false,
			url: "http://www.nikestore.com.hk/shoppingcart/add", 
			data: {upc: "00659658169586",count: 1},
			type: 'post',
			success: function(data){
							console.log('done');
						    var n = data.shoppingCommand;
						    console.log(n.availableQty);
						    console.log(n.skuName);
						    console.log(n.skuCode);
						    console.log(n.subtotal);
						}
			});
    });
};

page.open('http://www.nikestore.com.hk/shoppingcart', function(status) {
  console.log("Status: " + status);
  if(status === "success") {

  }
  phantom.exit();
});







