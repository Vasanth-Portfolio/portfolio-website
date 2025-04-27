type AboutClientSingleProps = {
	title: string;
	image: string;
};

const AboutClientSingle = ({ title, image }: AboutClientSingleProps) => {
	return (
		<>
			<img
				src={image}
				className="w-64 py-5 px-10 border bg-secondary-light border-ternary-light dark:border-ternary-dark shadow-sm rounded-lg mb-8 cursor-pointer"
				alt={title}
			/>
		</>
	);
};

export default AboutClientSingle;
