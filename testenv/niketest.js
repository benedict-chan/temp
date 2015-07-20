function commonAddToCart(d, g, f, c, i, h, b, e) {
    if (g == 0) {
        g = 1
    }
    if (!isNullOrEmpty(d) && g > 0) {
        var a = _contextPath + "/shoppingcart/add";
        $j.post(a, {upc: d,count: g}, function(j) {
            if (j.shoppingCartSummary != null) {
                var m = j.shoppingCartSummary.shoppingCartSize;
                var n = j.shoppingCommand;
                parseInt(m) != 0 && $j(".buycart-num-wrap").removeClass("none");
                if (m > 0) {
                    $j(".cartKazu").show()
                }
                $j("#buycart-count").html(m);
                if (!b) {
                    var k = "";
                    if (e) {
                        k = $j("#quickbuyDialog #relatedColors .selected img").attr("curSrc")
                    } else {
                        k = $j("#relatedColors .selected img").attr("curSrc")
                    }
                    showCartAddedItemWithHeader(k, i, h, n.price, n.sizeRef, n.quantity, n.skuColor, j.shoppingCartSummary.totalAfDiscount);
                    if (e) {
                        var l = $j("#pdpRecommend").val();
                        if (l == "true") {
                            omnitureRecommendQuickBuyAddToCart(c, f)
                        } else {
                            omnitureQuickBuyAddToCart(c, f)
                        }
                        $j(".black_opacity").fadeOut(300);
                        $j("#quickbuyDialog").fadeOut(300);
                        try {
                            if (s.oldPageName) {
                                s.pageName = s.oldPageName
                            }
                            if (oldP3) {
                                p3 = oldP3
                            }
                            if (oldP17) {
                                p17 = oldP17
                            }
                        } catch (o) {
                        }
                    } else {
                        if (pdpRecommend) {
                            omnitureRecommendCartAddedHandler(c, f)
                        } else {
                            omnitureCartAddedHandler(c, f)
                        }
                    }
                } else {
                    if (e) {
                        var l = $j("#pdpRecommend").val();
                        if (l == "true") {
                            omnitureRecommendQuickBuyAddToCart(c, f)
                        } else {
                            omnitureQuickBuyAddToCart(c, f)
                        }
                    } else {
                        if (pdpRecommend) {
                            omnitureRecommendCartAddedHandler(c, f)
                        } else {
                            omnitureCartAddedHandler(c, f)
                        }
                    }
                    window.location.href = _contextPath + "/shoppingcart"
                }
            } else {
                if (j.backWarnEntity.description != null) {
                    $j("#quickbuyDialog").hide();
                    sAlert(j.backWarnEntity.description)
                } else {
                    $j("#quickbuyDialog").hide();
                    sAlert(loxia.getLocaleMsg("mynike.edit.myfavorite.AddFailure"))
                }
            }
        })
    } else {
        if (e) {
            $j("#quickbuyDialog").find("#pdpSizeError").html(loxia.getLocaleMsg("quickBuy.SelectSize") + "<i></i>").show();
            $j("#quickbuyDialog").find("#pdpSizeErrorColor").addClass("error")
        } else {
            $j("#pdpSizeError").html(loxia.getLocaleMsg("quickBuy.SelectSize") + "<i></i>").show();
            $j("#pdpSizeErrorColor").addClass("error")
        }
    }
}