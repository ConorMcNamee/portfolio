import Service from "../../components/Services/Service"
import Product from "../../components/Services/Product"

export default function ServiceList() {
    return (
        <section className="flex flex-col justify-center items-center">
            <div className="flex flex-col text-center items-center">
                <h1 className="flex text-3xl p-5 m-5">Products and Services</h1>
                <p className="flex text-xl opacity-75 p-5">A simple list of the services I provide to clients an a list of products I personally sell</p>
            </div>

            <h1 className="text-4xl font-medium">Products</h1>
            <Product />
            

            <h1 className="text-4xl font-medium">Services</h1>
            <Service />
        </section>
    );
}