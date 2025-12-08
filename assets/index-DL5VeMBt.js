(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const jc="160",Rm=0,mh=1,Cm=2,$f=1,Lm=2,oi=3,Fi=0,rn=1,li=2,Pi=0,Dr=1,_c=2,gh=3,_h=4,Pm=5,Ji=100,Dm=101,Um=102,vh=103,xh=104,Im=200,Nm=201,Fm=202,Om=203,vc=204,xc=205,Bm=206,km=207,Gm=208,zm=209,Hm=210,Vm=211,Wm=212,Xm=213,qm=214,Ym=0,jm=1,Km=2,Aa=3,$m=4,Zm=5,Jm=6,Qm=7,Kc=0,eg=1,tg=2,Di=0,ng=1,ig=2,rg=3,sg=4,ag=5,og=6,Zf=300,kr=301,Gr=302,Mc=303,Sc=304,za=306,Ec=1e3,kn=1001,yc=1002,Kt=1003,Mh=1004,To=1005,bn=1006,cg=1007,bs=1008,Ui=1009,lg=1010,hg=1011,$c=1012,Jf=1013,Ci=1014,Li=1015,ws=1016,Qf=1017,ed=1018,nr=1020,ug=1021,Gn=1023,fg=1024,dg=1025,ir=1026,zr=1027,pg=1028,td=1029,mg=1030,nd=1031,id=1033,Ao=33776,bo=33777,wo=33778,Ro=33779,Sh=35840,Eh=35841,yh=35842,Th=35843,rd=36196,Ah=37492,bh=37496,wh=37808,Rh=37809,Ch=37810,Lh=37811,Ph=37812,Dh=37813,Uh=37814,Ih=37815,Nh=37816,Fh=37817,Oh=37818,Bh=37819,kh=37820,Gh=37821,Co=36492,zh=36494,Hh=36495,gg=36283,Vh=36284,Wh=36285,Xh=36286,sd=3e3,rr=3001,_g=3200,vg=3201,ad=0,xg=1,Rn="",kt="srgb",_i="srgb-linear",Zc="display-p3",Ha="display-p3-linear",ba="linear",lt="srgb",wa="rec709",Ra="p3",ur=7680,qh=519,Mg=512,Sg=513,Eg=514,od=515,yg=516,Tg=517,Ag=518,bg=519,Yh=35044,jh="300 es",Tc=1035,ui=2e3,Ca=2001;class Qr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lo=Math.PI/180,Ac=180/Math.PI;function Ds(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[t&255]+Ht[t>>8&255]+Ht[t>>16&255]+Ht[t>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[n&63|128]+Ht[n>>8&255]+"-"+Ht[n>>16&255]+Ht[n>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function nn(t,e,n){return Math.max(e,Math.min(n,t))}function wg(t,e){return(t%e+e)%e}function Po(t,e,n){return(1-n)*t+n*e}function Kh(t){return(t&t-1)===0&&t!==0}function bc(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function us(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Qt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ze{constructor(e=0,n=0){Ze.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,n,i,r,s,a,o,c,l){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,l)}set(e,n,i,r,s,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],f=i[7],d=i[2],m=i[5],v=i[8],_=r[0],p=r[3],u=r[6],T=r[1],E=r[4],A=r[7],D=r[2],R=r[5],w=r[8];return s[0]=a*_+o*T+c*D,s[3]=a*p+o*E+c*R,s[6]=a*u+o*A+c*w,s[1]=l*_+h*T+f*D,s[4]=l*p+h*E+f*R,s[7]=l*u+h*A+f*w,s[2]=d*_+m*T+v*D,s[5]=d*p+m*E+v*R,s[8]=d*u+m*A+v*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return n*a*h-n*o*l-i*s*h+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=h*a-o*l,d=o*c-h*s,m=l*s-a*c,v=n*f+i*d+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=f*_,e[1]=(r*l-h*i)*_,e[2]=(o*i-r*a)*_,e[3]=d*_,e[4]=(h*n-r*c)*_,e[5]=(r*s-o*n)*_,e[6]=m*_,e[7]=(i*c-l*n)*_,e[8]=(a*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Do.makeScale(e,n)),this}rotate(e){return this.premultiply(Do.makeRotation(-e)),this}translate(e,n){return this.premultiply(Do.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Do=new Ve;function cd(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function La(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Rg(){const t=La("canvas");return t.style.display="block",t}const $h={};function Es(t){t in $h||($h[t]=!0,console.warn(t))}const Zh=new Ve().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Jh=new Ve().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Vs={[_i]:{transfer:ba,primaries:wa,toReference:t=>t,fromReference:t=>t},[kt]:{transfer:lt,primaries:wa,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Ha]:{transfer:ba,primaries:Ra,toReference:t=>t.applyMatrix3(Jh),fromReference:t=>t.applyMatrix3(Zh)},[Zc]:{transfer:lt,primaries:Ra,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Jh),fromReference:t=>t.applyMatrix3(Zh).convertLinearToSRGB()}},Cg=new Set([_i,Ha]),nt={enabled:!0,_workingColorSpace:_i,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!Cg.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Vs[e].toReference,r=Vs[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Vs[t].primaries},getTransfer:function(t){return t===Rn?ba:Vs[t].transfer}};function Ur(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Uo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let fr;class ld{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{fr===void 0&&(fr=La("canvas")),fr.width=e.width,fr.height=e.height;const i=fr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=fr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=La("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ur(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ur(n[i]/255)*255):n[i]=Ur(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Lg=0;class hd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lg++}),this.uuid=Ds(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Io(r[a].image)):s.push(Io(r[a]))}else s=Io(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Io(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?ld.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Pg=0;class sn extends Qr{constructor(e=sn.DEFAULT_IMAGE,n=sn.DEFAULT_MAPPING,i=kn,r=kn,s=bn,a=bs,o=Gn,c=Ui,l=sn.DEFAULT_ANISOTROPY,h=Rn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pg++}),this.uuid=Ds(),this.name="",this.source=new hd(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===rr?kt:Rn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ec:e.x=e.x-Math.floor(e.x);break;case kn:e.x=e.x<0?0:1;break;case yc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ec:e.y=e.y-Math.floor(e.y);break;case kn:e.y=e.y<0?0:1;break;case yc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===kt?rr:sd}set encoding(e){Es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===rr?kt:Rn}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Zf;sn.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,n=0,i=0,r=1){ft.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,l=c[0],h=c[4],f=c[8],d=c[1],m=c[5],v=c[9],_=c[2],p=c[6],u=c[10];if(Math.abs(h-d)<.01&&Math.abs(f-_)<.01&&Math.abs(v-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+_)<.1&&Math.abs(v+p)<.1&&Math.abs(l+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(l+1)/2,A=(m+1)/2,D=(u+1)/2,R=(h+d)/4,w=(f+_)/4,$=(v+p)/4;return E>A&&E>D?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=R/i,s=w/i):A>D?A<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(A),i=R/r,s=$/r):D<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),i=w/s,r=$/s),this.set(i,r,s,n),this}let T=Math.sqrt((p-v)*(p-v)+(f-_)*(f-_)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(p-v)/T,this.y=(f-_)/T,this.z=(d-h)/T,this.w=Math.acos((l+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Dg extends Qr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new ft(0,0,e,n),this.scissorTest=!1,this.viewport=new ft(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Es("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===rr?kt:Rn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new sn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new hd(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ar extends Dg{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class ud extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ug extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Us{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let c=i[r+0],l=i[r+1],h=i[r+2],f=i[r+3];const d=s[a+0],m=s[a+1],v=s[a+2],_=s[a+3];if(o===0){e[n+0]=c,e[n+1]=l,e[n+2]=h,e[n+3]=f;return}if(o===1){e[n+0]=d,e[n+1]=m,e[n+2]=v,e[n+3]=_;return}if(f!==_||c!==d||l!==m||h!==v){let p=1-o;const u=c*d+l*m+h*v+f*_,T=u>=0?1:-1,E=1-u*u;if(E>Number.EPSILON){const D=Math.sqrt(E),R=Math.atan2(D,u*T);p=Math.sin(p*R)/D,o=Math.sin(o*R)/D}const A=o*T;if(c=c*p+d*A,l=l*p+m*A,h=h*p+v*A,f=f*p+_*A,p===1-o){const D=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=D,l*=D,h*=D,f*=D}}e[n]=c,e[n+1]=l,e[n+2]=h,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],h=i[r+3],f=s[a],d=s[a+1],m=s[a+2],v=s[a+3];return e[n]=o*v+h*f+c*m-l*d,e[n+1]=c*v+h*d+l*f-o*m,e[n+2]=l*v+h*m+o*d-c*f,e[n+3]=h*v-o*f-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(r/2),f=o(s/2),d=c(i/2),m=c(r/2),v=c(s/2);switch(a){case"XYZ":this._x=d*h*f+l*m*v,this._y=l*m*f-d*h*v,this._z=l*h*v+d*m*f,this._w=l*h*f-d*m*v;break;case"YXZ":this._x=d*h*f+l*m*v,this._y=l*m*f-d*h*v,this._z=l*h*v-d*m*f,this._w=l*h*f+d*m*v;break;case"ZXY":this._x=d*h*f-l*m*v,this._y=l*m*f+d*h*v,this._z=l*h*v+d*m*f,this._w=l*h*f-d*m*v;break;case"ZYX":this._x=d*h*f-l*m*v,this._y=l*m*f+d*h*v,this._z=l*h*v-d*m*f,this._w=l*h*f+d*m*v;break;case"YZX":this._x=d*h*f+l*m*v,this._y=l*m*f+d*h*v,this._z=l*h*v-d*m*f,this._w=l*h*f-d*m*v;break;case"XZY":this._x=d*h*f-l*m*v,this._y=l*m*f-d*h*v,this._z=l*h*v+d*m*f,this._w=l*h*f+d*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],c=n[9],l=n[2],h=n[6],f=n[10],d=i+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(h-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,c=n._y,l=n._z,h=n._w;return this._x=i*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-i*l,this._z=s*h+a*l+i*c-r*o,this._w=a*h-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),f=Math.sin((1-n)*h)/l,d=Math.sin(n*h)/l;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,n=0,i=0){P.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Qh.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Qh.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),h=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+c*l+a*f-o*h,this.y=i+c*h+o*l-s*f,this.z=r+c*f+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,c=n.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return No.copy(this).projectOnVector(e),this.sub(No)}reflect(e){return this.sub(No.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const No=new P,Qh=new Us;class Is{constructor(e=new P(1/0,1/0,1/0),n=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Nn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Nn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Nn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Nn):Nn.fromBufferAttribute(s,a),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ws.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ws.copy(i.boundingBox)),Ws.applyMatrix4(e.matrixWorld),this.union(Ws)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fs),Xs.subVectors(this.max,fs),dr.subVectors(e.a,fs),pr.subVectors(e.b,fs),mr.subVectors(e.c,fs),Si.subVectors(pr,dr),Ei.subVectors(mr,pr),Wi.subVectors(dr,mr);let n=[0,-Si.z,Si.y,0,-Ei.z,Ei.y,0,-Wi.z,Wi.y,Si.z,0,-Si.x,Ei.z,0,-Ei.x,Wi.z,0,-Wi.x,-Si.y,Si.x,0,-Ei.y,Ei.x,0,-Wi.y,Wi.x,0];return!Fo(n,dr,pr,mr,Xs)||(n=[1,0,0,0,1,0,0,0,1],!Fo(n,dr,pr,mr,Xs))?!1:(qs.crossVectors(Si,Ei),n=[qs.x,qs.y,qs.z],Fo(n,dr,pr,mr,Xs))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ni=[new P,new P,new P,new P,new P,new P,new P,new P],Nn=new P,Ws=new Is,dr=new P,pr=new P,mr=new P,Si=new P,Ei=new P,Wi=new P,fs=new P,Xs=new P,qs=new P,Xi=new P;function Fo(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Xi.fromArray(t,s);const o=r.x*Math.abs(Xi.x)+r.y*Math.abs(Xi.y)+r.z*Math.abs(Xi.z),c=e.dot(Xi),l=n.dot(Xi),h=i.dot(Xi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Ig=new Is,ds=new P,Oo=new P;class Va{constructor(e=new P,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Ig.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ds.subVectors(e,this.center);const n=ds.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ds,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ds.copy(e.center).add(Oo)),this.expandByPoint(ds.copy(e.center).sub(Oo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ii=new P,Bo=new P,Ys=new P,yi=new P,ko=new P,js=new P,Go=new P;class fd{constructor(e=new P,n=new P(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ii)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ii.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ii.copy(this.origin).addScaledVector(this.direction,n),ii.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Bo.copy(e).add(n).multiplyScalar(.5),Ys.copy(n).sub(e).normalize(),yi.copy(this.origin).sub(Bo);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Ys),o=yi.dot(this.direction),c=-yi.dot(Ys),l=yi.lengthSq(),h=Math.abs(1-a*a);let f,d,m,v;if(h>0)if(f=a*c-o,d=a*o-c,v=s*h,f>=0)if(d>=-v)if(d<=v){const _=1/h;f*=_,d*=_,m=f*(f+a*d+2*o)+d*(a*f+d+2*c)+l}else d=s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;else d=-s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;else d<=-v?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-c),s),m=-f*f+d*(d+2*c)+l):d<=v?(f=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+l):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-c),s),m=-f*f+d*(d+2*c)+l);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Bo).addScaledVector(Ys,d),m}intersectSphere(e,n){ii.subVectors(e.center,this.origin);const i=ii.dot(this.direction),r=ii.dot(ii)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ii)!==null}intersectTriangle(e,n,i,r,s){ko.subVectors(n,e),js.subVectors(i,e),Go.crossVectors(ko,js);let a=this.direction.dot(Go),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;yi.subVectors(this.origin,e);const c=o*this.direction.dot(js.crossVectors(yi,js));if(c<0)return null;const l=o*this.direction.dot(ko.cross(yi));if(l<0||c+l>a)return null;const h=-o*yi.dot(Go);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class At{constructor(e,n,i,r,s,a,o,c,l,h,f,d,m,v,_,p){At.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,l,h,f,d,m,v,_,p)}set(e,n,i,r,s,a,o,c,l,h,f,d,m,v,_,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=h,u[10]=f,u[14]=d,u[3]=m,u[7]=v,u[11]=_,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new At().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/gr.setFromMatrixColumn(e,0).length(),s=1/gr.setFromMatrixColumn(e,1).length(),a=1/gr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*h,m=a*f,v=o*h,_=o*f;n[0]=c*h,n[4]=-c*f,n[8]=l,n[1]=m+v*l,n[5]=d-_*l,n[9]=-o*c,n[2]=_-d*l,n[6]=v+m*l,n[10]=a*c}else if(e.order==="YXZ"){const d=c*h,m=c*f,v=l*h,_=l*f;n[0]=d+_*o,n[4]=v*o-m,n[8]=a*l,n[1]=a*f,n[5]=a*h,n[9]=-o,n[2]=m*o-v,n[6]=_+d*o,n[10]=a*c}else if(e.order==="ZXY"){const d=c*h,m=c*f,v=l*h,_=l*f;n[0]=d-_*o,n[4]=-a*f,n[8]=v+m*o,n[1]=m+v*o,n[5]=a*h,n[9]=_-d*o,n[2]=-a*l,n[6]=o,n[10]=a*c}else if(e.order==="ZYX"){const d=a*h,m=a*f,v=o*h,_=o*f;n[0]=c*h,n[4]=v*l-m,n[8]=d*l+_,n[1]=c*f,n[5]=_*l+d,n[9]=m*l-v,n[2]=-l,n[6]=o*c,n[10]=a*c}else if(e.order==="YZX"){const d=a*c,m=a*l,v=o*c,_=o*l;n[0]=c*h,n[4]=_-d*f,n[8]=v*f+m,n[1]=f,n[5]=a*h,n[9]=-o*h,n[2]=-l*h,n[6]=m*f+v,n[10]=d-_*f}else if(e.order==="XZY"){const d=a*c,m=a*l,v=o*c,_=o*l;n[0]=c*h,n[4]=-f,n[8]=l*h,n[1]=d*f+_,n[5]=a*h,n[9]=m*f-v,n[2]=v*f-m,n[6]=o*h,n[10]=_*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ng,e,Fg)}lookAt(e,n,i){const r=this.elements;return hn.subVectors(e,n),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),Ti.crossVectors(i,hn),Ti.lengthSq()===0&&(Math.abs(i.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),Ti.crossVectors(i,hn)),Ti.normalize(),Ks.crossVectors(hn,Ti),r[0]=Ti.x,r[4]=Ks.x,r[8]=hn.x,r[1]=Ti.y,r[5]=Ks.y,r[9]=hn.y,r[2]=Ti.z,r[6]=Ks.z,r[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],f=i[5],d=i[9],m=i[13],v=i[2],_=i[6],p=i[10],u=i[14],T=i[3],E=i[7],A=i[11],D=i[15],R=r[0],w=r[4],$=r[8],S=r[12],y=r[1],z=r[5],V=r[9],ie=r[13],C=r[2],B=r[6],G=r[10],X=r[14],H=r[3],W=r[7],q=r[11],Q=r[15];return s[0]=a*R+o*y+c*C+l*H,s[4]=a*w+o*z+c*B+l*W,s[8]=a*$+o*V+c*G+l*q,s[12]=a*S+o*ie+c*X+l*Q,s[1]=h*R+f*y+d*C+m*H,s[5]=h*w+f*z+d*B+m*W,s[9]=h*$+f*V+d*G+m*q,s[13]=h*S+f*ie+d*X+m*Q,s[2]=v*R+_*y+p*C+u*H,s[6]=v*w+_*z+p*B+u*W,s[10]=v*$+_*V+p*G+u*q,s[14]=v*S+_*ie+p*X+u*Q,s[3]=T*R+E*y+A*C+D*H,s[7]=T*w+E*z+A*B+D*W,s[11]=T*$+E*V+A*G+D*q,s[15]=T*S+E*ie+A*X+D*Q,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],f=e[6],d=e[10],m=e[14],v=e[3],_=e[7],p=e[11],u=e[15];return v*(+s*c*f-r*l*f-s*o*d+i*l*d+r*o*m-i*c*m)+_*(+n*c*m-n*l*d+s*a*d-r*a*m+r*l*h-s*c*h)+p*(+n*l*f-n*o*m-s*a*f+i*a*m+s*o*h-i*l*h)+u*(-r*o*h-n*c*f+n*o*d+r*a*f-i*a*d+i*c*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=e[9],d=e[10],m=e[11],v=e[12],_=e[13],p=e[14],u=e[15],T=f*p*l-_*d*l+_*c*m-o*p*m-f*c*u+o*d*u,E=v*d*l-h*p*l-v*c*m+a*p*m+h*c*u-a*d*u,A=h*_*l-v*f*l+v*o*m-a*_*m-h*o*u+a*f*u,D=v*f*c-h*_*c-v*o*d+a*_*d+h*o*p-a*f*p,R=n*T+i*E+r*A+s*D;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/R;return e[0]=T*w,e[1]=(_*d*s-f*p*s-_*r*m+i*p*m+f*r*u-i*d*u)*w,e[2]=(o*p*s-_*c*s+_*r*l-i*p*l-o*r*u+i*c*u)*w,e[3]=(f*c*s-o*d*s-f*r*l+i*d*l+o*r*m-i*c*m)*w,e[4]=E*w,e[5]=(h*p*s-v*d*s+v*r*m-n*p*m-h*r*u+n*d*u)*w,e[6]=(v*c*s-a*p*s-v*r*l+n*p*l+a*r*u-n*c*u)*w,e[7]=(a*d*s-h*c*s+h*r*l-n*d*l-a*r*m+n*c*m)*w,e[8]=A*w,e[9]=(v*f*s-h*_*s-v*i*m+n*_*m+h*i*u-n*f*u)*w,e[10]=(a*_*s-v*o*s+v*i*l-n*_*l-a*i*u+n*o*u)*w,e[11]=(h*o*s-a*f*s-h*i*l+n*f*l+a*i*m-n*o*m)*w,e[12]=D*w,e[13]=(h*_*r-v*f*r+v*i*d-n*_*d-h*i*p+n*f*p)*w,e[14]=(v*o*r-a*_*r-v*i*c+n*_*c+a*i*p-n*o*p)*w,e[15]=(a*f*r-h*o*r+h*i*c-n*f*c-a*i*d+n*o*d)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+i,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,c=n._w,l=s+s,h=a+a,f=o+o,d=s*l,m=s*h,v=s*f,_=a*h,p=a*f,u=o*f,T=c*l,E=c*h,A=c*f,D=i.x,R=i.y,w=i.z;return r[0]=(1-(_+u))*D,r[1]=(m+A)*D,r[2]=(v-E)*D,r[3]=0,r[4]=(m-A)*R,r[5]=(1-(d+u))*R,r[6]=(p+T)*R,r[7]=0,r[8]=(v+E)*w,r[9]=(p-T)*w,r[10]=(1-(d+_))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=gr.set(r[0],r[1],r[2]).length();const a=gr.set(r[4],r[5],r[6]).length(),o=gr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Fn.copy(this);const l=1/s,h=1/a,f=1/o;return Fn.elements[0]*=l,Fn.elements[1]*=l,Fn.elements[2]*=l,Fn.elements[4]*=h,Fn.elements[5]*=h,Fn.elements[6]*=h,Fn.elements[8]*=f,Fn.elements[9]*=f,Fn.elements[10]*=f,n.setFromRotationMatrix(Fn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=ui){const c=this.elements,l=2*s/(n-e),h=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let m,v;if(o===ui)m=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Ca)m=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=ui){const c=this.elements,l=1/(n-e),h=1/(i-r),f=1/(a-s),d=(n+e)*l,m=(i+r)*h;let v,_;if(o===ui)v=(a+s)*f,_=-2*f;else if(o===Ca)v=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const gr=new P,Fn=new At,Ng=new P(0,0,0),Fg=new P(1,1,1),Ti=new P,Ks=new P,hn=new P,eu=new At,tu=new Us;class Wa{constructor(e=0,n=0,i=0,r=Wa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],f=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(nn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-nn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(nn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return eu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(eu,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return tu.setFromEuler(this),this.setFromQuaternion(tu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wa.DEFAULT_ORDER="XYZ";class dd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Og=0;const nu=new P,_r=new Us,ri=new At,$s=new P,ps=new P,Bg=new P,kg=new Us,iu=new P(1,0,0),ru=new P(0,1,0),su=new P(0,0,1),Gg={type:"added"},zg={type:"removed"};class Gt extends Qr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Og++}),this.uuid=Ds(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new P,n=new Wa,i=new Us,r=new P(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new At},normalMatrix:{value:new Ve}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return _r.setFromAxisAngle(e,n),this.quaternion.multiply(_r),this}rotateOnWorldAxis(e,n){return _r.setFromAxisAngle(e,n),this.quaternion.premultiply(_r),this}rotateX(e){return this.rotateOnAxis(iu,e)}rotateY(e){return this.rotateOnAxis(ru,e)}rotateZ(e){return this.rotateOnAxis(su,e)}translateOnAxis(e,n){return nu.copy(e).applyQuaternion(this.quaternion),this.position.add(nu.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(iu,e)}translateY(e){return this.translateOnAxis(ru,e)}translateZ(e){return this.translateOnAxis(su,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?$s.copy(e):$s.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(ps,$s,this.up):ri.lookAt($s,ps,this.up),this.quaternion.setFromRotationMatrix(ri),r&&(ri.extractRotation(r.matrixWorld),_r.setFromRotationMatrix(ri),this.quaternion.premultiply(_r.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Gg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(zg)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,e,Bg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,kg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(n){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Gt.DEFAULT_UP=new P(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const On=new P,si=new P,zo=new P,ai=new P,vr=new P,xr=new P,au=new P,Ho=new P,Vo=new P,Wo=new P;let Zs=!1;class Bn{constructor(e=new P,n=new P,i=new P){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),On.subVectors(e,n),r.cross(On);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){On.subVectors(r,n),si.subVectors(i,n),zo.subVectors(e,n);const a=On.dot(On),o=On.dot(si),c=On.dot(zo),l=si.dot(si),h=si.dot(zo),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,m=(l*c-o*h)*d,v=(a*h-o*c)*d;return s.set(1-m-v,v,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getUV(e,n,i,r,s,a,o,c){return Zs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Zs=!0),this.getInterpolation(e,n,i,r,s,a,o,c)}static getInterpolation(e,n,i,r,s,a,o,c){return this.getBarycoord(e,n,i,r,ai)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ai.x),c.addScaledVector(a,ai.y),c.addScaledVector(o,ai.z),c)}static isFrontFacing(e,n,i,r){return On.subVectors(i,n),si.subVectors(e,n),On.cross(si).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),si.subVectors(this.a,this.b),On.cross(si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Bn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Zs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Zs=!0),Bn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return Bn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;vr.subVectors(r,i),xr.subVectors(s,i),Ho.subVectors(e,i);const c=vr.dot(Ho),l=xr.dot(Ho);if(c<=0&&l<=0)return n.copy(i);Vo.subVectors(e,r);const h=vr.dot(Vo),f=xr.dot(Vo);if(h>=0&&f<=h)return n.copy(r);const d=c*f-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),n.copy(i).addScaledVector(vr,a);Wo.subVectors(e,s);const m=vr.dot(Wo),v=xr.dot(Wo);if(v>=0&&m<=v)return n.copy(s);const _=m*l-c*v;if(_<=0&&l>=0&&v<=0)return o=l/(l-v),n.copy(i).addScaledVector(xr,o);const p=h*v-m*f;if(p<=0&&f-h>=0&&m-v>=0)return au.subVectors(s,r),o=(f-h)/(f-h+(m-v)),n.copy(r).addScaledVector(au,o);const u=1/(p+_+d);return a=_*u,o=d*u,n.copy(i).addScaledVector(vr,a).addScaledVector(xr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const pd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ai={h:0,s:0,l:0},Js={h:0,s:0,l:0};function Xo(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ye{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=nt.workingColorSpace){return this.r=e,this.g=n,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=nt.workingColorSpace){if(e=wg(e,1),n=nn(n,0,1),i=nn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Xo(a,s,e+1/3),this.g=Xo(a,s,e),this.b=Xo(a,s,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,n=kt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=kt){const i=pd[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ur(e.r),this.g=Ur(e.g),this.b=Ur(e.b),this}copyLinearToSRGB(e){return this.r=Uo(e.r),this.g=Uo(e.g),this.b=Uo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return nt.fromWorkingColorSpace(Vt.copy(this),e),Math.round(nn(Vt.r*255,0,255))*65536+Math.round(nn(Vt.g*255,0,255))*256+Math.round(nn(Vt.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=nt.workingColorSpace){nt.fromWorkingColorSpace(Vt.copy(this),n);const i=Vt.r,r=Vt.g,s=Vt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,n=nt.workingColorSpace){return nt.fromWorkingColorSpace(Vt.copy(this),n),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=kt){nt.fromWorkingColorSpace(Vt.copy(this),e);const n=Vt.r,i=Vt.g,r=Vt.b;return e!==kt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ai),this.setHSL(Ai.h+e,Ai.s+n,Ai.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ai),e.getHSL(Js);const i=Po(Ai.h,Js.h,n),r=Po(Ai.s,Js.s,n),s=Po(Ai.l,Js.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vt=new Ye;Ye.NAMES=pd;let Hg=0;class es extends Qr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hg++}),this.uuid=Ds(),this.name="",this.type="Material",this.blending=Dr,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vc,this.blendDst=xc,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Aa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ur,this.stencilZFail=ur,this.stencilZPass=ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Dr&&(i.blending=this.blending),this.side!==Fi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==vc&&(i.blendSrc=this.blendSrc),this.blendDst!==xc&&(i.blendDst=this.blendDst),this.blendEquation!==Ji&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Aa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ur&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ur&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ur&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class md extends es{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new P,Qs=new Ze;class gn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Yh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Qs.fromBufferAttribute(this,n),Qs.applyMatrix3(e),this.setXY(n,Qs.x,Qs.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix3(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix4(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyNormalMatrix(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.transformDirection(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=us(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Qt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=us(n,this.array)),n}setX(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=us(n,this.array)),n}setY(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=us(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=us(n,this.array)),n}setW(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array),r=Qt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array),r=Qt(r,this.array),s=Qt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yh&&(e.usage=this.usage),e}}class gd extends gn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class _d extends gn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Jn extends gn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Vg=0;const En=new At,qo=new Gt,Mr=new P,un=new Is,ms=new Is,Ft=new P;class zn extends Qr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vg++}),this.uuid=Ds(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cd(e)?_d:gd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,n,i){return En.makeTranslation(e,n,i),this.applyMatrix4(En),this}scale(e,n,i){return En.makeScale(e,n,i),this.applyMatrix4(En),this}lookAt(e){return qo.lookAt(e),qo.updateMatrix(),this.applyMatrix4(qo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Jn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Is);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];un.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Va);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const i=this.boundingSphere.center;if(un.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ms.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(un.min,ms.min),un.expandByPoint(Ft),Ft.addVectors(un.max,ms.max),un.expandByPoint(Ft)):(un.expandByPoint(ms.min),un.expandByPoint(ms.max))}un.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ft.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ft));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ft.fromBufferAttribute(o,l),c&&(Mr.fromBufferAttribute(e,l),Ft.add(Mr)),r=Math.max(r,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,a=n.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gn(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let y=0;y<o;y++)l[y]=new P,h[y]=new P;const f=new P,d=new P,m=new P,v=new Ze,_=new Ze,p=new Ze,u=new P,T=new P;function E(y,z,V){f.fromArray(r,y*3),d.fromArray(r,z*3),m.fromArray(r,V*3),v.fromArray(a,y*2),_.fromArray(a,z*2),p.fromArray(a,V*2),d.sub(f),m.sub(f),_.sub(v),p.sub(v);const ie=1/(_.x*p.y-p.x*_.y);isFinite(ie)&&(u.copy(d).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(ie),T.copy(m).multiplyScalar(_.x).addScaledVector(d,-p.x).multiplyScalar(ie),l[y].add(u),l[z].add(u),l[V].add(u),h[y].add(T),h[z].add(T),h[V].add(T))}let A=this.groups;A.length===0&&(A=[{start:0,count:i.length}]);for(let y=0,z=A.length;y<z;++y){const V=A[y],ie=V.start,C=V.count;for(let B=ie,G=ie+C;B<G;B+=3)E(i[B+0],i[B+1],i[B+2])}const D=new P,R=new P,w=new P,$=new P;function S(y){w.fromArray(s,y*3),$.copy(w);const z=l[y];D.copy(z),D.sub(w.multiplyScalar(w.dot(z))).normalize(),R.crossVectors($,z);const ie=R.dot(h[y])<0?-1:1;c[y*4]=D.x,c[y*4+1]=D.y,c[y*4+2]=D.z,c[y*4+3]=ie}for(let y=0,z=A.length;y<z;++y){const V=A[y],ie=V.start,C=V.count;for(let B=ie,G=ie+C;B<G;B+=3)S(i[B+0]),S(i[B+1]),S(i[B+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new P,s=new P,a=new P,o=new P,c=new P,l=new P,h=new P,f=new P;if(e)for(let d=0,m=e.count;d<m;d+=3){const v=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,p),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(i,v),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,p),o.add(h),c.add(h),l.add(h),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ft.fromBufferAttribute(e,n),Ft.normalize(),e.setXYZ(n,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,f=o.normalized,d=new l.constructor(c.length*h);let m=0,v=0;for(let _=0,p=c.length;_<p;_++){o.isInterleavedBufferAttribute?m=c[_]*o.data.stride+o.offset:m=c[_]*h;for(let u=0;u<h;u++)d[v++]=l[m++]}return new gn(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new zn,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);n.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,f=l.length;h<f;h++){const d=l[h],m=e(d,i);c.push(m)}n.morphAttributes[o]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];n.addGroup(l.start,l.count,l.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,d=l.length;f<d;f++){const m=l[f];h.push(m.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(n))}const s=e.morphAttributes;for(const l in s){const h=[],f=s[l];for(let d=0,m=f.length;d<m;d++)h.push(f[d].clone(n));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ou=new At,qi=new fd,ea=new Va,cu=new P,Sr=new P,Er=new P,yr=new P,Yo=new P,ta=new P,na=new Ze,ia=new Ze,ra=new Ze,lu=new P,hu=new P,uu=new P,sa=new P,aa=new P;class fi extends Gt{constructor(e=new zn,n=new md){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ta.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],f=s[c];h!==0&&(Yo.fromBufferAttribute(f,e),a?ta.addScaledVector(Yo,h):ta.addScaledVector(Yo.sub(n),h))}n.add(ta)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ea.copy(i.boundingSphere),ea.applyMatrix4(s),qi.copy(e.ray).recast(e.near),!(ea.containsPoint(qi.origin)===!1&&(qi.intersectSphere(ea,cu)===null||qi.origin.distanceToSquared(cu)>(e.far-e.near)**2))&&(ou.copy(s).invert(),qi.copy(e.ray).applyMatrix4(ou),!(i.boundingBox!==null&&qi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,qi)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,_=d.length;v<_;v++){const p=d[v],u=a[p.materialIndex],T=Math.max(p.start,m.start),E=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let A=T,D=E;A<D;A+=3){const R=o.getX(A),w=o.getX(A+1),$=o.getX(A+2);r=oa(this,u,e,i,l,h,f,R,w,$),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=v,u=_;p<u;p+=3){const T=o.getX(p),E=o.getX(p+1),A=o.getX(p+2);r=oa(this,a,e,i,l,h,f,T,E,A),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,_=d.length;v<_;v++){const p=d[v],u=a[p.materialIndex],T=Math.max(p.start,m.start),E=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let A=T,D=E;A<D;A+=3){const R=A,w=A+1,$=A+2;r=oa(this,u,e,i,l,h,f,R,w,$),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let p=v,u=_;p<u;p+=3){const T=p,E=p+1,A=p+2;r=oa(this,a,e,i,l,h,f,T,E,A),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function Wg(t,e,n,i,r,s,a,o){let c;if(e.side===rn?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===Fi,o),c===null)return null;aa.copy(o),aa.applyMatrix4(t.matrixWorld);const l=n.ray.origin.distanceTo(aa);return l<n.near||l>n.far?null:{distance:l,point:aa.clone(),object:t}}function oa(t,e,n,i,r,s,a,o,c,l){t.getVertexPosition(o,Sr),t.getVertexPosition(c,Er),t.getVertexPosition(l,yr);const h=Wg(t,e,n,i,Sr,Er,yr,sa);if(h){r&&(na.fromBufferAttribute(r,o),ia.fromBufferAttribute(r,c),ra.fromBufferAttribute(r,l),h.uv=Bn.getInterpolation(sa,Sr,Er,yr,na,ia,ra,new Ze)),s&&(na.fromBufferAttribute(s,o),ia.fromBufferAttribute(s,c),ra.fromBufferAttribute(s,l),h.uv1=Bn.getInterpolation(sa,Sr,Er,yr,na,ia,ra,new Ze),h.uv2=h.uv1),a&&(lu.fromBufferAttribute(a,o),hu.fromBufferAttribute(a,c),uu.fromBufferAttribute(a,l),h.normal=Bn.getInterpolation(sa,Sr,Er,yr,lu,hu,uu,new P),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new P,materialIndex:0};Bn.getNormal(Sr,Er,yr,f.normal),h.face=f}return h}class Ns extends zn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],f=[];let d=0,m=0;v("z","y","x",-1,-1,i,n,e,a,s,0),v("z","y","x",1,-1,i,n,-e,a,s,1),v("x","z","y",1,1,e,i,n,r,a,2),v("x","z","y",1,-1,e,i,-n,r,a,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Jn(l,3)),this.setAttribute("normal",new Jn(h,3)),this.setAttribute("uv",new Jn(f,2));function v(_,p,u,T,E,A,D,R,w,$,S){const y=A/w,z=D/$,V=A/2,ie=D/2,C=R/2,B=w+1,G=$+1;let X=0,H=0;const W=new P;for(let q=0;q<G;q++){const Q=q*z-ie;for(let ee=0;ee<B;ee++){const k=ee*y-V;W[_]=k*T,W[p]=Q*E,W[u]=C,l.push(W.x,W.y,W.z),W[_]=0,W[p]=0,W[u]=R>0?1:-1,h.push(W.x,W.y,W.z),f.push(ee/w),f.push(1-q/$),X+=1}}for(let q=0;q<$;q++)for(let Q=0;Q<w;Q++){const ee=d+Q+B*q,k=d+Q+B*(q+1),Y=d+(Q+1)+B*(q+1),oe=d+(Q+1)+B*q;c.push(ee,k,oe),c.push(k,Y,oe),H+=6}o.addGroup(m,H,S),m+=H,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ns(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function jt(t){const e={};for(let n=0;n<t.length;n++){const i=Hr(t[n]);for(const r in i)e[r]=i[r]}return e}function Xg(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function vd(t){return t.getRenderTarget()===null?t.outputColorSpace:nt.workingColorSpace}const qg={clone:Hr,merge:jt};var Yg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class or extends es{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yg,this.fragmentShader=jg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hr(e.uniforms),this.uniformsGroups=Xg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class xd extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=ui}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class mn extends xd{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ac*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Lo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ac*2*Math.atan(Math.tan(Lo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Lo*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,n-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Tr=-90,Ar=1;class Kg extends Gt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new mn(Tr,Ar,e,n);r.layers=this.layers,this.add(r);const s=new mn(Tr,Ar,e,n);s.layers=this.layers,this.add(s);const a=new mn(Tr,Ar,e,n);a.layers=this.layers,this.add(a);const o=new mn(Tr,Ar,e,n);o.layers=this.layers,this.add(o);const c=new mn(Tr,Ar,e,n);c.layers=this.layers,this.add(c);const l=new mn(Tr,Ar,e,n);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,c]=n;for(const l of n)this.remove(l);if(e===ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ca)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of n)this.add(l),l.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,c),e.setRenderTarget(i,4,r),e.render(n,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(f,d,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Md extends sn{constructor(e,n,i,r,s,a,o,c,l,h){e=e!==void 0?e:[],n=n!==void 0?n:kr,super(e,n,i,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $g extends ar{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Es("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===rr?kt:Rn),this.texture=new Md(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:bn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ns(5,5,5),s=new or({name:"CubemapFromEquirect",uniforms:Hr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:Pi});s.uniforms.tEquirect.value=n;const a=new fi(r,s),o=n.minFilter;return n.minFilter===bs&&(n.minFilter=bn),new Kg(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const jo=new P,Zg=new P,Jg=new Ve;class Ki{constructor(e=new P(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=jo.subVectors(i,n).cross(Zg.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(jo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Jg.getNormalMatrix(e),r=this.coplanarPoint(jo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yi=new Va,ca=new P;class Jc{constructor(e=new Ki,n=new Ki,i=new Ki,r=new Ki,s=new Ki,a=new Ki){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ui){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],h=r[5],f=r[6],d=r[7],m=r[8],v=r[9],_=r[10],p=r[11],u=r[12],T=r[13],E=r[14],A=r[15];if(i[0].setComponents(c-s,d-l,p-m,A-u).normalize(),i[1].setComponents(c+s,d+l,p+m,A+u).normalize(),i[2].setComponents(c+a,d+h,p+v,A+T).normalize(),i[3].setComponents(c-a,d-h,p-v,A-T).normalize(),i[4].setComponents(c-o,d-f,p-_,A-E).normalize(),n===ui)i[5].setComponents(c+o,d+f,p+_,A+E).normalize();else if(n===Ca)i[5].setComponents(o,f,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Yi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yi)}intersectsSprite(e){return Yi.center.set(0,0,0),Yi.radius=.7071067811865476,Yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ca.x=r.normal.x>0?e.max.x:e.min.x,ca.y=r.normal.y>0?e.max.y:e.min.y,ca.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ca)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Sd(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Qg(t,e){const n=e.isWebGL2,i=new WeakMap;function r(l,h){const f=l.array,d=l.usage,m=f.byteLength,v=t.createBuffer();t.bindBuffer(h,v),t.bufferData(h,f,d),l.onUploadCallback();let _;if(f instanceof Float32Array)_=t.FLOAT;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(n)_=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=t.SHORT;else if(f instanceof Uint32Array)_=t.UNSIGNED_INT;else if(f instanceof Int32Array)_=t.INT;else if(f instanceof Int8Array)_=t.BYTE;else if(f instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:v,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version,size:m}}function s(l,h,f){const d=h.array,m=h._updateRange,v=h.updateRanges;if(t.bindBuffer(f,l),m.count===-1&&v.length===0&&t.bufferSubData(f,0,d),v.length!==0){for(let _=0,p=v.length;_<p;_++){const u=v[_];n?t.bufferSubData(f,u.start*d.BYTES_PER_ELEMENT,d,u.start,u.count):t.bufferSubData(f,u.start*d.BYTES_PER_ELEMENT,d.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}m.count!==-1&&(n?t.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):t.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=i.get(l);h&&(t.deleteBuffer(h.buffer),i.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=i.get(l);if(f===void 0)i.set(l,r(l,h));else if(f.version<l.version){if(f.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,l,h),f.version=l.version}}return{get:a,remove:o,update:c}}class Qc extends zn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),c=Math.floor(r),l=o+1,h=c+1,f=e/o,d=n/c,m=[],v=[],_=[],p=[];for(let u=0;u<h;u++){const T=u*d-a;for(let E=0;E<l;E++){const A=E*f-s;v.push(A,-T,0),_.push(0,0,1),p.push(E/o),p.push(1-u/c)}}for(let u=0;u<c;u++)for(let T=0;T<o;T++){const E=T+l*u,A=T+l*(u+1),D=T+1+l*(u+1),R=T+1+l*u;m.push(E,A,R),m.push(A,D,R)}this.setIndex(m),this.setAttribute("position",new Jn(v,3)),this.setAttribute("normal",new Jn(_,3)),this.setAttribute("uv",new Jn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qc(e.width,e.height,e.widthSegments,e.heightSegments)}}var e0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,t0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,n0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,i0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,r0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,s0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,a0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,o0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,c0=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,l0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,h0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,u0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,f0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,d0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,p0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,m0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,g0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,x0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,M0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,S0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,E0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,y0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,T0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,A0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,b0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,w0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,R0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,C0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,L0="gl_FragColor = linearToOutputTexel( gl_FragColor );",P0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,D0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,U0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,I0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,N0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,F0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,O0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,B0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,k0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,G0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,z0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,H0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,V0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,W0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,X0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,q0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Y0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,j0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,K0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Z0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,J0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Q0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,e_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,t_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,n_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,i_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,r_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,a_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,o_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,c_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,l_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,h_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,u_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,f_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,d_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,p_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,m_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,g_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,__=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,v_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,x_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,E_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,y_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,T_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,A_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,b_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,w_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,R_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,C_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,L_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,P_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,D_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,U_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,I_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,N_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,F_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,O_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,B_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,k_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,G_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,z_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,H_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,V_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,W_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,X_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,q_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Y_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,j_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,K_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Z_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,J_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Q_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,e1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,a1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,o1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,c1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,l1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,h1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,f1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,d1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,p1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,v1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,x1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,M1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,S1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,T1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,A1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,R1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,C1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,P1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,D1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:e0,alphahash_pars_fragment:t0,alphamap_fragment:n0,alphamap_pars_fragment:i0,alphatest_fragment:r0,alphatest_pars_fragment:s0,aomap_fragment:a0,aomap_pars_fragment:o0,batching_pars_vertex:c0,batching_vertex:l0,begin_vertex:h0,beginnormal_vertex:u0,bsdfs:f0,iridescence_fragment:d0,bumpmap_pars_fragment:p0,clipping_planes_fragment:m0,clipping_planes_pars_fragment:g0,clipping_planes_pars_vertex:_0,clipping_planes_vertex:v0,color_fragment:x0,color_pars_fragment:M0,color_pars_vertex:S0,color_vertex:E0,common:y0,cube_uv_reflection_fragment:T0,defaultnormal_vertex:A0,displacementmap_pars_vertex:b0,displacementmap_vertex:w0,emissivemap_fragment:R0,emissivemap_pars_fragment:C0,colorspace_fragment:L0,colorspace_pars_fragment:P0,envmap_fragment:D0,envmap_common_pars_fragment:U0,envmap_pars_fragment:I0,envmap_pars_vertex:N0,envmap_physical_pars_fragment:Y0,envmap_vertex:F0,fog_vertex:O0,fog_pars_vertex:B0,fog_fragment:k0,fog_pars_fragment:G0,gradientmap_pars_fragment:z0,lightmap_fragment:H0,lightmap_pars_fragment:V0,lights_lambert_fragment:W0,lights_lambert_pars_fragment:X0,lights_pars_begin:q0,lights_toon_fragment:j0,lights_toon_pars_fragment:K0,lights_phong_fragment:$0,lights_phong_pars_fragment:Z0,lights_physical_fragment:J0,lights_physical_pars_fragment:Q0,lights_fragment_begin:e_,lights_fragment_maps:t_,lights_fragment_end:n_,logdepthbuf_fragment:i_,logdepthbuf_pars_fragment:r_,logdepthbuf_pars_vertex:s_,logdepthbuf_vertex:a_,map_fragment:o_,map_pars_fragment:c_,map_particle_fragment:l_,map_particle_pars_fragment:h_,metalnessmap_fragment:u_,metalnessmap_pars_fragment:f_,morphcolor_vertex:d_,morphnormal_vertex:p_,morphtarget_pars_vertex:m_,morphtarget_vertex:g_,normal_fragment_begin:__,normal_fragment_maps:v_,normal_pars_fragment:x_,normal_pars_vertex:M_,normal_vertex:S_,normalmap_pars_fragment:E_,clearcoat_normal_fragment_begin:y_,clearcoat_normal_fragment_maps:T_,clearcoat_pars_fragment:A_,iridescence_pars_fragment:b_,opaque_fragment:w_,packing:R_,premultiplied_alpha_fragment:C_,project_vertex:L_,dithering_fragment:P_,dithering_pars_fragment:D_,roughnessmap_fragment:U_,roughnessmap_pars_fragment:I_,shadowmap_pars_fragment:N_,shadowmap_pars_vertex:F_,shadowmap_vertex:O_,shadowmask_pars_fragment:B_,skinbase_vertex:k_,skinning_pars_vertex:G_,skinning_vertex:z_,skinnormal_vertex:H_,specularmap_fragment:V_,specularmap_pars_fragment:W_,tonemapping_fragment:X_,tonemapping_pars_fragment:q_,transmission_fragment:Y_,transmission_pars_fragment:j_,uv_pars_fragment:K_,uv_pars_vertex:$_,uv_vertex:Z_,worldpos_vertex:J_,background_vert:Q_,background_frag:e1,backgroundCube_vert:t1,backgroundCube_frag:n1,cube_vert:i1,cube_frag:r1,depth_vert:s1,depth_frag:a1,distanceRGBA_vert:o1,distanceRGBA_frag:c1,equirect_vert:l1,equirect_frag:h1,linedashed_vert:u1,linedashed_frag:f1,meshbasic_vert:d1,meshbasic_frag:p1,meshlambert_vert:m1,meshlambert_frag:g1,meshmatcap_vert:_1,meshmatcap_frag:v1,meshnormal_vert:x1,meshnormal_frag:M1,meshphong_vert:S1,meshphong_frag:E1,meshphysical_vert:y1,meshphysical_frag:T1,meshtoon_vert:A1,meshtoon_frag:b1,points_vert:w1,points_frag:R1,shadow_vert:C1,shadow_frag:L1,sprite_vert:P1,sprite_frag:D1},ne={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},$n={basic:{uniforms:jt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:jt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:jt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:jt([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:jt([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:jt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:jt([ne.points,ne.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:jt([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:jt([ne.common,ne.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:jt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:jt([ne.sprite,ne.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:jt([ne.common,ne.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:jt([ne.lights,ne.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};$n.physical={uniforms:jt([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const la={r:0,b:0,g:0};function U1(t,e,n,i,r,s,a){const o=new Ye(0);let c=s===!0?0:1,l,h,f=null,d=0,m=null;function v(p,u){let T=!1,E=u.isScene===!0?u.background:null;E&&E.isTexture&&(E=(u.backgroundBlurriness>0?n:e).get(E)),E===null?_(o,c):E&&E.isColor&&(_(E,1),T=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||T)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),E&&(E.isCubeTexture||E.mapping===za)?(h===void 0&&(h=new fi(new Ns(1,1,1),new or({name:"BackgroundCubeMaterial",uniforms:Hr($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=nt.getTransfer(E.colorSpace)!==lt,(f!==E||d!==E.version||m!==t.toneMapping)&&(h.material.needsUpdate=!0,f=E,d=E.version,m=t.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new fi(new Qc(2,2),new or({name:"BackgroundMaterial",uniforms:Hr($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,l.material.toneMapped=nt.getTransfer(E.colorSpace)!==lt,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(f!==E||d!==E.version||m!==t.toneMapping)&&(l.material.needsUpdate=!0,f=E,d=E.version,m=t.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function _(p,u){p.getRGB(la,vd(t)),i.buffers.color.setClear(la.r,la.g,la.b,u,a)}return{getClearColor:function(){return o},setClearColor:function(p,u=1){o.set(p),c=u,_(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,_(o,c)},render:v}}function I1(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},c=p(null);let l=c,h=!1;function f(C,B,G,X,H){let W=!1;if(a){const q=_(X,G,B);l!==q&&(l=q,m(l.object)),W=u(C,X,G,H),W&&T(C,X,G,H)}else{const q=B.wireframe===!0;(l.geometry!==X.id||l.program!==G.id||l.wireframe!==q)&&(l.geometry=X.id,l.program=G.id,l.wireframe=q,W=!0)}H!==null&&n.update(H,t.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,$(C,B,G,X),H!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(H).buffer))}function d(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(C){return i.isWebGL2?t.bindVertexArray(C):s.bindVertexArrayOES(C)}function v(C){return i.isWebGL2?t.deleteVertexArray(C):s.deleteVertexArrayOES(C)}function _(C,B,G){const X=G.wireframe===!0;let H=o[C.id];H===void 0&&(H={},o[C.id]=H);let W=H[B.id];W===void 0&&(W={},H[B.id]=W);let q=W[X];return q===void 0&&(q=p(d()),W[X]=q),q}function p(C){const B=[],G=[],X=[];for(let H=0;H<r;H++)B[H]=0,G[H]=0,X[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:G,attributeDivisors:X,object:C,attributes:{},index:null}}function u(C,B,G,X){const H=l.attributes,W=B.attributes;let q=0;const Q=G.getAttributes();for(const ee in Q)if(Q[ee].location>=0){const Y=H[ee];let oe=W[ee];if(oe===void 0&&(ee==="instanceMatrix"&&C.instanceMatrix&&(oe=C.instanceMatrix),ee==="instanceColor"&&C.instanceColor&&(oe=C.instanceColor)),Y===void 0||Y.attribute!==oe||oe&&Y.data!==oe.data)return!0;q++}return l.attributesNum!==q||l.index!==X}function T(C,B,G,X){const H={},W=B.attributes;let q=0;const Q=G.getAttributes();for(const ee in Q)if(Q[ee].location>=0){let Y=W[ee];Y===void 0&&(ee==="instanceMatrix"&&C.instanceMatrix&&(Y=C.instanceMatrix),ee==="instanceColor"&&C.instanceColor&&(Y=C.instanceColor));const oe={};oe.attribute=Y,Y&&Y.data&&(oe.data=Y.data),H[ee]=oe,q++}l.attributes=H,l.attributesNum=q,l.index=X}function E(){const C=l.newAttributes;for(let B=0,G=C.length;B<G;B++)C[B]=0}function A(C){D(C,0)}function D(C,B){const G=l.newAttributes,X=l.enabledAttributes,H=l.attributeDivisors;G[C]=1,X[C]===0&&(t.enableVertexAttribArray(C),X[C]=1),H[C]!==B&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,B),H[C]=B)}function R(){const C=l.newAttributes,B=l.enabledAttributes;for(let G=0,X=B.length;G<X;G++)B[G]!==C[G]&&(t.disableVertexAttribArray(G),B[G]=0)}function w(C,B,G,X,H,W,q){q===!0?t.vertexAttribIPointer(C,B,G,H,W):t.vertexAttribPointer(C,B,G,X,H,W)}function $(C,B,G,X){if(i.isWebGL2===!1&&(C.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();const H=X.attributes,W=G.getAttributes(),q=B.defaultAttributeValues;for(const Q in W){const ee=W[Q];if(ee.location>=0){let k=H[Q];if(k===void 0&&(Q==="instanceMatrix"&&C.instanceMatrix&&(k=C.instanceMatrix),Q==="instanceColor"&&C.instanceColor&&(k=C.instanceColor)),k!==void 0){const Y=k.normalized,oe=k.itemSize,Se=n.get(k);if(Se===void 0)continue;const xe=Se.buffer,Ue=Se.type,Ne=Se.bytesPerElement,we=i.isWebGL2===!0&&(Ue===t.INT||Ue===t.UNSIGNED_INT||k.gpuType===Jf);if(k.isInterleavedBufferAttribute){const je=k.data,U=je.stride,Xt=k.offset;if(je.isInstancedInterleavedBuffer){for(let ye=0;ye<ee.locationSize;ye++)D(ee.location+ye,je.meshPerAttribute);C.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=je.meshPerAttribute*je.count)}else for(let ye=0;ye<ee.locationSize;ye++)A(ee.location+ye);t.bindBuffer(t.ARRAY_BUFFER,xe);for(let ye=0;ye<ee.locationSize;ye++)w(ee.location+ye,oe/ee.locationSize,Ue,Y,U*Ne,(Xt+oe/ee.locationSize*ye)*Ne,we)}else{if(k.isInstancedBufferAttribute){for(let je=0;je<ee.locationSize;je++)D(ee.location+je,k.meshPerAttribute);C.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let je=0;je<ee.locationSize;je++)A(ee.location+je);t.bindBuffer(t.ARRAY_BUFFER,xe);for(let je=0;je<ee.locationSize;je++)w(ee.location+je,oe/ee.locationSize,Ue,Y,oe*Ne,oe/ee.locationSize*je*Ne,we)}}else if(q!==void 0){const Y=q[Q];if(Y!==void 0)switch(Y.length){case 2:t.vertexAttrib2fv(ee.location,Y);break;case 3:t.vertexAttrib3fv(ee.location,Y);break;case 4:t.vertexAttrib4fv(ee.location,Y);break;default:t.vertexAttrib1fv(ee.location,Y)}}}}R()}function S(){V();for(const C in o){const B=o[C];for(const G in B){const X=B[G];for(const H in X)v(X[H].object),delete X[H];delete B[G]}delete o[C]}}function y(C){if(o[C.id]===void 0)return;const B=o[C.id];for(const G in B){const X=B[G];for(const H in X)v(X[H].object),delete X[H];delete B[G]}delete o[C.id]}function z(C){for(const B in o){const G=o[B];if(G[C.id]===void 0)continue;const X=G[C.id];for(const H in X)v(X[H].object),delete X[H];delete G[C.id]}}function V(){ie(),h=!0,l!==c&&(l=c,m(l.object))}function ie(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:V,resetDefaultState:ie,dispose:S,releaseStatesOfGeometry:y,releaseStatesOfProgram:z,initAttributes:E,enableAttribute:A,disableUnusedAttributes:R}}function N1(t,e,n,i){const r=i.isWebGL2;let s;function a(h){s=h}function o(h,f){t.drawArrays(s,h,f),n.update(f,s,1)}function c(h,f,d){if(d===0)return;let m,v;if(r)m=t,v="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[v](s,h,f,d),n.update(f,s,d)}function l(h,f,d){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<d;v++)this.render(h[v],f[v]);else{m.multiDrawArraysWEBGL(s,h,0,f,0,d);let v=0;for(let _=0;_<d;_++)v+=f[_];n.update(v,s,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function F1(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||e.has("WEBGL_draw_buffers"),h=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),_=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),T=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=d>0,A=a||e.has("OES_texture_float"),D=E&&A,R=a?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:v,maxAttributes:_,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:T,vertexTextures:E,floatFragmentTextures:A,floatVertexTextures:D,maxSamples:R}}function O1(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Ki,o=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||r;return r=d,i=f.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=h(f,d,0)},this.setState=function(f,d,m){const v=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,u=t.get(f);if(!r||v===null||v.length===0||s&&!p)s?h(null):l();else{const T=s?0:i,E=T*4;let A=u.clippingState||null;c.value=A,A=h(v,d,E,m);for(let D=0;D!==E;++D)A[D]=n[D];u.clippingState=A,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,d,m,v){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=c.value,v!==!0||p===null){const u=m+_*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(p===null||p.length<u)&&(p=new Float32Array(u));for(let E=0,A=m;E!==_;++E,A+=4)a.copy(f[E]).applyMatrix4(T,o),a.normal.toArray(p,A),p[A+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function B1(t){let e=new WeakMap;function n(a,o){return o===Mc?a.mapping=kr:o===Sc&&(a.mapping=Gr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Mc||o===Sc)if(e.has(a)){const c=e.get(a).texture;return n(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new $g(c.height/2);return l.fromEquirectangularTexture(t,a),e.set(a,l),a.addEventListener("dispose",r),n(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Ed extends xd{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Cr=4,fu=[.125,.215,.35,.446,.526,.582],Qi=20,Ko=new Ed,du=new Ye;let $o=null,Zo=0,Jo=0;const $i=(1+Math.sqrt(5))/2,br=1/$i,pu=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,$i,br),new P(0,$i,-br),new P(br,0,$i),new P(-br,0,$i),new P($i,br,0),new P(-$i,br,0)];class mu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){$o=this._renderer.getRenderTarget(),Zo=this._renderer.getActiveCubeFace(),Jo=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_u(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($o,Zo,Jo),e.scissorTest=!1,ha(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===kr||e.mapping===Gr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$o=this._renderer.getRenderTarget(),Zo=this._renderer.getActiveCubeFace(),Jo=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:ws,format:Gn,colorSpace:_i,depthBuffer:!1},r=gu(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gu(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=k1(s)),this._blurMaterial=G1(s,e,n)}return r}_compileMaterial(e){const n=new fi(this._lodPlanes[0],e);this._renderer.compile(n,Ko)}_sceneToCubeUV(e,n,i,r){const o=new mn(90,1,n,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(du),h.toneMapping=Di,h.autoClear=!1;const m=new md({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),v=new fi(new Ns,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(du),_=!0);for(let u=0;u<6;u++){const T=u%3;T===0?(o.up.set(0,c[u],0),o.lookAt(l[u],0,0)):T===1?(o.up.set(0,0,c[u]),o.lookAt(0,l[u],0)):(o.up.set(0,c[u],0),o.lookAt(0,0,l[u]));const E=this._cubeSize;ha(r,T*E,u>2?E:0,E,E),h.setRenderTarget(r),_&&h.render(v,o),h.render(e,o)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===kr||e.mapping===Gr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=vu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_u());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new fi(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;ha(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(a,Ko)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=pu[(r-1)%pu.length];this._blur(e,r-1,r,s,a)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new fi(this._lodPlanes[r],l),d=l.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Qi-1),_=s/v,p=isFinite(s)?1+Math.floor(h*_):Qi;p>Qi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Qi}`);const u=[];let T=0;for(let w=0;w<Qi;++w){const $=w/_,S=Math.exp(-$*$/2);u.push(S),w===0?T+=S:w<p&&(T+=2*S)}for(let w=0;w<u.length;w++)u[w]=u[w]/T;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=u,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=v,d.mipInt.value=E-i;const A=this._sizeLods[r],D=3*A*(r>E-Cr?r-E+Cr:0),R=4*(this._cubeSize-A);ha(n,D,R,3*A,2*A),c.setRenderTarget(n),c.render(f,Ko)}}function k1(t){const e=[],n=[],i=[];let r=t;const s=t-Cr+1+fu.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let c=1/o;a>t-Cr?c=fu[a-t+Cr-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),h=-l,f=1+l,d=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,v=6,_=3,p=2,u=1,T=new Float32Array(_*v*m),E=new Float32Array(p*v*m),A=new Float32Array(u*v*m);for(let R=0;R<m;R++){const w=R%3*2/3-1,$=R>2?0:-1,S=[w,$,0,w+2/3,$,0,w+2/3,$+1,0,w,$,0,w+2/3,$+1,0,w,$+1,0];T.set(S,_*v*R),E.set(d,p*v*R);const y=[R,R,R,R,R,R];A.set(y,u*v*R)}const D=new zn;D.setAttribute("position",new gn(T,_)),D.setAttribute("uv",new gn(E,p)),D.setAttribute("faceIndex",new gn(A,u)),e.push(D),r>Cr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function gu(t,e,n){const i=new ar(t,e,n);return i.texture.mapping=za,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ha(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function G1(t,e,n){const i=new Float32Array(Qi),r=new P(0,1,0);return new or({name:"SphericalGaussianBlur",defines:{n:Qi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:el(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function _u(){return new or({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:el(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function vu(){return new or({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:el(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function el(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function z1(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===Mc||c===Sc,h=c===kr||c===Gr;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return n===null&&(n=new mu(t)),f=l?n.fromEquirectangular(o,f):n.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(l&&f&&f.height>0||h&&f&&r(f)){n===null&&(n=new mu(t));const d=l?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",s),d.texture}else return null}}}return o}function r(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function H1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function V1(t,e,n,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const _=d.morphAttributes[v];for(let p=0,u=_.length;p<u;p++)e.remove(_[p])}d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function c(f){const d=f.attributes;for(const v in d)e.update(d[v],t.ARRAY_BUFFER);const m=f.morphAttributes;for(const v in m){const _=m[v];for(let p=0,u=_.length;p<u;p++)e.update(_[p],t.ARRAY_BUFFER)}}function l(f){const d=[],m=f.index,v=f.attributes.position;let _=0;if(m!==null){const T=m.array;_=m.version;for(let E=0,A=T.length;E<A;E+=3){const D=T[E+0],R=T[E+1],w=T[E+2];d.push(D,R,R,w,w,D)}}else if(v!==void 0){const T=v.array;_=v.version;for(let E=0,A=T.length/3-1;E<A;E+=3){const D=E+0,R=E+1,w=E+2;d.push(D,R,R,w,w,D)}}else return;const p=new(cd(d)?_d:gd)(d,1);p.version=_;const u=s.get(f);u&&e.remove(u),s.set(f,p)}function h(f){const d=s.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function W1(t,e,n,i){const r=i.isWebGL2;let s;function a(m){s=m}let o,c;function l(m){o=m.type,c=m.bytesPerElement}function h(m,v){t.drawElements(s,v,o,m*c),n.update(v,s,1)}function f(m,v,_){if(_===0)return;let p,u;if(r)p=t,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](s,v,o,m*c,_),n.update(v,s,_)}function d(m,v,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<_;u++)this.render(m[u]/c,v[u]);else{p.multiDrawElementsWEBGL(s,v,0,o,m,0,_);let u=0;for(let T=0;T<_;T++)u+=v[T];n.update(u,s,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=f,this.renderMultiDraw=d}function X1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function q1(t,e){return t[0]-e[0]}function Y1(t,e){return Math.abs(e[1])-Math.abs(t[1])}function j1(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,a=new ft,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,f){const d=l.morphTargetInfluences;if(e.isWebGL2===!0){const v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=v!==void 0?v.length:0;let p=s.get(h);if(p===void 0||p.count!==_){let B=function(){ie.dispose(),s.delete(h),h.removeEventListener("dispose",B)};var m=B;p!==void 0&&p.texture.dispose();const E=h.morphAttributes.position!==void 0,A=h.morphAttributes.normal!==void 0,D=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],$=h.morphAttributes.color||[];let S=0;E===!0&&(S=1),A===!0&&(S=2),D===!0&&(S=3);let y=h.attributes.position.count*S,z=1;y>e.maxTextureSize&&(z=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const V=new Float32Array(y*z*4*_),ie=new ud(V,y,z,_);ie.type=Li,ie.needsUpdate=!0;const C=S*4;for(let G=0;G<_;G++){const X=R[G],H=w[G],W=$[G],q=y*z*4*G;for(let Q=0;Q<X.count;Q++){const ee=Q*C;E===!0&&(a.fromBufferAttribute(X,Q),V[q+ee+0]=a.x,V[q+ee+1]=a.y,V[q+ee+2]=a.z,V[q+ee+3]=0),A===!0&&(a.fromBufferAttribute(H,Q),V[q+ee+4]=a.x,V[q+ee+5]=a.y,V[q+ee+6]=a.z,V[q+ee+7]=0),D===!0&&(a.fromBufferAttribute(W,Q),V[q+ee+8]=a.x,V[q+ee+9]=a.y,V[q+ee+10]=a.z,V[q+ee+11]=W.itemSize===4?a.w:1)}}p={count:_,texture:ie,size:new Ze(y,z)},s.set(h,p),h.addEventListener("dispose",B)}let u=0;for(let E=0;E<d.length;E++)u+=d[E];const T=h.morphTargetsRelative?1:1-u;f.getUniforms().setValue(t,"morphTargetBaseInfluence",T),f.getUniforms().setValue(t,"morphTargetInfluences",d),f.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const v=d===void 0?0:d.length;let _=i[h.id];if(_===void 0||_.length!==v){_=[];for(let A=0;A<v;A++)_[A]=[A,0];i[h.id]=_}for(let A=0;A<v;A++){const D=_[A];D[0]=A,D[1]=d[A]}_.sort(Y1);for(let A=0;A<8;A++)A<v&&_[A][1]?(o[A][0]=_[A][0],o[A][1]=_[A][1]):(o[A][0]=Number.MAX_SAFE_INTEGER,o[A][1]=0);o.sort(q1);const p=h.morphAttributes.position,u=h.morphAttributes.normal;let T=0;for(let A=0;A<8;A++){const D=o[A],R=D[0],w=D[1];R!==Number.MAX_SAFE_INTEGER&&w?(p&&h.getAttribute("morphTarget"+A)!==p[R]&&h.setAttribute("morphTarget"+A,p[R]),u&&h.getAttribute("morphNormal"+A)!==u[R]&&h.setAttribute("morphNormal"+A,u[R]),r[A]=w,T+=w):(p&&h.hasAttribute("morphTarget"+A)===!0&&h.deleteAttribute("morphTarget"+A),u&&h.hasAttribute("morphNormal"+A)===!0&&h.deleteAttribute("morphNormal"+A),r[A]=0)}const E=h.morphTargetsRelative?1:1-T;f.getUniforms().setValue(t,"morphTargetBaseInfluence",E),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:c}}function K1(t,e,n,i){let r=new WeakMap;function s(c){const l=i.render.frame,h=c.geometry,f=e.get(c,h);if(r.get(f)!==l&&(e.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return f}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),n.remove(l.instanceMatrix),l.instanceColor!==null&&n.remove(l.instanceColor)}return{update:s,dispose:a}}class yd extends sn{constructor(e,n,i,r,s,a,o,c,l,h){if(h=h!==void 0?h:ir,h!==ir&&h!==zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ir&&(i=Ci),i===void 0&&h===zr&&(i=nr),super(null,r,s,a,o,c,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:Kt,this.minFilter=c!==void 0?c:Kt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Td=new sn,Ad=new yd(1,1);Ad.compareFunction=od;const bd=new ud,wd=new Ug,Rd=new Md,xu=[],Mu=[],Su=new Float32Array(16),Eu=new Float32Array(9),yu=new Float32Array(4);function ts(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=xu[r];if(s===void 0&&(s=new Float32Array(r),xu[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Dt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ut(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Xa(t,e){let n=Mu[e];n===void 0&&(n=new Int32Array(e),Mu[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function $1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Z1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2fv(this.addr,e),Ut(n,e)}}function J1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Dt(n,e))return;t.uniform3fv(this.addr,e),Ut(n,e)}}function Q1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4fv(this.addr,e),Ut(n,e)}}function e2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ut(n,e)}else{if(Dt(n,i))return;yu.set(i),t.uniformMatrix2fv(this.addr,!1,yu),Ut(n,i)}}function t2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ut(n,e)}else{if(Dt(n,i))return;Eu.set(i),t.uniformMatrix3fv(this.addr,!1,Eu),Ut(n,i)}}function n2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ut(n,e)}else{if(Dt(n,i))return;Su.set(i),t.uniformMatrix4fv(this.addr,!1,Su),Ut(n,i)}}function i2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function r2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2iv(this.addr,e),Ut(n,e)}}function s2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3iv(this.addr,e),Ut(n,e)}}function a2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4iv(this.addr,e),Ut(n,e)}}function o2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function c2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2uiv(this.addr,e),Ut(n,e)}}function l2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3uiv(this.addr,e),Ut(n,e)}}function h2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4uiv(this.addr,e),Ut(n,e)}}function u2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?Ad:Td;n.setTexture2D(e||s,r)}function f2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||wd,r)}function d2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Rd,r)}function p2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||bd,r)}function m2(t){switch(t){case 5126:return $1;case 35664:return Z1;case 35665:return J1;case 35666:return Q1;case 35674:return e2;case 35675:return t2;case 35676:return n2;case 5124:case 35670:return i2;case 35667:case 35671:return r2;case 35668:case 35672:return s2;case 35669:case 35673:return a2;case 5125:return o2;case 36294:return c2;case 36295:return l2;case 36296:return h2;case 35678:case 36198:case 36298:case 36306:case 35682:return u2;case 35679:case 36299:case 36307:return f2;case 35680:case 36300:case 36308:case 36293:return d2;case 36289:case 36303:case 36311:case 36292:return p2}}function g2(t,e){t.uniform1fv(this.addr,e)}function _2(t,e){const n=ts(e,this.size,2);t.uniform2fv(this.addr,n)}function v2(t,e){const n=ts(e,this.size,3);t.uniform3fv(this.addr,n)}function x2(t,e){const n=ts(e,this.size,4);t.uniform4fv(this.addr,n)}function M2(t,e){const n=ts(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function S2(t,e){const n=ts(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function E2(t,e){const n=ts(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function y2(t,e){t.uniform1iv(this.addr,e)}function T2(t,e){t.uniform2iv(this.addr,e)}function A2(t,e){t.uniform3iv(this.addr,e)}function b2(t,e){t.uniform4iv(this.addr,e)}function w2(t,e){t.uniform1uiv(this.addr,e)}function R2(t,e){t.uniform2uiv(this.addr,e)}function C2(t,e){t.uniform3uiv(this.addr,e)}function L2(t,e){t.uniform4uiv(this.addr,e)}function P2(t,e,n){const i=this.cache,r=e.length,s=Xa(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||Td,s[a])}function D2(t,e,n){const i=this.cache,r=e.length,s=Xa(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||wd,s[a])}function U2(t,e,n){const i=this.cache,r=e.length,s=Xa(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Rd,s[a])}function I2(t,e,n){const i=this.cache,r=e.length,s=Xa(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||bd,s[a])}function N2(t){switch(t){case 5126:return g2;case 35664:return _2;case 35665:return v2;case 35666:return x2;case 35674:return M2;case 35675:return S2;case 35676:return E2;case 5124:case 35670:return y2;case 35667:case 35671:return T2;case 35668:case 35672:return A2;case 35669:case 35673:return b2;case 5125:return w2;case 36294:return R2;case 36295:return C2;case 36296:return L2;case 35678:case 36198:case 36298:case 36306:case 35682:return P2;case 35679:case 36299:case 36307:return D2;case 35680:case 36300:case 36308:case 36293:return U2;case 36289:case 36303:case 36311:case 36292:return I2}}class F2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=m2(n.type)}}class O2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=N2(n.type)}}class B2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Qo=/(\w+)(\])?(\[|\.)?/g;function Tu(t,e){t.seq.push(e),t.map[e.id]=e}function k2(t,e,n){const i=t.name,r=i.length;for(Qo.lastIndex=0;;){const s=Qo.exec(i),a=Qo.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Tu(n,l===void 0?new F2(o,t,e):new O2(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new B2(o),Tu(n,f)),n=f}}}class va{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);k2(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Au(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const G2=37297;let z2=0;function H2(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function V2(t){const e=nt.getPrimaries(nt.workingColorSpace),n=nt.getPrimaries(t);let i;switch(e===n?i="":e===Ra&&n===wa?i="LinearDisplayP3ToLinearSRGB":e===wa&&n===Ra&&(i="LinearSRGBToLinearDisplayP3"),t){case _i:case Ha:return[i,"LinearTransferOETF"];case kt:case Zc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function bu(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+H2(t.getShaderSource(e),a)}else return r}function W2(t,e){const n=V2(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function X2(t,e){let n;switch(e){case ng:n="Linear";break;case ig:n="Reinhard";break;case rg:n="OptimizedCineon";break;case sg:n="ACESFilmic";break;case og:n="AgX";break;case ag:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function q2(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Lr).join(`
`)}function Y2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Lr).join(`
`)}function j2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function K2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Lr(t){return t!==""}function wu(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ru(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $2=/^[ \t]*#include +<([\w\d./]+)>/gm;function wc(t){return t.replace($2,J2)}const Z2=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function J2(t,e){let n=Oe[e];if(n===void 0){const i=Z2.get(e);if(i!==void 0)n=Oe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return wc(n)}const Q2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cu(t){return t.replace(Q2,ev)}function ev(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Lu(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function tv(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===$f?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Lm?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===oi&&(e="SHADOWMAP_TYPE_VSM"),e}function nv(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case kr:case Gr:e="ENVMAP_TYPE_CUBE";break;case za:e="ENVMAP_TYPE_CUBE_UV";break}return e}function iv(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Gr:e="ENVMAP_MODE_REFRACTION";break}return e}function rv(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Kc:e="ENVMAP_BLENDING_MULTIPLY";break;case eg:e="ENVMAP_BLENDING_MIX";break;case tg:e="ENVMAP_BLENDING_ADD";break}return e}function sv(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function av(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const c=tv(n),l=nv(n),h=iv(n),f=rv(n),d=sv(n),m=n.isWebGL2?"":q2(n),v=Y2(n),_=j2(s),p=r.createProgram();let u,T,E=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Lr).join(`
`),u.length>0&&(u+=`
`),T=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Lr).join(`
`),T.length>0&&(T+=`
`)):(u=[Lu(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lr).join(`
`),T=[m,Lu(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+h:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Di?"#define TONE_MAPPING":"",n.toneMapping!==Di?Oe.tonemapping_pars_fragment:"",n.toneMapping!==Di?X2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,W2("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Lr).join(`
`)),a=wc(a),a=wu(a,n),a=Ru(a,n),o=wc(o),o=wu(o,n),o=Ru(o,n),a=Cu(a),o=Cu(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,u=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,T=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===jh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===jh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+T);const A=E+u+a,D=E+T+o,R=Au(r,r.VERTEX_SHADER,A),w=Au(r,r.FRAGMENT_SHADER,D);r.attachShader(p,R),r.attachShader(p,w),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function $(V){if(t.debug.checkShaderErrors){const ie=r.getProgramInfoLog(p).trim(),C=r.getShaderInfoLog(R).trim(),B=r.getShaderInfoLog(w).trim();let G=!0,X=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(G=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,R,w);else{const H=bu(r,R,"vertex"),W=bu(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Program Info Log: `+ie+`
`+H+`
`+W)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(C===""||B==="")&&(X=!1);X&&(V.diagnostics={runnable:G,programLog:ie,vertexShader:{log:C,prefix:u},fragmentShader:{log:B,prefix:T}})}r.deleteShader(R),r.deleteShader(w),S=new va(r,p),y=K2(r,p)}let S;this.getUniforms=function(){return S===void 0&&$(this),S};let y;this.getAttributes=function(){return y===void 0&&$(this),y};let z=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=r.getProgramParameter(p,G2)),z},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=z2++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=R,this.fragmentShader=w,this}let ov=0;class cv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new lv(e),n.set(e,i)),i}}class lv{constructor(e){this.id=ov++,this.code=e,this.usedTimes=0}}function hv(t,e,n,i,r,s,a){const o=new dd,c=new cv,l=[],h=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function p(S,y,z,V,ie){const C=V.fog,B=ie.geometry,G=S.isMeshStandardMaterial?V.environment:null,X=(S.isMeshStandardMaterial?n:e).get(S.envMap||G),H=X&&X.mapping===za?X.image.height:null,W=v[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const q=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Q=q!==void 0?q.length:0;let ee=0;B.morphAttributes.position!==void 0&&(ee=1),B.morphAttributes.normal!==void 0&&(ee=2),B.morphAttributes.color!==void 0&&(ee=3);let k,Y,oe,Se;if(W){const qt=$n[W];k=qt.vertexShader,Y=qt.fragmentShader}else k=S.vertexShader,Y=S.fragmentShader,c.update(S),oe=c.getVertexShaderID(S),Se=c.getFragmentShaderID(S);const xe=t.getRenderTarget(),Ue=ie.isInstancedMesh===!0,Ne=ie.isBatchedMesh===!0,we=!!S.map,je=!!S.matcap,U=!!X,Xt=!!S.aoMap,ye=!!S.lightMap,Pe=!!S.bumpMap,ge=!!S.normalMap,mt=!!S.displacementMap,Be=!!S.emissiveMap,M=!!S.metalnessMap,g=!!S.roughnessMap,N=S.anisotropy>0,Z=S.clearcoat>0,K=S.iridescence>0,J=S.sheen>0,_e=S.transmission>0,ae=N&&!!S.anisotropyMap,he=Z&&!!S.clearcoatMap,be=Z&&!!S.clearcoatNormalMap,ke=Z&&!!S.clearcoatRoughnessMap,j=K&&!!S.iridescenceMap,tt=K&&!!S.iridescenceThicknessMap,We=J&&!!S.sheenColorMap,Le=J&&!!S.sheenRoughnessMap,Ee=!!S.specularMap,ue=!!S.specularColorMap,Fe=!!S.specularIntensityMap,Qe=_e&&!!S.transmissionMap,vt=_e&&!!S.thicknessMap,ze=!!S.gradientMap,te=!!S.alphaMap,b=S.alphaTest>0,re=!!S.alphaHash,se=!!S.extensions,Re=!!B.attributes.uv1,Te=!!B.attributes.uv2,rt=!!B.attributes.uv3;let st=Di;return S.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(st=t.toneMapping),{isWebGL2:h,shaderID:W,shaderType:S.type,shaderName:S.name,vertexShader:k,fragmentShader:Y,defines:S.defines,customVertexShaderID:oe,customFragmentShaderID:Se,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Ne,instancing:Ue,instancingColor:Ue&&ie.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:xe===null?t.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:_i,map:we,matcap:je,envMap:U,envMapMode:U&&X.mapping,envMapCubeUVHeight:H,aoMap:Xt,lightMap:ye,bumpMap:Pe,normalMap:ge,displacementMap:d&&mt,emissiveMap:Be,normalMapObjectSpace:ge&&S.normalMapType===xg,normalMapTangentSpace:ge&&S.normalMapType===ad,metalnessMap:M,roughnessMap:g,anisotropy:N,anisotropyMap:ae,clearcoat:Z,clearcoatMap:he,clearcoatNormalMap:be,clearcoatRoughnessMap:ke,iridescence:K,iridescenceMap:j,iridescenceThicknessMap:tt,sheen:J,sheenColorMap:We,sheenRoughnessMap:Le,specularMap:Ee,specularColorMap:ue,specularIntensityMap:Fe,transmission:_e,transmissionMap:Qe,thicknessMap:vt,gradientMap:ze,opaque:S.transparent===!1&&S.blending===Dr,alphaMap:te,alphaTest:b,alphaHash:re,combine:S.combine,mapUv:we&&_(S.map.channel),aoMapUv:Xt&&_(S.aoMap.channel),lightMapUv:ye&&_(S.lightMap.channel),bumpMapUv:Pe&&_(S.bumpMap.channel),normalMapUv:ge&&_(S.normalMap.channel),displacementMapUv:mt&&_(S.displacementMap.channel),emissiveMapUv:Be&&_(S.emissiveMap.channel),metalnessMapUv:M&&_(S.metalnessMap.channel),roughnessMapUv:g&&_(S.roughnessMap.channel),anisotropyMapUv:ae&&_(S.anisotropyMap.channel),clearcoatMapUv:he&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:be&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:We&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Le&&_(S.sheenRoughnessMap.channel),specularMapUv:Ee&&_(S.specularMap.channel),specularColorMapUv:ue&&_(S.specularColorMap.channel),specularIntensityMapUv:Fe&&_(S.specularIntensityMap.channel),transmissionMapUv:Qe&&_(S.transmissionMap.channel),thicknessMapUv:vt&&_(S.thicknessMap.channel),alphaMapUv:te&&_(S.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ge||N),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:Re,vertexUv2s:Te,vertexUv3s:rt,pointsUvs:ie.isPoints===!0&&!!B.attributes.uv&&(we||te),fog:!!C,useFog:S.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:ie.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ee,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&z.length>0,shadowMapType:t.shadowMap.type,toneMapping:st,useLegacyLights:t._useLegacyLights,decodeVideoTexture:we&&S.map.isVideoTexture===!0&&nt.getTransfer(S.map.colorSpace)===lt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===li,flipSided:S.side===rn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:se&&S.extensions.derivatives===!0,extensionFragDepth:se&&S.extensions.fragDepth===!0,extensionDrawBuffers:se&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:se&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:se&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function u(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const z in S.defines)y.push(z),y.push(S.defines[z]);return S.isRawShaderMaterial===!1&&(T(y,S),E(y,S),y.push(t.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function T(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function E(S,y){o.disableAll(),y.isWebGL2&&o.enable(0),y.supportsVertexTextures&&o.enable(1),y.instancing&&o.enable(2),y.instancingColor&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),S.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.skinning&&o.enable(4),y.morphTargets&&o.enable(5),y.morphNormals&&o.enable(6),y.morphColors&&o.enable(7),y.premultipliedAlpha&&o.enable(8),y.shadowMapEnabled&&o.enable(9),y.useLegacyLights&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),S.push(o.mask)}function A(S){const y=v[S.type];let z;if(y){const V=$n[y];z=qg.clone(V.uniforms)}else z=S.uniforms;return z}function D(S,y){let z;for(let V=0,ie=l.length;V<ie;V++){const C=l[V];if(C.cacheKey===y){z=C,++z.usedTimes;break}}return z===void 0&&(z=new av(t,y,S,s),l.push(z)),z}function R(S){if(--S.usedTimes===0){const y=l.indexOf(S);l[y]=l[l.length-1],l.pop(),S.destroy()}}function w(S){c.remove(S)}function $(){c.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:A,acquireProgram:D,releaseProgram:R,releaseShaderCache:w,programs:l,dispose:$}}function uv(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function fv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Pu(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Du(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f,d,m,v,_,p){let u=t[e];return u===void 0?(u={id:f.id,object:f,geometry:d,material:m,groupOrder:v,renderOrder:f.renderOrder,z:_,group:p},t[e]=u):(u.id=f.id,u.object=f,u.geometry=d,u.material=m,u.groupOrder=v,u.renderOrder=f.renderOrder,u.z=_,u.group=p),e++,u}function o(f,d,m,v,_,p){const u=a(f,d,m,v,_,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function c(f,d,m,v,_,p){const u=a(f,d,m,v,_,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function l(f,d){n.length>1&&n.sort(f||fv),i.length>1&&i.sort(d||Pu),r.length>1&&r.sort(d||Pu)}function h(){for(let f=e,d=t.length;f<d;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:h,sort:l}}function dv(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Du,t.set(i,[a])):r>=s.length?(a=new Du,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function pv(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new P,color:new Ye};break;case"SpotLight":n={position:new P,direction:new P,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new P,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":n={direction:new P,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":n={color:new Ye,position:new P,halfWidth:new P,halfHeight:new P};break}return t[e.id]=n,n}}}function mv(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let gv=0;function _v(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function vv(t,e){const n=new pv,i=mv(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new P);const s=new P,a=new At,o=new At;function c(h,f){let d=0,m=0,v=0;for(let V=0;V<9;V++)r.probe[V].set(0,0,0);let _=0,p=0,u=0,T=0,E=0,A=0,D=0,R=0,w=0,$=0,S=0;h.sort(_v);const y=f===!0?Math.PI:1;for(let V=0,ie=h.length;V<ie;V++){const C=h[V],B=C.color,G=C.intensity,X=C.distance,H=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)d+=B.r*G*y,m+=B.g*G*y,v+=B.b*G*y;else if(C.isLightProbe){for(let W=0;W<9;W++)r.probe[W].addScaledVector(C.sh.coefficients[W],G);S++}else if(C.isDirectionalLight){const W=n.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity*y),C.castShadow){const q=C.shadow,Q=i.get(C);Q.shadowBias=q.bias,Q.shadowNormalBias=q.normalBias,Q.shadowRadius=q.radius,Q.shadowMapSize=q.mapSize,r.directionalShadow[_]=Q,r.directionalShadowMap[_]=H,r.directionalShadowMatrix[_]=C.shadow.matrix,A++}r.directional[_]=W,_++}else if(C.isSpotLight){const W=n.get(C);W.position.setFromMatrixPosition(C.matrixWorld),W.color.copy(B).multiplyScalar(G*y),W.distance=X,W.coneCos=Math.cos(C.angle),W.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),W.decay=C.decay,r.spot[u]=W;const q=C.shadow;if(C.map&&(r.spotLightMap[w]=C.map,w++,q.updateMatrices(C),C.castShadow&&$++),r.spotLightMatrix[u]=q.matrix,C.castShadow){const Q=i.get(C);Q.shadowBias=q.bias,Q.shadowNormalBias=q.normalBias,Q.shadowRadius=q.radius,Q.shadowMapSize=q.mapSize,r.spotShadow[u]=Q,r.spotShadowMap[u]=H,R++}u++}else if(C.isRectAreaLight){const W=n.get(C);W.color.copy(B).multiplyScalar(G),W.halfWidth.set(C.width*.5,0,0),W.halfHeight.set(0,C.height*.5,0),r.rectArea[T]=W,T++}else if(C.isPointLight){const W=n.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity*y),W.distance=C.distance,W.decay=C.decay,C.castShadow){const q=C.shadow,Q=i.get(C);Q.shadowBias=q.bias,Q.shadowNormalBias=q.normalBias,Q.shadowRadius=q.radius,Q.shadowMapSize=q.mapSize,Q.shadowCameraNear=q.camera.near,Q.shadowCameraFar=q.camera.far,r.pointShadow[p]=Q,r.pointShadowMap[p]=H,r.pointShadowMatrix[p]=C.shadow.matrix,D++}r.point[p]=W,p++}else if(C.isHemisphereLight){const W=n.get(C);W.skyColor.copy(C.color).multiplyScalar(G*y),W.groundColor.copy(C.groundColor).multiplyScalar(G*y),r.hemi[E]=W,E++}}T>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_FLOAT_1,r.rectAreaLTC2=ne.LTC_FLOAT_2):(r.rectAreaLTC1=ne.LTC_HALF_1,r.rectAreaLTC2=ne.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_FLOAT_1,r.rectAreaLTC2=ne.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_HALF_1,r.rectAreaLTC2=ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=v;const z=r.hash;(z.directionalLength!==_||z.pointLength!==p||z.spotLength!==u||z.rectAreaLength!==T||z.hemiLength!==E||z.numDirectionalShadows!==A||z.numPointShadows!==D||z.numSpotShadows!==R||z.numSpotMaps!==w||z.numLightProbes!==S)&&(r.directional.length=_,r.spot.length=u,r.rectArea.length=T,r.point.length=p,r.hemi.length=E,r.directionalShadow.length=A,r.directionalShadowMap.length=A,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=A,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=R+w-$,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=$,r.numLightProbes=S,z.directionalLength=_,z.pointLength=p,z.spotLength=u,z.rectAreaLength=T,z.hemiLength=E,z.numDirectionalShadows=A,z.numPointShadows=D,z.numSpotShadows=R,z.numSpotMaps=w,z.numLightProbes=S,r.version=gv++)}function l(h,f){let d=0,m=0,v=0,_=0,p=0;const u=f.matrixWorldInverse;for(let T=0,E=h.length;T<E;T++){const A=h[T];if(A.isDirectionalLight){const D=r.directional[d];D.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(u),d++}else if(A.isSpotLight){const D=r.spot[v];D.position.setFromMatrixPosition(A.matrixWorld),D.position.applyMatrix4(u),D.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),D.direction.sub(s),D.direction.transformDirection(u),v++}else if(A.isRectAreaLight){const D=r.rectArea[_];D.position.setFromMatrixPosition(A.matrixWorld),D.position.applyMatrix4(u),o.identity(),a.copy(A.matrixWorld),a.premultiply(u),o.extractRotation(a),D.halfWidth.set(A.width*.5,0,0),D.halfHeight.set(0,A.height*.5,0),D.halfWidth.applyMatrix4(o),D.halfHeight.applyMatrix4(o),_++}else if(A.isPointLight){const D=r.point[m];D.position.setFromMatrixPosition(A.matrixWorld),D.position.applyMatrix4(u),m++}else if(A.isHemisphereLight){const D=r.hemi[p];D.direction.setFromMatrixPosition(A.matrixWorld),D.direction.transformDirection(u),p++}}}return{setup:c,setupView:l,state:r}}function Uu(t,e){const n=new vv(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function c(f){n.setup(i,f)}function l(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function xv(t,e){let n=new WeakMap;function i(s,a=0){const o=n.get(s);let c;return o===void 0?(c=new Uu(t,e),n.set(s,[c])):a>=o.length?(c=new Uu(t,e),o.push(c)):c=o[a],c}function r(){n=new WeakMap}return{get:i,dispose:r}}class Mv extends es{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_g,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Sv extends es{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ev=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Tv(t,e,n){let i=new Jc;const r=new Ze,s=new Ze,a=new ft,o=new Mv({depthPacking:vg}),c=new Sv,l={},h=n.maxTextureSize,f={[Fi]:rn,[rn]:Fi,[li]:li},d=new or({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:Ev,fragmentShader:yv}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const v=new zn;v.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new fi(v,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$f;let u=this.type;this.render=function(R,w,$){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const S=t.getRenderTarget(),y=t.getActiveCubeFace(),z=t.getActiveMipmapLevel(),V=t.state;V.setBlending(Pi),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const ie=u!==oi&&this.type===oi,C=u===oi&&this.type!==oi;for(let B=0,G=R.length;B<G;B++){const X=R[B],H=X.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const W=H.getFrameExtents();if(r.multiply(W),s.copy(H.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/W.x),r.x=s.x*W.x,H.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/W.y),r.y=s.y*W.y,H.mapSize.y=s.y)),H.map===null||ie===!0||C===!0){const Q=this.type!==oi?{minFilter:Kt,magFilter:Kt}:{};H.map!==null&&H.map.dispose(),H.map=new ar(r.x,r.y,Q),H.map.texture.name=X.name+".shadowMap",H.camera.updateProjectionMatrix()}t.setRenderTarget(H.map),t.clear();const q=H.getViewportCount();for(let Q=0;Q<q;Q++){const ee=H.getViewport(Q);a.set(s.x*ee.x,s.y*ee.y,s.x*ee.z,s.y*ee.w),V.viewport(a),H.updateMatrices(X,Q),i=H.getFrustum(),A(w,$,H.camera,X,this.type)}H.isPointLightShadow!==!0&&this.type===oi&&T(H,$),H.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(S,y,z)};function T(R,w){const $=e.update(_);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ar(r.x,r.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(w,null,$,d,_,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(w,null,$,m,_,null)}function E(R,w,$,S){let y=null;const z=$.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(z!==void 0)y=z;else if(y=$.isPointLight===!0?c:o,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const V=y.uuid,ie=w.uuid;let C=l[V];C===void 0&&(C={},l[V]=C);let B=C[ie];B===void 0&&(B=y.clone(),C[ie]=B,w.addEventListener("dispose",D)),y=B}if(y.visible=w.visible,y.wireframe=w.wireframe,S===oi?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:f[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,$.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const V=t.properties.get(y);V.light=$}return y}function A(R,w,$,S,y){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===oi)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,R.matrixWorld);const ie=e.update(R),C=R.material;if(Array.isArray(C)){const B=ie.groups;for(let G=0,X=B.length;G<X;G++){const H=B[G],W=C[H.materialIndex];if(W&&W.visible){const q=E(R,W,S,y);R.onBeforeShadow(t,R,w,$,ie,q,H),t.renderBufferDirect($,null,ie,q,R,H),R.onAfterShadow(t,R,w,$,ie,q,H)}}}else if(C.visible){const B=E(R,C,S,y);R.onBeforeShadow(t,R,w,$,ie,B,null),t.renderBufferDirect($,null,ie,B,R,null),R.onAfterShadow(t,R,w,$,ie,B,null)}}const V=R.children;for(let ie=0,C=V.length;ie<C;ie++)A(V[ie],w,$,S,y)}function D(R){R.target.removeEventListener("dispose",D);for(const $ in l){const S=l[$],y=R.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}function Av(t,e,n){const i=n.isWebGL2;function r(){let b=!1;const re=new ft;let se=null;const Re=new ft(0,0,0,0);return{setMask:function(Te){se!==Te&&!b&&(t.colorMask(Te,Te,Te,Te),se=Te)},setLocked:function(Te){b=Te},setClear:function(Te,rt,st,It,qt){qt===!0&&(Te*=It,rt*=It,st*=It),re.set(Te,rt,st,It),Re.equals(re)===!1&&(t.clearColor(Te,rt,st,It),Re.copy(re))},reset:function(){b=!1,se=null,Re.set(-1,0,0,0)}}}function s(){let b=!1,re=null,se=null,Re=null;return{setTest:function(Te){Te?Ne(t.DEPTH_TEST):we(t.DEPTH_TEST)},setMask:function(Te){re!==Te&&!b&&(t.depthMask(Te),re=Te)},setFunc:function(Te){if(se!==Te){switch(Te){case Ym:t.depthFunc(t.NEVER);break;case jm:t.depthFunc(t.ALWAYS);break;case Km:t.depthFunc(t.LESS);break;case Aa:t.depthFunc(t.LEQUAL);break;case $m:t.depthFunc(t.EQUAL);break;case Zm:t.depthFunc(t.GEQUAL);break;case Jm:t.depthFunc(t.GREATER);break;case Qm:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}se=Te}},setLocked:function(Te){b=Te},setClear:function(Te){Re!==Te&&(t.clearDepth(Te),Re=Te)},reset:function(){b=!1,re=null,se=null,Re=null}}}function a(){let b=!1,re=null,se=null,Re=null,Te=null,rt=null,st=null,It=null,qt=null;return{setTest:function(at){b||(at?Ne(t.STENCIL_TEST):we(t.STENCIL_TEST))},setMask:function(at){re!==at&&!b&&(t.stencilMask(at),re=at)},setFunc:function(at,Yt,qn){(se!==at||Re!==Yt||Te!==qn)&&(t.stencilFunc(at,Yt,qn),se=at,Re=Yt,Te=qn)},setOp:function(at,Yt,qn){(rt!==at||st!==Yt||It!==qn)&&(t.stencilOp(at,Yt,qn),rt=at,st=Yt,It=qn)},setLocked:function(at){b=at},setClear:function(at){qt!==at&&(t.clearStencil(at),qt=at)},reset:function(){b=!1,re=null,se=null,Re=null,Te=null,rt=null,st=null,It=null,qt=null}}}const o=new r,c=new s,l=new a,h=new WeakMap,f=new WeakMap;let d={},m={},v=new WeakMap,_=[],p=null,u=!1,T=null,E=null,A=null,D=null,R=null,w=null,$=null,S=new Ye(0,0,0),y=0,z=!1,V=null,ie=null,C=null,B=null,G=null;const X=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,W=0;const q=t.getParameter(t.VERSION);q.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=W>=1):q.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=W>=2);let Q=null,ee={};const k=t.getParameter(t.SCISSOR_BOX),Y=t.getParameter(t.VIEWPORT),oe=new ft().fromArray(k),Se=new ft().fromArray(Y);function xe(b,re,se,Re){const Te=new Uint8Array(4),rt=t.createTexture();t.bindTexture(b,rt),t.texParameteri(b,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(b,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let st=0;st<se;st++)i&&(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)?t.texImage3D(re,0,t.RGBA,1,1,Re,0,t.RGBA,t.UNSIGNED_BYTE,Te):t.texImage2D(re+st,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Te);return rt}const Ue={};Ue[t.TEXTURE_2D]=xe(t.TEXTURE_2D,t.TEXTURE_2D,1),Ue[t.TEXTURE_CUBE_MAP]=xe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ue[t.TEXTURE_2D_ARRAY]=xe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ue[t.TEXTURE_3D]=xe(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ne(t.DEPTH_TEST),c.setFunc(Aa),Be(!1),M(mh),Ne(t.CULL_FACE),ge(Pi);function Ne(b){d[b]!==!0&&(t.enable(b),d[b]=!0)}function we(b){d[b]!==!1&&(t.disable(b),d[b]=!1)}function je(b,re){return m[b]!==re?(t.bindFramebuffer(b,re),m[b]=re,i&&(b===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=re),b===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=re)),!0):!1}function U(b,re){let se=_,Re=!1;if(b)if(se=v.get(re),se===void 0&&(se=[],v.set(re,se)),b.isWebGLMultipleRenderTargets){const Te=b.texture;if(se.length!==Te.length||se[0]!==t.COLOR_ATTACHMENT0){for(let rt=0,st=Te.length;rt<st;rt++)se[rt]=t.COLOR_ATTACHMENT0+rt;se.length=Te.length,Re=!0}}else se[0]!==t.COLOR_ATTACHMENT0&&(se[0]=t.COLOR_ATTACHMENT0,Re=!0);else se[0]!==t.BACK&&(se[0]=t.BACK,Re=!0);Re&&(n.isWebGL2?t.drawBuffers(se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se))}function Xt(b){return p!==b?(t.useProgram(b),p=b,!0):!1}const ye={[Ji]:t.FUNC_ADD,[Dm]:t.FUNC_SUBTRACT,[Um]:t.FUNC_REVERSE_SUBTRACT};if(i)ye[vh]=t.MIN,ye[xh]=t.MAX;else{const b=e.get("EXT_blend_minmax");b!==null&&(ye[vh]=b.MIN_EXT,ye[xh]=b.MAX_EXT)}const Pe={[Im]:t.ZERO,[Nm]:t.ONE,[Fm]:t.SRC_COLOR,[vc]:t.SRC_ALPHA,[Hm]:t.SRC_ALPHA_SATURATE,[Gm]:t.DST_COLOR,[Bm]:t.DST_ALPHA,[Om]:t.ONE_MINUS_SRC_COLOR,[xc]:t.ONE_MINUS_SRC_ALPHA,[zm]:t.ONE_MINUS_DST_COLOR,[km]:t.ONE_MINUS_DST_ALPHA,[Vm]:t.CONSTANT_COLOR,[Wm]:t.ONE_MINUS_CONSTANT_COLOR,[Xm]:t.CONSTANT_ALPHA,[qm]:t.ONE_MINUS_CONSTANT_ALPHA};function ge(b,re,se,Re,Te,rt,st,It,qt,at){if(b===Pi){u===!0&&(we(t.BLEND),u=!1);return}if(u===!1&&(Ne(t.BLEND),u=!0),b!==Pm){if(b!==T||at!==z){if((E!==Ji||R!==Ji)&&(t.blendEquation(t.FUNC_ADD),E=Ji,R=Ji),at)switch(b){case Dr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case _c:t.blendFunc(t.ONE,t.ONE);break;case gh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case _h:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}else switch(b){case Dr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case _c:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case gh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case _h:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}A=null,D=null,w=null,$=null,S.set(0,0,0),y=0,T=b,z=at}return}Te=Te||re,rt=rt||se,st=st||Re,(re!==E||Te!==R)&&(t.blendEquationSeparate(ye[re],ye[Te]),E=re,R=Te),(se!==A||Re!==D||rt!==w||st!==$)&&(t.blendFuncSeparate(Pe[se],Pe[Re],Pe[rt],Pe[st]),A=se,D=Re,w=rt,$=st),(It.equals(S)===!1||qt!==y)&&(t.blendColor(It.r,It.g,It.b,qt),S.copy(It),y=qt),T=b,z=!1}function mt(b,re){b.side===li?we(t.CULL_FACE):Ne(t.CULL_FACE);let se=b.side===rn;re&&(se=!se),Be(se),b.blending===Dr&&b.transparent===!1?ge(Pi):ge(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),c.setFunc(b.depthFunc),c.setTest(b.depthTest),c.setMask(b.depthWrite),o.setMask(b.colorWrite);const Re=b.stencilWrite;l.setTest(Re),Re&&(l.setMask(b.stencilWriteMask),l.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),l.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),N(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?Ne(t.SAMPLE_ALPHA_TO_COVERAGE):we(t.SAMPLE_ALPHA_TO_COVERAGE)}function Be(b){V!==b&&(b?t.frontFace(t.CW):t.frontFace(t.CCW),V=b)}function M(b){b!==Rm?(Ne(t.CULL_FACE),b!==ie&&(b===mh?t.cullFace(t.BACK):b===Cm?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):we(t.CULL_FACE),ie=b}function g(b){b!==C&&(H&&t.lineWidth(b),C=b)}function N(b,re,se){b?(Ne(t.POLYGON_OFFSET_FILL),(B!==re||G!==se)&&(t.polygonOffset(re,se),B=re,G=se)):we(t.POLYGON_OFFSET_FILL)}function Z(b){b?Ne(t.SCISSOR_TEST):we(t.SCISSOR_TEST)}function K(b){b===void 0&&(b=t.TEXTURE0+X-1),Q!==b&&(t.activeTexture(b),Q=b)}function J(b,re,se){se===void 0&&(Q===null?se=t.TEXTURE0+X-1:se=Q);let Re=ee[se];Re===void 0&&(Re={type:void 0,texture:void 0},ee[se]=Re),(Re.type!==b||Re.texture!==re)&&(Q!==se&&(t.activeTexture(se),Q=se),t.bindTexture(b,re||Ue[b]),Re.type=b,Re.texture=re)}function _e(){const b=ee[Q];b!==void 0&&b.type!==void 0&&(t.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)}function ae(){try{t.compressedTexImage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function he(){try{t.compressedTexImage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function be(){try{t.texSubImage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ke(){try{t.texSubImage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function j(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function tt(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function We(){try{t.texStorage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Le(){try{t.texStorage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Ee(){try{t.texImage2D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ue(){try{t.texImage3D.apply(t,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Fe(b){oe.equals(b)===!1&&(t.scissor(b.x,b.y,b.z,b.w),oe.copy(b))}function Qe(b){Se.equals(b)===!1&&(t.viewport(b.x,b.y,b.z,b.w),Se.copy(b))}function vt(b,re){let se=f.get(re);se===void 0&&(se=new WeakMap,f.set(re,se));let Re=se.get(b);Re===void 0&&(Re=t.getUniformBlockIndex(re,b.name),se.set(b,Re))}function ze(b,re){const Re=f.get(re).get(b);h.get(re)!==Re&&(t.uniformBlockBinding(re,Re,b.__bindingPointIndex),h.set(re,Re))}function te(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},Q=null,ee={},m={},v=new WeakMap,_=[],p=null,u=!1,T=null,E=null,A=null,D=null,R=null,w=null,$=null,S=new Ye(0,0,0),y=0,z=!1,V=null,ie=null,C=null,B=null,G=null,oe.set(0,0,t.canvas.width,t.canvas.height),Se.set(0,0,t.canvas.width,t.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Ne,disable:we,bindFramebuffer:je,drawBuffers:U,useProgram:Xt,setBlending:ge,setMaterial:mt,setFlipSided:Be,setCullFace:M,setLineWidth:g,setPolygonOffset:N,setScissorTest:Z,activeTexture:K,bindTexture:J,unbindTexture:_e,compressedTexImage2D:ae,compressedTexImage3D:he,texImage2D:Ee,texImage3D:ue,updateUBOMapping:vt,uniformBlockBinding:ze,texStorage2D:We,texStorage3D:Le,texSubImage2D:be,texSubImage3D:ke,compressedTexSubImage2D:j,compressedTexSubImage3D:tt,scissor:Fe,viewport:Qe,reset:te}}function bv(t,e,n,i,r,s,a){const o=r.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(M,g){return m?new OffscreenCanvas(M,g):La("canvas")}function _(M,g,N,Z){let K=1;if((M.width>Z||M.height>Z)&&(K=Z/Math.max(M.width,M.height)),K<1||g===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const J=g?bc:Math.floor,_e=J(K*M.width),ae=J(K*M.height);f===void 0&&(f=v(_e,ae));const he=N?v(_e,ae):f;return he.width=_e,he.height=ae,he.getContext("2d").drawImage(M,0,0,_e,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+_e+"x"+ae+")."),he}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function p(M){return Kh(M.width)&&Kh(M.height)}function u(M){return o?!1:M.wrapS!==kn||M.wrapT!==kn||M.minFilter!==Kt&&M.minFilter!==bn}function T(M,g){return M.generateMipmaps&&g&&M.minFilter!==Kt&&M.minFilter!==bn}function E(M){t.generateMipmap(M)}function A(M,g,N,Z,K=!1){if(o===!1)return g;if(M!==null){if(t[M]!==void 0)return t[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let J=g;if(g===t.RED&&(N===t.FLOAT&&(J=t.R32F),N===t.HALF_FLOAT&&(J=t.R16F),N===t.UNSIGNED_BYTE&&(J=t.R8)),g===t.RED_INTEGER&&(N===t.UNSIGNED_BYTE&&(J=t.R8UI),N===t.UNSIGNED_SHORT&&(J=t.R16UI),N===t.UNSIGNED_INT&&(J=t.R32UI),N===t.BYTE&&(J=t.R8I),N===t.SHORT&&(J=t.R16I),N===t.INT&&(J=t.R32I)),g===t.RG&&(N===t.FLOAT&&(J=t.RG32F),N===t.HALF_FLOAT&&(J=t.RG16F),N===t.UNSIGNED_BYTE&&(J=t.RG8)),g===t.RGBA){const _e=K?ba:nt.getTransfer(Z);N===t.FLOAT&&(J=t.RGBA32F),N===t.HALF_FLOAT&&(J=t.RGBA16F),N===t.UNSIGNED_BYTE&&(J=_e===lt?t.SRGB8_ALPHA8:t.RGBA8),N===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),N===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function D(M,g,N){return T(M,N)===!0||M.isFramebufferTexture&&M.minFilter!==Kt&&M.minFilter!==bn?Math.log2(Math.max(g.width,g.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?g.mipmaps.length:1}function R(M){return M===Kt||M===Mh||M===To?t.NEAREST:t.LINEAR}function w(M){const g=M.target;g.removeEventListener("dispose",w),S(g),g.isVideoTexture&&h.delete(g)}function $(M){const g=M.target;g.removeEventListener("dispose",$),z(g)}function S(M){const g=i.get(M);if(g.__webglInit===void 0)return;const N=M.source,Z=d.get(N);if(Z){const K=Z[g.__cacheKey];K.usedTimes--,K.usedTimes===0&&y(M),Object.keys(Z).length===0&&d.delete(N)}i.remove(M)}function y(M){const g=i.get(M);t.deleteTexture(g.__webglTexture);const N=M.source,Z=d.get(N);delete Z[g.__cacheKey],a.memory.textures--}function z(M){const g=M.texture,N=i.get(M),Z=i.get(g);if(Z.__webglTexture!==void 0&&(t.deleteTexture(Z.__webglTexture),a.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(N.__webglFramebuffer[K]))for(let J=0;J<N.__webglFramebuffer[K].length;J++)t.deleteFramebuffer(N.__webglFramebuffer[K][J]);else t.deleteFramebuffer(N.__webglFramebuffer[K]);N.__webglDepthbuffer&&t.deleteRenderbuffer(N.__webglDepthbuffer[K])}else{if(Array.isArray(N.__webglFramebuffer))for(let K=0;K<N.__webglFramebuffer.length;K++)t.deleteFramebuffer(N.__webglFramebuffer[K]);else t.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&t.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&t.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let K=0;K<N.__webglColorRenderbuffer.length;K++)N.__webglColorRenderbuffer[K]&&t.deleteRenderbuffer(N.__webglColorRenderbuffer[K]);N.__webglDepthRenderbuffer&&t.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let K=0,J=g.length;K<J;K++){const _e=i.get(g[K]);_e.__webglTexture&&(t.deleteTexture(_e.__webglTexture),a.memory.textures--),i.remove(g[K])}i.remove(g),i.remove(M)}let V=0;function ie(){V=0}function C(){const M=V;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),V+=1,M}function B(M){const g=[];return g.push(M.wrapS),g.push(M.wrapT),g.push(M.wrapR||0),g.push(M.magFilter),g.push(M.minFilter),g.push(M.anisotropy),g.push(M.internalFormat),g.push(M.format),g.push(M.type),g.push(M.generateMipmaps),g.push(M.premultiplyAlpha),g.push(M.flipY),g.push(M.unpackAlignment),g.push(M.colorSpace),g.join()}function G(M,g){const N=i.get(M);if(M.isVideoTexture&&mt(M),M.isRenderTargetTexture===!1&&M.version>0&&N.__version!==M.version){const Z=M.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(N,M,g);return}}n.bindTexture(t.TEXTURE_2D,N.__webglTexture,t.TEXTURE0+g)}function X(M,g){const N=i.get(M);if(M.version>0&&N.__version!==M.version){oe(N,M,g);return}n.bindTexture(t.TEXTURE_2D_ARRAY,N.__webglTexture,t.TEXTURE0+g)}function H(M,g){const N=i.get(M);if(M.version>0&&N.__version!==M.version){oe(N,M,g);return}n.bindTexture(t.TEXTURE_3D,N.__webglTexture,t.TEXTURE0+g)}function W(M,g){const N=i.get(M);if(M.version>0&&N.__version!==M.version){Se(N,M,g);return}n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+g)}const q={[Ec]:t.REPEAT,[kn]:t.CLAMP_TO_EDGE,[yc]:t.MIRRORED_REPEAT},Q={[Kt]:t.NEAREST,[Mh]:t.NEAREST_MIPMAP_NEAREST,[To]:t.NEAREST_MIPMAP_LINEAR,[bn]:t.LINEAR,[cg]:t.LINEAR_MIPMAP_NEAREST,[bs]:t.LINEAR_MIPMAP_LINEAR},ee={[Mg]:t.NEVER,[bg]:t.ALWAYS,[Sg]:t.LESS,[od]:t.LEQUAL,[Eg]:t.EQUAL,[Ag]:t.GEQUAL,[yg]:t.GREATER,[Tg]:t.NOTEQUAL};function k(M,g,N){if(N?(t.texParameteri(M,t.TEXTURE_WRAP_S,q[g.wrapS]),t.texParameteri(M,t.TEXTURE_WRAP_T,q[g.wrapT]),(M===t.TEXTURE_3D||M===t.TEXTURE_2D_ARRAY)&&t.texParameteri(M,t.TEXTURE_WRAP_R,q[g.wrapR]),t.texParameteri(M,t.TEXTURE_MAG_FILTER,Q[g.magFilter]),t.texParameteri(M,t.TEXTURE_MIN_FILTER,Q[g.minFilter])):(t.texParameteri(M,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(M,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(M===t.TEXTURE_3D||M===t.TEXTURE_2D_ARRAY)&&t.texParameteri(M,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(g.wrapS!==kn||g.wrapT!==kn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(M,t.TEXTURE_MAG_FILTER,R(g.magFilter)),t.texParameteri(M,t.TEXTURE_MIN_FILTER,R(g.minFilter)),g.minFilter!==Kt&&g.minFilter!==bn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),g.compareFunction&&(t.texParameteri(M,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(M,t.TEXTURE_COMPARE_FUNC,ee[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Z=e.get("EXT_texture_filter_anisotropic");if(g.magFilter===Kt||g.minFilter!==To&&g.minFilter!==bs||g.type===Li&&e.has("OES_texture_float_linear")===!1||o===!1&&g.type===ws&&e.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||i.get(g).__currentAnisotropy)&&(t.texParameterf(M,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy)}}function Y(M,g){let N=!1;M.__webglInit===void 0&&(M.__webglInit=!0,g.addEventListener("dispose",w));const Z=g.source;let K=d.get(Z);K===void 0&&(K={},d.set(Z,K));const J=B(g);if(J!==M.__cacheKey){K[J]===void 0&&(K[J]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,N=!0),K[J].usedTimes++;const _e=K[M.__cacheKey];_e!==void 0&&(K[M.__cacheKey].usedTimes--,_e.usedTimes===0&&y(g)),M.__cacheKey=J,M.__webglTexture=K[J].texture}return N}function oe(M,g,N){let Z=t.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),g.isData3DTexture&&(Z=t.TEXTURE_3D);const K=Y(M,g),J=g.source;n.bindTexture(Z,M.__webglTexture,t.TEXTURE0+N);const _e=i.get(J);if(J.version!==_e.__version||K===!0){n.activeTexture(t.TEXTURE0+N);const ae=nt.getPrimaries(nt.workingColorSpace),he=g.colorSpace===Rn?null:nt.getPrimaries(g.colorSpace),be=g.colorSpace===Rn||ae===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const ke=u(g)&&p(g.image)===!1;let j=_(g.image,ke,!1,r.maxTextureSize);j=Be(g,j);const tt=p(j)||o,We=s.convert(g.format,g.colorSpace);let Le=s.convert(g.type),Ee=A(g.internalFormat,We,Le,g.colorSpace,g.isVideoTexture);k(Z,g,tt);let ue;const Fe=g.mipmaps,Qe=o&&g.isVideoTexture!==!0&&Ee!==rd,vt=_e.__version===void 0||K===!0,ze=D(g,j,tt);if(g.isDepthTexture)Ee=t.DEPTH_COMPONENT,o?g.type===Li?Ee=t.DEPTH_COMPONENT32F:g.type===Ci?Ee=t.DEPTH_COMPONENT24:g.type===nr?Ee=t.DEPTH24_STENCIL8:Ee=t.DEPTH_COMPONENT16:g.type===Li&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===ir&&Ee===t.DEPTH_COMPONENT&&g.type!==$c&&g.type!==Ci&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=Ci,Le=s.convert(g.type)),g.format===zr&&Ee===t.DEPTH_COMPONENT&&(Ee=t.DEPTH_STENCIL,g.type!==nr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=nr,Le=s.convert(g.type))),vt&&(Qe?n.texStorage2D(t.TEXTURE_2D,1,Ee,j.width,j.height):n.texImage2D(t.TEXTURE_2D,0,Ee,j.width,j.height,0,We,Le,null));else if(g.isDataTexture)if(Fe.length>0&&tt){Qe&&vt&&n.texStorage2D(t.TEXTURE_2D,ze,Ee,Fe[0].width,Fe[0].height);for(let te=0,b=Fe.length;te<b;te++)ue=Fe[te],Qe?n.texSubImage2D(t.TEXTURE_2D,te,0,0,ue.width,ue.height,We,Le,ue.data):n.texImage2D(t.TEXTURE_2D,te,Ee,ue.width,ue.height,0,We,Le,ue.data);g.generateMipmaps=!1}else Qe?(vt&&n.texStorage2D(t.TEXTURE_2D,ze,Ee,j.width,j.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,j.width,j.height,We,Le,j.data)):n.texImage2D(t.TEXTURE_2D,0,Ee,j.width,j.height,0,We,Le,j.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Qe&&vt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ze,Ee,Fe[0].width,Fe[0].height,j.depth);for(let te=0,b=Fe.length;te<b;te++)ue=Fe[te],g.format!==Gn?We!==null?Qe?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,ue.width,ue.height,j.depth,We,ue.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,te,Ee,ue.width,ue.height,j.depth,0,ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?n.texSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,ue.width,ue.height,j.depth,We,Le,ue.data):n.texImage3D(t.TEXTURE_2D_ARRAY,te,Ee,ue.width,ue.height,j.depth,0,We,Le,ue.data)}else{Qe&&vt&&n.texStorage2D(t.TEXTURE_2D,ze,Ee,Fe[0].width,Fe[0].height);for(let te=0,b=Fe.length;te<b;te++)ue=Fe[te],g.format!==Gn?We!==null?Qe?n.compressedTexSubImage2D(t.TEXTURE_2D,te,0,0,ue.width,ue.height,We,ue.data):n.compressedTexImage2D(t.TEXTURE_2D,te,Ee,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?n.texSubImage2D(t.TEXTURE_2D,te,0,0,ue.width,ue.height,We,Le,ue.data):n.texImage2D(t.TEXTURE_2D,te,Ee,ue.width,ue.height,0,We,Le,ue.data)}else if(g.isDataArrayTexture)Qe?(vt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ze,Ee,j.width,j.height,j.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,We,Le,j.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ee,j.width,j.height,j.depth,0,We,Le,j.data);else if(g.isData3DTexture)Qe?(vt&&n.texStorage3D(t.TEXTURE_3D,ze,Ee,j.width,j.height,j.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,We,Le,j.data)):n.texImage3D(t.TEXTURE_3D,0,Ee,j.width,j.height,j.depth,0,We,Le,j.data);else if(g.isFramebufferTexture){if(vt)if(Qe)n.texStorage2D(t.TEXTURE_2D,ze,Ee,j.width,j.height);else{let te=j.width,b=j.height;for(let re=0;re<ze;re++)n.texImage2D(t.TEXTURE_2D,re,Ee,te,b,0,We,Le,null),te>>=1,b>>=1}}else if(Fe.length>0&&tt){Qe&&vt&&n.texStorage2D(t.TEXTURE_2D,ze,Ee,Fe[0].width,Fe[0].height);for(let te=0,b=Fe.length;te<b;te++)ue=Fe[te],Qe?n.texSubImage2D(t.TEXTURE_2D,te,0,0,We,Le,ue):n.texImage2D(t.TEXTURE_2D,te,Ee,We,Le,ue);g.generateMipmaps=!1}else Qe?(vt&&n.texStorage2D(t.TEXTURE_2D,ze,Ee,j.width,j.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,We,Le,j)):n.texImage2D(t.TEXTURE_2D,0,Ee,We,Le,j);T(g,tt)&&E(Z),_e.__version=J.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function Se(M,g,N){if(g.image.length!==6)return;const Z=Y(M,g),K=g.source;n.bindTexture(t.TEXTURE_CUBE_MAP,M.__webglTexture,t.TEXTURE0+N);const J=i.get(K);if(K.version!==J.__version||Z===!0){n.activeTexture(t.TEXTURE0+N);const _e=nt.getPrimaries(nt.workingColorSpace),ae=g.colorSpace===Rn?null:nt.getPrimaries(g.colorSpace),he=g.colorSpace===Rn||_e===ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const be=g.isCompressedTexture||g.image[0].isCompressedTexture,ke=g.image[0]&&g.image[0].isDataTexture,j=[];for(let te=0;te<6;te++)!be&&!ke?j[te]=_(g.image[te],!1,!0,r.maxCubemapSize):j[te]=ke?g.image[te].image:g.image[te],j[te]=Be(g,j[te]);const tt=j[0],We=p(tt)||o,Le=s.convert(g.format,g.colorSpace),Ee=s.convert(g.type),ue=A(g.internalFormat,Le,Ee,g.colorSpace),Fe=o&&g.isVideoTexture!==!0,Qe=J.__version===void 0||Z===!0;let vt=D(g,tt,We);k(t.TEXTURE_CUBE_MAP,g,We);let ze;if(be){Fe&&Qe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,vt,ue,tt.width,tt.height);for(let te=0;te<6;te++){ze=j[te].mipmaps;for(let b=0;b<ze.length;b++){const re=ze[b];g.format!==Gn?Le!==null?Fe?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,b,0,0,re.width,re.height,Le,re.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,b,ue,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,b,0,0,re.width,re.height,Le,Ee,re.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,b,ue,re.width,re.height,0,Le,Ee,re.data)}}}else{ze=g.mipmaps,Fe&&Qe&&(ze.length>0&&vt++,n.texStorage2D(t.TEXTURE_CUBE_MAP,vt,ue,j[0].width,j[0].height));for(let te=0;te<6;te++)if(ke){Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,j[te].width,j[te].height,Le,Ee,j[te].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,ue,j[te].width,j[te].height,0,Le,Ee,j[te].data);for(let b=0;b<ze.length;b++){const se=ze[b].image[te].image;Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,b+1,0,0,se.width,se.height,Le,Ee,se.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,b+1,ue,se.width,se.height,0,Le,Ee,se.data)}}else{Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Le,Ee,j[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,ue,Le,Ee,j[te]);for(let b=0;b<ze.length;b++){const re=ze[b];Fe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,b+1,0,0,Le,Ee,re.image[te]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+te,b+1,ue,Le,Ee,re.image[te])}}}T(g,We)&&E(t.TEXTURE_CUBE_MAP),J.__version=K.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function xe(M,g,N,Z,K,J){const _e=s.convert(N.format,N.colorSpace),ae=s.convert(N.type),he=A(N.internalFormat,_e,ae,N.colorSpace);if(!i.get(g).__hasExternalTextures){const ke=Math.max(1,g.width>>J),j=Math.max(1,g.height>>J);K===t.TEXTURE_3D||K===t.TEXTURE_2D_ARRAY?n.texImage3D(K,J,he,ke,j,g.depth,0,_e,ae,null):n.texImage2D(K,J,he,ke,j,0,_e,ae,null)}n.bindFramebuffer(t.FRAMEBUFFER,M),ge(g)?c.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,K,i.get(N).__webglTexture,0,Pe(g)):(K===t.TEXTURE_2D||K>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,K,i.get(N).__webglTexture,J),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ue(M,g,N){if(t.bindRenderbuffer(t.RENDERBUFFER,M),g.depthBuffer&&!g.stencilBuffer){let Z=o===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(N||ge(g)){const K=g.depthTexture;K&&K.isDepthTexture&&(K.type===Li?Z=t.DEPTH_COMPONENT32F:K.type===Ci&&(Z=t.DEPTH_COMPONENT24));const J=Pe(g);ge(g)?c.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,J,Z,g.width,g.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,J,Z,g.width,g.height)}else t.renderbufferStorage(t.RENDERBUFFER,Z,g.width,g.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,M)}else if(g.depthBuffer&&g.stencilBuffer){const Z=Pe(g);N&&ge(g)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Z,t.DEPTH24_STENCIL8,g.width,g.height):ge(g)?c.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Z,t.DEPTH24_STENCIL8,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,g.width,g.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,M)}else{const Z=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let K=0;K<Z.length;K++){const J=Z[K],_e=s.convert(J.format,J.colorSpace),ae=s.convert(J.type),he=A(J.internalFormat,_e,ae,J.colorSpace),be=Pe(g);N&&ge(g)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,be,he,g.width,g.height):ge(g)?c.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,be,he,g.width,g.height):t.renderbufferStorage(t.RENDERBUFFER,he,g.width,g.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ne(M,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,M),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),G(g.depthTexture,0);const Z=i.get(g.depthTexture).__webglTexture,K=Pe(g);if(g.depthTexture.format===ir)ge(g)?c.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0);else if(g.depthTexture.format===zr)ge(g)?c.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function we(M){const g=i.get(M),N=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!g.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Ne(g.__webglFramebuffer,M)}else if(N){g.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer[Z]),g.__webglDepthbuffer[Z]=t.createRenderbuffer(),Ue(g.__webglDepthbuffer[Z],M,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer=t.createRenderbuffer(),Ue(g.__webglDepthbuffer,M,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function je(M,g,N){const Z=i.get(M);g!==void 0&&xe(Z.__webglFramebuffer,M,M.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),N!==void 0&&we(M)}function U(M){const g=M.texture,N=i.get(M),Z=i.get(g);M.addEventListener("dispose",$),M.isWebGLMultipleRenderTargets!==!0&&(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=g.version,a.memory.textures++);const K=M.isWebGLCubeRenderTarget===!0,J=M.isWebGLMultipleRenderTargets===!0,_e=p(M)||o;if(K){N.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(o&&g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer[ae]=[];for(let he=0;he<g.mipmaps.length;he++)N.__webglFramebuffer[ae][he]=t.createFramebuffer()}else N.__webglFramebuffer[ae]=t.createFramebuffer()}else{if(o&&g.mipmaps&&g.mipmaps.length>0){N.__webglFramebuffer=[];for(let ae=0;ae<g.mipmaps.length;ae++)N.__webglFramebuffer[ae]=t.createFramebuffer()}else N.__webglFramebuffer=t.createFramebuffer();if(J)if(r.drawBuffers){const ae=M.texture;for(let he=0,be=ae.length;he<be;he++){const ke=i.get(ae[he]);ke.__webglTexture===void 0&&(ke.__webglTexture=t.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&M.samples>0&&ge(M)===!1){const ae=J?g:[g];N.__webglMultisampledFramebuffer=t.createFramebuffer(),N.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let he=0;he<ae.length;he++){const be=ae[he];N.__webglColorRenderbuffer[he]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,N.__webglColorRenderbuffer[he]);const ke=s.convert(be.format,be.colorSpace),j=s.convert(be.type),tt=A(be.internalFormat,ke,j,be.colorSpace,M.isXRRenderTarget===!0),We=Pe(M);t.renderbufferStorageMultisample(t.RENDERBUFFER,We,tt,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,N.__webglColorRenderbuffer[he])}t.bindRenderbuffer(t.RENDERBUFFER,null),M.depthBuffer&&(N.__webglDepthRenderbuffer=t.createRenderbuffer(),Ue(N.__webglDepthRenderbuffer,M,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(K){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),k(t.TEXTURE_CUBE_MAP,g,_e);for(let ae=0;ae<6;ae++)if(o&&g.mipmaps&&g.mipmaps.length>0)for(let he=0;he<g.mipmaps.length;he++)xe(N.__webglFramebuffer[ae][he],M,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,he);else xe(N.__webglFramebuffer[ae],M,g,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);T(g,_e)&&E(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(J){const ae=M.texture;for(let he=0,be=ae.length;he<be;he++){const ke=ae[he],j=i.get(ke);n.bindTexture(t.TEXTURE_2D,j.__webglTexture),k(t.TEXTURE_2D,ke,_e),xe(N.__webglFramebuffer,M,ke,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,0),T(ke,_e)&&E(t.TEXTURE_2D)}n.unbindTexture()}else{let ae=t.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(o?ae=M.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ae,Z.__webglTexture),k(ae,g,_e),o&&g.mipmaps&&g.mipmaps.length>0)for(let he=0;he<g.mipmaps.length;he++)xe(N.__webglFramebuffer[he],M,g,t.COLOR_ATTACHMENT0,ae,he);else xe(N.__webglFramebuffer,M,g,t.COLOR_ATTACHMENT0,ae,0);T(g,_e)&&E(ae),n.unbindTexture()}M.depthBuffer&&we(M)}function Xt(M){const g=p(M)||o,N=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let Z=0,K=N.length;Z<K;Z++){const J=N[Z];if(T(J,g)){const _e=M.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ae=i.get(J).__webglTexture;n.bindTexture(_e,ae),E(_e),n.unbindTexture()}}}function ye(M){if(o&&M.samples>0&&ge(M)===!1){const g=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],N=M.width,Z=M.height;let K=t.COLOR_BUFFER_BIT;const J=[],_e=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=i.get(M),he=M.isWebGLMultipleRenderTargets===!0;if(he)for(let be=0;be<g.length;be++)n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let be=0;be<g.length;be++){J.push(t.COLOR_ATTACHMENT0+be),M.depthBuffer&&J.push(_e);const ke=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(ke===!1&&(M.depthBuffer&&(K|=t.DEPTH_BUFFER_BIT),M.stencilBuffer&&(K|=t.STENCIL_BUFFER_BIT)),he&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ae.__webglColorRenderbuffer[be]),ke===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[_e]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_e])),he){const j=i.get(g[be]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,j,0)}t.blitFramebuffer(0,0,N,Z,0,0,N,Z,K,t.NEAREST),l&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,J)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),he)for(let be=0;be<g.length;be++){n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.RENDERBUFFER,ae.__webglColorRenderbuffer[be]);const ke=i.get(g[be]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ae.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.TEXTURE_2D,ke,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}}function Pe(M){return Math.min(r.maxSamples,M.samples)}function ge(M){const g=i.get(M);return o&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function mt(M){const g=a.render.frame;h.get(M)!==g&&(h.set(M,g),M.update())}function Be(M,g){const N=M.colorSpace,Z=M.format,K=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===Tc||N!==_i&&N!==Rn&&(nt.getTransfer(N)===lt?o===!1?e.has("EXT_sRGB")===!0&&Z===Gn?(M.format=Tc,M.minFilter=bn,M.generateMipmaps=!1):g=ld.sRGBToLinear(g):(Z!==Gn||K!==Ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),g}this.allocateTextureUnit=C,this.resetTextureUnits=ie,this.setTexture2D=G,this.setTexture2DArray=X,this.setTexture3D=H,this.setTextureCube=W,this.rebindTextures=je,this.setupRenderTarget=U,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=ge}function wv(t,e,n){const i=n.isWebGL2;function r(s,a=Rn){let o;const c=nt.getTransfer(a);if(s===Ui)return t.UNSIGNED_BYTE;if(s===Qf)return t.UNSIGNED_SHORT_4_4_4_4;if(s===ed)return t.UNSIGNED_SHORT_5_5_5_1;if(s===lg)return t.BYTE;if(s===hg)return t.SHORT;if(s===$c)return t.UNSIGNED_SHORT;if(s===Jf)return t.INT;if(s===Ci)return t.UNSIGNED_INT;if(s===Li)return t.FLOAT;if(s===ws)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===ug)return t.ALPHA;if(s===Gn)return t.RGBA;if(s===fg)return t.LUMINANCE;if(s===dg)return t.LUMINANCE_ALPHA;if(s===ir)return t.DEPTH_COMPONENT;if(s===zr)return t.DEPTH_STENCIL;if(s===Tc)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===pg)return t.RED;if(s===td)return t.RED_INTEGER;if(s===mg)return t.RG;if(s===nd)return t.RG_INTEGER;if(s===id)return t.RGBA_INTEGER;if(s===Ao||s===bo||s===wo||s===Ro)if(c===lt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Ao)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===bo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===wo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ro)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Ao)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===bo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===wo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ro)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Sh||s===Eh||s===yh||s===Th)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Sh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Eh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===yh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Th)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===rd)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ah||s===bh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Ah)return c===lt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===bh)return c===lt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===wh||s===Rh||s===Ch||s===Lh||s===Ph||s===Dh||s===Uh||s===Ih||s===Nh||s===Fh||s===Oh||s===Bh||s===kh||s===Gh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===wh)return c===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Rh)return c===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ch)return c===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Lh)return c===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ph)return c===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Dh)return c===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Uh)return c===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ih)return c===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Nh)return c===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Fh)return c===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Oh)return c===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Bh)return c===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===kh)return c===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Gh)return c===lt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Co||s===zh||s===Hh)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Co)return c===lt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===zh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Hh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===gg||s===Vh||s===Wh||s===Xh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Co)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Vh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Wh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Xh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===nr?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class Rv extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class xs extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cv={type:"move"};class ec{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const p=n.getJointPose(_,i),u=this._getHandJoint(l,_);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=h.position.distanceTo(f.position),m=.02,v=.005;l.inputState.pinching&&d>m+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Cv)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new xs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Lv extends Qr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,d=null,m=null,v=null;const _=n.getContextAttributes();let p=null,u=null;const T=[],E=[],A=new Ze;let D=null;const R=new mn;R.layers.enable(1),R.viewport=new ft;const w=new mn;w.layers.enable(2),w.viewport=new ft;const $=[R,w],S=new Rv;S.layers.enable(1),S.layers.enable(2);let y=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let Y=T[k];return Y===void 0&&(Y=new ec,T[k]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(k){let Y=T[k];return Y===void 0&&(Y=new ec,T[k]=Y),Y.getGripSpace()},this.getHand=function(k){let Y=T[k];return Y===void 0&&(Y=new ec,T[k]=Y),Y.getHandSpace()};function V(k){const Y=E.indexOf(k.inputSource);if(Y===-1)return;const oe=T[Y];oe!==void 0&&(oe.update(k.inputSource,k.frame,l||a),oe.dispatchEvent({type:k.type,data:k.inputSource}))}function ie(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",ie),r.removeEventListener("inputsourceschange",C);for(let k=0;k<T.length;k++){const Y=E[k];Y!==null&&(E[k]=null,T[k].disconnect(Y))}y=null,z=null,e.setRenderTarget(p),m=null,d=null,f=null,r=null,u=null,ee.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(k){l=k},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",ie),r.addEventListener("inputsourceschange",C),_.xrCompatible!==!0&&await n.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(A),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,Y),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new ar(m.framebufferWidth,m.framebufferHeight,{format:Gn,type:Ui,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let Y=null,oe=null,Se=null;_.depth&&(Se=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Y=_.stencil?zr:ir,oe=_.stencil?nr:Ci);const xe={colorFormat:n.RGBA8,depthFormat:Se,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(xe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),u=new ar(d.textureWidth,d.textureHeight,{format:Gn,type:Ui,depthTexture:new yd(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Ue=e.properties.get(u);Ue.__ignoreDepthValues=d.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),ee.setContext(r),ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function C(k){for(let Y=0;Y<k.removed.length;Y++){const oe=k.removed[Y],Se=E.indexOf(oe);Se>=0&&(E[Se]=null,T[Se].disconnect(oe))}for(let Y=0;Y<k.added.length;Y++){const oe=k.added[Y];let Se=E.indexOf(oe);if(Se===-1){for(let Ue=0;Ue<T.length;Ue++)if(Ue>=E.length){E.push(oe),Se=Ue;break}else if(E[Ue]===null){E[Ue]=oe,Se=Ue;break}if(Se===-1)break}const xe=T[Se];xe&&xe.connect(oe)}}const B=new P,G=new P;function X(k,Y,oe){B.setFromMatrixPosition(Y.matrixWorld),G.setFromMatrixPosition(oe.matrixWorld);const Se=B.distanceTo(G),xe=Y.projectionMatrix.elements,Ue=oe.projectionMatrix.elements,Ne=xe[14]/(xe[10]-1),we=xe[14]/(xe[10]+1),je=(xe[9]+1)/xe[5],U=(xe[9]-1)/xe[5],Xt=(xe[8]-1)/xe[0],ye=(Ue[8]+1)/Ue[0],Pe=Ne*Xt,ge=Ne*ye,mt=Se/(-Xt+ye),Be=mt*-Xt;Y.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Be),k.translateZ(mt),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const M=Ne+mt,g=we+mt,N=Pe-Be,Z=ge+(Se-Be),K=je*we/g*M,J=U*we/g*M;k.projectionMatrix.makePerspective(N,Z,K,J,M,g),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function H(k,Y){Y===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(Y.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;S.near=w.near=R.near=k.near,S.far=w.far=R.far=k.far,(y!==S.near||z!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),y=S.near,z=S.far);const Y=k.parent,oe=S.cameras;H(S,Y);for(let Se=0;Se<oe.length;Se++)H(oe[Se],Y);oe.length===2?X(S,R,w):S.projectionMatrix.copy(R.projectionMatrix),W(k,S,Y)};function W(k,Y,oe){oe===null?k.matrix.copy(Y.matrixWorld):(k.matrix.copy(oe.matrixWorld),k.matrix.invert(),k.matrix.multiply(Y.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(Y.projectionMatrix),k.projectionMatrixInverse.copy(Y.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Ac*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(k){c=k,d!==null&&(d.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)};let q=null;function Q(k,Y){if(h=Y.getViewerPose(l||a),v=Y,h!==null){const oe=h.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let Se=!1;oe.length!==S.cameras.length&&(S.cameras.length=0,Se=!0);for(let xe=0;xe<oe.length;xe++){const Ue=oe[xe];let Ne=null;if(m!==null)Ne=m.getViewport(Ue);else{const je=f.getViewSubImage(d,Ue);Ne=je.viewport,xe===0&&(e.setRenderTargetTextures(u,je.colorTexture,d.ignoreDepthValues?void 0:je.depthStencilTexture),e.setRenderTarget(u))}let we=$[xe];we===void 0&&(we=new mn,we.layers.enable(xe),we.viewport=new ft,$[xe]=we),we.matrix.fromArray(Ue.transform.matrix),we.matrix.decompose(we.position,we.quaternion,we.scale),we.projectionMatrix.fromArray(Ue.projectionMatrix),we.projectionMatrixInverse.copy(we.projectionMatrix).invert(),we.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),xe===0&&(S.matrix.copy(we.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Se===!0&&S.cameras.push(we)}}for(let oe=0;oe<T.length;oe++){const Se=E[oe],xe=T[oe];Se!==null&&xe!==void 0&&xe.update(Se,Y,l||a)}q&&q(k,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),v=null}const ee=new Sd;ee.setAnimationLoop(Q),this.setAnimationLoop=function(k){q=k},this.dispose=function(){}}}function Pv(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,vd(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,T,E,A){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),f(p,u)):u.isMeshPhongMaterial?(s(p,u),h(p,u)):u.isMeshStandardMaterial?(s(p,u),d(p,u),u.isMeshPhysicalMaterial&&m(p,u,A)):u.isMeshMatcapMaterial?(s(p,u),v(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),_(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?c(p,u,T,E):u.isSpriteMaterial?l(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===rn&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===rn&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const T=e.get(u).envMap;if(T&&(p.envMap.value=T,p.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const E=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*E,n(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function c(p,u,T,E){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*T,p.scale.value=E*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function l(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function d(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,T){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===rn&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,u){u.matcap&&(p.matcap.value=u.matcap)}function _(p,u){const T=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Dv(t,e,n,i){let r={},s={},a=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(T,E){const A=E.program;i.uniformBlockBinding(T,A)}function l(T,E){let A=r[T.id];A===void 0&&(v(T),A=h(T),r[T.id]=A,T.addEventListener("dispose",p));const D=E.program;i.updateUBOMapping(T,D);const R=e.render.frame;s[T.id]!==R&&(d(T),s[T.id]=R)}function h(T){const E=f();T.__bindingPointIndex=E;const A=t.createBuffer(),D=T.__size,R=T.usage;return t.bindBuffer(t.UNIFORM_BUFFER,A),t.bufferData(t.UNIFORM_BUFFER,D,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,E,A),A}function f(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const E=r[T.id],A=T.uniforms,D=T.__cache;t.bindBuffer(t.UNIFORM_BUFFER,E);for(let R=0,w=A.length;R<w;R++){const $=Array.isArray(A[R])?A[R]:[A[R]];for(let S=0,y=$.length;S<y;S++){const z=$[S];if(m(z,R,S,D)===!0){const V=z.__offset,ie=Array.isArray(z.value)?z.value:[z.value];let C=0;for(let B=0;B<ie.length;B++){const G=ie[B],X=_(G);typeof G=="number"||typeof G=="boolean"?(z.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,V+C,z.__data)):G.isMatrix3?(z.__data[0]=G.elements[0],z.__data[1]=G.elements[1],z.__data[2]=G.elements[2],z.__data[3]=0,z.__data[4]=G.elements[3],z.__data[5]=G.elements[4],z.__data[6]=G.elements[5],z.__data[7]=0,z.__data[8]=G.elements[6],z.__data[9]=G.elements[7],z.__data[10]=G.elements[8],z.__data[11]=0):(G.toArray(z.__data,C),C+=X.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,V,z.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(T,E,A,D){const R=T.value,w=E+"_"+A;if(D[w]===void 0)return typeof R=="number"||typeof R=="boolean"?D[w]=R:D[w]=R.clone(),!0;{const $=D[w];if(typeof R=="number"||typeof R=="boolean"){if($!==R)return D[w]=R,!0}else if($.equals(R)===!1)return $.copy(R),!0}return!1}function v(T){const E=T.uniforms;let A=0;const D=16;for(let w=0,$=E.length;w<$;w++){const S=Array.isArray(E[w])?E[w]:[E[w]];for(let y=0,z=S.length;y<z;y++){const V=S[y],ie=Array.isArray(V.value)?V.value:[V.value];for(let C=0,B=ie.length;C<B;C++){const G=ie[C],X=_(G),H=A%D;H!==0&&D-H<X.boundary&&(A+=D-H),V.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=A,A+=X.storage}}}const R=A%D;return R>0&&(A+=D-R),T.__size=A,T.__cache={},this}function _(T){const E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function p(T){const E=T.target;E.removeEventListener("dispose",p);const A=a.indexOf(E.__bindingPointIndex);a.splice(A,1),t.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function u(){for(const T in r)t.deleteBuffer(r[T]);a=[],r={},s={}}return{bind:c,update:l,dispose:u}}class Cd{constructor(e={}){const{canvas:n=Rg(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;const m=new Uint32Array(4),v=new Int32Array(4);let _=null,p=null;const u=[],T=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kt,this._useLegacyLights=!1,this.toneMapping=Di,this.toneMappingExposure=1;const E=this;let A=!1,D=0,R=0,w=null,$=-1,S=null;const y=new ft,z=new ft;let V=null;const ie=new Ye(0);let C=0,B=n.width,G=n.height,X=1,H=null,W=null;const q=new ft(0,0,B,G),Q=new ft(0,0,B,G);let ee=!1;const k=new Jc;let Y=!1,oe=!1,Se=null;const xe=new At,Ue=new Ze,Ne=new P,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function je(){return w===null?X:1}let U=i;function Xt(x,L){for(let F=0;F<x.length;F++){const O=x[F],I=n.getContext(O,L);if(I!==null)return I}return null}try{const x={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${jc}`),n.addEventListener("webglcontextlost",te,!1),n.addEventListener("webglcontextrestored",b,!1),n.addEventListener("webglcontextcreationerror",re,!1),U===null){const L=["webgl2","webgl","experimental-webgl"];if(E.isWebGL1Renderer===!0&&L.shift(),U=Xt(L,x),U===null)throw Xt(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let ye,Pe,ge,mt,Be,M,g,N,Z,K,J,_e,ae,he,be,ke,j,tt,We,Le,Ee,ue,Fe,Qe;function vt(){ye=new H1(U),Pe=new F1(U,ye,e),ye.init(Pe),ue=new wv(U,ye,Pe),ge=new Av(U,ye,Pe),mt=new X1(U),Be=new uv,M=new bv(U,ye,ge,Be,Pe,ue,mt),g=new B1(E),N=new z1(E),Z=new Qg(U,Pe),Fe=new I1(U,ye,Z,Pe),K=new V1(U,Z,mt,Fe),J=new K1(U,K,Z,mt),We=new j1(U,Pe,M),ke=new O1(Be),_e=new hv(E,g,N,ye,Pe,Fe,ke),ae=new Pv(E,Be),he=new dv,be=new xv(ye,Pe),tt=new U1(E,g,N,ge,J,d,c),j=new Tv(E,J,Pe),Qe=new Dv(U,mt,Pe,ge),Le=new N1(U,ye,mt,Pe),Ee=new W1(U,ye,mt,Pe),mt.programs=_e.programs,E.capabilities=Pe,E.extensions=ye,E.properties=Be,E.renderLists=he,E.shadowMap=j,E.state=ge,E.info=mt}vt();const ze=new Lv(E,U);this.xr=ze,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const x=ye.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=ye.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(x){x!==void 0&&(X=x,this.setSize(B,G,!1))},this.getSize=function(x){return x.set(B,G)},this.setSize=function(x,L,F=!0){if(ze.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=x,G=L,n.width=Math.floor(x*X),n.height=Math.floor(L*X),F===!0&&(n.style.width=x+"px",n.style.height=L+"px"),this.setViewport(0,0,x,L)},this.getDrawingBufferSize=function(x){return x.set(B*X,G*X).floor()},this.setDrawingBufferSize=function(x,L,F){B=x,G=L,X=F,n.width=Math.floor(x*F),n.height=Math.floor(L*F),this.setViewport(0,0,x,L)},this.getCurrentViewport=function(x){return x.copy(y)},this.getViewport=function(x){return x.copy(q)},this.setViewport=function(x,L,F,O){x.isVector4?q.set(x.x,x.y,x.z,x.w):q.set(x,L,F,O),ge.viewport(y.copy(q).multiplyScalar(X).floor())},this.getScissor=function(x){return x.copy(Q)},this.setScissor=function(x,L,F,O){x.isVector4?Q.set(x.x,x.y,x.z,x.w):Q.set(x,L,F,O),ge.scissor(z.copy(Q).multiplyScalar(X).floor())},this.getScissorTest=function(){return ee},this.setScissorTest=function(x){ge.setScissorTest(ee=x)},this.setOpaqueSort=function(x){H=x},this.setTransparentSort=function(x){W=x},this.getClearColor=function(x){return x.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(x=!0,L=!0,F=!0){let O=0;if(x){let I=!1;if(w!==null){const ce=w.texture.format;I=ce===id||ce===nd||ce===td}if(I){const ce=w.texture.type,ve=ce===Ui||ce===Ci||ce===$c||ce===nr||ce===Qf||ce===ed,Ae=tt.getClearColor(),Ce=tt.getClearAlpha(),Ge=Ae.r,De=Ae.g,Ie=Ae.b;ve?(m[0]=Ge,m[1]=De,m[2]=Ie,m[3]=Ce,U.clearBufferuiv(U.COLOR,0,m)):(v[0]=Ge,v[1]=De,v[2]=Ie,v[3]=Ce,U.clearBufferiv(U.COLOR,0,v))}else O|=U.COLOR_BUFFER_BIT}L&&(O|=U.DEPTH_BUFFER_BIT),F&&(O|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",te,!1),n.removeEventListener("webglcontextrestored",b,!1),n.removeEventListener("webglcontextcreationerror",re,!1),he.dispose(),be.dispose(),Be.dispose(),g.dispose(),N.dispose(),J.dispose(),Fe.dispose(),Qe.dispose(),_e.dispose(),ze.dispose(),ze.removeEventListener("sessionstart",qt),ze.removeEventListener("sessionend",at),Se&&(Se.dispose(),Se=null),Yt.stop()};function te(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function b(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const x=mt.autoReset,L=j.enabled,F=j.autoUpdate,O=j.needsUpdate,I=j.type;vt(),mt.autoReset=x,j.enabled=L,j.autoUpdate=F,j.needsUpdate=O,j.type=I}function re(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function se(x){const L=x.target;L.removeEventListener("dispose",se),Re(L)}function Re(x){Te(x),Be.remove(x)}function Te(x){const L=Be.get(x).programs;L!==void 0&&(L.forEach(function(F){_e.releaseProgram(F)}),x.isShaderMaterial&&_e.releaseShaderCache(x))}this.renderBufferDirect=function(x,L,F,O,I,ce){L===null&&(L=we);const ve=I.isMesh&&I.matrixWorld.determinant()<0,Ae=Tm(x,L,F,O,I);ge.setMaterial(O,ve);let Ce=F.index,Ge=1;if(O.wireframe===!0){if(Ce=K.getWireframeAttribute(F),Ce===void 0)return;Ge=2}const De=F.drawRange,Ie=F.attributes.position;let yt=De.start*Ge,ln=(De.start+De.count)*Ge;ce!==null&&(yt=Math.max(yt,ce.start*Ge),ln=Math.min(ln,(ce.start+ce.count)*Ge)),Ce!==null?(yt=Math.max(yt,0),ln=Math.min(ln,Ce.count)):Ie!=null&&(yt=Math.max(yt,0),ln=Math.min(ln,Ie.count));const Nt=ln-yt;if(Nt<0||Nt===1/0)return;Fe.setup(I,O,Ae,F,Ce);let ti,gt=Le;if(Ce!==null&&(ti=Z.get(Ce),gt=Ee,gt.setIndex(ti)),I.isMesh)O.wireframe===!0?(ge.setLineWidth(O.wireframeLinewidth*je()),gt.setMode(U.LINES)):gt.setMode(U.TRIANGLES);else if(I.isLine){let He=O.linewidth;He===void 0&&(He=1),ge.setLineWidth(He*je()),I.isLineSegments?gt.setMode(U.LINES):I.isLineLoop?gt.setMode(U.LINE_LOOP):gt.setMode(U.LINE_STRIP)}else I.isPoints?gt.setMode(U.POINTS):I.isSprite&&gt.setMode(U.TRIANGLES);if(I.isBatchedMesh)gt.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else if(I.isInstancedMesh)gt.renderInstances(yt,Nt,I.count);else if(F.isInstancedBufferGeometry){const He=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,Mo=Math.min(F.instanceCount,He);gt.renderInstances(yt,Nt,Mo)}else gt.render(yt,Nt)};function rt(x,L,F){x.transparent===!0&&x.side===li&&x.forceSinglePass===!1?(x.side=rn,x.needsUpdate=!0,Hs(x,L,F),x.side=Fi,x.needsUpdate=!0,Hs(x,L,F),x.side=li):Hs(x,L,F)}this.compile=function(x,L,F=null){F===null&&(F=x),p=be.get(F),p.init(),T.push(p),F.traverseVisible(function(I){I.isLight&&I.layers.test(L.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),x!==F&&x.traverseVisible(function(I){I.isLight&&I.layers.test(L.layers)&&(p.pushLight(I),I.castShadow&&p.pushShadow(I))}),p.setupLights(E._useLegacyLights);const O=new Set;return x.traverse(function(I){const ce=I.material;if(ce)if(Array.isArray(ce))for(let ve=0;ve<ce.length;ve++){const Ae=ce[ve];rt(Ae,F,I),O.add(Ae)}else rt(ce,F,I),O.add(ce)}),T.pop(),p=null,O},this.compileAsync=function(x,L,F=null){const O=this.compile(x,L,F);return new Promise(I=>{function ce(){if(O.forEach(function(ve){Be.get(ve).currentProgram.isReady()&&O.delete(ve)}),O.size===0){I(x);return}setTimeout(ce,10)}ye.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let st=null;function It(x){st&&st(x)}function qt(){Yt.stop()}function at(){Yt.start()}const Yt=new Sd;Yt.setAnimationLoop(It),typeof self<"u"&&Yt.setContext(self),this.setAnimationLoop=function(x){st=x,ze.setAnimationLoop(x),x===null?Yt.stop():Yt.start()},ze.addEventListener("sessionstart",qt),ze.addEventListener("sessionend",at),this.render=function(x,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),ze.enabled===!0&&ze.isPresenting===!0&&(ze.cameraAutoUpdate===!0&&ze.updateCamera(L),L=ze.getCamera()),x.isScene===!0&&x.onBeforeRender(E,x,L,w),p=be.get(x,T.length),p.init(),T.push(p),xe.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),k.setFromProjectionMatrix(xe),oe=this.localClippingEnabled,Y=ke.init(this.clippingPlanes,oe),_=he.get(x,u.length),_.init(),u.push(_),qn(x,L,0,E.sortObjects),_.finish(),E.sortObjects===!0&&_.sort(H,W),this.info.render.frame++,Y===!0&&ke.beginShadows();const F=p.state.shadowsArray;if(j.render(F,x,L),Y===!0&&ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),tt.render(_,x),p.setupLights(E._useLegacyLights),L.isArrayCamera){const O=L.cameras;for(let I=0,ce=O.length;I<ce;I++){const ve=O[I];lh(_,x,ve,ve.viewport)}}else lh(_,x,L);w!==null&&(M.updateMultisampleRenderTarget(w),M.updateRenderTargetMipmap(w)),x.isScene===!0&&x.onAfterRender(E,x,L),Fe.resetDefaultState(),$=-1,S=null,T.pop(),T.length>0?p=T[T.length-1]:p=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function qn(x,L,F,O){if(x.visible===!1)return;if(x.layers.test(L.layers)){if(x.isGroup)F=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(L);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||k.intersectsSprite(x)){O&&Ne.setFromMatrixPosition(x.matrixWorld).applyMatrix4(xe);const ve=J.update(x),Ae=x.material;Ae.visible&&_.push(x,ve,Ae,F,Ne.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||k.intersectsObject(x))){const ve=J.update(x),Ae=x.material;if(O&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Ne.copy(x.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Ne.copy(ve.boundingSphere.center)),Ne.applyMatrix4(x.matrixWorld).applyMatrix4(xe)),Array.isArray(Ae)){const Ce=ve.groups;for(let Ge=0,De=Ce.length;Ge<De;Ge++){const Ie=Ce[Ge],yt=Ae[Ie.materialIndex];yt&&yt.visible&&_.push(x,ve,yt,F,Ne.z,Ie)}}else Ae.visible&&_.push(x,ve,Ae,F,Ne.z,null)}}const ce=x.children;for(let ve=0,Ae=ce.length;ve<Ae;ve++)qn(ce[ve],L,F,O)}function lh(x,L,F,O){const I=x.opaque,ce=x.transmissive,ve=x.transparent;p.setupLightsView(F),Y===!0&&ke.setGlobalState(E.clippingPlanes,F),ce.length>0&&ym(I,ce,L,F),O&&ge.viewport(y.copy(O)),I.length>0&&zs(I,L,F),ce.length>0&&zs(ce,L,F),ve.length>0&&zs(ve,L,F),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function ym(x,L,F,O){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;const ce=Pe.isWebGL2;Se===null&&(Se=new ar(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?ws:Ui,minFilter:bs,samples:ce?4:0})),E.getDrawingBufferSize(Ue),ce?Se.setSize(Ue.x,Ue.y):Se.setSize(bc(Ue.x),bc(Ue.y));const ve=E.getRenderTarget();E.setRenderTarget(Se),E.getClearColor(ie),C=E.getClearAlpha(),C<1&&E.setClearColor(16777215,.5),E.clear();const Ae=E.toneMapping;E.toneMapping=Di,zs(x,F,O),M.updateMultisampleRenderTarget(Se),M.updateRenderTargetMipmap(Se);let Ce=!1;for(let Ge=0,De=L.length;Ge<De;Ge++){const Ie=L[Ge],yt=Ie.object,ln=Ie.geometry,Nt=Ie.material,ti=Ie.group;if(Nt.side===li&&yt.layers.test(O.layers)){const gt=Nt.side;Nt.side=rn,Nt.needsUpdate=!0,hh(yt,F,O,ln,Nt,ti),Nt.side=gt,Nt.needsUpdate=!0,Ce=!0}}Ce===!0&&(M.updateMultisampleRenderTarget(Se),M.updateRenderTargetMipmap(Se)),E.setRenderTarget(ve),E.setClearColor(ie,C),E.toneMapping=Ae}function zs(x,L,F){const O=L.isScene===!0?L.overrideMaterial:null;for(let I=0,ce=x.length;I<ce;I++){const ve=x[I],Ae=ve.object,Ce=ve.geometry,Ge=O===null?ve.material:O,De=ve.group;Ae.layers.test(F.layers)&&hh(Ae,L,F,Ce,Ge,De)}}function hh(x,L,F,O,I,ce){x.onBeforeRender(E,L,F,O,I,ce),x.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),I.onBeforeRender(E,L,F,O,x,ce),I.transparent===!0&&I.side===li&&I.forceSinglePass===!1?(I.side=rn,I.needsUpdate=!0,E.renderBufferDirect(F,L,O,I,x,ce),I.side=Fi,I.needsUpdate=!0,E.renderBufferDirect(F,L,O,I,x,ce),I.side=li):E.renderBufferDirect(F,L,O,I,x,ce),x.onAfterRender(E,L,F,O,I,ce)}function Hs(x,L,F){L.isScene!==!0&&(L=we);const O=Be.get(x),I=p.state.lights,ce=p.state.shadowsArray,ve=I.state.version,Ae=_e.getParameters(x,I.state,ce,L,F),Ce=_e.getProgramCacheKey(Ae);let Ge=O.programs;O.environment=x.isMeshStandardMaterial?L.environment:null,O.fog=L.fog,O.envMap=(x.isMeshStandardMaterial?N:g).get(x.envMap||O.environment),Ge===void 0&&(x.addEventListener("dispose",se),Ge=new Map,O.programs=Ge);let De=Ge.get(Ce);if(De!==void 0){if(O.currentProgram===De&&O.lightsStateVersion===ve)return fh(x,Ae),De}else Ae.uniforms=_e.getUniforms(x),x.onBuild(F,Ae,E),x.onBeforeCompile(Ae,E),De=_e.acquireProgram(Ae,Ce),Ge.set(Ce,De),O.uniforms=Ae.uniforms;const Ie=O.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ie.clippingPlanes=ke.uniform),fh(x,Ae),O.needsLights=bm(x),O.lightsStateVersion=ve,O.needsLights&&(Ie.ambientLightColor.value=I.state.ambient,Ie.lightProbe.value=I.state.probe,Ie.directionalLights.value=I.state.directional,Ie.directionalLightShadows.value=I.state.directionalShadow,Ie.spotLights.value=I.state.spot,Ie.spotLightShadows.value=I.state.spotShadow,Ie.rectAreaLights.value=I.state.rectArea,Ie.ltc_1.value=I.state.rectAreaLTC1,Ie.ltc_2.value=I.state.rectAreaLTC2,Ie.pointLights.value=I.state.point,Ie.pointLightShadows.value=I.state.pointShadow,Ie.hemisphereLights.value=I.state.hemi,Ie.directionalShadowMap.value=I.state.directionalShadowMap,Ie.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Ie.spotShadowMap.value=I.state.spotShadowMap,Ie.spotLightMatrix.value=I.state.spotLightMatrix,Ie.spotLightMap.value=I.state.spotLightMap,Ie.pointShadowMap.value=I.state.pointShadowMap,Ie.pointShadowMatrix.value=I.state.pointShadowMatrix),O.currentProgram=De,O.uniformsList=null,De}function uh(x){if(x.uniformsList===null){const L=x.currentProgram.getUniforms();x.uniformsList=va.seqWithValue(L.seq,x.uniforms)}return x.uniformsList}function fh(x,L){const F=Be.get(x);F.outputColorSpace=L.outputColorSpace,F.batching=L.batching,F.instancing=L.instancing,F.instancingColor=L.instancingColor,F.skinning=L.skinning,F.morphTargets=L.morphTargets,F.morphNormals=L.morphNormals,F.morphColors=L.morphColors,F.morphTargetsCount=L.morphTargetsCount,F.numClippingPlanes=L.numClippingPlanes,F.numIntersection=L.numClipIntersection,F.vertexAlphas=L.vertexAlphas,F.vertexTangents=L.vertexTangents,F.toneMapping=L.toneMapping}function Tm(x,L,F,O,I){L.isScene!==!0&&(L=we),M.resetTextureUnits();const ce=L.fog,ve=O.isMeshStandardMaterial?L.environment:null,Ae=w===null?E.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:_i,Ce=(O.isMeshStandardMaterial?N:g).get(O.envMap||ve),Ge=O.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,De=!!F.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Ie=!!F.morphAttributes.position,yt=!!F.morphAttributes.normal,ln=!!F.morphAttributes.color;let Nt=Di;O.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Nt=E.toneMapping);const ti=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,gt=ti!==void 0?ti.length:0,He=Be.get(O),Mo=p.state.lights;if(Y===!0&&(oe===!0||x!==S)){const Sn=x===S&&O.id===$;ke.setState(O,x,Sn)}let xt=!1;O.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Mo.state.version||He.outputColorSpace!==Ae||I.isBatchedMesh&&He.batching===!1||!I.isBatchedMesh&&He.batching===!0||I.isInstancedMesh&&He.instancing===!1||!I.isInstancedMesh&&He.instancing===!0||I.isSkinnedMesh&&He.skinning===!1||!I.isSkinnedMesh&&He.skinning===!0||I.isInstancedMesh&&He.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&He.instancingColor===!1&&I.instanceColor!==null||He.envMap!==Ce||O.fog===!0&&He.fog!==ce||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==ke.numPlanes||He.numIntersection!==ke.numIntersection)||He.vertexAlphas!==Ge||He.vertexTangents!==De||He.morphTargets!==Ie||He.morphNormals!==yt||He.morphColors!==ln||He.toneMapping!==Nt||Pe.isWebGL2===!0&&He.morphTargetsCount!==gt)&&(xt=!0):(xt=!0,He.__version=O.version);let Hi=He.currentProgram;xt===!0&&(Hi=Hs(O,L,I));let dh=!1,hs=!1,So=!1;const zt=Hi.getUniforms(),Vi=He.uniforms;if(ge.useProgram(Hi.program)&&(dh=!0,hs=!0,So=!0),O.id!==$&&($=O.id,hs=!0),dh||S!==x){zt.setValue(U,"projectionMatrix",x.projectionMatrix),zt.setValue(U,"viewMatrix",x.matrixWorldInverse);const Sn=zt.map.cameraPosition;Sn!==void 0&&Sn.setValue(U,Ne.setFromMatrixPosition(x.matrixWorld)),Pe.logarithmicDepthBuffer&&zt.setValue(U,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&zt.setValue(U,"isOrthographic",x.isOrthographicCamera===!0),S!==x&&(S=x,hs=!0,So=!0)}if(I.isSkinnedMesh){zt.setOptional(U,I,"bindMatrix"),zt.setOptional(U,I,"bindMatrixInverse");const Sn=I.skeleton;Sn&&(Pe.floatVertexTextures?(Sn.boneTexture===null&&Sn.computeBoneTexture(),zt.setValue(U,"boneTexture",Sn.boneTexture,M)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}I.isBatchedMesh&&(zt.setOptional(U,I,"batchingTexture"),zt.setValue(U,"batchingTexture",I._matricesTexture,M));const Eo=F.morphAttributes;if((Eo.position!==void 0||Eo.normal!==void 0||Eo.color!==void 0&&Pe.isWebGL2===!0)&&We.update(I,F,Hi),(hs||He.receiveShadow!==I.receiveShadow)&&(He.receiveShadow=I.receiveShadow,zt.setValue(U,"receiveShadow",I.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Vi.envMap.value=Ce,Vi.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),hs&&(zt.setValue(U,"toneMappingExposure",E.toneMappingExposure),He.needsLights&&Am(Vi,So),ce&&O.fog===!0&&ae.refreshFogUniforms(Vi,ce),ae.refreshMaterialUniforms(Vi,O,X,G,Se),va.upload(U,uh(He),Vi,M)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(va.upload(U,uh(He),Vi,M),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&zt.setValue(U,"center",I.center),zt.setValue(U,"modelViewMatrix",I.modelViewMatrix),zt.setValue(U,"normalMatrix",I.normalMatrix),zt.setValue(U,"modelMatrix",I.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Sn=O.uniformsGroups;for(let yo=0,wm=Sn.length;yo<wm;yo++)if(Pe.isWebGL2){const ph=Sn[yo];Qe.update(ph,Hi),Qe.bind(ph,Hi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Hi}function Am(x,L){x.ambientLightColor.needsUpdate=L,x.lightProbe.needsUpdate=L,x.directionalLights.needsUpdate=L,x.directionalLightShadows.needsUpdate=L,x.pointLights.needsUpdate=L,x.pointLightShadows.needsUpdate=L,x.spotLights.needsUpdate=L,x.spotLightShadows.needsUpdate=L,x.rectAreaLights.needsUpdate=L,x.hemisphereLights.needsUpdate=L}function bm(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(x,L,F){Be.get(x.texture).__webglTexture=L,Be.get(x.depthTexture).__webglTexture=F;const O=Be.get(x);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=F===void 0,O.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(x,L){const F=Be.get(x);F.__webglFramebuffer=L,F.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(x,L=0,F=0){w=x,D=L,R=F;let O=!0,I=null,ce=!1,ve=!1;if(x){const Ce=Be.get(x);Ce.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(U.FRAMEBUFFER,null),O=!1):Ce.__webglFramebuffer===void 0?M.setupRenderTarget(x):Ce.__hasExternalTextures&&M.rebindTextures(x,Be.get(x.texture).__webglTexture,Be.get(x.depthTexture).__webglTexture);const Ge=x.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(ve=!0);const De=Be.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(De[L])?I=De[L][F]:I=De[L],ce=!0):Pe.isWebGL2&&x.samples>0&&M.useMultisampledRTT(x)===!1?I=Be.get(x).__webglMultisampledFramebuffer:Array.isArray(De)?I=De[F]:I=De,y.copy(x.viewport),z.copy(x.scissor),V=x.scissorTest}else y.copy(q).multiplyScalar(X).floor(),z.copy(Q).multiplyScalar(X).floor(),V=ee;if(ge.bindFramebuffer(U.FRAMEBUFFER,I)&&Pe.drawBuffers&&O&&ge.drawBuffers(x,I),ge.viewport(y),ge.scissor(z),ge.setScissorTest(V),ce){const Ce=Be.get(x.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+L,Ce.__webglTexture,F)}else if(ve){const Ce=Be.get(x.texture),Ge=L||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ce.__webglTexture,F||0,Ge)}$=-1},this.readRenderTargetPixels=function(x,L,F,O,I,ce,ve){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Be.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ve!==void 0&&(Ae=Ae[ve]),Ae){ge.bindFramebuffer(U.FRAMEBUFFER,Ae);try{const Ce=x.texture,Ge=Ce.format,De=Ce.type;if(Ge!==Gn&&ue.convert(Ge)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=De===ws&&(ye.has("EXT_color_buffer_half_float")||Pe.isWebGL2&&ye.has("EXT_color_buffer_float"));if(De!==Ui&&ue.convert(De)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(De===Li&&(Pe.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=x.width-O&&F>=0&&F<=x.height-I&&U.readPixels(L,F,O,I,ue.convert(Ge),ue.convert(De),ce)}finally{const Ce=w!==null?Be.get(w).__webglFramebuffer:null;ge.bindFramebuffer(U.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(x,L,F=0){const O=Math.pow(2,-F),I=Math.floor(L.image.width*O),ce=Math.floor(L.image.height*O);M.setTexture2D(L,0),U.copyTexSubImage2D(U.TEXTURE_2D,F,0,0,x.x,x.y,I,ce),ge.unbindTexture()},this.copyTextureToTexture=function(x,L,F,O=0){const I=L.image.width,ce=L.image.height,ve=ue.convert(F.format),Ae=ue.convert(F.type);M.setTexture2D(F,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment),L.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,O,x.x,x.y,I,ce,ve,Ae,L.image.data):L.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,O,x.x,x.y,L.mipmaps[0].width,L.mipmaps[0].height,ve,L.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,O,x.x,x.y,ve,Ae,L.image),O===0&&F.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),ge.unbindTexture()},this.copyTextureToTexture3D=function(x,L,F,O,I=0){if(E.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ce=x.max.x-x.min.x+1,ve=x.max.y-x.min.y+1,Ae=x.max.z-x.min.z+1,Ce=ue.convert(O.format),Ge=ue.convert(O.type);let De;if(O.isData3DTexture)M.setTexture3D(O,0),De=U.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)M.setTexture2DArray(O,0),De=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);const Ie=U.getParameter(U.UNPACK_ROW_LENGTH),yt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),ln=U.getParameter(U.UNPACK_SKIP_PIXELS),Nt=U.getParameter(U.UNPACK_SKIP_ROWS),ti=U.getParameter(U.UNPACK_SKIP_IMAGES),gt=F.isCompressedTexture?F.mipmaps[I]:F.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,gt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,gt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,x.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,x.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,x.min.z),F.isDataTexture||F.isData3DTexture?U.texSubImage3D(De,I,L.x,L.y,L.z,ce,ve,Ae,Ce,Ge,gt.data):F.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(De,I,L.x,L.y,L.z,ce,ve,Ae,Ce,gt.data)):U.texSubImage3D(De,I,L.x,L.y,L.z,ce,ve,Ae,Ce,Ge,gt),U.pixelStorei(U.UNPACK_ROW_LENGTH,Ie),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,yt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ln),U.pixelStorei(U.UNPACK_SKIP_ROWS,Nt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ti),I===0&&O.generateMipmaps&&U.generateMipmap(De),ge.unbindTexture()},this.initTexture=function(x){x.isCubeTexture?M.setTextureCube(x,0):x.isData3DTexture?M.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?M.setTexture2DArray(x,0):M.setTexture2D(x,0),ge.unbindTexture()},this.resetState=function(){D=0,R=0,w=null,ge.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Zc?"display-p3":"srgb",n.unpackColorSpace=nt.workingColorSpace===Ha?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===kt?rr:sd}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===rr?kt:_i}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Uv extends Cd{}Uv.prototype.isWebGL1Renderer=!0;class Iv extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class Rc extends es{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Iu=new At,Cc=new fd,ua=new Va,fa=new P;class Nu extends Gt{constructor(e=new zn,n=new Rc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ua.copy(i.boundingSphere),ua.applyMatrix4(r),ua.radius+=s,e.ray.intersectsSphere(ua)===!1)return;Iu.copy(r).invert(),Cc.copy(e.ray).applyMatrix4(Iu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,f=i.attributes.position;if(l!==null){const d=Math.max(0,a.start),m=Math.min(l.count,a.start+a.count);for(let v=d,_=m;v<_;v++){const p=l.getX(v);fa.fromBufferAttribute(f,p),Fu(fa,p,c,r,e,n,this)}}else{const d=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let v=d,_=m;v<_;v++)fa.fromBufferAttribute(f,v),Fu(fa,v,c,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Fu(t,e,n,i,r,s,a){const o=Cc.distanceSqToPoint(t);if(o<n){const c=new P;Cc.closestPointToPoint(t,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}class Nv extends sn{constructor(e,n,i,r,s,a,o,c,l){super(e,n,i,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class tl extends zn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const h=[],f=new P,d=new P,m=[],v=[],_=[],p=[];for(let u=0;u<=i;u++){const T=[],E=u/i;let A=0;u===0&&a===0?A=.5/n:u===i&&c===Math.PI&&(A=-.5/n);for(let D=0;D<=n;D++){const R=D/n;f.x=-e*Math.cos(r+R*s)*Math.sin(a+E*o),f.y=e*Math.cos(a+E*o),f.z=e*Math.sin(r+R*s)*Math.sin(a+E*o),v.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),p.push(R+A,1-E),T.push(l++)}h.push(T)}for(let u=0;u<i;u++)for(let T=0;T<n;T++){const E=h[u][T+1],A=h[u][T],D=h[u+1][T],R=h[u+1][T+1];(u!==0||a>0)&&m.push(E,A,R),(u!==i-1||c<Math.PI)&&m.push(A,D,R)}this.setIndex(m),this.setAttribute("position",new Jn(v,3)),this.setAttribute("normal",new Jn(_,3)),this.setAttribute("uv",new Jn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Fv extends es{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ye(16777215),this.specular=new Ye(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ad,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Kc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class nl extends Gt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const tc=new At,Ou=new P,Bu=new P;class Ld{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jc,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Ou.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ou),Bu.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Bu),n.updateMatrixWorld(),tc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(tc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ku=new At,gs=new P,nc=new P;class Ov extends Ld{constructor(){super(new mn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ze(4,2),this._viewportCount=6,this._viewports=[new ft(2,1,1,1),new ft(0,1,1,1),new ft(3,1,1,1),new ft(1,1,1,1),new ft(3,0,1,1),new ft(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),gs.setFromMatrixPosition(e.matrixWorld),i.position.copy(gs),nc.copy(i.position),nc.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(nc),i.updateMatrixWorld(),r.makeTranslation(-gs.x,-gs.y,-gs.z),ku.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ku)}}class Bv extends nl{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Ov}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class kv extends Ld{constructor(){super(new Ed(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gv extends nl{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new kv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class zv extends nl{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jc);class Hv{constructor(e){this.container=document.getElementById(e),this.scene=new Iv,this.camera=new mn(75,window.innerWidth/window.innerHeight,.1,1e3),this.renderer=new Cd({antialias:!0,alpha:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(window.devicePixelRatio),this.container.appendChild(this.renderer.domElement),this.camera.position.z=15,this.targetZoom=15,this.initLights(),this.initSaturn(),this.initRings(),this.initStars(),window.addEventListener("resize",this.onWindowResize.bind(this)),this.animate()}initLights(){const e=new zv(16777215,.6);this.scene.add(e);const n=new Bv(16777215,2.5,0);n.position.set(50,30,50),this.scene.add(n);const i=new Gv(13421823,.5);i.position.set(-20,0,20),this.scene.add(i)}createSaturnTexture(){const e=document.createElement("canvas");e.width=1024,e.height=512;const n=e.getContext("2d");n.fillStyle="#ceb886",n.fillRect(0,0,e.width,e.height);const i=["#bfa068","#a89060","#e6d3a3","#8c7853","#d6b878","#9e8e6b"];for(let r=0;r<120;r++){const s=Math.random()*e.height,a=Math.random()*15+2;n.fillStyle=i[Math.floor(Math.random()*i.length)],n.globalAlpha=Math.random()*.5+.1,n.fillRect(0,s,e.width,a)}return new Nv(e)}initSaturn(){const e=new tl(5,64,64),n=this.createSaturnTexture(),i=new Fv({map:n,color:16777215,shininess:10});this.saturn=new fi(e,i),this.scene.add(this.saturn)}initRings(){const n=new zn,i=new Float32Array(2e4*3),r=new Float32Array(2e4*3),s=7,a=12,o=new Ye(9205843),c=new Ye(13482915);for(let h=0;h<2e4;h++){const f=Math.random()*Math.PI*2,d=s+Math.random()*(a-s),m=.1,v=Math.cos(f)*d,_=(Math.random()-.5)*m,p=Math.sin(f)*d;i[h*3]=v,i[h*3+1]=_,i[h*3+2]=p;const u=(d-s)/(a-s),T=o.clone().lerp(c,u);r[h*3]=T.r,r[h*3+1]=T.g,r[h*3+2]=T.b}n.setAttribute("position",new gn(i,3)),n.setAttribute("color",new gn(r,3));const l=new Rc({size:.05,vertexColors:!0,transparent:!0,opacity:.8,blending:_c});this.rings=new Nu(n,l),this.ringsGroup=new xs,this.ringsGroup.add(this.rings),this.ringsGroup.rotation.x=Math.PI/6,this.ringsGroup.rotation.z=Math.PI/12,this.scene.add(this.ringsGroup)}initStars(){const n=new zn,i=new Float32Array(5e3*3);for(let s=0;s<5e3;s++){const a=(Math.random()-.5)*200,o=(Math.random()-.5)*200,c=(Math.random()-.5)*200;i[s*3]=a,i[s*3+1]=o,i[s*3+2]=c}n.setAttribute("position",new gn(i,3));const r=new Rc({color:16777215,size:.1,transparent:!0,opacity:.5});this.stars=new Nu(n,r),this.scene.add(this.stars)}setZoom(e){this.targetZoom=30-e*22}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}animate(){requestAnimationFrame(this.animate.bind(this)),this.saturn&&(this.saturn.rotation.y+=.005),this.rings&&(this.rings.rotation.y-=.002),this.camera.position.z+=(this.targetZoom-this.camera.position.z)*.05,this.renderer.render(this.scene,this.camera)}}var cr=typeof self<"u"?self:{};function ji(){throw Error("Invalid UTF8")}function Gu(t,e){return e=String.fromCharCode.apply(null,e),t==null?e:t+e}let da,ic;const Vv=typeof TextDecoder<"u";let Wv;const Xv=typeof TextEncoder<"u";function Pd(t){if(Xv)t=(Wv||(Wv=new TextEncoder)).encode(t);else{let n=0;const i=new Uint8Array(3*t.length);for(let r=0;r<t.length;r++){var e=t.charCodeAt(r);if(e<128)i[n++]=e;else{if(e<2048)i[n++]=e>>6|192;else{if(e>=55296&&e<=57343){if(e<=56319&&r<t.length){const s=t.charCodeAt(++r);if(s>=56320&&s<=57343){e=1024*(e-55296)+s-56320+65536,i[n++]=e>>18|240,i[n++]=e>>12&63|128,i[n++]=e>>6&63|128,i[n++]=63&e|128;continue}r--}e=65533}i[n++]=e>>12|224,i[n++]=e>>6&63|128}i[n++]=63&e|128}}t=n===i.length?i:i.subarray(0,n)}return t}var il,Pa;e:{for(var zu=["CLOSURE_FLAGS"],rc=cr,sc=0;sc<zu.length;sc++)if((rc=rc[zu[sc]])==null){Pa=null;break e}Pa=rc}var Rs,Hu=Pa&&Pa[610401301];il=Hu!=null&&Hu;const Vu=cr.navigator;function Lc(t){return!!il&&!!Rs&&Rs.brands.some(({brand:e})=>e&&e.indexOf(t)!=-1)}function wn(t){var e;return(e=cr.navigator)&&(e=e.userAgent)||(e=""),e.indexOf(t)!=-1}function wi(){return!!il&&!!Rs&&Rs.brands.length>0}function ac(){return wi()?Lc("Chromium"):(wn("Chrome")||wn("CriOS"))&&!(!wi()&&wn("Edge"))||wn("Silk")}function rl(t){return rl[" "](t),t}Rs=Vu&&Vu.userAgentData||null,rl[" "]=function(){};var qv=!wi()&&(wn("Trident")||wn("MSIE"));!wn("Android")||ac(),ac(),wn("Safari")&&(ac()||!wi()&&wn("Coast")||!wi()&&wn("Opera")||!wi()&&wn("Edge")||(wi()?Lc("Microsoft Edge"):wn("Edg/"))||wi()&&Lc("Opera"));var Dd={},Ms=null;function Yv(t){const e=t.length;let n=3*e/4;n%3?n=Math.floor(n):"=.".indexOf(t[e-1])!=-1&&(n="=.".indexOf(t[e-2])!=-1?n-2:n-1);const i=new Uint8Array(n);let r=0;return function(s,a){function o(l){for(;c<s.length;){const h=s.charAt(c++),f=Ms[h];if(f!=null)return f;if(!/^[\s\xa0]*$/.test(h))throw Error("Unknown base64 encoding at char: "+h)}return l}Ud();let c=0;for(;;){const l=o(-1),h=o(0),f=o(64),d=o(64);if(d===64&&l===-1)break;a(l<<2|h>>4),f!=64&&(a(h<<4&240|f>>2),d!=64&&a(f<<6&192|d))}}(t,function(s){i[r++]=s}),r!==n?i.subarray(0,r):i}function Ud(){if(!Ms){Ms={};var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"];for(let n=0;n<5;n++){const i=t.concat(e[n].split(""));Dd[n]=i;for(let r=0;r<i.length;r++){const s=i[r];Ms[s]===void 0&&(Ms[s]=r)}}}}var Id=typeof Uint8Array<"u",Nd=!qv&&typeof btoa=="function";function Wu(t){if(!Nd){var e;e===void 0&&(e=0),Ud(),e=Dd[e];var n=Array(Math.floor(t.length/3)),i=e[64]||"";let c=0,l=0;for(;c<t.length-2;c+=3){var r=t[c],s=t[c+1],a=t[c+2],o=e[r>>2];r=e[(3&r)<<4|s>>4],s=e[(15&s)<<2|a>>6],a=e[63&a],n[l++]=o+r+s+a}switch(o=0,a=i,t.length-c){case 2:a=e[(15&(o=t[c+1]))<<2]||i;case 1:t=t[c],n[l]=e[t>>2]+e[(3&t)<<4|o>>4]+a+i}return n.join("")}for(e="",n=0,i=t.length-10240;n<i;)e+=String.fromCharCode.apply(null,t.subarray(n,n+=10240));return e+=String.fromCharCode.apply(null,n?t.subarray(n):t),btoa(e)}const Xu=/[-_.]/g,jv={"-":"+",_:"/",".":"="};function Kv(t){return jv[t]||""}function Fd(t){if(!Nd)return Yv(t);Xu.test(t)&&(t=t.replace(Xu,Kv)),t=atob(t);const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}function Fs(t){return Id&&t!=null&&t instanceof Uint8Array}var Vr={};function lr(){return $v||($v=new pi(null,Vr))}function sl(t){Od(Vr);var e=t.g;return(e=e==null||Fs(e)?e:typeof e=="string"?Fd(e):null)==null?e:t.g=e}var pi=class{h(){return new Uint8Array(sl(this)||0)}constructor(t,e){if(Od(e),this.g=t,t!=null&&t.length===0)throw Error("ByteString should be constructed with non-empty values")}};let $v,Zv;function Od(t){if(t!==Vr)throw Error("illegal external caller")}function Bd(t,e){t.__closure__error__context__984382||(t.__closure__error__context__984382={}),t.__closure__error__context__984382.severity=e}function Pc(t){return Bd(t=Error(t),"warning"),t}var qa=typeof Symbol=="function"&&typeof Symbol()=="symbol",Jv=new Set;function Os(t,e,n=!1,i=!1){return t=typeof Symbol=="function"&&typeof Symbol()=="symbol"?i&&Symbol.for&&t?Symbol.for(t):t!=null?Symbol(t):Symbol():e,n&&Jv.add(t),t}var Qv=Os("jas",void 0,!0,!0),qu=Os(void 0,"0di"),oc=Os(void 0,"2ex"),_s=Os(void 0,"1oa",!0),Wr=Os(void 0,Symbol(),!0);const me=qa?Qv:"Ga",kd={Ga:{value:0,configurable:!0,writable:!0,enumerable:!1}},Gd=Object.defineProperties;function Ya(t,e){qa||me in t||Gd(t,kd),t[me]|=e}function Rt(t,e){qa||me in t||Gd(t,kd),t[me]=e}function ns(t){return Ya(t,34),t}function e3(t,e){Rt(e,-30975&(0|t))}function Dc(t,e){Rt(e,-30941&(34|t))}function al(){return typeof BigInt=="function"}function an(t){return Array.prototype.slice.call(t)}var ol,Bs={},zd={};function Yu(t){return!(!t||typeof t!="object"||t.Ia!==zd)}function cl(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)&&t.constructor===Object}function ll(t,e){if(t!=null){if(typeof t=="string")t=t?new pi(t,Vr):lr();else if(t.constructor!==pi)if(Fs(t))t=t.length?new pi(new Uint8Array(t),Vr):lr();else{if(!e)throw Error();t=void 0}}return t}function Da(t){return!(!Array.isArray(t)||t.length)&&!!(1&(0|t[me]))}const ju=[];function ki(t){if(2&t)throw Error()}Rt(ju,55),ol=Object.freeze(ju);class Ua{constructor(e,n,i){this.l=0,this.g=e,this.h=n,this.m=i}next(){if(this.l<this.g.length){const e=this.g[this.l++];return{done:!1,value:this.h?this.h.call(this.m,e):e}}return{done:!0,value:void 0}}[Symbol.iterator](){return new Ua(this.g,this.h,this.m)}}function hl(t){return Wr?t[Wr]:void 0}var t3=Object.freeze({});function ja(t){return t.Qa=!0,t}var n3=ja(t=>typeof t=="number"),Ku=ja(t=>typeof t=="string"),i3=ja(t=>typeof t=="boolean"),Ka=typeof cr.BigInt=="function"&&typeof cr.BigInt(0)=="bigint",Uc=ja(t=>Ka?t>=s3&&t<=o3:t[0]==="-"?$u(t,r3):$u(t,a3));const r3=Number.MIN_SAFE_INTEGER.toString(),s3=Ka?BigInt(Number.MIN_SAFE_INTEGER):void 0,a3=Number.MAX_SAFE_INTEGER.toString(),o3=Ka?BigInt(Number.MAX_SAFE_INTEGER):void 0;function $u(t,e){if(t.length>e.length)return!1;if(t.length<e.length||t===e)return!0;for(let n=0;n<t.length;n++){const i=t[n],r=e[n];if(i>r)return!1;if(i<r)return!0}}const c3=typeof Uint8Array.prototype.slice=="function";let Hd,it=0,St=0;function Zu(t){const e=t>>>0;it=e,St=(t-e)/4294967296>>>0}function Xr(t){if(t<0){Zu(-t);const[e,n]=pl(it,St);it=e>>>0,St=n>>>0}else Zu(t)}function ul(t){const e=Hd||(Hd=new DataView(new ArrayBuffer(8)));e.setFloat32(0,+t,!0),St=0,it=e.getUint32(0,!0)}function fl(t,e){const n=4294967296*e+(t>>>0);return Number.isSafeInteger(n)?n:Cs(t,e)}function dl(t,e){const n=2147483648&e;return n&&(e=~e>>>0,(t=1+~t>>>0)==0&&(e=e+1>>>0)),typeof(t=fl(t,e))=="number"?n?-t:t:n?"-"+t:t}function Cs(t,e){if(t>>>=0,(e>>>=0)<=2097151)var n=""+(4294967296*e+t);else al()?n=""+(BigInt(e)<<BigInt(32)|BigInt(t)):(t=(16777215&t)+6777216*(n=16777215&(t>>>24|e<<8))+6710656*(e=e>>16&65535),n+=8147497*e,e*=2,t>=1e7&&(n+=t/1e7>>>0,t%=1e7),n>=1e7&&(e+=n/1e7>>>0,n%=1e7),n=e+Ju(n)+Ju(t));return n}function Ju(t){return t=String(t),"0000000".slice(t.length)+t}function $a(t){if(t.length<16)Xr(Number(t));else if(al())t=BigInt(t),it=Number(t&BigInt(4294967295))>>>0,St=Number(t>>BigInt(32)&BigInt(4294967295));else{const e=+(t[0]==="-");St=it=0;const n=t.length;for(let i=e,r=(n-e)%6+e;r<=n;i=r,r+=6){const s=Number(t.slice(i,r));St*=1e6,it=1e6*it+s,it>=4294967296&&(St+=Math.trunc(it/4294967296),St>>>=0,it>>>=0)}if(e){const[i,r]=pl(it,St);it=i,St=r}}}function pl(t,e){return e=~e,t?t=1+~t:e+=1,[t,e]}const ml=typeof BigInt=="function"?BigInt.asIntN:void 0,l3=typeof BigInt=="function"?BigInt.asUintN:void 0,Ir=Number.isSafeInteger,Za=Number.isFinite,Ia=Math.trunc;function Gi(t){return t==null||typeof t=="number"?t:t==="NaN"||t==="Infinity"||t==="-Infinity"?Number(t):void 0}function Vd(t){return t==null||typeof t=="boolean"?t:typeof t=="number"?!!t:void 0}const h3=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Ja(t){switch(typeof t){case"bigint":return!0;case"number":return Za(t);case"string":return h3.test(t);default:return!1}}function is(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return Za(t)?0|t:void 0}function Wd(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return Za(t)?t>>>0:void 0}function Qu(t){if(t[0]==="-")return!1;const e=t.length;return e<20||e===20&&Number(t.substring(0,6))<184467}function gl(t){return t=Ia(t),Ir(t)||(Xr(t),t=dl(it,St)),t}function _l(t){var e=Ia(Number(t));if(Ir(e))return String(e);if((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),e=t.length,!(t[0]==="-"?e<20||e===20&&Number(t.substring(0,7))>-922337:e<19||e===19&&Number(t.substring(0,6))<922337))if($a(t),t=it,2147483648&(e=St))if(al())t=""+(BigInt(0|e)<<BigInt(32)|BigInt(t>>>0));else{const[n,i]=pl(t,e);t="-"+Cs(n,i)}else t=Cs(t,e);return t}function Na(t){return t==null?t:typeof t=="bigint"?(Uc(t)?t=Number(t):(t=ml(64,t),t=Uc(t)?Number(t):String(t)),t):Ja(t)?typeof t=="number"?gl(t):_l(t):void 0}function u3(t){if(t==null)return t;var e=typeof t;if(e==="bigint")return String(l3(64,t));if(Ja(t)){if(e==="string")return e=Ia(Number(t)),Ir(e)&&e>=0?t=String(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),Qu(t)||($a(t),t=Cs(it,St))),t;if(e==="number")return(t=Ia(t))>=0&&Ir(t)?t:function(n){if(n<0){Xr(n);var i=Cs(it,St);return n=Number(i),Ir(n)?n:i}return Qu(i=String(n))?i:(Xr(n),fl(it,St))}(t)}}function Xd(t){if(typeof t!="string")throw Error();return t}function rs(t){if(t!=null&&typeof t!="string")throw Error();return t}function qr(t){return t==null||typeof t=="string"?t:void 0}function vl(t,e,n,i){if(t!=null&&typeof t=="object"&&t.W===Bs)return t;if(!Array.isArray(t))return n?2&i?((t=e[qu])||(ns((t=new e).u),t=e[qu]=t),e=t):e=new e:e=void 0,e;let r=n=0|t[me];return r===0&&(r|=32&i),r|=2&i,r!==n&&Rt(t,r),new e(t)}function f3(t,e,n){if(e)e:{if(!Ja(e=t))throw Pc("int64");switch(typeof e){case"string":e=_l(e);break e;case"bigint":if(t=e=ml(64,e),Ku(t)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(t))throw Error(String(t))}else if(n3(t)&&!Number.isSafeInteger(t))throw Error(String(t));e=Ka?BigInt(e):i3(e)?e?"1":"0":Ku(e)?e.trim()||"0":String(e);break e;default:e=gl(e)}}else e=Na(t);return typeof(n=(t=e)==null?n?0:void 0:t)=="string"&&Ir(e=+n)?e:n}const d3={};let p3=function(){try{return rl(new class extends Map{constructor(){super()}}),!1}catch{return!0}}();class cc{constructor(){this.g=new Map}get(e){return this.g.get(e)}set(e,n){return this.g.set(e,n),this.size=this.g.size,this}delete(e){return e=this.g.delete(e),this.size=this.g.size,e}clear(){this.g.clear(),this.size=this.g.size}has(e){return this.g.has(e)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(e,n){return this.g.forEach(e,n)}[Symbol.iterator](){return this.entries()}}const m3=p3?(Object.setPrototypeOf(cc.prototype,Map.prototype),Object.defineProperties(cc.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),cc):class extends Map{constructor(){super()}};function ef(t){return t}function lc(t){if(2&t.L)throw Error("Cannot mutate an immutable Map")}var Ln=class extends m3{constructor(t,e,n=ef,i=ef){super();let r=0|t[me];r|=64,Rt(t,r),this.L=r,this.S=e,this.R=n,this.Y=this.S?g3:i;for(let s=0;s<t.length;s++){const a=t[s],o=n(a[0],!1,!0);let c=a[1];e?c===void 0&&(c=null):c=i(a[1],!1,!0,void 0,void 0,r),super.set(o,c)}}na(t=tf){if(this.size!==0)return this.X(t)}X(t=tf){const e=[],n=super.entries();for(var i;!(i=n.next()).done;)(i=i.value)[0]=t(i[0]),i[1]=t(i[1]),e.push(i);return e}clear(){lc(this),super.clear()}delete(t){return lc(this),super.delete(this.R(t,!0,!1))}entries(){var t=this.ma();return new Ua(t,_3,this)}keys(){return this.Ha()}values(){var t=this.ma();return new Ua(t,Ln.prototype.get,this)}forEach(t,e){super.forEach((n,i)=>{t.call(e,this.get(i),i,this)})}set(t,e){return lc(this),(t=this.R(t,!0,!1))==null?this:e==null?(super.delete(t),this):super.set(t,this.Y(e,!0,!0,this.S,!1,this.L))}Na(t){const e=this.R(t[0],!1,!0);t=t[1],t=this.S?t===void 0?null:t:this.Y(t,!1,!0,void 0,!1,this.L),super.set(e,t)}has(t){return super.has(this.R(t,!1,!1))}get(t){t=this.R(t,!1,!1);const e=super.get(t);if(e!==void 0){var n=this.S;return n?((n=this.Y(e,!1,!0,n,this.ra,this.L))!==e&&super.set(t,n),n):e}}ma(){return Array.from(super.keys())}Ha(){return super.keys()}[Symbol.iterator](){return this.entries()}};function g3(t,e,n,i,r,s){return t=vl(t,i,n,s),r&&(t=eo(t)),t}function tf(t){return t}function _3(t){return[t,this.get(t)]}let v3,qd,x3;function nf(){return v3||(v3=new Ln(ns([]),void 0,void 0,void 0,d3))}function xl(t,e,n,i,r){if(t!=null){if(Array.isArray(t))t=Da(t)?void 0:r&&2&(0|t[me])?t:Ml(t,e,n,i!==void 0,r);else if(cl(t)){const s={};for(let a in t)s[a]=xl(t[a],e,n,i,r);t=s}else t=e(t,i);return t}}function Ml(t,e,n,i,r){const s=i||n?0|t[me]:0,a=i?!!(32&s):void 0;i=an(t);for(let o=0;o<i.length;o++)i[o]=xl(i[o],e,n,a,r);return n&&((t=hl(t))&&(i[Wr]=an(t)),n(s,i)),i}function M3(t){return xl(t,Yd,void 0,void 0,!1)}function Yd(t){return t.W===Bs?t.toJSON():t instanceof Ln?t.na(M3):function(e){switch(typeof e){case"number":return isFinite(e)?e:String(e);case"bigint":return Uc(e)?Number(e):String(e);case"boolean":return e?1:0;case"object":if(e)if(Array.isArray(e)){if(Da(e))return}else{if(Fs(e))return Wu(e);if(e instanceof pi){const n=e.g;return n==null?"":typeof n=="string"?n:e.g=Wu(n)}if(e instanceof Ln)return e.na()}}return e}(t)}function jd(t){return Ml(t,Yd,void 0,void 0,!1)}function Ii(t,e,n){return t=Kd(t,e[0],e[1],n?1:2),e!==qd&&n&&Ya(t,16384),t}function Kd(t,e,n,i){if(t==null){var r=96;n?(t=[n],r|=512):t=[],e&&(r=-33521665&r|(1023&e)<<15)}else{if(!Array.isArray(t))throw Error("narr");if(2048&(r=0|t[me]))throw Error("farr");if(64&r)return t;if(i===1||i===2||(r|=64),n&&(r|=512,n!==t[0]))throw Error("mid");e:{if(i=(n=t).length){const s=i-1;if(cl(n[s])){if((e=s-(512&(r|=256)?0:-1))>=1024)throw Error("pvtlmt");r=-33521665&r|(1023&e)<<15;break e}}if(e){if((e=Math.max(e,i-(512&r?0:-1)))>1024)throw Error("spvt");r=-33521665&r|(1023&e)<<15}}}return Rt(t,r),t}function Ic(t,e,n=Dc){if(t!=null){if(Id&&t instanceof Uint8Array)return e?t:new Uint8Array(t);if(Array.isArray(t)){var i=0|t[me];return 2&i?t:(e&&(e=i===0||!!(32&i)&&!(64&i||!(16&i))),e?(Rt(t,-12293&(34|i)),t):Ml(t,Ic,4&i?Dc:n,!0,!0))}return t.W===Bs?t=2&(i=0|(n=t.u)[me])?t:new t.constructor(Qa(n,i,!0)):t instanceof Ln&&!(2&t.L)&&(n=ns(t.X(Ic)),t=new Ln(n,t.S,t.R,t.Y)),t}}function Qa(t,e,n){const i=n||2&e?Dc:e3,r=!!(32&e);return t=function(s,a,o){const c=an(s);var l=c.length;const h=256&a?c[l-1]:void 0;for(l+=h?-1:0,a=512&a?1:0;a<l;a++)c[a]=o(c[a]);if(h){a=c[a]={};for(const f in h)a[f]=o(h[f])}return(s=hl(s))&&(c[Wr]=an(s)),c}(t,e,s=>Ic(s,r,i)),Ya(t,32|(n?2:0)),t}function eo(t){const e=t.u,n=0|e[me];return 2&n?new t.constructor(Qa(e,n,!1)):t}function Yr(t,e){return Mi(t=t.u,0|t[me],e)}function Mi(t,e,n,i){if(n===-1)return null;var r=n+(512&e?0:-1);const s=t.length-1;return r>=s&&256&e?t[s][n]:i&&256&e&&(e=t[s][n])!=null?(t[r]!=null&&oc!=null&&((r=(t=Zv??(Zv={}))[oc]||0)>=4||(t[oc]=r+1,Bd(t=Error(),"incident"),function(a){cr.setTimeout(()=>{throw a},0)}(t))),e):r<=s?t[r]:void 0}function ot(t,e,n){const i=t.u;let r=0|i[me];return ki(r),_t(i,r,e,n),t}function _t(t,e,n,i){const r=512&e?0:-1,s=n+r;var a=t.length-1;return s>=a&&256&e?(t[a][n]=i,e):s<=a?(t[s]=i,256&e&&n in(t=t[a])&&delete t[n],e):(i!==void 0&&(n>=(a=e>>15&1023||536870912)?i!=null&&(t[a+r]={[n]:i},Rt(t,e|=256)):t[s]=i),e)}function xa(t,e){let n=0|(t=t.u)[me];const i=Mi(t,n,e),r=Gi(i);return r!=null&&r!==i&&_t(t,n,e,r),r}function $d(t){let e=0|(t=t.u)[me];const n=Mi(t,e,1),i=ll(n,!0);return i!=null&&i!==n&&_t(t,e,1,i),i}function er(){return t3===void 0?2:4}function tr(t,e,n,i,r){const s=t.u,a=2&(t=0|s[me])?1:i;r=!!r;let o=0|(i=Sl(s,t,e))[me];if(!(4&o)){4&o&&(i=an(i),o=mi(o,t),t=_t(s,t,e,i));let c=0,l=0;for(;c<i.length;c++){const h=n(i[c]);h!=null&&(i[l++]=h)}l<c&&(i.length=l),o=El(o,t),n=-4097&(20|o),o=n&=-8193,Rt(i,o),2&o&&Object.freeze(i)}return a===1||a===4&&32&o?di(o)||(r=o,o|=2,o!==r&&Rt(i,o),Object.freeze(i)):(a===2&&di(o)&&(i=an(i),o=mi(o,t),o=Ni(o,t,r),Rt(i,o),t=_t(s,t,e,i)),di(o)||(e=o,o=Ni(o,t,r),o!==e&&Rt(i,o))),i}function Sl(t,e,n,i){return t=Mi(t,e,n,i),Array.isArray(t)?t:ol}function El(t,e){return t===0&&(t=mi(t,e)),1|t}function di(t){return!!(2&t)&&!!(4&t)||!!(2048&t)}function Zd(t){t=an(t);for(let e=0;e<t.length;e++){const n=t[e]=an(t[e]);Array.isArray(n[1])&&(n[1]=ns(n[1]))}return t}function Nc(t,e,n,i){let r=0|(t=t.u)[me];ki(r),_t(t,r,e,(i==="0"?Number(n)===0:n===i)?void 0:n)}function ss(t,e,n,i,r){ki(e);var s=!(!(64&e)&&16384&e);const a=(r=Sl(t,e,n,r))!==ol;if(s||!a){let o=s=a?0|r[me]:0;(!a||2&o||di(o)||4&o&&!(32&o))&&(r=an(r),o=mi(o,e),e=_t(t,e,n,r)),o=-13&El(o,e),o=Ni(i?-17&o:16|o,e,!0),o!==s&&Rt(r,o)}return r}function hc(t,e){var n=Gp;return Tl(yl(t=t.u),t,0|t[me],n)===e?e:-1}function yl(t){if(qa)return t[_s]??(t[_s]=new Map);if(_s in t)return t[_s];const e=new Map;return Object.defineProperty(t,_s,{value:e}),e}function Jd(t,e,n,i){const r=yl(t),s=Tl(r,t,e,n);return s!==i&&(s&&(e=_t(t,e,s)),r.set(n,i)),e}function Tl(t,e,n,i){let r=t.get(i);if(r!=null)return r;r=0;for(let s=0;s<i.length;s++){const a=i[s];Mi(e,n,a)!=null&&(r!==0&&(n=_t(e,n,r)),r=a)}return t.set(i,r),r}function Al(t,e,n,i){let r,s=0|t[me];if((i=Mi(t,s,n,i))!=null&&i.W===Bs)return(e=eo(i))!==i&&_t(t,s,n,e),e.u;if(Array.isArray(i)){const a=0|i[me];r=2&a?Ii(Qa(i,a,!1),e,!0):64&a?i:Ii(r,e,!0)}else r=Ii(void 0,e,!0);return r!==i&&_t(t,s,n,r),r}function Qd(t,e,n,i){let r=0|(t=t.u)[me];return(e=vl(i=Mi(t,r,n,i),e,!1,r))!==i&&e!=null&&_t(t,r,n,e),e}function Ke(t,e,n,i=!1){if((e=Qd(t,e,n,i))==null)return e;if(!(2&(i=0|(t=t.u)[me]))){const r=eo(e);r!==e&&_t(t,i,n,e=r)}return e}function ep(t,e,n,i,r,s,a){t=t.u;var o=!!(2&e);const c=o?1:r;s=!!s,a&&(a=!o);var l=0|(r=Sl(t,e,i))[me];if(!(o=!!(4&l))){var h=r,f=e;const d=!!(2&(l=El(l,e)));d&&(f|=2);let m=!d,v=!0,_=0,p=0;for(;_<h.length;_++){const u=vl(h[_],n,!1,f);if(u instanceof n){if(!d){const T=!!(2&(0|u.u[me]));m&&(m=!T),v&&(v=T)}h[p++]=u}}p<_&&(h.length=p),l|=4,l=v?16|l:-17&l,Rt(h,l=m?8|l:-9&l),d&&Object.freeze(h)}if(a&&!(8&l||!r.length&&(c===1||c===4&&32&l))){for(di(l)&&(r=an(r),l=mi(l,e),e=_t(t,e,i,r)),n=r,a=l,h=0;h<n.length;h++)(l=n[h])!==(f=eo(l))&&(n[h]=f);a|=8,Rt(n,a=n.length?-17&a:16|a),l=a}return c===1||c===4&&32&l?di(l)||(e=l,(l|=!r.length||16&l&&(!o||32&l)?2:2048)!==e&&Rt(r,l),Object.freeze(r)):(c===2&&di(l)&&(Rt(r=an(r),l=Ni(l=mi(l,e),e,s)),e=_t(t,e,i,r)),di(l)||(i=l,(l=Ni(l,e,s))!==i&&Rt(r,l))),r}function vi(t,e,n){const i=0|t.u[me];return ep(t,i,e,n,er(),!1,!(2&i))}function Me(t,e,n,i){return i==null&&(i=void 0),ot(t,n,i)}function ys(t,e,n,i){i==null&&(i=void 0);e:{let r=0|(t=t.u)[me];if(ki(r),i==null){const s=yl(t);if(Tl(s,t,r,n)!==e)break e;s.set(n,0)}else r=Jd(t,r,n,e);_t(t,r,e,i)}}function mi(t,e){return-2049&(t=32|(2&e?2|t:-3&t))}function Ni(t,e,n){return 32&e&&n||(t&=-33),t}function Fa(t,e,n,i){const r=0|t.u[me];ki(r),t=ep(t,r,n,e,2,!0),i=i??new n,t.push(i),t[me]=2&(0|i.u[me])?-9&t[me]:-17&t[me]}function Cn(t,e){return is(Yr(t,e))}function Pn(t,e){return qr(Yr(t,e))}function Tt(t,e){return xa(t,e)??0}function Ls(t,e,n){if(n!=null&&typeof n!="boolean")throw t=typeof n,Error(`Expected boolean but got ${t!="object"?t:n?Array.isArray(n)?"array":t:"null"}: ${n}`);ot(t,e,n)}function Qn(t,e,n){if(n!=null){if(typeof n!="number"||!Za(n))throw Pc("int32");n|=0}ot(t,e,n)}function de(t,e,n){if(n!=null&&typeof n!="number")throw Error(`Value of float/double field must be a number, found ${typeof n}: ${n}`);ot(t,e,n)}function Oa(t,e,n){{const a=t.u;let o=0|a[me];if(ki(o),n==null)_t(a,o,e);else{var i=t=0|n[me],r=di(t),s=r||Object.isFrozen(n);for(r||(t=0),s||(n=an(n),i=0,t=Ni(t=mi(t,o),o,!0),s=!1),t|=21,r=0;r<n.length;r++){const c=n[r],l=Xd(c);Object.is(c,l)||(s&&(n=an(n),i=0,t=Ni(t=mi(t,o),o,!0),s=!1),n[r]=l)}t!==i&&(s&&(n=an(n),t=Ni(t=mi(t,o),o,!0)),Rt(n,t)),_t(a,o,e,n)}}}function to(t,e,n){ki(0|t.u[me]),tr(t,e,qr,2,!0).push(Xd(n))}function tp(t,e){return Error(`Invalid wire type: ${t} (at position ${e})`)}function bl(){return Error("Failed to read varint, encoding is invalid.")}function np(t,e){return Error(`Tried to read past the end of the data ${e} > ${t}`)}function wl(t){if(typeof t=="string")return{buffer:Fd(t),N:!1};if(Array.isArray(t))return{buffer:new Uint8Array(t),N:!1};if(t.constructor===Uint8Array)return{buffer:t,N:!1};if(t.constructor===ArrayBuffer)return{buffer:new Uint8Array(t),N:!1};if(t.constructor===pi)return{buffer:sl(t)||new Uint8Array(0),N:!0};if(t instanceof Uint8Array)return{buffer:new Uint8Array(t.buffer,t.byteOffset,t.byteLength),N:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function Rl(t,e){let n,i=0,r=0,s=0;const a=t.h;let o=t.g;do n=a[o++],i|=(127&n)<<s,s+=7;while(s<32&&128&n);for(s>32&&(r|=(127&n)>>4),s=3;s<32&&128&n;s+=7)n=a[o++],r|=(127&n)<<s;if(sr(t,o),n<128)return e(i>>>0,r>>>0);throw bl()}function Cl(t){let e=0,n=t.g;const i=n+10,r=t.h;for(;n<i;){const s=r[n++];if(e|=s,(128&s)==0)return sr(t,n),!!(127&e)}throw bl()}function Oi(t){const e=t.h;let n=t.g,i=e[n++],r=127&i;if(128&i&&(i=e[n++],r|=(127&i)<<7,128&i&&(i=e[n++],r|=(127&i)<<14,128&i&&(i=e[n++],r|=(127&i)<<21,128&i&&(i=e[n++],r|=i<<28,128&i&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++])))))throw bl();return sr(t,n),r}function xi(t){return Oi(t)>>>0}function Fc(t){var e=t.h;const n=t.g,i=e[n],r=e[n+1],s=e[n+2];return e=e[n+3],sr(t,t.g+4),(i<<0|r<<8|s<<16|e<<24)>>>0}function Oc(t){var e=Fc(t);t=2*(e>>31)+1;const n=e>>>23&255;return e&=8388607,n==255?e?NaN:t*(1/0):n==0?1401298464324817e-60*t*e:t*Math.pow(2,n-150)*(e+8388608)}function S3(t){return Oi(t)}function uc(t,e,{ba:n=!1}={}){t.ba=n,e&&(e=wl(e),t.h=e.buffer,t.m=e.N,t.j=0,t.l=t.h.length,t.g=t.j)}function sr(t,e){if(t.g=e,e>t.l)throw np(t.l,e)}function ip(t,e){if(e<0)throw Error(`Tried to read a negative byte length: ${e}`);const n=t.g,i=n+e;if(i>t.l)throw np(e,t.l-n);return t.g=i,n}function rp(t,e){if(e==0)return lr();var n=ip(t,e);return t.ba&&t.m?n=t.h.subarray(n,n+e):(t=t.h,n=n===(e=n+e)?new Uint8Array(0):c3?t.slice(n,e):new Uint8Array(t.subarray(n,e))),n.length==0?lr():new pi(n,Vr)}Ln.prototype.toJSON=void 0,Ln.prototype.Ia=zd;var rf=[];function sp(t){var e=t.g;if(e.g==e.l)return!1;t.l=t.g.g;var n=xi(t.g);if(e=n>>>3,!((n&=7)>=0&&n<=5))throw tp(n,t.l);if(e<1)throw Error(`Invalid field number: ${e} (at position ${t.l})`);return t.m=e,t.h=n,!0}function Ma(t){switch(t.h){case 0:t.h!=0?Ma(t):Cl(t.g);break;case 1:sr(t=t.g,t.g+8);break;case 2:if(t.h!=2)Ma(t);else{var e=xi(t.g);sr(t=t.g,t.g+e)}break;case 5:sr(t=t.g,t.g+4);break;case 3:for(e=t.m;;){if(!sp(t))throw Error("Unmatched start-group tag: stream EOF");if(t.h==4){if(t.m!=e)throw Error("Unmatched end-group tag");break}Ma(t)}break;default:throw tp(t.h,t.l)}}function ks(t,e,n){const i=t.g.l,r=xi(t.g),s=t.g.g+r;let a=s-i;if(a<=0&&(t.g.l=s,n(e,t,void 0,void 0,void 0),a=s-t.g.g),a)throw Error(`Message parsing ended unexpectedly. Expected to read ${r} bytes, instead read ${r-a} bytes, either the data ended unexpectedly or the message misreported its own length`);return t.g.g=s,t.g.l=i,e}function Ll(t){var e=xi(t.g),n=ip(t=t.g,e);if(t=t.h,Vv){var i,r=t;(i=ic)||(i=ic=new TextDecoder("utf-8",{fatal:!0})),e=n+e,r=n===0&&e===r.length?r:r.subarray(n,e);try{var s=i.decode(r)}catch(o){if(da===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),da=!0}catch{da=!1}}throw!da&&(ic=void 0),o}}else{e=(s=n)+e,n=[];let o,c=null;for(;s<e;){var a=t[s++];a<128?n.push(a):a<224?s>=e?ji():(o=t[s++],a<194||(192&o)!=128?(s--,ji()):n.push((31&a)<<6|63&o)):a<240?s>=e-1?ji():(o=t[s++],(192&o)!=128||a===224&&o<160||a===237&&o>=160||(192&(i=t[s++]))!=128?(s--,ji()):n.push((15&a)<<12|(63&o)<<6|63&i)):a<=244?s>=e-2?ji():(o=t[s++],(192&o)!=128||o-144+(a<<28)>>30||(192&(i=t[s++]))!=128||(192&(r=t[s++]))!=128?(s--,ji()):(a=(7&a)<<18|(63&o)<<12|(63&i)<<6|63&r,a-=65536,n.push(55296+(a>>10&1023),56320+(1023&a)))):ji(),n.length>=8192&&(c=Gu(c,n),n.length=0)}s=Gu(c,n)}return s}function ap(t){const e=xi(t.g);return rp(t.g,e)}function no(t,e,n){var i=xi(t.g);for(i=t.g.g+i;t.g.g<i;)n.push(e(t.g))}var pa=[];function E3(t){return t}let Nr;function Hn(t,e,n){e.g?e.m(t,e.g,e.h,n):e.m(t,e.h,n)}var fe=class{constructor(t,e){this.u=Kd(t,e)}toJSON(){const t=!Nr;try{return t&&(Nr=jd),op(this)}finally{t&&(Nr=void 0)}}l(){var t=rx;return t.g?t.l(this,t.g,t.h,!0):t.l(this,t.h,t.defaultValue,!0)}clone(){const t=this.u;return new this.constructor(Qa(t,0|t[me],!1))}N(){return!!(2&(0|this.u[me]))}};function op(t){var e=t.u;{e=(t=Nr(e))!==e;let l=t.length;if(l){var n=t[l-1],i=cl(n);i?l--:n=void 0;var r=t;if(i){e:{var s,a=n,o=!1;if(a)for(let h in a)isNaN(+h)?(s??(s={}))[h]=a[h]:(i=a[h],Array.isArray(i)&&(Da(i)||Yu(i)&&i.size===0)&&(i=null),i==null&&(o=!0),i!=null&&((s??(s={}))[h]=i));if(o||(s=a),s)for(let h in s){o=s;break e}o=null}a=o==null?n!=null:o!==n}for(;l>0&&((s=r[l-1])==null||Da(s)||Yu(s)&&s.size===0);l--)var c=!0;(r!==t||a||c)&&(e?(c||a||o)&&(r.length=l):r=Array.prototype.slice.call(r,0,l),o&&r.push(o)),c=r}else c=t}return c}function sf(t){return t?/^\d+$/.test(t)?($a(t),new Bc(it,St)):null:y3||(y3=new Bc(0,0))}fe.prototype.W=Bs,fe.prototype.toString=function(){try{return Nr=E3,op(this).toString()}finally{Nr=void 0}};var Bc=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let y3;function af(t){return t?/^-?\d+$/.test(t)?($a(t),new kc(it,St)):null:T3||(T3=new kc(0,0))}var kc=class{constructor(t,e){this.h=t>>>0,this.g=e>>>0}};let T3;function Fr(t,e,n){for(;n>0||e>127;)t.g.push(127&e|128),e=(e>>>7|n<<25)>>>0,n>>>=7;t.g.push(e)}function as(t,e){for(;e>127;)t.g.push(127&e|128),e>>>=7;t.g.push(e)}function io(t,e){if(e>=0)as(t,e);else{for(let n=0;n<9;n++)t.g.push(127&e|128),e>>=7;t.g.push(1)}}function Ps(t,e){t.g.push(e>>>0&255),t.g.push(e>>>8&255),t.g.push(e>>>16&255),t.g.push(e>>>24&255)}function jr(t,e){e.length!==0&&(t.l.push(e),t.h+=e.length)}function vn(t,e,n){as(t.g,8*e+n)}function Pl(t,e){return vn(t,e,2),e=t.g.end(),jr(t,e),e.push(t.h),e}function Dl(t,e){var n=e.pop();for(n=t.h+t.g.length()-n;n>127;)e.push(127&n|128),n>>>=7,t.h++;e.push(n),t.h++}function ro(t,e,n){vn(t,e,2),as(t.g,n.length),jr(t,t.g.end()),jr(t,n)}function Ba(t,e,n,i){n!=null&&(e=Pl(t,e),i(n,t),Dl(t,e))}function Vn(){const t=class{constructor(){throw Error()}};return Object.setPrototypeOf(t,t.prototype),t}var Ul=Vn(),cp=Vn(),Il=Vn(),Nl=Vn(),lp=Vn(),hp=Vn(),Fl=Vn(),up=Vn(),fp=Vn(),os=class{constructor(t,e,n){this.g=t,this.h=e,t=Ul,this.l=!!t&&n===t||!1}};function so(t,e){return new os(t,e,Ul)}function dp(t,e,n,i,r){Ba(t,n,_p(e,i),r)}const A3=so(function(t,e,n,i,r){return t.h===2&&(ks(t,Al(e,i,n),r),!0)},dp),b3=so(function(t,e,n,i,r){return t.h===2&&(ks(t,Al(e,i,n,!0),r),!0)},dp);var ao=Symbol(),Ol=Symbol(),of=Symbol(),cf=Symbol();let pp,mp;function hr(t,e,n,i){var r=i[t];if(r)return r;(r={}).Pa=i,r.V=function(f){switch(typeof f){case"boolean":return qd||(qd=[0,void 0,!0]);case"number":return f>0?void 0:f===0?x3||(x3=[0,void 0]):[-f,void 0];case"string":return[0,f];case"object":return f}}(i[0]);var s=i[1];let a=1;s&&s.constructor===Object&&(r.ga=s,typeof(s=i[++a])=="function"&&(r.la=!0,pp??(pp=s),mp??(mp=i[a+1]),s=i[a+=2]));const o={};for(;s&&Array.isArray(s)&&s.length&&typeof s[0]=="number"&&s[0]>0;){for(var c=0;c<s.length;c++)o[s[c]]=s;s=i[++a]}for(c=1;s!==void 0;){let f;typeof s=="number"&&(c+=s,s=i[++a]);var l=void 0;if(s instanceof os?f=s:(f=A3,a--),f==null?void 0:f.l){s=i[++a],l=i;var h=a;typeof s=="function"&&(s=s(),l[h]=s),l=s}for(h=c+1,typeof(s=i[++a])=="number"&&s<0&&(h-=s,s=i[++a]);c<h;c++){const d=o[c];l?n(r,c,f,l,d):e(r,c,f,d)}}return i[t]=r}function gp(t){return Array.isArray(t)?t[0]instanceof os?t:[b3,t]:[t,void 0]}function _p(t,e){return t instanceof fe?t.u:Array.isArray(t)?Ii(t,e,!1):void 0}function Bl(t,e,n,i){const r=n.g;t[e]=i?(s,a,o)=>r(s,a,o,i):r}function kl(t,e,n,i,r){const s=n.g;let a,o;t[e]=(c,l,h)=>s(c,l,h,o||(o=hr(Ol,Bl,kl,i).V),a||(a=Gl(i)),r)}function Gl(t){let e=t[of];if(e!=null)return e;const n=hr(Ol,Bl,kl,t);return e=n.la?(i,r)=>pp(i,r,n):(i,r)=>{const s=0|i[me];for(;sp(r)&&r.h!=4;){var a=r.m,o=n[a];if(o==null){var c=n.ga;c&&(c=c[a])&&(c=w3(c))!=null&&(o=n[a]=c)}o!=null&&o(r,i,a)||(a=(o=r).l,Ma(o),o.fa?o=void 0:(c=o.g.g-a,o.g.g=a,o=rp(o.g,c)),a=i,o&&((c=a[Wr])?c.push(o):a[Wr]=[o]))}return 16384&s&&ns(i),!0},t[of]=e}function w3(t){const e=(t=gp(t))[0].g;if(t=t[1]){const n=Gl(t),i=hr(Ol,Bl,kl,t).V;return(r,s,a)=>e(r,s,a,i,n)}return e}function oo(t,e,n){t[e]=n.h}function co(t,e,n,i){let r,s;const a=n.h;t[e]=(o,c,l)=>a(o,c,l,s||(s=hr(ao,oo,co,i).V),r||(r=vp(i)))}function vp(t){let e=t[cf];if(!e){const n=hr(ao,oo,co,t);e=(i,r)=>xp(i,r,n),t[cf]=e}return e}function xp(t,e,n){for(var i=0|t[me],r=512&i?0:-1,s=t.length,a=512&i?1:0,o=s+(256&i?-1:0);a<o;a++){const c=t[a];if(c==null)continue;const l=a-r,h=lf(n,l);h&&h(e,c,l)}if(256&i){i=t[s-1];for(const c in i)r=+c,Number.isNaN(r)||(s=i[r])!=null&&(o=lf(n,r))&&o(e,s,r)}if(t=hl(t))for(jr(e,e.g.end()),n=0;n<t.length;n++)jr(e,sl(t[n])||new Uint8Array(0))}function lf(t,e){var n=t[e];if(n)return n;if((n=t.ga)&&(n=n[e])){var i=(n=gp(n))[0].h;if(n=n[1]){const r=vp(n),s=hr(ao,oo,co,n).V;n=t.la?mp(s,r):(a,o,c)=>i(a,o,c,s,r)}else n=i;return t[e]=n}}function cs(t,e){if(Array.isArray(e)){var n=0|e[me];if(4&n)return e;for(var i=0,r=0;i<e.length;i++){const s=t(e[i]);s!=null&&(e[r++]=s)}return r<i&&(e.length=r),Rt(e,-12289&(5|n)),2&n&&Object.freeze(e),e}}function Zt(t,e,n){return new os(t,e,n)}function ls(t,e,n){return new os(t,e,n)}function Jt(t,e,n){_t(t,0|t[me],e,n)}var R3=so(function(t,e,n,i,r){return t.h===2&&(t=ks(t,Ii([void 0,void 0],i,!0),r),ki(i=0|e[me]),(r=Mi(e,i,n))instanceof Ln?2&r.L?((r=r.X()).push(t),_t(e,i,n,r)):r.Na(t):Array.isArray(r)?(2&(0|r[me])&&_t(e,i,n,r=Zd(r)),r.push(t)):_t(e,i,n,[t]),!0)},function(t,e,n,i,r){if(e instanceof Ln)e.forEach((s,a)=>{Ba(t,n,Ii([a,s],i,!1),r)});else if(Array.isArray(e))for(let s=0;s<e.length;s++){const a=e[s];Array.isArray(a)&&Ba(t,n,Ii(a,i,!1),r)}});function Mp(t,e,n){if(e=function(i){if(i==null)return i;const r=typeof i;if(r==="bigint")return String(ml(64,i));if(Ja(i)){if(r==="string")return _l(i);if(r==="number")return gl(i)}}(e),e!=null&&(typeof e=="string"&&af(e),e!=null))switch(vn(t,n,0),typeof e){case"number":t=t.g,Xr(e),Fr(t,it,St);break;case"bigint":n=BigInt.asUintN(64,e),n=new kc(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),Fr(t.g,n.h,n.g);break;default:n=af(e),Fr(t.g,n.h,n.g)}}function Sp(t,e,n){(e=is(e))!=null&&e!=null&&(vn(t,n,0),io(t.g,e))}function Ep(t,e,n){(e=Vd(e))!=null&&(vn(t,n,0),t.g.g.push(e?1:0))}function yp(t,e,n){(e=qr(e))!=null&&ro(t,n,Pd(e))}function Tp(t,e,n,i,r){Ba(t,n,_p(e,i),r)}function Ap(t,e,n){(e=e==null||typeof e=="string"||Fs(e)||e instanceof pi?e:void 0)!=null&&ro(t,n,wl(e).buffer)}function bp(t,e,n){return(t.h===5||t.h===2)&&(e=ss(e,0|e[me],n,!1,!1),t.h==2?no(t,Oc,e):e.push(Oc(t.g)),!0)}var ci=Zt(function(t,e,n){if(t.h!==1)return!1;var i=t.g;t=Fc(i);const r=Fc(i);i=2*(r>>31)+1;const s=r>>>20&2047;return t=4294967296*(1048575&r)+t,Jt(e,n,s==2047?t?NaN:i*(1/0):s==0?5e-324*i*t:i*Math.pow(2,s-1075)*(t+4503599627370496)),!0},function(t,e,n){(e=Gi(e))!=null&&(vn(t,n,1),t=t.g,(n=Hd||(Hd=new DataView(new ArrayBuffer(8)))).setFloat64(0,+e,!0),it=n.getUint32(0,!0),St=n.getUint32(4,!0),Ps(t,it),Ps(t,St))},Vn()),Ct=Zt(function(t,e,n){return t.h===5&&(Jt(e,n,Oc(t.g)),!0)},function(t,e,n){(e=Gi(e))!=null&&(vn(t,n,5),t=t.g,ul(e),Ps(t,it))},Fl),C3=ls(bp,function(t,e,n){if((e=cs(Gi,e))!=null)for(let a=0;a<e.length;a++){var i=t,r=n,s=e[a];s!=null&&(vn(i,r,5),i=i.g,ul(s),Ps(i,it))}},Fl),zl=ls(bp,function(t,e,n){if((e=cs(Gi,e))!=null&&e.length){vn(t,n,2),as(t.g,4*e.length);for(let i=0;i<e.length;i++)n=t.g,ul(e[i]),Ps(n,it)}},Fl),Bi=Zt(function(t,e,n){return t.h===0&&(Jt(e,n,Rl(t.g,dl)),!0)},Mp,hp),fc=Zt(function(t,e,n){return t.h===0&&(Jt(e,n,(t=Rl(t.g,dl))===0?void 0:t),!0)},Mp,hp),L3=Zt(function(t,e,n){return t.h===0&&(Jt(e,n,Rl(t.g,fl)),!0)},function(t,e,n){if((e=u3(e))!=null&&(typeof e=="string"&&sf(e),e!=null))switch(vn(t,n,0),typeof e){case"number":t=t.g,Xr(e),Fr(t,it,St);break;case"bigint":n=BigInt.asUintN(64,e),n=new Bc(Number(n&BigInt(4294967295)),Number(n>>BigInt(32))),Fr(t.g,n.h,n.g);break;default:n=sf(e),Fr(t.g,n.h,n.g)}},Vn()),Et=Zt(function(t,e,n){return t.h===0&&(Jt(e,n,Oi(t.g)),!0)},Sp,Nl),lo=ls(function(t,e,n){return(t.h===0||t.h===2)&&(e=ss(e,0|e[me],n,!1,!1),t.h==2?no(t,Oi,e):e.push(Oi(t.g)),!0)},function(t,e,n){if((e=cs(is,e))!=null&&e.length){n=Pl(t,n);for(let i=0;i<e.length;i++)io(t.g,e[i]);Dl(t,n)}},Nl),Pr=Zt(function(t,e,n){return t.h===0&&(Jt(e,n,(t=Oi(t.g))===0?void 0:t),!0)},Sp,Nl),dt=Zt(function(t,e,n){return t.h===0&&(Jt(e,n,Cl(t.g)),!0)},Ep,cp),Or=Zt(function(t,e,n){return t.h===0&&(Jt(e,n,(t=Cl(t.g))===!1?void 0:t),!0)},Ep,cp),Wt=ls(function(t,e,n){return t.h===2&&(t=Ll(t),ss(e,0|e[me],n,!1).push(t),!0)},function(t,e,n){if((e=cs(qr,e))!=null)for(let a=0;a<e.length;a++){var i=t,r=n,s=e[a];s!=null&&ro(i,r,Pd(s))}},Il),Ri=Zt(function(t,e,n){return t.h===2&&(Jt(e,n,(t=Ll(t))===""?void 0:t),!0)},yp,Il),Je=Zt(function(t,e,n){return t.h===2&&(Jt(e,n,Ll(t)),!0)},yp,Il),Pt=function(t,e,n=Ul){return new os(t,e,n)}(function(t,e,n,i,r){return t.h===2&&(i=Ii(void 0,i,!0),ss(e,0|e[me],n,!0).push(i),ks(t,i,r),!0)},function(t,e,n,i,r){if(Array.isArray(e))for(let s=0;s<e.length;s++)Tp(t,e[s],n,i,r)}),et=so(function(t,e,n,i,r,s){return t.h===2&&(Jd(e,0|e[me],s,n),ks(t,e=Al(e,i,n),r),!0)},Tp),wp=Zt(function(t,e,n){return t.h===2&&(Jt(e,n,ap(t)),!0)},Ap,up),P3=ls(function(t,e,n){return(t.h===0||t.h===2)&&(e=ss(e,0|e[me],n,!1,!1),t.h==2?no(t,xi,e):e.push(xi(t.g)),!0)},function(t,e,n){if((e=cs(Wd,e))!=null)for(let a=0;a<e.length;a++){var i=t,r=n,s=e[a];s!=null&&(vn(i,r,0),as(i.g,s))}},lp),D3=Zt(function(t,e,n){return t.h===0&&(Jt(e,n,(t=xi(t.g))===0?void 0:t),!0)},function(t,e,n){(e=Wd(e))!=null&&e!=null&&(vn(t,n,0),as(t.g,e))},lp),Dn=Zt(function(t,e,n){return t.h===0&&(Jt(e,n,Oi(t.g)),!0)},function(t,e,n){(e=is(e))!=null&&(e=parseInt(e,10),vn(t,n,0),io(t.g,e))},fp);class U3{constructor(e,n){this.h=e,this.g=n,this.l=Ke,this.m=Me,this.defaultValue=void 0}}function Wn(t,e){return new U3(t,e)}function zi(t,e){return(n,i)=>{if(pa.length){const s=pa.pop();s.o(i),uc(s.g,n,i),n=s}else n=new class{constructor(s,a){if(rf.length){const o=rf.pop();uc(o,s,a),s=o}else s=new class{constructor(o,c){this.h=null,this.m=!1,this.g=this.l=this.j=0,uc(this,o,c)}clear(){this.h=null,this.m=!1,this.g=this.l=this.j=0,this.ba=!1}}(s,a);this.g=s,this.l=this.g.g,this.h=this.m=-1,this.o(a)}o({fa:s=!1}={}){this.fa=s}}(n,i);try{const s=new t,a=s.u;Gl(e)(a,n);var r=s}finally{n.g.clear(),n.m=-1,n.h=-1,pa.length<100&&pa.push(n)}return r}}function ho(t){return function(){const e=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const a=this.g;return this.g=[],a}}}};xp(this.u,e,hr(ao,oo,co,t)),jr(e,e.g.end());const n=new Uint8Array(e.h),i=e.l,r=i.length;let s=0;for(let a=0;a<r;a++){const o=i[a];n.set(o,s),s+=o.length}return e.l=[n],n}}var hf=class extends fe{constructor(t){super(t)}},uf=[0,Ri,Zt(function(t,e,n){return t.h===2&&(Jt(e,n,(t=ap(t))===lr()?void 0:t),!0)},function(t,e,n){if(e!=null){if(e instanceof fe){const i=e.Ra;return void(i&&(e=i(e),e!=null&&ro(t,n,wl(e).buffer)))}if(Array.isArray(e))return}Ap(t,e,n)},up)];let dc,ff=globalThis.trustedTypes;function df(t){dc===void 0&&(dc=function(){let n=null;if(!ff)return n;try{const i=r=>r;n=ff.createPolicy("goog#html",{createHTML:i,createScript:i,createScriptURL:i})}catch{}return n}());var e=dc;return new class{constructor(n){this.g=n}toString(){return this.g+""}}(e?e.createScriptURL(t):t)}function I3(t,...e){if(e.length===0)return df(t[0]);let n=t[0];for(let i=0;i<e.length;i++)n+=encodeURIComponent(e[i])+t[i+1];return df(n)}var Rp=[0,Et,Dn,dt,-1,lo,Dn,-1],N3=class extends fe{constructor(t){super(t)}},Cp=[0,dt,Je,dt,Dn,-1,ls(function(t,e,n){return(t.h===0||t.h===2)&&(e=ss(e,0|e[me],n,!1,!1),t.h==2?no(t,S3,e):e.push(Oi(t.g)),!0)},function(t,e,n){if((e=cs(is,e))!=null&&e.length){n=Pl(t,n);for(let i=0;i<e.length;i++)io(t.g,e[i]);Dl(t,n)}},fp),Je,-1,[0,dt,-1],Dn,dt,-1],Lp=[0,Je,-2],pf=class extends fe{constructor(t){super(t)}},Pp=[0],Dp=[0,Et,dt,1,dt,-3],_n=class extends fe{constructor(t){super(t,2)}},Lt={};Lt[336783863]=[0,Je,dt,-1,Et,[0,[1,2,3,4,5,6,7,8],et,Pp,et,Cp,et,Lp,et,Dp,et,Rp,et,[0,Je,-2],et,[0,Je,Dn],et,[0,Dn,Je]],[0,Je],dt,[0,[1,3],[2,4],et,[0,lo],-1,et,[0,Wt],-1,Pt,[0,Je,-1]],Je];var mf=[0,fc,-1,Or,-3,fc,lo,Ri,Pr,fc,-1,Or,Pr,Or,-2,Ri];function xn(t,e){Nc(t,2,rs(e),"")}function ct(t,e){to(t,3,e)}function qe(t,e){to(t,4,e)}var $t=class extends fe{constructor(t){super(t,500)}o(t){return Me(this,0,7,t)}},Ts=[-1,{}],gf=[0,Je,1,Ts],_f=[0,Je,Wt,Ts];function Mn(t,e){Fa(t,1,$t,e)}function ht(t,e){to(t,10,e)}function $e(t,e){to(t,15,e)}var cn=class extends fe{constructor(t){super(t,500)}o(t){return Me(this,0,1001,t)}},Up=[-500,Pt,[-500,Ri,-1,Wt,-3,[-2,Lt,dt],Pt,uf,Pr,-1,gf,_f,Pt,[0,Ri,Or],Ri,mf,Pr,Wt,987,Wt],4,Pt,[-500,Je,-1,[-1,{}],998,Je],Pt,[-500,Je,Wt,-1,[-2,{},dt],997,Wt,-1],Pr,Pt,[-500,Je,Wt,Ts,998,Wt],Wt,Pr,gf,_f,Pt,[0,Ri,-1,Ts],Wt,-2,mf,Ri,-1,Or,[0,Or,D3],978,Ts,Pt,uf];cn.prototype.g=ho(Up);var F3=zi(cn,Up),O3=class extends fe{constructor(t){super(t)}},Ip=class extends fe{constructor(t){super(t)}g(){return vi(this,O3,1)}},Np=[0,Pt,[0,Et,Ct,Je,-1]],uo=zi(Ip,Np),B3=class extends fe{constructor(t){super(t)}},k3=class extends fe{constructor(t){super(t)}},pc=class extends fe{constructor(t){super(t)}h(){return Ke(this,B3,2)}g(){return vi(this,k3,5)}},Fp=zi(class extends fe{constructor(t){super(t)}},[0,Wt,lo,zl,[0,Dn,[0,Et,-3],[0,Ct,-3],[0,Et,-1,[0,Pt,[0,Et,-2]]],Pt,[0,Ct,-1,Je,Ct]],Je,-1,Bi,Pt,[0,Et,Ct],Wt,Bi]),Op=class extends fe{constructor(t){super(t)}},Br=zi(class extends fe{constructor(t){super(t)}},[0,Pt,[0,Ct,-4]]),Bp=class extends fe{constructor(t){super(t)}},Gs=zi(class extends fe{constructor(t){super(t)}},[0,Pt,[0,Ct,-4]]),G3=class extends fe{constructor(t){super(t)}},z3=[0,Et,-1,zl,Dn],kp=class extends fe{constructor(t){super(t)}};kp.prototype.g=ho([0,Ct,-4,Bi]);var H3=class extends fe{constructor(t){super(t)}},V3=zi(class extends fe{constructor(t){super(t)}},[0,Pt,[0,1,Et,Je,Np],Bi]),vf=class extends fe{constructor(t){super(t)}},W3=class extends fe{constructor(t){super(t)}oa(){const t=$d(this);return t??lr()}},X3=class extends fe{constructor(t){super(t)}},Gp=[1,2],q3=zi(class extends fe{constructor(t){super(t)}},[0,Pt,[0,Gp,et,[0,zl],et,[0,wp],Et,Je],Bi]),Hl=class extends fe{constructor(t){super(t)}},zp=[0,Je,Et,Ct,Wt,-1],xf=class extends fe{constructor(t){super(t)}},Y3=[0,dt,-1],Mf=class extends fe{constructor(t){super(t)}},Sa=[1,2,3,4,5],ka=class extends fe{constructor(t){super(t)}g(){return $d(this)!=null}h(){return Pn(this,2)!=null}},pt=class extends fe{constructor(t){super(t)}g(){return Vd(Yr(this,2))??!1}},Hp=[0,wp,Je,[0,Et,Bi,-1],[0,L3,Bi]],bt=[0,Hp,dt,[0,Sa,et,Dp,et,Cp,et,Rp,et,Pp,et,Lp],Dn],fo=class extends fe{constructor(t){super(t)}},Vl=[0,bt,Ct,-1,Et],j3=Wn(502141897,fo);Lt[502141897]=Vl;var K3=zi(class extends fe{constructor(t){super(t)}},[0,[0,Dn,-1,C3,P3],z3]),Vp=class extends fe{constructor(t){super(t)}},Wp=class extends fe{constructor(t){super(t)}},Wl=[0,bt,Ct,[0,bt],dt],Xp=[0,bt,Vl,Wl,Ct,[0,[0,Hp]]],$3=Wn(508968150,Wp);Lt[508968150]=Xp,Lt[508968149]=Wl;var qp=class extends fe{constructor(t){super(t)}},Z3=Wn(513916220,qp);Lt[513916220]=[0,bt,Xp,Et];var wr=class extends fe{constructor(t){super(t)}h(){return Ke(this,Hl,2)}g(){ot(this,2)}},Yp=[0,bt,zp];Lt[478825465]=Yp;var J3=class extends fe{constructor(t){super(t)}},jp=class extends fe{constructor(t){super(t)}},Xl=class extends fe{constructor(t){super(t)}},ql=class extends fe{constructor(t){super(t)}},Kp=class extends fe{constructor(t){super(t)}},Sf=[0,bt,[0,bt],Yp,-1],$p=[0,bt,Ct,Et],Yl=[0,bt,Ct],Zp=[0,bt,$p,Yl,Ct],Q3=Wn(479097054,Kp);Lt[479097054]=[0,bt,Zp,Sf],Lt[463370452]=Sf,Lt[464864288]=$p;var ex=Wn(462713202,ql);Lt[462713202]=Zp,Lt[474472470]=Yl;var tx=class extends fe{constructor(t){super(t)}},Jp=class extends fe{constructor(t){super(t)}},Qp=class extends fe{constructor(t){super(t)}},em=class extends fe{constructor(t){super(t)}},jl=[0,bt,Ct,-1,Et],Gc=[0,bt,Ct,dt];em.prototype.g=ho([0,bt,Yl,[0,bt],Vl,Wl,jl,Gc]);var tm=class extends fe{constructor(t){super(t)}},nx=Wn(456383383,tm);Lt[456383383]=[0,bt,zp];var nm=class extends fe{constructor(t){super(t)}},ix=Wn(476348187,nm);Lt[476348187]=[0,bt,Y3];var im=class extends fe{constructor(t){super(t)}},Ef=class extends fe{constructor(t){super(t)}},rm=[0,Dn,-1],rx=Wn(458105876,class extends fe{constructor(t){super(t)}g(){var t=this.u;const e=0|t[me],n=2&e;return t=function(i,r,s){var a=Ef;const o=2&r;let c=!1;if(s==null){if(o)return nf();s=[]}else if(s.constructor===Ln){if(!(2&s.L)||o)return s;s=s.X()}else Array.isArray(s)?c=!!(2&(0|s[me])):s=[];if(o){if(!s.length)return nf();c||(c=!0,ns(s))}else c&&(c=!1,s=Zd(s));return c||(64&(0|s[me])?s[me]&=-33:32&r&&Ya(s,32)),_t(i,r,2,a=new Ln(s,a,f3,void 0)),a}(t,e,Mi(t,e,2)),!n&&Ef&&(t.ra=!0),t}});Lt[458105876]=[0,rm,R3,[!0,Bi,[0,Je,-1,Wt]]];var Kl=class extends fe{constructor(t){super(t)}},sm=Wn(458105758,Kl);Lt[458105758]=[0,bt,Je,rm];var am=class extends fe{constructor(t){super(t)}},sx=Wn(443442058,am);Lt[443442058]=[0,bt,Je,Et,Ct,Wt,-1,dt,Ct],Lt[514774813]=jl;var om=class extends fe{constructor(t){super(t)}},ax=Wn(516587230,om);function zc(t,e){return e=e?e.clone():new Hl,t.displayNamesLocale!==void 0?ot(e,1,rs(t.displayNamesLocale)):t.displayNamesLocale===void 0&&ot(e,1),t.maxResults!==void 0?Qn(e,2,t.maxResults):"maxResults"in t&&ot(e,2),t.scoreThreshold!==void 0?de(e,3,t.scoreThreshold):"scoreThreshold"in t&&ot(e,3),t.categoryAllowlist!==void 0?Oa(e,4,t.categoryAllowlist):"categoryAllowlist"in t&&ot(e,4),t.categoryDenylist!==void 0?Oa(e,5,t.categoryDenylist):"categoryDenylist"in t&&ot(e,5),e}function $l(t,e=-1,n=""){return{categories:t.map(i=>({index:Cn(i,1)??0??-1,score:Tt(i,2)??0,categoryName:Pn(i,3)??""??"",displayName:Pn(i,4)??""??""})),headIndex:e,headName:n}}function cm(t){var a,o;var e=tr(t,3,Gi,er()),n=tr(t,2,is,er()),i=tr(t,1,qr,er()),r=tr(t,9,qr,er());const s={categories:[],keypoints:[]};for(let c=0;c<e.length;c++)s.categories.push({score:e[c],index:n[c]??-1,categoryName:i[c]??"",displayName:r[c]??""});if((e=(a=Ke(t,pc,4))==null?void 0:a.h())&&(s.boundingBox={originX:Cn(e,1)??0,originY:Cn(e,2)??0,width:Cn(e,3)??0,height:Cn(e,4)??0,angle:0}),(o=Ke(t,pc,4))==null?void 0:o.g().length)for(const c of Ke(t,pc,4).g())s.keypoints.push({x:xa(c,1)??0,y:xa(c,2)??0,score:xa(c,4)??0,label:Pn(c,3)??""});return s}function po(t){const e=[];for(const n of vi(t,Bp,1))e.push({x:Tt(n,1)??0,y:Tt(n,2)??0,z:Tt(n,3)??0,visibility:Tt(n,4)??0});return e}function As(t){const e=[];for(const n of vi(t,Op,1))e.push({x:Tt(n,1)??0,y:Tt(n,2)??0,z:Tt(n,3)??0,visibility:Tt(n,4)??0});return e}function yf(t){return Array.from(t,e=>e>127?e-256:e)}function Tf(t,e){if(t.length!==e.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${t.length} vs. ${e.length}).`);let n=0,i=0,r=0;for(let s=0;s<t.length;s++)n+=t[s]*e[s],i+=t[s]*t[s],r+=e[s]*e[s];if(i<=0||r<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(i*r)}let ma;Lt[516587230]=[0,bt,jl,Gc,Ct],Lt[518928384]=Gc;const ox=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function lm(){if(ma===void 0)try{await WebAssembly.instantiate(ox),ma=!0}catch{ma=!1}return ma}async function vs(t,e=I3``){const n=await lm()?"wasm_internal":"wasm_nosimd_internal";return{wasmLoaderPath:`${e}/${t}_${n}.js`,wasmBinaryPath:`${e}/${t}_${n}.wasm`}}var Zi=class{};function hm(){var t=navigator;return typeof OffscreenCanvas<"u"&&(!function(e=navigator){return(e=e.userAgent).includes("Safari")&&!e.includes("Chrome")}(t)||!!((t=t.userAgent.match(/Version\/([\d]+).*Safari/))&&t.length>=1&&Number(t[1])>=17))}async function Af(t){if(typeof importScripts!="function"){const e=document.createElement("script");return e.src=t.toString(),e.crossOrigin="anonymous",new Promise((n,i)=>{e.addEventListener("load",()=>{n()},!1),e.addEventListener("error",r=>{i(r)},!1),document.body.appendChild(e)})}importScripts(t.toString())}function um(t){return t.videoWidth!==void 0?[t.videoWidth,t.videoHeight]:t.naturalWidth!==void 0?[t.naturalWidth,t.naturalHeight]:t.displayWidth!==void 0?[t.displayWidth,t.displayHeight]:[t.width,t.height]}function pe(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(e=t.i.stringToNewUTF8(e)),t.i._free(e)}function bf(t,e,n){if(!t.i.canvas)throw Error("No OpenGL canvas configured.");if(n?t.i._bindTextureToStream(n):t.i._bindTextureToCanvas(),!(n=t.i.canvas.getContext("webgl2")||t.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,e),t.i.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);const[i,r]=um(e);return!t.l||i===t.i.canvas.width&&r===t.i.canvas.height||(t.i.canvas.width=i,t.i.canvas.height=r),[i,r]}function wf(t,e,n){t.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const i=new Uint32Array(e.length);for(let r=0;r<e.length;r++)i[r]=t.i.stringToNewUTF8(e[r]);e=t.i._malloc(4*i.length),t.i.HEAPU32.set(i,e>>2),n(e);for(const r of i)t.i._free(r);t.i._free(e)}function Yn(t,e,n){t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=n}function bi(t,e,n){let i=[];t.i.simpleListeners=t.i.simpleListeners||{},t.i.simpleListeners[e]=(r,s,a)=>{s?(n(i,a),i=[]):i.push(r)}}Zi.forVisionTasks=function(t){return vs("vision",t)},Zi.forTextTasks=function(t){return vs("text",t)},Zi.forGenAiExperimentalTasks=function(t){return vs("genai_experimental",t)},Zi.forGenAiTasks=function(t){return vs("genai",t)},Zi.forAudioTasks=function(t){return vs("audio",t)},Zi.isSimdSupported=function(){return lm()};async function cx(t,e,n,i){return t=await(async(r,s,a,o,c)=>{if(s&&await Af(s),!self.ModuleFactory||a&&(await Af(a),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&c&&((s=self.Module).locateFile=c.locateFile,c.mainScriptUrlOrBlob&&(s.mainScriptUrlOrBlob=c.mainScriptUrlOrBlob)),c=await self.ModuleFactory(self.Module||c),self.ModuleFactory=self.Module=void 0,new r(c,o)})(t,n.wasmLoaderPath,n.assetLoaderPath,e,{locateFile:r=>r.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&r.endsWith(".data")?n.assetBinaryPath.toString():r}),await t.o(i),t}function mc(t,e){const n=Ke(t.baseOptions,ka,1)||new ka;typeof e=="string"?(ot(n,2,rs(e)),ot(n,1)):e instanceof Uint8Array&&(ot(n,1,ll(e,!1)),ot(n,2)),Me(t.baseOptions,0,1,n)}function Rf(t){try{const e=t.G.length;if(e===1)throw Error(t.G[0].message);if(e>1)throw Error("Encountered multiple errors: "+t.G.map(n=>n.message).join(", "))}finally{t.G=[]}}function le(t,e){t.B=Math.max(t.B,e)}function mo(t,e){t.A=new $t,xn(t.A,"PassThroughCalculator"),ct(t.A,"free_memory"),qe(t.A,"free_memory_unused_out"),ht(e,"free_memory"),Mn(e,t.A)}function Kr(t,e){ct(t.A,e),qe(t.A,e+"_unused_out")}function go(t){t.g.addBoolToStream(!0,"free_memory",t.B)}var Ea=class{constructor(t){this.g=t,this.G=[],this.B=0,this.g.setAutoRenderToScreen(!1)}l(t,e=!0){var n,i,r,s,a,o;if(e){const c=t.baseOptions||{};if((n=t.baseOptions)!=null&&n.modelAssetBuffer&&((i=t.baseOptions)!=null&&i.modelAssetPath))throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!((r=Ke(this.baseOptions,ka,1))!=null&&r.g()||(s=Ke(this.baseOptions,ka,1))!=null&&s.h()||(a=t.baseOptions)!=null&&a.modelAssetBuffer||(o=t.baseOptions)!=null&&o.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if(function(l,h){let f=Ke(l.baseOptions,Mf,3);if(!f){var d=f=new Mf,m=new pf;ys(d,4,Sa,m)}"delegate"in h&&(h.delegate==="GPU"?(h=f,d=new N3,ys(h,2,Sa,d)):(h=f,d=new pf,ys(h,4,Sa,d))),Me(l.baseOptions,0,3,f)}(this,c),c.modelAssetPath)return fetch(c.modelAssetPath.toString()).then(l=>{if(l.ok)return l.arrayBuffer();throw Error(`Failed to fetch model: ${c.modelAssetPath} (${l.status})`)}).then(l=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(l),!0,!1,!1),mc(this,"/model.dat"),this.m(),this.I()});if(c.modelAssetBuffer instanceof Uint8Array)mc(this,c.modelAssetBuffer);else if(c.modelAssetBuffer)return async function(l){const h=[];for(var f=0;;){const{done:d,value:m}=await l.read();if(d)break;h.push(m),f+=m.length}if(h.length===0)return new Uint8Array(0);if(h.length===1)return h[0];l=new Uint8Array(f),f=0;for(const d of h)l.set(d,f),f+=d.length;return l}(c.modelAssetBuffer).then(l=>{mc(this,l),this.m(),this.I()})}return this.m(),this.I(),Promise.resolve()}I(){}da(){let t;if(this.g.da(e=>{t=F3(e)}),!t)throw Error("Failed to retrieve CalculatorGraphConfig");return t}setGraph(t,e){this.g.attachErrorListener((n,i)=>{this.G.push(Error(i))}),this.g.La(),this.g.setGraph(t,e),this.A=void 0,Rf(this)}finishProcessing(){this.g.finishProcessing(),Rf(this)}close(){this.A=void 0,this.g.closeGraph()}};function gi(t,e){if(!t)throw Error(`Unable to obtain required WebGL resource: ${e}`);return t}Ea.prototype.close=Ea.prototype.close,function(t,e){t=t.split(".");var n,i=cr;for((t[0]in i)||i.execScript===void 0||i.execScript("var "+t[0]);t.length&&(n=t.shift());)t.length||e===void 0?i=i[n]&&i[n]!==Object.prototype[n]?i[n]:i[n]={}:i[n]=e}("TaskRunner",Ea);class lx{constructor(e,n,i,r){this.g=e,this.h=n,this.m=i,this.l=r}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function Cf(t,e,n){const i=t.g;if(n=gi(i.createShader(n),"Failed to create WebGL shader"),i.shaderSource(n,e),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(n)}`);return i.attachShader(t.h,n),n}function Lf(t,e){const n=t.g,i=gi(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(i);const r=gi(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,r),n.enableVertexAttribArray(t.O),n.vertexAttribPointer(t.O,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);const s=gi(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(t.I),n.vertexAttribPointer(t.I,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(e?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new lx(n,i,r,s)}function Zl(t,e){if(t.g){if(e!==t.g)throw Error("Cannot change GL context once initialized")}else t.g=e}function Jl(t,e,n,i){return Zl(t,e),t.h||(t.m(),t.C()),n?(t.s||(t.s=Lf(t,!0)),n=t.s):(t.v||(t.v=Lf(t,!1)),n=t.v),e.useProgram(t.h),n.bind(),t.l(),t=i(),n.g.bindVertexArray(null),t}function _o(t,e,n){return Zl(t,e),t=gi(e.createTexture(),"Failed to create texture"),e.bindTexture(e.TEXTURE_2D,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,n??e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,n??e.LINEAR),e.bindTexture(e.TEXTURE_2D,null),t}function vo(t,e,n){Zl(t,e),t.A||(t.A=gi(e.createFramebuffer(),"Failed to create framebuffe.")),e.bindFramebuffer(e.FRAMEBUFFER,t.A),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0)}function Ql(t){var e;(e=t.g)==null||e.bindFramebuffer(t.g.FRAMEBUFFER,null)}var eh=class{G(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){const t=this.g;if(this.h=gi(t.createProgram(),"Failed to create WebGL program"),this.aa=Cf(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,t.VERTEX_SHADER),this.Z=Cf(this,this.G(),t.FRAGMENT_SHADER),t.linkProgram(this.h),!t.getProgramParameter(this.h,t.LINK_STATUS))throw Error(`Error during program linking: ${t.getProgramInfoLog(this.h)}`);this.O=t.getAttribLocation(this.h,"aVertex"),this.I=t.getAttribLocation(this.h,"aTex")}C(){}l(){}close(){if(this.h){const t=this.g;t.deleteProgram(this.h),t.deleteShader(this.aa),t.deleteShader(this.Z)}this.A&&this.g.deleteFramebuffer(this.A),this.v&&this.v.close(),this.s&&this.s.close()}};function hi(t,e){switch(e){case 0:return t.g.find(n=>n instanceof Uint8Array);case 1:return t.g.find(n=>n instanceof Float32Array);case 2:return t.g.find(n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture);default:throw Error(`Type is not supported: ${e}`)}}function Hc(t){var e=hi(t,1);if(!e){if(e=hi(t,0))e=new Float32Array(e).map(i=>i/255);else{e=new Float32Array(t.width*t.height);const i=$r(t);var n=th(t);if(vo(n,i,fm(t)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){n=new Float32Array(t.width*t.height*4),i.readPixels(0,0,t.width,t.height,i.RGBA,i.FLOAT,n);for(let r=0,s=0;r<e.length;++r,s+=4)e[r]=n[s]}else i.readPixels(0,0,t.width,t.height,i.RED,i.FLOAT,e)}t.g.push(e)}return e}function fm(t){let e=hi(t,2);if(!e){const n=$r(t);e=pm(t);const i=Hc(t),r=dm(t);n.texImage2D(n.TEXTURE_2D,0,r,t.width,t.height,0,n.RED,n.FLOAT,i),Vc(t)}return e}function $r(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return t.h||(t.h=gi(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.h}function dm(t){if(t=$r(t),!ga)if(t.getExtension("EXT_color_buffer_float")&&t.getExtension("OES_texture_float_linear")&&t.getExtension("EXT_float_blend"))ga=t.R32F;else{if(!t.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");ga=t.R16F}return ga}function th(t){return t.l||(t.l=new eh),t.l}function pm(t){const e=$r(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);let n=hi(t,2);return n||(n=_o(th(t),e,t.m?e.LINEAR:e.NEAREST),t.g.push(n),t.j=!0),e.bindTexture(e.TEXTURE_2D,n),n}function Vc(t){t.h.bindTexture(t.h.TEXTURE_2D,null)}var ga,Ot=class{constructor(t,e,n,i,r,s,a){this.g=t,this.m=e,this.j=n,this.canvas=i,this.l=r,this.width=s,this.height=a,this.j&&--Pf===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Fa(){return!!hi(this,0)}ja(){return!!hi(this,1)}P(){return!!hi(this,2)}ia(){return(e=hi(t=this,0))||(e=Hc(t),e=new Uint8Array(e.map(n=>255*n)),t.g.push(e)),e;var t,e}ha(){return Hc(this)}M(){return fm(this)}clone(){const t=[];for(const e of this.g){let n;if(e instanceof Uint8Array)n=new Uint8Array(e);else if(e instanceof Float32Array)n=new Float32Array(e);else{if(!(e instanceof WebGLTexture))throw Error(`Type is not supported: ${e}`);{const i=$r(this),r=th(this);i.activeTexture(i.TEXTURE1),n=_o(r,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,n);const s=dm(this);i.texImage2D(i.TEXTURE_2D,0,s,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),vo(r,i,n),Jl(r,i,!1,()=>{pm(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Vc(this)}),Ql(r),Vc(this)}}t.push(n)}return new Ot(t,this.m,this.P(),this.canvas,this.l,this.width,this.height)}close(){this.j&&$r(this).deleteTexture(hi(this,2)),Pf=-1}};Ot.prototype.close=Ot.prototype.close,Ot.prototype.clone=Ot.prototype.clone,Ot.prototype.getAsWebGLTexture=Ot.prototype.M,Ot.prototype.getAsFloat32Array=Ot.prototype.ha,Ot.prototype.getAsUint8Array=Ot.prototype.ia,Ot.prototype.hasWebGLTexture=Ot.prototype.P,Ot.prototype.hasFloat32Array=Ot.prototype.ja,Ot.prototype.hasUint8Array=Ot.prototype.Fa;var Pf=250;function Zn(t,e){switch(e){case 0:return t.g.find(n=>n instanceof ImageData);case 1:return t.g.find(n=>typeof ImageBitmap<"u"&&n instanceof ImageBitmap);case 2:return t.g.find(n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture);default:throw Error(`Type is not supported: ${e}`)}}function mm(t){var e=Zn(t,0);if(!e){e=Zr(t);const n=xo(t),i=new Uint8Array(t.width*t.height*4);vo(n,e,ya(t)),e.readPixels(0,0,t.width,t.height,e.RGBA,e.UNSIGNED_BYTE,i),Ql(n),e=new ImageData(new Uint8ClampedArray(i.buffer),t.width,t.height),t.g.push(e)}return e}function ya(t){let e=Zn(t,2);if(!e){const n=Zr(t);e=Ta(t);const i=Zn(t,1)||mm(t);n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,i),Ss(t)}return e}function Zr(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return t.h||(t.h=gi(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.h}function xo(t){return t.l||(t.l=new eh),t.l}function Ta(t){const e=Zr(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);let n=Zn(t,2);return n||(n=_o(xo(t),e),t.g.push(n),t.m=!0),e.bindTexture(e.TEXTURE_2D,n),n}function Ss(t){t.h.bindTexture(t.h.TEXTURE_2D,null)}function Df(t){const e=Zr(t);return Jl(xo(t),e,!0,()=>function(n,i){const r=n.canvas;if(r.width===n.width&&r.height===n.height)return i();const s=r.width,a=r.height;return r.width=n.width,r.height=n.height,n=i(),r.width=s,r.height=a,n}(t,()=>{if(e.bindFramebuffer(e.FRAMEBUFFER,null),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.drawArrays(e.TRIANGLE_FAN,0,4),!(t.canvas instanceof OffscreenCanvas))throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");return t.canvas.transferToImageBitmap()}))}var Bt=class{constructor(t,e,n,i,r,s,a){this.g=t,this.j=e,this.m=n,this.canvas=i,this.l=r,this.width=s,this.height=a,(this.j||this.m)&&--Uf===0&&console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources.")}Ea(){return!!Zn(this,0)}ka(){return!!Zn(this,1)}P(){return!!Zn(this,2)}Ca(){return mm(this)}Ba(){var t=Zn(this,1);return t||(ya(this),Ta(this),t=Df(this),Ss(this),this.g.push(t),this.j=!0),t}M(){return ya(this)}clone(){const t=[];for(const e of this.g){let n;if(e instanceof ImageData)n=new ImageData(e.data,this.width,this.height);else if(e instanceof WebGLTexture){const i=Zr(this),r=xo(this);i.activeTexture(i.TEXTURE1),n=_o(r,i),i.bindTexture(i.TEXTURE_2D,n),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,this.width,this.height,0,i.RGBA,i.UNSIGNED_BYTE,null),i.bindTexture(i.TEXTURE_2D,null),vo(r,i,n),Jl(r,i,!1,()=>{Ta(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Ss(this)}),Ql(r),Ss(this)}else{if(!(e instanceof ImageBitmap))throw Error(`Type is not supported: ${e}`);ya(this),Ta(this),n=Df(this),Ss(this)}t.push(n)}return new Bt(t,this.ka(),this.P(),this.canvas,this.l,this.width,this.height)}close(){this.j&&Zn(this,1).close(),this.m&&Zr(this).deleteTexture(Zn(this,2)),Uf=-1}};Bt.prototype.close=Bt.prototype.close,Bt.prototype.clone=Bt.prototype.clone,Bt.prototype.getAsWebGLTexture=Bt.prototype.M,Bt.prototype.getAsImageBitmap=Bt.prototype.Ba,Bt.prototype.getAsImageData=Bt.prototype.Ca,Bt.prototype.hasWebGLTexture=Bt.prototype.P,Bt.prototype.hasImageBitmap=Bt.prototype.ka,Bt.prototype.hasImageData=Bt.prototype.Ea;var Uf=250;function Xn(...t){return t.map(([e,n])=>({start:e,end:n}))}const hx=function(t){return class extends t{La(){this.i._registerModelResourcesGraphService()}}}((If=class{constructor(t,e){this.l=!0,this.i=t,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",e!==void 0?this.i.canvas=e:hm()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(t){const e=await(await fetch(t)).arrayBuffer();t=!(t.endsWith(".pbtxt")||t.endsWith(".textproto")),this.setGraph(new Uint8Array(e),t)}setGraphFromString(t){this.setGraph(new TextEncoder().encode(t),!1)}setGraph(t,e){const n=t.length,i=this.i._malloc(n);this.i.HEAPU8.set(t,i),e?this.i._changeBinaryGraph(n,i):this.i._changeTextGraph(n,i),this.i._free(i)}configureAudio(t,e,n,i,r){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),pe(this,i||"input_audio",s=>{pe(this,r=r||"audio_header",a=>{this.i._configureAudio(s,a,t,e??0,n)})})}setAutoResizeCanvas(t){this.l=t}setAutoRenderToScreen(t){this.i._setAutoRenderToScreen(t)}setGpuBufferVerticalFlip(t){this.i.gpuOriginForWebTexturesIsBottomLeft=t}da(t){Yn(this,"__graph_config__",e=>{t(e)}),pe(this,"__graph_config__",e=>{this.i._getGraphConfig(e,void 0)}),delete this.i.simpleListeners.__graph_config__}attachErrorListener(t){this.i.errorListener=t}attachEmptyPacketListener(t,e){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[t]=e}addAudioToStream(t,e,n){this.addAudioToStreamWithShape(t,0,0,e,n)}addAudioToStreamWithShape(t,e,n,i,r){const s=4*t.length;this.h!==s&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(s),this.h=s),this.i.HEAPF32.set(t,this.g/4),pe(this,i,a=>{this.i._addAudioToInputStream(this.g,e,n,a,r)})}addGpuBufferToStream(t,e,n){pe(this,e,i=>{const[r,s]=bf(this,t,i);this.i._addBoundTextureToStream(i,r,s,n)})}addBoolToStream(t,e,n){pe(this,e,i=>{this.i._addBoolToInputStream(t,i,n)})}addDoubleToStream(t,e,n){pe(this,e,i=>{this.i._addDoubleToInputStream(t,i,n)})}addFloatToStream(t,e,n){pe(this,e,i=>{this.i._addFloatToInputStream(t,i,n)})}addIntToStream(t,e,n){pe(this,e,i=>{this.i._addIntToInputStream(t,i,n)})}addUintToStream(t,e,n){pe(this,e,i=>{this.i._addUintToInputStream(t,i,n)})}addStringToStream(t,e,n){pe(this,e,i=>{pe(this,t,r=>{this.i._addStringToInputStream(r,i,n)})})}addStringRecordToStream(t,e,n){pe(this,e,i=>{wf(this,Object.keys(t),r=>{wf(this,Object.values(t),s=>{this.i._addFlatHashMapToInputStream(r,s,Object.keys(t).length,i,n)})})})}addProtoToStream(t,e,n,i){pe(this,n,r=>{pe(this,e,s=>{const a=this.i._malloc(t.length);this.i.HEAPU8.set(t,a),this.i._addProtoToInputStream(a,t.length,s,r,i),this.i._free(a)})})}addEmptyPacketToStream(t,e){pe(this,t,n=>{this.i._addEmptyPacketToInputStream(n,e)})}addBoolVectorToStream(t,e,n){pe(this,e,i=>{const r=this.i._allocateBoolVector(t.length);if(!r)throw Error("Unable to allocate new bool vector on heap.");for(const s of t)this.i._addBoolVectorEntry(r,s);this.i._addBoolVectorToInputStream(r,i,n)})}addDoubleVectorToStream(t,e,n){pe(this,e,i=>{const r=this.i._allocateDoubleVector(t.length);if(!r)throw Error("Unable to allocate new double vector on heap.");for(const s of t)this.i._addDoubleVectorEntry(r,s);this.i._addDoubleVectorToInputStream(r,i,n)})}addFloatVectorToStream(t,e,n){pe(this,e,i=>{const r=this.i._allocateFloatVector(t.length);if(!r)throw Error("Unable to allocate new float vector on heap.");for(const s of t)this.i._addFloatVectorEntry(r,s);this.i._addFloatVectorToInputStream(r,i,n)})}addIntVectorToStream(t,e,n){pe(this,e,i=>{const r=this.i._allocateIntVector(t.length);if(!r)throw Error("Unable to allocate new int vector on heap.");for(const s of t)this.i._addIntVectorEntry(r,s);this.i._addIntVectorToInputStream(r,i,n)})}addUintVectorToStream(t,e,n){pe(this,e,i=>{const r=this.i._allocateUintVector(t.length);if(!r)throw Error("Unable to allocate new unsigned int vector on heap.");for(const s of t)this.i._addUintVectorEntry(r,s);this.i._addUintVectorToInputStream(r,i,n)})}addStringVectorToStream(t,e,n){pe(this,e,i=>{const r=this.i._allocateStringVector(t.length);if(!r)throw Error("Unable to allocate new string vector on heap.");for(const s of t)pe(this,s,a=>{this.i._addStringVectorEntry(r,a)});this.i._addStringVectorToInputStream(r,i,n)})}addBoolToInputSidePacket(t,e){pe(this,e,n=>{this.i._addBoolToInputSidePacket(t,n)})}addDoubleToInputSidePacket(t,e){pe(this,e,n=>{this.i._addDoubleToInputSidePacket(t,n)})}addFloatToInputSidePacket(t,e){pe(this,e,n=>{this.i._addFloatToInputSidePacket(t,n)})}addIntToInputSidePacket(t,e){pe(this,e,n=>{this.i._addIntToInputSidePacket(t,n)})}addUintToInputSidePacket(t,e){pe(this,e,n=>{this.i._addUintToInputSidePacket(t,n)})}addStringToInputSidePacket(t,e){pe(this,e,n=>{pe(this,t,i=>{this.i._addStringToInputSidePacket(i,n)})})}addProtoToInputSidePacket(t,e,n){pe(this,n,i=>{pe(this,e,r=>{const s=this.i._malloc(t.length);this.i.HEAPU8.set(t,s),this.i._addProtoToInputSidePacket(s,t.length,r,i),this.i._free(s)})})}addBoolVectorToInputSidePacket(t,e){pe(this,e,n=>{const i=this.i._allocateBoolVector(t.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(const r of t)this.i._addBoolVectorEntry(i,r);this.i._addBoolVectorToInputSidePacket(i,n)})}addDoubleVectorToInputSidePacket(t,e){pe(this,e,n=>{const i=this.i._allocateDoubleVector(t.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(const r of t)this.i._addDoubleVectorEntry(i,r);this.i._addDoubleVectorToInputSidePacket(i,n)})}addFloatVectorToInputSidePacket(t,e){pe(this,e,n=>{const i=this.i._allocateFloatVector(t.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(const r of t)this.i._addFloatVectorEntry(i,r);this.i._addFloatVectorToInputSidePacket(i,n)})}addIntVectorToInputSidePacket(t,e){pe(this,e,n=>{const i=this.i._allocateIntVector(t.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(const r of t)this.i._addIntVectorEntry(i,r);this.i._addIntVectorToInputSidePacket(i,n)})}addUintVectorToInputSidePacket(t,e){pe(this,e,n=>{const i=this.i._allocateUintVector(t.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(const r of t)this.i._addUintVectorEntry(i,r);this.i._addUintVectorToInputSidePacket(i,n)})}addStringVectorToInputSidePacket(t,e){pe(this,e,n=>{const i=this.i._allocateStringVector(t.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(const r of t)pe(this,r,s=>{this.i._addStringVectorEntry(i,s)});this.i._addStringVectorToInputSidePacket(i,n)})}attachBoolListener(t,e){Yn(this,t,e),pe(this,t,n=>{this.i._attachBoolListener(n)})}attachBoolVectorListener(t,e){bi(this,t,e),pe(this,t,n=>{this.i._attachBoolVectorListener(n)})}attachIntListener(t,e){Yn(this,t,e),pe(this,t,n=>{this.i._attachIntListener(n)})}attachIntVectorListener(t,e){bi(this,t,e),pe(this,t,n=>{this.i._attachIntVectorListener(n)})}attachUintListener(t,e){Yn(this,t,e),pe(this,t,n=>{this.i._attachUintListener(n)})}attachUintVectorListener(t,e){bi(this,t,e),pe(this,t,n=>{this.i._attachUintVectorListener(n)})}attachDoubleListener(t,e){Yn(this,t,e),pe(this,t,n=>{this.i._attachDoubleListener(n)})}attachDoubleVectorListener(t,e){bi(this,t,e),pe(this,t,n=>{this.i._attachDoubleVectorListener(n)})}attachFloatListener(t,e){Yn(this,t,e),pe(this,t,n=>{this.i._attachFloatListener(n)})}attachFloatVectorListener(t,e){bi(this,t,e),pe(this,t,n=>{this.i._attachFloatVectorListener(n)})}attachStringListener(t,e){Yn(this,t,e),pe(this,t,n=>{this.i._attachStringListener(n)})}attachStringVectorListener(t,e){bi(this,t,e),pe(this,t,n=>{this.i._attachStringVectorListener(n)})}attachProtoListener(t,e,n){Yn(this,t,e),pe(this,t,i=>{this.i._attachProtoListener(i,n||!1)})}attachProtoVectorListener(t,e,n){bi(this,t,e),pe(this,t,i=>{this.i._attachProtoVectorListener(i,n||!1)})}attachAudioListener(t,e,n){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),Yn(this,t,(i,r)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),e(i,r)}),pe(this,t,i=>{this.i._attachAudioListener(i,n||!1)})}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends If{get ea(){return this.i}qa(t,e,n){pe(this,e,i=>{const[r,s]=bf(this,t,i);this.ea._addBoundTextureAsImageToStream(i,r,s,n)})}U(t,e){Yn(this,t,e),pe(this,t,n=>{this.ea._attachImageListener(n)})}ca(t,e){bi(this,t,e),pe(this,t,n=>{this.ea._attachImageVectorListener(n)})}}));var If,Un=class extends hx{};async function Xe(t,e,n){return async function(i,r,s,a){return cx(i,r,s,a)}(t,n.canvas??(hm()?void 0:document.createElement("canvas")),e,n)}function gm(t,e,n,i){if(t.T){const s=new kp;if(n!=null&&n.regionOfInterest){if(!t.pa)throw Error("This task doesn't support region-of-interest.");var r=n.regionOfInterest;if(r.left>=r.right||r.top>=r.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(r.left<0||r.top<0||r.right>1||r.bottom>1)throw Error("Expected RectF values to be in [0,1].");de(s,1,(r.left+r.right)/2),de(s,2,(r.top+r.bottom)/2),de(s,4,r.right-r.left),de(s,3,r.bottom-r.top)}else de(s,1,.5),de(s,2,.5),de(s,4,1),de(s,3,1);if(n!=null&&n.rotationDegrees){if((n==null?void 0:n.rotationDegrees)%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(de(s,5,-Math.PI*n.rotationDegrees/180),(n==null?void 0:n.rotationDegrees)%180!=0){const[a,o]=um(e);n=Tt(s,3)*o/a,r=Tt(s,4)*a/o,de(s,4,n),de(s,3,r)}}t.g.addProtoToStream(s.g(),"mediapipe.NormalizedRect",t.T,i)}t.g.qa(e,t.aa,i??performance.now()),t.finishProcessing()}function In(t,e,n){var i;if((i=t.baseOptions)!=null&&i.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");gm(t,e,n,t.B+1)}function ei(t,e,n,i){var r;if(!((r=t.baseOptions)!=null&&r.g()))throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");gm(t,e,n,i)}function Jr(t,e,n,i){var r=e.data;const s=e.width,a=s*(e=e.height);if((r instanceof Uint8Array||r instanceof Float32Array)&&r.length!==a)throw Error("Unsupported channel count: "+r.length/a);return t=new Ot([r],n,!1,t.g.i.canvas,t.O,s,e),i?t.clone():t}var on=class extends Ea{constructor(t,e,n,i){super(t),this.g=t,this.aa=e,this.T=n,this.pa=i,this.O=new eh}l(t,e=!0){if("runningMode"in t&&Ls(this.baseOptions,2,!!t.runningMode&&t.runningMode!=="IMAGE"),t.canvas!==void 0&&this.g.i.canvas!==t.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(t,e)}close(){this.O.close(),super.close()}};on.prototype.close=on.prototype.close;var yn=class extends on{constructor(t,e){super(new Un(t,e),"image_in","norm_rect_in",!1),this.j={detections:[]},Me(t=this.h=new fo,0,1,e=new pt),de(this.h,2,.5),de(this.h,3,.3)}get baseOptions(){return Ke(this.h,pt,1)}set baseOptions(t){Me(this.h,0,1,t)}o(t){return"minDetectionConfidence"in t&&de(this.h,2,t.minDetectionConfidence??.5),"minSuppressionThreshold"in t&&de(this.h,3,t.minSuppressionThreshold??.3),this.l(t)}D(t,e){return this.j={detections:[]},In(this,t,e),this.j}F(t,e,n){return this.j={detections:[]},ei(this,t,n,e),this.j}m(){var t=new cn;ht(t,"image_in"),ht(t,"norm_rect_in"),$e(t,"detections");const e=new _n;Hn(e,j3,this.h);const n=new $t;xn(n,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),ct(n,"IMAGE:image_in"),ct(n,"NORM_RECT:norm_rect_in"),qe(n,"DETECTIONS:detections"),n.o(e),Mn(t,n),this.g.attachProtoVectorListener("detections",(i,r)=>{for(const s of i)i=Fp(s),this.j.detections.push(cm(i));le(this,r)}),this.g.attachEmptyPacketListener("detections",i=>{le(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};yn.prototype.detectForVideo=yn.prototype.F,yn.prototype.detect=yn.prototype.D,yn.prototype.setOptions=yn.prototype.o,yn.createFromModelPath=async function(t,e){return Xe(yn,t,{baseOptions:{modelAssetPath:e}})},yn.createFromModelBuffer=function(t,e){return Xe(yn,t,{baseOptions:{modelAssetBuffer:e}})},yn.createFromOptions=function(t,e){return Xe(yn,t,e)};var nh=Xn([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),ih=Xn([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),rh=Xn([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),_m=Xn([474,475],[475,476],[476,477],[477,474]),sh=Xn([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),ah=Xn([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),vm=Xn([469,470],[470,471],[471,472],[472,469]),oh=Xn([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),xm=[...nh,...ih,...rh,...sh,...ah,...oh],Mm=Xn([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function Nf(t){t.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var Mt=class extends on{constructor(t,e){super(new Un(t,e),"image_in","norm_rect",!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Me(t=this.h=new Wp,0,1,e=new pt),this.v=new Vp,Me(this.h,0,3,this.v),this.s=new fo,Me(this.h,0,2,this.s),Qn(this.s,4,1),de(this.s,2,.5),de(this.v,2,.5),de(this.h,4,.5)}get baseOptions(){return Ke(this.h,pt,1)}set baseOptions(t){Me(this.h,0,1,t)}o(t){return"numFaces"in t&&Qn(this.s,4,t.numFaces??1),"minFaceDetectionConfidence"in t&&de(this.s,2,t.minFaceDetectionConfidence??.5),"minTrackingConfidence"in t&&de(this.h,4,t.minTrackingConfidence??.5),"minFacePresenceConfidence"in t&&de(this.v,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in t&&(this.outputFacialTransformationMatrixes=!!t.outputFacialTransformationMatrixes),this.l(t)}D(t,e){return Nf(this),In(this,t,e),this.j}F(t,e,n){return Nf(this),ei(this,t,n,e),this.j}m(){var t=new cn;ht(t,"image_in"),ht(t,"norm_rect"),$e(t,"face_landmarks");const e=new _n;Hn(e,$3,this.h);const n=new $t;xn(n,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),ct(n,"IMAGE:image_in"),ct(n,"NORM_RECT:norm_rect"),qe(n,"NORM_LANDMARKS:face_landmarks"),n.o(e),Mn(t,n),this.g.attachProtoVectorListener("face_landmarks",(i,r)=>{for(const s of i)i=Gs(s),this.j.faceLandmarks.push(po(i));le(this,r)}),this.g.attachEmptyPacketListener("face_landmarks",i=>{le(this,i)}),this.outputFaceBlendshapes&&($e(t,"blendshapes"),qe(n,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",(i,r)=>{if(this.outputFaceBlendshapes)for(const s of i)i=uo(s),this.j.faceBlendshapes.push($l(i.g()??[]));le(this,r)}),this.g.attachEmptyPacketListener("blendshapes",i=>{le(this,i)})),this.outputFacialTransformationMatrixes&&($e(t,"face_geometry"),qe(n,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",(i,r)=>{if(this.outputFacialTransformationMatrixes)for(const s of i)(i=Ke(K3(s),G3,2))&&this.j.facialTransformationMatrixes.push({rows:Cn(i,1)??0??0,columns:Cn(i,2)??0??0,data:tr(i,3,Gi,er()).slice()??[]});le(this,r)}),this.g.attachEmptyPacketListener("face_geometry",i=>{le(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Mt.prototype.detectForVideo=Mt.prototype.F,Mt.prototype.detect=Mt.prototype.D,Mt.prototype.setOptions=Mt.prototype.o,Mt.createFromModelPath=function(t,e){return Xe(Mt,t,{baseOptions:{modelAssetPath:e}})},Mt.createFromModelBuffer=function(t,e){return Xe(Mt,t,{baseOptions:{modelAssetBuffer:e}})},Mt.createFromOptions=function(t,e){return Xe(Mt,t,e)},Mt.FACE_LANDMARKS_LIPS=nh,Mt.FACE_LANDMARKS_LEFT_EYE=ih,Mt.FACE_LANDMARKS_LEFT_EYEBROW=rh,Mt.FACE_LANDMARKS_LEFT_IRIS=_m,Mt.FACE_LANDMARKS_RIGHT_EYE=sh,Mt.FACE_LANDMARKS_RIGHT_EYEBROW=ah,Mt.FACE_LANDMARKS_RIGHT_IRIS=vm,Mt.FACE_LANDMARKS_FACE_OVAL=oh,Mt.FACE_LANDMARKS_CONTOURS=xm,Mt.FACE_LANDMARKS_TESSELATION=Mm;var jn=class extends on{constructor(t,e){super(new Un(t,e),"image_in","norm_rect",!0),Me(t=this.j=new qp,0,1,e=new pt)}get baseOptions(){return Ke(this.j,pt,1)}set baseOptions(t){Me(this.j,0,1,t)}o(t){return super.l(t)}Oa(t,e,n){const i=typeof e!="function"?e:{};if(this.h=typeof e=="function"?e:n,In(this,t,i??{}),!this.h)return this.s}m(){var t=new cn;ht(t,"image_in"),ht(t,"norm_rect"),$e(t,"stylized_image");const e=new _n;Hn(e,Z3,this.j);const n=new $t;xn(n,"mediapipe.tasks.vision.face_stylizer.FaceStylizerGraph"),ct(n,"IMAGE:image_in"),ct(n,"NORM_RECT:norm_rect"),qe(n,"STYLIZED_IMAGE:stylized_image"),n.o(e),Mn(t,n),this.g.U("stylized_image",(i,r)=>{var s=!this.h,a=i.data,o=i.width;const c=o*(i=i.height);if(a instanceof Uint8Array)if(a.length===3*c){const l=new Uint8ClampedArray(4*c);for(let h=0;h<c;++h)l[4*h]=a[3*h],l[4*h+1]=a[3*h+1],l[4*h+2]=a[3*h+2],l[4*h+3]=255;a=new ImageData(l,o,i)}else{if(a.length!==4*c)throw Error("Unsupported channel count: "+a.length/c);a=new ImageData(new Uint8ClampedArray(a.buffer,a.byteOffset,a.length),o,i)}else if(!(a instanceof WebGLTexture))throw Error(`Unsupported format: ${a.constructor.name}`);o=new Bt([a],!1,!1,this.g.i.canvas,this.O,o,i),this.s=s=s?o.clone():o,this.h&&this.h(s),le(this,r)}),this.g.attachEmptyPacketListener("stylized_image",i=>{this.s=null,this.h&&this.h(null),le(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};jn.prototype.stylize=jn.prototype.Oa,jn.prototype.setOptions=jn.prototype.o,jn.createFromModelPath=function(t,e){return Xe(jn,t,{baseOptions:{modelAssetPath:e}})},jn.createFromModelBuffer=function(t,e){return Xe(jn,t,{baseOptions:{modelAssetBuffer:e}})},jn.createFromOptions=function(t,e){return Xe(jn,t,e)};var ch=Xn([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function Ff(t){t.gestures=[],t.landmarks=[],t.worldLandmarks=[],t.handedness=[]}function Of(t){return t.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:t.gestures,landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handedness:t.handedness,handednesses:t.handedness}}function Bf(t,e=!0){const n=[];for(const r of t){var i=uo(r);t=[];for(const s of i.g())i=e&&Cn(s,1)!=null?Cn(s,1)??0:-1,t.push({score:Tt(s,2)??0,index:i,categoryName:Pn(s,3)??""??"",displayName:Pn(s,4)??""??""});n.push(t)}return n}var fn=class extends on{constructor(t,e){super(new Un(t,e),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Me(t=this.j=new Kp,0,1,e=new pt),this.s=new ql,Me(this.j,0,2,this.s),this.C=new Xl,Me(this.s,0,3,this.C),this.v=new jp,Me(this.s,0,2,this.v),this.h=new J3,Me(this.j,0,3,this.h),de(this.v,2,.5),de(this.s,4,.5),de(this.C,2,.5)}get baseOptions(){return Ke(this.j,pt,1)}set baseOptions(t){Me(this.j,0,1,t)}o(t){var r,s,a,o;if(Qn(this.v,3,t.numHands??1),"minHandDetectionConfidence"in t&&de(this.v,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&de(this.s,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&de(this.C,2,t.minHandPresenceConfidence??.5),t.cannedGesturesClassifierOptions){var e=new wr,n=e,i=zc(t.cannedGesturesClassifierOptions,(r=Ke(this.h,wr,3))==null?void 0:r.h());Me(n,0,2,i),Me(this.h,0,3,e)}else t.cannedGesturesClassifierOptions===void 0&&((s=Ke(this.h,wr,3))==null||s.g());return t.customGesturesClassifierOptions?(Me(n=e=new wr,0,2,i=zc(t.customGesturesClassifierOptions,(a=Ke(this.h,wr,4))==null?void 0:a.h())),Me(this.h,0,4,e)):t.customGesturesClassifierOptions===void 0&&((o=Ke(this.h,wr,4))==null||o.g()),this.l(t)}Ja(t,e){return Ff(this),In(this,t,e),Of(this)}Ka(t,e,n){return Ff(this),ei(this,t,n,e),Of(this)}m(){var t=new cn;ht(t,"image_in"),ht(t,"norm_rect"),$e(t,"hand_gestures"),$e(t,"hand_landmarks"),$e(t,"world_hand_landmarks"),$e(t,"handedness");const e=new _n;Hn(e,Q3,this.j);const n=new $t;xn(n,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),ct(n,"IMAGE:image_in"),ct(n,"NORM_RECT:norm_rect"),qe(n,"HAND_GESTURES:hand_gestures"),qe(n,"LANDMARKS:hand_landmarks"),qe(n,"WORLD_LANDMARKS:world_hand_landmarks"),qe(n,"HANDEDNESS:handedness"),n.o(e),Mn(t,n),this.g.attachProtoVectorListener("hand_landmarks",(i,r)=>{for(const s of i){i=Gs(s);const a=[];for(const o of vi(i,Bp,1))a.push({x:Tt(o,1)??0,y:Tt(o,2)??0,z:Tt(o,3)??0,visibility:Tt(o,4)??0});this.landmarks.push(a)}le(this,r)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{le(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,r)=>{for(const s of i){i=Br(s);const a=[];for(const o of vi(i,Op,1))a.push({x:Tt(o,1)??0,y:Tt(o,2)??0,z:Tt(o,3)??0,visibility:Tt(o,4)??0});this.worldLandmarks.push(a)}le(this,r)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{le(this,i)}),this.g.attachProtoVectorListener("hand_gestures",(i,r)=>{this.gestures.push(...Bf(i,!1)),le(this,r)}),this.g.attachEmptyPacketListener("hand_gestures",i=>{le(this,i)}),this.g.attachProtoVectorListener("handedness",(i,r)=>{this.handedness.push(...Bf(i)),le(this,r)}),this.g.attachEmptyPacketListener("handedness",i=>{le(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};function kf(t){return{landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handednesses:t.handedness,handedness:t.handedness}}fn.prototype.recognizeForVideo=fn.prototype.Ka,fn.prototype.recognize=fn.prototype.Ja,fn.prototype.setOptions=fn.prototype.o,fn.createFromModelPath=function(t,e){return Xe(fn,t,{baseOptions:{modelAssetPath:e}})},fn.createFromModelBuffer=function(t,e){return Xe(fn,t,{baseOptions:{modelAssetBuffer:e}})},fn.createFromOptions=function(t,e){return Xe(fn,t,e)},fn.HAND_CONNECTIONS=ch;var tn=class extends on{constructor(t,e){super(new Un(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Me(t=this.h=new ql,0,1,e=new pt),this.s=new Xl,Me(this.h,0,3,this.s),this.j=new jp,Me(this.h,0,2,this.j),Qn(this.j,3,1),de(this.j,2,.5),de(this.s,2,.5),de(this.h,4,.5)}get baseOptions(){return Ke(this.h,pt,1)}set baseOptions(t){Me(this.h,0,1,t)}o(t){return"numHands"in t&&Qn(this.j,3,t.numHands??1),"minHandDetectionConfidence"in t&&de(this.j,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&de(this.h,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&de(this.s,2,t.minHandPresenceConfidence??.5),this.l(t)}D(t,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],In(this,t,e),kf(this)}F(t,e,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],ei(this,t,n,e),kf(this)}m(){var t=new cn;ht(t,"image_in"),ht(t,"norm_rect"),$e(t,"hand_landmarks"),$e(t,"world_hand_landmarks"),$e(t,"handedness");const e=new _n;Hn(e,ex,this.h);const n=new $t;xn(n,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),ct(n,"IMAGE:image_in"),ct(n,"NORM_RECT:norm_rect"),qe(n,"LANDMARKS:hand_landmarks"),qe(n,"WORLD_LANDMARKS:world_hand_landmarks"),qe(n,"HANDEDNESS:handedness"),n.o(e),Mn(t,n),this.g.attachProtoVectorListener("hand_landmarks",(i,r)=>{for(const s of i)i=Gs(s),this.landmarks.push(po(i));le(this,r)}),this.g.attachEmptyPacketListener("hand_landmarks",i=>{le(this,i)}),this.g.attachProtoVectorListener("world_hand_landmarks",(i,r)=>{for(const s of i)i=Br(s),this.worldLandmarks.push(As(i));le(this,r)}),this.g.attachEmptyPacketListener("world_hand_landmarks",i=>{le(this,i)}),this.g.attachProtoVectorListener("handedness",(i,r)=>{var s=this.handedness,a=s.push;const o=[];for(const c of i){i=uo(c);const l=[];for(const h of i.g())l.push({score:Tt(h,2)??0,index:Cn(h,1)??0??-1,categoryName:Pn(h,3)??""??"",displayName:Pn(h,4)??""??""});o.push(l)}a.call(s,...o),le(this,r)}),this.g.attachEmptyPacketListener("handedness",i=>{le(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};tn.prototype.detectForVideo=tn.prototype.F,tn.prototype.detect=tn.prototype.D,tn.prototype.setOptions=tn.prototype.o,tn.createFromModelPath=function(t,e){return Xe(tn,t,{baseOptions:{modelAssetPath:e}})},tn.createFromModelBuffer=function(t,e){return Xe(tn,t,{baseOptions:{modelAssetBuffer:e}})},tn.createFromOptions=function(t,e){return Xe(tn,t,e)},tn.HAND_CONNECTIONS=ch;var Sm=Xn([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function Gf(t){t.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function zf(t){try{if(!t.C)return t.h;t.C(t.h)}finally{go(t)}}function _a(t,e){t=Gs(t),e.push(po(t))}var ut=class extends on{constructor(t,e){super(new Un(t,e),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Me(t=this.j=new em,0,1,e=new pt),this.J=new Xl,Me(this.j,0,2,this.J),this.Z=new tx,Me(this.j,0,3,this.Z),this.s=new fo,Me(this.j,0,4,this.s),this.H=new Vp,Me(this.j,0,5,this.H),this.v=new Jp,Me(this.j,0,6,this.v),this.K=new Qp,Me(this.j,0,7,this.K),de(this.s,2,.5),de(this.s,3,.3),de(this.H,2,.5),de(this.v,2,.5),de(this.v,3,.3),de(this.K,2,.5),de(this.J,2,.5)}get baseOptions(){return Ke(this.j,pt,1)}set baseOptions(t){Me(this.j,0,1,t)}o(t){return"minFaceDetectionConfidence"in t&&de(this.s,2,t.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in t&&de(this.s,3,t.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in t&&de(this.H,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"minPoseDetectionConfidence"in t&&de(this.v,2,t.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in t&&de(this.v,3,t.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in t&&de(this.K,2,t.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in t&&(this.outputPoseSegmentationMasks=!!t.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in t&&de(this.J,2,t.minHandLandmarksConfidence??.5),this.l(t)}D(t,e,n){const i=typeof e!="function"?e:{};return this.C=typeof e=="function"?e:n,Gf(this),In(this,t,i),zf(this)}F(t,e,n,i){const r=typeof n!="function"?n:{};return this.C=typeof n=="function"?n:i,Gf(this),ei(this,t,r,e),zf(this)}m(){var t=new cn;ht(t,"input_frames_image"),$e(t,"pose_landmarks"),$e(t,"pose_world_landmarks"),$e(t,"face_landmarks"),$e(t,"left_hand_landmarks"),$e(t,"left_hand_world_landmarks"),$e(t,"right_hand_landmarks"),$e(t,"right_hand_world_landmarks");const e=new _n,n=new hf;Nc(n,1,rs("type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),""),function(r,s){if(s!=null)if(Array.isArray(s))ot(r,2,jd(s));else{if(!(typeof s=="string"||s instanceof pi||Fs(s)))throw Error("invalid value in Any.value field: "+s+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");Nc(r,2,ll(s,!1),lr())}}(n,this.j.g());const i=new $t;xn(i,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),Fa(i,8,hf,n),ct(i,"IMAGE:input_frames_image"),qe(i,"POSE_LANDMARKS:pose_landmarks"),qe(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),qe(i,"FACE_LANDMARKS:face_landmarks"),qe(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),qe(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),qe(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),qe(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.o(e),Mn(t,i),mo(this,t),this.g.attachProtoListener("pose_landmarks",(r,s)=>{_a(r,this.h.poseLandmarks),le(this,s)}),this.g.attachEmptyPacketListener("pose_landmarks",r=>{le(this,r)}),this.g.attachProtoListener("pose_world_landmarks",(r,s)=>{var a=this.h.poseWorldLandmarks;r=Br(r),a.push(As(r)),le(this,s)}),this.g.attachEmptyPacketListener("pose_world_landmarks",r=>{le(this,r)}),this.outputPoseSegmentationMasks&&(qe(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),Kr(this,"pose_segmentation_mask"),this.g.U("pose_segmentation_mask",(r,s)=>{this.h.poseSegmentationMasks=[Jr(this,r,!0,!this.C)],le(this,s)}),this.g.attachEmptyPacketListener("pose_segmentation_mask",r=>{this.h.poseSegmentationMasks=[],le(this,r)})),this.g.attachProtoListener("face_landmarks",(r,s)=>{_a(r,this.h.faceLandmarks),le(this,s)}),this.g.attachEmptyPacketListener("face_landmarks",r=>{le(this,r)}),this.outputFaceBlendshapes&&($e(t,"extra_blendshapes"),qe(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",(r,s)=>{var a=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(r=uo(r),a.push($l(r.g()??[]))),le(this,s)}),this.g.attachEmptyPacketListener("extra_blendshapes",r=>{le(this,r)})),this.g.attachProtoListener("left_hand_landmarks",(r,s)=>{_a(r,this.h.leftHandLandmarks),le(this,s)}),this.g.attachEmptyPacketListener("left_hand_landmarks",r=>{le(this,r)}),this.g.attachProtoListener("left_hand_world_landmarks",(r,s)=>{var a=this.h.leftHandWorldLandmarks;r=Br(r),a.push(As(r)),le(this,s)}),this.g.attachEmptyPacketListener("left_hand_world_landmarks",r=>{le(this,r)}),this.g.attachProtoListener("right_hand_landmarks",(r,s)=>{_a(r,this.h.rightHandLandmarks),le(this,s)}),this.g.attachEmptyPacketListener("right_hand_landmarks",r=>{le(this,r)}),this.g.attachProtoListener("right_hand_world_landmarks",(r,s)=>{var a=this.h.rightHandWorldLandmarks;r=Br(r),a.push(As(r)),le(this,s)}),this.g.attachEmptyPacketListener("right_hand_world_landmarks",r=>{le(this,r)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};ut.prototype.detectForVideo=ut.prototype.F,ut.prototype.detect=ut.prototype.D,ut.prototype.setOptions=ut.prototype.o,ut.createFromModelPath=function(t,e){return Xe(ut,t,{baseOptions:{modelAssetPath:e}})},ut.createFromModelBuffer=function(t,e){return Xe(ut,t,{baseOptions:{modelAssetBuffer:e}})},ut.createFromOptions=function(t,e){return Xe(ut,t,e)},ut.HAND_CONNECTIONS=ch,ut.POSE_CONNECTIONS=Sm,ut.FACE_LANDMARKS_LIPS=nh,ut.FACE_LANDMARKS_LEFT_EYE=ih,ut.FACE_LANDMARKS_LEFT_EYEBROW=rh,ut.FACE_LANDMARKS_LEFT_IRIS=_m,ut.FACE_LANDMARKS_RIGHT_EYE=sh,ut.FACE_LANDMARKS_RIGHT_EYEBROW=ah,ut.FACE_LANDMARKS_RIGHT_IRIS=vm,ut.FACE_LANDMARKS_FACE_OVAL=oh,ut.FACE_LANDMARKS_CONTOURS=xm,ut.FACE_LANDMARKS_TESSELATION=Mm;var Tn=class extends on{constructor(t,e){super(new Un(t,e),"input_image","norm_rect",!0),this.j={classifications:[]},Me(t=this.h=new tm,0,1,e=new pt)}get baseOptions(){return Ke(this.h,pt,1)}set baseOptions(t){Me(this.h,0,1,t)}o(t){return Me(this.h,0,2,zc(t,Ke(this.h,Hl,2))),this.l(t)}sa(t,e){return this.j={classifications:[]},In(this,t,e),this.j}ta(t,e,n){return this.j={classifications:[]},ei(this,t,n,e),this.j}m(){var t=new cn;ht(t,"input_image"),ht(t,"norm_rect"),$e(t,"classifications");const e=new _n;Hn(e,nx,this.h);const n=new $t;xn(n,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),ct(n,"IMAGE:input_image"),ct(n,"NORM_RECT:norm_rect"),qe(n,"CLASSIFICATIONS:classifications"),n.o(e),Mn(t,n),this.g.attachProtoListener("classifications",(i,r)=>{this.j=function(s){const a={classifications:vi(s,H3,1).map(o=>{var c;return $l(((c=Ke(o,Ip,4))==null?void 0:c.g())??[],Cn(o,2)??0,Pn(o,3)??"")})};return Na(Yr(s,2))!=null&&(a.timestampMs=Na(Yr(s,2))??0),a}(V3(i)),le(this,r)}),this.g.attachEmptyPacketListener("classifications",i=>{le(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Tn.prototype.classifyForVideo=Tn.prototype.ta,Tn.prototype.classify=Tn.prototype.sa,Tn.prototype.setOptions=Tn.prototype.o,Tn.createFromModelPath=function(t,e){return Xe(Tn,t,{baseOptions:{modelAssetPath:e}})},Tn.createFromModelBuffer=function(t,e){return Xe(Tn,t,{baseOptions:{modelAssetBuffer:e}})},Tn.createFromOptions=function(t,e){return Xe(Tn,t,e)};var dn=class extends on{constructor(t,e){super(new Un(t,e),"image_in","norm_rect",!0),this.h=new nm,this.embeddings={embeddings:[]},Me(t=this.h,0,1,e=new pt)}get baseOptions(){return Ke(this.h,pt,1)}set baseOptions(t){Me(this.h,0,1,t)}o(t){var e=this.h,n=Ke(this.h,xf,2);return n=n?n.clone():new xf,t.l2Normalize!==void 0?Ls(n,1,t.l2Normalize):"l2Normalize"in t&&ot(n,1),t.quantize!==void 0?Ls(n,2,t.quantize):"quantize"in t&&ot(n,2),Me(e,0,2,n),this.l(t)}za(t,e){return In(this,t,e),this.embeddings}Aa(t,e,n){return ei(this,t,n,e),this.embeddings}m(){var t=new cn;ht(t,"image_in"),ht(t,"norm_rect"),$e(t,"embeddings_out");const e=new _n;Hn(e,ix,this.h);const n=new $t;xn(n,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),ct(n,"IMAGE:image_in"),ct(n,"NORM_RECT:norm_rect"),qe(n,"EMBEDDINGS:embeddings_out"),n.o(e),Mn(t,n),this.g.attachProtoListener("embeddings_out",(i,r)=>{i=q3(i),this.embeddings=function(s){return{embeddings:vi(s,X3,1).map(a=>{var c,l;const o={headIndex:Cn(a,3)??0??-1,headName:Pn(a,4)??""??""};if(Qd(a,vf,hc(a,1))!==void 0)a=tr(a=Ke(a,vf,hc(a,1)),1,Gi,er()),o.floatEmbedding=a.slice();else{const h=new Uint8Array(0);o.quantizedEmbedding=((l=(c=Ke(a,W3,hc(a,2)))==null?void 0:c.oa())==null?void 0:l.h())??h}return o}),timestampMs:Na(Yr(s,2))??0}}(i),le(this,r)}),this.g.attachEmptyPacketListener("embeddings_out",i=>{le(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};dn.cosineSimilarity=function(t,e){if(t.floatEmbedding&&e.floatEmbedding)t=Tf(t.floatEmbedding,e.floatEmbedding);else{if(!t.quantizedEmbedding||!e.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");t=Tf(yf(t.quantizedEmbedding),yf(e.quantizedEmbedding))}return t},dn.prototype.embedForVideo=dn.prototype.Aa,dn.prototype.embed=dn.prototype.za,dn.prototype.setOptions=dn.prototype.o,dn.createFromModelPath=function(t,e){return Xe(dn,t,{baseOptions:{modelAssetPath:e}})},dn.createFromModelBuffer=function(t,e){return Xe(dn,t,{baseOptions:{modelAssetBuffer:e}})},dn.createFromOptions=function(t,e){return Xe(dn,t,e)};var Wc=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){var t,e;(t=this.confidenceMasks)==null||t.forEach(n=>{n.close()}),(e=this.categoryMask)==null||e.close()}};function Hf(t){t.categoryMask=void 0,t.confidenceMasks=void 0,t.qualityScores=void 0}function Vf(t){try{const e=new Wc(t.confidenceMasks,t.categoryMask,t.qualityScores);if(!t.j)return e;t.j(e)}finally{go(t)}}Wc.prototype.close=Wc.prototype.close;var en=class extends on{constructor(t,e){super(new Un(t,e),"image_in","norm_rect",!1),this.s=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new Kl,this.v=new im,Me(this.h,0,3,this.v),Me(t=this.h,0,1,e=new pt)}get baseOptions(){return Ke(this.h,pt,1)}set baseOptions(t){Me(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?ot(this.h,2,rs(t.displayNamesLocale)):"displayNamesLocale"in t&&ot(this.h,2),"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}I(){(function(t){var n,i;const e=vi(t.da(),$t,1).filter(r=>(Pn(r,1)??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator"));if(t.s=[],e.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");e.length===1&&(((i=(n=Ke(e[0],_n,7))==null?void 0:n.l())==null?void 0:i.g())??new Map).forEach((r,s)=>{t.s[Number(s)]=Pn(r,1)??""})})(this)}segment(t,e,n){const i=typeof e!="function"?e:{};return this.j=typeof e=="function"?e:n,Hf(this),In(this,t,i),Vf(this)}Ma(t,e,n,i){const r=typeof n!="function"?n:{};return this.j=typeof n=="function"?n:i,Hf(this),ei(this,t,r,e),Vf(this)}Da(){return this.s}m(){var t=new cn;ht(t,"image_in"),ht(t,"norm_rect");const e=new _n;Hn(e,sm,this.h);const n=new $t;xn(n,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),ct(n,"IMAGE:image_in"),ct(n,"NORM_RECT:norm_rect"),n.o(e),Mn(t,n),mo(this,t),this.outputConfidenceMasks&&($e(t,"confidence_masks"),qe(n,"CONFIDENCE_MASKS:confidence_masks"),Kr(this,"confidence_masks"),this.g.ca("confidence_masks",(i,r)=>{this.confidenceMasks=i.map(s=>Jr(this,s,!0,!this.j)),le(this,r)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],le(this,i)})),this.outputCategoryMask&&($e(t,"category_mask"),qe(n,"CATEGORY_MASK:category_mask"),Kr(this,"category_mask"),this.g.U("category_mask",(i,r)=>{this.categoryMask=Jr(this,i,!1,!this.j),le(this,r)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,le(this,i)})),$e(t,"quality_scores"),qe(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,r)=>{this.qualityScores=i,le(this,r)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,le(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};en.prototype.getLabels=en.prototype.Da,en.prototype.segmentForVideo=en.prototype.Ma,en.prototype.segment=en.prototype.segment,en.prototype.setOptions=en.prototype.o,en.createFromModelPath=function(t,e){return Xe(en,t,{baseOptions:{modelAssetPath:e}})},en.createFromModelBuffer=function(t,e){return Xe(en,t,{baseOptions:{modelAssetBuffer:e}})},en.createFromOptions=function(t,e){return Xe(en,t,e)};var Xc=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){var t,e;(t=this.confidenceMasks)==null||t.forEach(n=>{n.close()}),(e=this.categoryMask)==null||e.close()}};Xc.prototype.close=Xc.prototype.close;var ux=class extends fe{constructor(t){super(t)}},Rr=[0,Et,-2],Ga=[0,ci,-3,dt,ci,-1],Wf=[0,Ga],Xf=[0,Ga,Et,-1],gc=class extends fe{constructor(t){super(t)}},qf=[0,ci,-1,dt],fx=class extends fe{constructor(t){super(t)}},Yf=class extends fe{constructor(t){super(t)}},qc=[1,2,3,4,5,6,7,8,9,10,14,15],Em=class extends fe{constructor(t){super(t)}};Em.prototype.g=ho([0,Pt,[0,qc,et,Ga,et,[0,Ga,Rr],et,Wf,et,[0,Wf,Rr],et,qf,et,[0,ci,-3,dt,Dn],et,[0,ci,-3,dt],et,[0,Je,ci,-2,dt,Et,dt,-1,2,ci,Rr],et,Xf,et,[0,Xf,Rr],ci,Rr,Je,et,[0,ci,-3,dt,Rr,-1],et,[0,Pt,qf]],Je,[0,Je,Et,-1,dt]]);var Kn=class extends on{constructor(t,e){super(new Un(t,e),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new Kl,this.s=new im,Me(this.h,0,3,this.s),Me(t=this.h,0,1,e=new pt)}get baseOptions(){return Ke(this.h,pt,1)}set baseOptions(t){Me(this.h,0,1,t)}o(t){return"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}segment(t,e,n,i){const r=typeof n!="function"?n:{};this.j=typeof n=="function"?n:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.B+1,i=new Em;const s=new Yf;var a=new ux;if(Qn(a,1,255),Me(s,0,12,a),e.keypoint&&e.scribble)throw Error("Cannot provide both keypoint and scribble.");if(e.keypoint){var o=new gc;Ls(o,3,!0),de(o,1,e.keypoint.x),de(o,2,e.keypoint.y),ys(s,5,qc,o)}else{if(!e.scribble)throw Error("Must provide either a keypoint or a scribble.");for(o of(a=new fx,e.scribble))Ls(e=new gc,3,!0),de(e,1,o.x),de(e,2,o.y),Fa(a,1,gc,e);ys(s,15,qc,a)}Fa(i,1,Yf,s),this.g.addProtoToStream(i.g(),"drishti.RenderData","roi_in",n),In(this,t,r);e:{try{const l=new Xc(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var c=l;break e}this.j(l)}finally{go(this)}c=void 0}return c}m(){var t=new cn;ht(t,"image_in"),ht(t,"roi_in"),ht(t,"norm_rect_in");const e=new _n;Hn(e,sm,this.h);const n=new $t;xn(n,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraph"),ct(n,"IMAGE:image_in"),ct(n,"ROI:roi_in"),ct(n,"NORM_RECT:norm_rect_in"),n.o(e),Mn(t,n),mo(this,t),this.outputConfidenceMasks&&($e(t,"confidence_masks"),qe(n,"CONFIDENCE_MASKS:confidence_masks"),Kr(this,"confidence_masks"),this.g.ca("confidence_masks",(i,r)=>{this.confidenceMasks=i.map(s=>Jr(this,s,!0,!this.j)),le(this,r)}),this.g.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],le(this,i)})),this.outputCategoryMask&&($e(t,"category_mask"),qe(n,"CATEGORY_MASK:category_mask"),Kr(this,"category_mask"),this.g.U("category_mask",(i,r)=>{this.categoryMask=Jr(this,i,!1,!this.j),le(this,r)}),this.g.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,le(this,i)})),$e(t,"quality_scores"),qe(n,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",(i,r)=>{this.qualityScores=i,le(this,r)}),this.g.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,le(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};Kn.prototype.segment=Kn.prototype.segment,Kn.prototype.setOptions=Kn.prototype.o,Kn.createFromModelPath=function(t,e){return Xe(Kn,t,{baseOptions:{modelAssetPath:e}})},Kn.createFromModelBuffer=function(t,e){return Xe(Kn,t,{baseOptions:{modelAssetBuffer:e}})},Kn.createFromOptions=function(t,e){return Xe(Kn,t,e)};var An=class extends on{constructor(t,e){super(new Un(t,e),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},Me(t=this.h=new am,0,1,e=new pt)}get baseOptions(){return Ke(this.h,pt,1)}set baseOptions(t){Me(this.h,0,1,t)}o(t){return t.displayNamesLocale!==void 0?ot(this.h,2,rs(t.displayNamesLocale)):"displayNamesLocale"in t&&ot(this.h,2),t.maxResults!==void 0?Qn(this.h,3,t.maxResults):"maxResults"in t&&ot(this.h,3),t.scoreThreshold!==void 0?de(this.h,4,t.scoreThreshold):"scoreThreshold"in t&&ot(this.h,4),t.categoryAllowlist!==void 0?Oa(this.h,5,t.categoryAllowlist):"categoryAllowlist"in t&&ot(this.h,5),t.categoryDenylist!==void 0?Oa(this.h,6,t.categoryDenylist):"categoryDenylist"in t&&ot(this.h,6),this.l(t)}D(t,e){return this.j={detections:[]},In(this,t,e),this.j}F(t,e,n){return this.j={detections:[]},ei(this,t,n,e),this.j}m(){var t=new cn;ht(t,"input_frame_gpu"),ht(t,"norm_rect"),$e(t,"detections");const e=new _n;Hn(e,sx,this.h);const n=new $t;xn(n,"mediapipe.tasks.vision.ObjectDetectorGraph"),ct(n,"IMAGE:input_frame_gpu"),ct(n,"NORM_RECT:norm_rect"),qe(n,"DETECTIONS:detections"),n.o(e),Mn(t,n),this.g.attachProtoVectorListener("detections",(i,r)=>{for(const s of i)i=Fp(s),this.j.detections.push(cm(i));le(this,r)}),this.g.attachEmptyPacketListener("detections",i=>{le(this,i)}),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};An.prototype.detectForVideo=An.prototype.F,An.prototype.detect=An.prototype.D,An.prototype.setOptions=An.prototype.o,An.createFromModelPath=async function(t,e){return Xe(An,t,{baseOptions:{modelAssetPath:e}})},An.createFromModelBuffer=function(t,e){return Xe(An,t,{baseOptions:{modelAssetBuffer:e}})},An.createFromOptions=function(t,e){return Xe(An,t,e)};var Yc=class{constructor(t,e,n){this.landmarks=t,this.worldLandmarks=e,this.segmentationMasks=n}close(){var t;(t=this.segmentationMasks)==null||t.forEach(e=>{e.close()})}};function jf(t){t.landmarks=[],t.worldLandmarks=[],t.segmentationMasks=void 0}function Kf(t){try{const e=new Yc(t.landmarks,t.worldLandmarks,t.segmentationMasks);if(!t.s)return e;t.s(e)}finally{go(t)}}Yc.prototype.close=Yc.prototype.close;var pn=class extends on{constructor(t,e){super(new Un(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Me(t=this.h=new om,0,1,e=new pt),this.v=new Qp,Me(this.h,0,3,this.v),this.j=new Jp,Me(this.h,0,2,this.j),Qn(this.j,4,1),de(this.j,2,.5),de(this.v,2,.5),de(this.h,4,.5)}get baseOptions(){return Ke(this.h,pt,1)}set baseOptions(t){Me(this.h,0,1,t)}o(t){return"numPoses"in t&&Qn(this.j,4,t.numPoses??1),"minPoseDetectionConfidence"in t&&de(this.j,2,t.minPoseDetectionConfidence??.5),"minTrackingConfidence"in t&&de(this.h,4,t.minTrackingConfidence??.5),"minPosePresenceConfidence"in t&&de(this.v,2,t.minPosePresenceConfidence??.5),"outputSegmentationMasks"in t&&(this.outputSegmentationMasks=t.outputSegmentationMasks??!1),this.l(t)}D(t,e,n){const i=typeof e!="function"?e:{};return this.s=typeof e=="function"?e:n,jf(this),In(this,t,i),Kf(this)}F(t,e,n,i){const r=typeof n!="function"?n:{};return this.s=typeof n=="function"?n:i,jf(this),ei(this,t,r,e),Kf(this)}m(){var t=new cn;ht(t,"image_in"),ht(t,"norm_rect"),$e(t,"normalized_landmarks"),$e(t,"world_landmarks"),$e(t,"segmentation_masks");const e=new _n;Hn(e,ax,this.h);const n=new $t;xn(n,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),ct(n,"IMAGE:image_in"),ct(n,"NORM_RECT:norm_rect"),qe(n,"NORM_LANDMARKS:normalized_landmarks"),qe(n,"WORLD_LANDMARKS:world_landmarks"),n.o(e),Mn(t,n),mo(this,t),this.g.attachProtoVectorListener("normalized_landmarks",(i,r)=>{this.landmarks=[];for(const s of i)i=Gs(s),this.landmarks.push(po(i));le(this,r)}),this.g.attachEmptyPacketListener("normalized_landmarks",i=>{this.landmarks=[],le(this,i)}),this.g.attachProtoVectorListener("world_landmarks",(i,r)=>{this.worldLandmarks=[];for(const s of i)i=Br(s),this.worldLandmarks.push(As(i));le(this,r)}),this.g.attachEmptyPacketListener("world_landmarks",i=>{this.worldLandmarks=[],le(this,i)}),this.outputSegmentationMasks&&(qe(n,"SEGMENTATION_MASK:segmentation_masks"),Kr(this,"segmentation_masks"),this.g.ca("segmentation_masks",(i,r)=>{this.segmentationMasks=i.map(s=>Jr(this,s,!0,!this.s)),le(this,r)}),this.g.attachEmptyPacketListener("segmentation_masks",i=>{this.segmentationMasks=[],le(this,i)})),t=t.g(),this.setGraph(new Uint8Array(t),!0)}};pn.prototype.detectForVideo=pn.prototype.F,pn.prototype.detect=pn.prototype.D,pn.prototype.setOptions=pn.prototype.o,pn.createFromModelPath=function(t,e){return Xe(pn,t,{baseOptions:{modelAssetPath:e}})},pn.createFromModelBuffer=function(t,e){return Xe(pn,t,{baseOptions:{modelAssetBuffer:e}})},pn.createFromOptions=function(t,e){return Xe(pn,t,e)},pn.POSE_CONNECTIONS=Sm;class dx{constructor(e,n){this.video=e,this.onZoomChange=n,this.lastVideoTime=-1,this.results=void 0,this.handLandmarker=void 0,this.runningMode="VIDEO",this.lastDistance=0,this.alpha=.2,this.init()}async init(){try{const e=await Zi.forVisionTasks("/wasm");this.handLandmarker=await tn.createFromOptions(e,{baseOptions:{modelAssetPath:"/models/hand_landmarker.task",delegate:"GPU"},runningMode:this.runningMode,numHands:1}),this.startWebcam()}catch(e){console.error("Error initializing hand landmarker:",e);const n=document.getElementById("loading");n&&(n.innerText=`Error: ${e.message}
Check if files exist in /public/models and /public/wasm`,n.style.color="#ff4444",n.style.textAlign="center")}}async startWebcam(){if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){console.warn("Browser API navigator.mediaDevices.getUserMedia not available");const e=document.getElementById("loading");e&&(e.innerText="Error: Webcam API not supported.");return}try{const e=await navigator.mediaDevices.getUserMedia({video:{width:320,height:240}});this.video.srcObject=e,this.video.addEventListener("loadeddata",this.predictWebcam.bind(this));const n=document.getElementById("loading");n&&(n.style.display="none")}catch(e){console.error("Error accessing webcam:",e)}}async predictWebcam(){if(this.handLandmarker&&this.video.currentTime!==this.lastVideoTime){this.lastVideoTime=this.video.currentTime;const e=performance.now();if(this.results=this.handLandmarker.detectForVideo(this.video,e),this.results.landmarks&&this.results.landmarks.length>0){const n=this.results.landmarks[0],i=n[4],r=n[8],s=Math.sqrt(Math.pow(i.x-r.x,2)+Math.pow(i.y-r.y,2)),a=.02,o=.25,l=(Math.max(a,Math.min(o,s))-a)/(o-a);this.lastDistance=this.lastDistance+this.alpha*(l-this.lastDistance),this.onZoomChange(this.lastDistance)}}window.requestAnimationFrame(this.predictWebcam.bind(this))}}document.addEventListener("DOMContentLoaded",()=>{const t=new Hv("canvas-container"),e=document.getElementById("webcam");new dx(e,n=>{t.setZoom(n)})});
