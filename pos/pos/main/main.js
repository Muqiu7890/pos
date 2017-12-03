'use strict';

var inputs=[
  'ITEM000000',
  'ITEM000000',
  'ITEM000000',
  'ITEM000000',
  'ITEM000000',
  'ITEM000001',
  'ITEM000001',
  'ITEM000004'
]
function barCount(inputProject) {
  var items =[];
  var item={};
  item.count=0;
  for (var i=0;i<inputProject.length;i++){
    var bar = inputs[i];
    if (item.barcode==bar)
    {
      item.count+=1;
    }
    else {
      var item={};
      item.barcode=bar;
      item.count=1;
      items.push(item);
    }
  }
  return items;
}

function output(items) {
  var goods=loadAllItems();
  for(var i=0;i<items.length;i++) {
    for (var j = 0; j < goods.length; j++) {
      if (items[i].barcode == goods[j].barcode) {
        items[i].name = goods[j].name;
        items[i].unit = goods[j].unit;
        items[i].price = goods[j].price;
      }
    }
  }
return items;
}

function printReceipt(inputs) {
  var items=barCount(inputs);
  var outputProject=output(items);
  var total=0;
  var content = "***<"+"没钱赚商店>收据"+"***\n";
  for (var i=0;i<items.length;i++) {
    
    content += "名称："+items[i].name+"，数量："+items[i].count+items[i].unit+"，单价："+items[i].price.toFixed(2)+"(元)，小计："+(items[i].price*items[i].count).toFixed(2)+"(元)\n";
    total +=items[i].price*items[i].count;
  }
   content += "----------------------\n总计："+total.toFixed(2)+"(元)\n**********************";
  console.log(content);
}

