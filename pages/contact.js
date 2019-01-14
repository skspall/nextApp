import React from 'react';

class ContactPage extends React.Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    return { userAgent };
  }

  render() {
    return (
      <div>
        <p>You tried to reach us through: {this.props.userAgent}</p>
        <p>Reach us from anywhere</p>
      </div>
    )
  }
}

export default ContactPage;