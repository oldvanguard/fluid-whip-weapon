(()=>{
 const routes=new Map();
 window.AppRouter={
  register(name,view){if(typeof view==='function')routes.set(name,view);return this},
  alias(name,target){if(routes.has(target))routes.set(name,routes.get(target));return this},
  has(name){return routes.has(name)},
  view(name=state.page){const fn=routes.get(name);return fn?fn():null},
  go(name){if(!routes.has(name)){console.warn('[FWW] Unknown route:',name);name='home'}state.page=name;save();this.render()},
  render(){let view=this.view();if(view===null&&state.page!=='home'){state.page='home';save();view=this.view('home')}if(view===null)return false;const root=document.getElementById('app');if(root)root.innerHTML=shell(view);return true},
  list(){return [...routes.keys()]}
 };
 const map={
  home:window.commandDashboard||window.home,train:window.train,move:window.moveView,quick:window.quick,flow:window.flow,progress:window.progress,learn:window.learn,curriculum:window.curriculum,body:window.body,pain:window.pain,precheck:window.readiness,
  whipcurriculum:window.whipCurriculum,whiptrain:window.whipTrain,whipmove:window.whipMove,
  weapon:window.weaponHome||window.weaponManual,weaponlesson:window.weaponLesson,weaponcurriculum:window.weaponCurriculum,weapontrain:window.weaponTrain,weaponmove:window.weaponMove,weaponlibrary:window.weaponTechnicalLibrary||window.weaponLibrary,weapontech:window.weaponTechniqueView,
  adaptivelab:window.adaptiveLab,offenselibrary:window.offenseLibrary,combolab:window.comboLab,
  fitness:window.fitnessHome,fitnessworkout:window.fitnessWorkout,readiness:window.readinessHome,program:window.programHome
 };
 Object.entries(map).forEach(([name,view])=>AppRouter.register(name,view));
 window.registerRoute=(name,fn)=>AppRouter.register(name,fn);
 window.go=name=>AppRouter.go(name);
 window.render=()=>AppRouter.render();
 window.openFitness=()=>AppRouter.go('fitness');
 window.openReadiness=()=>AppRouter.go('readiness');
 window.openProgram=()=>AppRouter.go('program');
 window.startReadiness=()=>AppRouter.go('precheck');
 render();
})();