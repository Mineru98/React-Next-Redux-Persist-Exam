import { createTheme } from "@mui/material/styles";
import { SxProps, Theme as STheme } from "@mui/system";
import { makeStyles, createStyles } from "@mui/styles";

// Create a theme instance.
export const theme = createTheme({
	palette: {
		background: {
			default: "#ffffff",
		},
		success: {
			main: "#4caf50",
		},
		error: {
			main: "#f44336",
		},
	},
});

// export const theme = createTheme({
// 	palette: {
// 		primary: {
// 			main: "#66A091",
// 		},
// 		secondary: {
// 			main: "#776b61",
// 		},
// 		background: {
// 			default: "#ffffff",
// 		},
// 		success: {
// 			main: "#4caf50",
// 		},
// 		error: {
// 			main: "#f44336",
// 		},
// 	},
// });

export type Theme = typeof theme;

export const FabSx: SxProps<STheme> = {
	position: "fixed",
	bottom: theme.spacing(4),
	right: theme.spacing(4),
};

export const AvatarSx: SxProps<STheme> = {
	margin: theme.spacing(1),
	backgroundColor: theme.palette.secondary.main,
};

export const AlterSuccessSx: SxProps<STheme> = {
	backgroundColor: theme.palette.success.main,
	padding: theme.spacing(2),
	color: "#fff",
	fontFamily: "NanumSquare",
	fontSize: "1rem",
};

export const AlterErrorSx: SxProps<STheme> = {
	backgroundColor: theme.palette.error.main,
	padding: theme.spacing(2),
	color: "#fff",
	fontFamily: "NanumSquare",
	fontSize: "1rem",
};

export const DialogAppBarSx: SxProps<STheme> = {
	position: "relative",
};

export const DialogTitleSx: SxProps<STheme> = {
	marginLeft: theme.spacing(2),
	flex: 1,
};

export const FormControlSx: SxProps<STheme> = {
	margin: theme.spacing(1),
	minWidth: 120,
};

export const FormControlFullSx: SxProps<STheme> = {
	margin: theme.spacing(1),
	minWidth: 120,
	width: "100%",
};

export const FormControlSxForSignUp: SxProps<STheme> = {
	margin: theme.spacing(1),
	minWidth: 120,
	maxWidth: 180,
};

export const FormControlSxForHome: SxProps<STheme> = {
	margin: theme.spacing(1),
	minWidth: 180,
	maxWidth: 300,
};

export const FormSelectorControlSx: SxProps<STheme> = {
	margin: theme.spacing(1),
	minWidth: 180,
	maxWidth: 180,
};

export const FlexGrowSx: SxProps<STheme> = {
	flexGrow: 1,
};

export const usePageStyles = makeStyles(() =>
	createStyles({
		pageBar: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "center",
			marginTop: theme.spacing(2),
			marginBottom: theme.spacing(0),
		},
		page: {
			"& > *": {
				justifyContent: "center",
			},
		},
		pageSearch: {
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
		},
		pageTextField: {
			paddingLeft: theme.spacing(0),
			paddingRight: theme.spacing(0),
			width: "5rem",
		},
	}),
);
