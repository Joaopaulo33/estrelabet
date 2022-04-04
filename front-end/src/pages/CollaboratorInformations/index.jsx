import { useParams } from 'react-router-dom';
import { api } from '../../services/api';
import{useEffect, useState} from 'react'
import styles from './styles.module.scss'

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
    <div className={styles.containerContent}> 
      {loading ? (<div>Carregando</div>):(
        <div>
          {collaborator ? (
            <div>
                <h1>{collaborator.name}</h1>
                <h5><strong>CPF:</strong>{collaborator.cpf}</h5>
                <h5><strong>Address:</strong>{collaborator.address}</h5>
                <h5><strong>Telefone:</strong>{collaborator.telephone}</h5>
                <h5><strong>E-mail:</strong>{collaborator.email}</h5>
                <h5><strong>ID:</strong>{collaborator._id}</h5>
                <h5><strong>ID empresa: </strong>{collaborator.companyId}</h5>
                <hr></hr>
            </div>
          ) : (<div></div>)}
        </div> 
      )}
    </div>
  )
}

export default Page;