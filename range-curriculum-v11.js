window.FWW_RANGE_CURRICULUM={
 ranges:{
  R0:{name:'PRE-CONTACT',objective:'Avoid, position, communicate, leave.',skills:['stance without telegraphing','scan exits/obstacles','hands in non-escalatory protective position','verbal boundary','angle toward exit'],drills:['boundary-and-exit','environment scan','reaction-to-approach']},
  R1:{name:'LONG',objective:'Own measure and deny clean entry.',skills:['retreat/angle without crossing feet','intercepting lead hand pathway','low stop-kick pathway','low-line evade/check','exit after interception'],drills:['measure line','step-in cue','intercept-and-exit']},
  R2:{name:'MID',objective:'Use efficient hand offense/defense while preserving exits.',skills:['lead straight','rear straight','parry + angle','cover + angle','low round kick','straight-to-angle recovery'],drills:['one-for-one technical feed','straight-line pad chain','random parry/cover cue']},
  R3:{name:'SHORT',objective:'Stay structurally safe when full extension disappears.',skills:['compact hook','forearm frame','shoulder/forearm shield','short angle step','frame-to-straight lane'],drills:['range-collapse cue','frame-and-clear','compact pad chain']},
  R4:{name:'CONTACT / CLINCH',objective:'Disrupt attachment, reposition enough to leave, do not grapple for position.',skills:['posture recovery','inside frame','post + turn','two-on-one grip peel','shoulder-line turn','wall frame + pivot'],drills:['cooperative pressure redirect','grip-release-and-exit','wall escape','moving post-and-turn']},
  R5:{name:'GROUND PREVENTION / RECOVERY',objective:'Prevent the fall when possible; if down, protect, create space, stand and leave.',skills:['base recovery step','wall/furniture post','protective ground orientation','hip-away space creation','protected technical stand-up'],drills:['balance-catch','wall-supported recovery','technical stand progression','ground-to-R0']}
 },
 transitions:[
  {id:'T01',from:'R0',to:'R1',jobs:['recognize approach','set measure','angle/exit'],win:'space preserved'},
  {id:'T10',from:'R1',to:'R0',jobs:['create gap','scan','leave'],win:'disengagement'},
  {id:'T12',from:'R1',to:'R2',jobs:['intercept','angle','establish protected hand range'],win:'entry does not collapse base'},
  {id:'T21',from:'R2',to:'R1',jobs:['frame/straight/angle','recover measure'],win:'long range restored'},
  {id:'T23',from:'R2',to:'R3',jobs:['cover','shorten structure','frame'],win:'safe compact structure'},
  {id:'T32',from:'R3',to:'R2',jobs:['frame','turn/step','recover extension'],win:'mid range restored'},
  {id:'T34',from:'R3',to:'R4',jobs:['posture','inside frame','manage attachment'],win:'pressure redirected'},
  {id:'T43',from:'R4',to:'R3',jobs:['post/turn','clear attachment','create lane'],win:'contact broken'},
  {id:'T45',from:'R4',to:'R5',jobs:['recover base','protect head','control descent only if unavoidable'],win:'fall prevented or safe recovery started'},
  {id:'T54',from:'R5',to:'R4',jobs:['frame/create space','build base','rise only when lane exists'],win:'upright posture recovered'},
  {id:'TX0',from:'ANY',to:'R0',jobs:['break contact','create distance','scan','leave'],win:'safe disengagement'}
 ],
 progression:[
  {level:1,name:'SHADOW MAP',rule:'Solo movement through marked ranges; no speed requirement.'},
  {level:2,name:'COOPERATIVE FEED',rule:'Partner provides predictable range pressure; technical response only.'},
  {level:3,name:'VARIABLE FEED',rule:'Partner varies adjacent-range pressure; trainee identifies before responding.'},
  {level:4,name:'RANDOM RANGE',rule:'Randomized cue across trained ranges; response family selected by context.'},
  {level:5,name:'FLOW UNDER FATIGUE',rule:'Low-to-moderate fatigue added; quality and exit decision must remain intact.'}
 ],
 prohibition:'No prolonged clinch exchange, takedown hunt, submission sequence, ground control game or sport-grappling objective is part of this curriculum.'
};