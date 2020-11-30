import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {Form, Container, Button} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import './index.css';

const Login = () =>{
    let history = useHistory();

    const [email, setEmail] = usaState('');
    conts [senha, setSenha] = useState('');

    const logar = (event) => {
        event.preventDefault();

        console.log('$(email) - $(senha)');

        const login = {
            email : email,
            senha : senha

        }

        fetch('http://localhost:5000/account/login',{
        method : 'POST',
        body : JSON.stringfy({ login }),
        header : {
            'content-type' : 'application/json'
        }
        })
        .then(response => {
            if(response.ok === true){
                return responde.json();
            }
            alert('Dados invalidos')
        })
        .then(data => {

            localStorage.setItem('token-nyous', data.token)

            let usuario = jwt_decode(data.token);

            if(usuario.role === 'Admin'){
                history.push('/admin/dashboard');
            }else{
                history.push('/eventos')
            }
                
            console.log(usuario);

            history.push("/eventos")
        })
        .catch(err => console.error(err))
    }

    return (
        // <Menu/>
        // <Container className='form-height'>

            <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={event => setEmail(event.target.value)}/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" alue={senha} onChange={event => setSenha(event.target.value)}/>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={event => logar(event)}>
                Submit
            </Button>
            </Form>
                        
        // {/* </Container> */}

    )

}

export default Login;