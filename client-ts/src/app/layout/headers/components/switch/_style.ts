import {Box, styled} from "@mui/material";
import {Person, Pets} from "@mui/icons-material";

const SWITCH_COMPONENTS = {

    BorderSwitch: styled(Box)`
      margin-left: 20px;
      border: 1px solid black;
      border-radius: 10px;
    `,
    PersonSwitch: styled(Person)`
      position: relative;
      top: 7px;
    `,
    PetsSwitch: styled(Pets)`
      position: relative;
      top: 7px;
    `

}
export {SWITCH_COMPONENTS}