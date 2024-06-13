"use client";

import { usePathname } from "next/navigation";
import React from "react";

const ProviderWrapper = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname();

	const isAdmin = pathname?.includes("/admin") ? true : false;
	return <div>{isAdmin ? <>{children}</> : <>{children}</>}</div>;
};

export default ProviderWrapper;