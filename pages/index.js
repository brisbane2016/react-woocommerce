import Layout from "../components/Layout";
import fetch from 'isomorphic-unfetch';
import clientConfig from '../client-config';
import Products from "../components/Products";
const Index =() =>{

    return (
        <div>
            <Layout>
                Hello world

            </Layout>   

        </div>
    )
};

Index.getInitialProps = async () => {
   
    const res = await fetch( `${clientConfig.siteUrl}/getProducts` );
    const productsData = await res.json();
    console.log(productsData);
    return {
        products: productsData
    }
    };


export default Index;