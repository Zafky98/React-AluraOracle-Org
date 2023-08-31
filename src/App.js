import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg/MiOrg';
import Equipo from './componentes/Equipos/Equipos';
import Footer from './componentes/Footer/Footer';

function App() {

    const [mostrarForm, cambiarMostrar] = useState(true);
    const [colaboradores, setColaboradores] = useState([{
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav: true
    },
    {
      id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav: false
    }]);

    const [equipos, setEquipos]=useState([
      {
        id: uuid(),
        titulo: "Programación",
        colorPrimario: "#57C278",
        colorSecundario: "#D9F7E9"
      },
      {
        id: uuid(),
        titulo: "Front End",
        colorPrimario: "#82CFFA",
        colorSecundario: "#E8F8FF"
      },
      {
        id: uuid(),
        titulo: "Data Science",
        colorPrimario: "#A6D157",
        colorSecundario: "#F0F8E2"
      },
      {
        id: uuid(),
        titulo: "Devops",
        colorPrimario: "#E06B69",
        colorSecundario: "#FDE7E8"
      },
      {
        id: uuid(),
        titulo: "UX y Diseño",
        colorPrimario: "#DB6EBF",
        colorSecundario: "#FAE9F5"
      },
      {
        id: uuid(),
        titulo: "Móvil",
        colorPrimario: "#FFBA05",
        colorSecundario: "#FFF5D9"
      },
      {
        id: uuid(),
        titulo: "Innovación y Gestión",
        colorPrimario: "#FF8A29",
        colorSecundario: "#FFEEDF"
      }
    ])

    const actualizarForm = () =>{
      cambiarMostrar(!mostrarForm)
    };

    const registrarColaborador = (colaborador) =>{
      setColaboradores([...colaboradores, colaborador])
    };

    const registrarNuevoEquipo = (nuevoEquipo) =>{
      setEquipos([...equipos,{...nuevoEquipo, id: uuid()}])
      
    };

    const eliminar = (id) =>{
        const eliminarColaborador = colaboradores.filter((colaboradores) => colaboradores.id != id)
        setColaboradores(eliminarColaborador)
    };

    const like = (id) =>{
        const darLike = colaboradores.map((colaborador) =>{
          if( colaborador.id ===  id){
            colaborador.fav = !colaborador.fav
          }
          return colaborador
        })

        setColaboradores(darLike)
    };

    const actualizarColor = (color, id) =>{
      const equiposActualizados = equipos.map((equipo) =>{
        if (equipo.id === id){
          equipo.colorPrimario = color
        }
        return equipo
      }) 

      setEquipos(equiposActualizados);
    }

  return (
    <div className="App">
      <Header />
      {/* { mostrarForm ? <Formulario /> : <></> }; */}
      {/* Forma alternativa --> condicion && componente,etc */}
      { mostrarForm && <Formulario equipos={equipos.map((equipo) => equipo.titulo) } registrarColaborador={registrarColaborador} registrarNuevoEquipo={registrarNuevoEquipo} /> }
      <MiOrg actualizarForm={actualizarForm} />;
      {
        equipos.map((equipo) => <Equipo 
        datos={equipo} 
        key={equipo.titulo} 
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)} 
        eliminar={eliminar}
        actualizarColor={actualizarColor}
        like={like}
        />)
      };
      <Footer />
    </div>
  );
}

export default App;
