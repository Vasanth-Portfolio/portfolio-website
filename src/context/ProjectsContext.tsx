import { useState, createContext, PropsWithChildren, Key } from 'react';
import { projectsData } from '../data/projects';

interface Project {
	id: Key | null | undefined;
	img: string;
	title: string;
	category: string;
}

interface ProjectsContextType {
	projects: Project[];
	setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
	searchProject: string;
	setSearchProject: React.Dispatch<React.SetStateAction<string>>;
	searchProjectsByTitle: Project[];
	selectProject: string;
	setSelectProject: React.Dispatch<React.SetStateAction<string>>;
	selectProjectsByCategory: Project[];
}

export const ProjectsContext = createContext<ProjectsContextType | null>(null);

export const ProjectsProvider = ({ children }: PropsWithChildren) => {
	const [projects, setProjects] = useState<Project[]>(projectsData);
	const [searchProject, setSearchProject] = useState<string>('');
	const [selectProject, setSelectProject] = useState<string>('');

	const searchProjectsByTitle = projects.filter((item) =>
		item.title.toLowerCase().includes(searchProject.toLowerCase()) || searchProject === ''
	);

	const selectProjectsByCategory = projects.filter((item) => {
		const category = item.category.charAt(0).toUpperCase() + item.category.slice(1);
		return category.includes(selectProject);
	});

	return (
		<ProjectsContext.Provider
			value={{
				projects,
				setProjects,
				searchProject,
				setSearchProject,
				searchProjectsByTitle,
				selectProject,
				setSelectProject,
				selectProjectsByCategory,
			}}
		>
			{children}
		</ProjectsContext.Provider>
	);
};
