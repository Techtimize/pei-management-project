import React from 'react'
import { Formik, FormikHelpers } from 'formik'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { object, string } from 'yup'
import ModuleSelector from '@/components/moduleSelector/ModuleSelector'
import { useAppDispatch, useAppSelector } from '@/hooks/storeHooks'
import { ModuleTypeEnum, setModuleType } from '@/store/reducers/moduleSlice'
import { login } from '@/store/reducers/authSlice'
import { useNavigate } from 'react-router'

interface ILoginFormFields {
  email: string
  password: string
}

function Login() {
  const moduleType = useAppSelector((state) => state.module.moduleType)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const loginSchema = object().shape({
    email: string().required().email(),
    password: string().required().min(8)
  })

  function handleModuleChange(moduleType: ModuleTypeEnum) {
    dispatch(setModuleType(moduleType))
  }

  function handleSubmit(
    values: ILoginFormFields,
    helpers: FormikHelpers<ILoginFormFields>
  ) {
    console.log('🚀 ~ Login ~ values:', values)

    helpers.setSubmitting(false)
    dispatch(login())

    navigate('/', { replace: true })
  }

  return (
    <div className='min-w-screen min-h-screen flex flex-col items-center justify-center bg-tertiary-2 space-y-10 pb-2'>
      <div>
        <div className='h-2/5 flex justify-center items-center'>
          <img src='/public/logo.png' alt='deloitte-logo' className='h-full' />
        </div>

        <h2 className='text-3xl text-center h-1/5'>
          PEI Database Management System
        </h2>
      </div>

      <Formik
        initialValues={{
          email: 'admin@deloitte.com',
          password: 'admin123'
        }}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
          /* and other goodies */
        }) => (
          <form
            onSubmit={handleSubmit}
            className='flex flex-col items-center w-2/7 mb-5 h-2/5'
          >
            <div className='flex flex-col gap-1 w-full'>
              <Label htmlFor='email'>Email</Label>
              <Input
                type='email'
                name='email'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder='info@techtimize.com'
                className='bg-white'
              />
              <p className='text-red-500 text-sm self-end'>
                {errors.email && touched.email && errors.email}
              </p>
            </div>

            <div className='flex flex-col gap-1 w-full'>
              <Label htmlFor='password'>Password</Label>
              <Input
                type='password'
                name='password'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder='12345678'
                className='bg-white'
              />
              <p className='text-red-500 text-sm self-end'>
                {errors.password && touched.password && errors.password}
              </p>
            </div>

            <ModuleSelector
              handleModuleChange={handleModuleChange}
              moduleType={moduleType}
            />

            <button type='submit' disabled={isSubmitting} className='w-64'>
              Submit
            </button>
          </form>
        )}
      </Formik>

      {/* NOT Needed at the moment */}
      {/* <div className='mt-4 text-center'>
        <a href='#' className='text-[#1890ff] hover:text-[#40a9ff]'>
          Forgot password?
        </a>
      </div> */}
    </div>
  )
}

export default Login
