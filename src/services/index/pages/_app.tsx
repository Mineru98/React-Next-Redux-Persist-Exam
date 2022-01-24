import React, { useEffect } from "react";
import document from "global/document";
import { NextComponentType } from "next";
import Head from "next/head";
import { CookiesProvider } from "react-cookie";
import { StylesProvider, ThemeProvider as MuiThemeProvider } from "@mui/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { CssBaseline } from "@mui/material";

import { createStore } from "redux";

import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import { theme } from "~/services/index/utils/theme";
import wrapper from "~/services/index/store";
import { persistedReducer } from "~/services/index/store/reducer";

interface RootAppProps {
	Component: NextComponentType;
	pageProps: any;
	uuid: string;
}

function RootApp({ Component, pageProps }: RootAppProps) {
	const store = createStore(persistedReducer);
	const persistor = persistStore(store);

	useEffect(() => {
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles) {
			jssStyles.parentNode.removeChild(jssStyles);
		}
	}, []);

	return (
		<PersistGate persistor={persistor} loading={<div>loading...</div>}>
			<React.Fragment>
				<CookiesProvider>
					<Head>
						<title>React Next Redux - Counter</title>
						<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
					</Head>
					<StylesProvider injectFirst>
						<StyledThemeProvider theme={theme}>
							<MuiThemeProvider theme={theme}>
								<CssBaseline />
								<Component {...pageProps} />
							</MuiThemeProvider>
						</StyledThemeProvider>
					</StylesProvider>
				</CookiesProvider>
			</React.Fragment>
		</PersistGate>
	);
}

export default wrapper.withRedux(RootApp);
