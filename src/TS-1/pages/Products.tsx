import { useEffect, useState } from 'react';
import { ProductInterfaces } from '../models/ProductInterfaces';
import axios from 'axios';


function Products() {
    const [ProdcutsList, setProdcutsList] = useState<ProductInterfaces[]>([])


    useEffect(() => {
        axios.get('https://northwind.vercel.app/api/categories')
            .then(res => setProdcutsList(res.data))
            .catch(err => console.log(err))

    }, [])

    return (<>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>DESCRIPTION</th>
                </tr>
            </thead>
            <tbody>
                <>
                    {
                        ProdcutsList && ProdcutsList.map((e: ProductInterfaces) => {
                            <tr>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.description}</td>
                            </tr>
                        })
                    }
                </>
            </tbody>


        </table>

    </>
    )
}

export default Products