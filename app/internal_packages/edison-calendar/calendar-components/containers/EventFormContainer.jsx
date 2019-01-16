import { addNewEvent } from '../actions/calendar-events';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Form from '../components/EventForm';
import styles from '../../styles/EventForm.less';

const mapStateToProps = state => {
  return {
    events: state.events,
  }
}

const mapDispatchToProps = { addNewEvent }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles)(Form)));
