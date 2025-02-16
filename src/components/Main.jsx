// Importo componente CardList
import CardList from "./products/CardList";
// Importo componente banner
import ServiceBanner from "./ServiceBanner";


// Main.jsx
export default function Main() {
    return (<main className="main-content">
        <div className="jumbotrone">

        </div>
        
        <div className="content-wrapper">
            <CardList />
        </div>
        
        <ServiceBanner />
         </main>
         );
};