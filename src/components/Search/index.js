import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Field, ErrorMessage, Form as FormikForm, Formik } from 'formik';
import * as yup from 'yup';

import { searchRequest } from '~/store/modules/video/actions';

import Button from '~/components/Button';
import { Container, FormMain } from './styles';

const validations = yup.object().shape({
    search: yup.string().min(2, 'Minímo de 2 letras').required('Campo vazio'),
});

export default function Search({ placeholder }) {
    const dispatch = useDispatch();

    const handleDispatch = ({ search }) => {
        dispatch(searchRequest(search));
    };

    return (
        <>
            <Container>
                <Formik
                    initialValues={{ search: '' }}
                    validationSchema={validations}
                    onSubmit={handleDispatch}
                >
                    <FormikForm className="FormikForm">
                        <FormMain>
                            <Field
                                type="text"
                                name="search"
                                placeholder={placeholder}
                            />
                            <Button name="Buscar" />
                        </FormMain>
                        <span>
                            <ErrorMessage
                                className="ErrorMessage"
                                name="search"
                                component="p"
                            />
                        </span>
                    </FormikForm>
                </Formik>
            </Container>
        </>
    );
}

Search.propTypes = {
    placeholder: PropTypes.string.isRequired,
};
