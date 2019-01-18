import { React, WorkspaceStore } from 'mailspring-exports';
import { InjectedComponent } from 'mailspring-component-kit';
import DoneIcon from '../../edison-beijing-chat/chat-components/components/common/icons/DoneIcon';
import CancelIcon from '../../edison-beijing-chat/chat-components/components/common/icons/CancelIcon';
import { theme } from '../../edison-beijing-chat/chat-components/utils/colors';
import EmojiIcon from '../../edison-beijing-chat/chat-components/components/common/icons/EmojiIcon';
import InfoIcon from '../../edison-beijing-chat/chat-components/components/common/icons/InfoIcon';
import { ApplicationAutoScaling } from 'aws-sdk';
const { primaryColor } = theme;
import rightSideBarDemoStore from './right-sidebar-demo-store';


export default class RightSidebarDemo extends React.Component {
  static displayName = 'RightSidebarDemo';
  constructor(props) {
    super(props);
    this.state = {content:{}};
  }
  componentDidMount(){
    this.unsubscribe = rightSideBarDemoStore.listen(this._onChange);
  }
  componentWillUnmount() {
    this.unsubscribe();
    
  }

  _onChange = () => {
    this.setState(this._getStateFromStores());
  };

  _getStateFromStores() {
    return {
      content: rightSideBarDemoStore.getContent()
    };
  }
  render() {
    const content = this.state.content;
    return (
      <div className="sidebar-demo">
        <h3>this is right side bar demo.</h3>
        <p> {this.props.data.message}</p>
        <p> {content.message + content.id}</p>
       </div>
    );
  }
}
