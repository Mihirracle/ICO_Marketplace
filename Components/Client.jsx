import React from "react";

const Client = () => {
  const clientLogos = [
    { id: 1, src: "/assets/images/client_logo_wt1.png", alt: "client_logo1" },
    { id: 1, src: "/assets/images/client_logo_wt2.png", alt: "client_logo1" },
    { id: 1, src: "/assets/images/client_logo_wt3.png", alt: "client_logo1" },
    { id: 1, src: "/assets/images/client_logo_wt4.png", alt: "client_logo1" },
    { id: 1, src: "/assets/images/client_logo_wt5.png", alt: "client_logo1" },
    { id: 1, src: "/assets/images/client_logo_wt6.png", alt: "client_logo1" },
    { id: 1, src: "/assets/images/client_logo_wt7.png", alt: "client_logo1" },
    { id: 1, src: "/assets/images/client_logo_wt8.png", alt: "client_logo1" },
  ];

  return (
    <section id="client_section" className="section_client bg_black_dark">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="title_default_light title_border text-center">
              <h4
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Our Clients
              </h4>
              <p
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.4s"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reprehenderit, quasi, repellendus ipsa cumque, illum nobis
                adipisci harum ipsum quaerat odit aspernatur excepturi et.
                Iusto, quidem cupiditate? In dicta beatae eos?
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          {clientLogos.map((client) => (
            <div
              key={client.id}
              className="col-lg-3 col-md-6 col-sm-12"
              style={{ marginBottom: "20px" }} // Add margin bottom for space
            >
              <div
                className="client_box_s2 text-center animation"
                data-animation="fadeInUp"
                data-animation-delay="0.5s"
              >
                <div className="client_logo">
                  <img src={client.src} alt={client.alt} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Client;
