import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: '#222'
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#EEE',
    fontSize: 32,
    marginTop: 8,
  },
  footer: {

  },
  button: {
    backgroundColor: '#4fa545',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    height: 64
  },
  textButton: {
    color: '#EEE',
    fontSize: 24,
  }
});

export default styles;