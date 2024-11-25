export type ColorKey =
  | "background"
  | "box"
  | "border"
  | "primary"
  | "secondary"
  | "third"
  | "error"
  | "likes"
  | "review"
  | "text"
  | "gray1"
  | "gray2"
  | "gray3"
  | "blue"
  | "lightTransparentBlack";

export type FontSize = "large" | "medium" | "small";
export type FontWeight = "bold" | "normal";
export type ButtonSize =
  | "desktop"
  | "mobile"
  | "mini_desktop"
  | "mini_mobile"
  | "large"
  | "small"
  | "full"
  | "mini"
  | "super-mini"
  | "full-sharp"
  | "medium";
export type CustomButtonType =
  | "contained"
  | "outlined"
  | "containedError"
  | "containedCancel";
export type SportChipType = "small";
export type ProfileImageSize = "mini" | "small" | "medium" | "large";
export type ModalSize = "default";
export type PaddingSize = "default";

export type TitleSize = "t1" | "t2";
export type BodySize = "b1" | "b2" | "b3";

export type Sports = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface Theme {
  color: Record<ColorKey, string>;
  fontSize: Record<FontSize, string>;
  fontWeight: Record<FontWeight, string>;
  button: {
    [key in ButtonSize]: {
      padding: string;
      height: string;
      width?: string;
    };
  };
  borderRadius: {
    default: string;
  };
  boxShadow: string;
  profileImage: {
    [key in ProfileImageSize]: {
      width: string;
      height: string;
    };
  };
  modal: {
    [key in ModalSize]: {
      width: string;
    };
  };
  padding: {
    [key in PaddingSize]: string;
  };
  titleSize: {
    [key in TitleSize]: {
      fontSize: string;
      lineHeight: string;
      bold: string;
    };
  };
  bodySize: {
    [key in BodySize]: {
      fontSize: string;
      lineHeight: string;
      bold: string;
    };
  };
  buttonVariant: {
    [key in CustomButtonType]: {
      backgroundColor: string;
      color: string;
      border: string;
      borderHoverColor: string;
    };
  };
  sports: {
    [key in Sports]: string;
  };
  sportChip: {
    [key in SportChipType]: {
      fontSize: string;
      fontWeight: string;
      lineHeight: string;
      letterSpacing: string;
      padding: string;
      borderRadius: string;
    };
  };
}

export const theme: Theme = {
  color: {
    background: "#181A20",
    box: "#F8F9FA",
    border: "#BDBDBD",
    primary: "#0075FF",
    secondary: "#9CABEF",
    third: "#AECDFF",
    error: "#F22455",
    likes: "#ABDEE6",
    review: "#FEAF29",
    text: "#FFFFFF",
    gray1: "#E1E1E1",
    gray2: "#D9D9D9",
    gray3: "#959AA8",
    blue: "#0066FF",
    lightTransparentBlack: "rgba(0, 0, 0, 0.3)"
  },
  fontSize: {
    large: "20px",
    medium: "16px",
    small: "12px"
  },
  fontWeight: {
    bold: "700",
    normal: "400"
  },
  button: {
    desktop: {
      padding: "16px",
      height: "60px",
      width: "500px"
    },
    mobile: {
      padding: "16px",
      height: "12vw",
      width: "90vw"
    },
    mini_desktop: {
      padding: "16px",
      height: "80px",
      width: "250px"
    },
    mini_mobile: {
      padding: "16px",
      height: "18vw",
      width: "44vw"
    },
    large: {
      padding: "16px",
      height: "60px",
      width: "342px"
    },
    small: {
      padding: "16px",
      height: "32px",
      width: "105px"
    },
    medium: {
      padding: "20px",
      height: "60px",
      width: "140px"
    },
    full: {
      padding: "16px",
      height: "60px",
      width: "100%"
    },
    mini: {
      padding: "16px",
      height: "32px",
      width: "86px"
    },
    "super-mini": {
      padding: "3px",
      height: "auto",
      width: "auto"
    },
    "full-sharp": {
      padding: "7px",
      height: "auto",
      width: "auto"
    }
  },
  borderRadius: {
    default: "10px"
  },
  boxShadow: "0 10px 40px 0 rgba(0, 0, 0, 0.5)",
  profileImage: {
    mini: {
      width: "60px",
      height: "60px"
    },
    small: {
      width: "86px",
      height: "86px"
    },
    medium: {
      width: "114px",
      height: "114px"
    },
    large: {
      width: "316px",
      height: "140px"
    }
  },
  modal: {
    default: {
      width: "352px"
    }
  },
  padding: {
    default: "50px"
  },
  titleSize: {
    t1: {
      fontSize: "20px",
      lineHeight: "36px",
      bold: "800"
    },
    t2: {
      fontSize: "16px",
      lineHeight: "24px",
      bold: "800"
    }
  },
  bodySize: {
    b1: {
      fontSize: "16px",
      lineHeight: "16px",
      bold: "400"
    },
    b2: {
      fontSize: "12px",
      lineHeight: "16px",
      bold: "400"
    },
    b3: {
      fontSize: "16px",
      lineHeight: "32px",
      bold: "600"
    }
  },
  buttonVariant: {
    contained: {
      backgroundColor: "#0075FF",
      color: "#FFFFFF",
      border: "none",
      borderHoverColor: "#0075FF"
    },
    outlined: {
      backgroundColor: "transparent",
      color: "#ffffff",
      border: "1px solid #0075FF",
      borderHoverColor: "#0075FF"
    },
    containedError: {
      backgroundColor: "#e23636",
      color: "#ffffff",
      border: "1px solid #e23636",
      borderHoverColor: "#e23636"
    },
    containedCancel: {
      backgroundColor: "#252932",
      color: "#9EA3B2",
      border: "none",
      borderHoverColor: "#808080"
    }
  },
  sports: {
    1: "#F0C40E",
    2: "#B6D9DD",
    3: "#8369C2",
    4: "#4D8AA6",
    5: "#D1AA8D",
    6: "#F85F51",
    7: "#AAC77A",
    8: "#FFC1C2",
    9: "#2E4B77",
    10: "#B2CBE7",
    11: "#0496D1",
    12: "#5A4097"
  },
  sportChip: {
    small: {
      fontSize: "10px",
      fontWeight: "400",
      lineHeight: "15px",
      letterSpacing: "-0.25px",
      padding: "1.5px 10px",
      borderRadius: "20px"
    }
  }
};
