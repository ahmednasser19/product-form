import React, { useState } from 'react'

export default function Pricing() {
    const [price, setPrice] = useState(10)
    const [comparePrice, setCompatePrice] = useState(9)
    const [cost, setCost] = useState(7)
    return (
        <div className='pricing'>
            <h5>Pricing</h5>
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="validationCustomUsername">Price</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroupPrepend">EGP</span>
                            </div>
                            <input type="text" className="form-control" id="price" placeholder="" value={price} onChange={(e) => setPrice(e.target.value)} />
                        </div>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="validationCustomUsername">Compare at price</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroupPrepend">EGP</span>
                            </div>
                            <input type="text" className="form-control" id="compare-price" placeholder="" value={comparePrice} onChange={(e) => setCompatePrice(e.target.value)} />
                        </div>
                    </div>
                </div>


                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="validationCustomUsername">Cost per item</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="inputGroupPrepend">EGP</span>
                            </div>
                            <input type="text" className="form-control" id="price" placeholder="" value={cost} onChange={(e) => setCost(e.target.value)} />
                        </div>
                    </div>
                    <div className="form-group col-md-2 price-customer-1">
                        <label for="validationCustomUsername">Margin</label>
                        <div className="input-group-1">
                            {(price - cost) * 10}%
                        </div>
                    </div>
                    <div className="form-group col-md-2 price-customer-1">
                        <label for="validationCustomUsername">Profit</label>
                        <div className="input-group-1" >
                            EGP {(price - cost)}.00
                        </div>
                    </div>
                </div>
                <div className="price-customer">
                    Customers won't see this
                </div>
                <div className="form-row">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck-1" />
                        <label className="form-check-label" for="gridCheck-1">
                            Charge tax on this product
                        </label>
                    </div>

                </div>
            </form>
        </div>

    )
}
