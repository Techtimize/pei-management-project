import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { FormikProps } from 'formik'
import React, { useEffect, useRef } from 'react'
import { IPeiFields } from './types'

interface IAddFormProps {
  formik: FormikProps<IPeiFields>
  disabled?: boolean
  formRefSetter: (ref: React.RefObject<HTMLFormElement | null>) => void
}

function AddForm({ formik, disabled = false, formRefSetter }: IAddFormProps) {
  const formRef = useRef<HTMLFormElement | null>(null)

  useEffect(() => {
    if (formRef) formRefSetter(formRef)
  }, [formRef])

  return (
    <form
      ref={formRef}
      className='flex flex-col gap-3 h-full items-center max-h-[50vh] overflow-y-auto pr-5'
    >
      <div className='grid grid-cols-1 2xl:grid-cols-2 gap-3 w-full'>
        <div className='flex flex-col gap-3'>
          <Label htmlFor='pei_pb_id' className='text-white'>
            Pitchbook ID
          </Label>
          <Input
            type='text'
            name='pei_pb_id'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.pei_pb_id}
            placeholder='00000000'
            className='bg-white'
            disabled={disabled}
          />
          <p className='text-danger-2 text-sm self-end'>
            {formik.errors.pei_pb_id &&
              formik.touched.pei_pb_id &&
              formik.errors.pei_pb_id}
          </p>
        </div>

        <div className='flex flex-col gap-3'>
          <Label className='text-white' htmlFor='pei_swift_client_number'>
            Swift Client Number
          </Label>
          <Input
            type='text'
            name='pei_swift_client_number'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.pei_swift_client_number}
            placeholder='00000000'
            className='bg-white'
            disabled={disabled}
          />
          <p className='text-danger-2 text-sm self-end'>
            {formik.errors.pei_swift_client_number &&
              formik.touched.pei_swift_client_number &&
              formik.errors.pei_swift_client_number}
          </p>
        </div>

        <div className='flex flex-col gap-3'>
          <Label className='text-white' htmlFor='pei_gmdm_id'>
            GMDM ID
          </Label>
          <Input
            type='text'
            name='pei_gmdm_id'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.pei_gmdm_id}
            placeholder='00000000'
            className='bg-white'
            disabled={disabled}
          />
          <p className='text-danger-2 text-sm self-end'>
            {formik.errors.pei_gmdm_id &&
              formik.touched.pei_gmdm_id &&
              formik.errors.pei_gmdm_id}
          </p>
        </div>

        <div className='flex flex-col gap-3'>
          <Label className='text-white' htmlFor='pei_dgmf_id'>
            DGMF ID
          </Label>
          <Input
            type='text'
            name='pei_dgmf_id'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.pei_dgmf_id}
            placeholder='00000000'
            className='bg-white'
            disabled={disabled}
          />
          <p className='text-danger-2 text-sm self-end'>
            {formik.errors.pei_dgmf_id &&
              formik.touched.pei_dgmf_id &&
              formik.errors.pei_dgmf_id}
          </p>
        </div>

        <div className='flex flex-col gap-3'>
          <Label className='text-white' htmlFor='pei_duns_number'>
            DUNS
          </Label>
          <Input
            type='text'
            name='pei_duns_number'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.pei_duns_number}
            placeholder='00000000'
            className='bg-white'
            disabled={disabled}
          />
          <p className='text-danger-2 text-sm self-end'>
            {formik.errors.pei_duns_number &&
              formik.touched.pei_duns_number &&
              formik.errors.pei_duns_number}
          </p>
        </div>

        <div className='flex flex-col gap-3'>
          <Label className='text-white' htmlFor='pei_swift_client_name'>
            Swift Client Name
          </Label>
          <Input
            type='text'
            name='pei_swift_client_name'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.pei_swift_client_name}
            placeholder='00000000'
            className='bg-white'
            disabled={disabled}
          />
          <p className='text-danger-2 text-sm self-end'>
            {formik.errors.pei_swift_client_name &&
              formik.touched.pei_swift_client_name &&
              formik.errors.pei_swift_client_name}
          </p>
        </div>

        <div className='flex flex-col gap-3'>
          <Label className='text-white' htmlFor='pei_gmdm_legal_name'>
            GMDM Legal Name
          </Label>
          <Input
            type='text'
            name='pei_gmdm_legal_name'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.pei_gmdm_legal_name}
            placeholder='00000000'
            className='bg-white'
            disabled={disabled}
          />
          <p className='text-danger-2 text-sm self-end'>
            {formik.errors.pei_gmdm_legal_name &&
              formik.touched.pei_gmdm_legal_name &&
              formik.errors.pei_gmdm_legal_name}
          </p>
        </div>

        <div className='flex flex-col gap-3'>
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
            disabled={disabled}
          />
          <p className='text-danger-2 text-sm self-end'>
            {formik.errors.view_type &&
              formik.touched.view_type &&
              formik.errors.view_type}
          </p>
        </div>

        <div className='flex flex-col gap-3'>
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
            disabled={disabled}
          />
          <p className='text-danger-2 text-sm self-end'>
            {formik.errors.tableau_inclusion_status &&
              formik.touched.tableau_inclusion_status &&
              formik.errors.tableau_inclusion_status}
          </p>
        </div>

        <div className='flex flex-col gap-3'>
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
            disabled={disabled}
          />
          <p className='text-danger-2 text-sm self-end'>
            {formik.errors.requested_by_team &&
              formik.touched.requested_by_team &&
              formik.errors.requested_by_team}
          </p>
        </div>

        <div className='flex flex-col gap-3'>
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
            disabled={disabled}
          />
          <p className='text-danger-2 text-sm self-end'>
            {formik.errors.contact_email &&
              formik.touched.contact_email &&
              formik.errors.contact_email}
          </p>
        </div>

        <div className='flex flex-col gap-3'>
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
            disabled={disabled}
          />
          <p className='text-danger-2 text-sm self-end'>
            {formik.errors.priority_for_feedback &&
              formik.touched.priority_for_feedback &&
              formik.errors.priority_for_feedback}
          </p>
        </div>

        <div className='flex flex-col gap-3'>
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
            disabled={disabled}
          />
          <p className='text-danger-2 text-sm self-end'>
            {formik.errors.reporting_team &&
              formik.touched.reporting_team &&
              formik.errors.reporting_team}
          </p>
        </div>

        <div className='flex flex-col gap-3'>
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
            disabled={disabled}
          />
          <p className='text-danger-2 text-sm self-end'>
            {formik.errors.fy_period_added &&
              formik.touched.fy_period_added &&
              formik.errors.fy_period_added}
          </p>
        </div>

        <div className='flex flex-col gap-3'>
          <Label className='text-white' htmlFor='pei_pb_name'>
            Pitchbook Name
          </Label>
          <Input
            type='text'
            name='pei_pb_name'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.pei_pb_name}
            placeholder='00000000'
            className='bg-white'
            disabled={disabled}
          />
          <p className='text-danger-2 text-sm self-end'>
            {formik.errors.pei_pb_name &&
              formik.touched.pei_pb_name &&
              formik.errors.pei_pb_name}
          </p>
        </div>

        <div className='flex flex-col gap-3'>
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
            disabled={disabled}
          />
          <p className='text-danger-2 text-sm self-end'>
            {formik.errors.sources &&
              formik.touched.sources &&
              formik.errors.sources}
          </p>
        </div>
      </div>
    </form>
  )
}

export default AddForm
