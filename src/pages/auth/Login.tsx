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
    <div className='min-w-screen min-h-screen flex items-center justify-center bg-tertiary-1'>
      <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md h-full'>
        <h2 className='text-3xl font-bold text-center mb-8 text-[#1890ff]'>
          LOGO
        </h2>
        <Formik
          initialValues={{ email: '', password: '' }}
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
              className='flex flex-col gap-3 h-full items-center'
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
        <div className='mt-4 text-center'>
          <a href='#' className='text-[#1890ff] hover:text-[#40a9ff]'>
            Forgot password?
          </a>
        </div>
      </div>
    </div>
  )
}

export default Login
