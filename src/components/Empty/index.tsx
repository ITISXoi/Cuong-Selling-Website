import { InfoOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export const Empty = () => {
  return (
    <>
      <Box
        display="flex"
        gap={2}
        sx={{ flexDirection: "column", alignItems: "center" }}
      >
        <InfoOutlined style={{ fontSize: 60 }} color="secondary" />
        <Typography variant="h4" color="primary">
          Data not found
        </Typography>
      </Box>
    </>
  );
};
