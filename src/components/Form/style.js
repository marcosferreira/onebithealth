import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  formContext: {
    width: '100%',
    height: '100%',
    bottom: 0,
    backgroundColor: '#FFF',
    alignItems: 'center',
    marginTop: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  form: {
    width: '100%',
    height: 'auto',
    marginTop: 30,
    padding: 10,
  },
  formLabel: {
    color: '#000',
    fontSize: 18,
    paddingLeft: 20,
  },
  formInput: {
    width: '90%',
    height: 40,
    margin: 12,
    paddingLeft: 10,
    borderRadius: 50,
    backgroundColor: '#f6f6f6',
    alignSelf: 'center',
  },
  formButton: {
    width: '90%',
    marginTop: 30,
    marginBottom: 10,
    paddingVertical: 14,
    borderRadius: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff0043',
  },
  formTextButton: {
    fontSize: 20,
    color: '#fff',
  }
});

export default styles;
