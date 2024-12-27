let fooditems = ['apple'," potato", " peach", "orange"];
console.log(fooditems);
fooditems.push("tomato", " lichi", "graph", "mango",);
fooditems.pop();
console.log(fooditems);







let color =[ "yellow" ,"green", "purple", "orange"];

let newcolor = color.toString();
console.log(newcolor);
let num =[ 2662, 27,78,90,320];
let newnum = num.toString();
console.log(newnum);
let fooditems1 = ['apple'," potato", " peach", "orange"];
let color1 = [ "yellow","green","purple","orange"];
let num1 = [2662, 27,78,90,320 ];
let newitem = fooditems.concat(color1 , num1);
console.log(newitem);









let cartoon = ['tom', "mrbean"," amna"];
console.log(cartoon);
cartoon.unshift(cartoon)
let cartoon1 = ['tom', "mrbean"," amna"];
console.log(cartoon);
cartoon.shift(cartoon1)
let  fruits= [" bnana", "apple", "lemon", " mango" ];
let citrus = fruits.slice( -3 ,-1);
console.log(citrus);
fruits.splice(1,0,"kiwi ", "lichi"," graphs");
console.log(fruits);






let companies =[ "blooberg","microsoft", " uber", " google", " ibm", "netflix"];
companies.shift();
companies.push("amazon");
console.log(companies);
companies.splice(1,1,"ola");
console.log(companies);


