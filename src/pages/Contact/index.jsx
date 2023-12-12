import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import React from "react";
import { Helmet } from "react-helmet-async";

function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Page</title>
      </Helmet>
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "" }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" type="text" />
          <ErrorMessage name="firstName" />

          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" type="text" />
          <ErrorMessage name="lastName" />

          <label htmlFor="email">Email Address</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
      <div
        className="contact-container"
        style={{ display: "grid", placeContent: "center", height: "723px" }}
      >
        <h1 style={{ textAlign: "center" }}>Info</h1>
        <div className="contact">
          <h3>
            <span>Email : </span>
            KarenTWinslow@dayrep.com
            
          </h3>
          <h3>
            <span>Phone : </span>
            407-712-2546
          </h3>
          <h3>
            <span>Address : </span>
            657 Grand Avenue Winter Park, FL 32789
          </h3>
          <h3>
            <span>Company : </span>
            Linens 'n Things
          </h3>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
