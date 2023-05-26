import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <>
    <footer className='flex justify-between py-40'>
        <div className="m-container half-container flex-col bg-color justify-between align-start">
            <div className="logo primary-color">
                <h3>ItsChavan</h3>
            </div>
          <p>&copy; Designed by sachin chavan </p>
        </div>

        <div className="m-container half-container flex-col bg-color justify-between align-start">
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit voluptatibus doloribus, itaque nesciunt accusantium dolores vero ullam fugit, similique non id, quos saepe natus?
            </p>

            <div className="social-links primary-color">
                <h4>Follow Links : </h4>
            </div>
        </div>
    </footer>
    </>
  )
}
