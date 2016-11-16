
import React,{Component,PropTypes} from 'react';
import {
  requireNativeComponent,
  ViewPagerAndroid,
} from 'react-native';

const VIEWPAGER_REF = 'viewPager';

export class ViewPagePackage extends ViewPagerAndroid {
  render() {
    return (
      <NativeAndroidViewPager
        {...this.props}
        ref={VIEWPAGER_REF}
        style={this.props.style}
        onPageScroll={this._onPageScroll}
        onPageScrollStateChanged={this._onPageScrollStateChanged}
        onPageSelected={this._onPageSelected}
        children={this._childrenWithOverridenStyle()}
      />
    );
  }
}

const NativeAndroidViewPager = requireNativeComponent('ViewPagePackage', ViewPagePackage);
