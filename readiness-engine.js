window.READINESS={
 domains:{ankle:{name:'Ankle Mobility',prep:['ankleRock','calf']},hip:{name:'Hip Mobility / Control',prep:['hip90','supportedSplit']},thorax:{name:'Thoracic Mobility',prep:['openBook','catWave']},core:{name:'Core Chassis',prep:['brace','deadBug','birdDog','sideBrace']},base:{name:'Base Strength',prep:['highSit','chairSquat','supportedSplit']},hinge:{name:'Hip Hinge',prep:['kbDead','brace']},balance:{name:'Balance / Weight Shift',prep:['calf','supportedSplit','march']},shoulder:{name:'Shoulder Structure',prep:['wallPush','inclinePush','towelIso']},engine:{name:'Work Capacity',prep:['march','stepFlow']}},
 skillNeeds:{
  FLUID:{default:['ankle','hip','thorax','core','balance'],moves:{root:['ankle','base','core'],shift:['hip','balance','core'],wave:['thorax','hip','core'],turn:['ankle','hip','balance'],flow:['engine','balance','core']}},
  WHIP:{default:['hip','thorax','core','base','balance'],moves:{pendulum:['shoulder','thorax','core'],coilRelease:['hip','thorax','core'],hipLead:['hip','thorax','core','base'],recoil:['core','balance','base'],brake:['core','base','balance'],rhythm:['engine','balance','core'],direction:['ankle','hip','balance','engine']}},
  WEAPON:{default:['ankle','hip','core','base','balance','engine'],ranges:{R0:['balance','engine'],R1:['ankle','hip','balance','base'],R2:['core','balance','shoulder'],R3:['core','base','shoulder'],R4:['core','base','balance','shoulder'],R5:['core','hip','base','shoulder']}}
 },
 ratings:['LIMITED','BUILDING','READY']
};
window.readinessNeeds=(stage,key)=>{const s=READINESS.skillNeeds[stage];if(!s)return[];return (s.moves&&s.moves[key])||(s.ranges&&s.ranges[key])||s.default||[]};
window.prescriptionFor=(stage,key,stateObj)=>{const needs=readinessNeeds(stage,key);const limited=needs.filter(d=>(stateObj[d]??0)<2);const exercises=[];limited.forEach(d=>READINESS.domains[d].prep.forEach(x=>{if(!exercises.includes(x))exercises.push(x)}));return {needs,limited,exercises:exercises.slice(0,6)};};