/* FWW v1.1 — executable workout prescriptions.
   Equipment: bodyweight + one kettlebell. Technique quality outranks volume.
*/
window.FWW_WORKOUTS = (()=>{
 const ex={
  ankle:{name:'Ankle Rock',dose:'2 x 8/side',rest:'20s',reg:'shorter range holding wall',prog:'knee-forward rock with heel grounded'},
  hipSwitch:{name:'Supported Hip Switch',dose:'2 x 6/side',rest:'20s',reg:'hands behind body',prog:'hands-free controlled switch'},
  tRot:{name:'Thoracic Rotation',dose:'2 x 6/side',rest:'20s',reg:'smaller range',prog:'half-kneeling reach-through'},
  pnfCalf:{name:'Heel-Into-Wall PNF',dose:'6 sec x 2/side',rest:'10s',reg:'lighter contraction',prog:'slightly deeper calf position'},
  hipFlex:{name:'Table Hip-Flexor Stretch',dose:'2 x 20 sec/side',rest:'10s',reg:'shorter stance',prog:'glute squeeze + overhead reach'},
  chairSquat:{name:'Goblet Squat-to-Chair',dose:'10 reps · 3 sec down / 1 sec up',rest:'60s',reg:'bodyweight + higher chair',prog:'lower chair before adding volume'},
  wallSit:{name:'Wall Sit',dose:'35 sec',rest:'60s',reg:'higher hip position / 20 sec',prog:'45–60 sec'},
  sumoDL:{name:'KB Sumo Deadlift',dose:'12 reps',rest:'60s',reg:'raised bell start',prog:'slower eccentric or conventional stance'},
  suitcaseDL:{name:'KB Suitcase Deadlift',dose:'10/side',rest:'45s',reg:'raised bell',prog:'pause below knee'},
  frog:{name:'Frog Pump',dose:'25 reps · 2 sec squeeze',rest:'30s',reg:'standard glute bridge',prog:'1.5-rep bridge'},
  calfTib:{name:'Calf + Tibialis Raise',dose:'15 + 15',rest:'30s',reg:'supported',prog:'single-leg calf / longer tibialis lever'},
  halo:{name:'KB Halo',dose:'5/direction',rest:'30s',reg:'bodyweight shoulder circles',prog:'slower halo with tall posture'},
  inclinePush:{name:'Incline Push-Up',dose:'2–3 x 6–12',rest:'60s',reg:'higher surface',prog:'lower surface → floor'},
  deadBug:{name:'Dead Bug Brace',dose:'2–3 x 5/side',rest:'30s',reg:'heel taps',prog:'long-lever opposite arm/leg'},
  birdDog:{name:'Bird Dog',dose:'2 x 6/side',rest:'30s',reg:'single limb',prog:'knee-to-elbow return'},
  splitIso:{name:'Supported Split-Stance Iso',dose:'2 x 20–30 sec/side',rest:'30s',reg:'short stance + hand support',prog:'less support / split squat partial'},
  march:{name:'Suitcase Hold / March',dose:'2 x 30 sec/side',rest:'45s',reg:'static hold',prog:'slow march'},
  hingeReach:{name:'Hip Hinge to Reach',dose:'2 x 8',rest:'30s',reg:'wall-tap hinge',prog:'single-leg reach'},
  lateralShift:{name:'Lateral Weight Shift',dose:'2 x 60 sec',rest:'30s',reg:'±15 sec / smaller shift',prog:'continuous angle-step flow'}
 };
 const skill=(name,dose,focus)=>({name,dose,focus});
 const sessions={
  restoreA:{name:'RESTORE A — Base + Squat',rounds:'Week 1: 2 rounds · Week 2+: 3 rounds',items:[ex.ankle,ex.pnfCalf,ex.chairSquat,ex.wallSit,ex.calfTib,ex.deadBug,ex.lateralShift]},
  restoreB:{name:'RESTORE B — Hinge + Spine',rounds:'2 rounds',items:[ex.hipSwitch,ex.hipFlex,ex.tRot,ex.hingeReach,ex.sumoDL,ex.frog,ex.birdDog,ex.halo]},
  connectA:{name:'CONNECT A — Chassis',rounds:'3 rounds as tolerated',items:[ex.chairSquat,ex.suitcaseDL,ex.inclinePush,ex.splitIso,ex.march,ex.deadBug,skill('ROOT → SHIFT → COIL','3 x 60 sec','continuous base; no forced lumbar rotation')]},
  flowA:{name:'FLOW A — Continuous Chain',rounds:'3 technical rounds',items:[skill('Mobility Chain','6 min','ankle → hip → thoracic → shoulder'),skill('Step → Straight → Recover','3 x 60 sec','base initiates; hand returns with body'),skill('Angle → Cover → Return','3 x 60 sec','leave line; regain stance'),skill('Low-Line Kick → Recover','2 x 45 sec/side','waist ceiling; balance before speed'),skill('Three-Action Flow','3 x 90 sec','no frozen endpoints')]},
  whipA:{name:'WHIP A — Elastic Speed',rounds:'quality first · 3 rounds',items:[skill('Relax → Fire → Recoil','3 x 45 sec','remove pre-tension'),skill('Hip → Spine → Shoulder → Hand','3 x 6/side','sequence, do not muscle'),skill('Broken Rhythm Step','3 x 60 sec','timing changes without bouncing'),skill('Straight Chain','3 x 5/side','late acceleration + immediate recoil'),skill('Fast Step + Stick','3 x 5/side','quiet stable landing')]},
  rangeA:{name:'WEAPON A — Range Continuity',rounds:'3–5 technical rounds',items:[skill('R0↔R1','2 x 60 sec','boundary/measure/exit'),skill('R1↔R2','2 x 60 sec','intercept/angle'),skill('R2↔R3','2 x 60 sec','cover/frame/compact action'),skill('R3↔R4','2 x 60 sec','post/turn/inside frame'),skill('R4↔R5','2 x 60 sec','base recovery / protected rise'),skill('ANY → R0','3 x 60 sec','disengage, scan, leave')]},
  adaptA:{name:'WEAPON B — Adaptive Response',rounds:'4 x 2 min · 60 sec recovery',items:[skill('Random Range Cue','2 min','identify range before acting'),skill('Three-Job Grammar','2 min','solve entry → create opening → exit'),skill('Redirect → Lane','2 min','no prolonged grappling'),skill('Restricted-Space Flow','2 min','wall awareness + safe lane')]},
  restoreFlow:{name:'RESTORE FLOW — Whole Chain',rounds:'1–2 easy circuits',items:[ex.ankle,ex.hipSwitch,ex.tRot,ex.hipFlex,ex.lateralShift,skill('Segmented Spinal Wave','2 x 60 sec','small smooth sequential motion'),skill('Downshift Breathing','3 min','long relaxed exhale')]}
 };
 const tests={
  P1:[['Chair squat control','10 smooth reps'],['Lateral shift','60 sec without losing foot contact'],['Hinge','8 neutral-spine reps'],['ROOT→SHIFT→RECOVER','60 sec continuous']],
  P2:[['Squat progression','10 reps at current safe depth'],['Suitcase hold','30 sec/side without trunk collapse'],['Chain sequence','6 slow reps/side in correct order'],['Angle step','10/side balanced']],
  P3:[['Technical flow','3 min continuous'],['R1↔R2','60 sec each direction'],['R2↔R3','60 sec each direction'],['Recovery','every action returns to stable base']],
  P4:[['Relaxation','no visible pre-load on 8/10 reps'],['Sequencing','base-to-limb order on 8/10 reps'],['Recoil','clean return on 8/10 reps'],['Fast step','5/side with stable stick']],
  P5:[['Range identification','8/10 randomized cues'],['R0–R5 ladder','complete both directions'],['Contact escape','frame/turn/disengage without extended tie-up'],['Ground recovery','protected stand-up to R0']],
  P6:[['Adaptive rounds','4 x 2 min quality maintained'],['Any-range exit','8/10 correct exits'],['Combination grammar','5 different valid chains'],['Integrated flow','fitness + martial chain without technique collapse']]
 };
 function prescriptionForPhase(id){return ({P1:['restoreA','restoreB','restoreFlow'],P2:['connectA','restoreB','restoreFlow'],P3:['connectA','flowA','restoreFlow'],P4:['connectA','whipA','flowA','restoreFlow'],P5:['connectA','whipA','rangeA','adaptA','restoreFlow'],P6:['connectA','whipA','rangeA','adaptA','flowA','restoreFlow']})[id]||[]}
 return {ex,sessions,tests,prescriptionForPhase};
})();