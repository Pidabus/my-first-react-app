const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

function Button ({text = 'Click Me!', color = 'blue', fontSize = '12', handleClick}) {
    const buttonStyle = {
        color: color,
        fontSize: fontSize + 'px'
    };

    return (
        <button onClick={handleClick} style={buttonStyle}>{text}</button>
    );
}

export default function TodoList() {
    const handleButtonClick = (url) => {
        window.location.href = url;
    }

  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="https://react.dev/images/docs/scientists/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
      <Button  />
      <Button handleClick={() => handleButtonClick('https://www.theodinproject.com')} text='Don&apos;t click me!' color='red' />
      <Button color='Yellow' />
    </div>
  );
}
