import React from 'react';


class App extends React.Component
{
    render()
    {
        var message: React.Element = this.renderMessage('Hello World');
        return <h1>{message}</h1>;
    }

    renderMessage(message: string): React.Element
    {
        return <em>{message}</em>;
    }
}


export default App;
