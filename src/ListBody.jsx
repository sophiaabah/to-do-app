import React from 'react';

const ListBody = ({items, onTap, calculate}) => {
    return !items.length ?
        <h3>Chill out. You have no tasks for today</h3> :
        (
        <div>
            <div>
            {items.map((item, index) => {
                return(
                <div>
                    <input key={index} type="checkbox" id={index} onClick={onTap}></input>
                    <label htmlFor={index}>{item.todo}</label><br></br>
                </div> 
                )
            })}
            </div>
            <div>{calculate({items})}</div>
        </div>
        );
    }

export default ListBody;

