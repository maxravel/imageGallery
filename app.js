//section 1 coce;
var i=0;
var img=[];
var time=2000;

img[0]="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Paolo_Monti_-_Servizio_fotografico_%28Napoli%2C_1969%29_-_BEIC_6353768.jpg/220px-Paolo_Monti_-_Servizio_fotografico_%28Napoli%2C_1969%29_-_BEIC_6353768.jpg";
img[1]="http://www.storyofmathematics.com/images2/galois.jpg";
img[2]="https://www.8notes.com/images/artists/satie.jpg";
img[3]="https://mm.pwn.pl/ency/jpg/583/1p/d04i0018.jpg";

function changeImg(){
    document.slide.src=img[i];
    if(i<img.length-1){
        i++;
    }
    else{
        i=0;
    }
    setTimeout("changeImg()", time);
};
// console.log(img);

window.onload=changeImg();

//section 2 code;
let a=0;
const photo=document.querySelector('#photo');
photo.src=img[0];
const next=document.querySelector('#next');
const previous=document.querySelector('#previous');

next.addEventListener('click', function(e){
    if(a<img.length-1){
        a++;        
    }
    else{
        a=0;
    }
    photo.src=img[a];
});

previous.addEventListener('click', function(e){
    if(a>0){
        a--;           
    }
    else{
        a=img.length-1;   
    }
    photo.src=img[a];
    e.preventDefault();
});

//section3 code
const photoOne=document.querySelector("#photoOne");
const photoTwo=document.querySelector('#photoTwo');
const photoThree=document.querySelector('#photoThree');
const photoFour=document.querySelector('#photoFour');

photoOne.addEventListener('click',function(e){
    photoOne.classList.toggle("maximaze");;
    e.preventDefault();
});

photoTwo.addEventListener('click',function(e){
    photoTwo.classList.toggle("maximaze");;
    e.preventDefault();
});

photoThree.addEventListener('click',function(e){
    photoThree.classList.toggle("maximaze");;
    e.preventDefault();
});

photoFour.addEventListener('click',function(e){
    photoFour.classList.toggle("maximaze");;
    e.preventDefault();
});