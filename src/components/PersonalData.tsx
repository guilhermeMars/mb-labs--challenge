import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";

interface PersonalDataProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  cpfCnpj: string;
  password: string;
  confirmPassword: string;
}

export default function PersonalData() {
  const initialValues: PersonalDataProps = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    cpfCnpj: "",
    password: "",
    confirmPassword: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }}
      validate={(values) => {
        const errors: Partial<PersonalDataProps> = {};

        if (!values.firstName) {
          errors.firstName = "Obrigatório";
        } else if (values.firstName.length > 5) {
          errors.firstName = "Nome precisa ter mais que 5 letras";
        }

        if (!values.lastName) {
          errors.lastName = "Required";
        } else if (values.lastName.length > 20) {
          errors.lastName = "Must be 20 characters or less";
        }

        if (!values.email) {
          errors.email = "Obrigatório";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Email inválido";
        }

        if (!values.cpfCnpj) {
          errors.cpfCnpj = "Obrigatório";
        } else if (values.cpfCnpj.length < 11) {
          errors.cpfCnpj = "CPF/CNPJ inválido";
        }

        if (!values.password) {
          errors.password = "Obrigatório";
        } else if (values.password.length < 6) {
          errors.password = "Senha precisa ter mais que 6 caracteres";
        } else if (
          /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(values.password)
        ) {
          errors.password = "A senha precisa possuir um caractere especial";
        }

        if (!values.confirmPassword) {
          errors.confirmPassword = "Obrigatório";
        } else if (values.confirmPassword !== values.password) {
          errors.confirmPassword = "As senhas precisam ser iguais";
        }

        return errors;
      }}
    >
      <Form>
        <label htmlFor="firstName">Primeiro Nome:</label>
        <Field name="firstName" type="text" />
        <ErrorMessage name="firstName" />

        <label htmlFor="lastName">Último Nome:</label>
        <Field name="lastName" type="text" />
        <ErrorMessage name="lastName" />

        <label htmlFor="email">Email:</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" />

        <label htmlFor="phone">Telefone:</label>
        <Field name="phone" type="number" />
        <ErrorMessage name="phone" />

        <label htmlFor="cpfCnpj">Cpf ou CNPJ:</label>
        <Field name="cpfCnpj" type="number" />
        <ErrorMessage name="cpfCnpj" />

        <label htmlFor="password">Senha:</label>
        <Field name="password" type="string" />
        <ErrorMessage name="password" />

        <label htmlFor="confirmPassword">Confirmar Senha:</label>
        <Field name="confirmPassword" type="string" />
        <ErrorMessage name="confirmPassword" />

        <button type="submit">Teste Submit</button>
      </Form>
    </Formik>
  );
}
