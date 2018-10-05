import React, { Component, PropTypes } from 'react';
import { Actions } from 'react-native-router-flux';
import { Image, View, StyleSheet, TouchableOpacity, Platform, Text } from 'react-native';
import { AppStyles, AppFonts, AppColors } from '@theme'

import ButtonIcon from './ButtonIcon';
import ButtonText from './ButtonText';
import { DeviceUtil } from '@util';

import { API } from '@network';


const wrapNavBarDimen = Platform.OS === 'ios' ? 44 : 55;
const REFRESH_EVENT = 'refesh_notification'

const styles = StyleSheet.create({
  navigationBar: {
    backgroundColor: AppColors.navbar.background,
    ...Platform.select({
      ios: {
        height: 64,
      },
      android: {
        height: wrapNavBarDimen,
      },
    }),
    // height: 62,
    flexDirection: 'row',
    width: '100%',
    ...Platform.select({
      android: {
        alignItems: 'center',
      },
    }),
  },
  wrapContainer: {
    flex: 1,
    height: wrapNavBarDimen,
    ...Platform.select({
      ios: {
        top: 20,
      },
    }),
  },
  backButton: {
    width: wrapNavBarDimen,
    height: wrapNavBarDimen,
  },
  rightButton: {
    width: wrapNavBarDimen,
    height: wrapNavBarDimen,
  },
  title: {
    fontFamily: AppFonts.heavy.family,
    fontSize: 16,
    backgroundColor: 'transparent',
    color: 'white',
    width: '50%',
    textAlign: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  rightView: {
    flexDirection: 'row',
    height: wrapNavBarDimen,
    position: 'absolute',
    right: 4,
    alignItems: 'center',
  },
})

class NavBar extends Component {
  static defaultProps = {
    title: '',
    enableNotification: false,
  }

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const _titleStyle = {};
    const _titleContainerStyle = {};

    if (this.props.left) {
      _titleContainerStyle.alignItems = 'flex-start';
      _titleStyle.textAlign = 'left';
      _titleStyle.marginLeft = 40;
    }

    const {
      rightView,
      contentView,
      title,
      rightButtonTitle,
      rightButtonEnable,
      rightButtonAction,
      leftButtonAction,
      hideBackButton,
      customTitleStyle,
      leftBarButton,
      rightBarButton,
      customLeftStyle,
      customRightStyle,
      customBackgroundColor,
      iconBackColor,
      enableNotification,
      customBackAction,
      customBackButton,
      containerStyle,
      haveLine,
    } = this.props

    const iphoneXCustomHeight = DeviceUtil.isIPhoneX() ? { ...AppStyles.ipXNavBarHeight } : {}
    const iphoneXCustomTop = DeviceUtil.isIPhoneX() ? { ...AppStyles.ipXNavBarTop } : {}
    return (
      <View style={[styles.navigationBar, iphoneXCustomHeight, { backgroundColor: customBackgroundColor ? customBackgroundColor : AppColors.orange }, containerStyle]}>
        <View flexDirection='row' style={[styles.wrapContainer, iphoneXCustomTop]}>
          <View style={[styles.titleContainer, _titleContainerStyle]}>
            {contentView ? contentView : <Text numberOfLines={1} style={[styles.title, _titleStyle, customTitleStyle]}>{title}</Text>}
          </View>
          {!hideBackButton && (customBackButton ? <ButtonIcon containerStyle={styles.backButton} source={customBackButton} action={() => {
            if (customBackAction) {
              customBackAction()
            } else {
              Actions.pop();
            }
          }} />
            :
            <ButtonIcon containerStyle={styles.backButton} iconName='keyboard-backspace' iconSize={24} iconColor={iconBackColor ? iconBackColor : 'white'} action={() => {
              if (customBackAction) {
                customBackAction()
              } else {
                Actions.pop();
              }
            }} />)}
          {leftBarButton && <ButtonIcon containerStyle={[styles.backButton, { marginLeft: 5 }, customLeftStyle]} source={leftBarButton} action={() => {
            if (leftButtonAction) {
              leftButtonAction();
            }
          }} />}
          <View style={styles.rightView}>
            {rightView && rightView}
            {rightButtonTitle && <ButtonText
              containerStyle={styles.rightButton}
              enable={rightButtonEnable}
              content={rightButtonTitle} onClick={() => {
                rightButtonAction && rightButtonAction()
              }} />}
            {rightBarButton && <ButtonIcon containerStyle={[styles.rightButton, { marginRight: 5 }, customRightStyle]} source={rightBarButton} action={() => {
              if (rightButtonAction) {
                rightButtonAction();
              }
            }} />}
          </View>
        </View>
        {haveLine && <View style={{ position: 'absolute', bottom: 0, width: '100%', height: 2, backgroundColor: '#dd7d08' }} />}
      </View>
    )
  }
}

// const mapStateToProps = state => ({
//   haveUnreadNotification: state.appstate.haveUnreadNotification,
// })

// // Any actions to map to the component?
// const mapDispatchToProps = {
// }

export default NavBar;