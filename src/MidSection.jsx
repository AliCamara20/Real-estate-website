const MidSection = ({numOfBeds, numOfBath, sqft}) => {
    return(
        <div className="mid_section row_section">
            <p className="prop_info col_detail">
                <span className="b_d_s__icon">
                    <svg  xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style={{enableBackground:'new 0 0 512 512'}} xmlSpace="preserve" ><g>
                    <g xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <g>
                                <path d="M53.333,202.667h53.333c-3.285,0-6.379-1.515-8.405-4.096c-2.027-2.581-2.731-5.952-1.941-9.152l6.635-26.517     c3.563-14.272,16.341-24.235,31.04-24.235h68.672c17.643,0,32,14.357,32,32V192c0,5.888-4.779,10.667-10.667,10.667h64     c-5.888,0-10.667-4.779-10.667-10.667v-21.333c0-17.643,14.357-32,32-32h68.672c14.699,0,27.477,9.963,31.04,24.235l6.635,26.517     c0.811,3.179,0.085,6.571-1.941,9.152c-2.027,2.581-5.12,4.096-8.405,4.096h53.333c5.888,0,10.667-4.779,10.667-10.667v-64     c0-29.397-23.936-53.333-53.333-53.333H96c-29.397,0-53.333,23.936-53.333,53.333v64     C42.667,197.888,47.445,202.667,53.333,202.667z" fill="#a1abc9" data-original="#000000"  />
                                <path d="M458.667,224H53.333C23.936,224,0,247.936,0,277.333v149.333c0,5.888,4.779,10.667,10.667,10.667     s10.667-4.779,10.667-10.667v-32h469.333v32c0,5.888,4.779,10.667,10.667,10.667c5.888,0,10.667-4.779,10.667-10.667V277.333     C512,247.936,488.064,224,458.667,224z M490.667,373.333H21.333V352h469.333V373.333z" fill="#a1abc9" data-original="#000000"  />
                            </g>
                        </g>
                    </g>
                    <g xmlns="http://www.w3.org/2000/svg">
                    </g>
                    <g xmlns="http://www.w3.org/2000/svg">
                    </g>
                    <g xmlns="http://www.w3.org/2000/svg">
                    </g>
                    <g xmlns="http://www.w3.org/2000/svg">
                    </g>
                    <g xmlns="http://www.w3.org/2000/svg">
                    </g>
                    <g xmlns="http://www.w3.org/2000/svg">
                    </g>
                    <g xmlns="http://www.w3.org/2000/svg">
                    </g>
                    <g xmlns="http://www.w3.org/2000/svg">
                    </g>
                    <g xmlns="http://www.w3.org/2000/svg">
                    </g>
                    <g xmlns="http://www.w3.org/2000/svg">
                    </g>
                    <g xmlns="http://www.w3.org/2000/svg">
                    </g>
                    <g xmlns="http://www.w3.org/2000/svg">
                    </g>
                    <g xmlns="http://www.w3.org/2000/svg">
                    </g>
                    <g xmlns="http://www.w3.org/2000/svg">
                    </g>
                    <g xmlns="http://www.w3.org/2000/svg">
                    </g>
                    </g></svg>
                </span>
                <span className="num_of_beds">{numOfBeds} Beds</span>
            </p>
            
       
        
            <p className="prop_info col_detail">
                <span className="b_d_s__icon">
                    <svg  xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 512 512" style={{enableBackground:'new 0 0 512 512'}} xmlSpace="preserve"><g>
                    <g xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path d="M484.66,461.309l-8.06-19.028c-17.218,15.087-38.093,26.095-61.107,31.495l14.787,19.245    c5.965,7.762,15.371,12.396,25.162,12.396c10.672,0,20.561-5.312,26.455-14.208C487.789,482.311,488.823,471.134,484.66,461.309z" fill="#a1abc9" data-original="#000000" />
                        </g>
                    </g>
                    <g xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path d="M35.401,442.281l-8.06,19.028c-4.162,9.826-3.129,21.003,2.764,29.899c5.893,8.896,15.783,14.208,26.455,14.208    c9.79,0,19.195-4.634,25.163-12.397l14.786-19.244C73.494,468.376,52.618,457.368,35.401,442.281z" fill="#a1abc9" data-original="#000000" />
                        </g>
                    </g>
                    <g xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path d="M183.109,60.263h-1.639c-4.049-30.259-30.015-53.679-61.364-53.679h-13.814c-34.148,0-61.931,27.782-61.931,61.931    v129.717h30.073V68.514c0-17.566,14.292-31.858,31.858-31.858h13.814c14.713,0,27.122,10.028,30.768,23.606h-2.429    c-23.922,0-43.384,19.462-43.384,43.384v25.366c0,8.042,6.319,14.59,14.26,14.997c0.259,0.013,0.514,0.039,0.776,0.039h91.359    c8.304,0,15.036-6.732,15.036-15.036v-25.365C226.493,79.725,207.031,60.263,183.109,60.263z" fill="#a1abc9" data-original="#000000" style={{}}/>
                        </g>
                    </g>
                    <g xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path d="M16.881,316.254v19.082c0,61.821,50.294,112.116,112.115,112.116h254.009c61.82,0,112.115-50.294,112.115-112.116v-19.082    H16.881z" fill="#a1abc9" data-original="#000000" />
                        </g>
                    </g>
                    <g xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path d="M490.37,242.697H21.63C9.703,242.698,0,252.402,0,264.329s9.703,21.63,21.63,21.63h468.74    c11.927,0,21.63-9.703,21.63-21.63S502.297,242.697,490.37,242.697z" fill="#a1abc9" data-original="#000000" />
                        </g>
                    </g>
                    <g xmlns="http://www.w3.org/2000/svg">
                    </g>
                    <g xmlns="http://www.w3.org/2000/svg">
                    </g>
                    <g xmlns="http://www.w3.org/2000/svg">
                    </g>
                    <g xmlns="http://www.w3.org/2000/svg">
                    </g>
                    <g xmlns="http://www.w3.org/2000/svg">
                    </g>
                    <g xmlns="http://www.w3.org/2000/svg">
                    </g>
                    <g xmlns="http://www.w3.org/2000/svg">
                    </g>
                    <g xmlns="http://www.w3.org/2000/svg">
                    </g>
                    <g xmlns="http://www.w3.org/2000/svg">
                    </g>
                    <g xmlns="http://www.w3.org/2000/svg">
                    </g>
                    <g xmlns="http://www.w3.org/2000/svg">
                    </g>
                    <g xmlns="http://www.w3.org/2000/svg">
                    </g>
                    <g xmlns="http://www.w3.org/2000/svg">
                    </g>
                    <g xmlns="http://www.w3.org/2000/svg">
                    </g>
                    <g xmlns="http://www.w3.org/2000/svg">
                    </g>
                    </g></svg>
                </span>
                <span className="num_of_baths">{numOfBath} Baths</span>

            </p>
            <p className="prop_info col_detail">
                <span className="b_d_s__icon">
                    <svg  xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" version="1.1" width="512" height="512" x="0" y="0" viewBox="0 0 511.996 511.996" style={{enableBackground:'new 0 0 512 512'}} xmlSpace="preserve" ><g>
                    <path xmlns="http://www.w3.org/2000/svg" d="M428.225,172.227l-21.213,21.213l47.395,47.395H311.761c-5.333-19.806-20.956-35.429-40.763-40.763V57.427l47.558,47.557  l21.213-21.213L255.998,0l-83.771,83.771l21.213,21.213l47.558-47.557v142.645c-19.806,5.333-35.429,20.956-40.762,40.762H57.589  l47.395-47.395l-21.213-21.213L0,255.998l83.771,83.771l21.213-21.213l-47.722-47.721h142.973  c5.333,19.806,20.956,35.429,40.762,40.762v142.972l-47.558-47.558l-21.213,21.213l83.771,83.771l83.771-83.771l-21.213-21.213  l-47.558,47.558V311.597c19.806-5.333,35.429-20.956,40.762-40.762h142.973l-47.721,47.721l21.213,21.213l83.771-83.771  L428.225,172.227z" fill="#a1abc9" data-original="#000000" style={{}} /></g></svg>
                </span>
                
                <span className="sqt_feet">{sqft} Sqft</span>
            </p>           
        </div>

    )
}

export default MidSection