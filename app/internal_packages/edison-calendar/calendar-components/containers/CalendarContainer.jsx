import { withRouter } from 'react-router-dom';
import { updateEvents, getEvents } from '../actions/calendar-events';
import { connect } from 'react-redux';
import CalendarView from '../components/CalendarView';


const mapStateToProps = state => {
  return {
    events: state.events,
  }
}

const mapDispatchToProps = dispatch => ({
  updateEvents: (nextEvents) => dispatch(updateEvents(nextEvents)),
  getEvents: () => dispatch(getEvents())

})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CalendarView));
