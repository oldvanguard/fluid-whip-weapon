(()=>{
 // Compatibility helpers retained for older UI actions. Rendering is owned by AppRouter.
 window.startReadiness=()=>{state.page='precheck';save();render()};
 window.openReadiness=()=>{state.page='readiness';save();render()};
 window.safeGo=page=>{state.page=page;save();render()};
 window.resumeTraining=()=>{
   const d=programDay(state.programDay||0);
   if(d.fit){chooseFit(d.fit);return;}
   if(d.martial){launchProgramBlock('martial');return;}
   openProgram();
 };
})();