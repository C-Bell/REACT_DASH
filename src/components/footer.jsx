import React from 'react';

const footerStyle = {
  height: 45,
  backgroundColor: 'black',
  textAlign: 'center',
  paddingTop: '10px',
  width: '100%',
};

const logoStyle = {
  paddingTop: '10px',
};

class Footer extends React.Component {

  render() {
    return (
      <footer className="page-footer" style={footerStyle}>
        <div className="row" style={{ height: 15 }}>
          <div className="col s3">
            <a className="white-text hide-on-small-only" />
          </div>
          <div className="col s6">
            <div>
              <div className="center-align" style={logoStyle} />
            </div>
          </div>
          <div className="col s3">
            <a className="white-text right hide-on-small-only">By Calum Bell</a>
          </div>
        </div>
      </footer>
    );
  }
}
Footer.propTypes = {
  color: React.PropTypes.string.isRequired,
};
Footer.defaultProps = {
  color: 'black',
};

export default Footer;
