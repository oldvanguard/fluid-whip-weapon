/* FLUID → WHIP → WEAPON — Comprehensive Curriculum v1.1
   Full-system training spine. Bodyweight + one kettlebell. Low-line kicks only.
   Grappling scope: disrupt, redirect, reposition, create an opening, disengage.
*/
window.FWW_COMPREHENSIVE = (() => {
  const phases = [
    {id:'P1',weeks:'1–4',name:'RESTORE',goal:'Restore usable joint range, breathing, posture, foot/ankle function and pain-free chained motion.',fitness:['supported squat pattern','hip hinge pattern','wall/incline push','supported split stance','dead-bug brace','bird dog','calf raise','thoracic rotation','ankle rocks','hip switches'],martial:['ROOT stance','SHIFT weight transfer','guard recovery','step-and-return','long-range boundary awareness','non-contact exit line'],gate:'Complete sessions without form breakdown; demonstrate controlled ROOT→SHIFT→RECOVER.'},
    {id:'P2',weeks:'5–8',name:'STABILIZE + CONNECT',goal:'Build the base and connect feet, hips, spine, shoulders and hands.',fitness:['box squat progression','KB deadlift','incline push progression','split-stance isometric','suitcase hold/march','glute bridge','anti-rotation brace','balance reach'],martial:['COIL without over-twisting','CHAIN slow wave','lead straight pathway','rear straight pathway','cover-and-angle','low-line stop-kick mechanics'],gate:'ROOT→SHIFT→COIL→CHAIN at slow speed with balance retained.'},
    {id:'P3',weeks:'9–12',name:'FLOW',goal:'Remove pauses between positions and make recovery part of every action.',fitness:['bodyweight squat progression','KB deadlift volume','push-up progression','reverse-lunge regression/progression','suitcase carry/march','crawl regression','flow mobility'],martial:['step-hit-recover','parry-angle-return','cover-pivot-return','low kick-return','R1↔R2 and R2↔R3 transitions','three-action flow chains'],gate:'Three-minute technical flow with continuous base, breathing and recovery.'},
    {id:'P4',weeks:'13–16',name:'WHIP',goal:'Develop relaxed acceleration, proximal-to-distal sequencing, recoil and braking.',fitness:['tempo squat','KB swing preparation / hike pattern','explosive incline push','rotational brace','fast step-and-stick','elastic calf/ankle work'],martial:['hip→spine→shoulder→hand sequencing','broken rhythm','compact hook mechanics','straight-to-angle chains','low round-kick mechanics','recoil before reset'],gate:'Acceleration increases without visible pre-tension, loss of posture or overreach.'},
    {id:'P5',weeks:'17–20',name:'WEAPON',goal:'Apply the chain across all ranges while preserving escape and positional control.',fitness:['strength circuit','KB hinge power as appropriate','push/pull-isometric substitute','split squat progression','loaded march','conditioning intervals'],martial:['intercept/exit','long-range entry denial','mid-range hand fighting','short-range frames and compact strikes','clinch disruption and turn','wall escape','ground prevention and technical stand-up'],gate:'Choose an appropriate response family from randomized range cues and recover to safety.'},
    {id:'P6',weeks:'21–24',name:'INTEGRATE + EXPRESS',goal:'Blend fitness, movement, decision-making and range transitions into adaptable continuous practice.',fitness:['integrated chassis circuit','density work','mobility-flow recovery','single-KB complex selected by readiness'],martial:['R0→R5 continuity','any-range→disengage→R0','combination grammar','adaptive stimulus rounds','restricted-space rounds','fatigue-quality rounds'],gate:'Demonstrate range continuity with no required range skipped and no prolonged grappling.'}
  ];

  const ranges = [
    {id:'R0',name:'PRE-CONTACT',jobs:['scan','position','verbal boundary','exit','use environment']},
    {id:'R1',name:'LONG',jobs:['manage measure','intercept','low-line stop','angle out','deny clean entry']},
    {id:'R2',name:'MID',jobs:['straight-line offense','parry/cover','angle','low-line attack','exit or compress']},
    {id:'R3',name:'SHORT',jobs:['frame','compact strike','shoulder/forearm structure','turn','create lane']},
    {id:'R4',name:'CONTACT / CLINCH',jobs:['posture','frame','hand-fight','off-balance','turn/reposition','disengage']},
    {id:'R5',name:'GROUND PREVENTION / RECOVERY',jobs:['base recovery','wall/furniture awareness','protect head','create space','technical stand-up','return to R0']}
  ];

  const transitions = [
    ['R0','R1','boundary fails → establish measure / exit angle'],['R1','R0','space created → disengage and scan'],
    ['R1','R2','entry occurs → intercept/angle into hand range'],['R2','R1','frame/angle → regain measure'],
    ['R2','R3','distance collapses → compact structure'],['R3','R2','frame/turn → recover punching measure'],
    ['R3','R4','body contact occurs → posture, frame, hand-fight'],['R4','R3','turn/post → create striking lane'],
    ['R4','R5','balance compromised → prevent fall or recover base'],['R5','R4','stand-up obstructed → frame/create space before rising'],
    ['ANY','R0','primary objective when safe lane exists → disengage, scan, leave']
  ];

  const weekTemplate = {
    A:{name:'CHAIN STRENGTH',blocks:['mobility primer','squat progression','hinge','push','core/base','FLUID skill','cooldown']},
    B:{name:'RANGE + FLOW',blocks:['joint prep','footwork','FLUID chain','range transition pair','technical combinations','easy conditioning','downshift']},
    C:{name:'HINGE + WHIP',blocks:['mobility primer','KB hinge','unilateral base','push progression','WHIP sequencing','recoil/braking','cooldown']},
    D:{name:'WEAPON / ADAPTABILITY',blocks:['readiness','movement primer','range continuum','response-family drill','disrupt/redirect/reposition','disengagement finish','recovery']},
    E:{name:'RESTORE FLOW',blocks:['ankle','hips','thoracic spine','shoulders','spinal wave','balance','breathing']}
  };

  const rules = {
    kickCeiling:'waist',
    grappling:'No prolonged grappling. Use contact skills only to disrupt, redirect, reposition, open a lane, regain base or disengage.',
    chain:'Every rep returns to ROOT. Power travels base → hips → spine → shoulder → limb; recovery reconnects the chain.',
    progression:'Advance by competency and readiness, not calendar alone.',
    pain:'Sharp, escalating, neurologic or destabilizing symptoms stop the drill; regress or omit the movement.'
  };

  function phaseForWeek(week){ return phases[Math.min(phases.length-1, Math.max(0, Math.ceil(week/4)-1))]; }
  function buildWeek(week){
    const phase=phaseForWeek(week);
    return {week,phase:phase.id,phaseName:phase.name,goal:phase.goal,days:[
      {day:'Day 1',...weekTemplate.A},{day:'Day 2',...weekTemplate.B},{day:'Day 3',name:'RECOVERY / WALK',blocks:['easy walking','optional mobility','breathing']},
      {day:'Day 4',...weekTemplate.C},{day:'Day 5',...weekTemplate.D},{day:'Day 6',...weekTemplate.E},{day:'Day 7',name:'OFF / EASY WALK',blocks:['recovery only']}
    ],gate:phase.gate};
  }
  return {phases,ranges,transitions,weekTemplate,rules,buildWeek,program:Array.from({length:24},(_,i)=>buildWeek(i+1))};
})();