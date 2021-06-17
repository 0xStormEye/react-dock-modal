import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Modal, ModalBody } from 'reactstrap';
import Dock from 'react-dock';
import { FaRegWindowMinimize, FaWindowMaximize } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { FiMaximize2 } from 'react-icons/fi';
import { BsBoxArrowInDown } from 'react-icons/bs';
import { isMobile } from 'react-device-detect';

var styles = {"dmPointer":"_30XxJ","dmFill":"_2SuDt"};

var DockModal = function DockModal(props) {
  var initalType = props.initalType,
      headerName = props.headerName,
      bgcolor = props.bgcolor,
      fgcolor = props.fgcolor,
      fweight = props.fweight,
      children = props.children,
      params = props.params;

  var _useState = useState(initalType),
      type = _useState[0],
      setType = _useState[1];

  var _useState2 = useState(true),
      isVisible = _useState2[0],
      toggleVisibility = _useState2[1];

  var headerStyle = {
    backgroundColor: bgcolor || 'black',
    color: fgcolor || 'white',
    fontWeight: fweight || 'bold'
  };
  var desktopDockWidth = '40%';
  var desktopDockHeight = '70%';
  var minimDockWidth = '25%';
  var minimDockHeight = '10%';
  var defaultModalWidth = '70%';
  var defaultModalHeight = '650px';

  if (params) {
    var dockWidth = params.dockWidth,
        dockHeight = params.dockHeight,
        minimWidth = params.minimWidth,
        minimHeight = params.minimHeight,
        modalWidth = params.modalWidth,
        modalHeight = params.modalHeight;
    desktopDockWidth = dockWidth || desktopDockWidth;
    desktopDockHeight = dockHeight || desktopDockHeight;
    minimDockWidth = minimWidth || minimDockWidth;
    minimDockHeight = minimHeight || minimDockHeight;
    defaultModalWidth = modalWidth || defaultModalWidth;
    defaultModalHeight = modalHeight || defaultModalHeight;
  }

  var defaultModalStyles = {
    minWidth: defaultModalWidth,
    margin: 'auto',
    position: 'absolute',
    "float": 'left',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  };
  var dockStyles = {
    position: 'fixed',
    zIndex: 1,
    boxShadow: '0 0 4px rgba(0, 0, 0, 0.3)',
    background: 'white',
    left: isMobile ? '10px' : 'unset',
    top: 'unset',
    width: isMobile ? '90%' : desktopDockWidth,
    height: isMobile ? '100%' : desktopDockHeight,
    right: '10px',
    bottom: '5px',
    borderRadius: '15px 15px 0px 0px',
    overflow: 'hidden',
    margin: isMobile ? 'auto' : 'unset'
  };
  var minDockStyles = {
    position: 'fixed',
    zIndex: 1,
    boxShadow: '0 0 4px rgba(0, 0, 0, 0.3)',
    background: 'white',
    left: 'unset',
    top: 'unset',
    width: minimDockWidth,
    height: minimDockHeight,
    right: '10px',
    bottom: '5px',
    borderRadius: '15px 15px 0px 0px',
    overflow: 'hidden',
    margin: isMobile ? 'auto' : 'unset'
  };

  if (type === 'dock') {
    return /*#__PURE__*/React.createElement(Dock, {
      position: "bottom",
      isVisible: isVisible,
      fluid: true,
      dimMode: "none",
      size: 0.6,
      dockStyle: dockStyles
    }, /*#__PURE__*/React.createElement(Row, {
      style: headerStyle,
      className: "m-0"
    }, /*#__PURE__*/React.createElement(Col, {
      xs: "6",
      sm: "6",
      md: "8",
      lg: "9",
      xl: "9"
    }, headerName), /*#__PURE__*/React.createElement(Col, {
      xs: "6",
      sm: "6",
      md: "4",
      lg: "3",
      xl: "3",
      className: "float-right text-right"
    }, /*#__PURE__*/React.createElement(FaRegWindowMinimize, {
      className: styles.dmPointer,
      onClick: function onClick(e) {
        return setType('minim');
      }
    }), /*#__PURE__*/React.createElement(FaWindowMaximize, {
      className: styles.dmPointer,
      onClick: function onClick(e) {
        return setType('modal');
      }
    }), /*#__PURE__*/React.createElement(MdClose, {
      className: styles.dmPointer,
      onClick: function onClick(e) {
        return toggleVisibility(false);
      }
    }))), /*#__PURE__*/React.createElement("div", {
      className: "m-1"
    }, children));
  } else if (type === 'minim') {
    return /*#__PURE__*/React.createElement(Dock, {
      position: "bottom",
      isVisible: isVisible,
      fluid: true,
      dimMode: "none",
      size: 0.05,
      dockStyle: minDockStyles
    }, /*#__PURE__*/React.createElement(Row, {
      style: headerStyle,
      className: 'm-0 ' + styles.dmFill
    }, /*#__PURE__*/React.createElement(Col, {
      xs: "4",
      sm: "5",
      md: "6",
      lg: "7",
      xl: "8"
    }, headerName), /*#__PURE__*/React.createElement(Col, {
      xs: "8",
      sm: "7",
      md: "6",
      lg: "5",
      xl: "4",
      className: "float-right text-right"
    }, /*#__PURE__*/React.createElement(FiMaximize2, {
      className: styles.dmPointer,
      onClick: function onClick(e) {
        return setType('dock');
      }
    }), /*#__PURE__*/React.createElement(FaWindowMaximize, {
      className: styles.dmPointer,
      onClick: function onClick(e) {
        return setType('modal');
      }
    }), /*#__PURE__*/React.createElement(MdClose, {
      className: styles.dmPointer,
      onClick: function onClick(e) {
        return toggleVisibility(false);
      }
    }))), /*#__PURE__*/React.createElement("div", {
      hidden: true
    }, children));
  } else if (type === 'modal') {
    return /*#__PURE__*/React.createElement(Modal, {
      isOpen: isVisible,
      style: defaultModalStyles
    }, /*#__PURE__*/React.createElement(ModalBody, {
      className: "p-0",
      style: {
        minHeight: defaultModalHeight
      }
    }, /*#__PURE__*/React.createElement(Row, {
      style: headerStyle,
      className: "m-0"
    }, /*#__PURE__*/React.createElement(Col, {
      xs: "9",
      sm: "9",
      md: "10",
      lg: "10",
      xl: "10"
    }, headerName), /*#__PURE__*/React.createElement(Col, {
      xs: "3",
      sm: "3",
      md: "2",
      lg: "2",
      xl: "2",
      className: "float-right text-right"
    }, /*#__PURE__*/React.createElement(FaRegWindowMinimize, {
      className: styles.dmPointer,
      onClick: function onClick(e) {
        return setType('minim');
      }
    }), /*#__PURE__*/React.createElement(BsBoxArrowInDown, {
      className: styles.dmPointer,
      onClick: function onClick(e) {
        return setType('dock');
      }
    }), /*#__PURE__*/React.createElement(MdClose, {
      className: styles.dmPointer,
      onClick: function onClick(e) {
        return toggleVisibility(false);
      }
    }))), /*#__PURE__*/React.createElement("div", {
      className: "m-1"
    }, children)));
  } else {
    return null;
  }
};

DockModal.defaultProps = {
  initalType: 'dock',
  headerName: 'New DockModal',
  bgcolor: 'black',
  fgcolor: 'white',
  fweight: 'bold',
  params: {
    dockWidth: '40%',
    dockHeight: ' 70%',
    minimWidth: '25%',
    minimHeight: '10%',
    modalWidth: '70%',
    modalHeight: '650px'
  }
};

export default DockModal;
//# sourceMappingURL=index.modern.js.map
