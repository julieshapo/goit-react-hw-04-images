import { Formik } from 'formik';
import { Button, Field, Form } from './SearchBar.styled';
import { ReactComponent as SearchIcon } from '../icons/search.svg';

export const SearchBar = ({ onSubmit }) => {
  const handleSubmit = async (values, actions) => {
    await onSubmit(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Formik initialValues={{ name: '' }} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <Button
            type="submit"
            disabled={isSubmitting}
            aria-label="Search images"
          >
            <SearchIcon width="20" height="20" />
          </Button>
          <Field
            name="name"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      )}
    </Formik>
  );
};
