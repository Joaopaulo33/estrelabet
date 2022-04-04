import { useParams } from 'react-router-dom';
import { api } from '../../services/api';
import{useEffect, useState} from 'react'




const Page = ()=>{
  const [loading,setLoading]= useState(true)
  const [collaborator,setCollaborator]= useState(undefined)


const {id} = useParams();

  useEffect(async() => {   
    await api.get('/collaborator/'+id).then(response => {
      setCollaborator(response.data);
      setLoading(false)

   }).catch(
       error=>{
           setLoading(false)
           console.log(error);
       }
    )
},[])



  return (
  <div> 
  {loading ? (<div>Carregando</div>):(
    <div>
      {collaborator ? (
        <div ClassName="collaboratorInformations">
            <h1>{collaborator.name}</h1>
            <h3>CNPJ:{collaborator.cpf}</h3>
            <h3>Address:{collaborator.address}</h3>
            <h3>Telefone:{collaborator.telephone}</h3>
            <h3>E-mail:{collaborator.email}</h3>
            <h3>ID:{collaborator._id}</h3>
            <h3>ID empresa: {collaborator.companyId}</h3>
            <hr></hr>
        </div>
      ) : (<div></div>)}
    </div> 
  )}
  
  </div>
  )


}

export default Page;