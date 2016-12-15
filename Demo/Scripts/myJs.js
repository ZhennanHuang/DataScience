function changeSelect() {
    var x = document.getElementById("select1");
    var y = document.getElementById("select2");
    var z = document.getElementById("select3");
    y.options.length = 0; // 清除second下拉框的所有内容  
    if (x.value == 0) { }
    if (x.value == 1) {
        y.options.add(new Option("Alcopops", "1"));
        y.options.add(new Option("Beers", "2"));  // 默认选中省会城市  Ciders and perry
        y.options.add(new Option("Ciders and perry", "3"));
        y.options.add(new Option("Fortified wines", "4"));
        y.options.add(new Option("Lagers and continental beers", "5"));
        y.options.add(new Option("Liqueurs and cocktails", "6"));
        y.options.add(new Option("Spirits with mixer", "7"));
        y.options.add(new Option("Spirits", "8"));
        y.options.add(new Option("Wine and champagne", "9"));
    }

    if (x.value == 2) {
        y.options.add(new Option("Cocoa and chocolate drinks", "1"));
        y.options.add(new Option("Coffee beans and ground coffee", "2"));  // 默认选中省会城市  
        y.options.add(new Option("Instant coffee", "3"));
        y.options.add(new Option("Malt drinks and chocolate versions of malted drinks", "4"));
        y.options.add(new Option("Tea", "5"));
        
    }
    if (x.value == 3) {
        y.options.add(new Option("Biscuits other than chocolate", "1"));
        y.options.add(new Option("Chocolate biscuits", "2"));
        y.options.add(new Option("Crispbread", "3"));

    }
    if (x.value == 4) {
        y.options.add(new Option("Brown and wholemeal bread", "1"));
        y.options.add(new Option("Total other bread", "2"));
        y.options.add(new Option("White bread", "3"));
    }
    if (x.value == 5) {
        y.options.add(new Option("Buns, scones and teacakes", "1"));
        y.options.add(new Option("Cakes and pastries", "2"));
    }
    if (x.value == 6) {
        y.options.add(new Option("Beef and veal", "1"));
        y.options.add(new Option("Pork", "2"));
    }
    if (x.value == 7) {
    }
    if (x.value == 3) {

    }
    if (x.value == 3) {

    }
    if (x.value == 3) {

    }
    if (x.value == 3) {

    }
    if (x.value == 3) {

    }
}