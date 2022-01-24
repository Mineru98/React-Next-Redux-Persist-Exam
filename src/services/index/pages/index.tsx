import React from "react";
import { useEffect, useState } from "react";

import LoadingLayout from "~/services/index/components/Loading";
import CounterLayout from "~/services/index/components/Counter";

function IndexPage() {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		setIsLoading(true);
	}, []);

	return <main>{isLoading ? <CounterLayout /> : <LoadingLayout />}</main>;
}
export default IndexPage;
