import React from 'react'
import cn from 'classnames'


const Steps  = ({pagesName,currentPage}) => {
    return (
        <div>
            <div className="steps__container">
                {pagesName.map((name,index) => (
                        <div
                            className={
                                cn("step",
                                    {"is-completed": currentPage > (index + 1)},
                                    {"is-active": currentPage ==  (index + 1)},
                                    {"last-step": (index) == pagesName.length - 1}
                                  )
                            }
                        >
                            <div
                                className="step__number"
                            >
                                {index+1}</div>
                            <div className="step__title">{name}</div>

                        </div>
                    )
                )}
            </div>
        </div>
    );
}

export default Steps;