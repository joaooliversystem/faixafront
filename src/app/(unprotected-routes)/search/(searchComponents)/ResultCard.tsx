import Carousel from "@/components/Carousel";

interface ResultCardProps {
  companionId?: number;
  cardType?: "bronze" | "bronze 2" | "silver 2" | "silver" | "gold";
  name?: string;
  onlineStatus?: string;
  cardDescription?: string;
  serviceInfo?: string;
  servicePrice?: number;
  age?: number;
  ownPlace?: boolean;
  location?: string;
  cardLongDescription?: string;
  wppButton?: boolean;
  trans?: boolean;
  man?: boolean;
  woman?: boolean;
  onClick?: () => void;
}

function ResultCard(
  {
    cardType,
    companionId,
    name,
    onlineStatus,
    cardDescription,
    serviceInfo,
    servicePrice,
    age,
    ownPlace,
    location,
    cardLongDescription,
    wppButton,
    trans,
    man,
    woman,
    onClick
  }: ResultCardProps) {
  if (cardType == "bronze")
    return (
      <div className="card d-flex flex-row mb-3" onClick={onClick}>
        <div
          className="flex-grow-1"
          style={{
            backgroundImage: "url(files/images/advertiser_image_1.jpeg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "250px",
            flexBasis: "40%",
          }}
        ></div>
        <div className="flex-grow-1 p-2" style={{ flexBasis: "60%" }}>
          <h3 className="fs-5">{name}</h3>
          <span className="text-success d-flex gap-2">
            <i className="bi bi-circle-fill"></i>
            {onlineStatus}
          </span>
          <small className="fst-italic d-block mt-2">
            {cardDescription}
          </small>
          <h5 className="mt-4">R$ {servicePrice}/h</h5>
          <div className="d-flex gap-2 mt-3">
            <span>
              <i className="fa-solid fa-id-card me-1" /> {age} anos
            </span>
            <span>
              <i className="bi bi-house-check-fill me-1" />
              {ownPlace && (
                'Com local'
              )}
            </span>
          </div>
          <div className="mt-2">
            <span>
              <i className="fa-solid fa-location-dot" /> {location}
            </span>
          </div>
        </div>
      </div>
    );

  if (cardType == "bronze 2")
    return (
      <div
        className="card d-flex flex-row mb-3"
        style={{
          boxShadow: "0px 0px 10px #f5ebfc",
          border: "2px solid #d6a6f7",
        }}
        onClick={onClick}
      >
        <div
          className="flex-grow-1"
          style={{
            backgroundImage: "url(files/images/advertiser_image_5.jpeg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "300px",
            flexBasis: "40%",
          }}
        ></div>
        <div className="flex-grow-1 p-2" style={{ flexBasis: "60%" }}>
          <h3 className="fs-5">
            {name}
          </h3>
          <span className="text-success d-flex gap-2">
            <i className="bi bi-circle-fill"></i>
            {onlineStatus}
          </span>
          <small className="fst-italic d-block mt-2">
            {cardDescription}
          </small>
          <h5 className="mt-4">
            R$ {servicePrice}/h
          </h5>
          <div className="d-flex gap-2 mt-3">
            <span>
              <i className="fa-solid fa-id-card me-1" /> {age} anos
            </span>
            <span>
              <i className="bi bi-house-check-fill me-1" />
              {ownPlace && (
                'Com local'
              )}
            </span>
          </div>
          <div className="mt-2">
            <span>
              <i className="fa-solid fa-location-dot" /> {location}
            </span>
          </div>
        </div>
      </div>
    );

  if (cardType == "silver 2")
    return (
      <div
        className="card d-flex mb-3"
        style={{
          boxShadow: "0px 0px 20px #c5d4fa",
          border: "1px solid #a3bbf7",
        }}
        onClick={onClick}
      >
        <Carousel dots={false} arrowsInside={true}>
          <div>
            <div
              style={{
                backgroundImage: "url(files/images/advertiser_image_1.jpeg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "150px",
              }}
            ></div>
          </div>
          <div>
            <div
              style={{
                backgroundImage: "url(files/images/advertiser_image_2.jpeg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "150px",
              }}
            ></div>
          </div>
          <div>
            <div
              style={{
                backgroundImage: "url(files/images/advertiser_image_4.jpeg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "150px",
              }}
            ></div>
          </div>
        </Carousel>
        <div className="p-2" style={{ flexBasis: "60%" }}>
          <h3 className="fs-5">{name}</h3>
          <span className="text-success d-flex gap-2">
            <i className="bi bi-circle-fill"></i>
            {onlineStatus}
          </span>
          <small className="fst-italic d-block mt-2">
            {cardDescription}
          </small>
          <span className="fw-bold d-block mt-2">{serviceInfo}</span>
          <h5 className="mt-2">R$ 1200/h</h5>
          <div className="d-flex gap-2 mt-3">
            <span>
              <i className="fa-solid fa-id-card me-1" /> {age} anos
            </span>
            <span>
              <i className="bi bi-house-check-fill me-1" />
              {ownPlace && (
                'Com local'
              )}
            </span>
          </div>
          <div className="mt-2">
            <span>
              <i className="fa-solid fa-location-dot" /> {location}
            </span>
          </div>
        </div>
      </div>
    );

  if (cardType == "silver")
    return (
      <div
        className="card d-flex mb-3"
        style={{
          boxShadow: "0px 0px 20px #adadad",
          border: "3px solid #545454",
          backgroundColor: "#616161",
          color: "#bfbfbf",
        }}
        onClick={onClick}
      >
        <Carousel dots={false} arrowsInside={true}>
          <div>
            <div
              style={{
                backgroundImage: "url(files/images/advertiser_image_1.jpeg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "150px",
              }}
            ></div>
          </div>
          <div>
            <div
              style={{
                backgroundImage: "url(files/images/advertiser_image_2.jpeg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "150px",
              }}
            ></div>
          </div>
          <div>
            <div
              style={{
                backgroundImage: "url(files/images/advertiser_image_4.jpeg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "150px",
              }}
            ></div>
          </div>
        </Carousel>
        <div className="p-2" style={{ flexBasis: "60%" }}>
          <h3 className="fs-5 text-white">{name}</h3>
          <span className="text-success d-flex gap-2">
            <i className="bi bi-circle-fill"></i>
            {onlineStatus}
          </span>
          <small className="fst-italic d-block mt-2">
            {cardDescription}
          </small>
          <span className="fw-bold d-block mt-2">{serviceInfo}</span>
          <h5 className="mt-2 text-white">R$ {servicePrice}/h</h5>
          <div className="d-flex gap-2 mt-3">
            <span>
              <i className="fa-solid fa-id-card me-1" /> {age} anos
            </span>
            <span>
              <i className="bi bi-house-check-fill me-1" />
              {ownPlace && (
                'Com local'
              )}
            </span>
          </div>
          <div className="mt-2">
            <span>
              <i className="fa-solid fa-location-dot" /> {location}
            </span>
          </div>
        </div>
      </div>
    );
  if (cardType == "gold")
    return (
      <div
        className="card d-flex mb-3"
        style={{
          boxShadow: "0px 0px 20px #adadad",
          border: "3px solid #a14757",
          backgroundColor: "#c7566a",
          color: "#fad9df",
        }}
        onClick={onClick}
      >
        <Carousel dots={true} arrowsInside={true}>
          <div>
            <div
              style={{
                backgroundImage: "url(files/images/advertiser_image_1.jpeg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "150px",
              }}
            ></div>
          </div>
          <div>
            <div
              style={{
                backgroundImage: "url(files/images/advertiser_image_2.jpeg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "150px",
              }}
            ></div>
          </div>
          <div>
            <div
              style={{
                backgroundImage: "url(files/images/advertiser_image_4.jpeg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "150px",
              }}
            ></div>
          </div>
        </Carousel>
        <div className="p-2" style={{ flexBasis: "60%" }}>
          <h3 className="fs-5 text-white">
            {name}
          </h3>
          <span className="text-success d-flex gap-2">
            <i className="bi bi-circle-fill"></i>
            {onlineStatus}
          </span>
          <small className="fst-italic d-block mt-2">
            {cardDescription}
          </small>
          <span className="fw-bold d-block mt-2">
            {serviceInfo}
          </span>
          <h5 className="mt-2 text-white">R$
            {servicePrice}/h
          </h5>
          <div className="d-flex gap-2 mt-4">
            <span>
              <i className="fa-solid fa-id-card me-1" /> {age} anos
            </span>
            <span>
              <i className="bi bi-house-check-fill me-1" />
              {ownPlace && (
                'Com local'
              )}
            </span>
          </div>
          <div className="mt-4">
            <span>
              <i className="fa-solid fa-location-dot" /> {location}
            </span>
          </div>
          <div className="mt-3">
            <small>
              {cardLongDescription}
            </small>
          </div>
          <div className="d-flex align-items-center justify-content-center mt-3">
            <button className="btn btn-success me-4" type="button">
              <i className="bi bi-whatsapp  d-inline-block me-2 "></i>
              Chamar no Whatsapp
            </button>
          </div>
        </div>
      </div>
    );
}

export default ResultCard;
