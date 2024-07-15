import React, { useState } from 'react';
import './FormFill.css';

const FormFill = () => {
    // State variables to hold form data
    const [name, setName] = useState('');
    const [parentName, setParentName] = useState('');
    const [address, setAddress] = useState('');
    const [mobile, setMobile] = useState('');
    const [aadharPan, setAadharPan] = useState('');
    const [sno, setSno] = useState('');
    const [particulars, setParticulars] = useState('');
    const [qty, setQty] = useState();
    const [rate, setRate] = useState();
    const [amount, setAmount] = useState();
    const [grandTotal, setGrandTotal] = useState();
    const [amountInWords, setAmountInWords] = useState('');
    const [modeOfDonation, setModeOfDonation] = useState('');
    const [transactionDetails, setTransactionDetails] = useState('');
    const [date, setDate] = useState('');
    const [signDonor, setSignDonor] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            name,
            parentName,
            address,
            mobile,
            aadharPan,
            sno,
            particulars,
            qty,
            rate,
            amount,
            grandTotal,
            amountInWords,
            modeOfDonation,
            transactionDetails,
            date,
            signDonor
        });
    };

    return (
        <div className="form-container">
            <h1>Donation Form</h1>
            <form className="donation-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Parent's Name:</label>
                    <input
                        type="text"
                        name="parentName"
                        value={parentName}
                        onChange={(e) => setParentName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Postal Address:</label>
                    <input
                        type="text"
                        name="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>
                <div className="contact-aadhar">
                    <div className="form-group">
                        <label className='mob'>Mobile No.:</label>
                        <input
                            type="text"
                            name="mobile"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className='aadhar'>Aadhar/PAN No.:</label>
                        <input
                            type="text"
                            name="aadharPan"
                            value={aadharPan}
                            onChange={(e) => setAadharPan(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <table className="form-table">
                    <thead>
                        <tr>
                            <th className='sno'>S.No.</th>
                            <th className='particulars'>Particulars</th>
                            <th className='qty'>Qty</th>
                            <th className='rate'>Rate</th>
                            <th className='amnt'>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='sno'>
                                <input
                                    type="text"
                                    value={sno}
                                    onChange={(e) => setSno(e.target.value)}
                                    required
                                />
                            </td>
                            <td className='particulars'>
                                <input
                                    type="text"
                                    value={particulars}
                                    onChange={(e) => setParticulars(e.target.value)}
                                    required
                                />
                            </td>
                            <td className='qty'>
                                <input
                                    type="number"
                                    value={qty}
                                    onChange={(e) => setQty(parseInt(e.target.value))}
                                    required
                                />
                            </td>
                            <td className='rate'>
                                <input
                                    type="number"
                                    value={rate}
                                    onChange={(e) => setRate(parseInt(e.target.value))}
                                    required
                                />
                            </td>
                            <td className='amnt'>{qty * rate}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="form-group">
                    <label>Grand Total:</label>
                    <input
                        type="text"
                        name="grandTotal"
                        value={grandTotal}
                        onChange={(e) => setGrandTotal(parseInt(e.target.value))}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Amount in Words:</label>
                    <input
                        type="text"
                        name="amountInWords"
                        value={amountInWords}
                        onChange={(e) => setAmountInWords(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Mode of Donation:</label>
                    <input
                        type="text"
                        name="modeOfDonation"
                        value={modeOfDonation}
                        onChange={(e) => setModeOfDonation(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Transaction Details:</label>
                    <textarea
                        name="transactionDetails"
                        value={transactionDetails}
                        onChange={(e) => setTransactionDetails(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Date:</label>
                    <input
                        type="text"
                        name="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Sign. Of Donor:</label>
                    <input
                        type="text"
                        name="signDonor"
                        value={signDonor}
                        onChange={(e) => setSignDonor(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
            </form>
        </div>
    );
};

export default FormFill;
