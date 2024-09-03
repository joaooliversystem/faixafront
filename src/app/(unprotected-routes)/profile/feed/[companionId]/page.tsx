import dynamic from 'next/dynamic';

const DynamicFeed = dynamic(() => import('./feed'), {
    ssr: false
})

function FeedPage({ params }: any) {
    return (
        <div>
            <DynamicFeed
            />
        </div>
    )
}



export default FeedPage