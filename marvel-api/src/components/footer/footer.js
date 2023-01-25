import React from 'react'
import './footer.css'
export const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white">

      <div className="container p-4 pb-0">

        <section className="mb-4">

          {/* <a className="btn btn-outline-light btn-floating m-1"  role="button"
          ><i className="fab fa-facebook-f"></i></a> */}

          {/* <!-- Twitter --> */}
          <a className="btn btn-outline-light btn-floating m-1"  role="button"
          ><i className="fab fa-twitter"></i></a>

          {/* <!-- Google --> */}
          <a className="btn btn-outline-light btn-floating m-1"  role="button"><i className="fab fa-google"></i></a>

          {/* <!-- Instagram --> */}
          <a className="btn btn-outline-light btn-floating m-1"  role="button"
          ><i className="fab fa-instagram"></i></a>

          {/* <!-- Linkedin --> */}
          <a className="btn btn-outline-light btn-floating m-1"  role="button"><i className="fab fa-linkedin-in"></i></a>

          {/* <!-- Github --> */}
          <a className="btn btn-outline-light btn-floating m-1"  role="button"
          ><i className="fab fa-github"></i></a>
        </section>
        {/* <!-- Section: Social media --> */}
      </div>


      {/* <!-- Copyright --> */}
      <div className="text-center p-3">
        © 2022:
        <a className="text-white" href="https://github.com/Joca-Alfaro">Created by developer Alfaro </a>
      </div>
      {/* <!-- Copyright --> */}
    </footer>
  )
}
export default Footer;

