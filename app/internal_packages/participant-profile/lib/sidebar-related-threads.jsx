import { React, PropTypes, Actions, DateUtils } from 'mailspring-exports';

export default class RelatedThreads extends React.Component {
  static displayName = 'RelatedThreads';

  static propTypes = {
    contact: PropTypes.object,
    contactThreads: PropTypes.array,
  };

  static containerStyles = {
    order: 99,
  };

  constructor(props) {
    super(props);
    this.state = { expanded: false };
    this.DEFAULT_NUM = 3;
  }

  _onClick(thread) {
    Actions.setFocus({ collection: 'thread', item: thread });
  }

  _toggle = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  _renderToggle() {
    if (!this._hasToggle()) {
      return false;
    }
    const msg = this.state.expanded ? 'Collapse' : 'Show more';
    return (
      <div className="toggle" onClick={this._toggle}>
        {msg}
      </div>
    );
  }

  _hasToggle() {
    const contactThreads = this.props.data.contactThreads || [];
    return contactThreads.length > this.DEFAULT_NUM;
  }

  render() {
    let limit;
    const contactThreads = this.props.data.contactThreads || [];
    if (this.state.expanded) {
      limit = contactThreads.length;
    } else {
      limit = Math.min(contactThreads.length, this.DEFAULT_NUM);
    }

    const height = (limit + (this._hasToggle() ? 1 : 0)) * 31;
    const shownThreads = contactThreads.slice(0, limit);
    const threads = shownThreads.map(thread => {
      const { snippet, subject, lastMessageReceivedTimestamp } = thread;
      const snippetStyles = subject && subject.length ? { marginLeft: '1em' } : {};
      const onClick = () => {
        this._onClick(thread);
      };

      return (
        <div key={thread.id} className="related-thread" onClick={onClick}>
          <span className="content" title={subject}>
            {subject}
            <span className="snippet" style={snippetStyles}>
              {snippet}
            </span>
          </span>
          <span
            className="timestamp"
            title={DateUtils.fullTimeString(lastMessageReceivedTimestamp)}
          >
            {DateUtils.shortTimeString(lastMessageReceivedTimestamp)}
          </span>
        </div>
      );
    });

    return (
      <div className="related-threads" style={{ height }}>
        {threads}
        {this._renderToggle()}
      </div>
    );
  }
}
