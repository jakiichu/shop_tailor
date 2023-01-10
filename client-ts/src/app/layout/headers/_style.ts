import {Box, Button, styled, TextField, Typography} from "@mui/material";
import {Search} from "@mui/icons-material";
import DehazeIcon from "@mui/icons-material/Dehaze";
const LIST_COMPONENTS = {
    background: styled(Box)`
      background-color: white;
      color: black;
    `,
    logo: styled("img")`
      width: 200px;
      height: auto;
    `,
    Category: styled(Button)`
      color: #FFFFFF;
      background: #3A3738;
      border-radius: 12px;
      height: 50px;

      &:hover {
        background: #3A3738;
      }

      margin-right: 20px;
    `,
    TextSearch:styled(Box)`
      background: #FFFFFF;
      border: 1px solid #3A3738;
      border-radius: 12px;
      padding-left: 20px;
      height: 50px;
      width: 40%;
    `,
    InvisibleTextField:styled("input")`
      display: inline-flex;
      background: transparent;
      border: none;
      font-family: "Roboto","Helvetica","Arial",sans-serif;
      width: 89%;
      font-size: 1.25rem;
      position: relative;
      left: 5px;
      &:hover,&:active,&:focus {
        background: transparent;
        border: none;
        outline-offset: 0;
        outline: 0;
      }
    `,
    SearchIcon:styled(Search)`
      position: relative;
      top: 10px;
      display: inline-flex;
      width:30px;
      height: auto;
    `,
    DehazeIcon:styled(DehazeIcon)`
    margin-left: 5px;
      margin-right: 5px;
    `
}

export {LIST_COMPONENTS}
