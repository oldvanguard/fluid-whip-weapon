window.CONDITIONING={
 domains:[
  {id:'mobility',name:'Chain Mobility',goal:'Restore usable motion through ankles, hips, thorax and shoulders without forcing end range.'},
  {id:'core',name:'Core Chassis',goal:'Build bracing, anti-extension, anti-rotation and load transfer before explosive work.'},
  {id:'legs',name:'Base Strength',goal:'Rebuild squat, hinge, step and single-leg capacity progressively.'},
  {id:'upper',name:'Upper-Body Structure',goal:'Develop pushing, pulling-pattern isometrics and shoulder-girdle control with minimal equipment.'},
  {id:'engine',name:'Work Capacity',goal:'Improve sustainable conditioning using low-complexity movement that preserves technique.'}
 ],
 exercises:{
  ankleRock:{name:'Supported Ankle Rock',domain:'mobility',equipment:'BODYWEIGHT',dose:['5/side','8/side','10/side'],chain:'FOOT → ANKLE → KNEE'},
  hip90:{name:'Supported 90/90 Hip Switch',domain:'mobility',equipment:'BODYWEIGHT',dose:['4/side','6/side','8/side'],chain:'PELVIS → HIP → FEMUR'},
  openBook:{name:'Side-Lying Thoracic Open Book',domain:'mobility',equipment:'BODYWEIGHT',dose:['4/side','6/side','8/side'],chain:'RIBS → THORAX → SHOULDER'},
  catWave:{name:'Controlled Spine Wave',domain:'mobility',equipment:'BODYWEIGHT',dose:['4 cycles','6 cycles','8 cycles'],chain:'PELVIS → LUMBAR CONTROL → THORAX → NECK'},
  brace:{name:'360° Brace',domain:'core',equipment:'BODYWEIGHT',dose:['3×10 sec','4×15 sec','4×20 sec'],chain:'BREATH → RIBS → ABDOMEN → PELVIS'},
  deadBug:{name:'Dead Bug Heel Tap',domain:'core',equipment:'BODYWEIGHT',dose:['4/side','6/side','8/side'],chain:'BRACE → LIMB MOVE → PELVIS QUIET'},
  birdDog:{name:'Bird Dog Reach',domain:'core',equipment:'BODYWEIGHT',dose:['3/side','5/side','6/side'],chain:'BRACE → HIP/SHOULDER → LONG REACH'},
  sideBrace:{name:'Wall Side-Brace Press',domain:'core',equipment:'BODYWEIGHT',dose:['3×10 sec/side','3×15 sec/side','4×15 sec/side'],chain:'FOOT → HIP → OBLIQUE → SHOULDER'},
  chairSquat:{name:'Chair Squat',domain:'legs',equipment:'BODYWEIGHT',dose:['2×5','3×6','3×8'],chain:'ROOT → HIPS BACK → DESCEND → DRIVE'},
  highSit:{name:'High-Surface Sit-to-Stand',domain:'legs',equipment:'BODYWEIGHT',dose:['2×5','3×6','3×10'],chain:'ROOT → HINGE → STAND → CONTROL'},
  supportedSplit:{name:'Supported Split-Stance Hold',domain:'legs',equipment:'BODYWEIGHT',dose:['2×15 sec/side','3×20 sec/side','3×30 sec/side'],chain:'FEET → KNEES → HIPS → STACK'},
  calf:{name:'Supported Calf Raise',domain:'legs',equipment:'BODYWEIGHT',dose:['2×8','3×10','3×15'],chain:'FOOT → ANKLE → CALF → BALANCE'},
  wallPush:{name:'Wall Push-Up',domain:'upper',equipment:'BODYWEIGHT',dose:['2×6','3×8','3×12'],chain:'ROOT → BRACE → PRESS → RETURN'},
  inclinePush:{name:'High Incline Push-Up',domain:'upper',equipment:'BODYWEIGHT',dose:['2×5','3×6','3×10'],chain:'FEET → CORE → SHOULDER → HAND'},
  towelIso:{name:'Towel Row Isometric',domain:'upper',equipment:'TOWEL',dose:['3×10 sec','4×15 sec','4×20 sec'],chain:'GRIP → ELBOW → SCAPULA → TRUNK'},
  kbDead:{name:'Kettlebell Elevated Deadlift',domain:'legs',equipment:'ONE KETTLEBELL',dose:['2×5','3×6','4×6'],chain:'ROOT → HINGE → GRIP → HIP DRIVE → STAND'},
  kbSuitcase:{name:'Kettlebell Suitcase Hold',domain:'core',equipment:'ONE KETTLEBELL',dose:['3×10 sec/side','3×20 sec/side','4×20 sec/side'],chain:'GRIP → LAT → OBLIQUE → HIP → FOOT'},
  kbGobletBox:{name:'Kettlebell Goblet Box Squat',domain:'legs',equipment:'ONE KETTLEBELL',dose:['2×4','3×5','3×8'],chain:'LOAD → BRACE → SIT → DRIVE → ROOT'},
  march:{name:'Supported March',domain:'engine',equipment:'BODYWEIGHT',dose:['3×30 sec','4×40 sec','5×45 sec'],chain:'ROOT → SHIFT → LIFT → PLACE'},
  stepFlow:{name:'Step–Shift–Turn Flow',domain:'engine',equipment:'BODYWEIGHT',dose:['3×30 sec','4×45 sec','5×60 sec'],chain:'STEP → SHIFT → TURN → RECOVER'}
 },
 squatLadder:[
  {level:1,name:'High Sit-to-Stand',test:'8 smooth repetitions with no hand assistance and stable knees',exercise:'highSit'},
  {level:2,name:'Chair Squat',test:'8 controlled repetitions to chair height with stable trunk',exercise:'chairSquat'},
  {level:3,name:'Lower Box Squat',test:'10 controlled repetitions with full-foot pressure',exercise:'chairSquat'},
  {level:4,name:'Goblet Box Squat',test:'8 clean loaded repetitions with no loss of brace',exercise:'kbGobletBox'},
  {level:5,name:'Free Squat',test:'Comfortable pain-free depth with repeatable balance',exercise:'chairSquat'}
 ],
 sessions:[
  {id:'FIT-A',name:'Chassis A',focus:'Mobility + core + squat rebuild',moves:['ankleRock','hip90','brace','deadBug','highSit','wallPush','march']},
  {id:'FIT-B',name:'Chassis B',focus:'Thorax + hinge + anti-lateral core',moves:['openBook','catWave','birdDog','kbDead','kbSuitcase','towelIso','stepFlow']},
  {id:'FIT-C',name:'Base + Balance',focus:'Leg capacity + single-leg stability + upper structure',moves:['ankleRock','supportedSplit','calf','chairSquat','inclinePush','sideBrace','march']},
  {id:'FIT-R',name:'Restore Flow',focus:'Low-load mobility and chained movement recovery',moves:['ankleRock','hip90','openBook','catWave','brace','stepFlow']}
 ],
 rules:['Quality precedes volume.','Progress only one variable at a time: range, repetitions, load, speed or complexity.','Loaded work never substitutes for a movement pattern that is not yet controlled unloaded.','Stop and reassess for sharp pain, radiating pain, new numbness/weakness, dizziness, chest pain or unusual shortness of breath.']
};
window.conditioningExercise=id=>CONDITIONING.exercises[id];