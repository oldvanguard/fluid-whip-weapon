(()=>{
 window.AppState={
  set(patch,renderNow=true){Object.assign(state,patch);save();if(renderNow)render();return state},
  update(fn,renderNow=true){fn(state);save();if(renderNow)render();return state},
  navigate(page,patch={}){Object.assign(state,patch,{page});save();render()},
  resetSession(kind='fluid'){
   if(kind==='fluid')state.done=[];
   if(kind==='whip')state.whipDone=[];
   if(kind==='fitness')state.fitDone=[];
   save();
  },
  snapshot(){return JSON.parse(JSON.stringify(state))}
 };
 // Canonical pre-session mutation. Physical readiness remains state.readiness.
 window.setReady=r=>{
   const scale=r==='limited'?0:1;
   AppState.navigate(r==='pain'?'pain':'train',{precheckStatus:r,scale,done:[],activeMove:0});
 };
 window.clearPrecheck=()=>AppState.set({precheckStatus:null},false);
})();