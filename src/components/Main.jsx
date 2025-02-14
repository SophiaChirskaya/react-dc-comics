// Importo componente ProductsList
import ProductsList from "./products/ProductsList";
// Importo componente banner
import ServiceBanner from "./ServiceBanner";


// Main.jsx
export default function Main() {
    return (<main className="main-content">
        <div className="content-wrapper">
            <ProductsList />
        </div>
        <ServiceBanner />
         </main>
         );
}