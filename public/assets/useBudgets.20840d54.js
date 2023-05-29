import{p as u}from"./planeacion.api.0342f2e3.js";import{l as a}from"./layout.f6c7d4be.js";import{u as n,a as g}from"./QChip.c57cfaf9.js";import{u as i}from"./useMutation.esm.6c972cd2.js";var o={getBudgets(){return u.get("/budgets")},storeBudget(t){return u.post("/budgets",t)},getBudgetById(t){return u.get(`/budgets/${t}`)}};const c=async()=>{const{data:t}=await o.getBudgets();return t},y=async t=>{const{data:e}=await o.storeBudget(t);return e},B=async t=>{const{data:e}=await o.getBudgetById(t);return e},f=()=>{const{isLoading:t,isError:e,data:r,error:s}=n({queryKey:["budgets"],queryFn:c,staleTime:6e5});return{isLoading:t,isError:e,data:r,error:s}},q=()=>{const t=g();return{budgetStoreMutations:i({mutationFn:y,onSuccess:()=>{t.invalidateQueries({queryKey:["budgets"]}),a.showSuccessNotification("Presupuesto creado con \xE9xito")},onError:()=>{a.showErrorNotification("Error al crear presupuesto")}})}},E=t=>{const{isLoading:e,isError:r,data:s,error:d}=n({queryKey:["budget",t],queryFn:()=>B(t),staleTime:6e5});return{isLoading:e,isError:r,budget:s,error:d}};export{f as a,E as b,q as u};
