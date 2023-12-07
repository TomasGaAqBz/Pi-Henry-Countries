import stylePagina from './paginated.module.css'
const Paginated = ({ handleChangePage, totalOfPages, actualPage }) => {
    return (
        <div className={ stylePagina.container}>
            {/* Mapea sobre el número total de páginas para mostrar botones de paginación */}
            {Array.from({ length: totalOfPages }).map((_, index) => (
                <button
                className={ stylePagina.button}
                    key={index + 1}
                    onClick={() => handleChangePage(index + 1)}
                    // Marca la página actual con un estilo diferente
                    style={{ backgroundColor: actualPage === index + 1 ? '#15EAA5' : '#0FA66E' }}
                >
                    {index + 1}
                </button>
            ))}
        </div>
    );
};

export default Paginated;
