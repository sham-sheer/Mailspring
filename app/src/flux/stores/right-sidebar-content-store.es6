import _ from 'underscore';
import Rx from 'rx-lite';
import MailspringStore from 'mailspring-store';

import Utils from '../models/utils';
import Thread from '../models/thread';
import Actions from '../actions';
import Contact from '../models/contact';
import MessageStore from './message-store';
import AccountStore from './account-store';
import DatabaseStore from './database-store';
import SearchQueryParser from '../../services/search/search-query-parser';
import { FocusedContactsStore} from 'mailspring-exports';

// A store that handles the focuses collections of and individual contacts
class RightSidebarContentStore extends MailspringStore {
  constructor() {
    super();
    this.listenTo(Actions.changeRightSidebarContentType, this._onchangeRightSidebarContentType);
    this.listenTo(Actions.changeRightSidebarContentData, this._onchangeRightSidebarContentData);
  }

  _onchangeRightSidebarContentType = type => {
    this.contentType = type;
    this.trigger();
  }
  _onchangeRightSidebarContentData = data => {
    this.contentData = data;
    this.trigger();
  }
}

export default new RightSidebarContentStore();
