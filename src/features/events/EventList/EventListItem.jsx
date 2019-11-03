import React, { Component } from '../../../../node_modules/react'
import { Segment, Item, Icon, List, Button} from '../../../../node_modules/semantic-ui-react'
import EventListAttendee from '../EventList/EventListAttendee'
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';

export default class EventListItem extends Component {
    render() {
        const {event, deleteEvent} = this.props;
        return (
        
                 <Segment.Group>
                    <Segment>
                      <Item.Group>
                        <Item>
                          <Item.Image size="tiny" circular src={event.hostPhotoURL} />
                          <Item.Content>
                            <Item.Header>{ event.title }</Item.Header>
                            <Item.Description>
                              Hosted by {event.hostedBy}
                            </Item.Description>
                          </Item.Content>
                        </Item>
                      </Item.Group>
                    </Segment>
                    <Segment>
                      <span>
                        <Icon name="clock" /> {format(parseISO(event.date), 'EEEE do LLL')} at {' '} {format(parseISO(event.date), 'h:mm a')} |
                        <Icon name="marker" /> {event.venue}
                      </span>
                    </Segment>
                    <Segment secondary>
                      <List horizontal>
                        {event.attendees && event.attendees.map(attendee => (
                          <EventListAttendee key={attendee.id} attendee = {attendee}/>

                        ))}
                        
                      </List>
                    </Segment>
                    <Segment clearing>
                      <span>{event.description}</span>
                      <Button onClick={()=>deleteEvent(event.id)} as="a" color="red" floated="right" content="Delete" />
                      <Button  as={Link} to={`/events/${event.id}`} color="teal" floated="right" content="View" />
                    </Segment>
                 </Segment.Group>
        )
    }
}
