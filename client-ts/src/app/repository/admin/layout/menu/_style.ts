import {Box, Grid, styled} from "@mui/material";
const LIST_COMPONENTS = {
    backgroundMenu: styled(Box)`
      position: fixed;
      width: 10%;
      height: 100%;
      left: 0;
      top: 0;

      background: #FFFFFF;
      border: 1px solid #CFCECF;
    `,
    logo:styled("img")`
      width: 100%;
      height: auto;
      margin-top: 30px;
    `,
    wrapper:styled(Grid)`
padding-left: 3%;
      
    `,
    wrappedText:styled("p")`
      font-size: 1rem;
      cursor: pointer;
    `,
    mainPage: styled(Box)`
      position: fixed;
      width: 90%;
      height: 100%;
      left: 10%;
      top: 0;

      padding-left: 2%;
      padding-right: 2%;
    `,
}

export {LIST_COMPONENTS}
