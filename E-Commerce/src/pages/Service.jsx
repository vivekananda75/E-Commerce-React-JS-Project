import React from "react";

export default function Service() {
  const serviceData = [
    {
      icon: <ion-icon name="car"></ion-icon>,
      title: "Free Shipping",
      subtitle: "Lorem ipsum dolor sit amet.",
      bg: "#fdefe6",
    },
    {
      icon: <ion-icon name="card"></ion-icon>,
      title: "Safe Payment",
      subtitle: "Lorem ipsum dolor sit amet.",
      bg: "#ceebe9",
    },
    {
      icon: <ion-icon name="shield-half-outline"></ion-icon>,
      title: "Secure Payment",
      subtitle: "Lorem ipsum dolor sit amet.",
      bg: "#e2f2b2",
    },
    {
      icon: <ion-icon name="headset"></ion-icon>,
      title: " Back Guarantee",
      subtitle: "Lorem ipsum dolor sit amet.",
      bg: "#d6e5fb",
    },
  ];

  return (
    <div className="container my-5">{/* card container*/}
      <div className="row g-4">
        {serviceData.map((item, index) => (
          <div key={index} className="col-md-3 col-sm-6">
            <div
              className="  text-center shadow-sm border-0"
              style={{ backgroundColor: item.bg, height: 150 }}
            >
              <br />{/* card body*/}
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <div
                  className="display-5 mb-3 card-icons"
                  style={{
                    fontSize: 25,
                    backgroundColor: "white",
                    borderRadius: 25,
                    width: 30,
                    height: 30,
                  }}
                >
                  {item.icon}
                </div>
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text text-muted">{item.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
