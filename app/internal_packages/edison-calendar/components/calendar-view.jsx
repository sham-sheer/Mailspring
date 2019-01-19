import React from "react";
import BigCalendar from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import moment from "moment";
import Modal from 'react-modal';

const localizer = BigCalendar.momentLocalizer(moment);
const DragAndDropCalendar = withDragAndDrop(BigCalendar);

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

export default class CalendarView extends React.Component {

  static displayName = "MyCalendarView";

  constructor(props) {
    super(props);
    this.state = {
      currentEvent: '',
      isShowEvent: false,
      currentEventStartDateTime: '',
      events: [
        {
          allDay: false,
          end: new Date('December 12, 2018 02:13:00'),
          start: new Date('December 12, 2018 01:13:00'),
          title: 'New Event',

        }
      ]
    };
  }

  componentWillMount() {
    //Modal.setAppElement('body');

  }

  componentDidMount() {
    //this.props.getEvents();
  }

  moveEventList = ({ event, start, end }) => {
      const events = this.state.events;

      const idx = events.indexOf(event);
      const updatedEvent = { ...event, start, end };

      const nextEvents = [...events];
      nextEvents.splice(idx, 1, updatedEvent);
      //this.state.updateEvents(nextEvents);
  }

  resizeEvent = (resizeType, { event, start, end }) => {
    const events = this.state.events;

    const nextEvents = events.map(existingEvent => {
      return existingEvent.id === event.id
        ? { ...existingEvent, start, end }
        : existingEvent;
    });
    //this.props.updateEvents(nextEvents);
  }

  handleSelectDate = ({ start, end }) => {
    //this.props.history.push(`/${start}/$${end}`);
  }

  handleEventClick = (event) => {
    this.setState({
      isShowEvent: true,
      currentEvent: event,
      currentEventStartDateTime: moment(event.start).format("D, MMMM YYYY, h:mm a"),
      currentEventEndDateTime: moment(event.end).format("D, MMMM Do YYYY, h:mm a"),
    })
  }

  close = () => {
    this.setState({
      isShowEvent: false
    })
  }

  afterOpenModal = () => {
    // references are now sync'd and can be accessed.
  }

  _renderCalendar = () => {
    return (
      <BigCalendar
        selectable
        localizer={localizer}
        events={this.state.events}
        onEventDrop={this.moveEventList}
        onEventResize={this.resizeEvent}
        onSelectSlot={this.handleSelectDate}
        onSelectEvent={(event) => this.handleEventClick(event)}
        popup
        resizable
      />
    )
  }

  render() {
    const content = this._renderCalendar();
    debugger
    return (
      <div className="calendar-view">
        {content}
      </div>
    );
  }
}
