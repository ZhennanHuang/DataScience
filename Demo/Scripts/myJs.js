function changeSelect() {
    var x = document.getElementById("select1");
    var y = document.getElementById("select2");
    var z = document.getElementById("select3");
    y.options.length = 0; // 清除second下拉框的所有内容  
    if (x.value == 0) { }
    if (x.value == 1) {
        y.options.add(new Option("黄冈", "1"));
        y.options.add(new Option("武汉", "2", false, true));  // 默认选中省会城市  
        y.options.add(new Option("", ""));
    }

    if (x.value == 2) {
        y.options.add(new Option("深圳", "1"));
        y.options.add(new Option("广州", "2", false, true));  // 默认选中省会城市  
        y.options.add(new Option("肇庆", "3"));
    }

}