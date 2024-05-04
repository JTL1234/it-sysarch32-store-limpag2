import React, { createContext, Component } from "react";
import PropTypes from "prop-types";
import { db } from '../Config/Config';

export const ProductContext = createContext();

export class ProductContextProvider extends Component {
    state = {
        products: []
    }

    componentDidMount() {
        db.collection('Products').onSnapshot(snapshot => {
            const products = snapshot.docs.map(doc => ({
                ProductID: doc.id,
                ProductName: doc.data().ProductName,
                ProductPrice: doc.data().ProductPrice,
                ProductImg: doc.data().ProductImg,
                ProductDescription: doc.data().ProductDescription // Add ProductDescription here
            }));
            this.setState({ products });
        });
    }

    render() {
        return (
            <ProductContext.Provider value={{ products: this.state.products }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

ProductContextProvider.propTypes = {
    children: PropTypes.node
};
