import React, { useEffect, useState } from 'react';
import Rodape from '../../../components/rodape';
import Menu from '../../../components/menu';
import Titulo from '../../../components/titulo';
import { Container, table } from 'react-bootstrap/lib/Tab';
import {url} from '../../../pages/utils/constants'
import React, {useState} from 'react';
import Rodape from '../../../components/rodape';

const CrudCategorias = () => {
    const [id , setId] = useState(0);
    const [nome, setNome] = useState('');
    const [urlImagem, setUrlImage] = useState('');
    const [categorias, setCategorias] = useState([]);

    useEffect(() =>{
        listar();
    },[]);

    const listar = () =>{
        fetch(url + '/categorias')
            .then(response => response.json())
            .then(data => {
                setCategorias(data.data)
                console.log(data.data);
        })
        .catch(err => console.error(err));
    }

    return(
        <div>
            <Menu />
                <Container>
                    <Titulo titulo="Categorias" chamada="Gerencia as suas categorias" />

                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Imagem</th>
                                <th>Nome</th>
                                <th>Açoes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                categorias.map((item, index) => {
                                    return(
                                        <tr>
                                        <td><img src={item.urlImagem} style={{ width : '120px'}}/></td>
                                        <td>{item.nome}</td>
                                    </tr>
                                    )
                                })
                            }
                        </tbody>
                        </Table>

                </Container>
            <Rodape />
        </div>
    )

}

export default CrudCategorias;