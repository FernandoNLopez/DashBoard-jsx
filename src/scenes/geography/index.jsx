import { Box } from "@mui/material";
import { tokens } from "../../theme";
import { useTheme } from "@mui/material";


import Header from "../../components/Header";
import GeoChart from "../../components/GeoChart";

const Geo = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px" >
          <Header title="Pie Chart" subtitle="Map Geography Chart" />
          <Box height="75vh" border={`1px solid ${colors.grey[100]}`} borderRadius="5px">
            <GeoChart  />
          </Box>
        </Box>
      )
  }
  
  export default Geo;
