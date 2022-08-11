// import React, { useState } from "react";
// import { StyleSheet, Text, View, SafeAreaView } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// //will eventually create a navagation page

// export default function GetInspired(props) {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>This is Get Inspired Page!</Text>
//     </View>
//   );
// }
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  TextInput,
  FlatList,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function GetInspired({
  inspired,
  following,
  followUser,
  removeFollower,
  pictures,
  // navigation,
}) {
  const navigation = useNavigation();
  for (var i = 0; i < inspired.length; i++) {
    if (inspired[i].length === 0) {
      inspired.splice(i, 1);
    }
  }
  var colors = [
    "#dfc1ff",
    "#f8c3db",
    "#93cff6",
    "#adf087",
    "#9bebff",
    "#fae27d",
  ];

  const renderProfile = ({ item }) => {
    var picUrl = pictures[item[0].username];
    // console.log("THIS IS THE PIC URL: ", picUrl);
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Users Profile", {
            data: item,
            image: "hi",
            color: randomColor,
            pictures: pictures,
          });
        }}
        style={[
          styles.card,
          {
            borderColor: randomColor,
          },
        ]}
      >
        <View style={styles.cardContent}>
          <Pressable
            onPress={() => {
              removeFollower(item[0].username);
            }}
          >
            {following.following.includes(item[0].username) && (
              <Text>Following</Text>
            )}
          </Pressable>
          <Pressable
            onPress={() => {
              followUser(item[0].username);
            }}
          >
            {!following.following.includes(item[0].username) && (
              <Text>Follow +</Text>
            )}
          </Pressable>
          <Image
            style={[styles.image, styles.imageContent]}
            source={{
              uri: picUrl,
            }}
          />
          <Text style={styles.name}>
            {item[0].username !== undefined && (
              <Text> {item[0].username} </Text>
            )}
            {/* {console.log("DOESS THIS WORK?:", item)} */}
            {/*username goes here */}
          </Text>
        </View>
        <View style={[styles.cardContent, styles.tagsContent]}>
          {item.map((picture, index) => {
            return (
              <Image
                key={index}
                style={styles.food}
                source={{
                  uri: picture.image,
                }}
              />
            );
          })}
        </View>
      </TouchableOpacity>
    );
  };
  // console.log("This works", username);
  // };
  // console.log("WHAT IS INSPIREDSDKLFJKALSDJKLASJDLK------------: ", inspired);
  return (
    <View style={styles.container}>
      <View style={styles.formContent}>
        <View style={styles.inputContainer}>
          <Image
            style={[styles.icon, styles.inputIcon]}
            source={{
              uri: "https://png.icons8.com/search/androidL/100/000000",
            }}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Search"

            // onChangeText={(name_address) => this.setState({ name_address })}
          />
        </View>
      </View>

      <FlatList
        style={styles.notificationList}
        data={inspired}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={renderProfile}
      />
    </View>
  );
}

// export default class Users extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [
//         {
//           id: 1,
//           color: "#FF4500",
//           icon: "https://bootdey.com/img/Content/avatar/avatar1.png",
//           name: "User 1",
//           tags: ["tag 1", "tag 2", "tag 3", "Mobile dev", "RN", "Bootdey"],
//         },
//         {
//           id: 2,
//           color: "#87CEEB",
//           icon: "https://bootdey.com/img/Content/avatar/avatar2.png",
//           name: "User 2",
//           tags: ["tag 1", "tag 2", "tag 3", "Dey-Dey", "Developer"],
//         },
//         {
//           id: 3,
//           color: "#4682B4",
//           icon: "https://bootdey.com/img/Content/avatar/avatar3.png",
//           name: "User 3",
//           tags: ["tag 1", "tag 2", "tag 3"],
//         },
//         {
//           id: 4,
//           color: "#6A5ACD",
//           icon: "https://bootdey.com/img/Content/avatar/avatar4.png",
//           name: "User 4",
//           tags: ["tag 1", "tag 2", "tag 3"],
//         },
//         {
//           id: 5,
//           color: "#FF69B4",
//           icon: "https://bootdey.com/img/Content/avatar/avatar5.png",
//           name: "User 5",
//           tags: ["tag 1", "tag 2", "tag 3"],
//         },
//       ],
//     };
//   }

//   cardClickEventListener = (item) => {
//     Alert.alert(item.name);
//   };

//   tagClickEventListener = (tagName) => {
//     Alert.alert(tagName);
//   };

//   renderTags = (item) => {
//     return item.tags.map((tag, key) => {
//       return (
//         <TouchableOpacity
//           key={key}
//           style={styles.btnColor}
//           onPress={() => {
//             this.tagClickEventListener(tag);
//           }}
//         >
//           <Text>{tag}</Text>
//         </TouchableOpacity>
//       );
//     });
//   };

//   render() {
//     // console.log("WHAT IS THE DATA---------------", this.props.inspired);
//     return (
//       <View style={styles.container}>
//         <View style={styles.formContent}>
//           <View style={styles.inputContainer}>
//             <Image
//               style={[styles.icon, styles.inputIcon]}
//               source={{
//                 uri: "https://png.icons8.com/search/androidL/100/000000",
//               }}
//             />
//             <TextInput
//               // style={styles.inputs}
//               // ref={"txtSearch"}
//               placeholder="Search"
//               // underlineColorAndroid="transparent"
//               onChangeText={(name_address) => this.setState({ name_address })}
//             />
//           </View>
//         </View>

//         <FlatList
//           style={styles.notificationList}
//           data={this.state.data}
//           keyExtractor={(item) => {
//             return item.id;
//           }}
//           renderItem={({ item }) => {
//             return (
//               <TouchableOpacity
//                 style={[styles.card, { borderColor: item.color }]}
//                 onPress={() => {
//                   this.cardClickEventListener(item);
//                 }}
//               >
//                 <View style={styles.cardContent}>
//                   <Image
//                     style={[styles.image, styles.imageContent]}
//                     source={{
//                       uri: "https://static.wikia.nocookie.net/cookingmama/images/4/47/MAMA_HAS_A_HAPPY.gif/revision/latest?cb=20180910213033",
//                     }}
//                   />
//                   <Text style={styles.name}>
//                     {item.name}
//                     {/*username goes here */}
//                   </Text>
//                 </View>
//                 <View style={[styles.cardContent, styles.tagsContent]}>
//                   {this.renderTags(item)}
//                 </View>
//               </TouchableOpacity>
//             );
//           }}
//         />
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBEBEB",
  },
  formContent: {
    flexDirection: "row",
    marginTop: 30,
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    margin: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  iconBtnSearch: {
    alignSelf: "center",
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1,
  },
  inputIcon: {
    marginLeft: 15,
    justifyContent: "center",
  },
  notificationList: {
    marginTop: 20,
    padding: 10,
  },
  card: {
    height: null,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 5,
    backgroundColor: "#FFFFFF",
    flexDirection: "column",
    borderTopWidth: 40,
    marginBottom: 20,
  },
  cardContent: {
    flexDirection: "row",
    marginLeft: 10,
  },
  imageContent: {
    marginTop: -40,
  },
  tagsContent: {
    marginTop: 10,
    flexWrap: "wrap",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    alignSelf: "center",
  },
  btnColor: {
    padding: 10,
    borderRadius: 40,
    marginHorizontal: 3,
    backgroundColor: "#eee",
    marginTop: 5,
  },
  food: {
    width: 56,
    height: 48,
    borderRadius: 20,
    margin: 5,
  },
});
