import { projects } from './projectDoc';
import Accordion from './accordion';

function Projects() {
    return (
        <div className='w-80 bg-gray-500 border-4 border-solid rounded border-blue-700 text-white'>
            <ul>
                {
                    projects.map((project: any) => (
                        <li key={project.name}>
                            <Accordion title={project.name} description={project.description} link={project.link} />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Projects