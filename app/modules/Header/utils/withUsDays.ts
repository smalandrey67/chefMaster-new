export const withUsDays = (registrationDate: string | undefined): string => {
	if (!registrationDate) return "for many days";

	const daysDifference = new Date().getTime() - new Date(registrationDate).getTime();
	const daysWithUs = Math.floor(daysDifference / (1000 * 60 * 60 * 24));

	return daysWithUs === 0 ? `${1} day` : `${daysWithUs} days`;
};
