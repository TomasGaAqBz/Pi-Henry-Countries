


const Paginated = ({handleChangePage,totalOfPages,actualPage}) =>{

    return(
        <div>
            {Array.from({length: totalOfPages}).map((_,index) =>(
                <button onClick={()=> handleChangePage(index+1)}>{index + 1}</button>
            ))}
        </div>
    )
}

export default Paginated