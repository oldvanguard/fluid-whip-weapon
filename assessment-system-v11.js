window.FWW_ASSESSMENTS={
 scale:{0:'not assessed',1:'needs regression',2:'developing',3:'competent',4:'fluid under variation'},
 domains:[
  {id:'mobility',name:'Chain Mobility',tests:['ankle control','hip rotation/control','thoracic rotation','shoulder/scapular glide','segmented spinal wave']},
  {id:'base',name:'Base + Balance',tests:['ROOT posture','weight shift','angle step','pivot recovery','fast step + stick']},
  {id:'strength',name:'Chassis',tests:['current squat rung','current hinge rung','current push rung','core brace','suitcase hold/march']},
  {id:'fluid',name:'FLUID',tests:['ROOT→SHIFT','SHIFT→COIL','COIL→CHAIN','continuous recovery','3-minute flow']},
  {id:'whip',name:'WHIP',tests:['relax before launch','proximal-to-distal sequence','late acceleration','recoil','braking without stiffness']},
  {id:'range',name:'Range Continuity',tests:['R0↔R1','R1↔R2','R2↔R3','R3↔R4','R4↔R5','ANY→R0']},
  {id:'weapon',name:'WEAPON',tests:['interception','cover/parry + angle','compact structure','low-line integration','contact redirect','ground recovery']},
  {id:'adaptive',name:'Adaptive Decision',tests:['identify range','choose response family','change answer when cue changes','preserve exit','avoid prolonged grappling']}
 ],
 gateRule:'A phase gate requires every critical test at 3 or better. A score of 4 is mastery under variation, not a requirement to continue learning.',
 passport:{fields:['current week','phase','mobility level','squat rung','hinge rung','push rung','core rung','balance rung','FLUID level','WHIP level','range level','WEAPON level','adaptive level','sessions completed','quality chains','decision reps','last assessment'],storageKey:'fww-passport-v11'},
 readinessAdjustments:{green:'normal prescription',yellow:'reduce range/volume 20–30%; keep technical practice',red:'restore/recovery session; no ballistic or high-fatigue work'},
 reassess:'Formal assessment at the end of each 4-week phase; individual ladder skills may be re-tested sooner when clearly ready.'
};