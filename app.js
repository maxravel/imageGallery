//****************************************************section1 code;
var i=0;
var img=[];
var time=2000;

img[0]="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Paolo_Monti_-_Servizio_fotografico_%28Napoli%2C_1969%29_-_BEIC_6353768.jpg/220px-Paolo_Monti_-_Servizio_fotografico_%28Napoli%2C_1969%29_-_BEIC_6353768.jpg";
img[1]="http://www.storyofmathematics.com/images2/galois.jpg";
img[2]="https://www.8notes.com/images/artists/satie.jpg";
img[3]="https://mm.pwn.pl/ency/jpg/583/1p/d04i0018.jpg";

function changeImg(){
    document.querySelector("#slide").src=img[i];

    i<img.length-1 ? i++ : i=0;

    setTimeout("changeImg()", time);
};
window.onload=changeImg();



//******************************************************section2 code;
let a=0;
const photo=document.querySelector('#photo');
photo.src=img[0];
const next=document.querySelector('#next');
const previous=document.querySelector('#previous');

next.addEventListener('click', function(e){

    a<img.length-1 ? a++ : a=0;

    photo.src=img[a];
    e.preventDefault();
});

previous.addEventListener('click', function(e){

    a>0 ? a-- : a=img.length-1;

    photo.src=img[a];
    e.preventDefault();
});



//******************************************************section3 code;
//creating nodeList of imgs:
const imgs3=document.querySelectorAll('.section3 img');

//converting nodeList (imgs3) to Array (z)
var z =[];
for(var x=0;x<imgs3.length;x++){
    z.push(imgs3[x]);
}
//fastest way is: var arr = Array.prototype.slice.call(nodeList)

//forEach works for array:
z.forEach(d => d.addEventListener('click', imgs3click));

function imgs3click(e){
    z.forEach(q => q.classList.remove('maximaze'));
    e.target.classList.toggle('maximaze');
}



//************************************************section4 code;
const lb=document.querySelector('#lightBox');
const lbImg=document.querySelector('#lightBoxImg');
const lbBg=document.querySelector('#lightBoxBg');
const info=document.querySelector('#info');

lbBg.addEventListener('click', function(e){
    lbBg.style.display="none";
    lbImg.style.display="none";
    lb.style.display="none;"
});

lb.addEventListener('click', function(e){
    lbBg.style.display="none";
    lbImg.style.display="none";
    lb.style.display="none";
});

const imgs4 = Array.prototype.slice.call(document.querySelectorAll('.section4 .photo-section img'));
imgs4.forEach(x => x.addEventListener('click', imgs4click));
function imgs4click(e){
    lbBg.style.display="block";
    lb.style.display="block";
    lbImg.style.display="block";
    lbImg.src=e.target.src;
    info.textContent=e.target.alt;
}



//*****************************************************section5 code;
const max=document.querySelector('#max');

max.src=img[1];

const imgs5 = Array.prototype.slice.call(document.querySelectorAll('.opacity'));
imgs5.forEach(a => a.addEventListener('click', imgs5click));

function imgs5click(e){
    max.src=e.target.src;
    imgs5.forEach(d => d.style.opacity=1);
    e.target.style.opacity=0.5;
}



//******************************************************section6 code; 
const current = document.querySelector('#current');
const imgs6 = Array.prototype.slice.call(document.querySelectorAll('.imgs6 img'));
const opacity = 0.4

imgs6[1].style.opacity=opacity;

imgs6.forEach(d => 
    d.addEventListener('click', imgClick)
); // d is img, no matter what name it has

function imgClick(e){

    imgs6.forEach(x => (x.style.opacity=1));
    
    current.src=e.target.src;

    //add fadeIn class
    current.classList.add('fade-in');

    //remove fadeIn, for next usage
    setTimeout(() => current.classList.remove('fade-in'), 500);

    e.target.style.opacity=opacity;

}