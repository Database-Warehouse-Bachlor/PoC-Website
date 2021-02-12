import {Card, CardContent, CardHeader} from '@material-ui/core'
import {Form, Formik} from 'formik'
import React from 'react'

interface Props {}

export const Login: React.FC<Props> = () => {
    return(
        <Card>
            <CardHeader title="Login"/>
            <CardContent>
                <Formik initialValues={{}}
                onSubmit{() => {}}
                >
                </Formik>
            </CardContent>
        </Card>
    )
}
