import {Card, CardContent, CardHeader} from '@material-ui/core'
import {Form, Formik} from 'formik'
import React from 'react'

interface Values {
    orgNr: String;
    APIKey: String;
  }
interface Props {
    onSubmit: (values: Values) => void;
}

export const Login: React.FC<Props> = () => {
    return(
        <Card>
            <CardHeader title="Login"/>
            <CardContent>
                <Formik initialValues={{orgNr: "", APIKey= "",}} 
                onSubmit{(data, {setSubmitting}) => {}}>
                {({ values, errors}) =>(
                    <Form>

                    </Form>
                )}
                </Formik>
            </CardContent>
        </Card>
    )
}
