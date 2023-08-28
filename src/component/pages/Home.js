import React from "react";

function Home() {
  return (
    <>
    <div className="hero border-1 pb-3">
      <div className="card bg-dark text-white border-0 mx-3">
        <img
          className="card-img img-fluid"
          src="./Images/main.png.jpg"
          alt="Card"
          height={500}
        />
        <div className="card-img-overlay d-flex align-items-center">
          <div className="container">
            <h5 className="card-title fs-1 text fw-lighter font-weight-bold">WELCOME TO ZEKO ELECTRONICS</h5>
            <p className="card-text fs-5 d-none d-sm-block ">
            The electronic market in India is one of the largest in the world and is expected to reach $400 billion by 2020. Owing to the enabling policies by the government  the ‘Make in India’ and ‘Digital India’ initiative, local manufacturing in the Electronics Industry is becoming a hot trend. Established in the year 2018, “Zeko Electronics India Pvt. Ltd.”, is a leading manufacturer and supplier of a high-quality high-performance range of LED, HD LED and 4K Ultra HD LED TV. Headquartered in Delhi, our manufacturing facility is located at Rai (Haryana, India) and backed by an advanced infrastructural base that encompasses well-equipped departments such as procurement, production, quality control, R&D, logistics, warehousing & packaging and sales & marketing.
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default Home;
