import * as React from 'react';
import { View, Text, Modal, Button, StyleSheet, TextInput } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

const ReviewSchema = yup.object({
  rating: yup.string()
  .required()
  .test((val) => {
    return parseInt(val) > 0;
  })
})

export default function ReviewForm() {
  return(
    <View>
      <Formik
        initialValues={{rating: ''}}
        validationSchema={ReviewSchema}
        onSubmit={(values) =>  {
          console.log(values);
        }}
      >
      {(props) => (
        <View>
          <Text style = {styles.formText}> Enter the amount of people in your bubble(arms distance)</Text>
          <TextInput
          style={styles.reviewForm}
            placeholder='Enter a number'
            onChangeText={props.handleChange('rating')}
            value={props.values.rating}
            keyboardType='numeric'
          />
          <Button title='submit' color='maroon' onPress={props.handleSubmit}/>
        </View>
      )}
      </Formik>
    </View>
  )
}
const styles = StyleSheet.create({
  reviewForm: {
      borderWidth: 3,
      borderColor: '#ddd',
      padding: 30,
      paddingVertical: 25,
      fontSize: 18,
      borderRadius: 6
  },
  formText: {
    fontSize: 20,
    flexGrow: 1,
    alignItems:'center',
    justifyContent: 'center',
    paddingVertical: 25,
    flexDirection: 'row',
  }
})
