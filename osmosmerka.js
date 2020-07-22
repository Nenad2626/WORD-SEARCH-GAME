
let slova=[

"a","e","r","o","d","r","o","m","k","a",
"v","c","e","n","a","h","u","t","e","g",
"i","s","z","z","l","e","p","e","r","h",
"o","l","u","e","e","k","s","e","r","i",
"n","o","b","o","k","a","j","r","v","g",
"s","n","i","z","o","a","o","a","a","r",
"k","a","f","a","nj","l","l","m","j","a",
"a","v","z","e","k","o","i","o","i","o",
"r","a","g","l","r","v","k","d","c","n",
"a","a","o","t","o","p","a","a","a","i",
"n","f","u","n","b","p","v","r","n","c",
"u","f","n","a","r","k","e","k","o","a",
"b","u","š","i","l","i","c","a","d","v",
"o","v","m","n","l","o","e","r","z","j",
"c","a","z","e","v","g","g","s","i","a",
"a","h","i","j","e","n","a","n","o","m",

];


let reci=[

"aerodrom","avionska","bunar","boca","bušilica","cev","cena","daleko","donacija",
"domar","ekran","ekseri","futrola","folklor","grejanje","gola","hleb","hijena","igraonica",
"jako","jeni","kafa","ker","konj","lov","lik","mir","maj","nag",
"niz","nov","oaza","ona","prima","pad","rep","rob","rak",
"slon","teg","top","tri","um","uva","veza","zle","zubi"

];

let slova2=[

"a","a","c","i","n","a","j","o","r","b",
"m","v","v","i","v","i","t","i","d","a",
"i","n","a","t","a","j","n","c","j","k",
"z","i","t","t","o","t","a","i","d","t",
"a","č","i","g","s","r","m","g","i","e",
"j","i","a","e","i","o","a","l","r","r",
"i","j","v","n","n","e","z","a","i","i",
"r","a","a","o","i","t","s","o","g","j",
"a","d","t","a","m","g","i","n","e","a",
"l","u","t","r","i","j","a","h","n","s",
"a","s","p","a","s","o","r","d","t","o",
"m","i","l","i","t","a","n","t","a","n",
"e","p","a","g","n","t","o","s","t","n",
"č","u","v","a","k","o","s","t","i","a",
"f","r","i","ž","i","d","e","r","s","s",
"o","k","i","n","v","a","t","s","a","z",

];

let reci2=[

"autonomija","aditivi","bakterija","brojanica","cigla","carina","dirigent",
"enigma","frižider","gosti","gadan","hrana","inat","joga","kosti","lutrija",
"militantan","meč","namaz","nos","ničija","ostava","rosa","sita",
"san","spas","tost","upis","vest","zima","zastavnik",

];

let slova3=[

"a","l","p","i","n","i","z","a","m","m",
"b","h","o","v","a","v","t","u","l","t",
"z","o","m","o","v","i","n","k","e","a",
"a","d","l","d","l","s","e","c","p","t",
"k","n","e","e","a","o","s","i","t","i",
"o","i","k","r","s","k","e","j","i","c",
"n","k","o","o","i","t","j","a","r","p",
"e","a","r","o","t","k","o","d","d","r",
"a","l","k","a","t","s","e","r","k","s",
"n","n","a","i","e","u","o","s","t","t",
"r","g","t","n","p","l","t","o","e","s",
"e","o","a","i","i","e","r","n","k","o",
"r","l","t","n","h","f","o","o","i","k",
"a","f","s","i","o","r","v","p","v","p",
"p","e","s","m","a","z","o","v","z","i",
"b","d","u","ž","n","i","k","l","u","g",

];

let reci3=[

"alpinizam","aukcija","bolest","besnilo","citat","doktor","dužnik","elita","epika","finale",
"gipkost","golf","hodnik","hitna","izvoz","jesen","ktitor","kresta","leptir","lug",
"mleko","mini","nivo","otrov","ponos","prst","pesma","rerna","redovi","sekire",
"tepih","tenor","uzvik","upit","visok","vlasi","zakon","zona",

];


let osmosmerka=document.querySelector(".osmosmerka");
let noviZvuk=new Audio();

function dodavanjeReciOsmosmerka() {
	
for(let i=0; i < 160; i++) {

let zbirkaReci=document.createElement("div");
zbirkaReci.className="rec";
osmosmerka.appendChild(zbirkaReci);

  }

}

dodavanjeReciOsmosmerka();


let unosReci=document.querySelectorAll(".reci");
let recnik=document.querySelectorAll(".rec");

function rasporedReci() {
	
for(let i=0; i < 47; i++)  {

unosReci[i].textContent=reci[i];

 }

for(let i=0; i < recnik.length; i++)  {

recnik[i].textContent=slova[i];

 }


}

rasporedReci();

let listaReci="";

for(let i=0; i < recnik.length; i++)  {

recnik[i].addEventListener("click", resavanje);

}

let listaBrojeva=[];

function resavanje(event) {

this.style.background="deepskyblue";
this.style.color="white";
this.style.textDecoration="underline";
this.classList.add("crta");
listaReci +=this.textContent;
listaBrojeva.push($(this).index());
noviZvuk.src="osmosmerka.mp3";
noviZvuk.play();

}

let vreme=document.querySelector(".sat");

let lista1=[0,1,2,3,4,5,6,7];
let lista2=[0,10,20,30,40,50,60,70];
let lista3=[120,110,100,90,80];
let lista4=[120,130,140,150];
let lista5=[120,121,122,123,124,125,126,127];
let lista6=[11,12,13,14];
let lista7=[126,116,106];
let lista8=[4,14,24,34,44,54];
let lista9=[128,118,108,98,88,78,68,58];
let lista10=[87,77,67,57,47];
let lista11=[116,115,114,113,112];
let lista12=[34,35,36,37,38,39];
let lista13=[111,102,93,84,75,66,57];
let lista14=[101,92,83,74,65,56,47];
let lista15=[19,28,37,46,55,64,73];
let lista16=[146,135,124,113];
let lista17=[15,24,33,42];
let lista18=[151,152,153,154,155,156];
let lista19=[39,49,59,69,79,89,99,109,119];
let lista20=[46,45,44,43];
let lista21=[153,143,133,123];
let lista22=[60,61,62,63];
let lista23=[8,18,28];
let lista24=[44,54,64];
let lista25=[65,75,85];
let lista26=[66,76,86];
let lista27=[159,148,137];
let lista28=[159,149,139];
let lista29=[100,91,82];
let lista30=[51,52,53];
let lista31=[103,94,85];
let lista32=[54,63,72,81];
let lista33=[158,157,156];
let lista34=[105,114,123,132,141];
let lista35=[105,96,87];
let lista36=[28,27,26];
let lista37=[84,94,104];
let lista38=[137,127,117];
let lista39=[21,31,41,51];
let lista40=[17,18,19];
let lista41=[93,94,95];
let lista42=[17,28,39];
let lista43=[16,7];
let lista44=[121,131,141];
let lista45=[144,143,142,141];
let lista46=[23,24,25];
let lista47=[22,32,42,52];

let skupLista1=[

lista1,lista2,lista3,lista4,lista5,
lista6,lista7,lista8,lista9,lista10,
lista11,lista12,lista13,lista14,lista15,
lista16,lista17,lista18,lista19,lista20,
lista21,lista22,lista23,lista24,lista25,
lista26,lista27,lista28,lista29,lista30,
lista31,lista32,lista33,lista34,lista35,
lista36,lista37,lista38,lista39,lista40,
lista41,lista42,lista43,lista44,lista45,
lista46,lista47

];

let listaKombinacija1=[100,91,82,73,64,55,46,37,28,19];
let listaKombinacija2=[19,18,17,16,15,14,13];
let listaKombinacija3=[9,19,29,39,49,59,69,79,89];
let listaKombinacija4=[9,8,7,6,5,4,3,2,1];
let listaKombinacija5=[27,37,47,57,67];
let listaKombinacija6=[27,36,45,54,63,72];
let listaKombinacija7=[21,31,41,51,61,71];
let listaKombinacija8=[38,48,58,68,78,88,98,108];
let listaKombinacija9=[101,102,103,104];
let listaKombinacija10=[88,87,86,85,84,83];
let listaKombinacija11=[140,141,142,143,144,145,146,147];
let listaKombinacija12=[78,77,76,75,74];
let listaKombinacija13=[85,96,107,118,129];
let listaKombinacija14=[97,106,115,124,133];
let listaKombinacija15=[20,21,22,23];
let listaKombinacija16=[25,34,43,52];
let listaKombinacija17=[134,135,136,137,138];
let listaKombinacija18=[90,91,92,93,94,95,96];
let listaKombinacija19=[110,111,112,113,114,115,116,117,118,119];
let listaKombinacija20=[110,120,130];
let listaKombinacija21=[26,36,46,56,66];
let listaKombinacija22=[119,109,99];
let listaKombinacija23=[55,44,33,22,11,0];
let listaKombinacija24=[106,105,104,103];
let listaKombinacija25=[148,138,128,118];
let listaKombinacija26=[149,139,129];
let listaKombinacija27=[125,126,127,128];
let listaKombinacija28=[131,121,111,101];
let listaKombinacija29=[62,53,44,35];
let listaKombinacija30=[30,20,10,0];
let listaKombinacija31=[159,158,157,156,155,154,153,152,151];

let skupLista2=[

listaKombinacija1,listaKombinacija2,listaKombinacija3,listaKombinacija4,
listaKombinacija5,listaKombinacija6,listaKombinacija7,listaKombinacija8,
listaKombinacija9,listaKombinacija10,listaKombinacija11,listaKombinacija12,
listaKombinacija13,listaKombinacija14,listaKombinacija15,listaKombinacija16,
listaKombinacija17,listaKombinacija18,listaKombinacija19,listaKombinacija20,
listaKombinacija21,listaKombinacija22,listaKombinacija23,listaKombinacija24,
listaKombinacija25,listaKombinacija26,listaKombinacija27,listaKombinacija28,
listaKombinacija29,listaKombinacija30,listaKombinacija31,

];


let kombinacijaSlova1=[0,1,2,3,4,5,6,7,8];
let kombinacijaSlova2=[7,17,27,37,47,57,67];
let kombinacijaSlova3=[10,21,32,43,54,65];
let kombinacijaSlova4=[150,141,132,123,114,105,96];
let kombinacijaSlova5=[59,49,39,29,19];
let kombinacijaSlova6=[77,76,75,74,73,72];
let kombinacijaSlova7=[151,152,153,154,155,156];
let kombinacijaSlova8=[43,34,25,16,7];
let kombinacijaSlova9=[115,104,93,82,71];
let kombinacijaSlova10=[125,114,103,92,81,70];
let kombinacijaSlova11=[159,149,139,129,119,109,99];
let kombinacijaSlova12=[101,111,121,131];
let kombinacijaSlova13=[11,21,31,41,51,61];
let kombinacijaSlova14=[124,113,102,91,80];
let kombinacijaSlova15=[149,148,147,146,145];
let kombinacijaSlova16=[66,56,46,36,26];
let kombinacijaSlova17=[75,84,93,102,111,120];
let kombinacijaSlova18=[88,87,86,85,84,83];
let kombinacijaSlova19=[18,28,38,48,58,68];
let kombinacijaSlova20=[157,158,159];
let kombinacijaSlova21=[22,32,42,52,62];
let kombinacijaSlova22=[143,133,123,113];
let kombinacijaSlova23=[26,25,24,23];
let kombinacijaSlova24=[96,106,116,126,136];
let kombinacijaSlova25=[137,127,117,107,97];
let kombinacijaSlova26=[69,79,89,99];
let kombinacijaSlova27=[140,141,142,143,144];
let kombinacijaSlova28=[120,110,100,90,80];
let kombinacijaSlova29=[53,43,33,23,13,3];
let kombinacijaSlova30=[97,86,75,64,53,42];
let kombinacijaSlova31=[84,94,104,114,124];
let kombinacijaSlova32=[99,108,117,126,135];
let kombinacijaSlova33=[158,148,138,128,118];
let kombinacijaSlova34=[95,104,113,122];
let kombinacijaSlova35=[15,25,35,45,55];
let kombinacijaSlova36=[24,34,44,54,64];
let kombinacijaSlova37=[20,30,40,50,60];
let kombinacijaSlova38=[145,134,123,112];

let skupKombinacija=[

kombinacijaSlova1,kombinacijaSlova2,kombinacijaSlova3,kombinacijaSlova4,
kombinacijaSlova5,kombinacijaSlova6,kombinacijaSlova7,kombinacijaSlova8,
kombinacijaSlova9,kombinacijaSlova10,kombinacijaSlova11,kombinacijaSlova12,
kombinacijaSlova13,kombinacijaSlova14,kombinacijaSlova15,kombinacijaSlova16,
kombinacijaSlova17,kombinacijaSlova18,kombinacijaSlova19,kombinacijaSlova20,
kombinacijaSlova21,kombinacijaSlova22,kombinacijaSlova23,kombinacijaSlova24,
kombinacijaSlova25,kombinacijaSlova26,kombinacijaSlova27,kombinacijaSlova28,
kombinacijaSlova29,kombinacijaSlova30,kombinacijaSlova31,kombinacijaSlova32,
kombinacijaSlova33,kombinacijaSlova34,kombinacijaSlova35,kombinacijaSlova36,
kombinacijaSlova37,kombinacijaSlova38

];


function provera() {

for(let i=0; i < unosReci.length; i++) {
for(let y=0; y < skupLista1.length; y++)  {

if(listaReci==unosReci[i].textContent && listaReci.length > 0 && listaBrojeva.toString()==skupLista1[y].toString()) {

unosReci[i].style.textDecoration="line-through";
unosReci[i].classList.add("precrtano");
listaReci='';
listaBrojeva=[];
$(".crta").addClass("recPronadjena");
$(".recPronadjena").removeClass("crta");
vreme.textContent=45;

    } 

   }

  }

for(let i=0; i < unosReci.length; i++) {
for(let y=0; y < skupLista2.length; y++)  {

if(listaReci==unosReci[i].textContent && listaReci.length > 0 && listaBrojeva.toString()==skupLista2[y].toString()) {

unosReci[i].style.textDecoration="line-through";
unosReci[i].classList.add("recPrecrtana");
listaReci='';
listaBrojeva=[];
$(".crta").addClass("recZaokruzena");
$(".recZaokruzena").removeClass("crta");
vreme.textContent=45;

    } 

   }

  }

for(let i=0; i < unosReci.length; i++) {
for(let y=0; y < skupKombinacija.length; y++)  {

if(listaReci==unosReci[i].textContent && listaReci.length > 0 && listaBrojeva.toString()==skupKombinacija[y].toString()) {

unosReci[i].style.textDecoration="line-through";
unosReci[i].classList.add("recPrecrtana2");
listaReci='';
listaBrojeva=[];
$(".crta").addClass("pretragaGotova");
$(".pretragaGotova").removeClass("crta");
vreme.textContent=45;

    } 

   }

  }

$(".pretragaGotova").removeClass("crta").css("background","orange");
$(".recPronadjena").removeClass("crta").css("background","olivedrab");
$(".recZaokruzena").removeClass("crta").css("background","plum");


}

let pokretanje=setInterval(provera, 1);

function stoperica() {
	
let istek=parseInt(vreme.textContent);
vreme.textContent=istek-1;

if(vreme.textContent==0) {

vreme.textContent=45;
$(".crta").css("background","white").css("color","black").css("text-decoration","none");
listaReci="";
listaBrojeva=[];

}

if(vreme.textContent < 10) {

$(".sat").prepend("0");

 }


if($(".recPrecrtana2").length==38)  {

clearInterval(promena);
vreme.textContent=0;

  }

}

let promena=setInterval(stoperica, 1000);

let slovoUreci=document.querySelectorAll(".rec");

function noviNivo() {
	
if($(".precrtano").length==47) {

$(".rec").css("background","white").css("color","black").css("text-decoration","none");
$(".reci").css("text-decoration","none");
$(".precrtano").removeClass("precrtano").css("background","white");
$(".recPronadjena").css("background","white");
$(".recPronadjena").removeClass("recPronadjena");

for(let i=0; i < 31; i++)  {

unosReci[i].textContent=reci2[i];

 }

for(let i=31; i < 50; i++)  {

unosReci[i].textContent="";

 }


for(let i=0; i < recnik.length; i++)  {

recnik[i].textContent=slova2[i];

 }

listaReci="";
listaBrojeva=[];
skupLista1=[];

  }
 
if($(".recPrecrtana").length==31)  {

$(".rec").css("background","white").css("color","black").css("text-decoration","none");
$(".reci").css("text-decoration","none");
$(".recPrecrtana").removeClass("recPrecrtana").css("background","white");;
$(".precrtano").removeClass("precrtano");
$(".recZaokruzena").css("background","white");
$(".recZaokruzena").removeClass("recZaokruzena");

for(let i=0; i < 38; i++)  {

unosReci[i].textContent=reci3[i];

 }

for(let i=38; i < 50; i++)  {

unosReci[i].textContent="";

 }


for(let i=0; i < recnik.length; i++)  {

recnik[i].textContent=slova3[i];

 }

listaReci="";
listaBrojeva=[];
skupLista2=[];

}

if($(".recPrecrtana2").length==38) {

$(".recPrecrtana").removeClass("recPrecrtana");
$(".precrtano").removeClass("precrtano");
$(".reci").text("");
$(".reci").css("text-decoration","none");
$('.grupaReci').css("border","1px solid olivedrab");

for(let i=0; i < 160; i++)  {

osmosmerka.removeChild(slovoUreci[i]);
slovoUreci[i].textContent="";

   }

osmosmerka.textContent="CESTITKE VI STE NAJBOLJI";
osmosmerka.style.fontSize="120px";
osmosmerka.style.color="white";
osmosmerka.style.textAlign="center";
osmosmerka.style.background="olivedrab";
osmosmerka.style.border="1px solid olivedrab";


$("body").css("background","olivedrab");


clearInterval(promena);
vreme.textContent="00";
$(".vreme").css("visibility","hidden");

  }

}

let ucitavanje=setInterval(noviNivo,1000);