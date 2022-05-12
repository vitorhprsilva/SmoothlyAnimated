import AppContainer from './src/components/app-container';
import MainScreen from './src/screens/main';
import 'react-native-gesture-handler'

export default function App() {
  return (
    <AppContainer>
      <MainScreen />
    </AppContainer>
  );
}