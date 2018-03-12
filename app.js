//section1 code;
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
window.onload=changeImg();



//section2 code;
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



//section4 code
const photoO=document.querySelector('#photoO');
const photoT=document.querySelector('#photoT');
const photoTh=document.querySelector('#photoTh');
const photoF=document.querySelector('#photoF');
const lb=document.querySelector('#lightBox');
const lbImg=document.querySelector('#lightBoxImg');
const lbBg=document.querySelector('#lightBoxBg');
const info=document.querySelector('#info');

photoO.addEventListener('click', function(e){
    lbBg.style.display="block";
    lb.style.display="block";
    lbImg.style.display="block";
    lbImg.src=img[0];
    info.innerText='Zeno of Citium';
    e.preventDefault();
});

photoT.addEventListener('click', function(e){
    lbBg.style.display="block";
    lb.style.display="block";
    lbImg.style.display="block";
    lbImg.src=img[1];
    info.innerText='Evariste Galois';
    e.preventDefault();
});

photoTh.addEventListener('click', function(e){
    lbBg.style.display="block";
    lb.style.display="block";
    lbImg.style.display="block";
    lbImg.src=img[2];
    info.innerText='Eric Satie';
    e.preventDefault();
});

photoF.addEventListener('click', function(e){
    lbBg.style.display="block";
    lb.style.display="block";
    lbImg.style.display="block";
    lbImg.src=img[3];
    info.innerText='Jan III Sobieski';
    e.preventDefault();
});

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



//section5 code
const photoI=document.querySelector('#photoI');
const photoII=document.querySelector('#photoII');
const photoIII=document.querySelector('#photoIII');
const photoIV=document.querySelector('#photoIV'); 
const max=document.querySelector('#max');

max.src=img[1];

photoI.addEventListener('click', function(e){
    max.src=img[0];
    e.preventDefault();
})

photoII.addEventListener('click', function(e){
    max.src=img[1];
    e.preventDefault();
})

photoIII.addEventListener('click', function(e){
    max.src=img[2];
    e.preventDefault();
})

photoIV.addEventListener('click', function(e){
    max.src=img[3];
    e.preventDefault();
})



//section6 code 
const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.4

imgs[1].style.opacity=opacity;

imgs.forEach(d => 
    d.addEventListener('click', imgClick)
); // d is img, no matter what name it has

function imgClick(e){
    imgs.forEach(x => (x.style.opacity=1));
    current.src=e.target.src;

    //add fadeIn class
    current.classList.add('fade-in');

    //remove fadeIn
    setTimeout(() => current.classList.remove('fade-in'), 500);

    e.target.style.opacity=opacity;

}

//e => (current.src = e.target.src)