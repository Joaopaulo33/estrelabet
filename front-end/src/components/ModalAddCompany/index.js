
export function ModalAddCompany(){

    function handleCreateCompany(){
        const newCompany = {
            
        }
    } 
    return(
        <div className="container">
            <div className="card" >
                <div className="card-body">
                    <h4>Nova empresa:</h4>
                    <form action="/company/createCompany" method="POST">

                        <label for="name">Nome</label>
                        <input type="text" name="name" class="form-control"/>

                        <label for="cnpj">CNPJ:</label>
                        <input type="text" name="cnpj" class="form-control"/>

                        <label for="email">E-mail:</label>
                        <input type="email" name="email" class="form-control"/>
                        
                        <label for="telephone">Telefone:</label>
                        <input type="text" name="telephone" class="form-control"></input>

                        <label for="address">Endereço:</label>
                        <input type="text" name="address" class="form-control"></input>

                        <button class="btn btn-success mt-2" type="submit" >Adcionar empresa</button>

                    </form>
            </div>
        </div>
  </div>
    )
}