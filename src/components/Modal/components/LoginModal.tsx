import TextField from "@/form-fields/TextField";
import {
  getLoginState,
  setIsAuthenticator,
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
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../../../firebase";
import { useRouter } from "next/router";

interface IFormInput {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email("Email must be a valid email").required(),
  password: yup.string().required(),
});

export const LoginModal = () => {
  const router = useRouter();
  const open = useAppSelector(getLoginState);
  const dispatch = useAppDispatch();
  const { updateIsAuthenticator } = useLogin();

  const onClose = () => {
    dispatch(toggleLoginModal());
  };

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((data: any) => {
        toast.success("Login Success!");
        dispatch(setIsAuthenticator(true));
        dispatch(toggleLoginModal());
        router.push("/");
        setCookies(COOKIES.token, data.user.accessToken);
        setCookies(COOKIES.email, data.user.email);
      })
  };

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
  const onSignup = () => {
    dispatch(toggleSignupModal(true));
    dispatch(toggleLoginModal());
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
          <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
            <Stack flexDirection={"row"} gap={1}>
              <Typography
                color="black"
                textAlign="center"
                fontSize={14}
                mt={2}
                onClick={() => {
                  signIn();
                }}
              >
                {"Don't have account?"}
              </Typography>
              <Typography
                color="secondary.main"
                textAlign="center"
                fontSize={14}
                mt={2}
                style={{ textDecoration: "underline", cursor: "pointer" }}
                onClick={() => onSignup()}
              >
                Signup now
              </Typography>
            </Stack>
          </Stack>
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
