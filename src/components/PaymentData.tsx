import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";

type Installments = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface PersonalDataProps {
  cardNumber: number;
  name: string;
  expirationDay: number;
  expirationMonth: number;
  cvv: number;
  numberOfInstallments: Installments;
}

interface PersonalDataErrors {
  cardNumber?: string;
  name?: string;
  expirationDay?: string;
  expirationMonth?: string;
  cvv?: string;
  numberOfInstallments?: string;
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
      case "cardNumber":
        return `
          flex: calc(50% - 1rem);
        `;
      case "name":
        return `
          flex: 100%;
        `;
      case "expirationDay":
        return `
          ${StyledField} {
            border-radius: 5px 0 0 5px;
            border-width: 1px 0px 1px 1px;
          }
        `;
      case "expirationMonth":
        return `
          ${StyledField} {
            border-radius: 0 5px 5px 0;
            border-width: 1px 1px 1px 0.5px;
          }
        `;
      case "cvv":
        return `
          flex: calc(20% - 1rem);
        `;
      case "numberOfInstallments":
        return `
          flex: calc(20% - 1rem);
          `;
      default:
        return "";
    }
  }}
`;

const MaturityDiv = styled.div`
  display: flex;
  flex: 30%;
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

export default function PaymentData() {
  const initialValues: PersonalDataProps = {
    cardNumber: 0,
    name: "",
    expirationDay: 0,
    expirationMonth: 0,
    cvv: 0,
    numberOfInstallments: 1,
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }}
      validate={(values) => {
        const errors: Partial<PersonalDataErrors> = {};

        if (!values.cardNumber) {
          errors.cardNumber = "Obrigatório";
        } else if (
          values.cardNumber.toString().length < 15 ||
          values.cardNumber.toString().length > 16
        ) {
          errors.cardNumber = "Digite um cartão válido";
        }

        if (!values.name) {
          errors.name = "Obrigatório";
        } else if (values.name.length < 5) {
          errors.name = "Nome precisa ter mais que 5 letras";
        }

        if (!values.expirationDay) {
          errors.expirationDay = "Obrigatório";
        } else if (values.expirationDay > 31 || values.expirationDay < 1) {
          errors.expirationDay = "Digite um dia válido";
        }

        if (!values.expirationMonth) {
          errors.expirationMonth = "Obrigatório";
        } else if (values.expirationMonth > 12 || values.expirationMonth < 1) {
          errors.expirationMonth = "Digite um mês válido";
        }

        if (!values.cvv) {
          errors.cvv = "Obrigatório";
        } else if (values.cvv.toString().length !== 3) {
          errors.cvv = "Digite um CVV válido";
        }

        if (!values.numberOfInstallments) {
          errors.numberOfInstallments = "Obrigatório";
        }

        return errors;
      }}
    >
      <StyledForm>
        <FieldDiv $fieldType="cardNumber">
          <label htmlFor="cardNumber">Número do Cartão:</label>
          <StyledField name="cardNumber" type="number" />
          <ErrorMessage name="cardNumber" />
        </FieldDiv>

        <FieldDiv $fieldType="name">
          <label htmlFor="name">Nome:</label>
          <StyledField name="name" type="text" />
          <ErrorMessage name="name" />
        </FieldDiv>

        <MaturityDiv>
          <FieldDiv $fieldType="expirationDay">
            <label htmlFor="expirationDay">Dia:</label>
            <StyledField name="expirationDay" type="number" />
            <ErrorMessage name="expirationDay" />
          </FieldDiv>
          <FieldDiv $fieldType="expirationMonth">
            <label htmlFor="expirationMonth">Mês:</label>
            <StyledField name="expirationMonth" type="number" />
            <ErrorMessage name="expirationMonth" />
          </FieldDiv>
        </MaturityDiv>

        <FieldDiv $fieldType="cvv">
          <label htmlFor="cvv">CVV:</label>
          <StyledField name="cvv" type="number" />
          <ErrorMessage name="cvv" />
        </FieldDiv>

        <FieldDiv $fieldType="numberOfInstallments">
          <label htmlFor="numberOfInstallments">Parcelas:</label>
          <StyledField as="select" name="numberOfInstallments">
            {[...Array(12)].map((_, index) => {
              const value = index + 1; // Valores de 1 a 12
              return (
                <option key={value} value={value}>
                  {value} parcela{value > 1 ? "s" : ""}
                </option>
              );
            })}
          </StyledField>
          <ErrorMessage name="numberOfInstallments" />
        </FieldDiv>
        <StyledButton type="submit">Salvar</StyledButton>
      </StyledForm>
    </Formik>
  );
}
