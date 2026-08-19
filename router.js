(()=>{
 const routes=new Map();
 window.AppRouter={
  register(name,view){routes.set(name,view);return this},
  has(name){return routes.has(name)},
  view(name=state.page){const fn=routes.get(name);return fn?fn():null},
  go(name){if(!routes.has(name)){console.warn('[FWW] Unknown route:',name);name='home'}state.page=name;save();this.render()},
  render(){const view=this.view();if(view===null)return false;const root=document.getElementById('app');if(root)root.innerHTML=shell(view);return true},
  list(){return [...routes.keys()]}
 };
 const candidates={home,train,move:moveView,quick,flow,progress,learn,curriculum,body,pain,precheck:readiness};
 Object.entries(candidates).forEach(([k,v])=>typeof v==='function'&&AppRouter.register(k,v));
 ['whipcurriculum','whiptrain','whipmove','weapon','weaponcurriculum','weapontrain','weaponmove','adaptive','combolab','conditioning','readiness','program'].forEach(name=>{
  const aliases={whipcurriculum:'whipCurriculum',whiptrain:'whipTrain',whipmove:'whipMove',weapon:'weaponManual',weaponcurriculum:'weaponCurriculum',weapontrain:'weaponTrain',weaponmove:'weaponMove',adaptive:'adaptiveLab',combolab:'combinationLab',conditioning:'conditioningHome',readiness:'readinessHome',program:'programHome'};
  const fn=window[aliases[name]];if(typeof fn==='function')AppRouter.register(name,fn);
 });
 window.registerRoute=(name,fn)=>AppRouter.register(name,fn);
 window.go=name=>AppRouter.go(name);
 window.render=()=>AppRouter.render();
 render();
})();