window.FLUID={
 levels:[
 {id:'F1',name:'RESTORE',mission:'Restore access to clean, pain-free foundational movement.',gate:['breath360','rootBase','weightShift','hingeAccess','coreAntiRotation','gaitBase']},
 {id:'F2',name:'CONNECT',mission:'Link the base, center and extremities into coordinated chains.',gate:['contralateral','stepShift','hipShoulder','rotationControl','singleLeg','squatFoundation']},
 {id:'F3',name:'FLOW',mission:'Maintain structure while moving continuously through direction changes.',gate:['stepTurn','spiralFlow','directionChange','continuousFlow','flowEndurance']}
 ],
 competencies:{
 breath360:{name:'360° Breath & Brace',domain:'CORE'},rootBase:{name:'Rooted Base',domain:'BASE'},weightShift:{name:'Controlled Weight Shift',domain:'BALANCE'},hingeAccess:{name:'Hip Hinge Access',domain:'MOBILITY'},coreAntiRotation:{name:'Anti-Rotation',domain:'CORE'},gaitBase:{name:'Gait Foundation',domain:'CONDITION'},
 contralateral:{name:'Contralateral Connection',domain:'COORDINATION'},stepShift:{name:'Step + Shift',domain:'FLOW'},hipShoulder:{name:'Hip/Shoulder Connection',domain:'CHAIN'},rotationControl:{name:'Controlled Rotation',domain:'MOBILITY'},singleLeg:{name:'Single-Leg Stability',domain:'BALANCE'},squatFoundation:{name:'Squat Foundation',domain:'STRENGTH'},
 stepTurn:{name:'Step + Turn',domain:'FLOW'},spiralFlow:{name:'Spiral Flow',domain:'COIL'},directionChange:{name:'Direction Change',domain:'FLOW'},continuousFlow:{name:'Continuous Chaining',domain:'FLOW'},flowEndurance:{name:'Flow Endurance',domain:'CONDITION'}
 },
 sessions:[
 {id:'F1-A',name:'Build the Base',level:'F1',focus:'BASE + CORE',chain:'ROOT → SHIFT → RECOVER',moves:['breath','root','shift','bird','sit','walk','return']},
 {id:'F1-B',name:'Hinge & Center',level:'F1',focus:'CORE + HINGE',chain:'BRACE → HINGE → DRIVE → RECOVER',moves:['breath','root','hinge','bird','bridge','walk','return']},
 {id:'F1-C',name:'Gait Reset',level:'F1',focus:'FEET + WALKING',chain:'ROOT → STEP → LOCOMOTE',moves:['breath','ankle','root','shift','march','walk','return']},
 {id:'F2-A',name:'Cross-Body Connection',level:'F2',focus:'COORDINATION',chain:'ROOT → SHIFT → REACH → RECOVER',moves:['breath','root','crossreach','bird','stepShift','sit','return']},
 {id:'F2-B',name:'Rotation Control',level:'F2',focus:'COIL + CORE',chain:'ROOT → COIL → RELEASE → RECOVER',moves:['breath','root','thoracic','coil','stepShift','flow','return']},
 {id:'F3-A',name:'Continuous Flow',level:'F3',focus:'FLOW',chain:'ROOT → STEP → TURN → COIL → FLOW',moves:['breath','root','stepTurn','coil','flow','walk','return']}
 ],
 extraMoves:{
 hinge:{id:'hinge',name:'Supported Hip Hinge',phase:'BUILD',why:'Teach the hips to fold while the trunk stays organized.',chain:'ROOT → HINGE → RECOVER',dose:['4 reps','6 reps','8 reps'],reg:'Wall-assisted hinge',prog:'Unassisted hinge'},
 bridge:{id:'bridge',name:'Glute Bridge',phase:'BUILD',why:'Develop hip extension without requiring a standing squat.',chain:'BRACE → DRIVE → CONTROL',dose:['5 reps','8 reps','10 reps'],reg:'Short-range bridge',prog:'Paused bridge'},
 ankle:{id:'ankle',name:'Supported Ankle Rock',phase:'FLUID',why:'Restore controlled ankle travel needed for gait and squatting.',chain:'ROOT → GLIDE → RECOVER',dose:['5 / side','8 / side','10 / side'],reg:'Smaller range',prog:'Reduced hand support'},
 march:{id:'march',name:'Supported March',phase:'FLUID',why:'Build single-leg control inside the walking pattern.',chain:'ROOT → SHIFT → LIFT → STEP',dose:['6 total','10 total','16 total'],reg:'Toe unload only',prog:'Slower unsupported march'},
 crossreach:{id:'crossreach',name:'Contralateral Reach',phase:'FLUID',why:'Connect opposite hip and shoulder through the trunk.',chain:'ROOT → SHIFT → REACH → RECOVER',dose:['4 / side','6 / side','8 / side'],reg:'Seated cross-body reach',prog:'Standing step + reach'},
 stepShift:{id:'stepShift',name:'Step + Weight Shift',phase:'FLUID',why:'Carry the base forward without disconnecting the center.',chain:'ROOT → STEP → SHIFT → ROOT',dose:['4 / side','6 / side','8 / side'],reg:'Short step with support',prog:'Multidirectional step'},
 thoracic:{id:'thoracic',name:'Thoracic Rotation',phase:'FLUID',why:'Restore upper-trunk rotation without forcing the lumbar spine.',chain:'BRACE → TURN → RETURN',dose:['4 / side','6 / side','8 / side'],reg:'Seated small-range turn',prog:'Standing integrated turn'},
 coil:{id:'coil',name:'Supported Spiral Coil',phase:'FLUID',why:'Introduce connected hip/trunk spiral mechanics at low speed.',chain:'ROOT → COIL → RELEASE → ROOT',dose:['3 / side','5 / side','7 / side'],reg:'Upper-body-only rehearsal',prog:'Coil + controlled step'},
 stepTurn:{id:'stepTurn',name:'Step + Turn',phase:'FLOW',why:'Change direction while preserving the base beneath the trunk.',chain:'ROOT → STEP → TURN → RECOVER',dose:['3 / side','5 / side','8 / side'],reg:'Turn in place with support',prog:'Step-turn-reposition flow'}
 }
};