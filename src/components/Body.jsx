import Cabecera from "./Cabecera";
import ContainerLeft from "./ContainerLeft";


const Body = () => {
    return(
        <body className="cuerp">
            <Cabecera/>
            <div>
                <ContainerLeft/>
            </div>
        </body>
    );
}

export default Body;