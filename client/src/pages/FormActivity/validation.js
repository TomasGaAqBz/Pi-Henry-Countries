//Expresión regular para validar la dificultad entre 1 y 5.
const regexDiff = /^[1-5]$/;

function validate(formData) {
    // Arreglo para almacenar mensajes de error
    var errors = [];

    // Verificar si la actividad ya está duplicada en el país seleccionado
    if (formData.duplicatedActivity) {
        // Mostrar una alerta con el mensaje de duplicación
        alert(`${formData.name} is already added to ${formData.country}`);
    }

    // Verificar si el campo 'name' está vacío
    if (!formData.name) errors.name = 'Please enter an activity name';

    // Verificar si la dificultad no coincide con el formato deseado
    if (!regexDiff.test(formData.difficulty)) {
        errors.difficulty = 'Please select a difficulty between 1 and 5';
    }

    // Verificar si el campo 'difficulty' está vacío
    if (!formData.difficulty) errors.difficulty = 'Please select a difficulty level';

    // Verificar si el campo 'duration' está vacío
    if (!formData.duration) errors.duration = 'Please enter the duration of the activity';

    // Verificar si el campo 'season' está vacío
    if (!formData.season) errors.season = 'Please select season';

    // Verificar si la lista de países está vacía
    if (formData.countries.length === 0) {
        errors.countries = 'You must select at least one country';
    }

    // Devolver el objeto que contiene mensajes de error
    return errors;
}

// Exportar la función de validación
export default validate;