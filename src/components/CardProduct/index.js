import React from 'react';
import { Link } from 'react-router-dom';
import images from '~/assets/images';

const CardProduct = ({ src, title, desc, path }) => {
    return (
        <Link to={'/product/' + path}>
            <article className="product-item">
                <div className="image">
                    <div className="flipper">
                        <img
                            src={src}
                            alt="product-img"
                            className="lozad front"
                        />
                        <img
                            src={src}
                            alt="product-img"
                            className="lozad back"
                        />
                    </div>
                </div>
                <div className="caption">
                    <h3 className="title">{title}</h3>
                    <div className="desc">
                        <p>{desc}</p>

                    </div>
                </div>
            </article>
        </Link>
    );
};

export default CardProduct;
