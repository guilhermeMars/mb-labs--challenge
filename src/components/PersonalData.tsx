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

// Styled Components

const StyledForm = styled(Form)`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
`;

const FieldDiv = styled.div<{ $fieldType?: string }>`
  ${({ $fieldType }) => {
    switch ($fieldType) {
      case "name":
        return `
          flex: calc(50% - 1rem);
        `;
      case "email":
        return `
          flex: 100%;
        `;
      case "phone":
        return `
          flex: calc(20% - 1rem);
        `;
      case "cpfCnpj":
        return `
          flex: calc(20% - 1rem);
        `;
      case "password":
        return `
          flex: calc(20% - 1rem);
        `;
      case "confirmPassword":
        return `
          flex: calc(20% - 1rem);
          `;
      default:
        return "";
    }
  }}
`;

const StyledField = styled(Field)`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  background-color: hsl(0, 0%, 90%);
  color: black;

  &:focus {
    background-color: hsl(0, 0%, 95%);
    color: black;
    border-color: var(--quaternary-color);
    box-shadow: 0 0 0 0.2rem hsla(313, 96%, 50%, 0.25);
  }
`;

const StyledButton = styled.button`
  background: #818181 100%;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  color: hsl(0, 0%, 98%);
  font-size: 1.3rem;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  border: none;
  cursor: pointer;
  width: 30%;

  &:hover {
    filter: brightness(90%);
    font-weight: 600;
    width: 31%;
  }
`;

const StyledErrorMessage = styled(ErrorMessage)`
  color: red;
  font-size: 0.8rem;
  margin-top: 0.5rem;
`;

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
        } else if (values.firstName.length < 5) {
          errors.firstName = "Nome precisa ter mais que 5 letras";
        }

        if (!values.lastName) {
          errors.lastName = "Obrigatório";
        } else if (values.lastName.length < 5) {
          errors.lastName = "Sobrenome precisa ter mais que 5 letras";
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
      <StyledForm>
        <FieldDiv $fieldType="name">
          <label htmlFor="firstName">Primeiro Nome:</label>
          <StyledField name="firstName" type="text" />
          <ErrorMessage name="firstName" />
        </FieldDiv>

        <FieldDiv $fieldType="name">
          <label htmlFor="lastName">Último Nome:</label>
          <StyledField name="lastName" type="text" />
          <ErrorMessage name="lastName" />
        </FieldDiv>

        <FieldDiv $fieldType="email">
          <label htmlFor="email">Email:</label>
          <StyledField name="email" type="email" />
          <ErrorMessage name="email" />
        </FieldDiv>

        <FieldDiv $fieldType="phone">
          <label htmlFor="phone">Telefone:</label>
          <StyledField name="phone" type="number" />
          <ErrorMessage name="phone" />
        </FieldDiv>

        <FieldDiv $fieldType="cpfCnpj">
          <label htmlFor="cpfCnpj">Cpf ou CNPJ:</label>
          <StyledField name="cpfCnpj" type="number" />
          <ErrorMessage name="cpfCnpj" />
        </FieldDiv>

        <FieldDiv $fieldType="password">
          <label htmlFor="password">Senha:</label>
          <StyledField name="password" type="string" />
          <ErrorMessage name="password" />
        </FieldDiv>

        <FieldDiv $fieldType="password">
          <label htmlFor="confirmPassword">Confirmar Senha:</label>
          <StyledField name="confirmPassword" type="string" />
          <ErrorMessage name="confirmPassword" />
        </FieldDiv>

        <StyledButton type="submit">Salvar</StyledButton>
      </StyledForm>
    </Formik>
  );
}
