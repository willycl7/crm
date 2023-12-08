import React, { useState, useEffect } from 'react';
import {
  StyledTable,
  StyledTh,
  StyledTd,
  StyledButton,
  StyledInput,
  StyledForm,
  StyledH2
} from '../elementos/ReunionListStyles';
import Header from '../componentes/Header';

const ReunionList = () => {
  const [reuniones, setReuniones] = useState([]);
  const [nuevaReunion, setNuevaReunion] = useState({
    id: null,
    fecha: '',
    hora: '',
    lugar: '',
    descripcion: '',
  });

  //carga inicial de datos
  useEffect(() => {
    const datosIniciales = [
      { id: 1, fecha: '2023-01-01', hora: '10:00 AM', lugar: 'Sala de Conferencias', descripcion: 'Reunión de equipo' },
      { id: 2, fecha: '2023-01-05', hora: '02:30 PM', lugar: 'Oficina Principal', descripcion: 'Presentación de proyecto' },
    ];
    setReuniones(datosIniciales);
  }, []);

  const agregarReunion = () => {
    //agregar una reunión con ID único
    const nuevaReunionConId = {
      ...nuevaReunion,
      id: reuniones.length > 0 ? reuniones[reuniones.length - 1].id + 1 : 1,
    };
    setReuniones([...reuniones, nuevaReunionConId]);
    //limpia el formulario después de agregar la reunión
    setNuevaReunion({
      id: null,
      fecha: '',
      hora: '',
      lugar: '',
      descripcion: '',
    });
  };

  const actualizarReunion = () => {
    //actualizar una reunión
    setReuniones(reuniones.map(reunion => (reunion.id === nuevaReunion.id ? { ...reunion, ...nuevaReunion } : reunion)));
    //limpia el formulario después de actualizar la reunión
    setNuevaReunion({
      id: null,
      fecha: '',
      hora: '',
      lugar: '',
      descripcion: '',
    });
  };

  const eliminarReunion = id => {
    //eliminar una reunión
    setReuniones(reuniones.filter(reunion => reunion.id !== id));
  };

  const editarReunion = reunion => {
    //pone la información de la reunión en el formulario para editar
    setNuevaReunion(reunion);
  };

  return (
    <div>
      <Header/>
      <StyledH2>Listado de Reuniones</StyledH2>
      <StyledTable>
        <thead>
          <tr>
            <StyledTh>ID</StyledTh>
            <StyledTh>Fecha</StyledTh>
            <StyledTh>Hora</StyledTh>
            <StyledTh>Lugar</StyledTh>
            <StyledTh>Descripción</StyledTh>
            <StyledTh>Acciones</StyledTh>
          </tr>
        </thead>
        <tbody>
          {reuniones.map(reunion => (
            <tr key={reunion.id}>
              <StyledTd>{reunion.id}</StyledTd>
              <StyledTd>{reunion.fecha}</StyledTd>
              <StyledTd>{reunion.hora}</StyledTd>
              <StyledTd>{reunion.lugar}</StyledTd>
              <StyledTd>{reunion.descripcion}</StyledTd>
              <StyledTd>
                <StyledButton onClick={() => editarReunion(reunion)}>Editar</StyledButton>
                <StyledButton onClick={() => eliminarReunion(reunion.id)}>Eliminar</StyledButton>
              </StyledTd>
            </tr>
          ))}
        </tbody>
      </StyledTable>
      <StyledForm>
        <h3>{nuevaReunion.id ? 'Editar Reunión' : 'Agregar Reunión'}</h3>
        <StyledInput
          type="date"
          placeholder="Fecha"
          value={nuevaReunion.fecha}
          onChange={e => setNuevaReunion({ ...nuevaReunion, fecha: e.target.value })}
        />
        <StyledInput
          type="time"
          placeholder="Hora"
          value={nuevaReunion.hora}
          onChange={e => setNuevaReunion({ ...nuevaReunion, hora: e.target.value })}
        />
        <StyledInput
          type="text"
          placeholder="Lugar"
          value={nuevaReunion.lugar}
          onChange={e => setNuevaReunion({ ...nuevaReunion, lugar: e.target.value })}
        />
        <StyledInput
          type="text"
          placeholder="Descripción"
          value={nuevaReunion.descripcion}
          onChange={e => setNuevaReunion({ ...nuevaReunion, descripcion: e.target.value })}
        />
        <StyledButton onClick={nuevaReunion.id ? actualizarReunion : agregarReunion}>
          {nuevaReunion.id ? 'Actualizar' : 'Agregar'}
        </StyledButton>
      </StyledForm>
    </div>
  );
};

export default ReunionList;
