import React from 'react';
import { FaRegMoneyBillAlt, FaCreditCard, FaMoneyCheckAlt } from 'react-icons/fa';
import { BsSendFill } from "react-icons/bs";
import { MdOutlineCallReceived } from "react-icons/md";
import { SiConvertio } from "react-icons/si";

const quickActions = [
    { name: "Send Money", icon: <BsSendFill /> },
    { name: "Receive Money", icon: <MdOutlineCallReceived /> },
    { name: "Deposit", icon: <FaMoneyCheckAlt /> },
    { name: "Withdraw", icon: <FaRegMoneyBillAlt /> },
    { name: "Convert", icon: <SiConvertio /> },
    { name: "Manage Cards", icon: <FaCreditCard /> },
];

const QuickActions = () => {
    return (
        <div className="quick-actions-container">
            <h2>Quick Actions</h2>
            <div className="quick-actions-wrapper">
                {quickActions.map((action, index) => (
                    <div key={index} className="quick-action-card">
                        <div className="quick-action-icon">{action.icon}</div>
                        <p className='quick-action-name'>{action.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QuickActions;
