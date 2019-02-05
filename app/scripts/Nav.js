import React from 'react';
import {Link} from 'react-router';

module.exports = React.createClass({

  render: function () {
    return (
      <div>
        <Link to={'/'}>About</Link>
        <Link to={'/gallery'}>Gallery</Link>
      </div>
    );
  }
});
