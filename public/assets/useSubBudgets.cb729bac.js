import{p as i}from"./planeacion.api.88477cd4.js";import{l as d}from"./layout.6863befb.js";import{u as o,a as r}from"./useQuery.esm.750a8d8b.js";import{u as c}from"./useMutation.esm.74dfadc9.js";import{r as y,w as q,c as p}from"./index.2447aa50.js";function l(e,t){return e[t]}const S=e=>{const t=new FormData,u=["requisition_number","preparation_date","processing_date","estimated_amount","area_id","sub_budget_id"];for(const a of u)t.append(a,l(e,a).toString());const s=[{field:"file",value:e.file}];for(const{field:a,value:g}of s)g&&t.append(a,g);return t};var n={getSubBudgets(e){return i.get(`/sub-budgets?budget=${e}`)},createSubBudget(e){return i.post("/sub-budgets",e)},createSubBudgetAdjustment(e){return i.post("/sub-budget-adjustment",e)},getSubBudget(e){return i.get(`/sub-budgets/${e}`)},updateSubBudget(e,t){const{id:u,...s}=t;return i.patch(`/sub-budgets/${e}`,s)},getSubBudgetRequisitionsDictionary(){return i.get("/sub-budgets/requisitions/dictionary")},getSubBudgetRequisitions(e){return i.get(`/sub-budgets/requisitions/all?budget_year=${e}`)},createSubBudgetRequisition(e){const t=S(e);return i.post(`/sub-budgets/${e.sub_budget_id}/requisitions`,t,{headers:{"Content-Type":"multipart/form-data"}})},editSubBudgetRequisition(e){const t=S(e);return i.patch(`/sub-budgets/${e.sub_budget_id}/requisitions/${e.id}`,t,{headers:{"Content-Type":"multipart/form-data"}})},getSubBudgetRequisition(e,t){return i.get(`/sub-budgets/${e}/requisitions/${t}`)},getSubBudgetDictionary(e){return i.get(`/sub-budgets/dictionary?search=${e}`)},getSavings(){return i.get("/sub-budgets/savings")},deleteSubBudgetRequisition({subBudgetId:e,requisitionId:t}){return i.delete(`/sub-budgets/${e}/requisitions/${t}`)}};const m=async()=>{const{data:e}=await n.getSavings();return e},R=async e=>(await n.getSubBudgets(e)).data,f=async e=>(await n.createSubBudget(e)).data,w=async({createSubBudgetAdjustmentDto:e})=>(await n.createSubBudgetAdjustment(e)).data,F=async e=>(await n.getSubBudget(e)).data,D=async()=>(await n.getSubBudgetRequisitionsDictionary()).data,h=async e=>(await n.getSubBudgetRequisitions(e)).data,v=async({createRequisitionSubBudgetDto:e})=>(await n.createSubBudgetRequisition(e)).data,Q=async({dto:e})=>(await n.editSubBudgetRequisition(e)).data,_=async({subBudgetId:e,requisitionId:t})=>(await n.getSubBudgetRequisition(e,t)).data,C=async({search:e})=>(await n.getSubBudgetDictionary(e)).data,$=async({subBudgetId:e,requisitionId:t})=>(await n.deleteSubBudgetRequisition({subBudgetId:e,requisitionId:t})).data,x=async({subBudgetId:e,updateSubBudgetDto:t})=>(await n.updateSubBudget(e,t)).data,K=e=>({subBudgetQuery:o({queryKey:["subBudgets",e],queryFn:()=>R(e.value),staleTime:6e5})}),I=e=>({subBudgetQuery:o({queryKey:["subBudget",e],queryFn:()=>F(e),staleTime:6e4})}),N=()=>{const e=r();return{createSubBudgetMutation:c({mutationFn:f,onSuccess:async()=>{d.showSuccessNotification("Presupuesto creado exitosamente"),await e.invalidateQueries(["subBudgets"])}})}},E=()=>{const e=r();return{updateSubBudgetMutation:c({mutationFn:x,onSuccess:async(u,s)=>{d.showSuccessNotification("Presupuesto actualizado exitosamente"),await e.invalidateQueries(["subBudgets"]),await e.setQueryData(["subBudget",s.subBudgetId],u)}})}},P=()=>{const e=r();return{createSubBudgetAdjustmentMutation:c({mutationFn:w,onSuccess:async()=>{d.showSuccessNotification("Adecuaci\xF3n creada exitosamente"),await e.invalidateQueries(["subBudgets"])}})}},U=()=>{const{isLoading:e,isFetching:t,data:u}=o({queryKey:["subBudgetRequisitionsDictionary"],queryFn:D,staleTime:6e5});return{subBudgetReqDictionaryIsLoading:e,subBudgetReqDictionaryIsFetching:t,subBudgetReqDictionary:u}},k=e=>{const{isLoading:t,isFetching:u,data:s}=o({queryKey:["subBudgetRequisitions",e],queryFn:()=>h(e.value),staleTime:6e5});return{subBudgetRequisitionsIsLoading:t,subBudgetRequisitionsIsFetching:u,subBudgetRequisitions:s}},z=()=>{const e=r();return{createSubBudgetRequisitionMutation:c({mutationFn:v,onSuccess:async()=>{d.showSuccessNotification("Requisici\xF3n creada exitosamente"),await e.invalidateQueries(["subBudgetRequisitions"])}})}},G=()=>{const e=r();return{editSubBudgetRequisitionMutation:c({mutationFn:Q,onSuccess:async(u,s)=>{d.showSuccessNotification("Requisici\xF3n editada exitosamente"),e.setQueryData(["subBudgetRequisition",s.dto.sub_budget_id,s.dto.id],u),await e.invalidateQueries(["subBudgetRequisitions"])}})}},H=({subBudgetId:e,requisitionId:t})=>{r();const{isLoading:u,isFetching:s,data:a}=o({queryKey:["subBudgetRequisition",e,t],queryFn:()=>_({subBudgetId:e,requisitionId:t}),staleTime:1e3*60});return{subBudgetRequisitionIsLoading:u,subBudgetRequisitionIsFetching:s,subBudgetRequisition:a}},b=y(""),V=()=>{const{isLoading:e,isFetching:t,data:u,refetch:s}=o({queryKey:["subBudgetDictionary",b.value],queryFn:()=>b.value===""?[]:C({search:b.value}),staleTime:6e5});q(b,async()=>{await s()});const a=p(()=>{var g;return(g=u.value)==null?void 0:g.map(B=>({id:B.value,event:B.label}))});return{subBudgetDictionaryIsLoading:e,subBudgetDictionaryIsFetching:t,subBudgetDictionary:a,search:b}},J=({budgetYear:e})=>{const{isLoading:t,isError:u,data:s,error:a}=o({queryKey:["savings",e],queryFn:m,staleTime:6e5});return{isLoading:t,isError:u,savings:s,error:a}},O=()=>{const e=r(),{mutateAsync:t,isLoading:u,isError:s}=c({mutationFn:$,onSuccess:async()=>{d.showSuccessNotification("Requisici\xF3n eliminada exitosamente"),await e.invalidateQueries(["subBudgetRequisitions"])}});return{deleteSubBudgetReq:t,isDeletingSubBudgetRequisition:u,isDeletingSubBudgetRequisitionError:s}};export{K as a,P as b,N as c,E as d,k as e,V as f,O as g,I as h,z as i,G as j,H as k,J as l,U as u};
