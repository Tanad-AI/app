"use client";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
const borderColor = "#90e5fc";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  row: {
    flexDirection: "row",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    alignItems: "center",
    height: 24,
    fontSize: 12,
    fontStyle: "bold",
  },
  description: {
    width: "85%",
    textAlign: "right",
    borderRightColor: "black",
    borderRightWidth: 1,
    paddingRight: 8,
  },
  total: {
    width: "15%",
    textAlign: "right",
    paddingRight: 8,
  },
});

// Create Document Component
const page = () => (
  <PDFViewer height={900} width={1000}>
    <Document>
      <Page size="A4" orientation="portrait" style={styles.page}>
        {/* <View style={styles.section}>
          <Text>
            @react-pdf/renderer dslafjkds react-pdf/renderer
            dslafjkdsreact-pdf/renderer dslafjkdsreact-pdf/renderer
            dslafjkdsreact-pdf/renderer dslafjkdsreact-pdf/renderer
            dslafjkdsreact-pdf/renderer dslafjkdsreact-pdf/renderer
          </Text>
        </View> */}
        <View style={styles.row}>
          <Text style={styles.description}>TOTAL</Text>
          <Text style={styles.total}>;laldk</Text>
        </View>
      </Page>
    </Document>
  </PDFViewer>
);

export default page;
