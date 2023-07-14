import React from 'react'
import Header from './Header'

const Pricing = () => {
  return (
    // <div>
    //     This is the Pricing Component.
    // </div>
    <div>
      <Header />
      <div className="container">
        <div className="pricing-header p-3 pb-md-4 mb-4 mx-auto text-center">
          <h1 className="display-4 fw-normal">Pricing</h1>
          <p className="fs-5 text-muted">Get started by choosing amongst the pricing plans that best suits your purpose. Avail 20% off on Pro and 40% off on Enterprise monthly subscriptions for a limited time with code MEGADEAL</p>
        </div>

        <main>
          <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header text-bg-creamy py-3">
                  <h4 className="my-0 fw-normal">Free</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">$0<small className="text-muted fw-light">/mo</small></h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>10 users included</li>
                    <li>2 GB of cloud storage</li>
                    <li>Email support</li>
                    <li>Help center access</li>
                  </ul>
                  <button type="button" className="w-100 btn btn-lg btn-outline-secondary">Sign up for free</button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header text-bg-creamy py-3">
                  <h4 className="my-0 fw-normal">Pro</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">$15<small className="text-muted fw-light">/mo</small></h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>20 users included</li>
                    <li>10 GB of cloud storage</li>
                    <li>Priority email support</li>
                    <li>Help center access</li>
                  </ul>
                  <button type="button" className="w-100 btn btn-lg btn-secondary">Get started</button>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm border-secondary">
                <div className="card-header py-3 text-bg-secondary border-secondary">
                  <h4 className="my-0 fw-normal">Enterprise</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">$29<small className="text-muted fw-light">/mo</small></h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>30 users included</li>
                    <li>15 GB of cloud storage</li>
                    <li>Phone and email support</li>
                    <li>Help center access</li>
                  </ul>
                  <button type="button" className="w-100 btn btn-lg btn-secondary">Contact us</button>
                </div>
              </div>
            </div>
          </div>

          <h2 className="display-6 text-center mb-4">Compare plans</h2>

          <div className="table-responsive">
            <table className="table text-center">
              <thead>
                <tr>
                  <th style={{ width: "34%" }}></th>
                  <th style={{ width: "22%" }}>Free</th>
                  <th style={{ width: "22%" }}>Pro</th>
                  <th style={{ width: "22%" }}>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" className="text-start">Public access</th>
                  <td><span>&#10003;</span></td>
                  <td><span>&#10003;</span></td>
                  <td><span>&#10003;</span></td>
                </tr>
                <tr>
                  <th scope="row" className="text-start">Private access</th>
                  <td></td>
                  <td><span>&#10003;</span></td>
                  <td><span>&#10003;</span></td>
                </tr>
              </tbody>

              <tbody>
                <tr>
                  <th scope="row" className="text-start">Permissions</th>
                  <td><span>&#10003;</span></td>
                  <td><span>&#10003;</span></td>
                  <td><span>&#10003;</span></td>
                </tr>
                <tr>
                  <th scope="row" className="text-start">Sharing</th>
                  <td></td>
                  <td><span>&#10003;</span></td>
                  <td><span>&#10003;</span></td>
                </tr>
                <tr>
                  <th scope="row" className="text-start">Premium support</th>
                  <td></td>
                  <td><span>&#10003;</span></td>
                  <td><span>&#10003;</span></td>
                </tr>
                <tr>
                  <th scope="row" className="text-start">Extra security</th>
                  <td></td>
                  <td></td>
                  <td><span>&#10003;</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>

      <footer className="py-5 px-5 my-md-5 footer-bg">
          <div className="row px-5">
            <div className="col-12 col-md">
              <img className="mt-1" src="/Images and SVGs/Brand Logo Header.png" alt="" width="60" height="55" />
              <small className="mb-3 text-muted" style={{color : "white"}}>&copy; Graviton 2017–2022</small>
            </div>
            <div className="col-6 col-md">
              <h5>Explore</h5>
              <ul className="list-unstyled text-small">
                <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Features</a></li>
                <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Resources</a></li>
                <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Report bugs</a></li>
                <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Request features</a></li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>Social</h5>
              <ul className="list-unstyled text-small">
                <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Community</a></li>
                <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Twitter</a></li>
                <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">GitHub</a></li>
                <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">YouTube</a></li>
                <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">LinkedIn</a></li>
                <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Instagram</a></li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5>Legal</h5>
              <ul className="list-unstyled text-small">
                <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Terms & Conditions</a></li>
                <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Privacy Policy</a></li>
                <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Cookie Policy</a></li>
                <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Security</a></li>
                <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Code of Conduct</a></li>
              </ul>
            </div>
          </div>
        </footer>
    </div>
  )
}

export default Pricing
