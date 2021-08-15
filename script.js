
const h1Titles = document.getElementsByClassName('h1-title');
for(const h1Title of h1Titles){
    h1Title.style.color ='blue';
}



//backpack section
const backpackSection = document.getElementById('backpack');
backpackSection.style.backgroundColor = 'tomato';

//card part
const cards = document.getElementsByClassName('panda-card');
for (const card of cards) {
    card.style.borderRadius = '30px';
}

//button-buy 
 function buttonBuy(){
    // document.getElementById('button-buy');
     console.log('processing.......');


 }

//buy now button remove
const buyNowbtns = document.getElementsByClassName('buy-now-btn');
for (const btn of buyNowbtns) {
    btn.addEventListener('click', function(event){
        event.target.parentNode.removeChild(event.target);

    });
}





//submit-button
document.getElementById('submit-confirm').addEventListener('keyup', function (event) {
    const deleteBtn = document.getElementById('submit-button');
    if (event.target.value == 'email') {
        deleteBtn.removeAttribute('disabled');
    }
    else {
        deleteBtn.setAttribute('disabled', true);
    }

});
// //change
// document.getElementById('delete-confirm').addEventListener('change', function () {
//     const deleteField = document.getElementById('delete-confirm');
//     console.log(deleteField.value);
// });