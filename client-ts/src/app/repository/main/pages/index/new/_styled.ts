import {Button, Grid, styled, Typography} from "@mui/material";
import Box from "@mui/material/Box";

const LIST_COMPONENTS = {
    marginCardGroup: styled(Box)`
        margin-top: 30px;
      text-align: right;
    `,
    Button: styled(Button)`
      margin-top: 30px;
      margin-bottom: 30px;
      background-color: #D2497F;
    &:hover {
      background-color: #D2497F;
    }
    `,
    MainHeader:styled(Typography)`
      font-family: 'Comfortaa';
      font-style: normal;
      text-align: left;
      font-weight: 700;
      font-size: 48px;
      line-height: 56px;
      letter-spacing: -0.015em;
    `
}

export {LIST_COMPONENTS}
