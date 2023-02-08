
// // //add item function
// function addItem(id){
//     let itemNumber = document.getElementById(id).value;
//     itemNumber = parseInt(itemNumber);
//     itemNumber++;
//    document.getElementById(id).value = itemNumber;
// }
// // //sub item function
// function subItem(id){
//     let itemNumber = document.getElementById(id).value; 
//     itemNumber = parseInt(itemNumber);
//     if (itemNumber != 0){
//         itemNumber--;
//         document.getElementById(id).value = itemNumber;
//     } 
// }

// // //remove item function
// function removeItem(id1,id2){
//     document.getElementById(id1).value = 0;
//     document.getElementById(id2).innerHTML = 0;
// }

// // //update price function
// function updatePrice(id1,id2,price){
    
//     let itemNumber = document.getElementById(id2).value;
//     itemNumber = parseInt(itemNumber);
//     let totalPrice = price * itemNumber;
//     document.getElementById(id1).innerText = totalPrice;
// }
// // //update sub total function
// function updateSubTotal(id){
//     let subTotal = document.getElementById(id).innerText;
//     subTotal = parseFloat(subTotal);
//     let totalPhonePrice = document.getElementById('phone-price').innerText;
//     totalPhonePrice = parseFloat(totalPhonePrice);
//     let totalCasingPrice = document.getElementById('casing-price').innerText;
//     totalCasingPrice = parseFloat(totalCasingPrice);
//     subTotal = totalPhonePrice + totalCasingPrice;
//     document.getElementById(id).innerText = subTotal;
// }

// // //update tax function
// function updateTax(){
   
//         let subTotal = document.getElementById('sub-total').innerText;
//         subTotal = parseFloat(subTotal);
//         let tax = subTotal * 0.05;
//         tax = tax.toFixed(2);
//         document.getElementById('tax').innerText = tax;

// }
// // //update total

// function updateTotal(){
//     let subTotal = document.getElementById('sub-total').innerText;
//     subTotal = parseFloat(subTotal);
//     let tax = document.getElementById('tax').innerText;
//     tax = parseFloat(tax);
//     let total = subTotal + tax;
//     document.getElementById('total').innerText = total;
// }

// // //phone item+ click handler
// document.getElementById('phone-plus-item').addEventListener('click',function(){
// addItem('phone-item-number');
// updatePrice('phone-price','phone-item-number',1219);
// updateSubTotal('sub-total');
// updateTax();
// updateTotal();

// });
// // //phone item- click handler
// document.getElementById('phone-minus-item').addEventListener('click',function(){
//  subItem('phone-item-number');
//  updatePrice('phone-price','phone-item-number',1219);
//  updateSubTotal('sub-total');
//  updateTax();
//  updateTotal();
// });

// // //remove phone item
// document.getElementById('phone-remove-item').addEventListener('click',function(){
//    removeItem('phone-item-number','phone-price'); 
//    updateSubTotal('sub-total');
//    updateTax();
//    updateTotal();
// })

// // //casing item+ click handler
// document.getElementById('casing-plus-item').addEventListener('click',function(){
//     addItem('casing-item-number');
//     updatePrice('casing-price','casing-item-number',59);
//     updateSubTotal('sub-total');
//     updateTax();
//     updateTotal();
// });

// // //casing item- click handler
// document.getElementById('casing-minus-item').addEventListener('click',function(){
//     subItem('casing-item-number');
//     updatePrice('casing-price','casing-item-number',59);
//     updateSubTotal('sub-total');
//     updateTax();
//     updateTotal();
// })

// // //update casing total price
// document.getElementById('casing-remove-item').addEventListener('click',function(){
//     removeItem('casing-item-number','casing-price');
//     updateSubTotal('sub-total');
//     updateTax();
//     updateTotal();
// })




function changeItem(id1,trueFalse,id2,price){
    let currentItem = document.getElementById(id1).value;
    currentItem = parseInt(currentItem);
    
    if (trueFalse == true){
        currentItem++;
    }
    if (trueFalse == false && currentItem>0){
        currentItem--;
    }
    document.getElementById(id1).value = currentItem;
    let currentPrice = document.getElementById(id2).innerText;
    currentPrice = parseFloat(currentPrice);
    currentPrice = currentItem * price;
    document.getElementById(id2).innerText = currentPrice;

    subTotal();
    tax()
    total()

}

function itemNumberReset(id1,id2){
    document.getElementById(id1).value = 0;
    document.getElementById(id2).innerHTML = 0;
}

function subTotal(){
    let phonePrice = document.getElementById('phone-price').innerHTML;
    phonePrice = parseFloat(phonePrice);

    let casingPrice = document.getElementById('casing-price').innerHTML;
    casingPrice = parseFloat(casingPrice);

    let subTotal = phonePrice + casingPrice;
    document.getElementById('sub-total').innerHTML = subTotal;
    return subTotal;
}

function tax(){
    let tax = subTotal() * 0.02;
    tax = tax.toFixed(2);
   
    document.getElementById('tax').innerHTML = tax;
    return tax;
    
}

function total(){
    let totalSubTotal = subTotal() ;
    totalSubTotal = parseFloat(totalSubTotal);
    let totalTax =  tax();
    totalTax = parseFloat(totalTax);
    let total = totalSubTotal + totalTax;
    document.getElementById('total').innerHTML = total;
}



document.getElementById('phone-plus-item').addEventListener('click',function(){
    changeItem('phone-item-number',true,'phone-price',1200);
    
    
})

document.getElementById('phone-minus-item').addEventListener('click',function(){
    changeItem('phone-item-number',false,'phone-price',1200);
    subTotal();
    tax()
    total()
})

document.getElementById('phone-remove-item').addEventListener('click',function(){
    itemNumberReset('phone-item-number','phone-price');
    subTotal();
    tax()
    total()
})


document.getElementById('casing-plus-item').addEventListener('click',function(){
    changeItem('casing-item-number',true,'casing-price',60);
    subTotal();
    tax()
    total()
})

document.getElementById('casing-minus-item').addEventListener('click',function(){
    changeItem('casing-item-number',false,'casing-price',60);
    subTotal()
    tax()
    total()
})

document.getElementById('casing-remove-item').addEventListener('click',function(){
    itemNumberReset('casing-item-number','casing-price');
    subTotal();
    tax()
})


