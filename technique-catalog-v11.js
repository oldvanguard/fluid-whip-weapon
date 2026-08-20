/* Comprehensive technique families — deliberately principle-based rather than style cosplay. */
window.FWW_TECHNIQUE_CATALOG = {
  fluid:[
    {id:'root-stack',name:'ROOT Stack',job:'stable neutral base',cues:['tripod foot','soft knees','ribs stacked over pelvis','head tall']},
    {id:'shift-glide',name:'SHIFT Glide',job:'move mass without bobbing',cues:['push floor','hips travel with torso','feet recover under base']},
    {id:'coil-return',name:'COIL + Return',job:'store/release rotation',cues:['rotate through hips/thoracic chain','do not wrench lumbar spine','return to ROOT']},
    {id:'spinal-wave',name:'Segmented Chain Wave',job:'restore sequential motion',cues:['small range first','smooth segment-to-segment transfer','no forced end range']},
    {id:'angle-step',name:'Angle Step',job:'leave attack line while preserving stance',cues:['head and trunk leave line','rear foot follows','finish balanced']},
    {id:'pivot-exit',name:'Pivot Exit',job:'change facing and create lane',cues:['turn from floor/hips','do not cross feet under pressure','scan after exit']}
  ],
  whip:[
    {id:'relax-fire-recoil',name:'Relax → Fire → Recoil',job:'remove pre-tension',cues:['loose until launch','accelerate late','brake with structure']},
    {id:'prox-distal',name:'Proximal-to-Distal Wave',job:'sequence power',cues:['floor','hip','trunk','shoulder','arm','hand']},
    {id:'broken-rhythm',name:'Broken Rhythm Step',job:'change timing without losing base',cues:['do not bounce','vary pause and launch','recover immediately']},
    {id:'step-stick',name:'Fast Step + Stick',job:'speed with braking',cues:['accelerate','land quietly','own final position']}
  ],
  weapon:[
    {id:'lead-straight',range:'R2',family:'strike',name:'Lead Straight',job:'intercept / score / frame entry',target:'legal training target; partner drill uses pads only'},
    {id:'rear-straight',range:'R2',family:'strike',name:'Rear Straight',job:'power-line follow-up',target:'pads'},
    {id:'compact-hook',range:'R3',family:'strike',name:'Compact Hook',job:'short rotational offense',target:'pads'},
    {id:'forearm-frame',range:'R3',family:'frame',name:'Forearm Frame',job:'make space and protect centerline'},
    {id:'cover-angle',range:'R2-R3',family:'defense',name:'Cover + Angle',job:'survive line and leave it'},
    {id:'parry-angle',range:'R2',family:'defense',name:'Parry + Angle',job:'redirect line without chasing limb'},
    {id:'low-stop',range:'R1',family:'low-line',name:'Low Stop Kick',job:'manage entry',limit:'never above waist'},
    {id:'low-round',range:'R1-R2',family:'low-line',name:'Low Round Kick',job:'low-line disruption',limit:'never above waist'},
    {id:'shin-check-regress',range:'R1-R2',family:'defense',name:'Low-Line Check / Evade',job:'protect base while staying mobile'},
    {id:'post-turn',range:'R4',family:'contact',name:'Post + Turn',job:'redirect pressure and create exit lane'},
    {id:'inside-frame',range:'R4',family:'contact',name:'Inside Frame Recovery',job:'recover posture and inside position'},
    {id:'wrist-peel',range:'R4',family:'contact',name:'Two-on-One Grip Peel',job:'release a controlling wrist grip and exit'},
    {id:'shoulder-turn',range:'R4',family:'contact',name:'Shoulder-Line Turn',job:'reposition attacker without prolonged tie-up'},
    {id:'wall-pivot',range:'R4',family:'environment',name:'Wall Frame + Pivot',job:'avoid being pinned; rotate toward open lane'},
    {id:'fall-prevention',range:'R4-R5',family:'recovery',name:'Base Recovery Step',job:'recover balance before ground contact'},
    {id:'technical-stand',range:'R5',family:'recovery',name:'Protected Technical Stand-Up',job:'create distance, rise, return to R0'}
  ],
  drills:[
    {id:'range-ladder',name:'Range Ladder',sequence:['R0','R1','R2','R3','R4','R3','R2','R1','R0'],rule:'No pause between range changes; technique intensity stays technical.'},
    {id:'exit-anywhere',name:'Exit From Anywhere',sequence:['random range cue','appropriate frame/angle/step','R0'],rule:'Winning condition is safe disengagement, not domination.'},
    {id:'three-job',name:'Three-Job Combination',sequence:['solve entry','create opening','exit/recover'],rule:'Techniques may change; tactical jobs stay fixed.'},
    {id:'redirect-lane',name:'Redirect → Lane',sequence:['receive pressure','frame/parry','turn/reposition','optional pad touch','exit'],rule:'No prolonged grappling exchange.'},
    {id:'wall-escape',name:'Wall Escape Pattern',sequence:['posture','inside frame','pivot/turn','clear wall','R0'],rule:'Train cooperatively first; add resistance only after mechanics are stable.'}
  ]
};