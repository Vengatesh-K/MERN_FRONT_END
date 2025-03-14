import React, { useState } from "react";
// import emailjs from '@emailjs/browser';
// import { serviceId, templateId, userId } from './emailjsConfig';
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const Gmail = () => {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Check submission:))))))))))");

    const params = {
      from_name: "Your Name",
      to,
      subject,
      message: body,
    };

    // emailjs
    //   .send(serviceId, templateId, params, userId)
    //   .then((response) => {
    //     console.log('SUCCESS!', response.status, response.text);
    //     alert('Email Sent Successfully!');
    //     setTo('');
    //     setSubject('');
    //     setBody(''); // Clear form after successful submission
    //   })
    //   .catch((err) => {
    //     console.log('FAILED...', err);
    //     alert('Email Sending Failed!');
    //   });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 shadow p-4 rounded bg-light">
          <h1 className="text-center mb-4">Send Email</h1>
          {/* <form onSubmit={handleSubmit}>  */}
          <form>
            <div className="form-group">
              <label htmlFor="to">To:</label>
              <input
                type="email"
                id="to"
                name="to"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                required
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="body">Body:</label>
              <textarea
                id="body"
                name="body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
                className="form-control"
                rows="5"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary mt-3"
              onClick={handleSubmit}
            >
              Send Email
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Gmail;
