import React from 'react'

class App extends React.Component{
    state = {
        count: 0,
    }

    componentDidMount(){
        this.setTimer()
    }

    componentWillUnmount(){
        clearInterval(this.timerID)
    }

    setTimer = () =>{
        this.timerID = setInterval(() => {
            this.setState({
                count:0
            })
        }, 1000);
    }

    render(){
        const {count} = this.state
        return <b>Counter Value: {count}</b>
    }
}

export default App