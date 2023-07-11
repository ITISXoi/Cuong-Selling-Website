import { ILocationResponse, useLocationList } from "@/api/filter";
import { setFilter } from "@/store/ducks/job/slice";
import { routeEnums } from "@/types/routes";
import { timeFormatter } from "@/utils/dayjs";
import { LocationOnOutlined } from "@mui/icons-material";
import { Container, Grid, Stack, Typography } from "@mui/material";
import { useLogin } from "hooks/useLogin";
import { useAppDispatch } from "hooks/useRedux";
import { useRouter } from "next/router";
import { BoxItem, Image, Label } from "./styled";

const Item = ({ item }: { item: ILocationResponse }) => {
  const { name, logoUrl, updatedAt } = item;
  const formatDay = timeFormatter(updatedAt);

  return (
    <BoxItem>
      <Stack>
        <Stack display="flex" justifyContent="space-between" direction="row">
          <Image src={logoUrl} alt="man" />
          <div>
            <Label>New</Label>
          </div>
        </Stack>
        <Typography variant="h5" mt={3}>
          {item.numberNew} Jobs
        </Typography>
        <Stack
          display="flex"
          justifyContent="space-between"
          direction="row"
          mt={1}
        >
          <Stack display="flex" direction="row" alignItems="center">
            <LocationOnOutlined style={{ fontSize: 16 }} /> {name}
          </Stack>
          <Typography fontSize={14}>{formatDay}</Typography>
        </Stack>
      </Stack>
    </BoxItem>
  );
};

export const Location = () => {
  const { onClick, isAuthenticator } = useLogin();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { data: listLocation = [] } = useLocationList({ limit: 50 });

  const handleLocation = (item: ILocationResponse) => {
    if (isAuthenticator) {
      dispatch(setFilter({ locationId: item.id as number, news: item.name }));
      router.push(routeEnums.jobs);
    } else onClick();
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" mb={4} textAlign="center">
        Location
      </Typography>
      <Grid container columns={12} spacing={3}>
        {listLocation.map((item: ILocationResponse, index: number) => (
          <Grid
            item
            md={4}
            xs={12}
            key={index}
            onClick={() => {
              handleLocation(item);
            }}
          >
            <Item item={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
