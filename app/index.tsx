import { Text, View } from 'react-native';
import Home from '../components/home';
import { Provider } from 'react-redux';
import store from '../store/index';

export default function Index() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
