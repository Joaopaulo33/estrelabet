import { useParams } from 'react-router-dom';
import { api } from '../../services/api';
import{useEffect, useState} from 'react'
import {ButtonCreateCompany} from '../../components/ButtonCreateCollaborator'




const Page = ()=>{
  const [loading,setLoading]= useState(true)
  const [company,setCompany]= useState(undefined)
  const[collaborators,setCollaborators]= useState([]);
  const [nameRouteCollaboratorInformations,  setRouteCompanyInformation ]= useState("")


const {id} = useParams();
  useEffect(async() => {   
    await api.get('/company/'+id).then(response => {
      console.log(response.data,"COLABORADORES");
      setCompany(response.data);
   }).catch(
       error=>{
           setLoading(false)
           console.log(error);
       }
    )
    api.get('/collaborator/company/'+id).then(res=>{
      setCollaborators(res.data)
      setLoading(false)
  }).catch(err => {
    console.log("Houve um erro ao buscar colaboradores")
    setLoading(false);})
    
},[])

let nameRouteCreateCollaborator = "/createCollaborator/" + id

const handleCollaboratorInformation= (id)=>{
  let nameRouteCollaboratorInformations= ('/collaboratorInformations/' + id);
   setRouteCompanyInformation(nameRouteCollaboratorInformations);
}






  return (
  <div> 
   <a href={nameRouteCreateCollaborator}>
          <ButtonCreateCompany/>
    </a> 
  {loading ? (<div>Carregando</div>):(
    <div>
      {company ? (
        <div ClassName="companyInformations">
            <h1>{company.name}</h1>
            <h3>CNPJ:{company.cnpj}</h3>
            <h3>Address:{company.address}</h3>
            <h3>Telefone:{company.telephone}</h3>
            <h3>E-mail:{company.email}</h3>
            <h3>ID:{company._id}</h3>
            <hr></hr>
            <h1>Colaboradores:</h1>
              <ol>
                {collaborators.map(collaborator=>{
                  return(
                    <li onClick={()=>{handleCollaboratorInformation(collaborator._id)}}>
                      <a href={nameRouteCollaboratorInformations}>
                          {collaborator.name}
                      </a>
                    </li>
                    )
                })
                }
              
              </ol>
        </div>
      ) : (<div></div>)}
    </div> 
  )}
  
  </div>
  )


}

export default Page;