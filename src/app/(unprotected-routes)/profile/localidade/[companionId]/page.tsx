import dynamic from 'next/dynamic';

const DynamicLocality = dynamic(() => import('./locality'), {
    ssr: false
})

function LocalityPage() {
    return (
        <div>
            <DynamicLocality />
        </div>
    )
}



export default LocalityPage;
