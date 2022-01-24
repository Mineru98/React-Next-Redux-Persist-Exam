import React, { useRef } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { CssBaseline } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import { BASE_URL } from "~/services/index/config/config";

const useStyles = makeStyles(() =>
	createStyles({
		base: {
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "center",
			fontFamily: "NanumSquare",
		},
		text: { fontSize: "2rem", fontWeight: "normal", lineHeight: "inherit", margin: "0", padding: "0" },
	}),
);

export default function LoadingLayout() {
	const AnimationRef = useRef(null);
	const classes = useStyles();

	return (
		<>
			<CssBaseline />
			<Player ref={AnimationRef} autoplay={true} loop={true} controls={true} src={`${BASE_URL}/imgs/loading.json`} style={{ height: "512px" }} />
			<div className={classes.base}>
				<h2 className={classes.text}>Loading...</h2>
			</div>
		</>
	);
}
