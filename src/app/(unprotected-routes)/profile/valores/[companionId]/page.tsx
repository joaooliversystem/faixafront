import dynamic from 'next/dynamic';

const DynamicPrices = dynamic(() => import('./prices'), {
    ssr: false
})

function PricesPage() {
    return (
        <div>
            <DynamicPrices />
        </div>
    )
}



export default PricesPage;