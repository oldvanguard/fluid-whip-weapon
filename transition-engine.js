window.TRANSITIONS={
 stimuli:[
 {id:'space',name:'Space Available',desc:'Distance and exit remain available.'},
 {id:'closing',name:'Pressure Closing',desc:'The other person is reducing distance.'},
 {id:'line',name:'Direct Line Pressure',desc:'Pressure is arriving through a direct path.'},
 {id:'crowded',name:'Range Collapsed',desc:'Space has compressed into short/contact range.'},
 {id:'grip',name:'Contact / Grip Pressure',desc:'Close contact is limiting free movement.'},
 {id:'offbase',name:'Balance Disrupted',desc:'Your base or posture has been compromised.'}
 ],
 responses:{
 space:[{family:'POSITION',options:['w-ready','w-angle','w-retreat'],next:['R0','R1'],intent:'Preserve options and leave.'}],
 closing:[{family:'MANAGE DISTANCE',options:['w-retreat','w-angle','w-longframe','w-checkstep'],next:['R0','R1','R2'],intent:'Keep or recover usable space.'}],
 line:[{family:'PROTECT + REDIRECT',options:['w-cover','w-wedge','w-parry','w-pivot'],next:['R1','R2','R3'],intent:'Clear the line and change position.'}],
 crowded:[{family:'FRAME + CREATE SPACE',options:['w-closeframe','w-shoulderframe','w-post','w-turnrelease'],next:['R2','R3','R4'],intent:'Restore posture and separation.'}],
 grip:[{family:'INSIDE POSITION + EXIT',options:['w-inside','w-turnrelease','w-shoulderframe'],next:['R2','R3','R4'],intent:'Disrupt contact and disengage rather than remain entangled.'}],
 offbase:[{family:'RECOVER BASE',options:['w-pivot','w-wallbase','w-stand'],next:['R0','R1','R5'],intent:'Recover posture and mobility before continuation.'}]
 },
 grammar:{slots:['READ','POSITION','PROTECT','REDIRECT','REPOSITION','EXIT'],rule:'Skip any slot that is unnecessary; never add a movement merely to lengthen a sequence.'},
 rangeAdjacency:{R0:['R1'],R1:['R0','R2'],R2:['R1','R3'],R3:['R2','R4'],R4:['R3','R5'],R5:['R4','R0']}
};
window.transitionOptions=stimulus=>TRANSITIONS.responses[stimulus]||[];
window.buildAdaptiveChain=(stimulus,choiceIndex=0)=>{const family=transitionOptions(stimulus)[0];if(!family)return null;const id=family.options[Math.min(choiceIndex,family.options.length-1)],tech=typeof weaponTechnique==='function'?weaponTechnique(id):null;return {stimulus,family:family.family,technique:tech,intent:family.intent,next:family.next,chain:tech?tech.chain:'POSITION → EXIT'};};