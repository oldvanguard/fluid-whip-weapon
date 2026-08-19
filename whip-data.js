window.WHIP={
 principles:[
  {id:'relax',name:'Relax Before Acceleration',desc:'Remove unnecessary tension so the chain can transmit speed.'},
  {id:'sequence',name:'Proximal-to-Distal Sequence',desc:'Initiate from the base and center; allow acceleration to travel outward.'},
  {id:'recoil',name:'Recoil Without Collapse',desc:'Return elastic energy while preserving posture and balance.'},
  {id:'brake',name:'Own the Brakes',desc:'Decelerate cleanly before adding more speed.'},
  {id:'rhythm',name:'Broken Rhythm',desc:'Change cadence without losing structure or telegraphing the next movement.'}
 ],
 levels:[
  {id:'W1',name:'Elastic',mission:'Learn to store and release movement without forcing speed.',gate:['relaxedChain','coilRelease','cleanBrake','recoilBase']},
  {id:'W2',name:'Accelerate',mission:'Increase speed through sequencing rather than muscular strain.',gate:['hipSpineShoulder','distalSnap','speedReturn','rhythmShift']},
  {id:'W3',name:'Responsive',mission:'Preserve speed, balance and recovery while direction and rhythm change.',gate:['directionalWhip','brokenRhythm','continuousRecoil','adaptiveTempo']}
 ],
 competencies:{
  relaxedChain:{name:'Relaxed Chain',domain:'Tension'},coilRelease:{name:'Coil + Release',domain:'Elasticity'},cleanBrake:{name:'Clean Deceleration',domain:'Control'},recoilBase:{name:'Recoil to Base',domain:'Recovery'},
  hipSpineShoulder:{name:'Hip → Spine → Shoulder',domain:'Sequencing'},distalSnap:{name:'Distal Acceleration',domain:'Speed'},speedReturn:{name:'Fast Return',domain:'Recovery'},rhythmShift:{name:'Rhythm Shift',domain:'Timing'},
  directionalWhip:{name:'Directional Acceleration',domain:'Adaptability'},brokenRhythm:{name:'Broken Rhythm',domain:'Timing'},continuousRecoil:{name:'Continuous Recoil',domain:'Flow'},adaptiveTempo:{name:'Adaptive Tempo',domain:'Adaptability'}
 },
 drills:{
  pendulum:{id:'pendulum',name:'Relaxed Arm Pendulum',phase:'RELAX',why:'Teach the shoulder and arm to move without unnecessary co-contraction.',chain:'ROOT → RELEASE → SWING → RETURN',dose:['2 × 20 sec','3 × 30 sec','3 × 45 sec'],reg:'Smaller pendulum',prog:'Add gentle torso contribution'},
  coilRelease:{id:'coilRelease',name:'Coil–Release Pulse',phase:'ELASTIC',why:'Store rotation through the connected base and release it without knee torque.',chain:'ROOT → COIL → RELEASE → BRAKE',dose:['4 / side','6 / side','8 / side'],reg:'Small thoracic pulse',prog:'Step + coil + release'},
  hipLead:{id:'hipLead',name:'Hip–Spine–Shoulder Wave',phase:'SEQUENCE',why:'Develop ordered transfer from lower body through trunk to shoulder.',chain:'ROOT → HIP → SPINE → SHOULDER → RETURN',dose:['3 / side','5 / side','7 / side'],reg:'Slow segmented sequence',prog:'Smooth accelerating wave'},
  recoil:{id:'recoil',name:'Release–Recoil Drill',phase:'RECOVER',why:'Train immediate return after acceleration instead of freezing at end range.',chain:'LOAD → RELEASE → RECOIL → ROOT',dose:['4 / side','6 / side','8 / side'],reg:'Short range',prog:'Alternating sides'},
  brake:{id:'brake',name:'Acceleration–Brake Drill',phase:'CONTROL',why:'Build the ability to stop a fast chain without joint collapse or loss of base.',chain:'ROOT → ACCELERATE → BRAKE → RESET',dose:['3 / side','5 / side','6 / side'],reg:'Moderate tempo',prog:'Sharper acceleration'},
  rhythm:{id:'rhythm',name:'Broken-Rhythm Flow',phase:'TIMING',why:'Change tempo while maintaining connected movement.',chain:'SLOW → QUICK → PAUSE → FLOW',dose:['3 × 20 sec','3 × 30 sec','4 × 30 sec'],reg:'Two-tempo pattern',prog:'Unpredictable self-cued rhythm'},
  direction:{id:'direction',name:'Directional Whip Step',phase:'ADAPT',why:'Carry elastic sequencing through a change of direction.',chain:'ROOT → STEP → COIL → RELEASE → EXIT',dose:['3 / side','5 / side','6 / side'],reg:'Step + turn only',prog:'Continuous directional chain'}
 },
 sessions:[
  {id:'W1-A',level:'W1',name:'Remove the Brakes',focus:'Relaxation before speed',chain:'ROOT → RELAX → SWING → RETURN',moves:['pendulum','coilRelease','brake']},
  {id:'W1-B',level:'W1',name:'Elastic Return',focus:'Release and recoil',chain:'LOAD → RELEASE → RECOIL → ROOT',moves:['coilRelease','recoil','brake']},
  {id:'W2-A',level:'W2',name:'Build the Wave',focus:'Hip-to-spine-to-shoulder sequencing',chain:'ROOT → HIP → SPINE → SHOULDER → RECOIL',moves:['hipLead','recoil','brake']},
  {id:'W2-B',level:'W2',name:'Speed Without Strain',focus:'Acceleration with relaxed return',chain:'RELAX → SEQUENCE → ACCELERATE → RETURN',moves:['pendulum','hipLead','recoil','rhythm']},
  {id:'W3-A',level:'W3',name:'Broken Rhythm',focus:'Timing and tempo change',chain:'FLOW → BREAK → ACCELERATE → RECOVER',moves:['rhythm','direction','recoil']},
  {id:'W3-B',level:'W3',name:'Responsive Chain',focus:'Direction, acceleration and recovery',chain:'ROOT → MOVE → RELEASE → RECOIL → ADAPT',moves:['direction','hipLead','rhythm','brake']}
 ]
};