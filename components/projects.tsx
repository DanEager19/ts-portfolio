import { projects } from './projectDoc';
import Accordion from './accordion';

function Projects() {
    return (
        <div className='w-10/12 bg-gray-500 border-4 border-solid rounded border-blue-700 text-white'>
            <ul>
                {
                    projects.map((project: any) => (
                        <li key={project.name} className='my-2'>
                            <Accordion title={project.name} description={project.description} link={project.link} />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Projects