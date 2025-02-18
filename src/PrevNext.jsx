const PrevNext = () => {
    return(
        <div className="prevNext row">
            <Prev />
            <Next />
        </div>
    )
}

const Prev = () => {
    return(
        <div className="prev">
            <p className="prevNext_txt">PREV POST</p>
            <h4 className="prevNext_title">Tips on Minimalist</h4>
        </div>
    )
    
}

const Next = () => {
    return(
        <div className="next">
            <p className="prevNext_txt">Next Post</p>
            <h4 className="prevNext_title">Less is More</h4>
        </div>
    )
   
}

export default PrevNext