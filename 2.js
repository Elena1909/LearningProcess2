var k=1;
var tau=1;
var g;
var ai2=0;
var max2 =-1000;
var min2 =10000;
var cnt=0;
var a = [1];
var b = [1];
var c = [1];
var step =1;
var aq = 0.5;
var ab = 0.9;
var aomega0 = 2.0/3;
var an = 2000;
var ant = 10;
var am = 5;
var aouts='';
var alogs="";
var aw0=0;
var aw2=2;
function ode() {
 cnt=0;
ai2=0;
 max2 =-1000;
 min2 =10000;
aouts="";
step = parseInt(window.document.getElementById("idstep").value);
aw0 = parseFloat(window.document.getElementById("idx").value);
k = parseFloat(window.document.getElementById("idq").value);
tau = parseFloat(window.document.getElementById("ida").value);
an = 100, ant = 10, am = 5;
var adt = parseFloat(window.document.getElementById("idt").value);
an = Math.floor(parseFloat(window.document.getElementById("idtm").value)/adt);
var ay1 = new Array(this.an+1);
var ay2 = new Array(this.an+1);
var ay3 = new Array(this.an+1);
var ay = new Array(2);
ay1[0] = ay[0] = this.aw0;
ay2[0] = ay[1] = this.aw2;
a[0]=0;
b[0]=ay1[0];
if(max2<b[0]) max2=b[0];
if(min2>b[0]) min2=b[0];
for (var ai=0; ai<this.an; ai++) {
var at = adt*ai;
ay = rungeKutta(ay, at, adt);
ay1[ai+1] = ay[0];
ay2[ai+1] = ay[1];
if((ai % step )==0)
{
ai2++;
a[ai2]=adt*(ai+1);
b[ai2]=ay1[ai+1];
c[ai2]=ay2[ai+1];
if(max2<b[ai2]) max2=b[ai2];
if(min2>b[ai2]) min2=b[ai2];
}
}
}
function rungeKutta(y, t, dt) {
var l = y.length;
var c1 = new Array(l);
var c2 = new Array(l);
var c3 = new Array(l);
var c4 = new Array(l);
c1 = g(y, t);
for (var i=0; i<l; ++i) c2[i] = y[i] + dt*c1[i]/2;
c2 = g(c2, t+dt/2);
for (var i=0; i<l; ++i) c3[i] = y[i] + dt*c2[i]/2;
c3 = g(c3, t+dt/2);
for (var i=0; i<l; ++i) c4[i] = y[i] + dt*c3[i];
c4 = g(c4, t+dt);
for (var i=0; i<l; ++i)
c1[i] = y[i] + dt*(c1[i]+2*(c2[i]+c3[i])+c4[i])/6;
return c1;
}
g= function (y, t) 
{
var l = y.length;
var v = new Array(l);
v[0]=-1/tau*y[0]+k/tau;
return v;
}
function data()
{
var logs2="";
	for(var i=0;i<a.length;i++)
	{
	logs2=logs2+a[i]+"\t"+b[i]+"\r\n";
	}
window.document.getElementById("ta").value=logs2;
}
function cos(x)
{
return Math.cos(x);
}
function sin(x)
{
return Math.sin(x);
}
function cl()
{
a= new Array(0);
b= new Array(0);
window.document.getElementById("ta").value="";
}
function sign(x)
{
if(x<0) 
{
return -1;
}
else
{
return +1;
}
}