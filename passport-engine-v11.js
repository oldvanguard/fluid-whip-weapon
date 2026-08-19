(()=>{
 const KEY='fww-passport-v11';
 const defaults=()=>({version:'1.1',week:1,phase:'P1',ladders:{mobility:'M1',squat:'S0',hinge:'H0',push:'P0',core:'C0',balance:'B0'},scores:{},stats:{sessions:0,qualityChains:0,decisionReps:0},history:[],lastAssessment:null});
 function load(){try{return {...defaults(),...JSON.parse(localStorage.getItem(KEY)||'{}')}}catch(e){return defaults()}}
 function save(s){localStorage.setItem(KEY,JSON.stringify(s));return s}
 function score(domain,test,value){const s=load();s.scores[domain]??={};s.scores[domain][test]=Math.max(0,Math.min(4,Number(value)||0));s.lastAssessment=new Date().toISOString();return save(s)}
 function completeSession(meta={}){const s=load();s.stats.sessions++;s.stats.qualityChains+=Number(meta.qualityChains||0);s.stats.decisionReps+=Number(meta.decisionReps||0);s.history.unshift({at:new Date().toISOString(),session:meta.session||'training',phase:meta.phase||s.phase,qualityChains:Number(meta.qualityChains||0),decisionReps:Number(meta.decisionReps||0)});s.history=s.history.slice(0,100);return save(s)}
 function setLadder(type,rung){const s=load();s.ladders[type]=rung;return save(s)}
 function gate(domain){const d=FWW_ASSESSMENTS.domains.find(x=>x.id===domain);if(!d)return false;const scores=load().scores[domain]||{};return d.tests.every(t=>(scores[t]||0)>=3)}
 function exportData(){const payload={exportedAt:new Date().toISOString(),passport:load(),programWeek:localStorage.getItem('fww-program-week-v11')||'1'};const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`fww-backup-${new Date().toISOString().slice(0,10)}.json`;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)}
 function importData(file){return new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>{try{const p=JSON.parse(r.result);if(!p.passport||!p.passport.version)throw Error('Invalid FWW backup');save(p.passport);if(p.programWeek)localStorage.setItem('fww-program-week-v11',String(p.programWeek));resolve(load())}catch(e){reject(e)}};r.onerror=reject;r.readAsText(file)})}
 window.FWW_PASSPORT={load,save,score,completeSession,setLadder,gate,exportData,importData,reset(){localStorage.removeItem(KEY);return load()}};
})();