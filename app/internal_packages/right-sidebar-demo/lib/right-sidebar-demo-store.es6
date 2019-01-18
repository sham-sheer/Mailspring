import MailspringStore from 'mailspring-store';
import {Actions} from 'mailspring-exports';

// A store that handles the focuses collections of and individual contacts
class RightSidebarDemoStore extends MailspringStore {
  constructor() {
    super();
    this.listenTo(Actions.changeRightSidebarDemoContent, this._onChangeContent);
  }

  getContent = () => {
    return this.content;
  }
  _onChangeContent = data => {
    console.log('cxm*** RightSidebarDemoStore: ', data);
    this.content = data;
    this.trigger();
  }
}

export default new RightSidebarDemoStore();
