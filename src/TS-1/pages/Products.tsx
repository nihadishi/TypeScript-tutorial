import { useEffect, useState } from 'react';
import { ProductInterfaces } from '../models/ProductInterfaces';
import axios from 'axios';


function Products() {
    const [prodcutsList, setProdcutsList] = useState<ProductInterfaces[]>([])
    // let AllProduct :ProductInterfaces = []

    useEffect(() => {
        const getData = () => {

            axios.get<ProductInterfaces[]>('https://jsonplaceholder.typicode.com/users')
                .then(res => setProdcutsList(res.data)
                )
                .catch(err => console.log(err))
        }
        getData()

    }, [])
    console.log(prodcutsList);

    return (<>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>USERNAME</th>
                    <th>EMAIL</th>
                    <th>CITY</th>
                    <th>STREET</th>
                </tr>
            </thead>
            <tbody>
                <>
                    {

                        prodcutsList.map((e: ProductInterfaces) => {
                            return <tr>
                                <td>{e.id}</td>
                                <td>{e.username}</td>
                                <td>{e.email}</td>
                                <td>{e.address?.city}</td>
                                <td>{e.address?.street}</td>
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