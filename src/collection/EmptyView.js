import React, { Component } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import CollectionMode from './CollectionMode';
import CollectionStyles from './CollectionStyles';

// create a component
class EmptyView extends Component {
  // static propTypes = {
  //   mode: React.PropTypes.oneOf(CollectionMode.HIDDEN, CollectionMode.EMPTY
  //     , CollectionMode.PROGRESS, CollectionMode.ERROR),
  //   renderEmptyView: React.PropTypes.func,
  //   renderProgress: React.PropTypes.func,
  //   renderErrorView: React.PropTypes.func,
  //   retry: React.PropTypes.func,
  //   emptyText: React.PropTypes.string,
  //   filterEmptyText: React.PropTypes.string,
  // }

  static defaultProps = {
    mode: CollectionMode.HIDDEN,
    renderEmptyView: null,
    renderProgress: null,
    renderErrorView: null,
    retry: null,
    emptyText: 'No result',
    filterEmptyText: 'Sorry, there are no results.',
  }

  /**
   * Should not be override this method
   */
  renderEmptyViewInternal() {
    if (this.props.mode !== CollectionMode.EMPTY) return null;
    return this.props.renderEmptyView ? this.props.renderEmptyView() : this.renderEmptyView();
  }

  /**
   * Should not be override this method
   */
  renderFilterEmptyViewInternal() {
    if (this.props.mode !== CollectionMode.FILTER_EMPTY) return null;
    return this.props.renderFilterEmptyView ? this.props.renderFilterEmptyView() : this.renderFilterEmptyView();
  }

  /**
   * Should not be override this method
   */
  renderProgressInternal() {
    if (this.props.mode === CollectionMode.PROGRESS) {
      if (!this.props.renderProgress) {
        return this.renderProgress();
      }
      return this.props.renderProgress();
    }
    return null;
  }

  retryInternal() {
    if (this.props.retry) {
      this.props.retry();
    }
  }

  /**
   * Should not be override this method
   */
  renderErrorViewInternal() {
    if (this.props.mode === CollectionMode.ERROR) {
      if (!this.props.renderErrorView) {
        return this.renderErrorView();
      }
      return this.props.renderErrorView();
    }
    return null;
  }

  /**
   * Override incase build another EmptyView in whole system
   * Incase change only few cases, we should use props.renderEmptyView
   */
  renderEmptyView() {
    return (<Text style={CollectionStyles.textEmpty}>{this.props.emptyText}</Text>);
  }

   /**
   * Override incase build another EmptyView in whole system
   * Incase change only few cases, we should use props.renderFilterEmptyView
   */
  renderFilterEmptyView() {
    return (<Text style={CollectionStyles.textEmpty}>{this.props.filterEmptyText}</Text>);
  }

  /**
   * Override incase build another EmptyView in whole system
   * Incase change only few cases, we should use props.renderProgress
   */
  renderProgress() {
    return (<ActivityIndicator />);
  }

  /**
   * Override incase build another EmptyView in whole system
   * Incase change only few cases, we should use props.renderErrorView
   */
  renderErrorView() {
    return (
      <View>
        <Text style={CollectionStyles.textError}>Error View, insert a button to retry</Text>
        <TouchableOpacity activeOpacity={0.8} onPress={() => this.retryInternal()} style={CollectionStyles.buttonRetry}>
          <Text style={CollectionStyles.textButtonRetry}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    // If mode not set or hidden do not render EmptyView
    if (!this.props.mode || this.props.mode === CollectionMode.HIDDEN) return null;
    // Render EmptyView coresponds with it's mode
    return (
      // pointerEvents to prevent touch to EmptyView and pass through to under component.
      // But still accept its children view receive touch.
      <View style={CollectionStyles.emptyContainer} pointerEvents="box-none">
        {this.renderEmptyViewInternal()}
        {this.renderErrorViewInternal()}
        {this.renderProgressInternal()}
        {this.renderFilterEmptyViewInternal()}
      </View>
    );
  }
}

export default EmptyView;
