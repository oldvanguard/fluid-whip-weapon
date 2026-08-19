window.PROGRAM={
 templates:{
  foundation:{name:'Foundation Cycle',days:[
   {id:'D1',name:'Chassis + FLUID',fit:'FIT-A',martial:'FLUID',intent:'Build core/base, then rehearse connected movement.'},
   {id:'D2',name:'Restore + Skill',fit:'FIT-R',martial:'FLUID',intent:'Mobility and low-load movement quality.'},
   {id:'D3',name:'Chassis + FLUID',fit:'FIT-B',martial:'FLUID',intent:'Hinge, trunk control and chained movement.'},
   {id:'D4',name:'Recovery',fit:'FIT-R',martial:null,intent:'Restore motion; no speed requirement.'},
   {id:'D5',name:'Base + Integration',fit:'FIT-C',martial:'FLUID',intent:'Balance, leg capacity and continuous flow.'},
   {id:'D6',name:'Optional Practice',fit:null,martial:'FLUID',intent:'Short quality session only if recovered.'},
   {id:'D7',name:'Off / Walk',fit:null,martial:null,intent:'Easy movement and recovery.'}]},
  performance:{name:'FLUID + WHIP Cycle',days:[
   {id:'D1',name:'Chassis + FLUID',fit:'FIT-A',martial:'FLUID',intent:'Maintain movement foundation.'},
   {id:'D2',name:'WHIP Quality',fit:'FIT-R',martial:'WHIP',intent:'Acceleration with clean braking.'},
   {id:'D3',name:'Strength + FLUID',fit:'FIT-B',martial:'FLUID',intent:'Strength transfer into connected motion.'},
   {id:'D4',name:'Recovery',fit:'FIT-R',martial:null,intent:'Reduce load and restore range.'},
   {id:'D5',name:'WHIP Integration',fit:'FIT-C',martial:'WHIP',intent:'Base stability under faster sequencing.'},
   {id:'D6',name:'Flow Practice',fit:null,martial:'FLUID',intent:'Continuous low-fatigue movement.'},
   {id:'D7',name:'Off / Walk',fit:null,martial:null,intent:'Recovery.'}]},
  application:{name:'Integrated WEAPON Cycle',days:[
   {id:'D1',name:'Chassis + FLUID',fit:'FIT-A',martial:'FLUID',intent:'Keep mechanics underneath application.'},
   {id:'D2',name:'WHIP + Timing',fit:'FIT-R',martial:'WHIP',intent:'Speed, recoil and rhythm.'},
   {id:'D3',name:'WEAPON Mechanics',fit:'FIT-B',martial:'WEAPON',intent:'Range mechanics and controlled application.'},
   {id:'D4',name:'Recovery',fit:'FIT-R',martial:null,intent:'Restore and consolidate.'},
   {id:'D5',name:'WEAPON Adaptability',fit:'FIT-C',martial:'WEAPON',intent:'Decision chains and range transitions.'},
   {id:'D6',name:'Integrated Flow',fit:null,martial:'INTEGRATE',intent:'FLUID → WHIP → WEAPON at controlled intensity.'},
   {id:'D7',name:'Off / Walk',fit:null,martial:null,intent:'Recovery.'}]}
 },
 chooseCycle:()=>{if(typeof weaponUnlocked==='function'&&weaponUnlocked())return'application';if(typeof whipUnlocked==='function'&&whipUnlocked())return'performance';return'foundation';},
 readinessModifier:()=>{const r=state.readiness||{};const vals=Object.values(r);if(!vals.length)return'NORMAL';const limited=vals.filter(x=>x===0).length;if(limited>=4)return'REBUILD';if(limited>=2)return'CONSERVATIVE';return'NORMAL';}
};
window.currentProgram=()=>PROGRAM.templates[PROGRAM.chooseCycle()];
window.programDay=(index)=>currentProgram().days[index%7];