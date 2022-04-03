import styles from './styles.module.scss'
import{api} from '../../services/api.js'
import { useEffect } from 'react';

export function Summary(){

    useEffect(() => {
        console.log("ola");
        api.get('/company/').then(response => {  
          console.log(response.data,"HEEEEEeeessdeeedeEEELOOOOO");
        })
    },[])


    return(
      
            <div className={styles.Container}>
                <h1>Empresas Stars </h1>
                {/* 🌟 */}
                <div class={styles.listCompanies}>
                    <ol>
                        <li>
                            <h3>Estrela bet</h3>
                        </li>
                    </ol>   
                </div>
                
            </div>
    )
}