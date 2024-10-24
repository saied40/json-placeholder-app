import React from "react";
import { Helmet } from "react-helmet";
import { WEBSITE_TITLE } from "../config";
import FormInput from "../components/FormInput";
import Header from "../components/header";
import useAddUser from "../queries/addUser";
// import useUsersQuery from "../queries/usersQuery";
import { v4 as id } from "uuid";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const { mutate } = useAddUser();
  // const { data } = useUsersQuery();
  const goTo = useNavigate();
  const FormTitle = ({ text }) => <p className="w-full text-lg font-semibold border-t pt-1">{text} :</p>;

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const formData = {
      id: id(),
      name: `${e.target.first_name.value.trim()} ${e.target.last_name.value.trim()}`,
      username: e.target.username.value.trim(),
      email: e.target.email.value.trim(),
      phone: e.target.phone_number.value.trim(),
      website: e.target.website.value.trim(),
      isDummy: true,
      address: {
        street: e.target.street.value.trim(),
        suite: e.target.suite.value.trim(),
        city: e.target.city.value.trim(),
        zipcode: e.target.zipcode.value.trim(),
        geo: {
          lat: e.target.latitude.value.trim(),
          lng: e.target.longitude.value.trim(),
        },
      },
      company: {
        name: e.target.company_name.value.trim(),
        catchPhrase: e.target.catch_phrase.value.trim(),
        bs: e.target.company_bs.value.trim(),
      },
    };

    mutate(formData);

    const token = btoa(JSON.stringify({ id: formData.id, username: formData.username }));
    Cookies.set("token", token, { expires: 1 , secure : true });

    goTo("/");
  };

  return (
    <>
      <Helmet>
        <title>Register new account || {WEBSITE_TITLE}</title>
      </Helmet>
      <div className="container">
        <Header />
        <h2 className="text-3xl font-semibold text-center">Sign Up Form</h2>
        <form
          action="."
          method="post"
          onSubmit={handleRegisterSubmit}
          className="w-full md:w-3/4 xl:w-1/2 mx-auto flex items-center justify-between flex-wrap gap-4 my-4"
        >
          <FormInput name="First Name" isRequired={true} />
          <FormInput name="Last Name" isRequired={true} />
          <FormInput name="Username" isRequired={true} className />
          <FormInput name="Email" type="email" isRequired={true} className />
          <FormInput name="Phone Number" />
          <FormInput name="Website" />
          <FormTitle text="Address Details" />
          <FormInput name="street" />
          <FormInput name="Suite" />
          <FormInput name="City" />
          <FormInput name="Zipcode" />
          <FormInput name="Website" />
          <FormTitle text="Geo Location" />
          <FormInput name="Latitude" />
          <FormInput name="Longitude" />
          <FormTitle text="Company Details" />
          <FormInput name="Company Name" />
          <FormInput name="Company BS" />
          <FormInput name="Catch Phrase" className />
          <input
            type="submit"
            className="bg-blue-900 py-2 px-4 rounded-xl text-base font-medium shadow-xl cursor-pointer transition hover:scale-110"
          />
        </form>
      </div>
    </>
  );
}
