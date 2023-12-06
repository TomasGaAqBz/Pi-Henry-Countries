// Importar React y otros módulos necesarios
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

// Importar estilos específicos para este componente
import detailStyle from "./detail.module.css";

// Definir el componente Detail
const Detail = () => {
    // Obtener el parámetro de la URL usando useParams
    const { id } = useParams();

    // Estado para almacenar los detalles del país
    const [detail, setDetail] = useState({});

    // Función para navegar de regreso a la página principal
    const navigate = useNavigate();
    const goHome = () => {
        navigate("/home");
    };

    // Efecto de lado para cargar los detalles del país al montar el componente
    useEffect(() => {
        // Verificar si hay un ID proporcionado
        if (id) {
            // Hacer una solicitud a la API para obtener los detalles del país
            axios
                .get(`http://localhost:3001/country/${id}`)
                .then(({ data }) => {
                    // Verificar si se obtuvo información válida y actualizar el estado
                    if (data && data.name) {
                        setDetail({
                            id: data.id,
                            name: data.name.toUpperCase(),
                            flagImage: data.flagImage || "",
                            continent: data.continent || "",
                            capital: data.capital || "",
                            subregion: data.subregion || "",
                            area: data.area || "",
                            population: data.population || "",
                            activities: data.Activities || [],
                        });
                    }
                })
                .catch((error) => {
                    // Manejar errores y lanzar un error si la solicitud falla
                    throw new Error({ Error: error.response.data });
                });
        }
    }, [id]);

    // Renderizar la interfaz de usuario con los detalles del país
    return (
        <div className={detailStyle.bigContainer}>
            <div className={detailStyle.container}>
                <div className={detailStyle.imgContainer}>
                    <img src={detail.flagImage} alt="" />
                    <h3>{detail.name}</h3>
                </div>
                <div>
                    {/* Mostrar detalles del país */}
                    <div className={detailStyle.infoList}>
                        <p className={detailStyle.itemList}>ID:</p>
                        <p className={detailStyle.itemValue}>{detail.id}</p>
                    </div>
                    <div className={detailStyle.infoList}>
                        <p className={detailStyle.itemList}>Continent:</p>
                        <p className={detailStyle.itemValue}>{detail.continent}</p>
                    </div>
                    {/* Otros detalles similares */}
                    {/* ... */}
                    <div>
                        <p>Activities</p>
                        {/* Mostrar las actividades asociadas al país */}
                        <p>
                            {detail.activities?.length !== 0
                                ? detail.activities?.map((activity) => {
                                        return detail.activities.length > 1
                                            ? activity.name + ", "
                                            : activity.name;
                                    })
                                : "No Existen Actividades"}
                        </p>
                    </div>
                </div>
            </div>
            {/* Botón para volver a la página principal */}
            <button onClick={goHome}>Back to Home</button>
        </div>
    );
};

// Exportar el componente Detail
export default Detail;