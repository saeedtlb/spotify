import React, { useEffect, useState } from 'react';

import '../../../../Resources/Css/categories.css';

import { get_categories } from '../../../../Actions/song';
import { useSongStateValue } from '../../../DataLayer';

import Loading from '../../../utils/Loading';
import Card from '../../../utils/Card';

const Categories = () => {
    const [err, setErr] = useState(false);
    const [{ categories }, dispatch] = useSongStateValue();

    useEffect(() => {
        get_categories()
            .then(data => {
                dispatch(data);
                setErr(false);
            })
            .catch(err => {
                console.log('index category', err);
                setErr(true);
            });
    }, [dispatch]);

    const renderCategories = () =>
        categories.map(category => (
            <Card
                key={category.id}
                name={category.name}
                url={category.icon}
                linkTo={`/category/${category.id}`}
            />
        ));

    return (
        <div className='categories'>
            {categories ? (
                renderCategories()
            ) : err ? (
                <div className='err'>
                    <h2>somthing went wrong, please try again later</h2>
                </div>
            ) : (
                <Loading />
            )}
        </div>
    );
};

export default Categories;
