import React from "react";

const Footer = () => {
     return (
          <footer>
               <div className='container'>
                    <div className='row'>
                         <div className='col-12 col-lg-10 mx-auto'>
                              <div className='row'>
                                   <div className='col-6 col-lg-3'>
                                        <h2> <img
                                             className="nav_logo"
                                             src="https://zeko.co.in/wp-content/themes/zeko/images/foot-logo.png"
                                             alt="zeko Logo"
                                        /></h2>
                                     <div className='row item2' >
                                             <div className='col-3 mx-auto'>
                                                  <a href=""><i className='fab fa-instagram fontawesome-style'></i></a>

                                             </div>
                                             <div className='col-3 mx-auto'>
                                                  <a href=""><i className='fab fa-facebook fontawesome-style'></i></a>

                                             </div>
                                             <div className='col-3 mx-auto'>
                                                  <a href=""><i className='fab fa-twitter fontawesome-style'></i></a>

                                             </div>
                                             <div className='col-3 mx-auto'>
                                                  <a href=""><i className='fab fa-youtube fontawesome-style'></i></a>

                                             </div>
                                        </div>
                                   </div>
                                   <div className='col-6 col-lg-3 item1'>
                                        <h2>Our Product</h2>
                                        <ul>
                                             <li>
                                                  <a href="">Televisions</a>
                                             </li>
                                             <li>
                                                  <a href="">Washing Machine</a>
                                             </li>
                                             <li>
                                                  <a href="">Wall Fan</a>
                                             </li>
                                             <li>
                                                  <a href="">Mcb</a>
                                             </li>
                                        </ul>
                                   </div>
                                   <div className='col-6 col-lg-3 item'>

                                        <ul>
                                             <li>
                                                  <a href="">Iron</a>
                                             </li>
                                             <li>
                                                  <a href="">Celling Fan</a>
                                             </li>
                                             <li>
                                                  <a href="">Torch</a>
                                             </li>
                                             <li>
                                                  <a href="">Lamp</a>
                                             </li>
                                        </ul>
                                   </div>
                                   <div className='col-6 col-lg-3'>
                                        <h2>Location</h2>
                                        <ul>
                                             <li>
                                                  <p>KH.NO-821/2/1, Numan Khan, Gulab Vatika
                                                       Ghaziabad, Uttar Pradesh 201102 India.</p>
                                             </li>

                                             <li>
                                                  <p><i class="fa-solid fa-phone" style={{ color: "#f3eded" }}></i> 7767846110</p>
                                             </li>

                                             <li>
                                                  <p><i class="fa-solid fa-phone" style={{ color: "#f3eded" }}></i> 8826820230</p>
                                             </li>

                                             <li>
                                                  <p><i class="fa-solid fa-phone" style={{ color: "#f3eded" }}></i> 6204931606</p>
                                             </li>

                                             <li>
                                                  <p><i class="fa-regular fa-envelope" style={{ color: "#f3eded" }}></i> Zeko@zeko.co.in</p>
                                             </li>
                                        </ul>
                                   </div>
                              </div>
                              <hr />
                              <div className='mt-5'>
                                   <p className='main-hero-para text-center w-100'>
                                        Copyright @ 2023 Zeko. All rights reserved.
                                   </p>
                              </div>
                         </div>
                    </div>

               </div>
          </footer>
     )
}

export default Footer;