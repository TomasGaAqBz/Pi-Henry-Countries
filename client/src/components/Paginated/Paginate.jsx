import stylePagina from './paginated.module.css';

const Paginated = ({ handleChangePage, totalOfPages, actualPage }) => {
    const maxButtonsToShow = 10;
    const buttons = [];

    // Calcula el rango de botones a mostrar
    const startButton = Math.max(1, actualPage - 5);
    const endButton = Math.min(totalOfPages, startButton + maxButtonsToShow - 1);

    // Agrega botón de página anterior si no es la primera página
    if (actualPage > 1) {
        buttons.push(
            <button
                key="prev"
                className={stylePagina.button}
                onClick={() => handleChangePage(actualPage - 1)}
            >
                &laquo; Prev
            </button>
        );
    }

    // Agrega botones numerados
    for (let i = startButton; i <= endButton; i++) {
        buttons.push(
            <button
                className={stylePagina.button}
                key={i}
                onClick={() => handleChangePage(i)}
                disabled={actualPage === i}
                style={{
                    backgroundColor: actualPage === i ? '#15EAA5' : '#0FA66E'
                }}
            >
                {i}
            </button>
        );
    }

    // Agrega botón de página siguiente si no es la última página
    if (actualPage < totalOfPages) {
        buttons.push(
            <button
                key="next"
                className={stylePagina.button}
                onClick={() => handleChangePage(actualPage + 1)}
            >
                Next &raquo;
            </button>
        );
    }

    return <div className={stylePagina.container}>{buttons}</div>;
};

export default Paginated;