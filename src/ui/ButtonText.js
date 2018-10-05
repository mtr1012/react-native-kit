import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Keyboard } from 'react-native';
import { Button, Text } from 'native-base';
import AppStyles from '../theme/styles'
import AppColors from '../theme/colors'
import AppSizes from '../theme/sizes'
import AppFonts from '../theme/fonts'
import PropTypes from 'prop-types';
import _ from 'lodash'

class ButtonText extends Component {

  static propsType = {
    enable: PropTypes.bool,
    content: PropTypes.string,
    onClick: PropTypes.func,
    buttonStyle: PropTypes.object,
    textStyle: PropTypes.object,
    textStyleDisable: PropTypes.object,
  }

  static defaultProps = {
    enable: true,
    content: 'Done',
    onClick: () => {

    },
    buttonStyle: {
      width: '100%',
      height: '100%',
      backgroundColor: 'blue',
    },
  }

  onClick = () => {
    this.props.onClick();
    Keyboard.dismiss();
  }
  render() {
    const {
      containerStyle,
      enable,
      content,
      onClick,
      buttonStyle,
      textStyle,
      textStyleDisable,
    } = this.props;
    const styleText = [
      styles.text,
      enable ? styles.enable : styles.disabled,
      enable ? textStyle : textStyleDisable];
    // const styleDisable = [styles.text, styles.disabled, textStyleDisable];
    return (
      <TouchableOpacity keyboardShouldPersistTaps='always' disabled={!enable} onPress={onClick ? _.throttle(this.onClick, 2000, { 'trailing': false }) : null}>
        <View style={[styles.containerStyle, containerStyle && containerStyle]}>
          <Text
            style={styleText}
            content={content} />
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    paddingHorizontal: AppSizes.padding,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
  },
  enable: {
    color: AppColors.white,
  },
  disabled: {
    color: 'rgba(250, 250, 250, 0.5)',
  }
})

export default ButtonText;