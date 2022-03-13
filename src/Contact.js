import "./Contact.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import {useHistory} from "react-router-dom";
function ContactUs() {
   
  return (
    <div className="container-fluid all-part">
      <div className="row d-flex justify-content-center main">
        <div className="col-sm-12">
          <h1>Creators</h1>
        </div>
      </div>
      <div className="lines">
        <div className="box-sm orange"></div>
        <div className="box-sm green"></div>
        <div className="box-sm yellow"></div>
        <div className="box-sm lime"></div>
      </div>
      <div className="contact-person">
        <div className="row d-flex justify-content-center">
          <div className="col-sm-12">
            <h3>Mohammad Llabadi</h3>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-sm-12">
            <p>
              Mohammad Llabadi is a Palestinian Jordanian Kings Academy Senior.
              He aspire to travel around the world and ultimately live in
              Palestine.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="lines">
        <div className="box-sm orange"></div>
        <div className="box-sm green"></div>
        <div className="box-sm yellow"></div>
        <div className="box-sm lime"></div>
      </div>

      <div className="contact-person">
        <div className="row d-flex justify-content-center">
          <div className="col-sm-12">
            <h3>Muhammad Lubbil Mushoffa</h3>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-sm-12">
            <p>
              Muhamamad Lubbil Mushoffa, a senior originating from Kings
              Academy. Possess a deep passion for technologies, and exctied
              about the oppurtunities of the future.{" "}
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
}
export default ContactUs;
