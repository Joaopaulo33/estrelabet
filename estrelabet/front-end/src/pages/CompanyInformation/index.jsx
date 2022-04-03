import { useParams } from 'react-router-dom';
import { api } from '../../services/api';
import{useEffect, useState} from 'react'



const Page = ()=>{
  const [loading,setLoading]= useState(true)
  const [company,setCompany]= useState(undefined)
  const[collaborators,setCollaborators]= useState([]);

const {id} = useParams();
  useEffect(async() => {   
    await api.get('/company/'+id).then(response => {
      console.log(response.data);
      setCompany(response.data)

   
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

  return (
  <div>  
  {loading ? (<div>Carregando</div>):(
    <div>
      {company ? (
        <div>
        <h1>{company.name}</h1>
          <ol>
          
            {collaborators.map(collaborator=>{
                return(
                  <li>
                    {collaborator.name}
                  </li>
                )
            }

          )
              
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