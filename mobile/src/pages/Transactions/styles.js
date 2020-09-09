import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222'
  },
  main: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 8
  },
  title: {
    color: '#EEE',
    fontSize: 32
  },
  transactionsList: {
    width: '90%',
    paddingTop: 10
  },
  transactionsItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#202020',
    borderRadius: 5,
    height: 48,
    padding: 10,
    marginBottom: 5
  },
  arrow: {
    width: 16,
  },
  descriptionItem: {
    color: '#CCC',
    width: 240
  },
  dateItem: {
    color: '#CCC'
  },
  valueItem: {
    color: '#FFF'
  },
  footer: {
    backgroundColor: '#111',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16
  },
  textTotal: {
    color: '#4fa545',
    fontSize: 32,
  },
  detail: {
    flex: 1
  }
});

export default styles;