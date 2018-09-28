import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CheckBox from '../../common/icons/CheckBox';
import ContactAvatar from '../../common/ContactAvatar';
import { theme } from '../../../utils/colors';

const { primaryColor } = theme;

export default class NewContactsList extends PureComponent {
  static propTypes = {
    onContactClicked: PropTypes.func,
    groupMode: PropTypes.bool,
    contacts: PropTypes.arrayOf(PropTypes.shape({
      jid: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })),
    selectedContacts: PropTypes.arrayOf(PropTypes.shape({
      jid: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })),
  }

  static defaultProps = {
    onContactClicked: () => { },
    groupMode: false,
    contacts: [],
    selectedContacts: [],
  }

  render() {
    const {
      contacts,
      selectedContacts,
      groupMode,
      onContactClicked,
    } = this.props;

    const jids = new Set(selectedContacts.map(contact => contact.jid));
    const getContactItemClasses = contact => {
      const classes = ['contactItem'];
      if (jids.has(contact.jid)) {
        classes.push('selected');
      }
      return classes.join(' ');
    };

    return (
      <div className="contactsList">
        {
          contacts.map(contact =>
            <div
              key={contact.jid}
              className={getContactItemClasses(contact)}
              onTouchTap={() => onContactClicked(contact)}
            >
              <ContactAvatar name={contact.name} jid={contact.jid} size={32} />
              <span className="contactName">{contact.name}</span>
              {groupMode ?
                <CheckBox
                  checked={jids.has(contact.jid)}
                  checkColor={primaryColor}
                  circleColor="#444"
                  size={18}
                /> :
                null
              }
            </div>
          )
        }
      </div>
    );
  }
}