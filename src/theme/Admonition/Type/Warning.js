import React from "react";
import clsx from "clsx";
import Translate from "@docusaurus/Translate";
import AdmonitionLayout from "@theme/Admonition/Layout";
import IconInfo from "@theme/Admonition/Icon/Info";
const infimaClassName = "alert alert--warning";
const defaultProps = {
	icon: <IconInfo />,
	title: (
		<Translate
			id="theme.admonition.warning"
			description="The default label used for the Warning admonition (:::warning)"
		>
			warning
		</Translate>
	),
};
export default function AdmonitionTypeWarning(props) {
	return (
		<AdmonitionLayout
			{...defaultProps}
			{...props}
			className={clsx(infimaClassName, props.className)}
		>
			{props.children}
		</AdmonitionLayout>
	);
}
