const InterestForm = () => {
    return(
        <>
           <FormHeader />
            <form action="" className="interest_calc_form enquiry_form ">
                <div className="input_box">
                    <label htmlFor="sale_price"></label>
                    <input type="number" id="sale_price" placeholder="$" />
                </div>
                <div className="input_box">
                    <label htmlFor="deposit"></label>
                    <input type="number" id="deposit" placeholder="$    20" />
                </div>
                <div className="input_box">
                    <label htmlFor="loan_term"></label>
                    <input type="number" id="loan_term" placeholder="Loan Term(Year)" />
                </div>
                <div className="input_box">
                    <label htmlFor="percent"></label>
                    <input type="number" id="percent" placeholder="%    0" />
                </div>
                <input type="submit" className="int_submit_btn enq_submit_btn" value={'Calculate'} />
            </form>
        </>
    )
    
}

const FormHeader = () => {
    return(
        <div className="calc_header right_col__col_header">
            <h3 className="calc">Calculate</h3>
            <p className="calc_desc rating">View your interest rate</p>
        </div>
    )
}

export default InterestForm