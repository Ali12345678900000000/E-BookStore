// import React from 'react'

const Card = ({ item }) => {
    // console.log(item);
    return (
        <>
            <div className='m-6 cursor-pointer lg:hover:scale-105 duration-200'>
                <div className="card bg-base-100 w-64 lg:w-92 shadow-xl">
                    <figure>
                        <img
                            src={item.image}
                            alt="Book" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}!
                            <div className="badge badge-secondary">{item.category}</div>
                        </h2>
                        <p>{item.desc}</p>
                        <div className="card-actions justify-end ">
                            <div className="badge badge-outline py-3">${item.price}</div>
                            <div className="badge badge-outline py-3 cursor-pointer hover:bg-pink-500 hover:border-pink-500 hover:text-white duration-200">Buy now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
