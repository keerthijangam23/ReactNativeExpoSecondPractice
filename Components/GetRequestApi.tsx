import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { useEffect, useState } from "react";

export default function GetRequestApi() {
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const fetchData = async (limit = 10) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    );
    const data = await response.json();
    setPostList(data);
    setIsLoading(false);
  };
  const handleRefresh = () => {
    setRefreshing(true);
    fetchData(20);
    setRefreshing(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="0000ff" />
        <Text>Loading ...</Text>
      </SafeAreaView>
    );
  }
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={postList}
        renderItem={({ item }: any) => {
          return (
            <View style={styles.card}>
              <Text style={styles.titleText}>{item.title}</Text>
              <Text style={styles.bodyText}>{item.body}</Text>
            </View>
          );
        }}
        ItemSeparatorComponent={() => {
          return <View style={{ height: 16 }} />;
        }}
        ListEmptyComponent={<Text>No Posts Found</Text>}
        ListFooterComponent={<Text style={styles.footerText}>End of List</Text>}
        ListHeaderComponent={<Text style={styles.headerText}>Post List</Text>}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    paddingTop: 16,
  },
  card: {
    backgroundColor: "skyblue",
    borderRadius: 16,
    margin: 10,
    borderColor: "black",
  },
  titleText: {
    fontSize: 30,
  },
  bodyText: {
    fontSize: 24,
    color: "brown",
  },
  headerText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 12,
  },
  footerText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 12,
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
    justifyContent: "center",
    alignItems: "center",
  },
});
