window.WEAPON_TECHNIQUES={
 footwork:[
 {id:'w-ready',name:'Protective Ready Position',range:'R0',chain:'SEE → ROOT → HANDS READY → EXIT LINE',purpose:'Adopt a non-escalatory position that protects balance and preserves movement.',cues:['Feet under usable base','Hands available without aggressive posturing','Chin neutral; vision broad','Keep an exit visible']},
 {id:'w-retreat',name:'Balanced Retreat Step',range:'R1',chain:'READ → PUSH FLOOR → MOVE BASE → RE-ROOT',purpose:'Increase distance without crossing the feet or leaning backward.',cues:['Move the rear foot first when retreating','Keep stance width usable','Head stays over the base','Finish ready to change direction']},
 {id:'w-angle',name:'Outside Angle Step',range:'R1',chain:'READ → STEP OFF LINE → TURN BASE → EXIT',purpose:'Leave the direct line while preserving balance and orientation.',cues:['Small angle before large angle','Move feet before forcing torso rotation','Do not twist a planted knee','Recover immediately']},
 {id:'w-pivot',name:'Recovery Pivot',range:'R2',chain:'ROOT → SHIFT → PIVOT → RE-ROOT',purpose:'Reorient the body after pressure or redirection.',cues:['Unload before pivoting','Turn through foot, hip and trunk together','Keep stance beneath you','Finish able to move']}
 ],
 protection:[
 {id:'w-longframe',name:'Protective Long Frame',range:'R1',chain:'ROOT → FRAME → ANGLE → RECOVER',purpose:'Use skeletal alignment and distance to preserve personal space.',cues:['Shoulder stays down','Elbow remains soft','Do not lock the joint','Frame while moving rather than reaching']},
 {id:'w-cover',name:'Compact Cover',range:'R2',chain:'SEE → COVER → ROOT → MOVE',purpose:'Protect the head and trunk while preserving vision and mobility.',cues:['Hands return close to structure','Shoulders protect without shrugging excessively','Do not freeze behind the cover','Move after contact']},
 {id:'w-wedge',name:'Forearm Wedge',range:'R2',chain:'COVER → WEDGE → REDIRECT → EXIT',purpose:'Create a protected path through incoming pressure without chasing limbs.',cues:['Use forearm structure','Redirect only enough to clear the line','Keep opposite hand available','Step with the action']},
 {id:'w-closeframe',name:'Close Protective Frame',range:'R3',chain:'ROOT → FRAME → SPACE → TURN',purpose:'Protect posture and create room when distance collapses.',cues:['Elbows connected to torso','Head remains upright','Use legs and trunk, not arm strength alone','Create space then leave']}
 ],
 redirection:[
 {id:'w-parry',name:'Small-Line Redirect',range:'R2',chain:'READ → TOUCH → GUIDE → ANGLE',purpose:'Use minimal movement to clear a direct line and reposition.',cues:['Do not swat','Redirect a small distance','Feet solve the larger positional problem','Return hand to structure']},
 {id:'w-post',name:'Post-and-Turn',range:'R3',chain:'FRAME → POST → STEP → TURN → RELEASE',purpose:'Use a frame and body position to redirect forward pressure and disengage.',cues:['Post with structure rather than a shove','Step before turning','Keep spine organized','Release once the exit opens']},
 {id:'w-inside',name:'Inside Position Recovery',range:'R4',chain:'POSTURE → FRAME → INSIDE → TURN → EXIT',purpose:'Recover useful arm position during close contact without entering prolonged grappling.',cues:['Protect posture first','Seek inside space, not a submission','Use small pummeling motions','Exit as soon as position improves']}
 ],
 lowline:[
 {id:'w-checkstep',name:'Low-Line Check Step',range:'R1',chain:'ROOT → LIFT LOW → PLACE → ANGLE',purpose:'Use a low leg barrier while maintaining a recoverable base.',cues:['Keep the action below waist height','Do not sacrifice balance for reach','Supporting knee remains soft','Place the foot back under control']},
 {id:'w-kneeshield',name:'Low Knee Shield',range:'R2',chain:'ROOT → SHIFT → SHIELD → RE-ROOT',purpose:'Momentarily occupy low space while protecting balance and distance.',cues:['Lift only as high as mobility permits','Keep torso stacked','Do not hop unnecessarily','Return foot to a stable base']}
 ],
 close:[
 {id:'w-shoulderframe',name:'Shoulder–Forearm Space Frame',range:'R3',chain:'ROOT → CONNECT → DRIVE BASE → SPACE → EXIT',purpose:'Create separation at short range using the whole body rather than isolated arm effort.',cues:['Keep neck long','Drive from feet and hips','Use controlled training pressure','Do not chase after separation']},
 {id:'w-turnrelease',name:'Turn-and-Release',range:'R4',chain:'POSTURE → FRAME → STEP → TURN → RELEASE',purpose:'Reposition close pressure long enough to disengage.',cues:['Stay upright','Turn with the feet','Avoid wrenching joints','Release and move away']}
 ],
 recovery:[
 {id:'w-wallbase',name:'Wall Base Recovery',range:'R5',chain:'PROTECT → FRAME WALL → BASE → STAND → EXIT',purpose:'Use a stable surface to regain posture and mobility.',cues:['Protect head and balance first','Use the wall for structure','Stand through the legs','Scan before moving away']},
 {id:'w-stand',name:'Protected Stand-Up',range:'R5',chain:'PROTECT → CREATE SPACE → POST → STAND → MOVE',purpose:'Return from the floor to standing while maintaining awareness and protection.',cues:['Do not rush the stand','Keep a protective structure','Place the foot before rising','Move once upright']}
 ]
};
window.weaponTechniqueList=()=>Object.values(WEAPON_TECHNIQUES).flat();
window.weaponTechnique=id=>weaponTechniqueList().find(x=>x.id===id);