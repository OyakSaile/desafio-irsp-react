import * as Yup from 'yup'

export const editUserSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
  email: Yup.string().email('Invalid email'),
  password: Yup.string().min(5),
})
