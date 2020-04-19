/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {memo} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';

const Layout = memo(props => {
  const {children} = props;

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: 'space-between',
          flexGrow: 1,
        }}>
        {children}
      </ScrollView>
    </View>
  );
});

export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
  },
});
