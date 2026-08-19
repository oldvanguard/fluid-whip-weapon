(()=>{
 const has=(arr,id)=>Array.isArray(arr)&&arr.includes(id);
 window.GATE_AUDIT={
  fluid:()=>FLUID.levels.map(l=>({id:l.id,name:l.name,gate:l.gate||[],missing:(l.gate||[]).filter(id=>!has(state.earned,id))})),
  whip:()=>WHIP.levels.map(l=>({id:l.id,name:l.name,gate:l.gate||[],missing:(l.gate||[]).filter(id=>!has(state.whipEarned,id))})),
  summary:()=>{const f=GATE_AUDIT.fluid(),w=GATE_AUDIT.whip();return {fluid:f,whip:w,whipUnlockMissing:(FLUID.levels[2].gate||[]).filter(id=>!has(state.earned,id)),weaponUnlockMissing:(WHIP.levels[2].gate||[]).filter(id=>!has(state.whipEarned,id))};}
 };
 window.gateAuditPanel=()=>{const a=GATE_AUDIT.summary();const row=(title,items)=>`<div class="gate-audit"><b>${title}</b>${items.length?items.map(x=>`<span>○ ${x}</span>`).join(''):'<span class="gate-clear">✓ CLEAR</span>'}</div>`;return `<section class="card wide"><div class="eyebrow">PROGRESSION INTEGRITY</div><h3>Gate Audit</h3><p>Every locked stage exposes the exact competencies still required. No invisible progression requirements.</p><div class="gate-grid">${row('WHIP UNLOCK',a.whipUnlockMissing)}${row('WEAPON UNLOCK',a.weaponUnlockMissing)}</div></section>`};
 const priorProgress=progress;
 window.progress=()=>`${priorProgress()}${gateAuditPanel()}`;
})();