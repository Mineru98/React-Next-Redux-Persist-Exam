/* eslint-disable @next/next/no-css-tags */
import React from "react";
import { ServerStyleSheet } from "styled-components";
import { ServerStyleSheets } from "@mui/styles";
import Document, { Head, Main, NextScript, Html } from "next/document";
import { theme } from "~/services/index/utils/theme";

class RootDocument extends Document {
	static async getInitialProps(ctx: any) {
		const styledComponentsSheet = new ServerStyleSheet();
		const materialSheets = new ServerStyleSheets();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App: any) => (props: any) => styledComponentsSheet.collectStyles(materialSheets.collect(<App {...props} />)),
				});
			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<React.Fragment>
						{initialProps.styles}
						{materialSheets.getStyleElement()}
						{styledComponentsSheet.getStyleElement()}
					</React.Fragment>
				),
			};
		} finally {
			styledComponentsSheet.seal();
		}
	}

	render() {
		return (
			<Html lang="ko">
				<Head>
					<meta charSet="utf-8" />
					<meta name="theme-color" content={theme.palette.primary.main} />
					<link rel="apple-touch-icon" href="/imgs/icon_256.png" />
					<link rel="icon" href="/imgs/icon_256.png" />
					<link rel="manifest" href="/manifest.json" />
					<link rel="stylesheet" type="text/css" href="/css/global.css" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default RootDocument;
