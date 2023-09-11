import React, {  } from 'react'
import './event.css'
import CommentList from '../Comments/CommentList'
import Comments from '../Comments/Comments'
import img1 from '../../assets/menu.png'

const Employee = () => {
 
    return (
        <section className='employeeHome d-flex flex-column align-items-center justify-content-center p-5'>
            <h1> Company Events</h1>
            <div className='mt-5'>
                <div id="carouselExampleControls" class="carousel slide bg-dark event" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={img1} alt="" />
                        </div>
                        <div class="carousel-item">
                            <img src={img1} alt="" />
                        </div>
                        <div class="carousel-item">
                            <img src={img1} alt="" />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className='mt-5'>
            <CommentList/>
                <Comments/>
            </div>

        </section>
    )
}

export default Employee