import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import IconButton from "@/components/Icon/IconButton";

interface Action {
  actionId: number | string;
  actionName: string;
  sets: number;
  countsOrMinutes: number;
}

interface RoutineInputProps {
  label: string;
  placeholder: string;
  value: string | number;
  index?: number;
  isSelect?: boolean;
  isAction?: boolean;
  isSmall?: boolean;
  isToggleOpen?: boolean;
  setIsToggleOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  onClickDelete?: () => void;
  onClickHandler?: () => void;
  setRoutineName?: (name: string) => void;
  setAction?: (index: number, updatedAction: Partial<Action>) => void;
}

const RoutineInput = ({
  label,
  placeholder,
  value,
  index = 0,
  isSelect = false,
  isAction = false,
  isSmall = false,
  isToggleOpen = true,
  setIsToggleOpen = () => {},
  onClickDelete = () => {},
  onClickHandler = () => {},
  setRoutineName = () => {},
  setAction = () => {}
}: RoutineInputProps) => {
  const onClickToggle = () => {
    setIsToggleOpen(!isToggleOpen);
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (setRoutineName) {
      setRoutineName(value);
    }

    if (setAction) {
      setAction(index, { actionName: value });
    }
  };

  return (
    <FormControl
      variant="standard"
      style={{ position: "relative" }}
      onClick={isSelect ? onClickHandler : undefined}
    >
      <CustomInputLabel
        shrink
        htmlFor="bootstrap-input"
        $isToggleOpen={isToggleOpen}
        $isSmall={isSmall}
      >
        {label}
        {isAction && (
          <>
            <IconButton
              name="dropUp"
              color="text"
              size="24px"
              className="drop-button"
              onClick={onClickToggle}
            />
            <p onClick={onClickDelete}>삭제하기</p>
          </>
        )}
      </CustomInputLabel>

      <BootstrapInput
        placeholder={placeholder}
        id="bootstrap-input"
        value={value === 0 ? "" : value}
        onChange={handleInputChange}
        endAdornment={
          isSelect ? (
            <IconWrapper>
              <IconButton name="dropDown" color="gray3" size="24px" />
            </IconWrapper>
          ) : null
        }
        inputProps={{
          readOnly: isSelect
        }}
        isSelect={isSelect}
        isSmall={isSmall}
      />
    </FormControl>
  );
};

interface BootstrapInputProps {
  isSelect: boolean;
  isSmall: boolean;
}

const BootstrapInput = styled(InputBase, {
  shouldForwardProp: (prop) => prop !== "isSelect" && prop !== "isSmall"
})<BootstrapInputProps>(({ theme, isSelect, isSmall }) => ({
  marginLeft: 10,

  "label + &": {
    marginTop: theme.spacing(3)
  },
  "& .MuiInputBase-input": {
    borderRadius: 15,
    position: "relative",
    backgroundColor: "#35383F",
    border: "1px solid",
    borderColor: "#252932",
    color: "#FFFFFF",
    fontSize: "3.5vw",
    width: isSmall ? "56vw" : "70vw",
    height: "8vw",
    padding: "5px 5vw",
    paddingRight: "10vw",
    marginLeft: isSmall ? "14vw" : "0px",
    "@media (min-width: 600px)": {
      fontSize: "20px",
      width: isSmall ? "440px" : "480px",
      height: "60px",
      padding: "5px 20px",
      paddingRight: "40px",
      marginLeft: isSmall ? "40px" : "0px"
    },
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow"
    ]),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),

    "&::placeholder": {
      color: "#777C89",
      opacity: 0.93
    },

    "&:focus": {
      borderColor: "#0075FF"
    },

    ...(isSelect && {
      cursor: "pointer",
      pointerEvents: "none"
    })
  },

  ...(isSelect && {
    cursor: "pointer"
  })
}));

const CustomInputLabel = styled(InputLabel, {
  shouldForwardProp: (prop) => prop !== "$isToggleOpen" && prop !== "$isSmall" // $isToggleOpen이 DOM으로 전달되지 않도록 설정
})<{ $isToggleOpen: boolean; $isSmall: boolean }>(
  ({ $isToggleOpen, $isSmall }) => ({
    display: "flex",
    width: "100%",
    color: "#9EA3B2",
    fontSize: "4vw",
    fontWeight: "bold",
    marginLeft: $isSmall ? "11vw" : "1vw",
    "@media (min-width: 600px)": {
      fontSize: "18px",
      marginLeft: $isSmall ? "40px" : "0px"
    },
    "&.Mui-focused": {
      color: "#9EA3B2"
    },
    p: {
      margin: "0 1vw",
      color: "#959AA8",
      cursor: "pointer",
      fontSize: "3.5vw",
      "@media (min-width: 600px)": {
        margin: "0 10px",
        fontSize: "14px"
      }
    },
    svg: {
      fill: $isToggleOpen ? "#959AA8" : "#0075FF", // 회전 후 색상 변경
      marginLeft: "1vw",
      transition: "fill 0.3s ease-in-out", // 색상 변경 애니메이션
      "@media (min-width: 600px)": {
        marginLeft: "10px"
      }
    },
    ".drop-button": {
      transform: $isToggleOpen ? "rotateX(0deg)" : "rotateX(180deg)", // 3D 회전
      transition: "transform 0.3s ease-in-out",
      transformStyle: "preserve-3d", // 3D 회전을 유지하도록 설정
      perspective: "1000px" // 입체적인 효과를 위한 perspective 설정
    }
  })
);

const IconWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  position: "absolute",
  top: "50%",
  right: "5%",
  transform: "translateY(-50%)",
  pointerEvents: "none"
});

export default RoutineInput;
