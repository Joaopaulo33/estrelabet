import { useState } from 'react';
import { api } from '../../services/api';
import { Toast, ToastBody, ToastContainer, ToastHeader } from 'react-bootstrap';
import {useHistory} from 'react-router-dom'

function CreateInput(name, display) {
  const [value, setValue] = useState('');
  return { name, display, value, setValue };
}
export function ModalAddCompany() {
  const inputs = [
    CreateInput('name', 'Nome:'),
    CreateInput('cnpj', 'CNPJ:'),
    CreateInput('email', 'E-mail:'),
    CreateInput('telephone', 'Telefone:'),
    CreateInput('address', 'Endereço:'),
  ];
  const [show, setShow] = useState(false);
  const [background, setBackground] = useState('success');
  const [message, setMessage] = useState('');
  const toast = {
    message,
    setMessage,
    background,
    setBackground,
    show,
    setShow,
  };

  const[loading, setLoading] = useState(false);
  const history = useHistory();
  function handleCreateCompany(event) {
    event.preventDefault();
    
    if(!loading){
      setLoading(true);
      const newCompany = {};
      inputs.forEach((input) => (newCompany[input.name] = input.value));
      api
        .post('/company', newCompany)
        .then((response) => {
          toast.setMessage('Empresa salva com sucesso');
          toast.setBackground('success');
          toast.setShow(true);
          history.push('/');
        })
        .catch((error) => {
          setLoading(false);
          toast.setMessage('Não foi possível salvar empresa!');
          toast.setBackground('danger');
          toast.setShow(true);
        });  
        
    }
  
    
   }
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h4>Nova empresa:</h4>
          <form onSubmit={handleCreateCompany}>
            {inputs.map((input) => {
              return (
                <div>
                  <label htmlFor={input.name}>{input.display}</label>
                  <input
                    key={input.name}
                    type="text"
                    name={input.name}
                    onChange={(e) => input.setValue(e.target.value)}
                    className="form-control"
                  />
                </div>
              );
            })}

            <button className="btn btn-success mt-2" type="submit">
              Adcionar empresa
            </button>
          </form>
        </div>
      </div>
      <ToastContainer position="bottom-end">
        <Toast
          className="align-items-center text-white border-0"
          bg={toast.background}
          show={show}
          delay={1000}
          autohide
          p
        >
          <ToastBody className="position-relative">
            {toast.message}
            <button
              type="button"
              class="btn-close btn-close-white position-absolute top-50 end-0 translate-middle-y"
              onClick={() => toast.setShow(false)}
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </ToastBody>
        </Toast>
      </ToastContainer>
    </div>
  );
}
