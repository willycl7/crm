import React, { useState, useEffect } from 'react';
import {
  StyledTable,
  StyledTh,
  StyledTd,
  StyledButton,
  StyledInput,
  StyledForm,
  StyledH2
} from '../elementos/ClienteListStyles.js';
import Header from '../componentes/Header';

const ProyectoList = () => {
  const [proyectos, setProyectos] = useState([]);
  const [nuevoProyecto, setNuevoProyecto] = useState({
    id: null,
    nombre: '',
    descripcion: '',
  });

  //carga inicial de datos
  useEffect(() => {
    const datosIniciales = [
      { id: 1, nombre: 'CRM', descripcion: 'Descripción del Proyecto CRM' },
      { id: 2, nombre: 'Proyecto NPHS', descripcion: 'Descripción del Proyecto NPHS' },
    ];
    setProyectos(datosIniciales);
  }, []);

  const agregarProyecto = () => {
    //agregar un proyecto con ID único
    const nuevoProyectoConId = {
      ...nuevoProyecto,
      id: proyectos.length > 0 ? proyectos[proyectos.length - 1].id + 1 : 1,
    };
    setProyectos([...proyectos, nuevoProyectoConId]);
    //limpia el formulario después de agregar un proyecto
    setNuevoProyecto({
      id: null,
      nombre: '',
      descripcion: '',
    });
  };

  const actualizarProyecto = () => {
    //actualizar un proyecto
    setProyectos(proyectos.map(proyecto => (proyecto.id === nuevoProyecto.id ? { ...proyecto, ...nuevoProyecto } : proyecto)));
    //limpia el formulario después de actualizar el proyecto
    setNuevoProyecto({
      id: null,
      nombre: '',
      descripcion: '',
    });
  };

  const eliminarProyecto = id => {
    //eliminar un proyecto
    setProyectos(proyectos.filter(proyecto => proyecto.id !== id));
  };

  const editarProyecto = proyecto => {
    //pone la información de un proyecto en el formulario para editar
    setNuevoProyecto(proyecto);
  };

  return (
    <div>
      <Header />
      <StyledH2>Listado de Proyectos</StyledH2>
      <StyledTable>
        <thead>
          <tr>
            <StyledTh>ID</StyledTh>
            <StyledTh>Nombre del Proyecto</StyledTh>
            <StyledTh>Descripción</StyledTh>
            <StyledTh>Acciones</StyledTh>
          </tr>
        </thead>
        <tbody>
          {proyectos.map(proyecto => (
            <tr key={proyecto.id}>
              <StyledTd>{proyecto.id}</StyledTd>
              <StyledTd>{proyecto.nombre}</StyledTd>
              <StyledTd>{proyecto.descripcion}</StyledTd>
              <StyledTd>
                <StyledButton onClick={() => editarProyecto(proyecto)}>Editar</StyledButton>
                <StyledButton onClick={() => eliminarProyecto(proyecto.id)}>Eliminar</StyledButton>
              </StyledTd>
            </tr>
          ))}
        </tbody>
      </StyledTable>
      <StyledForm>
        <h3>{nuevoProyecto.id ? 'Editar Proyecto' : 'Agregar Proyecto'}</h3>
        <StyledInput
          type="text"
          placeholder="Nombre del Proyecto"
          value={nuevoProyecto.nombre}
          onChange={e => setNuevoProyecto({ ...nuevoProyecto, nombre: e.target.value })}
        />
        <StyledInput
          type="text"
          placeholder="Descripción"
          value={nuevoProyecto.descripcion}
          onChange={e => setNuevoProyecto({ ...nuevoProyecto, descripcion: e.target.value })}
        />
        <StyledButton onClick={nuevoProyecto.id ? actualizarProyecto : agregarProyecto}>
          {nuevoProyecto.id ? 'Actualizar' : 'Agregar'}
        </StyledButton>
      </StyledForm>
    </div>
  );
};

export default ProyectoList;
