import { React, WorkspaceStore, FocusedContactsStore, Actions } from 'mailspring-exports';
import { InjectedComponent } from 'mailspring-component-kit';
import DoneIcon from '../../edison-beijing-chat/chat-components/components/common/icons/DoneIcon';
import CancelIcon from '../../edison-beijing-chat/chat-components/components/common/icons/CancelIcon';
import { theme } from '../../edison-beijing-chat/chat-components/utils/colors';
import EmojiIcon from '../../edison-beijing-chat/chat-components/components/common/icons/EmojiIcon';
import InfoIcon from '../../edison-beijing-chat/chat-components/components/common/icons/InfoIcon';
import rightSideBarDemoStore from '../../right-sidebar-demo/lib/right-sidebar-demo-store';
const { primaryColor } = theme;

export default class QuickSidebar extends React.Component {
  static displayName = 'QuickSidebar';
  constructor(props) {
    super(props);
    this.state = {};
    this.id = 0;
  }
  switchToRightSidebarDemo = () => {
    Actions.changeRightSidebarContentType('Demo');
    Actions.changeRightSidebarContentData({message:'passed from props.data.message 1', store: rightSideBarDemoStore});
    Actions.changeRightSidebarDemoContent({id: this.id, message:'start demo -- '});
  }
  switchToSidebarContact = () => {
    const store = FocusedContactsStore;
    Actions.changeRightSidebarContentType('ContactCard');
    const contact = store.focusedContact();
    const focusedContactThreads = store.focusedContactThreads();
    const data = { store, contact, focusedContactThreads };
    Actions.changeRightSidebarContentData(data);
  }

  changeSidebarDemoContent = (data) => {
    const store = rightSideBarDemoStore;
    Actions.changeRightSidebarContentData({message:'passed from props.data.message 2', store});
    Actions.changeRightSidebarDemoContent({id: this.id++, message:'hello demo -- '});
  }

  render() {
    return (
      <div className="sidebar-quick">
        <InjectedComponent
          matching={{ location: WorkspaceStore.Sheet.Thread.QuickToolbar.Top }}
        />
        <div><EmojiIcon className="icon" onClick={this.switchToRightSidebarDemo}/></div>
        <div><InfoIcon className="icon" onClick={this.switchToSidebarContact}/></div>
       <div><DoneIcon color={primaryColor} onClick={this.changeSidebarDemoContent}/></div>
        <div><CancelIcon color={primaryColor}/></div>
       </div>
    );
  }
}
