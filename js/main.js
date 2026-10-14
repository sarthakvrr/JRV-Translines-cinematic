const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
$('#y').textContent=new Date().getFullYear();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const t=e.target;t.classList.add('on');io.unobserve(t);if(t.dataset.n)count(t);t.querySelectorAll('[data-n]').forEach(count)}),{threshold:.15});
function count(el){if(el.done)return;el.done=1;const t=+el.dataset.n,s=el.dataset.s||'',t0=performance.now();(function f(n){const p=Math.min((n-t0)/1800,1);el.textContent=Math.round(t*(1-Math.pow(1-p,3)))+s;if(p<1)requestAnimationFrame(f)})(t0)}
const R=document.body.dataset.r;let home=R==='';
function init(){$$('#lk a').forEach(a=>a.classList.toggle('on',a.dataset.r===R));$$('.rv,[data-n]').forEach((el,i)=>{el.style.transitionDelay=(i%3)*.12+'s';io.observe(el)});onS()}
$('#bg').onclick=()=>$('#lk').classList.toggle('o');$('#bg').onclick=()=>$('#lk').classList.toggle('o');
const caps=$$('.cap'),pin=$('#pin');let P=0,sp=0,lastY=0;
function onS(){const y=scrollY,h=document.documentElement.scrollHeight-innerHeight;$('#prog').style.width=(y/h*100)+'%';
 $('#nav').classList.toggle('s',y>40);$('#nav').classList.toggle('n',!home);
 if(home){const r=pin.getBoundingClientRect();P=Math.min(Math.max(-r.top/(r.height-innerHeight),0),1);
  const seg=[[0,.04,.26,.34],[.34,.4,.58,.66],[.66,.72,1.1,1.2]];
  caps.forEach((c,i)=>{const[a,b,d,e]=seg[i];let o=P<a||P>e?0:P<b?(P-a)/(b-a):P<=d?1:(e-P)/(e-d);c.style.opacity=o;
   const k=i===2?0:(P>d?(P-d)/(e-d):0);c.style.transform='scale('+(.88+.12*Math.min((P-a)/(b-a),1)+k*.5)+')'});
  $('#hint').style.opacity=P<.04?1:0}}
addEventListener('scroll',onS,{passive:true});
const cv=$('#cv')||document.createElement('canvas'),x=cv.getContext('2d');let W,H,st=[];
function rs(){W=cv.width=cv.offsetWidth||innerWidth;H=cv.height=cv.offsetHeight||innerHeight;st=Array.from({length:120},()=>({x:Math.random(),y:Math.random()*.5,r:Math.random()*1.3+.3,t:Math.random()*6}))}
rs();addEventListener('resize',rs);
let off=0,tm=0;
function frame(){requestAnimationFrame(frame);if(!home)return;tm+=.016;
 const v=Math.abs(scrollY-lastY);lastY=scrollY;sp+=(v*.01-sp)*.1;const spd=.004+P*.012+sp;off=(off+spd)%1;
 const hz=H*(.46-P*.04),cx=W/2+Math.sin(tm*.3)*W*.02*(1-P);
 let g=x.createLinearGradient(0,0,0,hz);g.addColorStop(0,'#04070f');g.addColorStop(1,'#14264a');x.fillStyle=g;x.fillRect(0,0,W,hz);
 st.forEach(s=>{x.fillStyle='rgba(255,255,255,'+(.4+.4*Math.sin(tm*2+s.t))+')';x.fillRect(s.x*W,s.y*H,s.r,s.r)});
 g=x.createRadialGradient(cx,hz,0,cx,hz,W*.6);g.addColorStop(0,'rgba(242,96,12,'+(.55+P*.3)+')');g.addColorStop(.35,'rgba(242,96,12,.12)');g.addColorStop(1,'transparent');x.fillStyle=g;x.fillRect(0,0,W,hz+H*.2);
 x.fillStyle='#0a1222';x.fillRect(0,hz,W,H-hz);
 x.fillStyle='#0d1830';x.beginPath();x.moveTo(cx-W*.02,hz);x.lineTo(cx+W*.02,hz);x.lineTo(cx+W*.62,H);x.lineTo(cx-W*.62,H);x.fill();
 const ro=H-hz;
 for(let i=0;i<14;i++){const z=(i+off)/14,t=Math.pow(z,2.4),t2=Math.pow(Math.min(z+.045,1),2.4),y1=hz+ro*t,y2=hz+ro*t2,w1=W*.0035+W*.02*t,w2=W*.0035+W*.02*t2;
  x.fillStyle='rgba(255,235,210,'+(.15+t*.85)+')';x.beginPath();x.moveTo(cx-w1,y1);x.lineTo(cx+w1,y1);x.lineTo(cx+w2,y2);x.lineTo(cx-w2,y2);x.fill();
  for(const s of[-1,1]){const e1=cx+s*(W*.02+W*.6*t),e2=cx+s*(W*.02+W*.6*t2);x.fillStyle='rgba(242,96,12,'+(.2+t*.8)+')';x.beginPath();x.moveTo(e1-3*t-1,y1);x.lineTo(e1+3*t+1,y1);x.lineTo(e2+3*t2+1,y2);x.lineTo(e2-3*t2-1,y2);x.fill()}}
 for(let i=0;i<10;i++){const z=((i*.1+off*.6+tm*.02*P)%1),t=Math.pow(z,2.6),y=hz+ro*t,sd=i%2?-1:1,px=cx+sd*(W*(.05+.9*t)),r=1+t*7;
  x.fillStyle='rgba(255,200,150,'+(.25+t*.6)+')';x.beginPath();x.arc(px,y-t*H*.12,r,0,7);x.fill()}
 g=x.createLinearGradient(0,H*.7,0,H);g.addColorStop(0,'transparent');g.addColorStop(1,'rgba(6,11,22,.8)');x.fillStyle=g;x.fillRect(0,H*.7,W,H*.3)}
frame();
$('#f')&&$('#f').addEventListener('submit',e=>{e.preventDefault();const t='Hello JRV Translines, I am '+$('#n').value+($('#c').value?' from '+$('#c').value:'')+'. '+$('#m').value;window.open('https://wa.me/919689887241?text='+encodeURIComponent(t),'_blank')});
init();