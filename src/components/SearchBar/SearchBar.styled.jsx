import styled from 'styled-components';
import { Form as FormikForm, Field as FormikField } from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  overflow: hidden;
`;

export const Field = styled(FormikField)`
  display: inline-block;
  width: 100%;
  height: 40px;
  font-family: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding: 10px;
  border-radius: 3px;

  ::placeholder {
    font-family: inherit;
    font-size: 18px;
  }
`;

export const Button = styled.button`
  display: inline-block;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 0;
  border-radius: 3px;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  :hover {
    opacity: 1;
  }
`;
