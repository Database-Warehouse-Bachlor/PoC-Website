import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  TextField,
} from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import React from "react";
import { RouteComponentProps } from "react-router-dom";
import "../Styles/Login.css";
import { object, number, string } from "yup";

interface Props extends RouteComponentProps {}

export const Login: React.FC<Props> = ({ history }) => {
  return (
    <Card>
      <CardHeader title="Login" className="Cardheader" />
      <CardContent>
        <Formik
          initialValues={{
            Orgnr: "",
            APIKey: "",
          }}
          validationSchema={object({
            Orgnr: string().required().min(9, "Must be exactly 9 digits").max(9, "Must be exactly 9 digits"),
            APIKey: string().required(),
          })}
          onSubmit={async (values) => {
            /** A timer of 3 sec that disables the submit button - Somewhat prevents serverspam */
            return new Promise<void>((res) => {
              setTimeout(() => {
                //API call & checks
                console.log("my values", values);
                history.push("/Dashboard");

                res();
              }, 3000);
            });
          }}
        >
          {({ values, errors, isSubmitting }) => (
            <Form>
              <div>
                <Field
                  name="Orgnr"
                  type="number"
                  label="Orgnr"
                  as={TextField}
                />
              </div>
              <div>
                <Field name="APIKey" label="API-Key" as={TextField} />
              </div>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                startIcon={
                  isSubmitting ? <CircularProgress size="0.8rem" /> : undefined
                }
              >
                {isSubmitting ? "Submitting" : "Login"}
              </Button>
              <pre>{JSON.stringify({values, errors}, null, 4)}</pre>
            </Form>
          )}
          
        </Formik>
      </CardContent>
    </Card>
  );
};
export default Login;
