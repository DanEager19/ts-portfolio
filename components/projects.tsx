import { projects } from './projectDoc';

function Projects() {
    return (
        <div className='w-80 bg-gray-500 border-4 border-solid rounded border-blue-700 text-white'>
            <ul>
                {
                    projects.map((project: any) => (
                        <li key={project.name}>
                            {project.name}
                            <p>{project.description}</p>
                            <a href={project.link}>GitHub</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Projects