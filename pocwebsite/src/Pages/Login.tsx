import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  TextField,
  Typography,
  makeStyles,
  Grid,
} from "@material-ui/core";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { RouteComponentProps } from "react-router-dom";
import "../Styles/Login.css";
import { object, string } from "yup";


const useStyles = makeStyles({
  button: {
    background: 'rgba(241, 103, 5)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(241, 103, 5), .3)',
  },
});


interface Props extends RouteComponentProps {}

export const Login: React.FC<Props> = ({ history }) => {
  const classes = useStyles();
  return (
    <Grid container justify = "center">
    <Card className="LoginCard">
      <CardHeader title="Login" className="Cardheader" />
      <CardContent>
        <Formik
          initialValues={{
            Email: "",
            APIKey: "",
          }}
          validationSchema={object({
            Email: string().required().email(),
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
                  name="Email"
                  type="Email"
                  label="Email"
                  as={TextField}
                />
              </div>
              <ErrorMessage name ="Email">
                {message => (
                  <Typography color="error">{message}</Typography>
                )}
              </ErrorMessage>
              <div>
                <Field 
                name="APIKey" 
                label="API-Key" 
                as={TextField} />
                <ErrorMessage name ="APIKey">
                {message => (
                  <Typography color="error">{message}</Typography>
                )}
              </ErrorMessage>
              </div>
              <Button
                className={classes.button}
                type="submit"
                variant="contained"
                disabled={isSubmitting}
                startIcon={
                  isSubmitting ? <CircularProgress size="0.8rem" /> : undefined
                }
              >
                {isSubmitting ? "Submitting" : "Login"}
              </Button>
            </Form>
          )}
          
        </Formik>
      </CardContent>
    </Card>
    </Grid>
  );
};
export default Login;
