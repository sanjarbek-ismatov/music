"use strict"
// prettier-ignore
const _0xb1fbac=_0xe954;(function(_0x4ba62f,_0x562606){const _0x55e26c=_0xe954,_0x35a7fa=_0x4ba62f();while(!![]){try{const _0x4cabb4=parseInt(_0x55e26c(0x112))/0x1+parseInt(_0x55e26c(0xf7))/0x2+-parseInt(_0x55e26c(0xea))/0x3*(-parseInt(_0x55e26c(0x110))/0x4)+parseInt(_0x55e26c(0xe5))/0x5*(-parseInt(_0x55e26c(0x111))/0x6)+parseInt(_0x55e26c(0xf6))/0x7+parseInt(_0x55e26c(0x113))/0x8+-parseInt(_0x55e26c(0xe7))/0x9;if(_0x4cabb4===_0x562606)break;else _0x35a7fa['push'](_0x35a7fa['shift']());}catch(_0x4121e2){_0x35a7fa['push'](_0x35a7fa['shift']());}}}(_0x37e2,0xbdc2c));const songs=[{'name':_0xb1fbac(0xd8),'author':_0xb1fbac(0xe9),'src':_0xb1fbac(0xfc)},{'name':_0xb1fbac(0xf5),'author':_0xb1fbac(0xf3),'src':_0xb1fbac(0x10e)},{'name':_0xb1fbac(0xf0),'author':_0xb1fbac(0x106),'src':_0xb1fbac(0x10c)},{'name':_0xb1fbac(0x117),'author':'SHAMI','src':_0xb1fbac(0xe3)},{'name':_0xb1fbac(0x10a),'author':_0xb1fbac(0x102),'src':_0xb1fbac(0xe8)},{'name':_0xb1fbac(0xfb),'author':'Duncan\x20Laurence\x20feat\x20Fletcher','src':_0xb1fbac(0xee)},{'name':_0xb1fbac(0xde),'author':_0xb1fbac(0xf1),'src':_0xb1fbac(0xe6)}],audioTag=document[_0xb1fbac(0xed)](_0xb1fbac(0xfd)),next=document[_0xb1fbac(0xed)](_0xb1fbac(0xfe)),pause=document[_0xb1fbac(0xed)]('#pause'),prev=document[_0xb1fbac(0xed)](_0xb1fbac(0x107)),range=document[_0xb1fbac(0xed)]('#range'),img=document['querySelector'](_0xb1fbac(0x104)),title=document[_0xb1fbac(0xed)](_0xb1fbac(0xef)),currentTime=document[_0xb1fbac(0xed)](_0xb1fbac(0xdc)),fullTime=document[_0xb1fbac(0xed)](_0xb1fbac(0x10d)),volume=document['querySelector']('#volume'),volumePercent=document['querySelector']('#volumePercent');let index=localStorage[_0xb1fbac(0xda)]||0x0;audioTag[_0xb1fbac(0xf9)]=songs[index][_0xb1fbac(0xf9)],title[_0xb1fbac(0xdd)]=songs[index][_0xb1fbac(0x109)]+'\x20-\x20'+songs[index]['author'],audioTag[_0xb1fbac(0x101)]=()=>{const _0x2c7616=_0xb1fbac,_0x32888d=Math[_0x2c7616(0x116)](audioTag[_0x2c7616(0xe4)]/0x3c),_0x25be44=Math[_0x2c7616(0x116)](audioTag[_0x2c7616(0xe4)]-_0x32888d*0x3c);fullTime[_0x2c7616(0xdd)]=_0x32888d+':'+(_0x25be44>0x9?_0x25be44:'0'+_0x25be44);};function _0xe954(_0x8fd9e5,_0x835948){const _0x37e236=_0x37e2();return _0xe954=function(_0xe9546c,_0x51bd56){_0xe9546c=_0xe9546c-0xd8;let _0x515a65=_0x37e236[_0xe9546c];return _0x515a65;},_0xe954(_0x8fd9e5,_0x835948);}function _0x37e2(){const _0x570ca7=['Timran\x20&\x20Zell\x20&\x20Batrai','#prev','currentTime','name','Ты\x20Cо\x20Мной','paused','./audios/audio-3.mp3','#fullTime','./audios/audio-2.mp3','Ovoz:\x20','968228SkjFmb','312UnfHEn','331065CyZOSy','5047104tWpAxi','ended','author','floor','Фея','Колыбельная','add','index','fa-pause','#currentTime','textContent','No\x20lie','classList','play','value','playing','./audios/audio-4.mp3','duration','95395lOkNAt','./audios/audio-7.mp3','4230405SBVtcy','./audios/audio-5.mp3','Jah\x20khalib','6SXEvku','addEventListener','fa-play','querySelector','./audios/audio-6.mp3','#title','Берега','Sean\x20Paul\x20&\x20Dua\x20Lipa','length','Alec\x20Bejamin','setItem','Let\x20Me\x20Down\x20Slowly','3014004RwThjN','725548TGCyog','click','src','remove','Arcade','./audios/audio-1.mp3','#audio','#next','title','pause','onloadedmetadata','Lina\x20Lee\x20feat\x20Ваня\x20Дмитриенко','\x20-\x20','#img','volume'];_0x37e2=function(){return _0x570ca7;};return _0x37e2();}function playMusic(){const _0x3ed5b1=_0xb1fbac;localStorage[_0x3ed5b1(0xf4)](_0x3ed5b1(0xda),index),document[_0x3ed5b1(0xff)]=songs[index][_0x3ed5b1(0x109)]+'\x20-\x20'+songs[index]['author'],audioTag[_0x3ed5b1(0x10b)]?(audioTag[_0x3ed5b1(0xe0)](),img[_0x3ed5b1(0xdf)][_0x3ed5b1(0xd9)]('playing'),pause['classList']['add'](_0x3ed5b1(0xdb)),pause[_0x3ed5b1(0xdf)][_0x3ed5b1(0xfa)]('fa-play'),setInterval(()=>{const _0x1e8d3f=_0x3ed5b1,_0xdec979=audioTag[_0x1e8d3f(0x108)]/audioTag[_0x1e8d3f(0xe4)]*0x64;range[_0x1e8d3f(0xe1)]=_0xdec979;const _0x12bb5b=Math[_0x1e8d3f(0x116)](audioTag[_0x1e8d3f(0x108)]/0x3c),_0x2a8221=Math['floor'](audioTag[_0x1e8d3f(0x108)]-_0x12bb5b*0x3c);currentTime[_0x1e8d3f(0xdd)]=_0x12bb5b+':'+(_0x2a8221>0x9?_0x2a8221:'0'+_0x2a8221),audioTag[_0x1e8d3f(0x114)]&&nextMusic();},0x1f4)):(audioTag[_0x3ed5b1(0x100)](),img[_0x3ed5b1(0xdf)][_0x3ed5b1(0xfa)](_0x3ed5b1(0xe2)),pause[_0x3ed5b1(0xdf)][_0x3ed5b1(0xfa)]('fa-pause'),pause['classList'][_0x3ed5b1(0xd9)](_0x3ed5b1(0xec)));}function changeEvent(){const _0x2f08de=_0xb1fbac,_0x8cd9d=audioTag['duration']/0x64;audioTag[_0x2f08de(0x108)]=range[_0x2f08de(0xe1)]*_0x8cd9d;}function changeVolume(){const _0x1fc8c3=_0xb1fbac;audioTag[_0x1fc8c3(0x105)]=+volume[_0x1fc8c3(0xe1)]/0x64,volumePercent[_0x1fc8c3(0xdd)]=_0x1fc8c3(0x10f)+volume[_0x1fc8c3(0xe1)]+'%';}function nextMusic(){const _0x397c87=_0xb1fbac;range[_0x397c87(0xe1)]=0x0,index==songs[_0x397c87(0xf2)]-0x1?index=0x0:index++,title['textContent']=songs[index][_0x397c87(0x109)]+'\x20-\x20'+songs[index][_0x397c87(0x115)],audioTag[_0x397c87(0xf9)]=songs[index][_0x397c87(0xf9)],playMusic();}function prevMusic(){const _0x451545=_0xb1fbac;range[_0x451545(0xe1)]=0x0,index==0x0?index=songs['length']-0x1:index--,title[_0x451545(0xdd)]=songs[index][_0x451545(0x109)]+_0x451545(0x103)+songs[index][_0x451545(0x115)],audioTag[_0x451545(0xf9)]=songs[index][_0x451545(0xf9)],playMusic();}next[_0xb1fbac(0xeb)](_0xb1fbac(0xf8),nextMusic),prev[_0xb1fbac(0xeb)]('click',prevMusic),pause[_0xb1fbac(0xeb)](_0xb1fbac(0xf8),playMusic);