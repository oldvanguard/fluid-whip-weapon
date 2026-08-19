(()=>{
 const errors=[],warnings=[];
 const check=(ok,msg,level='error')=>{if(!ok)(level==='warning'?warnings:errors).push(msg)};
 const ids=a=>new Set((a||[]).map(x=>x.id));
 try{
  check(!!window.AppRouter,'AppRouter missing');check(!!window.AppState,'AppState missing');
  const required=['home','train','move','progress','learn','curriculum','whipcurriculum','whiptrain','whipmove','weapon','weaponlesson','weaponlibrary','weapontech','adaptivelab','offenselibrary','combolab','fitness','fitnessworkout','readiness','program'];
  required.forEach(r=>check(AppRouter.has(r),`Route missing: ${r}`));
  check(state.readiness&&typeof state.readiness==='object'&&!Array.isArray(state.readiness),'Physical readiness profile invalid');
  check([null,'good','limited','pain'].includes(state.precheckStatus),'Precheck status invalid');
  const moveIds=ids(allMoves);(FLUID.sessions||[]).forEach(s=>(s.moves||[]).forEach(id=>check(moveIds.has(id),`FLUID ${s.id} references missing move ${id}`)));
  const whipIds=new Set(Object.keys(WHIP.drills||{}));(WHIP.sessions||[]).forEach(s=>(s.moves||[]).forEach(id=>check(whipIds.has(id),`WHIP ${s.id} references missing drill ${id}`)));
  const fluidComp=new Set(Object.keys(FLUID.competencies||{}));(FLUID.levels||[]).forEach(l=>(l.gate||[]).forEach(id=>check(fluidComp.has(id),`FLUID ${l.id} gate references missing competency ${id}`)));
  const whipComp=new Set(Object.keys(WHIP.competencies||{}));(WHIP.levels||[]).forEach(l=>(l.gate||[]).forEach(id=>check(whipComp.has(id),`WHIP ${l.id} gate references missing competency ${id}`)));
  const weaponComp=new Set(Object.keys(WEAPON.competencies||{}));(WEAPON.sessions||[]).forEach(s=>(s.skills||[]).forEach(id=>check(weaponComp.has(id),`WEAPON ${s.id} references missing competency ${id}`)));
  check(typeof finishSession==='function','FLUID completion missing');check(typeof finishWhipSession==='function','WHIP completion missing');check(typeof completeWeaponLesson==='function','WEAPON completion missing');
  check(typeof launchProgramBlock==='function','Program launcher missing');check(typeof weaponUnlocked==='function','WEAPON unlock missing');check(typeof whipUnlocked==='function','WHIP unlock missing');
 }catch(e){errors.push(`QA exception: ${e.message}`)}
 window.RUNTIME_QA={ok:errors.length===0,errors,warnings,run:()=>({ok:errors.length===0,errors:[...errors],warnings:[...warnings]})};
 if(errors.length)console.error('[FWW QA]',errors);else console.info('[FWW QA] structural checks passed');
})();