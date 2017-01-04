
function changeSelect() {
    var x = document.getElementById("select1");
    var y = document.getElementById("select2");
    var z = document.getElementById("select3");
    y.options.length = 1; // 清除second下拉框的所有内容  
    z.options.length = 1;
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
        y.options.add(new Option("Mutton and lamb", "2"));
        y.options.add(new Option("Pork", "3"));
    }
    if (x.value == 7) {
        y.options.add(new Option("Natural cheese", "1"));
        y.options.add(new Option("Processed cheese", "2"));
    }
    if (x.value == 8) {
        y.options.add(new Option("Chewing gum", "1"));
        y.options.add(new Option("Chocolate bars - filled", "2"));
        y.options.add(new Option("Chocolate bars - solid", "3"));
        y.options.add(new Option("Fudges, toffees, caramels", "4"));
        y.options.add(new Option("Mints and boiled sweets", "5"));
    }
    if (x.value == 9) {

    }
    if (x.value == 10) {
        y.options.add(new Option("All other fats", "1"));
        y.options.add(new Option("Butter", "2"));
        y.options.add(new Option("Margarine", "3"));
        y.options.add(new Option("Vegetable and salad oils", "4"));
    }
    if (x.value == 11) {
        y.options.add(new Option("Blue fish, dried or salted or smoked", "1"));
        y.options.add(new Option("Herrings and other blue fish, fresh, chilled or frozen", "2"));
        y.options.add(new Option("Other tinned or bottled fish", "3"));
        y.options.add(new Option("Ready meals and other fish products - frozen or not frozen", "4"));
        y.options.add(new Option("Salmon, fresh, chilled or frozen", "5"));
        y.options.add(new Option("Salmon, tinned", "6"));
        y.options.add(new Option("Shellfish", "7"));
        y.options.add(new Option("Takeaway fish", "8"));
        y.options.add(new Option("Takeaway fish meals and fish products", "9"));
        y.options.add(new Option("White fish, dried, salted or smoked", "10"));
        y.options.add(new Option("White fish, fresh, chilled or frozen", "11"));
    }
    if (x.value == 12) {

    }
    if (x.value == 13) {
        y.options.add(new Option("Fresh fruit", "1"));
        y.options.add(new Option("Processed fruit and fruit products", "2"));
        y.options.add(new Option("Fresh potatoes", "3"));
        y.options.add(new Option("Processed potatoes", "4"));
        y.options.add(new Option("Fresh and processed fruit", "5"));
        y.options.add(new Option("Fresh and processed fruit and vegetables, excluding potatoes", "6"));
        y.options.add(new Option("Fresh and processed fruit and vegetables, including potatoes", "7"));
        y.options.add(new Option("Fresh and processed potatoes", "8"));
        y.options.add(new Option("Fresh and processed vegetables, excluding potatoes", "9"));
        y.options.add(new Option("Fresh and processed vegetables, including potatoes", "10"));
        y.options.add(new Option("Fresh green vegetables", "11"));
        y.options.add(new Option("Other fresh vegetables", "12"));
        y.options.add(new Option("Processed vegetables excluding processed potatoes", "13"));
    }
    if (x.value == 14) {
        y.options.add(new Option("Liquid wholemilk, including school and welfare", "1"));
        y.options.add(new Option("Other milk and cream", "2"));
    }
    if (x.value == 15) {
        y.options.add(new Option("All offal other than liver", "1"));
        y.options.add(new Option("Bacon and ham, cooked", "2"));
        y.options.add(new Option("Bacon and ham, uncooked", "3"));
        y.options.add(new Option("Burgers, frozen or not frozen", "4"));
        y.options.add(new Option("Chicken, uncooked - whole chicken or chicken pieces", "5"));
        y.options.add(new Option("Cooked poultry not purchased in cans", "6"));
        y.options.add(new Option("Corned beef, canned or sliced", "7"));
        y.options.add(new Option("Liver", "8"));
        y.options.add(new Option("Meat pastes and spreads", "9"));
        y.options.add(new Option("Meat pies and sausage rolls, ready to eat", "10"));
        y.options.add(new Option("Meat pies, pasties and puddings, frozen or not frozen", "11"));
        y.options.add(new Option("Other canned meat and canned meat products", "12"));
        y.options.add(new Option("Other cooked meat", "13"));
        y.options.add(new Option("Other fresh, chilled and frozen meat", "14"));
        y.options.add(new Option("Other poultry, uncooked (including frozen)", "15"));
        y.options.add(new Option("Pate and delicatessen type sausage", "16"));
        y.options.add(new Option("Ready meals and convenience meat products", "17"));
        y.options.add(new Option("Sausages, uncooked - beef and other sausages", "18"));
        y.options.add(new Option("Sausages, uncooked - pork", "19"));
        y.options.add(new Option("Takeaway meats", "20"));
    }
    if (x.value == 16) {
        y.options.add(new Option("Breakfast cereals", "1"));
        y.options.add(new Option("Cakes and pastries - frozen", "2"));
        y.options.add(new Option("Canned milk puddings", "3"));
        y.options.add(new Option("Infant cereal foods", "4"));
        y.options.add(new Option("Invalid foods, slimming foods and sports foods", "5"));
        y.options.add(new Option("Oatmeal and oat products", "6"));
        y.options.add(new Option("Other cereal convenience foods", "7"));
        y.options.add(new Option("Other cereals", "8"));
        y.options.add(new Option("Pasta", "9"));
        y.options.add(new Option("Pizza", "10"));
        y.options.add(new Option("Puddings", "11"));
        y.options.add(new Option("Rice", "12"));
    }
    if (x.value == 17) {
        y.options.add(new Option("Baby foods", "1"));
        y.options.add(new Option("Ice cream products including takeaways", "2"));
        y.options.add(new Option("Ice cream tub or block", "3"));
        y.options.add(new Option("Jelly squares or crystals", "4"));
        y.options.add(new Option("Mineral or spring waters", "5"));
        y.options.add(new Option("Pickles and sauces", "6"));
        y.options.add(new Option("Salt", "7"));
        y.options.add(new Option("Soups - canned or cartons", "8"));
        y.options.add(new Option("Soups - dehydrated or powdered", "9"));
        y.options.add(new Option("Soups - from takeaway", "10"));
        y.options.add(new Option("Soya and novel protein foods", "11"));
        y.options.add(new Option("Spreads and dressings", "12"));
        y.options.add(new Option("Stock cubes and meat and yeast extracts", "13"));
    }
    if (x.value == 18) {
        y.options.add(new Option("Soft drinks, concentrated, low calorie", "1"));
        y.options.add(new Option("Soft drinks, concentrated, not low calorie", "2"));
        y.options.add(new Option("Soft drinks, not concentrated,  not low calorie", "3"));
        y.options.add(new Option("Soft drinks, not concentrated, low calorie", "4"));
    }
    if (x.value == 19) {
        y.options.add(new Option("Honey", "1"));
        y.options.add(new Option("Jams and fruit curds", "2"));
        y.options.add(new Option("Marmalade", "3"));
        y.options.add(new Option("Sugar", "4"));
        y.options.add(new Option("Syrup, treacle", "5"));
    }
}
function changeSelectTwo() {
    var x = document.getElementById("select1");
    var y = document.getElementById("select2");
    var z = document.getElementById("select3");
    z.options.length = 1;
    if (x.value == 1 && y.value == 9) {
        z.options.add(new Option("Champagne, sparkling wines and wine with mixer", "1"));
        z.options.add(new Option("Table wine", "2"));
    }
    if (x.value == 3 && y.value == 1) {
        z.options.add(new Option("Cream crackers and other unsweetened biscuits", "1"));
        z.options.add(new Option("Sweet biscuits (not chocolate) and cereal bars", "2"));
    }
    if (x.value == 4 && y.value == 1) {
        z.options.add(new Option("Brown bread, sliced and unsliced", "1"));
        z.options.add(new Option("Wholemeal and granary bread, sliced and unsliced", "2"));
    }
    if (x.value == 4 && y.value == 2) {
        z.options.add(new Option("Malt bread and fruit loaves", "1"));
        z.options.add(new Option("Other breads", "2"));
        z.options.add(new Option("Rolls - white, brown or wholemeal", "3"));
        z.options.add(new Option("Sandwiches", "4"));
        z.options.add(new Option("Sandwiches from takeaway", "5"));
        z.options.add(new Option("Starch reduced bread and rolls", "6"));
        z.options.add(new Option("Takeaway breads", "7"));
        z.options.add(new Option("Vienna and french bread", "8"));
    }
    if (x.value == 4 && y.value == 3) {
        z.options.add(new Option("White bread, premium, sliced and unsliced", "1"));
        z.options.add(new Option("White bread, soft grain, sliced and unsliced", "2"));
        z.options.add(new Option("White bread, standard, sliced", "3"));
        z.options.add(new Option("White bread, standard, unsliced", "4"));
    }
    if (x.value == 5 && y.value == 2) {
        z.options.add(new Option("Cakes and pastries, not frozen", "1"));
        z.options.add(new Option("Takeaway pastries", "2"));
    }

    if (x.value == 6 && y.value == 1) {
        z.options.add(new Option("All other beef and veal", "1"));
        z.options.add(new Option("Beef joints - boned", "2"));
        z.options.add(new Option("Beef joints - on the bone", "3"));
        z.options.add(new Option("Beef steak - less expensive", "4"));
        z.options.add(new Option("Beef steak - more expensive", "5"));
        z.options.add(new Option("Minced beef", "6"));
    }
    if (x.value == 6 && y.value == 2) {
        z.options.add(new Option("All other lamb", "1"));
        z.options.add(new Option("Lamb chops", "2"));
        z.options.add(new Option("Lamb joints", "3"));
        z.options.add(new Option("Mutton", "4"));
    }
    if (x.value == 6 && y.value == 3) {
        z.options.add(new Option("All other pork", "1"));
        z.options.add(new Option("Pork chops", "2"));
        z.options.add(new Option("Pork fillets and steaks", "3"));
        z.options.add(new Option("Pork joints", "4"));
    }
    if (x.value == 7 && y.value == 1) {
        z.options.add(new Option("Cottage cheese", "1"));
        z.options.add(new Option("Hard cheese - cheddar type", "2"));
        z.options.add(new Option("Hard cheese - edam or other foreign", "3"));
        z.options.add(new Option("Hard cheese - other uk or foreign equivalent", "4"));
        z.options.add(new Option("Soft natural cheese", "5"));
    }
    if (x.value == 8 && y.value == 5) {
        z.options.add(new Option("Boiled sweets", "1"));
        z.options.add(new Option("Mints", "2"));
    }
    if (x.value == 10 && y.value == 1) {
        z.options.add(new Option("Imitatation cream", "1"));
        z.options.add(new Option("Low fat spreads", "2"));
        z.options.add(new Option("Reduced fat spreads", "3"));
        z.options.add(new Option("Suet and dripping", "4"));
    }
    if (x.value == 10 && y.value == 3) {
        z.options.add(new Option("Other margarine", "1"));
        z.options.add(new Option("Soft margarine", "2"));
    }
    if (x.value == 10 && y.value == 4) {
        z.options.add(new Option("Olive oil", "1"));
        z.options.add(new Option("Other vegetable and salad oils", "2"));
    }

    if (x.value == 11 && y.value == 2) {
        z.options.add(new Option("Herrings and other blue fish, fresh or chilled", "1"));
        z.options.add(new Option("Herrings and other blue fish, frozen", "2"));
    }
    if (x.value == 11 && y.value == 5) {
        z.options.add(new Option("Salmon, fresh or chilled", "1"));
        z.options.add(new Option("Salmon, frozen", "2"));
    }
    if (x.value == 11 && y.value == 7) {
        z.options.add(new Option("Shellfish, fresh or chilled", "1"));
        z.options.add(new Option("Shellfish, frozen", "2"));
    }
    if (x.value == 11 && y.value == 9) {
        z.options.add(new Option("Takeaway fish based meals", "1"));
        z.options.add(new Option("Takeaway fish products", "2"));
    }
    if (x.value == 13 && y.value == 1) {
        z.options.add(new Option("Fresh apples", "1"));
        z.options.add(new Option("Fresh bananas", "2"));
        z.options.add(new Option("Fresh grapes", "3"));
        z.options.add(new Option("Fresh melons", "4"));
        z.options.add(new Option("Fresh oranges", "5"));
        z.options.add(new Option("Fresh pears", "6"));
        z.options.add(new Option("Fresh stone fruit", "7"));
        z.options.add(new Option("Other fresh citrus fruits", "8"));
        z.options.add(new Option("Other fresh fruit", "9"));
        z.options.add(new Option("Other fresh soft fruit", "10"));
    }
    if (x.value == 13 && y.value == 2) {
        z.options.add(new Option("All other tinned or bottled fruit", "1"));
        z.options.add(new Option("Dried fruit", "2"));
        z.options.add(new Option("Frozen strawberries, apple slices, peach halves, oranges and other frozen fruits", "3"));
        z.options.add(new Option("Nuts, edible seeds and peanut butter", "4"));
        z.options.add(new Option("Pure fruit juices", "5"));
        z.options.add(new Option("Tinned peaches, pears and pineapples", "6"));
    }

    if (x.value == 13 && y.value == 3) {
        z.options.add(new Option("Fresh baking potatoes (e)", "1"));
        z.options.add(new Option("Fresh new potatoes (e)", "2"));
        z.options.add(new Option("Other fresh potatoes (e)", "3"));
    }
    if (x.value == 13 && y.value == 4) {
        z.options.add(new Option("Chips and takeaway chips", "1"));
        z.options.add(new Option("Crisps and potato snacks", "2"));
        z.options.add(new Option("Instant potato", "3"));
        z.options.add(new Option("Other potato products, frozen or not frozen", "4"));
    }
    if (x.value == 13 && y.value == 11) {
        z.options.add(new Option("Fresh beans", "1"));
        z.options.add(new Option("Fresh brussels sprouts", "2"));
        z.options.add(new Option("Fresh cabbages", "3"));
        z.options.add(new Option("Fresh cauliflower", "4"));
        z.options.add(new Option("Fresh peas", "5"));
        z.options.add(new Option("Leafy salads fresh", "6"));
        z.options.add(new Option("Other fresh green vegetables", "7"));
    }
    if (x.value == 13 && y.value == 12) {
        z.options.add(new Option("Fresh carrots", "1"));
        z.options.add(new Option("Fresh cucumbers", "2"));
        z.options.add(new Option("Fresh mushrooms", "3"));
        z.options.add(new Option("Fresh onions, leeks and shallots", "4"));
        z.options.add(new Option("Fresh tomatoes", "5"));
        z.options.add(new Option("Fresh turnips and swede", "6"));
        z.options.add(new Option("Miscellaneous fresh vegtables", "7"));
        z.options.add(new Option("Other fresh root vegetables", "8"));
    }
    if (x.value == 13 && y.value == 13) {
        z.options.add(new Option("Beans canned", "1"));
        z.options.add(new Option("Beans, frozen", "2"));
        z.options.add(new Option("Dried pulses other than air-dried", "3"));
        z.options.add(new Option("Other canned vegetables", "4"));
        z.options.add(new Option("Other frozen vegetables", "5"));
        z.options.add(new Option("Peas, canned", "6"));
        z.options.add(new Option("Peas, frozen", "7"));
        z.options.add(new Option("Ready meals and other vegetable products (inc takeaways)", "8"));
        z.options.add(new Option("Tomatoes, canned or bottled", "9"));
        z.options.add(new Option("Vegetable juices and purees", "10"));
    }

    if (x.value == 14 && y.value == 1) {
        z.options.add(new Option("Liquid wholemilk, full price", "1"));
    }
    if (x.value == 14 && y.value == 2) {
        z.options.add(new Option("Condensed or evaporated milk", "1"));
        z.options.add(new Option("Cream", "2"));
        z.options.add(new Option("Infant milks", "3"));
        z.options.add(new Option("Other milks and dairy desserts", "4"));
        z.options.add(new Option("Skimmed milks", "5"));
        z.options.add(new Option("Yoghurt and fromage frais", "6"));
    }

    if (x.value == 15 && y.value == 3) {
        z.options.add(new Option("Bacon and ham joints, uncooked", "1"));
        z.options.add(new Option("Bacon and ham rashers, uncooked", "2"));
    }
    if (x.value == 15 && y.value == 6) {
        z.options.add(new Option("Chicken and turkey, cooked", "1"));
        z.options.add(new Option("Takeaway chicken", "2"));
    }
    if (x.value == 14 && y.value == 8) {
        z.options.add(new Option("Lambs liver", "1"));
    }
    if (x.value == 15 && y.value == 10) {
        z.options.add(new Option("Meat pies, ready to eat", "1"));
        z.options.add(new Option("Sausage rolls, ready to eat", "2"));
    }
    if (x.value == 15 && y.value == 15) {
        z.options.add(new Option("Poultry other than chicken or turkey, uncooked", "1"));
        z.options.add(new Option("Turkey, uncooked - whole turkey or turkey pieces", "2"));
    }
    if (x.value == 15 && y.value == 16) {
        z.options.add(new Option("Delicatessen type sausages", "1"));
        z.options.add(new Option("Pate", "2"));
    }
    if (x.value == 15 && y.value == 17) {
        z.options.add(new Option("Complete meat-based ready meals, frozen or not frozen", "1"));
        z.options.add(new Option("Other convenience meat products, frozen or not frozen", "2"));
    }
    if (x.value == 15 && y.value == 20) {
        z.options.add(new Option("Takeaway burger and bun", "1"));
        z.options.add(new Option("Takeaway kebabs", "2"));
        z.options.add(new Option("Takeaway meat based meals", "3"));
        z.options.add(new Option("Takeaway meat pies and pasties", "4"));
        z.options.add(new Option("Takeaway sausages and saveloys", "5"));
    }

    if (x.value == 16 && y.value == 1) {
        z.options.add(new Option("High fibre breakfast cereals", "1"));
        z.options.add(new Option("Muesli", "2"));
        z.options.add(new Option("Other breakfast cereals", "3"));
        z.options.add(new Option("Sweetened breakfast cereals", "4"));
    }
    if (x.value == 16 && y.value == 3) {
        z.options.add(new Option("All canned milk puddings", "1"));
        z.options.add(new Option("Canned or fresh carton custard", "2"));
    }
    if (x.value == 16 && y.value == 7) {
        z.options.add(new Option("Cake, pudding and dessert mixes", "1"));
        z.options.add(new Option("Cereal snacks", "2"));
        z.options.add(new Option("Other cereal foods, frozen and not frozen", "3"));
        z.options.add(new Option("Quiches and flans, frozen and not frozen", "4"));
        z.options.add(new Option("Takeaway crisps, savoury snacks, popcorn, popadums, prawn crackers", "5"));
    }
    if (x.value == 16 && y.value == 9) {
        z.options.add(new Option("Canned pasta", "1"));
        z.options.add(new Option("Dried and fresh pasta", "2"));
        z.options.add(new Option("Takeaway pasta and noodles", "3"));
    }
    if (x.value == 16 && y.value == 10) {
        z.options.add(new Option("Pizzas, frozen and not frozen", "1"));
        z.options.add(new Option("Takeaway pizza", "2"));
    }
    if (x.value == 16 && y.value == 12) {
        z.options.add(new Option("Cooked rice", "1"));
        z.options.add(new Option("Dried rice", "2"));
        z.options.add(new Option("Takeaway rice", "3"));
    }

    if (x.value == 17 && y.value == 2) {
        z.options.add(new Option("Ice cream cornets, choc-ices, lollies with ice cream", "1"));
        z.options.add(new Option("Ice lollies, sorbet, frozen mousse, frozen yoghurt", "2"));
        z.options.add(new Option("Takeaway ice cream, ice cream products, milkshakes", "3"));
    }
    if (x.value == 17 && y.value == 6) {
        z.options.add(new Option("Pickles", "1"));
        z.options.add(new Option("Sauces", "2"));
        z.options.add(new Option("Takeaway sauces and mayonnnaise", "3"));
    }
    if (x.value == 17 && y.value == 12) {
        z.options.add(new Option("Other spreads and dresssings", "1"));
        z.options.add(new Option("Salad dressings", "2"));
    }

}