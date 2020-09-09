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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#272727',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: 112,
    height: 112,
  },
  borderBlue: {
    borderWidth: 1,
    borderColor: 'rgba(0,100,150, 0.1)',
  },
  borderRed: {
    borderWidth: 1,
    borderColor: 'rgba(150,50,50, 0.1)',
  },
  borderGreen: {
    borderWidth: 1,
    borderColor: 'rgba(0,150,100, 0.1)',
  },
  textButton: {
    fontSize: 16,
  },
  colorGreen: {
    color: 'rgba(0,150,100, 0.8)',
  },
  colorRed: {
    color: 'rgba(150,50,50, 0.8)',
  },
  colorBlue: {
    color: 'rgba(0,100,150, 0.8)',
  }
});

export default styles;