    import { useEffect } from "react";
    import "./formActivity.module.css"; // Estilo no utilizado actualmente, revisa si se está usando correctamente
    import { getCountryInfo, getActivities } from "../../redux/actions";
    import axios from "axios"; // Importar axios para realizar solicitudes HTTP
    import { useSelector, useDispatch } from "react-redux"; // Importar hooks de Redux
    import { useState } from "react"; // Importar hook de estado local
    import validate from "./validation.js"; // Importar una función de validación

    const FormActivity = () => {
        // Opciones para la estación (season)
        const seasonsOptions = ["Spring", "Summer", "Autumn", "Winter"];
    
        // Obtener el estado del país del almacén de Redux
        const countrys = useSelector((state) => state.allcountrys);
        const dispatch = useDispatch();
    
        // Ordenar los países alfabéticamente
        const sortedCountrys = [...countrys].sort((a, b) => {
            if (a.name > b.name) return 1;
            if (b.name > a.name) return -1;
            return 0;
        });
    
        // Efecto para cargar la información del país si no está disponible
        useEffect(() => {
            if (Array.isArray(countrys) && countrys.length === 0) {
                dispatch(getCountryInfo());
            }
        }, [dispatch, countrys]);
    
        // Estado local para almacenar los datos del formulario
        const [formData, setFormData] = useState({
            name: "",
            difficulty: "",
            duration: "",
            season: "",
            countries: [],
        });
    
        // Estado local para manejar errores de validación del formulario
        const [errors, setErrors] = useState({
            name: "",
            difficulty: "",
            duration: "",
            season: "",
            countrys: "",
            duplicatedActivity: "",
        });

    // Manejar cambios en los campos de entrada del formulario
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        let newValue = value;

        // Convertir la dificultad a número
        if (name === 'difficulty') {
            newValue = parseInt(value, 10);
        }

        // Validar el campo actual y actualizar los errores
        setErrors(
            validate({
                ...formData,
                [name]: newValue,
            })
        );

        // Actualizar el campo en el estado
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: newValue,
        }));
    };

    // Manejar la selección de países
    const handleSelectedCountries = (e) => {
        const value = e.target.value;
        const property = e.target.name;

        // Validar si la actividad está duplicada en el país seleccionado
        let flag = false;
        countrys.forEach((country) => {
        if (country.id === value) {
            country.activities.forEach((activity) => {
            if (activity.name === formData.name) {
                flag = true;
                validate({
                ...formData,
                duplicatedActivity: flag,
                country: country.name,
                });
            }
            });
        }
        });

        // Si no hay duplicados, agregar el país a la lista
        if (!flag) {
        if (value === "") return;
        setFormData({
            ...formData,
            [property]: [...formData.countries, value],
        });

        // Validar la lista actualizada de países y actualizar los errores
        setErrors(
            validate({
            ...formData,
            [property]: [...formData.countries, value],
            })
        );
        } else {
        return;
        }
    };

    // Eliminar la selección de país
    const onDeleteSelection = (ctry) => {
        const deletedCountry = formData.countries.filter((country) => {
            return ctry !== country;
        });

        // Actualizar el estado con la lista de países actualizada
        setFormData({
            ...formData,
            countries: deletedCountry,
        });

        // Validar la lista actualizada de países y actualizar los errores
        setErrors(
            validate({
                ...formData,
                countries: deletedCountry,
            })
        );
    };

    // Manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Verificar si hay errores de validación
        if (Object.values(errors).some(error => error !== "")) {
            alert("Please fill out missing fields");
        } else {
        // Enviar una solicitud POST al servidor con los datos del formulario
        console.log(formData);

        // Enviar una solicitud POST al servidor con los datos del formulario
        await axios.post(`http://localhost:3001/activity`, JSON.stringify(formData), {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => alert(response.data))
            .catch((error) => {
                console.error('Error creating activity:', error);
                console.log('Error response data:', error.response.data);
            });

        // Actualizar la información de las actividades después de la creación
        dispatch(getActivities());
    }
};

    return (
        <div>
            <form action="" onSubmit={handleSubmit} >
                <div>
                    <p>Create Activity</p>
                    <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Treeking-Hiking-Rapel..."
                        value={formData.name}
                        onChange={handleInputChange}
                        name="name"
                    />
                    {errors.name && <p>{errors.name}</p>}
                    </div>
                    <div>
                        <label htmlFor="difficulty">Difficulty:</label>
                        <select
                            id="difficulty"
                            value={formData.difficulty}
                            onChange={handleInputChange}
                            name="difficulty"
                        >
                            <option value="">Select Difficulty</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        {errors.difficulty && <p>{errors.difficulty}</p>}
                    </div>
                    <div>
                    <label htmlFor="duration">Duration (hh:mm):</label>
                    <input
                        type="time"
                        id="duration"
                        name="duration"
                        value={formData.duration}
                        onChange={handleInputChange}
                    />
                    {errors.duration ? <p>{errors.duration}</p> : null}
                    </div>
                    <div>
                    <label>Season:</label>
                    {seasonsOptions.map((season) => (
                        <div key={season}>
                        <input
                            type="radio"
                            id={season}
                            name="season"
                            value={season}
                            checked={formData.season === season}
                            onChange={handleInputChange}
                        />
                        <label htmlFor={season}>{season}</label>
                        </div>
                    ))}
                    {errors.season && <p>{errors.season}</p>}
                    </div>
                    <div>
                    <label>Add this activity to:</label>
                    <select
                        name="countries"
                        id="country"
                        onChange={handleSelectedCountries}
                    >
                        <option value="">Select country/ies</option>
                        {sortedCountrys.map((country, index) => (
                        <option key={index} value={country.id}>
                            {country.name}
                        </option>
                        ))}
                    </select>
                    {errors.countries && <p>{errors.countries}</p>}

                    
                    </div>
                    <div>
                    {formData.countries.map((country, index) => (
                        <div key={index}>
                        {country}
                        <button
                            onChange={handleSelectedCountries}
                            onClick={() => onDeleteSelection(country)}
                        > x</button>                            
                        </div>
                    ))}
                    </div>
                    <button type="submit">
                    Submit
                    </button>
                </div>
            </form>
        </div>
    );
    };

export default FormActivity;
