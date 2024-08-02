import React from 'react'

export default function Cards({ item }) {
    return (
        <>
            <div className='mt-4 my-4 p-3'>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            src={item.image}
                            alt={item.name} />
                    </figure>
                    <div className="card-body bg-white">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">{item.category}</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline">{item.price}</div>
                            <div className="badge badge-outline hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
