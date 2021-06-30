import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Modal, ModalBody } from 'reactstrap';
import Dock from 'react-dock';
import { FaRegWindowMinimize } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { FiMaximize2 } from 'react-icons/fi';
import { BsBoxArrowInDown } from 'react-icons/bs';
import { isMobile } from 'react-device-detect';

var styles = {"dmPointer":"_styles-module__dmPointer__30XxJ","dmFill":"_styles-module__dmFill__2SuDt"};

const DockModal = props => {
  const {
    initalType,
    headerName,
    visible,
    bgcolor,
    fgcolor,
    fweight,
    children,
    params
  } = props;
  const [type, setType] = useState(initalType);
  const [isVisible, toggleVisibility] = useState(visible);
  const headerStyle = {
    backgroundColor: bgcolor || 'black',
    color: fgcolor || 'white',
    fontWeight: fweight || 'bold'
  };
  let desktopDockWidth = '40%';
  let desktopDockHeight = '70%';
  let minimDockWidth = '25%';
  let minimDockHeight = '10%';
  let defaultModalWidth = '70%';
  let defaultModalHeight = '650px';

  if (params) {
    const {
      dockWidth,
      dockHeight,
      minimWidth,
      minimHeight,
      modalWidth,
      modalHeight,
      dockPosX: _dockPosX,
      dockPosY: _dockPosY
    } = params;
    desktopDockWidth = dockWidth || desktopDockWidth;
    desktopDockHeight = dockHeight || desktopDockHeight;
    minimDockWidth = minimWidth || minimDockWidth;
    minimDockHeight = minimHeight || minimDockHeight;
    defaultModalWidth = modalWidth || defaultModalWidth;
    defaultModalHeight = modalHeight || defaultModalHeight;
    defaultdockPosX = _dockPosX || defaultdockPosX;
    defaultdockPosY = _dockPosY || defaultdockPosY;
  }

  const defaultModalStyles = {
    minWidth: defaultModalWidth,
    margin: 'auto',
    position: 'absolute',
    float: 'left',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  };
  const dockStyles = {
    position: 'fixed',
    zIndex: 1,
    boxShadow: '0 0 4px rgba(0, 0, 0, 0.3)',
    background: 'white',
    left: isMobile ? '10px' : 'unset',
    top: 'unset',
    width: isMobile ? '90%' : desktopDockWidth,
    height: isMobile ? '100%' : desktopDockHeight,
    right: defaultdockPosX,
    bottom: defaultdockPosY,
    borderRadius: '15px 15px 0px 0px',
    overflow: 'hidden',
    margin: isMobile ? 'auto' : 'unset'
  };
  const minDockStyles = {
    position: 'fixed',
    zIndex: 1,
    boxShadow: '0 0 4px rgba(0, 0, 0, 0.3)',
    background: 'white',
    left: 'unset',
    top: 'unset',
    width: minimDockWidth,
    height: minimDockHeight,
    right: defaultdockPosX,
    bottom: defaultdockPosY,
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
      onClick: e => setType('minim')
    }), /*#__PURE__*/React.createElement(MdClose, {
      className: styles.dmPointer,
      onClick: e => toggleVisibility(false)
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
      onClick: e => setType('dock')
    }), /*#__PURE__*/React.createElement(MdClose, {
      className: styles.dmPointer,
      onClick: e => toggleVisibility(false)
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
      onClick: e => setType('minim')
    }), /*#__PURE__*/React.createElement(BsBoxArrowInDown, {
      className: styles.dmPointer,
      onClick: e => setType('dock')
    }), /*#__PURE__*/React.createElement(MdClose, {
      className: styles.dmPointer,
      onClick: e => toggleVisibility(false)
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
  visible: true,
  bgcolor: 'black',
  fgcolor: 'white',
  fweight: 'bold',
  params: {
    dockWidth: '40%',
    dockHeight: ' 70%',
    minimWidth: '25%',
    minimHeight: '10%',
    modalWidth: '70%',
    modalHeight: '650px',
    dockPosX: '10px',
    dockPosY: '5px'
  }
};

export default DockModal;
//# sourceMappingURL=index.modern.js.map
