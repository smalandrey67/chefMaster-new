export const durationDays = (registrationDate: string): number => {
	const daysDifference = new Date().getTime() - new Date(registrationDate).getTime();
	const daysWithUs = Math.floor(daysDifference / (1000 * 60 * 60 * 24));

	return daysWithUs === 0 ? 1 : daysWithUs;
};

export const withUsDays = (registrationDate: string): string => {
	const daysWithUs = durationDays(registrationDate);

	return daysWithUs === 1 ? `${daysWithUs} day` : `${daysWithUs} days`;
};
