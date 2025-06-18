import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { FormikProps } from 'formik'
import React, { useRef } from 'react'
import { IPeiFields } from './types'

interface IRelationshipFormProps {
  formik: FormikProps<IPeiFields>
  disabled?: boolean
}

function RelationshipForm({
  formik,
  disabled = false
}: IRelationshipFormProps) {
  const formRef = useRef<HTMLFormElement | null>(null)
  return (
    <form
      ref={formRef}
      className='flex flex-col gap-3 h-full items-center max-h-[50vh] overflow-y-auto pr-5'
    >
      <div className='flex flex-col gap-1 w-full'>
        <Label htmlFor='pb_id' className='text-white'>
          Company 1
        </Label>
        <Input
          type='text'
          name='pb_id'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          // value={formik.values.pb_id}
          placeholder='00000000'
          className='bg-white'
          disabled={disabled}
        />
        <p className='text-danger-2 text-sm self-end'>
          {formik.errors.pb_id && formik.touched.pb_id && formik.errors.pb_id}
        </p>
      </div>

      <div className='flex flex-col gap-1 w-full'>
        <Label className='text-white' htmlFor='swift_client_number'>
          Company 2
        </Label>
        <Input
          type='text'
          name='swift_client_number'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          // value={formik.values.swift_client_number}
          placeholder='00000000'
          className='bg-white'
          disabled={disabled}
        />
        <p className='text-danger-2 text-sm self-end'>
          {formik.errors.swift_client_number &&
            formik.touched.swift_client_number &&
            formik.errors.swift_client_number}
        </p>
      </div>

      {!disabled && (
        <div className='w-full flex justify-end'>
          <span
            className='text-secondary-1 underline text-sm cursor-pointer hover:opacity-80'
            onClick={() => {
              formRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
              formik.resetForm()
            }}
          >
            Reset
          </span>
        </div>
      )}

      {/* <button type='submit' disabled={formik.isSubmitting} className='w-64'>
                  Submit
                </button> */}
    </form>
  )
}

export default RelationshipForm
