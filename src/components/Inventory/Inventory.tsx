import React from 'react';
import './Inventory.scss'

import potion from '../../assets/img/potions/potion.png'

const Inventory = () => {
    return (
        <div className='inventory'>
            <div className="inventory__wrapper">
                <div className="inventory__container">
                    <div className="inventory__header">INVENTORY</div>
                    <div className="inventory__body">
                        <ul className="inventory__body-items">
                            <li className="inventory__body-item">
                                <img src={potion} alt="img" />
                            </li>
                            <li className="inventory__body-item">
                                {/* <img src={potion} alt="img" /> */}
                            </li>
                            <li className="inventory__body-item">
                                {/* <img src={potion} alt="img" /> */}
                            </li>
                            <li className="inventory__body-item">
                                {/* <img src={potion} alt="img" /> */}
                            </li>
                            <li className="inventory__body-item">
                                {/* <img src={potion} alt="img" /> */}
                            </li>
                            <li className="inventory__body-item">
                                {/* <img src={potion} alt="img" /> */}
                            </li>
                            <li className="inventory__body-item">
                                {/* <img src={potion} alt="img" /> */}
                            </li>
                            <li className="inventory__body-item">
                                {/* <img src={potion} alt="img" /> */}
                            </li>
                            <li className="inventory__body-item">
                                {/* <img src={potion} alt="img" /> */}
                            </li>
                            <li className="inventory__body-item">
                                {/* <img src={potion} alt="img" /> */}
                            </li>
                            <li className="inventory__body-item">
                                {/* <img src={potion} alt="img" /> */}
                            </li>
                            <li className="inventory__body-item">
                                {/* <img src={potion} alt="img" /> */}
                            </li>
                            <li className="inventory__body-item">
                                {/* <img src={potion} alt="img" /> */}
                            </li>
                            <li className="inventory__body-item">
                                {/* <img src={potion} alt="img" /> */}
                            </li>
                            <li className="inventory__body-item">
                                {/* <img src={potion} alt="img" /> */}
                            </li>
                            <li className="inventory__body-item">
                                {/* <img src={potion} alt="img" /> */}
                            </li>
                            <li className="inventory__body-item">
                                {/* <img src={potion} alt="img" /> */}
                            </li>
                            <li className="inventory__body-item">
                                {/* <img src={potion} alt="img" /> */}
                            </li>
                            <li className="inventory__body-item">
                                {/* <img src={potion} alt="img" /> */}
                            </li>
                            <li className="inventory__body-item">
                                {/* <img src={potion} alt="img" /> */}
                            </li>
                            <li className="inventory__body-item">
                                {/* <img src={potion} alt="img" /> */}
                            </li>
                            <li className="inventory__body-item">
                                {/* <img src={potion} alt="img" /> */}
                            </li>
                            <li className="inventory__body-item">
                                {/* <img src={potion} alt="img" /> */}
                            </li>
                            <li className="inventory__body-item">
                                {/* <img src={potion} alt="img" /> */}
                            </li>
                            <li className="inventory__body-item">
                                {/* <img src={potion} alt="img" /> */}
                            </li>
                            <li className="inventory__body-item">
                                {/* <img src={potion} alt="img" /> */}
                            </li>
                            <li className="inventory__body-item">
                                {/* <img src={potion} alt="img" /> */}
                            </li>
                            <li className="inventory__body-item">
                                {/* <img src={potion} alt="img" /> */}
                            </li>
                            <li className="inventory__body-item">
                                {/* <img src={potion} alt="img" /> */}
                            </li>
                            <li className="inventory__body-item">
                                {/* <img src={potion} alt="img" /> */}
                            </li>
                        </ul>
                    </div>
                    <div className="inventory__footer">
                        ADD SOMETHING YOU NEED TO ADD
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;