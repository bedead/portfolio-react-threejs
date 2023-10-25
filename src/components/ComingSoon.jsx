import { styles } from "../styles";


export default function ComingSoon() {
    return (
        <div className='h-screen'>
            <h1 className={
                `${styles.sectionHeadText
                } text-center`
            }>
                Coming soon
            </h1>
            <p className={
                `${styles.heroSubText
                } mt-2 text-black-100 text-center`
            }>
                More things are on the ways.
            </p>
        </div>
    )
}