import { data } from '../data/data';
import ProjectList from '../components/Projectlist/Projectlist';

export default function Project() {  

    const projectProps = { title: (data.project.title) }

    return (
        <>  
            <div className='container w-3/5 xs:w-4/5 mx-auto flex flex-col gap-5 xs:mt-[-50px] py-3'>
                <h2 className="text-5xl xs:text-2xl font-bold bg-gradient-to-r from-[color:var(--clr-gradient-text)] to-[color:var(--clr-gradient-text-secondary)] bg-clip-text text-transparent leading-normal" >{projectProps.title}</h2>
                <ProjectList />
            </div>
            
        </>
    )
} 