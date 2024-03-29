import React, { Component, Fragment } from '../../../../node_modules/react'
import EventListItem from './EventListItem'

export default class EventList extends Component {
    render() {
        const {events, deleteEvent} = this.props
        return (
            <Fragment>

                {events.map(event => (
                    <EventListItem  key ={event.id} event={event}  deleteEvent={deleteEvent}/>

                ))}
            </Fragment>
        )
    }
}

