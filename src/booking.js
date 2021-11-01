import _ from 'lodash'
import React, { Component, Fragment } from 'react'
import { Button, Card, Divider, Image, Placeholder } from 'semantic-ui-react'
import ConfirmExampleConfirm from './calander'



const cards = [
  {
    // avatar: 'logo.jpg',
    // date: 'Joined in 2013',
    header: 'Tennis Court_aaaaaaaaaaaaaaaaaa',
    // description: 'Primary Contact',
  },
  {
    // avatar: '/images/avatar/large/matthew.png',
    // date: 'Joined in 2013',
    header: 'Swimming Pool',
    // description: 'Primary Contact',
  },
  {
    // avatar: '/images/avatar/large/molly.png',
    // date: 'Joined in 2013',
    header: 'Badminton Court',
    // description: 'Primary Contact',
  },
  {
    // avatar: '/images/avatar/large/molly.png',
    // date: 'Joined in 2013',
    header: 'Gym',
    // description: 'Primary Contact',
  },
  {
    // avatar: '/images/avatar/large/molly.png',
    // date: 'Joined in 2013',
    header: ' Club House ',
    // description: 'Primary Contact',
  },
  {
    // avatar: '/images/avatar/large/molly.png',
    // date: 'Joined in 2013',
    header: ' Cycle tracks ',
    // description: 'Primary Contact',
  },
]

class Booking extends Component {
  constructor(props){
    super(props);
    this.inputRef = React.createRef();
  this.state = { loading: false , name:this.props.name, email:this.props.email}
  }


  handleLoadingClick = () => {
    console.log(this.state)
    this.setState({ loading: true })

    setTimeout(() => {
      this.setState({ loading: false })
    }, 3000)
  }

  render() {
    const { loading } = this.state

    return (
      <div ref={this.inputRef}>
      <h1>{this.props.name}</h1>
      <h1>{this.props.email}</h1>
      <Fragment>
        <Button loading={loading} onClick={this.handleLoadingClick} primary>
          Refresh
        </Button>
        
        
        <Divider />
        
        <Card.Group doubling itemsPerRow={3} stackable>
          {_.map(cards, (card) => (
            <Card key={card.header}>
              {loading ? (
                <Placeholder>
                  <Placeholder.Image square />
                </Placeholder>
              ) : (
                <Image src={card.avatar} />
              )}

              <Card.Content>
                {loading ? (
                  <Placeholder>
                    <Placeholder.Header>
                      <Placeholder.Line length='very short' />
                      <Placeholder.Line length='medium' />
                    </Placeholder.Header>
                    <Placeholder.Paragraph>
                      <Placeholder.Line length='short' />
                    
                    </Placeholder.Paragraph>
                  </Placeholder>
                ) : (
                  <Fragment>
                    <Card.Header>{card.header}</Card.Header>
                    <Card.Meta>{card.date}</Card.Meta>
                    <Card.Description>{card.description}</Card.Description>
                  </Fragment>
                )}
              </Card.Content>

              <Card.Content extra>
                {loading?(
                <Placeholder.Line length='short' />
                ):<ConfirmExampleConfirm name={this.state.name} email={this.state.email} type={card.header}/>}
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </Fragment>
      </div>
    )
  }
}
export default Booking 
