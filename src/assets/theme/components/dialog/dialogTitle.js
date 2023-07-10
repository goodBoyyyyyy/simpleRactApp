/**
=========================================================
* Example - v2.1.0
=========================================================

* 
* 



 =========================================================

* 
*/

// Example base styles
import typography from "assets/theme/base/typography";

// Example helper functions
import pxToRem from "assets/theme/functions/pxToRem";

const { size } = typography;

export default {
  styleOverrides: {
    root: {
      padding: pxToRem(16),
      fontSize: size.xl,
    },
  },
};
