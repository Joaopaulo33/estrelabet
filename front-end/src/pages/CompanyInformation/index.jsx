import { useParams } from 'react-router-dom';
import { api } from '../../services/api';
import{useEffect, useState} from 'react'
import {ButtonCreateCompany} from '../../components/ButtonCreateCollaborator'
import styles from './styles.module.scss'




const Page = ()=>{
  const [loading,setLoading]= useState(true)
  const [company,setCompany]= useState(undefined)
  const[collaborators,setCollaborators]= useState([]);
  const [nameRouteCollaboratorInformations,  setRouteCompanyInformation ]= useState("")


const {id} = useParams();
  useEffect(async() => {   
    await api.get('/company/'+id).then(response => {
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
    <div className={styles.containerContent}>
      {company ? (
        <div>
            <h1>{company.name}</h1>
            <h5><strong>CNPJ:</strong>{company.cnpj}</h5>
            <h5><strong>Address:</strong>{company.address}</h5>
            <h5><strong>Telefone:</strong>{company.telephone}</h5>
            <h5><strong>E-mail:</strong>{company.email}</h5>
            <h5><strong>ID:</strong>{company._id}</h5>
            <hr></hr>
            <h5>Colaboradores:</h5>
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