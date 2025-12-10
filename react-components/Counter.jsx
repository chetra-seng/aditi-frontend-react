import React, { useState } from 'react';

// Counter Component
function CounterItem({ label, count, onCountChange }) {
    const handleIncrease = () => {
        onCountChange(count + 1);
    };

    const handleDecrease = () => {
        if (count > 0) {
            onCountChange(count - 1);
        }
    };

    return (
        <div className="counter-card">
            <div className="counter-info">
                <span className="counter-label">{label}</span>
                <span className="counter-value">{count}</span>
            </div>
            <div className="counter-controls">
                <button className="btn-decrease" onClick={handleDecrease}>−</button>
                <button className="btn-increase" onClick={handleIncrease}>+</button>
            </div>
        </div>
    );
}

// Main App Component
export default function Counter() {
    const [counters, setCounters] = useState([0, 0, 0]);

    const updateCounter = (index, newValue) => {
        const newCounters = [...counters];
        newCounters[index] = newValue;
        setCounters(newCounters);
    };

    const total = counters.reduce((sum, count) => sum + count, 0);

    return (
        <div className="container">
            <style>{`
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
                    min-height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 20px;
                }

                .container {
                    background: white;
                    border-radius: 12px;
                    padding: 20px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                    max-width: 350px;
                    width: 100%;
                }

                h1 {
                    text-align: center;
                    color: #333;
                    margin-bottom: 15px;
                    font-size: 20px;
                }

                .total-section {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    padding: 15px;
                    border-radius: 10px;
                    text-align: center;
                    margin-bottom: 15px;
                    box-shadow: 0 3px 10px rgba(102, 126, 234, 0.3);
                }

                .total-label {
                    font-size: 12px;
                    opacity: 0.9;
                    margin-bottom: 3px;
                }

                .total-value {
                    font-size: 32px;
                    font-weight: bold;
                }

                .counters-container {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }

                .counter-card {
                    background: #f8f9fa;
                    border-radius: 8px;
                    padding: 12px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    transition: transform 0.2s, box-shadow 0.2s;
                    border: 2px solid #e9ecef;
                }

                .counter-card:hover {
                    transform: translateY(-1px);
                    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
                }

                .counter-info {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }

                .counter-label {
                    font-weight: 600;
                    color: #495057;
                    font-size: 13px;
                }

                .counter-value {
                    background: white;
                    padding: 5px 12px;
                    border-radius: 6px;
                    font-size: 18px;
                    font-weight: bold;
                    color: #667eea;
                    min-width: 40px;
                    text-align: center;
                    border: 2px solid #e9ecef;
                }

                .counter-controls {
                    display: flex;
                    gap: 6px;
                }

                button {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                    border: none;
                    width: 32px;
                    height: 32px;
                    border-radius: 8px;
                    font-size: 16px;
                    font-weight: bold;
                    cursor: pointer;
                    transition: transform 0.2s, box-shadow 0.2s;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                button:hover {
                    transform: scale(1.1);
                    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
                }

                button:active {
                    transform: scale(0.95);
                }

                .btn-decrease {
                    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
                }

                .btn-decrease:hover {
                    box-shadow: 0 5px 15px rgba(245, 87, 108, 0.4);
                }

                @media (max-width: 480px) {
                    .container {
                        padding: 25px;
                    }

                    h1 {
                        font-size: 24px;
                    }

                    .total-value {
                        font-size: 36px;
                    }

                    .counter-card {
                        flex-direction: column;
                        gap: 15px;
                    }
                }
            `}</style>

            <h1>Counter Dashboard</h1>
            
            <div className="total-section">
                <div className="total-label">Total Count</div>
                <div className="total-value">{total}</div>
            </div>

            <div className="counters-container">
                <CounterItem
                    label="Counter 1" 
                    count={counters[0]} 
                    onCountChange={(newValue) => updateCounter(0, newValue)} 
                />
                <CounterItem
                    label="Counter 2" 
                    count={counters[1]} 
                    onCountChange={(newValue) => updateCounter(1, newValue)} 
                />
                <CounterItem
                    label="Counter 3" 
                    count={counters[2]} 
                    onCountChange={(newValue) => updateCounter(2, newValue)} 
                />
            </div>
        </div>
    );
}

