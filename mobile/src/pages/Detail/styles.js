import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',

  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#111',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 24

  },
  textUser: {
    color: '#EEE',
    fontSize: 24
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
  transactionsItems: {
    backgroundColor: '#202020',
    borderRadius: 5,
    padding: 10,
    marginTop: 16,
    width: '90%',
    height: '60%',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,

  },
  columnItemLeft: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingBottom: 8,

  },
  columnItemRight: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 8,
    borderColor: '#00FF00',

  },
  titleItem: {
    color: '#888',
    fontWeight: 'bold',

  },
  arrow: {
    width: 16,
  },
  contentItem: {
    color: '#DDD',
    fontSize: 20
  },
  voltar: {
  }
});

export default styles;