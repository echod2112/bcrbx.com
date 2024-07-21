const hr = { type: "html", value: "<hr/>" };

const orgsBack = {
	type: "link",
	label: "← All organisations",
	href: "/gov/organisations",
};

const gen = (dirName) => {
	return { type: "autogenerated", dirName };
};

export default {
	main: [gen(".")],

	bcas: [
		orgsBack,
		{
			type: "link",
			label: "Ministry of Health",
			href: "/gov/health",
		},
		hr,
		gen("organisations/bcas"),
	],
	bcss: [
		orgsBack,
		{
			type: "link",
			label: "Ministry of Justice",
			href: "/gov/justice",
		},
		hr,
		gen("organisations/bcss"),
	],

	mfa: [orgsBack, hr, gen("organisations/mfa")],
	moh: [
		orgsBack,
		hr,
		gen("organisations/moh"),
		hr,
		{
			type: "link",
			label: "BC Ambulance Service",
			href: "/gov/health/ambulance-service",
		},
	],
	moj: [
		orgsBack,
		hr,
		gen("organisations/moj"),
		hr,
		{
			type: "link",
			label: "BC Sheriff Service",
			href: "/gov/justice/sheriff-service",
		},
	],
	mot: [orgsBack, hr, gen("organisations/mot")],
	moti: [orgsBack, hr, gen("organisations/moti")],

	caf: [orgsBack, hr, gen("organisations/caf")],
	csc: [orgsBack, hr, gen("organisations/csc")],
	csis: [orgsBack, hr, gen("organisations/csis")],
	rcmp: [orgsBack, hr, gen("organisations/rcmp")],
	vfd: [orgsBack, hr, gen("organisations/vfd")],
	vpd: [orgsBack, hr, gen("organisations/vpd")],
};