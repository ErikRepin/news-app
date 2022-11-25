import { useState } from 'react';

const TestComponent = (props) => {

    const [index, setIndex] = useState(0);

    // console.log('Test component render');

    function handleClick(event) {
        console.log(event);
        event.target.innerHTML = 'New text';
        setIndex(index + 1);
    }

    function handleClickIndexMinus(event) {
        console.log(event);
        setIndex(index - 1);
    }

    function handeClickCountMinus(event) {
        props.setCount(props.count - 1);
    }
    return (
        <div>
            <h1>{props.message}</h1>
            Index: {index}
            <div>
                <button onClick={handleClick}>Add index 1</button>
                <button onClick={handleClickIndexMinus}>Minus index 1</button>
                <button onClick={handeClickCountMinus}>Minus count 1</button>
            </div>
        </div>
    );
};

TestComponent.defaultProps = {
    message: "Default Message",
};

const ArrowComponent = ({ message, text }) => {

    const [count, setCount] = useState(0);

    // console.log('Arrow render');

    const array = [
        'Test 1',
        'Test 2',
        'Test 3',
    ];

    return (
        <div>
            <div>{message} Count:<b>{count}</b></div>
            <small>{text}</small>
            <div>
                <button onClick={() => setCount(count + 1)}>Add 1</button>
            </div>
            <TestComponent count={count} setCount={setCount}/>

            {array.map(a => {
                return (<div key={a}>{a}</div>);
            })}
        </div>
    );
};

export default ArrowComponent;