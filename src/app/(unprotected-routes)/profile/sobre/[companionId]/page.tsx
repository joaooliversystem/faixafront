import dynamic from 'next/dynamic';

const DynamicAbout = dynamic(() => import('./about'), {
    ssr: false
})

function AboutPage() {
    return (
        <div>
            <DynamicAbout />
        </div>
    )
}



export default AboutPage;
