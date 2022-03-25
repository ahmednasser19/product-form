import React, { useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function Inventory() {
    const [text, setText] = useState("")
    return (
        <div>
            <h5>Inventory</h5>
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputSKU">SKU (Stock Keeping Unit) </label>
                        <input type="text" className="form-control" id="inputSKU" placeholder="" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputBarcode">Barcode (ISBN,UPC,GTIN,etc.)</label>
                        <input type="text" className="form-control" id="inputBarcode" placeholder="" />
                    </div>
                </div>

                <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck-1" />
                        <label className="form-check-label" for="gridCheck-1">
                            Track quantity
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck-2" />
                        <label className="form-check-label" for="gridCheck-2">
                            Continue selling when out of stock
                        </label>
                    </div>
                </div>
                <div className='line'>
                </div>
                <h6>QUANTITY</h6>



                <div class="form-group row">
                    <div class="col-md-6">
                        <label for="apples">Available </label>
                        <input type="number" class="form-control" id="apples" autocomplete="off"
                            min="0" placeholder='0' />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputSKU">Title</label>
                        <input type="text" className="form-control" id="inputSKU" placeholder="Short sleeve t-shirt" />
                    </div>
                </div>
                <div className="form">
                    <div className="editor">
                        <CKEditor
                            editor={ClassicEditor}
                            data={text}
                            onChange={(event, editor) => {
                                const data = editor.getData()
                                setText(data)
                            }}
                        />
                    </div>
                </div>

            </form >
        </div >
    )
}
