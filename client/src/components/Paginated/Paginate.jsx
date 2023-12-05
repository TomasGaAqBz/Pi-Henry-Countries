const Paginated = ({ handleChangePage, totalOfPages, actualPage }) => {
    return (
        <div>
            {/* Mapea sobre el número total de páginas para mostrar botones de paginación */}
            {Array.from({ length: totalOfPages }).map((_, index) => (
                <button
                    key={index + 1}
                    onClick={() => handleChangePage(index + 1)}
                    // Marca la página actual con un estilo diferente
                    style={{ fontWeight: actualPage === index + 1 ? 'bold' : 'normal' }}
                >
                    {index + 1}
                </button>
            ))}
        </div>
    );
};

export default Paginated;
