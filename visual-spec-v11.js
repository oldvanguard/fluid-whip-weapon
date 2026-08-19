window.FWW_VISUAL_SPEC = {
  version:'1.1',
  avatar:{
    lock:true,
    description:'Consistent tall adult male instructional athlete; realistic human proportions; neutral training clothing; clear joint alignment; same face/body/proportions throughout the library.',
    anatomy:'Anatomically plausible joint positions, weight distribution and limb orientation are mandatory. Never distort anatomy to make a pose more dramatic.',
    weaponRule:'Unarmed by default. Show an object/weapon only when that object is specifically required to teach the movement.',
    framing:'Full body whenever feet/base matter; crop only when the crop improves a local hand/arm detail and a full-body reference is also available.',
    background:'Clean high-contrast instructional field compatible with dark FWW UI.',
    sequence:'Use 2–4 frames when one still cannot communicate ROOT → SHIFT/COIL → EXPRESS → RECOVER.',
    overlays:['foot-pressure markers','direction arrow','rotation arc','chain highlight','range label','start/end stance markers'],
    prohibited:['decorative weapons','fantasy anatomy','high kicks','acrobatic poses','unnecessary aggression','busy backgrounds','changing avatar identity between cards']
  },
  requiredSets:{
    foundation:['ROOT Stack','SHIFT Glide','COIL + Return','Segmented Chain Wave','Angle Step','Pivot Exit','ankle rock','hip switch','thoracic rotation','supported squat','box squat','bodyweight squat','KB deadlift','incline push-up','push-up progression','dead bug','bird dog','glute bridge','split stance','balance reach','suitcase hold/march'],
    whip:['Relax → Fire → Recoil','Proximal-to-Distal Wave','Broken Rhythm Step','Fast Step + Stick','lead straight chain','rear straight chain','compact hook chain','low stop-kick chain','low round-kick chain'],
    weapon:['Cover + Angle','Parry + Angle','Forearm Frame','Post + Turn','Inside Frame Recovery','Two-on-One Grip Peel','Shoulder-Line Turn','Wall Frame + Pivot','Base Recovery Step','Protected Technical Stand-Up'],
    rangeMaps:['R0 pre-contact','R1 long','R2 mid','R3 short','R4 contact/clinch','R5 ground prevention/recovery','full R0↔R5 continuum']
  },
  cardLayout:{ratio:'4:5 preferred movement card',top:'movement name + phase/range',center:'avatar sequence',bottom:'3–5 concise cues + regression/progression',style:'glanceable workout-card presentation inspired by the clarity of illustrated exercise programming, while retaining FWW visual identity'}
};