// MeasurementForm.js

import React, { useState, useEffect } from 'react';
import './Invoice.css';

const Invoice = () => {
    const [gender, setGender] = useState(null);
    const [invoiceNumber, setInvoiceNumber] = useState('');
    const [date, setDate] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        chest: '',
        waist: '',
        shoulders: '',
        sleeveLength: '',
        trouserLength: '',
        bust: '',
        hips: '',
        dressLength: ''
    });

    useEffect(() => {
        // Generate a random invoice number
        setInvoiceNumber('INV-' + Math.floor(Math.random() * 1000000));

        // Set default date to today
        const today = new Date().toISOString().split('T')[0];
        setDate(today);
    }, []);

    const handleGenderSelection = (selectedGender) => {
        setGender(selectedGender);
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    return (
      <div className="invoice">
        <div className="invoive-container">
            <div className="headers">
                <img src="logo.png" alt="Company Logo" className="logo" />
                <h1>Clothing Measurement Invoice</h1>
            </div>

            <div className="selection-buttons">
                <button onClick={() => handleGenderSelection('men')} className="selection-btn">Men</button>
                <button onClick={() => handleGenderSelection('women')} className="selection-btn">Women</button>
            </div>

            {gender && (
                <div className="form-container">
                    <h2>{gender === 'men' ? "Men's Measurement Details" : "Women's Measurement Details"}</h2>
                    <form>
                        {/* Branding Information */}
                        <div className="brand-info">
                            <p><strong>Brand:</strong> Your Company Name</p>
                            <p><strong>Address:</strong> 123 Fashion Street, Trend City</p>
                            <p><strong>Contact:</strong> (123) 456-7890</p>
                        </div>

                        {/* Auto Invoice Number and Default Date */}
                        <div className="input-group">
                            <label htmlFor="invoiceNumber">Invoice Number</label>
                            <input type="text" id="invoiceNumber" value={invoiceNumber} readOnly />
                        </div>
                        <div className="input-group">
                            <label htmlFor="date">Date</label>
                            <input type="date" id="date" value={date} readOnly />
                        </div>

                        {/* Common Measurements */}
                        <div className="input-group">
                            <label htmlFor="name">Customer Name</label>
                            <input type="text" id="name" placeholder="Enter full name" value={formData.name} onChange={handleInputChange} />
                        </div>
                        <div className="input-group">
                            <label htmlFor="contact">Contact Number</label>
                            <input type="tel" id="contact" placeholder="Enter contact number" value={formData.contact} onChange={handleInputChange} />
                        </div>

                        {/* Men-Specific Measurements */}
                        {gender === 'men' && (
                            <div id="menMeasurements" className="gender-specific">
                                <div className="input-group">
                                    <label htmlFor="chest">Chest (in inches)</label>
                                    <input type="number" id="chest" placeholder="Enter chest size" value={formData.chest} onChange={handleInputChange} />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="waist">Waist (in inches)</label>
                                    <input type="number" id="waist" placeholder="Enter waist size" value={formData.waist} onChange={handleInputChange} />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="shoulders">Shoulders (in inches)</label>
                                    <input type="number" id="shoulders" placeholder="Enter shoulder width" value={formData.shoulders} onChange={handleInputChange} />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="sleeveLength">Sleeve Length (in inches)</label>
                                    <input type="number" id="sleeveLength" placeholder="Enter sleeve length" value={formData.sleeveLength} onChange={handleInputChange} />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="trouserLength">Trouser Length (in inches)</label>
                                    <input type="number" id="trouserLength" placeholder="Enter trouser length" value={formData.trouserLength} onChange={handleInputChange} />
                                </div>
                            </div>
                        )}

                        {/* Women-Specific Measurements */}
                        {gender === 'women' && (
                            <div id="womenMeasurements" className="gender-specific">
                                <div className="input-group">
                                    <label htmlFor="bust">Bust (in inches)</label>
                                    <input type="number" id="bust" placeholder="Enter bust size" value={formData.bust} onChange={handleInputChange} />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="waist">Waist (in inches)</label>
                                    <input type="number" id="waist" placeholder="Enter waist size" value={formData.waist} onChange={handleInputChange} />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="hips">Hips (in inches)</label>
                                    <input type="number" id="hips" placeholder="Enter hip size" value={formData.hips} onChange={handleInputChange} />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="shoulders">Shoulders (in inches)</label>
                                    <input type="number" id="shoulders" placeholder="Enter shoulder width" value={formData.shoulders} onChange={handleInputChange} />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="dressLength">Dress Length (in inches)</label>
                                    <input type="number" id="dressLength" placeholder="Enter dress length" value={formData.dressLength} onChange={handleInputChange} />
                                </div>
                            </div>
                        )}

                        <div className="form-footer">
                            <button type="button" className="print-btn" onClick={() => window.print()}>Print Invoice</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
        </div>
    );
};

export default Invoice;
