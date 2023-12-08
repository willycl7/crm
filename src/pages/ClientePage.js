import React, { useState, useEffect } from 'react';
import {
  StyledTable,
  StyledTh,
  StyledTd,
  StyledButton,
  StyledInput,
  StyledForm,
  StyledH2,
} from '../elementos/ClienteListStyles.js';
import Header from '../componentes/Header';

const ClienteList = () => {
  const [clientes, setClientes] = useState([]);
  const [nuevoCliente, setNuevoCliente] = useState({
    id: null,
    nombre_cliente: '',
    nombre_empresa: '',
    telefono: '',
    correo: '',
    direccion: '',
    industria: '',
  });

  //carga inicial de datos
  useEffect(() => {
    const datosIniciales = [
      { id: 1, nombre_cliente: 'Willians', nombre_empresa: 'Camalada', telefono: '51968527', correo: 'willians@example.com', direccion: '123 Calle Principal', industria: 'Tecnología' },
      { id: 2, nombre_cliente: 'Guadalupe', nombre_empresa: 'NPHS', telefono: '31336468', correo: 'guadalupe@example.com', direccion: '456 Calle Secundaria', industria: 'Salud' },
    ];
    setClientes(datosIniciales);
  }, []);

  const agregarCliente = () => {
    //se agregar un cliente con ID único
    const nuevoClienteConId = {
      ...nuevoCliente,
      id: clientes.length > 0 ? clientes[clientes.length - 1].id + 1 : 1,
    };
    setClientes([...clientes, nuevoClienteConId]);
    //limpia el formulario después de agregar un cliente
    setNuevoCliente({
      id: null,
      nombre_cliente: '',
      nombre_empresa: '',
      telefono: '',
      correo: '',
      direccion: '',
      industria: '',
    });
  };

  const actualizarCliente = () => {
    //actualizar un cliente
    setClientes(clientes.map(cliente => (cliente.id === nuevoCliente.id ? { ...cliente, ...nuevoCliente } : cliente)));
    //Limpia el formulario después de actualizar un cliente
    setNuevoCliente({
      id: null,
      nombre_cliente: '',
      nombre_empresa: '',
      telefono: '',
      correo: '',
      direccion: '',
      industria: '',
    });
  };

  const eliminarCliente = id => {
    //eliminar cliente
    setClientes(clientes.filter(cliente => cliente.id !== id));
  };

  const editarCliente = cliente => {
    //pone la información del cliente en el formulario para editar
    setNuevoCliente(cliente);
  };

  return (

    <div>
      <Header />
      <StyledH2>Listado de Clientes</StyledH2>
      <StyledTable>
        <thead>
          <tr>
            <StyledTh>ID</StyledTh>
            <StyledTh>Nombre del Cliente</StyledTh>
            <StyledTh>Nombre de la Empresa</StyledTh>
            <StyledTh>Teléfono</StyledTh>
            <StyledTh>Correo</StyledTh>
            <StyledTh>Dirección</StyledTh>
            <StyledTh>Industria</StyledTh>
            <StyledTh>Acciones</StyledTh>
          </tr>
        </thead>
        <tbody>
          {clientes.map(cliente => (
            <tr key={cliente.id}>
              <StyledTd>{cliente.id}</StyledTd>
              <StyledTd>{cliente.nombre_cliente}</StyledTd>
              <StyledTd>{cliente.nombre_empresa}</StyledTd>
              <StyledTd>{cliente.telefono}</StyledTd>
              <StyledTd>{cliente.correo}</StyledTd>
              <StyledTd>{cliente.direccion}</StyledTd>
              <StyledTd>{cliente.industria}</StyledTd>
              <StyledTd>
                <StyledButton onClick={() => editarCliente(cliente)}>Editar</StyledButton>
                <StyledButton onClick={() => eliminarCliente(cliente.id)}>Eliminar</StyledButton>
              </StyledTd>
            </tr>
          ))}
        </tbody>
      </StyledTable>
      <StyledForm>
        <h3>{nuevoCliente.id ? 'Editar Cliente' : 'Agregar Cliente'}</h3>
        <StyledInput
          type="text"
          placeholder="Nombre del Cliente"
          value={nuevoCliente.nombre_cliente}
          onChange={e => setNuevoCliente({ ...nuevoCliente, nombre_cliente: e.target.value })}
        />
        <StyledInput
          type="text"
          placeholder="Nombre de la Empresa"
          value={nuevoCliente.nombre_empresa}
          onChange={e => setNuevoCliente({ ...nuevoCliente, nombre_empresa: e.target.value })}
        />
        <StyledInput
          type="text"
          placeholder="Teléfono"
          value={nuevoCliente.telefono}
          onChange={e => setNuevoCliente({ ...nuevoCliente, telefono: e.target.value })}
        />
        <StyledInput
          type="text"
          placeholder="Correo"
          value={nuevoCliente.correo}
          onChange={e => setNuevoCliente({ ...nuevoCliente, correo: e.target.value })}
        />
        <StyledInput
          type="text"
          placeholder="Dirección"
          value={nuevoCliente.direccion}
          onChange={e => setNuevoCliente({ ...nuevoCliente, direccion: e.target.value })}
        />
        <StyledInput
          type="text"
          placeholder="Industria"
          value={nuevoCliente.industria}
          onChange={e => setNuevoCliente({ ...nuevoCliente, industria: e.target.value })}
        />
        <StyledButton onClick={nuevoCliente.id ? actualizarCliente : agregarCliente}>
          {nuevoCliente.id ? 'Actualizar' : 'Agregar'}
        </StyledButton>
      </StyledForm>
    </div>
  );
};

export default ClienteList;
