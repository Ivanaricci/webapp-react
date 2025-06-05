import React from 'react'
import StarsRating from './StarsRating'

const ReviewCard = ({ review }) => {

    const { text, vote, name } = review


    return (
        <div>
            <div className="col-12">
                <div className="card p-4">
                    <p>{text}</p>
                    <p><StarsRating vote={vote} /></p>
                    <p>{name}</p>
                </div>
            </div>
        </div>
    )
}

export default ReviewCard