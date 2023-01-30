import {Grid, styled, Typography} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const LIST_COMPONENTS = {
    backgroundCard: styled(Grid)`
      text-align: left;
      width: 24%; 
      display: inline-block;
      margin-left: 1%;
    `,
    forSale: styled(Typography)`
      display: inline-block;
      color: #D2497F;
      font-weight: 500;
      font-size: 24px;
      line-height: 115.84%;
    `,
    oldPrice:styled('s')`
      padding-left: 5px;
      display: inline-block;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: #9F9C9F;
    `,
    cartIcon: styled(ShoppingCartIcon)`
      float: right;
      display: inline-block;
    `
}

export {LIST_COMPONENTS}
