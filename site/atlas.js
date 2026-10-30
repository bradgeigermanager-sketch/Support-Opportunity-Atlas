const sampleConcepts = [
  {title:"Community mathematics tutoring",domain:"Education",action:"Teach",description:"An illustrative pathway for volunteers to support mathematics practice and learner confidence.",skills:"teaching mathematics communication mentoring",resources:"time learning materials",tags:"numeracy students tutoring education",status:"Illustrative concept"},
  {title:"Accessible learning resource review",domain:"Education",action:"Research",description:"A hypothetical review of learning materials for clarity, accessibility, and practical usefulness.",skills:"research writing accessibility curriculum",resources:"time subject knowledge",tags:"education curriculum accessibility",status:"Illustrative concept"},
  {title:"Community garden coordination",domain:"Community",action:"Organize",description:"A sample coordination model connecting local space, volunteers, tools, and shared growing activities.",skills:"organization communication gardening",resources:"space equipment time",tags:"food community garden sustainability",status:"Illustrative concept"},
  {title:"Open environmental data dashboard",domain:"Environment",action:"Build",description:"A hypothetical software contribution that organizes public environmental measurements into an accessible dashboard.",skills:"programming data analysis design",resources:"technology data time",tags:"environment climate data science software",status:"Illustrative concept"},
  {title:"Volunteer scheduling tool",domain:"Technology",action:"Build",description:"An example project concept for coordinating volunteer availability and program schedules.",skills:"programming product design project management",resources:"technology time network",tags:"community nonprofit volunteer software",status:"Illustrative concept"},
  {title:"Community resource translation",domain:"Community",action:"Teach",description:"A sample contribution pathway for translating public-facing resource guides into additional languages.",skills:"translation writing review",resources:"knowledge time",tags:"community language access newcomer",status:"Illustrative concept"}
];
const searchInput=document.getElementById("atlas-search");
const domainFilter=document.getElementById("domain-filter");
const actionFilter=document.getElementById("action-filter");
const grid=document.getElementById("result-grid");
const count=document.getElementById("result-count");
const empty=document.getElementById("empty-state");
function render(){
  const q=searchInput.value.trim().toLowerCase();
  const domain=domainFilter.value;
  const action=actionFilter.value;
  const matches=sampleConcepts.filter(item=>{
    const haystack=[item.title,item.domain,item.action,item.description,item.skills,item.resources,item.tags].join(" ").toLowerCase();
    return (!q||haystack.includes(q))&&(!domain||item.domain===domain)&&(!action||item.action===action);
  });
  count.textContent=matches.length+" illustrative concept"+(matches.length===1?"":"s")+" shown";
  grid.replaceChildren();
  for(const item of matches){
    const card=document.createElement("article");
    card.className="sample-card";
    const tag=document.createElement("span");tag.className="tag";tag.textContent=item.domain+" · "+item.action;
    const title=document.createElement("h3");title.textContent=item.title;
    const desc=document.createElement("p");desc.textContent=item.description;
    const meta=document.createElement("div");meta.className="meta";meta.textContent=item.status+" · Skills: "+item.skills;
    card.append(tag,title,desc,meta);grid.append(card);
  }
  empty.hidden=matches.length!==0;
}
searchInput.addEventListener("input",render);
domainFilter.addEventListener("change",render);
actionFilter.addEventListener("change",render);
document.getElementById("clear-search").addEventListener("click",()=>{searchInput.value="";domainFilter.value="";actionFilter.value="";render();searchInput.focus();});
render();
