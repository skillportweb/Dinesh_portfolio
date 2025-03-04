import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Contact() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      mobileNumber: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, "Too short!")
        .max(50, "Too long!")
        .required("First name is required"),
      lastName: Yup.string()
        .min(2, "Too short!")
        .max(50, "Too long!")
        .required("Last name is required"),
      mobileNumber: Yup.string()
        .matches(/^[0-9]{10}$/, "Must be a 10-digit number")
        .required("Mobile number is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string()
        .min(10, "Message must be at least 10 characters")
        .required("Message is required"),
    }),
    onSubmit: (values) => {
      console.log("Form submitted:", values);
      alert("Form submitted successfully!");
    },
  });

  return (
    <div className="contact-section py-5">
      <div className="container">
        <div className="row g-4 align-items-center">
          {/* Column 1 */}
          <div className="col-lg-6 col-md-12">
            <div className="contact-info d-flex gap-2 align-items-center mb-4">
              <i class="fa-solid fa-phone-volume"></i>
              <h6>
                <a href="tel:+918218475442">+91-8218475442</a>
              </h6>
            </div>
            <div className="contact-info d-flex gap-2 align-items-center mb-4">
              <i class="fa-solid fa-envelope"></i>
              <h6>
                <a href="mailto:Dinesh1804200182@gmail.com">
                  Dinesh1804200182@gmail.com
                </a>
              </h6>
            </div>
            <div className="contact-info d-flex gap-2 align-items-center mb-4">
              <i class="fa-solid fa-location-dot"></i>
              <h6>Noida Sec-62</h6>
            </div>
          </div>

          {/* Column 2 - Contact Form */}
          <div className="col-lg-6 col-md-12">
            <div className="p-4 border rounded bg-light">
              <h3 className="mb-4 text-center">Get in Touch</h3>
              <form onSubmit={formik.handleSubmit}>
                <div className="row">
                  {/* First Name */}
                  <div className="col-md-6">
                    <div className="mb-3">
                      <input
                        type="text"
                        name="firstName"
                        className={`form-control ${
                          formik.touched.firstName && formik.errors.firstName
                            ? "is-invalid"
                            : ""
                        }`}
                        placeholder="First Name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                      />
                      {formik.touched.firstName && formik.errors.firstName && (
                        <div className="invalid-feedback">
                          {formik.errors.firstName}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Last Name */}
                  <div className="col-md-6">
                    <div className="mb-3">
                      <input
                        type="text"
                        name="lastName"
                        className={`form-control ${
                          formik.touched.lastName && formik.errors.lastName
                            ? "is-invalid"
                            : ""
                        }`}
                        placeholder="Last Name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                      />
                      {formik.touched.lastName && formik.errors.lastName && (
                        <div className="invalid-feedback">
                          {formik.errors.lastName}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Mobile Number */}
                  <div className="col-md-6">
                    <div className="mb-3">
                      <input
                        type="tel"
                        name="mobileNumber"
                        className={`form-control ${
                          formik.touched.mobileNumber &&
                          formik.errors.mobileNumber
                            ? "is-invalid"
                            : ""
                        }`}
                        placeholder="Enter your mobile number"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.mobileNumber}
                      />
                      {formik.touched.mobileNumber &&
                        formik.errors.mobileNumber && (
                          <div className="invalid-feedback">
                            {formik.errors.mobileNumber}
                          </div>
                        )}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="col-md-6">
                    <div className="mb-3">
                      <input
                        type="email"
                        name="email"
                        className={`form-control ${
                          formik.touched.email && formik.errors.email
                            ? "is-invalid"
                            : ""
                        }`}
                        placeholder="Enter your email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                      />
                      {formik.touched.email && formik.errors.email && (
                        <div className="invalid-feedback">
                          {formik.errors.email}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="mb-3">
                  <textarea
                    name="message"
                    className={`form-control ${
                      formik.touched.message && formik.errors.message
                        ? "is-invalid"
                        : ""
                    }`}
                    rows="4"
                    placeholder="Write your message here"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                  ></textarea>
                  {formik.touched.message && formik.errors.message && (
                    <div className="invalid-feedback">
                      {formik.errors.message}
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
