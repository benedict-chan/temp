
/*
1. Load page and get upc
2. Go to this page
3. Run this in command
http://www.nikestore.com.hk/shoppingcart/

upc_your_size = "";
$j.post("/shoppingcart/add", {upc: upc_your_size, count: 1}, function(j) {
    var n = j.shoppingCommand;
    console.dir(n);
    omnitureCartAddedHandler("768861-601", "1249");
});


*/
$j.post("/shoppingcart/add", {upc: "00659658169586",count: 1}, function(j) {
    var n = j.shoppingCommand;
    console.dir(n);
    omnitureCartAddedHandler("768929-623", "1299");
});

$j.post("/shoppingcart/add", {upc: "00659658169586",count: 1}, function(j) {
    var n = j.shoppingCommand;
    console.dir(n);
});

768861-601 site:www.nikestore.com.hk

http://www.nikestore.com.hk/product/768929-623/detail.htm?pdpRecommend=false&preSkuCode=
http://www.nikestore.com.hk/product/768861-601/detail.htm?pdpRecommend=false&preSkuCode=
omnitureQuickBuyAddToCart("768861-601", "1249")

loxia.syncXhrPost( "/product/validateSku", {skuCode: "768861-601"});
            var e = _contextPath + "/product/" + d + "/dialog";
            var b = loxia.syncXhrPost("/product/768861-601/dialog", { isSameSku: false,pdpRecommend: true});


    var f = loxia.syncXhrPost("/transaction/doValidatorQsGoToTransactionCheck2", {upc: g,count: 1});


c = "768929-623", a = "1299"
function omnitureCartAddedHandler(c, a) {
    var b = {eVar28: p3 + ":Add to cart",events: "scAdd,event22=" + a,products: ";" + c + ";;",prop3: p3 + ":Add to cart",prop17: p17};
    trackLink(b, "cartAddedSuccess")
}

eVar28: "PDP:Add to cart"
eVar70: "D=c5"
events: "scAdd,event22=1299"
products: ";768929-623;;"
prop3: "PDP:Add to cart"
prop15: "hk_cn"
prop17: "PDP"


00659658169593