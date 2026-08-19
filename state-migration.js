(()=>{
 const defaults={earned:[],whipEarned:[],weaponEarned:[],sessions:0,fitSessions:0,totalMoves:0,comboReps:0,decisionReps:0,fitDone:[],programCompleted:{},squatLevel:1,programDay:0,fitScale:0,systemStage:'FLUID'};
 Object.entries(defaults).forEach(([k,v])=>{if(state[k]===undefined||state[k]===null)state[k]=Array.isArray(v)?[]:(typeof v==='object'?{}:v)});
 if(!state.readiness||Array.isArray(state.readiness)||typeof state.readiness!=='object')state.readiness={ankle:0,hip:0,thorax:0,core:0,base:0,hinge:0,balance:0,shoulder:0,engine:0};
 ['ankle','hip','thorax','core','base','hinge','balance','shoulder','engine'].forEach(k=>{if(!Number.isInteger(state.readiness[k]))state.readiness[k]=0;state.readiness[k]=Math.max(0,Math.min(2,state.readiness[k]))});
 state.squatLevel=Math.max(1,Math.min(CONDITIONING.squatLadder.length,Number(state.squatLevel)||1));
 state.programDay=Math.max(0,Math.min(6,Number(state.programDay)||0));
 if(state.systemStage==='WEAPON'&&!weaponUnlocked())state.systemStage=whipUnlocked()?'WHIP':'FLUID';
 if(state.systemStage==='WHIP'&&!whipUnlocked())state.systemStage='FLUID';
 save();
})();