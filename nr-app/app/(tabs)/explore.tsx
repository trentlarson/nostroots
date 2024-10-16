import Ionicons from "@expo/vector-icons/Ionicons";
import { Button, StyleSheet, Text, View } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { addEvent, eventsSelectors } from "@/redux/eventsSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import { Relay, finalizeEvent, verifyEvent } from "nostr-tools";
import { hexToBytes } from "@noble/hashes/utils";
import { generateSeedWords, accountFromSeedWords } from "nip06";

export default function TabTwoScreen() {
  const events = useAppSelector(eventsSelectors.selectAll);
  const dispatch = useAppDispatch();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Ionicons size={310} name="code-slash" style={styles.headerImage} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Testing</ThemedText>
      </ThemedView>
      <ThemedText>This is a test screen to load some nostr events</ThemedText>
      <View>
        <Button
          title="Load 10 events"
          onPress={async () => {
            const { mnemonic } = generateSeedWords();
            const account = accountFromSeedWords({ mnemonic });
            console.log("#0GAjcE Generated seed and private key", {
              mnemonic,
              account,
            });
            const eventTemplate = {
              kind: 0,
              created_at: Math.round(Date.now() / 1e3),
              content: JSON.stringify({ name: "Aarhus" }),
              tags: [],
            };
            const event = finalizeEvent(
              eventTemplate,
              hexToBytes(account.privateKey.hex),
            );
            console.log("#cBiwGN Signed event", event);
            const verificationResult = verifyEvent(event);
            console.log("#QPwp7w Verification result", verificationResult);

            const relay = new Relay("wss://nos.lol");
            await relay.connect();
            const sub = relay.subscribe([{ kinds: [0], limit: 10 }], {
              onevent: (event) => void dispatch(addEvent(event)),
              oneose: () => {
                sub.close();
              },
            });
          }}
        />
      </View>
      <View>
        <Text>We have a total of {events.length} events.</Text>
        {events.map((event) => (
          <View key={event.id}>
            <Text>{event.id}</Text>
            <Text>{JSON.stringify(event)}</Text>
          </View>
        ))}
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
