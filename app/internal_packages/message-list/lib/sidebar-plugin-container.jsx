import { React, PropTypes, FocusedContactsStore, RightSidebarContentStore } from 'mailspring-exports';
import { InjectedComponentSet } from 'mailspring-component-kit';

export default class SidebarContainer extends React.Component {
  static displayName = 'FocusedContactStorePropsContainer';

  constructor(props) {
    super(props);
    this.state = this._getStateFromStores();
  }

  componentDidMount() {
    this.unsubscribe1 = RightSidebarContentStore.listen(this._onChange);
    const data = this.state.rightSidebarContentData;
    if (data && data.store) {
      this.unsubscribe2 = data.store.listen(this._onChange);
    }    
   }

  componentWillUnmount() {
    this.unsubscribe1();
    if (this.unsubscribe2) {
      this.unsubscribe2();
    }
  }

  _onChange = () => {
    this.setState(this._getStateFromStores());
  };

  _getStateFromStores() {
    return {
      rightSidebarContentType: RightSidebarContentStore.contentType,
      rightSidebarContentData: RightSidebarContentStore.contentData,
    };
    if (this.unsubscribe2){
      this.unsubscribe2();
    }
    const data = this.state.rightSidebarContentData;
    if (data && data.store) {
      this.unsubscribe2 = data.store.listen(this._onChange);
    }
  }

  render() {
    let classname = 'sidebar-section';
    let inner = null;
    const props = this.props;

    classname += ' visible';
    inner = (
      <InjectedComponentSet
        className="sidebar-content"
        key={this.state.rightSidebarContentType}
        matching={{ role: `RightSidebar:${this.state.rightSidebarContentType}` }}
        direction="column"
        exposedProps={{
          data: this.state.rightSidebarContentData
        }}
      />
    );
  
    return <div className={classname}>{inner}</div>;
  }
}
