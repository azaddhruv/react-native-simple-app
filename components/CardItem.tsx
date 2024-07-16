import { TouchableHighlight } from 'react-native-gesture-handler';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import tw from 'twrnc'; // Import twrnc

const CardItem = () => {
  return (
    <TouchableHighlight style={tw`pt-2`}>
      <Card>
        <Card.Content>
          <Text variant='titleLarge'>Card title</Text>
          <Text variant='bodyMedium'>Card content</Text>
        </Card.Content>
        <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
      </Card>
    </TouchableHighlight>
  );
};

export default CardItem;
