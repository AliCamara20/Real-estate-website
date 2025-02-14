import { useRef } from "react";

const RatingStars = () => {
    const stars = [
        {id: 0, label: 'S'},
        {id: 1, label: 't'},
        {id: 2, label: 'a'},
        {id: 3, label: 'r'},
        {id: 4, label: 's'},
    ]
    
    return(
        <div className="rating_stars" key={stars} >
            {stars.map( s => {
                return(
                    <div key={s.id} >
                        <input type="checkbox" name="" id={s.id + 1} className="rating_checkbox"  />
                        <label htmlFor={s.id + 1}>
                            <svg  fill="#aaa" className="rating_star" version="1.1" id={`Capa_${s.id + 1}`} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
                                width="15px" height="15px" viewBox="0 0 126.729 126.73"
                                xmlSpace="preserve">
                                <g>
                                    <path d="M121.215,44.212l-34.899-3.3c-2.2-0.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101,0l-12.4,30.3
                                        c-0.8,2.1-2.8,3.5-5,3.7l-34.9,3.3c-5.2,0.5-7.3,7-3.4,10.5l26.3,23.1c1.7,1.5,2.4,3.7,1.9,5.9l-7.9,32.399
                                        c-1.2,5.101,4.3,9.3,8.9,6.601l29.1-17.101c1.9-1.1,4.2-1.1,6.1,0l29.101,17.101c4.6,2.699,10.1-1.4,8.899-6.601l-7.8-32.399
                                        c-0.5-2.2,0.2-4.4,1.9-5.9l26.3-23.1C128.615,51.212,126.415,44.712,121.215,44.212z"
                                    />
                                </g>
                            </svg>
                        </label>
                        
                    </div>
                )
            })}
        </div>
    )

    
} 

export default RatingStars