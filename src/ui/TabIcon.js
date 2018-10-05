import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { AppColors, AppStyles, AppSizes } from '@theme';
import PropTypes from 'prop-types'
import { Badge } from 'react-native-elements';

const propTypes = {
  selected: PropTypes.bool,
  title: PropTypes.string,
  showBadge: PropTypes.bool,
};

const styles = StyleSheet.create({
  badgeContainer: {
    backgroundColor: AppColors.red,
    paddingLeft: 6,
    paddingRight: 6
  },
  badge: {
    position: 'absolute',
    right: 5,
    top: 5,
  }
});

class TabIcon extends Component {

  render() {
    const { showBadge, unreadNotification, focused, iconActive, iconInactive, title } = this.props;
    
    return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Image source={focused ? iconActive : iconInactive} style={{ width: 24, height: 24 }} resizeMode="contain" />
        <Text style={{ ...AppStyles.subTextSemibold, color: focused ? AppColors.orange : AppColors.gray, height: 15, width: '100%', marginTop: 1 }}>{title}</Text>
        {
          showBadge && !!unreadNotification && unreadNotification.length > 0 &&
          <Badge value={unreadNotification.length}
            wrapperStyle={styles.badge}
            containerStyle={styles.badgeContainer}
            textStyle={[AppStyles.tinyText, { color: AppColors.white }]}
          />
        }
      </View>
    );
  }
};

TabIcon.propTypes = propTypes;

export default TabIcon;
