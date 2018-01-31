//console.log('gallery');
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
console.log(img);


window.onload=changeImg();
