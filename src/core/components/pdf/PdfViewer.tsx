/**
 * Copyright (c) 2017-present, Wonday (@wonday.org)
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { useRoute } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import Pdf from "react-native-pdf";

export default function PDFViewer() {
  const { url } = useRoute().params as { url: string };
  return (
    <View style={styles.container}>
      <Pdf source={{ uri: url }} style={styles.pdf} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  pdf: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
