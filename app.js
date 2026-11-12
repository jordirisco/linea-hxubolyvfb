/* Correo al que se envía la línea de vida (el de contacto público de la web). */
var DOCTOR_EMAIL = "jordi@jordiriscopsiquiatria.com";
var K = "v_zs-X4a3wOtCFoclzukyh-ROgzmi5cy"; /* clave compartida con el script: frena a los robots genéricos */
var PRIV_VER = "v1-2026-11";
var RESP = {name:"Dr. Jordi Risco Cabezos", colegiado:"COMG 6388", nif:"", address:"Carrer Nou 63-65, 17600 Figueres (Girona)", policy:"https://jordiriscopsiquiatria.com/aviso-legal-y-politica-de-privacidad/"};
var ENDPOINT = "https://script.google.com/macros/s/AKfycby8Fe07VD9TWwqtHDMdmXLbHzBBl09TdTi7ipABRer3pRz05nF-35n1T-qAewI4ovmpgQ/exec";

var T = {
 es:{
  eyebrow:"Antes de tu primera sesión", title:"Mi línea de vida",
  howTitle:"Cómo funciona",
  s1:"Dinos tu edad actual para que la línea llegue hasta hoy.",
  s2:"Pulsa «Añadir momento» por cada cosa importante que te haya pasado, buena o difícil. No hace falta que sea en orden.",
  s3:"Verás cómo se dibuja tu línea. Cuando quieras, pulsa «Enviar» y la recibirá tu psiquiatra.",
  soft:"No hace falta que lo cuentes todo. Si algo te resulta muy duro, basta con ponerle un título y dejar el resto para la consulta.",
  priv:"Lo que escribes se guarda solo en este móvil, en este navegador. Nadie más lo ve hasta que tú lo envías.",
  gotit:"Entendido", help:"Cómo funciona",
  curAge:"Tu edad actual", curAgePh:"Ej.: 34", years:"años",
  newBtn:"Añadir momento", send:"Enviar",
  stN:"momentos", stPos:"buenos", stNeg:"difíciles",
  chartCap:"Toca un punto para ver el momento. Arriba, lo bueno; abajo, lo difícil; cuanto más lejos del centro, más te marcó.",
  chartAge:"Edad", chartToday:"Hoy", chartGood:"Bueno", chartHard:"Difícil",
  emptyTitle:"Aún no hay momentos", emptyTxt:"Así se verá tu línea cuando añadas los primeros (los de este ejemplo son inventados):",
  example:"Ejemplo ficticio",
  edit:"Editar", del:"Eliminar", delAsk:"¿Eliminar este momento?", delYes:"Sí, eliminar", cancel:"Cancelar",
  kEmo:"Emoción", kStill:"Hoy", kTxt:"Con tus palabras",
  vpos:"Bueno", vneg:"Difícil", vmix:"De todo un poco",
  stillNo:"Ya no me afecta", stillSome:"Me afecta un poco", stillYes:"Aún me afecta",
  stages:["Infancia (0-11)","Adolescencia (12-17)","Juventud (18-29)","Adultez (30-59)","A partir de 60"],
  fNew:"Añadir momento", fEdit:"Editar momento", close:"Cerrar",
  fAge:"¿Qué edad tenías?", fAgeHint:"Aproximada. Si fue una etapa larga, pon la edad en que empezó.",
  fTitle:"¿Qué pasó?", fTitleHint:"En pocas palabras. Si no sabes por dónde empezar, toca una idea:", titlePh:"Por ejemplo: «Mis padres se separaron»",
  ideas:["Nacimiento de un hermano/a","Cambio de colegio o ciudad","Separación o conflicto en la familia","Pérdida de un ser querido","Enfermedad o accidente","Etapa difícil en el colegio","Primer amor","Un logro o éxito","Una ruptura","Empezar a trabajar","Problemas en el trabajo","Tener un hijo/a","Un viaje o experiencia feliz","Una mudanza"],
  fVal:"¿Cómo lo viviste?", fImp:"¿Cuánto te marcó?", fImpHint:"Toca un número. 1 es muy poco, 10 es lo que más te ha marcado en la vida.", low:"Poco", high:"Muchísimo",
  fEmo:"¿Qué sentías?", other:"Otra (opcional)",
  fStill:"¿Te sigue afectando hoy?",
  fTxt:"Cuéntalo con tus palabras (opcional)", fTxtHint:"Qué pasó, quién estaba, cómo te afectó. Lo que quieras.", txtPh:"Escribe aquí o déjalo para la consulta",
  save:"Guardar momento", saved:"Momento guardado", removed:"Momento eliminado",
  needAge:"Falta la edad: escribe un número.", needTitle:"Falta decir qué pasó, aunque sea en pocas palabras.", needVal:"Elige cómo lo viviste.", needImp:"Falta el impacto: toca un número del 1 al 10.",
  eTitle:"Enviar a tu psiquiatra", eName:"Tu nombre (opcional)", eNamePh:"Para que sepa de quién es",
  eHow:"Envía tu línea de vida a la consulta cuando quieras. Puedes enviarla varias veces: cada vez va la línea completa.",
  eCopy:"Copiar resumen", eMail:"Enviar por correo", eShare:"Compartir…", eDl:"Descargar archivo", eDlImg:"Descargar imagen", eImgPrev:"Así llegará tu línea a la consulta (con el detalle en texto debajo)", imgFoot:"Generado con la app «Mi línea de vida»", eConsent:"Al enviarlo, tu línea sale de tu móvil hacia la consulta. Hazlo solo si te parece bien.", eLong:"El resumen ya está copiado: pégalo en el cuerpo del correo.", eSub:"Línea de vida", eSend:"Enviar a la consulta", eMine:"Enviar desde mi correo", eSending:"Enviando…", eSent:"Enviado. Tu psiquiatra lo recibirá.", eFail:"No se pudo enviar directamente. Se abrirá tu correo.", eLast:"Último envío:", eContact:"Teléfono o correo (opcional)", eContactPh:"Para que puedan contestarte", pContact:"Contacto", rConsent:"Consentimiento (aviso de privacidad)", privLink:"Aviso de privacidad", privTitle:"Aviso de privacidad", privShort:"Responsable: Dr. Jordi Risco. Uso: tu valoración clínica. Al enviar das tu consentimiento explícito.", consent:"He leído el aviso de privacidad y consiento enviar mis datos de salud a la consulta.", shared:"Si compartes el móvil, otra persona podría ver tu línea.", copied:"Copiado", copyFail:"No se pudo copiar solo: selecciona el texto de abajo y cópialo.",
  eNone:"Todavía no tienes momentos que enviar.", ePrev:"Vista previa",
  eAddr:"Dirección:", eWarn:"Envíalo desde aquí o por correo, no por WhatsApp: son datos de salud.",
  wipe:"Borrar todo lo que he escrito", wipeAsk:"Se borrará todo de este dispositivo. No se puede deshacer.", wipeYes:"Sí, borrar todo", wiped:"Todo borrado",
  noStore:"Este navegador no permite guardar. Copia tu resumen antes de cerrar la página.",
  urg:"Si estás en una situación de urgencia, llama al 112. Si piensas en hacerte daño, llama al 024.",
  rec:"LÍNEA DE VIDA", pName:"Nombre", pAge:"Edad actual", rSum:"Resumen", rMom:"momentos", rGood:"buenos", rHard:"difíciles", rMix:"mixtos", rAge:"Edad", rVal:"Vivido como", rImp:"Impacto", rEmo:"Emoción", rStill:"Hoy", rTxt:"Relato", locale:"es-ES"
 },
 ca:{
  eyebrow:"Abans de la primera sessió", title:"La meva línia de vida",
  howTitle:"Com funciona",
  s1:"Digue’ns la teva edat actual perquè la línia arribi fins avui.",
  s2:"Prem «Afegir moment» per cada cosa important que t’hagi passat, bona o difícil. No cal que sigui en ordre.",
  s3:"Veuràs com es dibuixa la teva línia. Quan vulguis, prem «Enviar» i la rebrà el teu psiquiatre.",
  soft:"No cal que ho expliquis tot. Si alguna cosa et resulta molt dura, n’hi ha prou amb posar-hi un títol i deixar la resta per a la consulta.",
  priv:"El que escrius es guarda només en aquest mòbil, en aquest navegador. Ningú més ho veu fins que tu ho envies.",
  gotit:"Entès", help:"Com funciona",
  curAge:"La teva edat actual", curAgePh:"Ex.: 34", years:"anys",
  newBtn:"Afegir moment", send:"Enviar",
  stN:"moments", stPos:"bons", stNeg:"difícils",
  chartCap:"Toca un punt per veure el moment. A dalt, el bo; a baix, el difícil; com més lluny del centre, més t’ha marcat.",
  chartAge:"Edat", chartToday:"Avui", chartGood:"Bo", chartHard:"Difícil",
  emptyTitle:"Encara no hi ha moments", emptyTxt:"Així es veurà la teva línia quan afegeixis els primers (els d’aquest exemple són inventats):",
  example:"Exemple fictici",
  edit:"Editar", del:"Eliminar", delAsk:"Vols eliminar aquest moment?", delYes:"Sí, eliminar", cancel:"Cancel·lar",
  kEmo:"Emoció", kStill:"Avui", kTxt:"Amb les teves paraules",
  vpos:"Bo", vneg:"Difícil", vmix:"De tot una mica",
  stillNo:"Ja no m’afecta", stillSome:"M’afecta una mica", stillYes:"Encara m’afecta",
  stages:["Infància (0-11)","Adolescència (12-17)","Joventut (18-29)","Adultesa (30-59)","A partir de 60"],
  fNew:"Afegir moment", fEdit:"Editar moment", close:"Tancar",
  fAge:"Quina edat tenies?", fAgeHint:"Aproximada. Si va ser una etapa llarga, posa l’edat en què va començar.",
  fTitle:"Què va passar?", fTitleHint:"En poques paraules. O toca una idea:", titlePh:"Per exemple: «Els meus pares es van separar»",
  ideas:["Naixement d’un germà/ana","Canvi d’escola o de ciutat","Separació o conflicte a la família","Pèrdua d’un ésser estimat","Malaltia o accident","Etapa difícil a l’escola","Primer amor","Un assoliment o èxit","Una ruptura","Començar a treballar","Problemes a la feina","Tenir un fill/a","Un viatge o experiència feliç","Una mudança"],
  fVal:"Com ho vas viure?", fImp:"Quant t’ha marcat?", fImpHint:"Toca un número. 1 és molt poc, 10 és el que més t’ha marcat a la vida.", low:"Poc", high:"Moltíssim",
  fEmo:"Què senties?", other:"Una altra (opcional)",
  fStill:"Et continua afectant avui?",
  fTxt:"Explica-ho amb les teves paraules (opcional)", fTxtHint:"Què va passar, qui hi era, com t’ha afectat. El que vulguis.", txtPh:"Escriu aquí o deixa-ho per a la consulta",
  save:"Desar moment", saved:"Moment desat", removed:"Moment eliminat",
  needAge:"Falta l’edat: escriu un número.", needTitle:"Falta dir què va passar, encara que sigui en poques paraules.", needVal:"Tria com ho vas viure.", needImp:"Falta l’impacte: toca un número de l’1 al 10.",
  eTitle:"Enviar al teu psiquiatre", eName:"El teu nom (opcional)", eNamePh:"Perquè sàpiga de qui és",
  eHow:"Envia la teva línia de vida a la consulta quan vulguis. Pots enviar-la diverses vegades: cada cop va la línia completa.",
  eCopy:"Copiar resum", eMail:"Enviar per correu", eShare:"Compartir…", eDl:"Descarregar arxiu", eDlImg:"Descarregar imatge", eImgPrev:"Així arribarà la teva línia a la consulta (amb el detall en text a sota)", imgFoot:"Generat amb l’app «La meva línia de vida»", eConsent:"En enviar-la, la teva línia surt del teu mòbil cap a la consulta. Fes-ho només si et sembla bé.", eLong:"El resum ja està copiat: enganxa’l al cos del correu.", eSub:"Línia de vida", eSend:"Enviar a la consulta", eMine:"Enviar des del meu correu", eSending:"Enviant…", eSent:"Enviat. El teu psiquiatre ho rebrà.", eFail:"No s’ha pogut enviar directament. S’obrirà el teu correu.", eLast:"Últim enviament:", eContact:"Telèfon o correu (opcional)", eContactPh:"Perquè et puguin contestar", pContact:"Contacte", rConsent:"Consentiment (avís de privacitat)", privLink:"Avís de privacitat", privTitle:"Avís de privacitat", privShort:"Responsable: Dr. Jordi Risco. Ús: la teva valoració clínica. En enviar dones el teu consentiment explícit.", consent:"He llegit l’avís de privacitat i consento enviar les meves dades de salut a la consulta.", shared:"Si comparteixes el mòbil, una altra persona podria veure la teva línia.", copied:"Copiat", copyFail:"No s’ha pogut copiar sol: selecciona el text de sota i copia’l.",
  eNone:"Encara no tens moments per enviar.", ePrev:"Vista prèvia",
  eAddr:"Adreça:", eWarn:"Envia-ho des d’aquí o per correu, no per WhatsApp: són dades de salut.",
  wipe:"Esborrar tot el que he escrit", wipeAsk:"S’esborrarà tot d’aquest dispositiu. No es pot desfer.", wipeYes:"Sí, esborrar tot", wiped:"Tot esborrat",
  noStore:"Aquest navegador no permet desar. Copia el teu resum abans de tancar la pàgina.",
  urg:"Si ets en una situació d’urgència, truca al 112. Si penses a fer-te mal, truca al 024.",
  rec:"LÍNIA DE VIDA", pName:"Nom", pAge:"Edat actual", rSum:"Resum", rMom:"moments", rGood:"bons", rHard:"difícils", rMix:"mixtos", rAge:"Edat", rVal:"Viscut com", rImp:"Impacte", rEmo:"Emoció", rStill:"Avui", rTxt:"Relat", locale:"ca-ES"
 }
};
var EMO = [["alegria","Alegría","Alegria"],["tristeza","Tristeza","Tristesa"],["miedo","Miedo","Por"],["rabia","Rabia","Ràbia"],["verguenza","Vergüenza","Vergonya"],["culpa","Culpa","Culpa"],["soledad","Soledad","Solitud"],["alivio","Alivio","Alleujament"],["orgullo","Orgullo","Orgull"],["amor","Amor","Amor"],["confusion","Confusión","Confusió"],["vacio","Vacío","Buit"]];
var VAL = {pos:"vpos",neg:"vneg",mix:"vmix"};
var STILL = ["stillNo","stillSome","stillYes"];

var KEY="linea-vida-v1", mem={events:[],name:"",curAge:null,introHidden:false,lang:null}, storeOK=true;
function load(){ try{ var s=localStorage.getItem(KEY); if(s){ var o=JSON.parse(s); for(var k in o) mem[k]=o[k]; } }catch(e){ storeOK=false; } }
function save(){ try{ localStorage.setItem(KEY,JSON.stringify(mem)); }catch(e){ storeOK=false; } }
load();
var lang = mem.lang || ((navigator.language||"es").slice(0,2)==="ca" ? "ca" : "es");
var openId=null, draft=null, editing=false, sheet=null, delAsk=null, wipeAsk=false, toastTimer=null, backTo=null;
function t(k){ return T[lang][k]; }
function esc(s){ return String(s==null?"":s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];}); }
function uid(){ return Date.now().toString(36)+Math.random().toString(36).slice(2,6); }
function pad(n){ return (n<10?"0":"")+n; }
function nowLocal(){ var d=new Date(); return d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate())+"T"+pad(d.getHours())+":"+pad(d.getMinutes()); }
function fmtFull(ts){ return new Intl.DateTimeFormat(t("locale"),{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}).format(new Date(ts)); }
function emoLabel(k){ var o=EMO.filter(function(x){return x[0]===k;})[0]; return o? o[lang==="es"?1:2] : k; }
function emoLabels(e){ var a=(e.emo||[]).map(emoLabel); if(e.emoOther&&e.emoOther.trim()) a.push(e.emoOther.trim()); return a; }
function sval(e){ return e.valence==="pos"? e.impact : (e.valence==="neg"? -e.impact : 0); }
function sgn(e){ return (e.valence==="pos"?"+":(e.valence==="neg"?"−":"±"))+e.impact; }
function sorted(a){ return (a||mem.events).slice().sort(function(x,y){ return x.age-y.age || (x.id<y.id?-1:1); }); }
function stageIdx(age){ return age<12?0:(age<18?1:(age<30?2:(age<60?3:4))); }
function ageNum(v){ var n=parseInt(v,10); return (isNaN(n)||n<0||n>120)?null:n; }

/* ---------- Gráfico ---------- */
function chart(evs, cur, example){
  var PPY=12, L=34, R=18, TP=16, B=26, H=250, PH=H-TP-B;
  var mx=cur||0; evs.forEach(function(e){ if(e.age>mx) mx=e.age; });
  mx=Math.max(mx+2,22);
  var W=L+R+mx*PPY;
  function X(a){ return L+a*PPY; }
  function Y(v){ return TP+(10-v)/20*PH; }
  var s='<svg class="chart'+(example?' ex':'')+'" viewBox="0 0 '+W+' '+H+'" style="width:100%;min-width:'+(L+R+mx*8)+'px" role="img" aria-label="'+esc(t("title"))+'">';
  [-10,-5,5,10].forEach(function(v){ s+='<line class="ax" x1="'+L+'" x2="'+(W-R)+'" y1="'+Y(v)+'" y2="'+Y(v)+'"/>'; });
  s+='<line class="ax0" x1="'+L+'" x2="'+(W-R)+'" y1="'+Y(0)+'" y2="'+Y(0)+'"/>';
  var step=mx>50?10:5;
  for(var a=0;a<=mx;a+=step){ s+='<text class="axt" x="'+X(a)+'" y="'+(H-8)+'" text-anchor="middle">'+a+'</text>'; }
  s+='<text class="axl" x="'+(L+4)+'" y="'+(TP+10)+'">▲ '+esc(t("chartGood"))+'</text><text class="axl" x="'+(L+4)+'" y="'+(H-B-5)+'">▼ '+esc(t("chartHard"))+'</text>';
  if(cur!=null){ s+='<line class="today" x1="'+X(cur)+'" x2="'+X(cur)+'" y1="'+TP+'" y2="'+(H-B)+'"/><text class="axt" x="'+X(cur)+'" y="'+(TP-4)+'" text-anchor="middle" style="fill:var(--accent);font-weight:700">'+esc(t("chartToday"))+'</text>'; }
  var ss=sorted(evs);
  if(ss.length>1){ s+='<polyline class="ln" points="'+ss.map(function(e){return X(e.age)+','+Y(sval(e));}).join(" ")+'"/>'; }
  ss.forEach(function(e){
    var sel=!example&&openId===e.id, lab=e.age+" — "+e.title+" ("+sgn(e)+")";
    s+='<g'+(example?'':' data-act="pt" data-id="'+e.id+'" tabindex="0" role="button" aria-label="'+esc(lab)+'"')+'><circle class="hit" cx="'+X(e.age)+'" cy="'+Y(sval(e))+'" r="16"/><circle class="pt '+e.valence+(sel?' sel':'')+'" cx="'+X(e.age)+'" cy="'+Y(sval(e))+'" r="'+(sel?9:7)+'"/><title>'+esc(lab)+'</title></g>';
  });
  return s+'</svg>';
}
var EXAMPLE=[
  {id:"x1",age:6,title:"Cambio de colegio",valence:"neg",impact:5},
  {id:"x2",age:10,title:"Verano con los abuelos",valence:"pos",impact:7},
  {id:"x3",age:15,title:"Separación de mis padres",valence:"neg",impact:9},
  {id:"x4",age:22,title:"Primer trabajo",valence:"pos",impact:6},
  {id:"x5",age:27,title:"Ruptura",valence:"neg",impact:7},
  {id:"x6",age:31,title:"Nace mi hija",valence:"pos",impact:10}
];

/* ---------- Pantalla principal ---------- */
function render(){
  document.documentElement.lang=lang;
  var old=document.querySelector(".chartwrap"), sl=old?old.scrollLeft:0;
  var es=sorted(), h="";
  h+='<header class="top"><div><div class="eyebrow">'+esc(t("eyebrow"))+'</div><h1>'+esc(t("title"))+'</h1></div>';
  h+='<div class="langs" role="group" aria-label="Idioma / Idioma"><button data-act="lang" data-v="es" aria-pressed="'+(lang==="es")+'">ES</button><button data-act="lang" data-v="ca" aria-pressed="'+(lang==="ca")+'">CA</button></div></header>';
  if(!storeOK) h+='<div class="warn">'+esc(t("noStore"))+'</div>';
  if(!mem.introHidden){
    h+='<section class="card intro"><h2>'+esc(t("howTitle"))+'</h2><ol><li>'+esc(t("s1"))+'</li><li>'+esc(t("s2"))+'</li><li>'+esc(t("s3"))+'</li></ol><div class="sensitive">'+esc(t("soft"))+'</div><div class="priv">'+esc(t("priv"))+' '+esc(t("shared"))+'</div><p class="foot" style="margin:8px 0 0">'+esc(t("privShort"))+' <button class="linkbtn" data-act="privacy">'+esc(t("privLink"))+'</button></p><div class="row" style="margin-top:12px"><button class="btn primary" data-act="hideintro">'+esc(t("gotit"))+'</button></div></section>';
  } else {
    h+='<div class="row"><button class="btn ghost small" data-act="showintro">'+esc(t("help"))+'</button></div>';
  }
  h+='<section class="card"><label class="agerow" for="f-cur"><b style="font-family:var(--display)">'+esc(t("curAge"))+'</b><input type="number" inputmode="numeric" min="0" max="120" id="f-cur" data-f="curAge" class="age" style="max-width:96px;font-size:1.2rem;text-align:center" placeholder="'+esc(t("curAgePh"))+'" value="'+(mem.curAge==null?"":esc(mem.curAge))+'"><span style="color:var(--muted)">'+esc(t("years"))+'</span></label></section>';
  if(es.length){
    var np=0,nn=0; es.forEach(function(e){ if(e.valence==="pos") np++; else if(e.valence==="neg") nn++; });
    h+='<div class="stats"><div class="card stat"><b>'+es.length+'</b><span>'+esc(t("stN"))+'</span></div><div class="card stat"><b>'+np+'</b><span>'+esc(t("stPos"))+'</span></div><div class="card stat"><b>'+nn+'</b><span>'+esc(t("stNeg"))+'</span></div></div>';
    h+='<div class="card chartcard"><div class="chartwrap">'+chart(mem.events,mem.curAge,false)+'</div><div class="chartcap">'+esc(t("chartCap"))+'</div></div>';
    var cur=-1;
    es.forEach(function(e){
      var si=stageIdx(e.age);
      if(si!==cur){ cur=si; h+='<div class="stage">'+esc(t("stages")[si])+'</div>'; }
      var open=openId===e.id;
      h+='<article class="card entry" id="ev-'+e.id+'"><button class="head" data-act="toggle" data-id="'+e.id+'" aria-expanded="'+open+'"><span class="badge '+e.valence+'">'+esc(sgn(e))+'</span><span class="meta"><span class="age">'+esc(e.age)+' '+esc(t("years"))+'</span><div class="sum">'+esc(e.title)+'</div></span></button>';
      if(open){
        h+='<div class="body"><div style="font-weight:700">'+esc(e.title)+'</div><dl class="kv" style="margin:0">';
        var em=emoLabels(e);
        if(em.length) h+='<dt>'+esc(t("kEmo"))+'</dt><dd>'+esc(em.join(", "))+'</dd>';
        if(e.still!=null) h+='<dt>'+esc(t("kStill"))+'</dt><dd>'+esc(t(STILL[e.still]))+'</dd>';
        if(e.text) h+='<dt>'+esc(t("kTxt"))+'</dt><dd>'+esc(e.text)+'</dd>';
        h+='</dl>';
        if(delAsk===e.id){
          h+='<div class="row"><span>'+esc(t("delAsk"))+'</span><button class="btn small danger" data-act="delyes" data-id="'+e.id+'">'+esc(t("delYes"))+'</button><button class="btn small" data-act="delno">'+esc(t("cancel"))+'</button></div>';
        } else {
          h+='<div class="row"><button class="btn small" data-act="edit" data-id="'+e.id+'">'+esc(t("edit"))+'</button><button class="btn small danger" data-act="delask" data-id="'+e.id+'">'+esc(t("del"))+'</button></div>';
        }
        h+='</div>';
      }
      h+='</article>';
    });
  } else {
    h+='<div class="empty"><h2 style="font-size:1.2rem;color:var(--ink)">'+esc(t("emptyTitle"))+'</h2><p>'+esc(t("emptyTxt"))+'</p></div>';
    h+='<div class="card chartcard example"><div style="padding:0 12px"><span class="tag">'+esc(t("example"))+'</span></div><div class="chartwrap">'+chart(EXAMPLE,34,true)+'</div></div>';
  }
  h+='<p class="foot">'+esc(t("urg"))+'</p><p class="foot"><button class="linkbtn" data-act="privacy">'+esc(t("privLink"))+'</button></p>';
  h+='<div class="dock"><div class="in"><button class="btn primary" data-act="new">+ '+esc(t("newBtn"))+'</button>'+(es.length?'<button class="btn" data-act="export">'+esc(t("send"))+'</button>':'')+'</div></div>';
  document.getElementById("app").innerHTML=h;
  var nw=document.querySelector(".chartwrap"); if(nw) nw.scrollLeft=sl;
}

/* ---------- Formulario ---------- */
function valClass(){ return draft.valence?("v"+draft.valence):"vnone"; }
function renderForm(){
  var h='<div class="sheet" role="dialog" aria-modal="true" aria-label="'+esc(editing?t("fEdit"):t("fNew"))+'"><div class="in">';
  h+='<div class="bar"><h2>'+esc(editing?t("fEdit"):t("fNew"))+'</h2><button class="btn small ghost" data-act="closesheet">'+esc(t("close"))+'</button></div>';
  h+='<fieldset><legend><label for="f-age">'+esc(t("fAge"))+'</label></legend><p class="hint">'+esc(t("fAgeHint"))+'</p><div class="agerow"><input type="number" inputmode="numeric" min="0" max="120" id="f-age" data-f="age" class="age" value="'+(draft.age==null?"":esc(draft.age))+'" placeholder="0"><span style="color:var(--muted)">'+esc(t("years"))+'</span></div></fieldset>';
  h+='<fieldset><legend><label for="f-title">'+esc(t("fTitle"))+'</label></legend><input type="text" id="f-title" data-f="title" maxlength="120" placeholder="'+esc(t("titlePh"))+'" value="'+esc(draft.title)+'" style="margin-top:6px"><p class="hint" style="margin:10px 0 6px">'+esc(t("fTitleHint"))+'</p><div class="ideas">'+t("ideas").map(function(x,i){return '<button type="button" class="chip" data-act="idea" data-i="'+i+'">'+esc(x)+'</button>';}).join("")+'</div></fieldset>';
  h+='<fieldset><legend id="lg-val">'+esc(t("fVal"))+'</legend><div class="vgrid" role="group" aria-labelledby="lg-val">'+["pos","neg","mix"].map(function(v){return '<button type="button" class="'+v+'" data-act="val" data-v="'+v+'" aria-pressed="'+(draft.valence===v)+'">'+esc(t(VAL[v]))+'</button>';}).join("")+'</div></fieldset>';
  h+='<fieldset><legend id="lg-imp">'+esc(t("fImp"))+'</legend><p class="hint">'+esc(t("fImpHint"))+'</p><div class="scale '+valClass()+'" id="scale" role="group" aria-labelledby="lg-imp">';
  for(var i=1;i<=10;i++) h+='<button type="button" data-act="imp" data-v="'+i+'" aria-pressed="'+(draft.impact===i)+'">'+i+'</button>';
  h+='</div><div class="scalecap"><span>1 · '+esc(t("low"))+'</span><span>10 · '+esc(t("high"))+'</span></div></fieldset>';
  h+='<fieldset><legend id="lg-emo">'+esc(t("fEmo"))+'</legend><div class="chips" role="group" aria-labelledby="lg-emo">'+EMO.map(function(o){return '<button type="button" class="chip" data-act="chip" data-k="'+o[0]+'" aria-pressed="'+(draft.emo.indexOf(o[0])>-1)+'">'+esc(o[lang==="es"?1:2])+'</button>';}).join("")+'</div><input type="text" id="f-emoOther" data-f="emoOther" maxlength="80" placeholder="'+esc(t("other"))+'" value="'+esc(draft.emoOther)+'" aria-label="'+esc(t("fEmo")+" — "+t("other"))+'"></fieldset>';
  h+='<fieldset><legend id="lg-still">'+esc(t("fStill"))+'</legend><div class="chips" role="group" aria-labelledby="lg-still">'+STILL.map(function(k,i){return '<button type="button" class="chip" data-act="still" data-v="'+i+'" aria-pressed="'+(draft.still===i)+'">'+esc(t(k))+'</button>';}).join("")+'</div></fieldset>';
  h+='<fieldset><legend><label for="f-text">'+esc(t("fTxt"))+'</label></legend><p class="hint">'+esc(t("fTxtHint"))+'</p><textarea id="f-text" data-f="text" maxlength="1500" placeholder="'+esc(t("txtPh"))+'">'+esc(draft.text)+'</textarea><p class="err" id="f-err" role="alert" hidden></p></fieldset>';
  h+='</div><div class="savebar"><div class="in2"><button class="btn" data-act="closesheet">'+esc(t("cancel"))+'</button><button class="btn primary" data-act="savefm">'+esc(t("save"))+'</button></div></div></div>';
  document.getElementById("layer").innerHTML=h; sheet="form"; document.body.style.overflow="hidden";
  var s=document.querySelector(".sheet"); if(s) s.scrollTop=0;
}

/* ---------- Exportar ---------- */
function valWord(v){ return t(VAL[v]); }
function buildText(){
  var es=sorted(), np=0,nn=0,nm=0, L=[t("rec")];
  es.forEach(function(e){ if(e.valence==="pos") np++; else if(e.valence==="neg") nn++; else nm++; });
  if(mem.name&&mem.name.trim()) L.push(t("pName")+": "+mem.name.trim());
  if(mem.contact&&mem.contact.trim()) L.push(t("pContact")+": "+mem.contact.trim());
  if(mem.curAge!=null) L.push(t("pAge")+": "+mem.curAge);
  if(mem.consent) L.push(t("rConsent")+": "+fmtFull(mem.consent.ts)+" ("+mem.consent.ver+")");
  L.push(t("rSum")+": "+es.length+" "+t("rMom")+" ("+np+" "+t("rGood")+", "+nn+" "+t("rHard")+(nm?", "+nm+" "+t("rMix"):"")+")");
  L.push("");
  es.forEach(function(e,i){
    L.push((i+1)+") "+t("rAge")+" "+e.age+" — "+e.title.replace(/\s*\n\s*/g," "));
    L.push("   "+t("rVal")+": "+valWord(e.valence)+" · "+t("rImp")+": "+e.impact+"/10");
    var em=emoLabels(e); if(em.length) L.push("   "+t("rEmo")+": "+em.join(", "));
    if(e.still!=null) L.push("   "+t("rStill")+": "+t(STILL[e.still]));
    if(e.text&&e.text.trim()) L.push("   "+t("rTxt")+": "+e.text.trim().replace(/\s*\n\s*/g," "));
    L.push("");
  });
  return L.join("\n").trim();
}

/* ---------- Imagen para el correo ---------- */
function buildImage(){
  var fonts=["700 40px 'Bricolage Grotesque'","400 24px 'Atkinson Hyperlegible'","700 24px 'Atkinson Hyperlegible'"];
  return Promise.all(fonts.map(function(f){ return document.fonts?document.fonts.load(f):null; })).catch(function(){}).then(function(){
    var es=sorted(), W=1400, P=60, HEAD=170, CH=560, ROW=46, n=es.length, rows=Math.ceil(n/2);
    var H=HEAD+CH+40+rows*ROW+110;
    var cv=document.createElement("canvas"); cv.width=W; cv.height=H; var c=cv.getContext("2d");
    var COL={pos:"#3a8c82",neg:"#c0452c",mix:"#c98a14"}, INK="#14292b", MUT="#566b6c", LINE="#d3dedc", ACC="#0f5f63";
    var DF="'Bricolage Grotesque',Trebuchet MS,sans-serif", BF="'Atkinson Hyperlegible',Arial,sans-serif";
    c.fillStyle="#fff"; c.fillRect(0,0,W,H);
    c.fillStyle=ACC; c.fillRect(0,0,W,12);
    c.fillStyle=INK; c.font="700 58px "+DF; c.textBaseline="alphabetic"; c.fillText(t("rec"),P,92);
    var sub=[]; if(mem.name&&mem.name.trim()) sub.push(mem.name.trim()); if(mem.curAge!=null) sub.push(t("pAge")+": "+mem.curAge); sub.push(new Intl.DateTimeFormat(t("locale"),{day:"numeric",month:"long",year:"numeric"}).format(new Date()));
    c.fillStyle=MUT; c.font="400 30px "+BF; c.fillText(sub.join("  ·  "),P,140);
    var L=P+60, R=W-P, T=HEAD+20, B=HEAD+CH-60;
    var mx=mem.curAge||0; es.forEach(function(e){ if(e.age>mx) mx=e.age; }); mx=Math.max(mx+2,20);
    function X(a){ return L+a/mx*(R-L); } function Y(v){ return T+(10-v)/20*(B-T); }
    c.font="400 22px "+BF; c.textAlign="right";
    [[10,"+10"],[5,"+5"],[0,"0"],[-5,"\u22125"],[-10,"\u221210"]].forEach(function(g){ c.strokeStyle=g[0]===0?MUT:LINE; c.lineWidth=g[0]===0?3:1.5; c.beginPath(); c.moveTo(L,Y(g[0])); c.lineTo(R,Y(g[0])); c.stroke(); c.fillStyle=MUT; c.fillText(g[1],L-12,Y(g[0])+8); });
    c.textAlign="center"; var step=mx>50?10:5;
    for(var a=0;a<=mx;a+=step){ c.fillStyle=MUT; c.fillText(String(a),X(a),B+40); }
    c.textAlign="left"; c.fillStyle=MUT; c.font="400 22px "+BF; c.fillText("\u25B2 "+t("chartGood"),L+10,T+28); c.fillText("\u25BC "+t("chartHard"),L+10,B-14);
    if(mem.curAge!=null){ c.strokeStyle=ACC; c.lineWidth=2.5; c.setLineDash([8,8]); c.beginPath(); c.moveTo(X(mem.curAge),T-6); c.lineTo(X(mem.curAge),B); c.stroke(); c.setLineDash([]); c.fillStyle=ACC; c.font="700 24px "+BF; c.textAlign="center"; c.fillText(t("chartToday"),X(mem.curAge),T-14); }
    if(es.length>1){ c.strokeStyle=ACC; c.globalAlpha=.7; c.lineWidth=4; c.lineJoin="round"; c.beginPath(); es.forEach(function(e,i){ var x=X(e.age), y=Y(sval(e)); if(i) c.lineTo(x,y); else c.moveTo(x,y); }); c.stroke(); c.globalAlpha=1; }
    c.textAlign="center"; c.textBaseline="middle";
    es.forEach(function(e,i){ var x=X(e.age), y=Y(sval(e)); c.fillStyle=COL[e.valence]; c.beginPath(); c.arc(x,y,21,0,6.2832); c.fill(); c.lineWidth=4; c.strokeStyle="#fff"; c.stroke(); c.fillStyle="#fff"; c.font="700 22px "+BF; c.fillText(String(i+1),x,y+1); });
    c.textBaseline="alphabetic";
    var LY=HEAD+CH+10, colW=(W-2*P)/2;
    c.strokeStyle=LINE; c.lineWidth=2; c.beginPath(); c.moveTo(P,LY); c.lineTo(W-P,LY); c.stroke();
    es.forEach(function(e,i){
      var col=i<rows?0:1, r=i<rows?i:i-rows, x0=P+col*colW, y0=LY+34+r*ROW;
      c.fillStyle=COL[e.valence]; c.beginPath(); c.arc(x0+19,y0+6,19,0,6.2832); c.fill();
      c.fillStyle="#fff"; c.font="700 20px "+BF; c.textAlign="center"; c.textBaseline="middle"; c.fillText(String(i+1),x0+19,y0+7); c.textBaseline="alphabetic";
      c.textAlign="left"; var tail="  ("+sgn(e)+")", head=e.age+" "+t("years")+" \u00b7 ";
      c.font="400 25px "+BF; var max=colW-70-c.measureText(tail).width, txt=head+e.title;
      if(c.measureText(txt).width>max){ while(txt.length>3&&c.measureText(txt+"\u2026").width>max) txt=txt.slice(0,-1); txt=txt+"\u2026"; }
      c.fillStyle=INK; c.fillText(txt,x0+48,y0+14); var w=c.measureText(txt).width; c.fillStyle=COL[e.valence]; c.font="700 25px "+BF; c.fillText(tail,x0+48+w,y0+14);
    });
    c.fillStyle=MUT; c.font="400 20px "+BF; c.textAlign="left"; c.fillText(t("imgFoot"),P,H-34);
    return cv.toDataURL("image/png");
  });
}

function renderExport(){
  var has=mem.events.length>0, txt=has?buildText():"";
  var h='<div class="sheet" role="dialog" aria-modal="true" aria-label="'+esc(t("eTitle"))+'"><div class="in">';
  h+='<div class="bar"><h2>'+esc(t("eTitle"))+'</h2><button class="btn small ghost" data-act="closesheet">'+esc(t("close"))+'</button></div>';
  if(!has){ h+='<p>'+esc(t("eNone"))+'</p>'; }
  else{
    h+='<p>'+esc(t("eHow"))+'</p><div class="warn">'+esc(t("eWarn"))+'</div>';
    h+='<fieldset><legend>'+esc(t("eImgPrev"))+'</legend><img id="img-prev" alt="" style="width:100%;height:auto;border:1px solid var(--line);border-radius:12px;background:#fff;min-height:80px"></fieldset>';
    h+='<fieldset><legend><label for="f-name">'+esc(t("eName"))+'</label></legend><input type="text" id="f-name" data-f="name" placeholder="'+esc(t("eNamePh"))+'" value="'+esc(mem.name||"")+'" autocomplete="name"></fieldset>';
    h+='<fieldset><legend><label for="f-contact">'+esc(t("eContact"))+'</label></legend><input type="text" id="f-contact" data-f="contact" placeholder="'+esc(t("eContactPh"))+'" value="'+esc(mem.contact||"")+'" autocomplete="off"></fieldset>';
    var dis=mem.consent?'':' disabled';
    h+='<div class="consent"><input type="checkbox" id="f-consent" data-f="consent"'+(mem.consent?' checked':'')+'><label for="f-consent">'+esc(t("consent"))+' <button class="linkbtn" data-act="privacy">'+esc(t("privLink"))+'</button></label></div>';
    if(ENDPOINT) h+='<button class="btn primary" id="b-send" data-act="senddirect"'+dis+' style="width:100%;min-height:54px;font-size:1.05rem">'+esc(t("eSend"))+'</button>'+(mem.lastSent?'<p class="hint">'+esc(t("eLast"))+' '+esc(fmtFull(mem.lastSent))+'</p>':'');
    h+='<div class="row"><button class="btn'+(ENDPOINT?'':' primary')+'" data-act="sendmail"'+dis+'>'+esc(ENDPOINT?t("eMine"):t("eMail"))+'</button>';
    if(navigator.share) h+='<button class="btn" data-act="share"'+dis+'>'+esc(t("eShare"))+'</button>';
    h+='<button class="btn" data-act="dlimg">'+esc(t("eDlImg"))+'</button><button class="btn" data-act="copytxt">'+esc(t("eCopy"))+'</button><button class="btn" data-act="dl">'+esc(t("eDl"))+'</button></div>';
    h+='<p class="hint">'+(ENDPOINT?'':esc(t("eAddr"))+' <b>'+esc(DOCTOR_EMAIL)+'</b><br>')+esc(t("eConsent"))+'</p>';
    h+='<fieldset><legend><label for="f-prev">'+esc(t("ePrev"))+'</label></legend><textarea id="f-prev" class="preview" readonly>'+esc(txt)+'</textarea></fieldset>';
  }
  h+='<div style="border-top:1px solid var(--line);padding-top:14px">';
  if(wipeAsk){ h+='<p>'+esc(t("wipeAsk"))+'</p><div class="row"><button class="btn small danger" data-act="wipeyes">'+esc(t("wipeYes"))+'</button><button class="btn small" data-act="wipeno">'+esc(t("cancel"))+'</button></div>'; }
  else if(has){ h+='<button class="btn small danger" data-act="wipe">'+esc(t("wipe"))+'</button>'; }
  h+='</div></div></div>';
  document.getElementById("layer").innerHTML=h; sheet="export"; document.body.style.overflow="hidden";
  if(has) buildImage().then(function(u){ var im=document.getElementById("img-prev"); if(im) im.src=u; }).catch(function(){});
}

function privSections(){
  var r=RESP, es=lang==="es";
  var who=r.name+" ("+r.colegiado+")"+(r.nif?", NIF "+r.nif:"")+(r.address?", "+r.address:"")+". "+(es?"Contacto: ":"Contacte: ")+DOCTOR_EMAIL+".";
  if(es) return [
   ["Responsable",who+" Consulta de psiquiatría y psicoterapia en Figueres (Girona)."],
   ["Qué datos tratamos","Lo que escribes en tu línea de vida (edades, hechos importantes, cómo los viviste, emociones y relatos) y, si quieres, tu nombre, tu edad actual y un teléfono o correo. Son datos de salud y pueden incluir información sensible. Escribe solo lo que te sientas cómodo/a compartiendo."],
   ["Para qué","Preparar y realizar tu valoración y tratamiento (asistencia sanitaria) y, si lo has indicado, contactar contigo."],
   ["Base legal","Tu consentimiento explícito al marcar la casilla y pulsar Enviar (art. 6.1.a y 9.2.a RGPD) y la prestación de asistencia sanitaria (art. 9.2.h RGPD)."],
   ["En tu móvil","Hasta que lo envías, lo que escribes se guarda solo en este navegador de tu móvil, sin cifrar. Si compartes el móvil, otra persona podría verlo. Puedes borrarlo cuando quieras con «Borrar todo lo que he escrito»."],
   ["A quién se comunica","Al enviar, tu línea de vida viaja cifrada (HTTPS) a un servicio de Google que la reenvía al correo de la consulta. Google actúa como encargado del tratamiento y puede tratar datos fuera del Espacio Económico Europeo con las garantías que prevé la ley. No se ceden a otros terceros salvo obligación legal."],
   ["Cuánto se conserva","Si inicias tratamiento, se incorpora a tu historia clínica y se conserva durante los plazos que fija la ley. Si no llega a iniciarse, se suprime."],
   ["Tus derechos","Puedes pedir acceso, rectificación, supresión, limitación, oposición, portabilidad y retirar tu consentimiento escribiendo a "+DOCTOR_EMAIL+". Si crees que no hemos atendido tu petición, puedes reclamar ante la Agencia Española de Protección de Datos (aepd.es)."],
   ["Cookies y terceros","Esta aplicación no usa cookies, analítica ni servicios de terceros para mostrarse: las tipografías van incluidas en la propia app."],
   ["Menores","Si eres menor de edad, habla con tu madre, padre o tutor antes de enviar."]
  ];
  return [
   ["Responsable",who+" Consulta de psiquiatria i psicoteràpia a Figueres (Girona)."],
   ["Quines dades tractem","El que escrius a la teva línia de vida (edats, fets importants, com els vas viure, emocions i relats) i, si vols, el teu nom, la teva edat actual i un telèfon o correu. Són dades de salut i poden incloure informació sensible. Escriu només el que et sentis còmode/a compartint."],
   ["Per a què","Preparar i fer la teva valoració i tractament (assistència sanitària) i, si ho has indicat, contactar amb tu."],
   ["Base legal","El teu consentiment explícit en marcar la casella i prémer Enviar (art. 6.1.a i 9.2.a RGPD) i la prestació d’assistència sanitària (art. 9.2.h RGPD)."],
   ["Al teu mòbil","Fins que ho envies, el que escrius es guarda només en aquest navegador del teu mòbil, sense xifrar. Si comparteixes el mòbil, una altra persona ho podria veure. Ho pots esborrar quan vulguis amb «Esborrar tot el que he escrit»."],
   ["A qui es comunica","En enviar, la teva línia de vida viatja xifrada (HTTPS) a un servei de Google que la reenvia al correu de la consulta. Google actua com a encarregat del tractament i pot tractar dades fora de l’Espai Econòmic Europeu amb les garanties que preveu la llei. No es cedeixen a altres tercers tret d’obligació legal."],
   ["Quant es conserva","Si inicies tractament, s’incorpora a la teva història clínica i es conserva durant els terminis que fixa la llei. Si no arriba a iniciar-se, se suprimeix."],
   ["Els teus drets","Pots demanar accés, rectificació, supressió, limitació, oposició, portabilitat i retirar el consentiment escrivint a "+DOCTOR_EMAIL+". Si creus que no hem atès la teva petició, pots reclamar davant l’Agència Espanyola de Protecció de Dades (aepd.es)."],
   ["Cookies i tercers","Aquesta aplicació no fa servir cookies, analítica ni serveis de tercers per mostrar-se: les tipografies van incloses a la pròpia app."],
   ["Menors","Si ets menor d’edat, parla amb la teva mare, pare o tutor abans d’enviar."]
  ];
}
function renderPrivacy(){
  var h='<div class="sheet" role="dialog" aria-modal="true" aria-label="'+esc(t("privTitle"))+'"><div class="in priv">';
  h+='<div class="bar"><h2>'+esc(t("privTitle"))+'</h2><button class="btn small ghost" data-act="closeprivacy">'+esc(t("close"))+'</button></div>';
  privSections().forEach(function(x){ h+='<section class="priv-sec"><h3>'+esc(x[0])+'</h3><p>'+esc(x[1])+'</p></section>'; });
  h+='<section class="priv-sec"><p><a href="'+esc(RESP.policy)+'" target="_blank" rel="noopener noreferrer">'+esc(lang==="es"?"Política de privacidad de la web":"Política de privacitat del web")+'</a> · v'+esc(PRIV_VER)+'</p></section>';
  h+='</div></div>';
  document.getElementById("layer").innerHTML=h; sheet="privacy"; document.body.style.overflow="hidden";
  var sh=document.querySelector(".sheet"); if(sh) sh.scrollTop=0;
}
function closeSheet(){ document.getElementById("layer").innerHTML=""; sheet=null; draft=null; wipeAsk=false; document.body.style.overflow=""; }
function toast(msg){
  var old=document.getElementById("toast"); if(old) old.remove();
  var d=document.createElement("div"); d.id="toast"; d.className="toast"; d.setAttribute("role","status"); d.textContent=msg; document.body.appendChild(d);
  clearTimeout(toastTimer); toastTimer=setTimeout(function(){ d.remove(); },2200);
}
function copy(txt){
  var done=function(ok){ if(ok) toast(t("copied")); else { toast(t("copyFail")); var p=document.getElementById("f-prev"); if(p){ p.focus(); p.select(); } } };
  try{ navigator.clipboard.writeText(txt).then(function(){done(true);},function(){done(false);}); }catch(e){ done(false); }
}
function formErr(msg,id){ var er=document.getElementById("f-err"); er.textContent=msg; er.hidden=false; var el=id&&document.getElementById(id); if(el&&el.focus) el.focus(); er.scrollIntoView({block:"center"}); }

/* ---------- Eventos ---------- */
document.addEventListener("click",function(ev){
  var b=ev.target.closest("[data-act]"); if(!b) return;
  var a=b.getAttribute("data-act"), id=b.getAttribute("data-id");
  if(a==="lang"){ lang=b.getAttribute("data-v"); mem.lang=lang; save(); render(); if(sheet==="export") renderExport(); }
  else if(a==="hideintro"){ mem.introHidden=true; save(); render(); }
  else if(a==="showintro"){ mem.introHidden=false; save(); render(); }
  else if(a==="toggle"){ openId=(openId===id?null:id); delAsk=null; render(); }
  else if(a==="pt"){ openId=id; delAsk=null; render(); var c=document.getElementById("ev-"+id); if(c) c.scrollIntoView({block:"center",behavior:"smooth"}); }
  else if(a==="new"){ editing=false; draft={id:uid(),age:null,title:"",valence:"",impact:0,emo:[],emoOther:"",still:null,text:""}; renderForm(); }
  else if(a==="edit"){ var e=mem.events.filter(function(x){return x.id===id;})[0]; if(e){ editing=true; draft=JSON.parse(JSON.stringify(e)); if(!draft.emo) draft.emo=[]; renderForm(); } }
  else if(a==="delask"){ delAsk=id; render(); }
  else if(a==="delno"){ delAsk=null; render(); }
  else if(a==="delyes"){ mem.events=mem.events.filter(function(x){return x.id!==id;}); save(); delAsk=null; openId=null; render(); toast(t("removed")); }
  else if(a==="closesheet"){ closeSheet(); }
  else if(a==="privacy"){ backTo=sheet; renderPrivacy(); }
  else if(a==="closeprivacy"){ if(backTo==="export"){ backTo=null; renderExport(); } else { backTo=null; closeSheet(); } }
  else if(a==="idea"){ var ti=document.getElementById("f-title"); ti.value=t("ideas")[parseInt(b.getAttribute("data-i"),10)]; draft.title=ti.value; ti.focus(); }
  else if(a==="val"){ draft.valence=b.getAttribute("data-v"); document.querySelectorAll(".vgrid button").forEach(function(x){ x.setAttribute("aria-pressed",String(x===b)); }); document.getElementById("scale").className="scale "+valClass(); }
  else if(a==="imp"){ draft.impact=parseInt(b.getAttribute("data-v"),10); document.querySelectorAll("#scale button").forEach(function(x){ x.setAttribute("aria-pressed",String(x===b)); }); }
  else if(a==="chip"){ var k=b.getAttribute("data-k"), i=draft.emo.indexOf(k); if(i>-1) draft.emo.splice(i,1); else draft.emo.push(k); b.setAttribute("aria-pressed",String(i===-1)); }
  else if(a==="still"){ var v=parseInt(b.getAttribute("data-v"),10); draft.still=(draft.still===v?null:v); document.querySelectorAll('[data-act="still"]').forEach(function(x){ x.setAttribute("aria-pressed",String(parseInt(x.getAttribute("data-v"),10)===draft.still)); }); }
  else if(a==="savefm"){
    var ag=ageNum(draft.age);
    if(ag===null){ formErr(t("needAge"),"f-age"); return; }
    if(!draft.title||!draft.title.trim()){ formErr(t("needTitle"),"f-title"); return; }
    if(!draft.valence){ formErr(t("needVal")); return; }
    if(!draft.impact){ formErr(t("needImp")); return; }
    draft.age=ag; draft.title=draft.title.trim();
    var ix=-1; mem.events.forEach(function(x,j){ if(x.id===draft.id) ix=j; });
    if(ix>-1) mem.events[ix]=draft; else mem.events.push(draft);
    var sid=draft.id; save(); openId=sid; closeSheet(); render(); toast(t("saved")); window.scrollTo(0,0);
  }
  else if(a==="export"){ renderExport(); }
  else if(a==="copytxt"){ copy(buildText()); }
  else if(a==="senddirect"){
    var bt=b, txt0=buildText(), subj0=t("rec")+(mem.name&&mem.name.trim()?" — "+mem.name.trim():"");
    bt.disabled=true; bt.textContent=t("eSending");
    buildImage().then(function(u){ return u.split(",")[1]; }, function(){ return ""; }).then(function(png){
      return fetch(ENDPOINT,{method:"POST",redirect:"follow",credentials:"omit",referrerPolicy:"no-referrer",cache:"no-store",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify({subject:subj0,text:txt0,count:mem.events.length,img:png,hp:"",k:K})});
    })
      .then(function(r){ if(!r.ok) throw new Error("http"); return r.json(); })
      .then(function(j){ if(!j||!j.ok) throw new Error("srv"); mem.lastSent=nowLocal(); save(); renderExport(); toast(t("eSent")); })
      .catch(function(){ bt.disabled=false; bt.textContent=t("eSend"); toast(t("eFail")); setTimeout(function(){ var bd=encodeURIComponent(txt0).length>1800?t("eSub")+" ("+mem.events.length+")\n\n":txt0; if(bd!==txt0) copy(txt0); window.location.href="mailto:"+DOCTOR_EMAIL+"?subject="+encodeURIComponent(subj0)+"&body="+encodeURIComponent(bd); },1500); });
  }
  else if(a==="sendmail"){
    var txt=buildText(), subj=t("rec")+(mem.name&&mem.name.trim()?" — "+mem.name.trim():"");
    var body=txt, long=false;
    if(encodeURIComponent(txt).length>1800){ long=true; body=t("eSub")+" ("+mem.events.length+")\n\n"; copy(txt); }
    window.location.href="mailto:"+DOCTOR_EMAIL+"?subject="+encodeURIComponent(subj)+"&body="+encodeURIComponent(body);
    if(long) toast(t("eLong"));
  }
  else if(a==="share"){ var tx=buildText(); navigator.share({title:t("rec"),text:tx}).catch(function(){}); }
  else if(a==="dl"){
    var bl=new Blob([buildText()],{type:"text/plain;charset=utf-8"}), u=URL.createObjectURL(bl), an=document.createElement("a");
    an.href=u; an.download="linea-de-vida-"+nowLocal().slice(0,10)+".txt"; document.body.appendChild(an); an.click(); an.remove(); setTimeout(function(){URL.revokeObjectURL(u);},1000);
  }
  else if(a==="dlimg"){ buildImage().then(function(u){ var an=document.createElement("a"); an.href=u; an.download="linea-de-vida-"+nowLocal().slice(0,10)+".png"; document.body.appendChild(an); an.click(); an.remove(); }); }
  else if(a==="wipe"){ wipeAsk=true; renderExport(); }
  else if(a==="wipeno"){ wipeAsk=false; renderExport(); }
  else if(a==="wipeyes"){ mem.events=[]; mem.name=""; mem.contact=""; mem.curAge=null; mem.consent=null; mem.lastSent=null; save(); wipeAsk=false; closeSheet(); render(); toast(t("wiped")); }
});
document.addEventListener("keydown",function(ev){
  if((ev.key==="Enter"||ev.key===" ")&&ev.target.getAttribute&&ev.target.getAttribute("data-act")==="pt"){ ev.preventDefault(); ev.target.dispatchEvent(new MouseEvent("click",{bubbles:true})); }
});
document.addEventListener("input",function(ev){
  var f=ev.target.getAttribute&&ev.target.getAttribute("data-f"); if(!f) return;
  if(f==="consent"){
    mem.consent=ev.target.checked?{ver:PRIV_VER,ts:nowLocal()}:null; save();
    document.querySelectorAll('[data-act="senddirect"],[data-act="sendmail"],[data-act="share"]').forEach(function(b){ b.disabled=!mem.consent; });
    var pv=document.getElementById("f-prev"); if(pv) pv.value=buildText(); return;
  }
  if(f==="curAge"){ mem.curAge=ageNum(ev.target.value); save(); var w=document.querySelector(".chartwrap"); if(w&&mem.events.length){ var sl=w.scrollLeft; w.innerHTML=chart(mem.events,mem.curAge,false); w.scrollLeft=sl; } return; }
  if(f==="name"||f==="contact"){ mem[f]=ev.target.value; save(); var p=document.getElementById("f-prev"); if(p) p.value=buildText(); }
  else if(draft){ draft[f]=ev.target.value; }
});
render();
if("serviceWorker" in navigator){ window.addEventListener("load",function(){ navigator.serviceWorker.register("sw.js").catch(function(){}); }); }
