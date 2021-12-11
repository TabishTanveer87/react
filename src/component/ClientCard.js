import React from 'react';

const webUrl = `${window.location.origin.toString()}`;

function ClientCard(props) {
    return (
        <li>
            <div class="clientSec-card">
                <div class="clientSec-img">
                    <img src={webUrl+props.img} alt=""/>
                </div>

                <p>
                    {props.text}
                </p>

                <span>{props.text1} <em> {props.text2} </em> {props.text3}</span>
            </div>
        </li>
    )
}

export default ClientCard
