import React, { useContext, useEffect } from 'react'
import Product from '../Product/Product';
import Loading from '../Loading/Loading';
import { useQuery } from 'react-query';
import { conText } from '../Context/Context';
import { Helmet } from 'react-helmet';

export default function Products() {
    let { getData, getUserWishlist, setDataWList } = useContext(conText)
    let { data, isLoading } = useQuery("getData", getData)

    console.log("data", data);
    async function getUWList() {
        let data = await getUserWishlist();
        console.log("frm pro", data);
        if (data.status == "success") {
            setDataWList(data.data)
        }
    }
    useEffect(() => {
        getUWList()
    }, [])
    if (isLoading) return <Loading />
    return (
        <>
            <Helmet title={"Products"} />
            <div className='container py-2 my-2 '>
                <div className="row row-gap-3 py-4">
                    {data?.data.data.map((val => {
                        return <Product key={val._id} items={val} />
                    }))}
                </div>
            </div>
        </>
    )
}
