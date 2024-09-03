import dynamic from 'next/dynamic';

const DynamicSerices = dynamic(() => import('./services'), {
    ssr: false
})

function ServicesPage() {
    return (
        <div>
            <DynamicSerices />
        </div>
    )
}



export default ServicesPage;