import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { Button, FormField, Label } from 'semantic-ui-react';
import * as Yup from "yup";
import FatihTextInput from '../utilities/FatihTextInput';
export default function ProductAdd() {
    const initialValues = { productName: "", unitPrice: 10 }
    const schema = Yup.object({
        productName: Yup.string().required("Ürün adı zorunlu"),
        unitPrice: Yup.number().required("Ürün fiyatı zorunlu")
    })
    return (
        
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                <Form className='ui form'>
                    <FatihTextInput name = "productName" placeholder ="Ürün Adı"/>
                    <FatihTextInput name = "unitPrice" placeholder ="Ürün Fiyatı"/>
                    <Button color='green' type ="submit">EKLE</Button>
                </Form>
            </Formik>
        
    );
}
