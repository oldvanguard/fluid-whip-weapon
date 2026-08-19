(()=>{
 // QA patch: separate the legacy pre-session check from the adaptive physical readiness profile.
 window.startReadiness=()=>{state.page='precheck';save();render()};
 window.openReadiness=()=>{state.page='readiness';save();render()};
 window.safeGo=page=>{state.page=page;save();render()};
 window.resumeTraining=()=>{
   const d=programDay(state.programDay||0);
   if(d.fit){chooseFit(d.fit);return;}
   if(d.martial){launchProgramBlock('martial');return;}
   openProgram();
 };
 const oldRender=render;
 window.render=()=>{
   if(state.page==='precheck')document.getElementById('app').innerHTML=shell(readiness());
   else oldRender();
 };
 render();
})();