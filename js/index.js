const content1 = document.getElementById('content-1');
const content2 = document.getElementById('content-2');
const content3 = document.getElementById('content-3');
const content4 = document.getElementById('content-4');
const counterTwo = document.getElementById('counter');
const btn1 = document.getElementById('#btn-one');
const btn2 = document.getElementById('#btn-two');
const btn3 = document.getElementById('#btn-three');
const btn4 = document.getElementById('#btn-four');
const li1 = document.getElementById('btn-one');
const li2 = document.getElementById('btn-two');
const li3 = document.getElementById('btn-three');
const li4 = document.getElementById('btn-four');


btn1.addEventListener('click',function(){
    li2.classList.remove('active');
    li1.classList.add('active');
    li3.classList.remove('active');
    li4.classList.remove('active');
    content2.classList.remove('active');
    content3.classList.remove('active');
    content4.classList.remove('active');
    content1.classList.add('active');
    
});

let counter = 0;
counterTwo.textContent="The times the user opened the 2nd tab equal   (" + counter + ")";

btn2.addEventListener('click',function(){
    li1.classList.remove('active');
    li2.classList.add('active');
    li3.classList.remove('active');
    li4.classList.remove('active');
    content1.classList.remove('active');
    content3.classList.remove('active');
    content4.classList.remove('active');
    content2.classList.add('active');
   counter= counter + 1;
   counterTwo.textContent="The times the user opened the 2nd tab equal   (" + counter + ")";
});
btn3.addEventListener('click',function(){
    li2.classList.remove('active');
    li3.classList.add('active');
    li1.classList.remove('active');
    li4.classList.remove('active');
    content2.classList.remove('active');
    content1.classList.remove('active');
    content4.classList.remove('active');
    content3.classList.add('active');
    
});
btn4.addEventListener('click',function(){
    li2.classList.remove('active');
    li4.classList.add('active');
    li3.classList.remove('active');
    li1.classList.remove('active');
    content2.classList.remove('active');
    content3.classList.remove('active');
    content1.classList.remove('active');
    content4.classList.add('active');
   
});

window.addEventListener('keydown', function(key){
if (key.keyCode == '49'){
    li2.classList.remove('active');
    li1.classList.add('active');
    li3.classList.remove('active');
    li4.classList.remove('active');
    content2.classList.remove('active');
    content3.classList.remove('active');
    content4.classList.remove('active');
    content1.classList.add('active');
}
else if (key.keyCode == '50'){
    li1.classList.remove('active');
    li2.classList.add('active');
    li3.classList.remove('active');
    li4.classList.remove('active');
    content1.classList.remove('active');
    content3.classList.remove('active');
    content4.classList.remove('active');
    content2.classList.add('active');
    counter= counter + 1;
    counterTwo.textContent="The times the user opened the 2nd tab equal   (" + counter + ")";
}
else if (key.keyCode =='51'){
    li2.classList.remove('active');
    li3.classList.add('active');
    li1.classList.remove('active');
    li4.classList.remove('active');
    content2.classList.remove('active');
    content1.classList.remove('active');
    content4.classList.remove('active');
    content3.classList.add('active');
}
else if (key.keyCode == '52'){
    li2.classList.remove('active');
    li4.classList.add('active');
    li3.classList.remove('active');
    li1.classList.remove('active');
    content2.classList.remove('active');
    content3.classList.remove('active');
    content1.classList.remove('active');
    content4.classList.add('active');
}

});