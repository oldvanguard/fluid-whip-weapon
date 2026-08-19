window.TrainingEngine={
 masteryThreshold:3,
 practiceCount(id){return (state.practiceCounts&&state.practiceCounts[id])||0},
 status(id){const n=this.practiceCount(id);if(n>=this.masteryThreshold)return'MASTERED';if(n>0)return'PRACTICED';if(state.learned.includes(id))return'LEARNED';return'NEW'},
 nextIndex(){const moves=sessionMoves();for(let i=0;i<moves.length;i++)if(!state.done.includes(moves[i].id))return i;return Math.max(0,moves.length-1)},
 record(id){state.practiceCounts=state.practiceCounts||{};state.practiceCounts[id]=(state.practiceCounts[id]||0)+1;if(!state.done.includes(id))state.done.push(id);if(!state.learned.includes(id))state.learned.push(id);save()},
 masteryPercent(){const ids=allMoves.map(m=>m.id),earned=ids.filter(id=>this.practiceCount(id)>=this.masteryThreshold).length;return Math.round(earned/ids.length*100)},
 sessionPercent(){const moves=sessionMoves();return moves.length?Math.round(state.done.length/moves.length*100):0},
 advance(){const moves=sessionMoves(),i=state.activeMove;if(i<moves.length-1){state.activeMove=i+1;const m=moves[state.activeMove];state.visualView=VisualEngine.viewFor(m.id);state.visualFrame=0;state.page='move';save();render();return}state.page='train';save();render()}
};
window.guidedStart=()=>{state.activeMove=TrainingEngine.nextIndex();const m=sessionMoves()[state.activeMove];state.visualView=VisualEngine.viewFor(m.id);state.visualFrame=0;state.page='move';save();render()};
window.practiceAndNext=id=>{TrainingEngine.record(id);TrainingEngine.advance()};