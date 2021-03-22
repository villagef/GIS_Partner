import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function RegistrationForm() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      address1: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
      address2: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
      address3: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
      address4: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
      address5: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    }),
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form className='registrationForm' onSubmit={formik.handleSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        type="text"
        {...formik.getFieldProps("firstName")}
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div>{formik.errors.firstName}</div>
      ) : null}

      <label htmlFor="lastName">Last Name</label>
      <input id="lastName" type="text" {...formik.getFieldProps("lastName")} />
      {formik.touched.lastName && formik.errors.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}

      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" {...formik.getFieldProps("email")} />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}

      <label htmlFor="address1">Województwo</label>
      <input id="address1" type="text" {...formik.getFieldProps("address1")} />
      {formik.touched.address1 && formik.errors.address1 ? (
        <div>{formik.errors.address1}</div>
      ) : null}

      <label htmlFor="address2">Powiat</label>
      <input id="address2" type="text" {...formik.getFieldProps("address2")} />
      {formik.touched.address2 && formik.errors.address2 ? (
        <div>{formik.errors.address2}</div>
      ) : null}

      <label htmlFor="address3">Gmina</label>
      <input id="address3" type="text" {...formik.getFieldProps("address3")} />
      {formik.touched.address3 && formik.errors.address3 ? (
        <div>{formik.errors.address3}</div>
      ) : null}

      <label htmlFor="address4">Miejscowość</label>
      <input id="address4" type="text" {...formik.getFieldProps("address4")} />
      {formik.touched.address4 && formik.errors.address4 ? (
        <div>{formik.errors.address4}</div>
      ) : null}

      <label htmlFor="address5">Ulica</label>
      <input id="address5" type="text" {...formik.getFieldProps("address5")} />
      {formik.touched.address5 && formik.errors.address5 ? (
        <div>{formik.errors.address5}</div>
      ) : null}

      <button type="submit">Submit</button>
    </form>
  );
}
