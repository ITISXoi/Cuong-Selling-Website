import {
  ILocationResponse,
  useGetKeyWordList,
  useLocationList,
  useTemplateCrawlList,
} from "@/api/filter";
import SelectField from "@/form-fields/SelectField";
import { setFilter } from "@/store/ducks/job/slice";
import { routeEnums } from "@/types/routes";
import { HOURS } from "@/utils/constants";
import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { useLogin } from "hooks/useLogin";
import { useAppDispatch } from "hooks/useRedux";
import { useRouter } from "next/router";
import { FormProvider, useForm } from "react-hook-form";

export const Filter = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { data: listLocation = [] } = useLocationList({
    limit: 50,
  });

  const { data: listTemplate = [] } = useTemplateCrawlList({
    limit: 15,
  });

  const { data: { list: listKeyWord = [] } = {} } = useGetKeyWordList({
    limit: 10,
  });

  const methods = useForm({
    mode: "onSubmit",
    defaultValues: {},
  });

  const { onClick } = useLogin();

  const formSubmitHandler = async (e: any) => {
    dispatch(setFilter({ ...e }));
    router.push(routeEnums.jobs);
  };

  return (
    <Container maxWidth="md">
      <Card sx={{ p: 2, pt: 4, transform: "translateY(-50%)" }}>
        <CardContent>
          <Grid container columns={12} rowSpacing={2}>
            <Grid md={12} xs={12} item>
              <FormProvider {...methods}>
                <form
                  onSubmit={methods.handleSubmit(formSubmitHandler)}
                  autoComplete="off"
                >
                  <Stack
                    direction={{ md: "row", xs: "column" }}
                    spacing={2}
                    mb={2}
                  >
                    <SelectField
                      label="Location"
                      name="locationId"
                      formControlProps={{ fullWidth: true }}
                    >
                      {listLocation.map((item: ILocationResponse) => (
                        <MenuItem key={item.id} value={item.id}>
                          {item.name}
                        </MenuItem>
                      ))}
                    </SelectField>
                    <SelectField
                      label="Websites"
                      name="templateId"
                      formControlProps={{ fullWidth: true }}
                    >
                      {listTemplate.map((item) => (
                        <MenuItem key={item.id} value={item.id}>
                          {item.name}
                        </MenuItem>
                      ))}
                    </SelectField>
                    <SelectField
                      label="Hours"
                      name="hours"
                      formControlProps={{ fullWidth: true }}
                    >
                      {HOURS.map((item) => (
                        <MenuItem key={item.id} value={item.id}>
                          {item.name}
                        </MenuItem>
                      ))}
                    </SelectField>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="secondary"
                      onClick={onClick}
                    >
                      Find Job
                    </Button>
                  </Stack>
                </form>
              </FormProvider>
              <Stack direction="row" spacing={2} alignItems="center">
                <Typography fontWeight={500}>Popular Searches:</Typography>
                <Typography>
                  {listKeyWord.map((item) => (
                    <>{`${item.name},  `}</>
                  ))}
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};
