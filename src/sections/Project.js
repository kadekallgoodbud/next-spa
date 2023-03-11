import { data } from '../data/data';
import { ProjectList } from '../components/Projectlist/Projectlist';

export default function Project() {  

    const projectProps = { title: (data.project.title) }

    return (
        <>  
            <div className='container w-3/5 mx-auto flex flex-col gap-5 py-3'>
                <h1 className="text-5xl font-bold bg-gradient-to-r from-[color:var(--clr-gradient-text)] to-[color:var(--clr-gradient-text-secondary)] bg-clip-text text-transparent leading-normal" >{projectProps.title}</h1>
                <ProjectList />
            </div>
            
        </>
    )
} 