import styles from './styles.module.scss'
import{api} from '../../services/api.js'
import { useEffect, useState } from 'react';
// import {useHistory} from 'react-router-dom'


export function Summary(){
    const [loading,setLoading]= useState(true)
    const [companies,setCompanies]= useState(undefined)
    const [routeCompanyInformation,setRouteCompanyInformation]= useState("")

    useEffect(() => {   

         api.get('/company/').then(response => {
            console.log(response.data);
            setCompanies(response.data)
            setLoading(false)
        }).catch(
            error=>{
                setLoading(false)
            }
         )      
    },[])

    // const history = useHistory();
    
    const handleCompanyInformation= (id)=>{
       let route= ('/companyInformation/' + id);
        setRouteCompanyInformation(route);
    }
  
   
    return(
       
            <div className={styles.Container}> 
                 <h1>Empresas Stars </h1>
            {loading ? (<div>Carregando</div>) : (<div>
                {companies ? (  
                    <div className={styles.listCompanies}>
                        <ol>
                            {companies.map(company=>{
                                return(
                            
                                    <li onClick={()=>{handleCompanyInformation(company._id)}}>
                                        <a href={routeCompanyInformation}>
                                                <h3>{company.name}</h3>

                                        </a>
                                    </li>
                                )
                            })}
                        
                        </ol>   
                    </div>) : (<div>Nenhuma empresa registrada</div>)}
            </div>)}

           
             
                 
            </div>
         
    )
 }
