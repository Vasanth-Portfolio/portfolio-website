import { createContext, useContext } from 'react';

export interface ProjectImage {
	id: number;
	title: string;
	img: string;
}

export interface SingleProjectData {
	ProjectImages: ProjectImage[];
}

export interface SingleProjectContextType {
	singleProjectData: SingleProjectData;
	setSingleProjectData: (data: SingleProjectData) => void;
}

const SingleProjectContext = createContext<SingleProjectContextType | null>(null);


const ProjectGallery = () => {
	const context = useContext(SingleProjectContext) as SingleProjectContextType;

	if (!context) {
		return <p className="text-red-500 text-center">Project data not found.</p>;
	}

	const { singleProjectData } = context;

	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
			{singleProjectData.ProjectImages.map((project) => (
				<div className="mb-10 sm:mb-0" key={project.id}>
					<img
						src={project.img}
						className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
						alt={project.title}
					/>
				</div>
			))}
		</div>
	);
};

export default ProjectGallery;
