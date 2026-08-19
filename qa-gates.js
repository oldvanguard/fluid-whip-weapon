(()=>{
 const has=(arr,id)=>Array.isArray(arr)&&arr.includes(id);
 window.GATE_AUDIT={
  fluid:()=>FLUID.levels.map(l=>({id:l.id,name:l.name,gate:l.gate||[],missing:(l.gate||[]).filter(id=>!has(state.earned,id))})),
  whip:()=>WHIP.levels.map(l=>({id:l.id,name:l.name,gate:l.gate||[],missing:(l.gate||[]).filter(id=>!has(state.whipEarned,id))})),
  summary:()=>({whipUnlockMissing:(FLUID.levels[2].gate||[]).filter(id=>!has(state.earned,id)),weaponUnlockMissing:(WHIP.levels[2].gate||[]).filter(id=>!has(state.whipEarned,id))})
 };
 window.gateAuditPanel=()=>{const a=GATE_AUDIT.summary();const names=(ids,set)=>ids.map(id=>set[id]?.name||id);const row=(title,items)=>`<div class="gate-audit"><b>${title}</b>${items.length?items.map(x=>`<span>○ ${x}</span>`).join(''):'<span class="gate-clear">✓ CLEAR</span>'}</div>`;return `<section class="card wide"><div class="eyebrow">PROGRESSION INTEGRITY</div><h3>Stage Gates</h3><p>Locked stages expose the exact competencies still required.</p><div class="gate-grid">${row('WHIP UNLOCK',names(a.whipUnlockMissing,FLUID.competencies))}${row('WEAPON UNLOCK',names(a.weaponUnlockMissing,WHIP.competencies))}</div></section>`};
 const priorProgress=progress;window.progress=()=>`${priorProgress()}${gateAuditPanel()}`;
})();