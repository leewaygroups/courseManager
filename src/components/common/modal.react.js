'use strict';

var React = require('react');

var Modal = React.createClass({
   close: function(event) {
      event.preventDefault();
      if (this.props.onClose) {
        this.props.onClose();
      }
    },

    render: function() {
      if (this.props.isOpen === false){
          return null;
      }

      var modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '9999',
        background: '#fff'
      };

       if (this.props.width && this.props.height) {
        modalStyle.width = this.props.width + 'px';
        modalStyle.height = this.props.height + 'px';
        modalStyle.marginLeft = '-' + (this.props.width / 2) + 'px';
        modalStyle.marginTop = '-' + (this.props.height / 2) + 'px';
        modalStyle.transform = null;
      }

      if (this.props.style) {
        for (var key in this.props.style) {
          modalStyle[key] = this.props.style[key];
        }
      }

       var backdropStyle = {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '0px',
        left: '0px',
        zIndex: '9998',
        background: 'rgba(0, 0, 0, 0.3)'
      };

       if (this.props.backdropStyle) {
        for (var prop in this.props.backdropStyle) {
          backdropStyle[prop] = this.props.backdropStyle[prop];
        }
      }

      var backdrop = {};
       if(!this.props.noBackdrop){
           backdrop = (
              <div className={this.props.backdropClassName} style={backdropStyle}
                    onClick={this.close}>
              </div>
            );
        }

      return (
         <div className={this.props.containerClassName}>
          <div className={this.props.className} style={modalStyle}>
            {this.props.children}
          </div>
          {backdrop}
        </div>
      );
    }
});

module.exports = Modal;
