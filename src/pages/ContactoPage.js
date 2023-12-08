import React, { useState, useEffect } from 'react';
import {
  StyledTable,
  StyledTh,
  StyledTd,
  StyledButton,
  StyledInput,
  StyledForm,
  StyledH2,
} from '../elementos/ContactoListStyles';
import Header from '../componentes/Header';

const ContactoList = () => {
  const [contactos, setContactos] = useState([]);
  const [nuevoContacto, setNuevoContacto] = useState({
    id: null,
    nombre: '',
    telefono: '',
    correo: '',
  });

  //carga inicial de datos
  useEffect(() => {
    const datosIniciales = [
      { id: 1, nombre: 'Juan Pérez', telefono: '51968527', correo: 'juan@example.com' },
      { id: 2, nombre: 'María González', telefono: '51852736', correo: 'maria@example.com' },
    ];
    setContactos(datosIniciales);
  }, []);

  const agregarContacto = () => {
    //se agregar un contacto con ID único
    const nuevoContactoConId = {
      ...nuevoContacto,
      id: contactos.length > 0 ? contactos[contactos.length - 1].id + 1 : 1,
    };
    setContactos([...contactos, nuevoContactoConId]);
    //liimpia el formulario después de agregar un contacto
    setNuevoContacto({
      id: null,
      nombre: '',
      telefono: '',
      correo: '',
    });
  };

  const actualizarContacto = () => {
    //actualizar un contacto
    setContactos(contactos.map(contacto => (contacto.id === nuevoContacto.id ? { ...contacto, ...nuevoContacto } : contacto)));
    //limpia el formulario después de actualizar un contacto
    setNuevoContacto({
      id: null,
      nombre: '',
      telefono: '',
      correo: '',
    });
  };

  const eliminarContacto = id => {
    //eliminar contacto
    setContactos(contactos.filter(contacto => contacto.id !== id));
  };

  const editarContacto = contacto => {
    //pone la información del contacto en el formulario para editar
    setNuevoContacto(contacto);
  };

  return (
    <div>
      <Header />
      <StyledH2>Listado de Contactos</StyledH2>
      <StyledTable>
        <thead>
          <tr>
            <StyledTh>ID</StyledTh>
            <StyledTh>Nombre</StyledTh>
            <StyledTh>Teléfono</StyledTh>
            <StyledTh>Correo</StyledTh>
            <StyledTh>Acciones</StyledTh>
          </tr>
        </thead>
        <tbody>
          {contactos.map(contacto => (
            <tr key={contacto.id}>
              <StyledTd>{contacto.id}</StyledTd>
              <StyledTd>{contacto.nombre}</StyledTd>
              <StyledTd>{contacto.telefono}</StyledTd>
              <StyledTd>{contacto.correo}</StyledTd>
              <StyledTd>
                <StyledButton onClick={() => editarContacto(contacto)}>Editar</StyledButton>
                <StyledButton onClick={() => eliminarContacto(contacto.id)}>Eliminar</StyledButton>
              </StyledTd>
            </tr>
          ))}
        </tbody>
      </StyledTable>
      <StyledForm>
        <h3>{nuevoContacto.id ? 'Editar Contacto' : 'Agregar Contacto'}</h3>
        <StyledInput
          type="text"
          placeholder="Nombre"
          value={nuevoContacto.nombre}
          onChange={e => setNuevoContacto({ ...nuevoContacto, nombre: e.target.value })}
        />
        <StyledInput
          type="text"
          placeholder="Teléfono"
          value={nuevoContacto.telefono}
          onChange={e => setNuevoContacto({ ...nuevoContacto, telefono: e.target.value })}
        />
        <StyledInput
          type="text"
          placeholder="Correo"
          value={nuevoContacto.correo}
          onChange={e => setNuevoContacto({ ...nuevoContacto, correo: e.target.value })}
        />
        <StyledButton onClick={nuevoContacto.id ? actualizarContacto : agregarContacto}>
          {nuevoContacto.id ? 'Actualizar' : 'Agregar'}
        </StyledButton>
      </StyledForm>
    </div>
  );
};

export default ContactoList;

