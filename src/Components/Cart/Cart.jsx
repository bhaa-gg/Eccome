import React, { useContext, useEffect, useState } from 'react'
import { conText } from '../Context/Context';
import Loading from '../Loading/Loading';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Cart() {
    let { counter, setCounter, ShowDataCart, ubdte, delets } = useContext(conText);
    const [loading, setLoading] = useState(false);
    const [btnLoading, setBtnLoading] = useState(false);
    const [data, setData] = useState(null);


    useEffect(() => {
        (async () => {
            setLoading(true);
            let data = await ShowDataCart();
            console.log("CartItem", data);
            setLoading(false);
            if (data.status == "success") {
                setCounter(data.numOfCartItems)
                setData(data);
            }

        })();
    }, [])
    async function addMin(count, id) {
        setBtnLoading(true)
        let data = await ubdte(count, id);
        console.log("add or min", data);
        if (data.status == "success") {
            setBtnLoading(false)
            toast.success("Done")
            setCounter(data.numOfCartItems);
            setData(data);
        }
    }
    async function removes(id) {
        let data = await delets(id);
        console.log("Dellll", data);
        if (data.status == "success") {
            toast.success("Done")
            setCounter(data.numOfCartItems);
            setData(data);
        }
    }


    if (loading) return <Loading />;
    return (
        
        <div className='container my-3 bg-main-light p-3 rounded-4 '>
            <Helmet title={"User Cart"} />
            <h1 className='text-main fw-bold py-2' >  Shop Cart :</h1>
            
            {counter ?  <h6 className='text-success fw-bold' >Total Price : {data?.data?.totalCartPrice}</h6> : ""}
            {!counter ?  <h1 className='text-main text-center fw-bold py-2' >  No Element In Cart </h1> : ""}
            {data?.data?.products.map((val) => {
                return <div key={val._id} className="row my-2  p-2 bg-body-secondary">
                    <div className='col-md-2'><img src={val.product.imageCover} className='w-100' alt="" /></div>
                    <div className="col-md-10 d-flex justify-content-between align-items-center">
                        <div className="detales">
                            <h3 className=' fw-bold'>{val.product.title}</h3>
                            <h6 className='text-success my-3 fw-bold'>Price : {val.price}</h6>
                            <button onClick={() => removes(val.product.id)} className='btn text-success  fw-bold ' >Delet Item <i className="fa-regular  fa-trash-can"></i></button>
                        </div>
                        <div className="quantity">
                            <button onClick={() => addMin(++val.count, val.product.id)} className='btn rounded-2 border-black border-2 fw-bold' >{btnLoading ? "wait" : "+"}</button>
                            <span className='p-3 fw-bold' >{val.count}</span>
                            <button onClick={() => addMin(--val.count, val.product.id)} disabled={val.count == 1} className='btn rounded-2 border-black border-2 fw-bold' >{btnLoading ? "wait" : "-"}</button>
                        </div>
                    </div>
                </div>
            })}
            <Link  to={`/Order/${data?.data?._id}`} className={`btn bg-main text-white fw-bold  p-3 ${data?.numOfCartItems == 0 ? "disabled" : ""} ${!counter ? "d-none" : ""}`} >Order</Link>
        </div>
    )
}
