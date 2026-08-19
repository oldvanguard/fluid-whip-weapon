window.OFFENSE={
 principles:[
  {id:'base',name:'Base Before Output',desc:'Power begins from a recoverable stance and ends in one.'},
  {id:'short',name:'Shortest Useful Path',desc:'Favor compact direct motion over ornamental wind-up.'},
  {id:'chain',name:'Whole-Body Transmission',desc:'Ground reaction, hip, trunk and shoulder contribute in sequence without forcing the lumbar spine.'},
  {id:'return',name:'Return Is Part of the Action',desc:'Every extension recoils into protection, movement or exit.'},
  {id:'choice',name:'Combination by Function',desc:'Sequences are assembled from tactical jobs, not memorized choreography.'}
 ],
 mechanics:[
  {id:'o-lead',name:'Lead-Hand Straight',range:'R1',family:'DIRECT',chain:'ROOT → STEP/SHIFT → HIP → SHOULDER → EXTEND → RECOIL',purpose:'A compact straight-line action for timing, distance and combination entry.',cues:['No rearward wind-up','Shoulder follows the base','Keep opposite hand structurally available','Recoil immediately']},
  {id:'o-rear',name:'Rear-Hand Straight',range:'R2',family:'POWER',chain:'ROOT → DRIVE FLOOR → HIP → TRUNK → SHOULDER → RETURN',purpose:'Transfer whole-body force through a direct path while preserving balance.',cues:['Turn through the chain rather than twisting the low back','Rear heel may release naturally','Do not reach past the base','Recover stance immediately']},
  {id:'o-compact',name:'Compact Hooking Arc',range:'R3',family:'SHORT POWER',chain:'ROOT → HIP PULSE → TRUNK → COMPACT ARC → RECOIL',purpose:'Develop short-range rotational power without a large swing.',cues:['Keep arc compact','Elbow and fist travel with the torso','Avoid exaggerated lumbar rotation','Finish protected']},
  {id:'o-bodyframe',name:'Body-Line Frame Strike Drill',range:'R3',family:'SPACE',chain:'FRAME → ROOT → BODY DRIVE → RECOIL → EXIT',purpose:'Practice converting a protective frame into controlled short-range output on pads or a bag.',cues:['Use a pad/bag for impact practice','Keep neck and spine organized','Drive from the base','Do not overextend after contact']},
  {id:'o-lowpush',name:'Low-Line Push Kick Pattern',range:'R1',family:'LOW LINE',chain:'ROOT → SHIFT → KNEE LOW → EXTEND → RETRACT → PLACE',purpose:'Train a low, recoverable leg extension for distance management on pads or a bag.',cues:['Keep target height at waist or below','Prioritize balance over reach','Retract before placing the foot','No ballistic knee lock']},
  {id:'o-lowround',name:'Low Round-Kick Pattern',range:'R2',family:'LOW LINE',chain:'ROOT → STEP/PIVOT → HIP → LOW ARC → RECOIL → BASE',purpose:'Develop controlled low-line rotational kicking mechanics without high-kick mobility demands.',cues:['Practice slowly before adding speed','Pivot rather than torque a planted knee','Keep kick low','Re-establish base after every repetition']}
 ],
 families:[
  {id:'c-enter',name:'Entry Family',jobs:['MEASURE','ENTER','RECOVER'],options:[['o-lead'],['w-angle','o-lead'],['o-lowpush','w-angle']]},
  {id:'c-direct',name:'Direct-Line Family',jobs:['OPEN','DIRECT','RECOIL','ANGLE'],options:[['o-lead','o-rear'],['w-parry','o-lead','w-angle'],['o-lead','w-angle']]},
  {id:'c-short',name:'Compact Power Family',jobs:['PROTECT','ROOT','SHORT OUTPUT','CREATE SPACE','EXIT'],options:[['w-cover','o-compact','w-post'],['w-closeframe','o-bodyframe','w-angle']]},
  {id:'c-low',name:'Low-Line Range Family',jobs:['MANAGE','LOW LINE','RECOVER','REPOSITION'],options:[['o-lowpush','w-angle'],['w-checkstep','o-lead','w-retreat'],['o-lead','o-lowround','w-angle']]},
  {id:'c-exit',name:'Exit Family',jobs:['INTERRUPT','REPOSITION','DISENGAGE'],options:[['w-parry','w-angle'],['w-post','w-turnrelease'],['w-inside','w-turnrelease']]}
 ],
 trainingRules:['Solo: shadow mechanics at controlled speed.','Impact: use pads or a heavy bag; do not strike hard surfaces.','Partner: cooperative technical practice first; protective equipment and qualified coaching for contact work.','Stop the repetition when balance, joint alignment or clean recovery degrades.']
};
window.offenseMechanic=id=>OFFENSE.mechanics.find(x=>x.id===id);
window.systemMechanic=id=>offenseMechanic(id)||(typeof weaponTechnique==='function'?weaponTechnique(id):null);