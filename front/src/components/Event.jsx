import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";
import backgroundEuro from "../assets/euro.png";
import { Card, CardImg, CardBody, CardSubtitle } from "reactstrap";
import { NavLink } from "react-router-dom";
import moment from "moment";
import "./eventList.css";

const styleEuro = {
  euro: {
    background: `url(${backgroundEuro})`,
    backgroundSize: "contain",
    opacity: "0.5",
    backgroundRepeat: "no-repeat",
    height: "25px",
    width: "20px",
    float: "left",
    marginRight: "1vh"
    //padding: '5px',
  }
};
// Lisa : affichage des dates en fr avec momentjs
var idLocale = require("moment/locale/fr");
moment.locale("fr", idLocale);

const Event = ({ event }) => (
  <Container>
    <div className="cardAccueil">
      <NavLink to={`/event/${event.id}`} className="lienAccueil">
        <Card>
          <CardImg
            top
            src={event.image}
            alt="Card image cap"
            className="cardeImage"
            /*  width="100%" */
          />
          <CardBody className="cardContent">
            <CardSubtitle className="nameEvent">{event.name}</CardSubtitle>
            <CardSubtitle className="itemEvent">
              <p className="typeEvent">{event.type} </p>
            </CardSubtitle>
            <CardSubtitle className="itemEvent">
              <p>
                {moment(event.event_date_start).format("ll")} -{" "}
                {moment(event.event_date_finish).format("ll")}
                <br />
                {event.event_time}{" "}
              </p>
            </CardSubtitle>
            <CardSubtitle className="itemEvent">
              {event.event_where}
            </CardSubtitle>
            <CardSubtitle>
              <div className="cardIcones">
                {event.free === "true" ? (
                  <h1> </h1>
                ) : (
                  <div style={styleEuro.euro} />
                )}
                <div className={event.type} />
              </div>
            </CardSubtitle>
          </CardBody>
        </Card>
      </NavLink>
    </div>
  </Container>
);
export default Event;
