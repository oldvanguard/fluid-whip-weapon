window.WEAPON={
 doctrine:[
 {id:'intercept',name:'Intercept Before Exchange',desc:'Use awareness, position, distance and timing to avoid accepting an unnecessary exchange.'},
 {id:'range',name:'Own Every Range',desc:'Every action should preserve an option to maintain distance, exit, or transition safely.'},
 {id:'simple',name:'Simple Before Complex',desc:'Prefer high-percentage gross-motor responses over ornamental technique.'},
 {id:'redirect',name:'Redirect, Reposition, Exit',desc:'Close-range contact exists to disrupt pressure, regain structure and create an exit—not to remain entangled.'},
 {id:'recover',name:'Every Action Recovers',desc:'Do not finish a movement in a position that prevents immediate movement, protection or escape.'}
 ],
 ranges:[
 {id:'R0',name:'Awareness / Pre-Contact',goal:'Detect, position, de-escalate and leave.',skills:['scan','boundary','exitLine']},
 {id:'R1',name:'Long Range',goal:'Manage distance with footwork, framing and low-line barriers.',skills:['longGuard','angleStep','lowBarrier']},
 {id:'R2',name:'Mid Range',goal:'Intercept, cover, redirect and reposition.',skills:['interceptLine','coverReturn','parryExit']},
 {id:'R3',name:'Short Range',goal:'Protect structure, create space and exit.',skills:['compactFrame','shoulderBump','shortPower']},
 {id:'R4',name:'Contact / Clinch',goal:'Disrupt grips or pressure, turn the line and disengage.',skills:['postureFrame','pummelExit','turnRelease']},
 {id:'R5',name:'Ground Prevention / Recovery',goal:'Avoid going down; if down, protect, create space and stand safely.',skills:['baseRecovery','technicalStand','wallRecovery']}
 ],
 competencies:{
 scan:{name:'Environmental Scan',domain:'Awareness'},boundary:{name:'Verbal/Physical Boundary',domain:'Prevention'},exitLine:{name:'Exit-Line Recognition',domain:'Mobility'},longGuard:{name:'Protective Long Frame',domain:'Range'},angleStep:{name:'Angle Step',domain:'Footwork'},lowBarrier:{name:'Low-Line Barrier',domain:'Lower Body'},interceptLine:{name:'Interception Line',domain:'Timing'},coverReturn:{name:'Cover + Return to Base',domain:'Defense'},parryExit:{name:'Redirect + Exit',domain:'Redirection'},compactFrame:{name:'Compact Protective Frame',domain:'Close Range'},shoulderBump:{name:'Shoulder/Forearm Space Creation',domain:'Disruption'},shortPower:{name:'Short-Range Body Power',domain:'Power'},postureFrame:{name:'Posture Frame',domain:'Clinch'},pummelExit:{name:'Inside Position + Exit',domain:'Clinch'},turnRelease:{name:'Turn + Release',domain:'Redirection'},baseRecovery:{name:'Base Recovery',domain:'Balance'},technicalStand:{name:'Protected Stand-Up',domain:'Recovery'},wallRecovery:{name:'Wall-Assisted Recovery',domain:'Recovery'}
 },
 sessions:[
 {id:'P1',name:'Awareness & Exit',range:'R0',focus:'Avoid the physical problem when possible',chain:'SCAN → POSITION → BOUNDARY → EXIT',skills:['scan','boundary','exitLine']},
 {id:'P2',name:'Long-Range Management',range:'R1',focus:'Preserve space without high kicking',chain:'FRAME → ANGLE → LOW BARRIER → EXIT',skills:['longGuard','angleStep','lowBarrier']},
 {id:'P3',name:'Interception & Redirection',range:'R2',focus:'Meet pressure without trading unnecessarily',chain:'READ → INTERCEPT → REDIRECT → REPOSITION',skills:['interceptLine','coverReturn','parryExit']},
 {id:'P4',name:'Short-Range Structure',range:'R3',focus:'Generate space from compact positions',chain:'COVER → ROOT → CREATE SPACE → EXIT',skills:['compactFrame','shoulderBump','shortPower']},
 {id:'P5',name:'Disruptive Clinch',range:'R4',focus:'Minimal grappling for disruption and disengagement',chain:'POSTURE → FRAME → INSIDE POSITION → TURN → RELEASE',skills:['postureFrame','pummelExit','turnRelease']},
 {id:'P6',name:'Stay Up / Get Up',range:'R5',focus:'Prevent the fall or recover safely',chain:'BASE → PROTECT → SPACE → STAND → EXIT',skills:['baseRecovery','technicalStand','wallRecovery']},
 {id:'P7',name:'Range Continuity',range:'ALL',focus:'Remove gaps between ranges',chain:'AWARENESS → LONG → MID → SHORT → CONTACT → EXIT',skills:['exitLine','angleStep','parryExit','compactFrame','turnRelease']}
 ],
 constraints:{highKicks:false,primaryKickZone:'waist-and-below',grappling:'disrupt-redirect-reposition-disengage',sportGroundGame:false,priority:'escape-and-safety'}
};