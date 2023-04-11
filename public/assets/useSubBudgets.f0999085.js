import{p as u,l as r}from"./layout.57642b32.js";import{u as i,a as o,b as d}from"./QSelect.0c416ba6.js";var s={getSubBudgets(){return u.get("/sub-budgets")},createSubBudget(e){return u.post("/sub-budgets",e)},createSubBudgetAdjustment(e){return u.post("/sub-budget-adjustment",e)},getSubBudget(e){return u.get(`/sub-budgets/${e}`)},updateSubBudget(e,t){const{id:n,...a}=t;return u.patch(`/sub-budgets/${e}`,a)},getSubBudgetRequisitionsDictionary(){return u.get("/sub-budgets/requisitions/dictionary")}};const c=async()=>(await s.getSubBudgets()).data,g=async e=>(await s.createSubBudget(e)).data,b=async({createSubBudgetAdjustmentDto:e})=>(await s.createSubBudgetAdjustment(e)).data,B=async e=>(await s.getSubBudget(e)).data,y=async()=>(await s.getSubBudgetRequisitionsDictionary()).data,S=async({subBudgetId:e,updateSubBudgetDto:t})=>(await s.updateSubBudget(e,t)).data,q=()=>({subBudgetQuery:i({queryKey:["subBudgets"],queryFn:c,staleTime:6e5})}),l=e=>({subBudgetQuery:i({queryKey:["subBudget",e],queryFn:()=>B(e),staleTime:6e4})}),w=()=>{const e=o();return{createSubBudgetMutation:d({mutationFn:g,onSuccess:async()=>{r.showSuccessNotification("Presupuesto creado exitosamente"),await e.invalidateQueries(["subBudgets"])}})}},D=()=>{const e=o();return{updateSubBudgetMutation:d({mutationFn:S,onSuccess:async(n,a)=>{r.showSuccessNotification("Presupuesto actualizado exitosamente"),await e.invalidateQueries(["subBudgets"]),await e.setQueryData(["subBudget",a.subBudgetId],n)}})}},Q=()=>{const e=o();return{createSubBudgetAdjustmentMutation:d({mutationFn:b,onSuccess:async()=>{r.showSuccessNotification("Adecuaci\xF3n creada exitosamente"),await e.invalidateQueries(["subBudgets"])}})}},F=()=>{const{isLoading:e,isFetching:t,data:n}=i({queryKey:["subBudgetRequisitionsDictionary"],queryFn:y,staleTime:6e5});return{subBudgetReqDictionaryIsLoading:e,subBudgetReqDictionaryIsFetching:t,subBudgetReqDictionary:n}};export{q as a,Q as b,w as c,D as d,l as e,F as u};
