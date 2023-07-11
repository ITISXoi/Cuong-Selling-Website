import TextField from "@/form-fields/TextField";
import { getLoginState, toggleLoginModal } from "@/store/ducks/auth/slice";
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
}

const schema = yup.object().shape({
  email: yup.string().email("Email must be a valid email").required(),
  password: yup.string().required(),
});

export const LoginModal = () => {
  const open = useAppSelector(getLoginState);
  const dispatch = useAppDispatch();
  const { updateIsAuthenticator } = useLogin();

  const onClose = () => {
    dispatch(toggleLoginModal());
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
        style: { borderRadius: 10, padding: 5 },
      }}
    >
      <DialogTitle textAlign="center" id="alert-dialog-title">
        <Typography variant="h4" fontWeight={500} color="primary.main">
          Sign In
        </Typography>
        <Typography my={1}>
          Sign In and get access to all the features.
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
          Sign In
        </Button>
      </DialogActions>
    </Dialog>
  );
};
