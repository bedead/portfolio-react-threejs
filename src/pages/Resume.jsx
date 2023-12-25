import NavBar from '../components/NavBar'
import ResumeComp from '../components/ResumeComp';



export default function Resume() {
    return (
        <div className='bg-white'>
            <NavBar />
            <div className='relative pb-10 top-[120px] lg:top-[100px] bg-gradient-to-b from-white to-primary'>
                <ResumeComp />
            </div>

        </div>
    )
}