import React from "react";
import { Page, Text, Image, Document, StyleSheet, View } from "@react-pdf/renderer";


const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

const PDFFile = () => {
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header} fixed>Pdf Created by Recipe King</Text>
          <Text style={styles.title}>
            <Text>Difference between controlled and uncontrolled components.</Text>
          </Text>
        <Text style={styles.text}>
          <Text>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally..</Text>
        </Text>
        <Text style={styles.title}>
          <Text>How to validate React props using PropTypes</Text>
        </Text>
        <Text style={styles.text}>
          <Text>React components use a special property called propTypes to set up type checking. Component.propTypes is used for props validation in react component.

          </Text>
        </Text>
        <Text style={styles.title}>
          <Text>Difference between nodejs and express js.</Text>
        </Text>
        <Text style={styles.text}>
          <Text>Express.js is a framework based on Node.js which is used for building web-application using approaches and principles of Node.js event-driven architecture. Node.js is a platform for building the i/o applications which are server-side event-driven and made using JavaScript.
            Express is a small framework that sits on top of Node.js's web server functionality to simplify its APIs and add helpful new features. It makes it easier to organize application's functionality with middle ware and routing. Express.js is a framework based on Node.js which is used for building web-application using approaches and principles of Node.js event-driven architecture.</Text>
        </Text>
        <Text style={styles.title}>
          <Text>Custom hook and its necessity
            .</Text>
        </Text>
        <Text style={styles.text}>
          <Text>A custom Hook is a JavaScript function whose name starts with use and that may call other Hooks. If you have code in a component that you feel would make sense to extract, either for reuse elsewhere or to keep the component simpler, you can pull that out into a function.

            Download</Text>
        </Text>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>
    </Document>
  );
};

export default PDFFile;