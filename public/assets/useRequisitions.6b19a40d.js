import{p as s,l as n}from"./layout.e94e56b8.js";import{u,b as q,a as R}from"./QSelect.37b48709.js";var o={getRequisitions(){return s.get("/requisitions")},getRequisition(i){return s.get(`/requisitions/${i}`)},storeRequisition(i){return delete i.area,s.post("/requisitions",i)},updateRequisition(i,t){return s.put(`/requisitions/${i}`,t)},uploadFile(i,t){return s.post(`/files/requisitions/${i}`,t,{headers:{"Content-Type":"multipart/form-data"}})},storeRequisitionDetail(i,t){return s.post(`/requisitions/${i}/details`,t)},getDictionary(){return s.get("/requisitions/dictionary")},removeRequisitionDetail(i,t){return s.delete(`/requisitions/${i}/details/${t}`)}};const p=async()=>{const{data:i}=await o.getRequisitions();return i},g=async i=>{const{data:t}=await o.getRequisition(i);return t},m=async i=>{const{data:t}=await o.storeRequisition(i);return t},E=async i=>{var c;const{id:t}=i,{requisition_number:e,estimated_amount:r,processing_date:a,preparation_date:d,area_id:y=(c=i.area)==null?void 0:c.id}=i,{data:l}=await o.updateRequisition(t,{requisition_number:e,estimated_amount:r,processing_date:a,preparation_date:d,area_id:y});return l},w=async()=>{const{data:i}=await o.getDictionary();return i},f=()=>{const{isLoading:i,isError:t,data:e,error:r}=u({queryKey:["requisitionsDictionary"],queryFn:w,staleTime:6e4});return{isLoading:i,isError:t,requisitionsDictionary:e,error:r}},D=i=>{const{isLoading:t,isError:e,data:r,error:a}=u({queryKey:["requisition",i],queryFn:()=>g(i),staleTime:6e5});return{isLoading:t,isError:e,requisition:r,error:a}},S=()=>({requisitionStoreMutations:q({mutationFn:m,onSuccess:()=>{n.showSuccessNotification("Requisici\xF3n creada con \xE9xito")},onError:()=>{n.showErrorNotification("Error al crear requisici\xF3n")}})}),$=()=>{const i=R();return{requisitionUpdateMutations:q({mutationFn:E,onSuccess:async e=>{await i.invalidateQueries(["requisition",e.id]),n.showSuccessNotification("Requisici\xF3n actualizada con \xE9xito")},onError:()=>{n.showErrorNotification("Error al actualizar requisici\xF3n")}})}},h=()=>{const{isLoading:i,isError:t,data:e,error:r}=u({queryKey:["requisitions"],queryFn:p,staleTime:6e4});return{isLoading:i,isError:t,requisitions:e,error:r}};export{o as R,$ as a,h as b,D as c,f as d,S as u};
