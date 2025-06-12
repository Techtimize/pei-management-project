import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { FormikProps } from 'formik'
import React, { useRef } from 'react'
import { IPeiFields } from './types'

interface IAddFormProps {
  handleSubmit: () => void
  formik: FormikProps<IPeiFields>
}

function AddForm({ handleSubmit, formik }: IAddFormProps) {
  const formRef = useRef<HTMLFormElement | null>(null)
  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className='flex flex-col gap-3 h-full items-center max-h-[50vh] overflow-y-auto pr-5'
    >
      <div className='flex flex-col gap-1 w-full'>
        <Label htmlFor='pb_id' className='text-white'>
          Pitchbook ID
        </Label>
        <Input
          type='text'
          name='pb_id'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.pb_id}
          placeholder='00000000'
          className='bg-white'
        />
        <p className='text-danger-2 text-sm self-end'>
          {formik.errors.pb_id && formik.touched.pb_id && formik.errors.pb_id}
        </p>
      </div>

      <div className='flex flex-col gap-1 w-full'>
        <Label className='text-white' htmlFor='swift_client_number'>
          Swift Client Number
        </Label>
        <Input
          type='text'
          name='swift_client_number'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.swift_client_number}
          placeholder='00000000'
          className='bg-white'
        />
        <p className='text-danger-2 text-sm self-end'>
          {formik.errors.swift_client_number &&
            formik.touched.swift_client_number &&
            formik.errors.swift_client_number}
        </p>
      </div>

      <div className='flex flex-col gap-1 w-full'>
        <Label className='text-white' htmlFor='gmdm_id'>
          GMDM ID
        </Label>
        <Input
          type='text'
          name='gmdm_id'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.gmdm_id}
          placeholder='00000000'
          className='bg-white'
        />
        <p className='text-danger-2 text-sm self-end'>
          {formik.errors.gmdm_id &&
            formik.touched.gmdm_id &&
            formik.errors.gmdm_id}
        </p>
      </div>

      <div className='flex flex-col gap-1 w-full'>
        <Label className='text-white' htmlFor='dgmf_id'>
          DGMF ID
        </Label>
        <Input
          type='text'
          name='dgmf_id'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.dgmf_id}
          placeholder='00000000'
          className='bg-white'
        />
        <p className='text-danger-2 text-sm self-end'>
          {formik.errors.dgmf_id &&
            formik.touched.dgmf_id &&
            formik.errors.dgmf_id}
        </p>
      </div>

      <div className='flex flex-col gap-1 w-full'>
        <Label className='text-white' htmlFor='duns_number'>
          DUNS
        </Label>
        <Input
          type='text'
          name='duns_number'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.duns_number}
          placeholder='00000000'
          className='bg-white'
        />
        <p className='text-danger-2 text-sm self-end'>
          {formik.errors.duns_number &&
            formik.touched.duns_number &&
            formik.errors.duns_number}
        </p>
      </div>

      <div className='flex flex-col gap-1 w-full'>
        <Label className='text-white' htmlFor='swift_client_name'>
          Swift Client Name
        </Label>
        <Input
          type='text'
          name='swift_client_name'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.swift_client_name}
          placeholder='00000000'
          className='bg-white'
        />
        <p className='text-danger-2 text-sm self-end'>
          {formik.errors.swift_client_name &&
            formik.touched.swift_client_name &&
            formik.errors.swift_client_name}
        </p>
      </div>

      <div className='flex flex-col gap-1 w-full'>
        <Label className='text-white' htmlFor='gmdm_legal_name'>
          GMDM Legal Name
        </Label>
        <Input
          type='text'
          name='gmdm_legal_name'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.gmdm_legal_name}
          placeholder='00000000'
          className='bg-white'
        />
        <p className='text-danger-2 text-sm self-end'>
          {formik.errors.gmdm_legal_name &&
            formik.touched.gmdm_legal_name &&
            formik.errors.gmdm_legal_name}
        </p>
      </div>

      <div className='flex flex-col gap-1 w-full'>
        <Label className='text-white' htmlFor='view_type'>
          View Type
        </Label>
        <Input
          type='text'
          name='view_type'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.view_type}
          placeholder='00000000'
          className='bg-white'
        />
        <p className='text-danger-2 text-sm self-end'>
          {formik.errors.view_type &&
            formik.touched.view_type &&
            formik.errors.view_type}
        </p>
      </div>

      <div className='flex flex-col gap-1 w-full'>
        <Label className='text-white' htmlFor='tableau_inclusion_status'>
          Tableau Inclusion Status
        </Label>
        <Input
          type='text'
          name='tableau_inclusion_status'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.tableau_inclusion_status}
          placeholder='00000000'
          className='bg-white'
        />
        <p className='text-danger-2 text-sm self-end'>
          {formik.errors.tableau_inclusion_status &&
            formik.touched.tableau_inclusion_status &&
            formik.errors.tableau_inclusion_status}
        </p>
      </div>

      <div className='flex flex-col gap-1 w-full'>
        <Label className='text-white' htmlFor='requested_by_team'>
          Requested By Team
        </Label>
        <Input
          type='text'
          name='requested_by_team'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.requested_by_team}
          placeholder='00000000'
          className='bg-white'
        />
        <p className='text-danger-2 text-sm self-end'>
          {formik.errors.requested_by_team &&
            formik.touched.requested_by_team &&
            formik.errors.requested_by_team}
        </p>
      </div>

      <div className='flex flex-col gap-1 w-full'>
        <Label className='text-white' htmlFor='contact_email'>
          Contact Email
        </Label>
        <Input
          type='email'
          name='contact_email'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.contact_email}
          placeholder='info@techtimize.com'
          className='bg-white'
        />
        <p className='text-danger-2 text-sm self-end'>
          {formik.errors.contact_email &&
            formik.touched.contact_email &&
            formik.errors.contact_email}
        </p>
      </div>

      <div className='flex flex-col gap-1 w-full'>
        <Label className='text-white' htmlFor='priority_for_feedback'>
          Priority For Feedback
        </Label>
        <Input
          type='text'
          name='priority_for_feedback'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.priority_for_feedback}
          placeholder='00000000'
          className='bg-white'
        />
        <p className='text-danger-2 text-sm self-end'>
          {formik.errors.priority_for_feedback &&
            formik.touched.priority_for_feedback &&
            formik.errors.priority_for_feedback}
        </p>
      </div>

      <div className='flex flex-col gap-1 w-full'>
        <Label className='text-white' htmlFor='reporting_team'>
          Reporting Team
        </Label>
        <Input
          type='text'
          name='reporting_team'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.reporting_team}
          placeholder='00000000'
          className='bg-white'
        />
        <p className='text-danger-2 text-sm self-end'>
          {formik.errors.reporting_team &&
            formik.touched.reporting_team &&
            formik.errors.reporting_team}
        </p>
      </div>

      <div className='flex flex-col gap-1 w-full'>
        <Label className='text-white' htmlFor='fy_period_added'>
          FY Period Added
        </Label>
        <Input
          type='text'
          name='fy_period_added'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.fy_period_added}
          placeholder='00000000'
          className='bg-white'
        />
        <p className='text-danger-2 text-sm self-end'>
          {formik.errors.fy_period_added &&
            formik.touched.fy_period_added &&
            formik.errors.fy_period_added}
        </p>
      </div>

      <div className='flex flex-col gap-1 w-full'>
        <Label className='text-white' htmlFor='pb_name'>
          Pitchbook Name
        </Label>
        <Input
          type='text'
          name='pb_name'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.pb_name}
          placeholder='00000000'
          className='bg-white'
        />
        <p className='text-danger-2 text-sm self-end'>
          {formik.errors.pb_name &&
            formik.touched.pb_name &&
            formik.errors.pb_name}
        </p>
      </div>

      <div className='flex flex-col gap-1 w-full'>
        <Label className='text-white' htmlFor='sources'>
          Sources
        </Label>
        <Input
          type='text'
          name='sources'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.sources}
          placeholder='00000000'
          className='bg-white'
        />
        <p className='text-danger-2 text-sm self-end'>
          {formik.errors.sources &&
            formik.touched.sources &&
            formik.errors.sources}
        </p>
      </div>

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

      {/* <button type='submit' disabled={formik.isSubmitting} className='w-64'>
                  Submit
                </button> */}
    </form>
  )
}

export default AddForm
