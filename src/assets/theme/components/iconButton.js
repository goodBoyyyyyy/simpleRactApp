/**
=========================================================
* Example - v2.1.0
=========================================================

* 
* 



 =========================================================

* 
*/

// Example Base Styles
import colors from "assets/theme/base/colors";

const { transparent } = colors;

export default {
  styleOverrides: {
    root: {
      "&:hover": {
        backgroundColor: transparent.main,
      },
    },
  },
};
