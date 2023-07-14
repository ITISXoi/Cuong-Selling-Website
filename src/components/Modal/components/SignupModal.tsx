import TextField from "@/form-fields/TextField";
import {
  getSignupState,
  toggleLoginModal,
  toggleSignupModal,
} from "@/store/ducks/auth/slice";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import { useGoogleLogin } from "@react-oauth/google";
import { useAppDispatch, useAppSelector } from "hooks/useRedux";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { COOKIES, setCookies } from "@/utils/cookies";
import { useLogin } from "hooks/useLogin";
import { useMutation } from "react-query";
import { ILoginByPasswordResponse, loginByPassword } from "@/api/user";
import { IError } from "@/api/types";
import toast from "react-hot-toast";

interface IFormInput {
  email: string;
  password: string;
  confirmPassword: string;
}

const schema = yup.object().shape({
  email: yup.string().email("Email must be a valid email").required(),
  password: yup.string().required(),
  confirmPassword: yup
    .string()
    .test(
      "not-match",
      "The confirm password must match the password you entered",
      function (val) {
        const password = this.parent.password;
        return val === password;
      }
    )
    .required(),
});

export const SignupModal = () => {
  const open = useAppSelector(getSignupState);
  const dispatch = useAppDispatch();
  const { updateIsAuthenticator } = useLogin();
  const onClose = () => {
    dispatch(toggleLoginModal());
    dispatch(toggleSignupModal());
  };

  const signIn = useGoogleLogin({
    flow: "auth-code",
    onSuccess: () => {
      console.log("Logged in successfully!");
    },
    onError: () => {
      console.log("Error in successfully!");
    },
  });

  const { mutate } = useMutation(loginByPassword, {
    onSuccess: (data: ILoginByPasswordResponse) => {
      setCookies(COOKIES.token, data.token);
      updateIsAuthenticator();
    },
    onError: (e: IError) => {
      toast.error(e.meta.message);
    },
  });

  const methods = useForm<IFormInput>({
    mode: "onSubmit",
    resolver: yupResolver(schema),
    defaultValues: {},
  });
  const formSubmitHandler = async (e: any) => {
    mutate(e);
  };
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        style: { borderRadius: 10, padding: 5, width: "500px" },
      }}
    >
      <DialogTitle textAlign="center" id="alert-dialog-title">
        <Typography variant="h4" fontWeight={500} color="primary.main">
          Sign Up
        </Typography>
        <Typography my={1}>
          Sign Up and get access to all the features.
        </Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(formSubmitHandler)}
              autoComplete="new-password"
            >
              <Stack>
                <TextField
                  sx={{ mt: 4 }}
                  name="email"
                  label={"Email"}
                  placeholder={"Email"}
                />
                <TextField
                  sx={{ mt: 4 }}
                  name="password"
                  label={"Password"}
                  placeholder={"Password"}
                  type="password"
                />
                <TextField
                  sx={{ mt: 4 }}
                  name="confirmPassword"
                  label={"Confirm Password"}
                  placeholder={"Confirm Password"}
                  type="password"
                />
              </Stack>
            </form>
          </FormProvider>
          <Typography
            color="secondary.main"
            textAlign="center"
            fontSize={14}
            mt={2}
            style={{ textDecoration: "underline", cursor: "pointer" }}
            onClick={() => {
              signIn();
            }}
          >
            Login with google
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" color="primary" onClick={onClose}>
          Cancel
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => methods.handleSubmit(formSubmitHandler)()}
          autoFocus
          type="button"
        >
          Sign Up
        </Button>
      </DialogActions>
    </Dialog>
  );
};
