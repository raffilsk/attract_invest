import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
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
  form: {
    width: '90%',
    height: '90%',
  },
  label: {
    fontWeight: 'bold',
    color: '#FFF'
  },
  input: {
    marginBottom: 15,
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#ddd',
    fontSize: 15,
    color: '#444',
    width: '100%',
    height: 64,
    backgroundColor: '#EEE',
  },
  submitButton: {
    backgroundColor: 'rgba(150,50,50, 0.8)',
    borderRadius: 4,
    padding: 16,
    alignItems: 'center'
  },
  submitButtonText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 15,
  }
});

export default styles;