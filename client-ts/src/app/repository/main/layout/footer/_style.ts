import {Grid, styled} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
const LIST_COMPONENTS = {
    GridItem:styled(Grid)`
      padding-top: 15px;
      padding-right: 20%;
    `,
    Wrapper:styled("div")`
      width: 100%;
    `,
    background: styled("div")`
      padding-top: 15px;
      background-color: #3A3738;
    `,
    Text:styled('p')`
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 22px;
      color: #FFFFFF;
    `,
    InstagramIcon:styled(InstagramIcon)`
      position: relative;
      top: 5px;
    `,
    GridContainer:styled(Grid)`
      padding-top: 10px;
      padding-bottom: 10px;
    `
}

export {LIST_COMPONENTS}
