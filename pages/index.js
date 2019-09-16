import Layout from "../components/Layout";
import fetch from 'isomorphic-unfetch';
import clientConfig from '../client-config';
import Products from "../components/Products";
const Index =(props) =>{

const {products} = props

return (
        <div>
            <Layout>
                <div className="product-container"> 
                {
                products.length ? (
                    products.map(product => <Products key = {product.id} product ={product}/> )
                ):''

            }

                </div>
        
            </Layout>   

        </div>
    )
};

Index.getInitialProps = async () => {

    const res = await fetch( `${clientConfig.siteUrl}/getProducts` );
    const productsData = await res.json();
 
    return {
        products: productsData
    }
};

export default Index;