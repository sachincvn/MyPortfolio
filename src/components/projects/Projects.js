import React from 'react'
import './Projects.css'
import tempImage from "../../images/temp_img.jpg";

export default function Projects() {
  return (
    <>
     <section className="flex flex-col m-container align-center gap-40">
        <h2>Projects </h2>
        <p className="my-10">
          My projects which are developed using differnet framework's{" "}
        </p>

        <div className="projects flex-start">
          <div className="project-thumb">
            <img src={tempImage} alt="Project Thumbnail" />
          </div>

          <div className="project-desctiption flex flex-col justify-between align-start mx-20 p-20">
            <div className="project-tag flex bg-primary-color">
              <p className="self-start">Xamarin Forms</p>
            </div>

            <h3> Project Title - Goes Here Lorem ipsum dolor sit. </h3>

            <a href="#">Source Code</a>
          </div>
        </div>

        <div className="projects flex-end">
          <div className="project-desctiption flex flex-col justify-between align-start mx-20 p-20">
            <div className="project-tag flex bg-primary-color">
              <p className="self-start">Xamarin Forms</p>
            </div>

            <h3> Project Title - Goes Here Lorem ipsum dolor sit. </h3>

            <a href="#">Source Code</a>
          </div>
          <div className="project-thumb">
            <img src={tempImage} alt="Project Thumbnail" />
          </div>
        </div>



        <div className="projects flex-start">
          <div className="project-thumb">
            <img src={tempImage} alt="Project Thumbnail" />
          </div>

          <div className="project-desctiption flex flex-col justify-between align-start mx-20 p-20">
            <div className="project-tag flex bg-primary-color">
              <p className="self-start">Xamarin Forms</p>
            </div>

            <h3> Project Title - Goes Here Lorem ipsum dolor sit. </h3>

            <a href="#">Source Code</a>
          </div>
        </div>

        <div className="projects flex-end">
          <div className="project-desctiption flex flex-col justify-between align-start mx-20 p-20">
            <div className="project-tag flex bg-primary-color">
              <p className="self-start">Xamarin Forms</p>
            </div>

            <h3> Project Title - Goes Here Lorem ipsum dolor sit. </h3>

            <a href="#">Source Code</a>
          </div>
          <div className="project-thumb">
            <img src={tempImage} alt="Project Thumbnail" />
          </div>
        </div>

      </section>
    </>
  )
}
