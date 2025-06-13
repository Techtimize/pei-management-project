import React, { useEffect, useState } from 'react'
import { columns, ICompany } from './columns'
import { DataTable } from '../../../components/dataTable/data-table'
import { FormModal } from '@/components/formModal/FormModal'
import { useFormik } from 'formik'
import { object, string } from 'yup'
import AddForm from './AddForm'
import { IPeiFields } from './types'
import { setPeiDraft } from '@/store/reducers/draftSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/storeHooks'
import { useLocation, useNavigate } from 'react-router'

function PEIListingPage() {
  const [data, setData] = useState<ICompany[]>([])
  const { state } = useLocation()
  const draftPEI = useAppSelector((state) => state.draft.pei)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const validationSchema = object().shape({
    pb_id: string().required(),
    swift_client_number: string().required(),
    swift_client_name: string().required(),
    gmdm_id: string().required(),
    dgmf_id: string().required(),
    duns_number: string().required(),
    view_type: string().required(),
    tableau_inclusion_status: string().required(),
    requested_by_team: string().required(),
    contact_email: string().required().email(),
    priority_for_feedback: string().required(),
    fy_period_added: string().required(),
    reporting_team: string().required(),
    gmdm_legal_name: string().required(),
    pb_name: string().required(),
    sources: string().required()
  })

  const formik = useFormik<IPeiFields>({
    initialValues: {
      pb_id: '',
      swift_client_number: '',
      swift_client_name: '',
      gmdm_id: '',
      dgmf_id: '',
      duns_number: '',
      view_type: '',
      tableau_inclusion_status: '',
      requested_by_team: '',
      contact_email: '',
      priority_for_feedback: '',
      fy_period_added: '',
      reporting_team: '',
      gmdm_legal_name: '',
      pb_name: '',
      sources: ''
    },
    onSubmit: async (values) => {
      console.log('Submitting')
      console.log(values)
      // await Axios.post("http://localhost:5000/newcategory", values);
    },
    validationSchema
  })

  useEffect(() => {
    if (state?.draft && draftPEI)
      formik.setValues({
        pb_id: draftPEI.pb_id,
        swift_client_number: draftPEI?.swift_client_number,
        swift_client_name: draftPEI?.swift_client_name,
        gmdm_id: draftPEI?.gmdm_id,
        dgmf_id: draftPEI?.dgmf_id,
        duns_number: draftPEI?.duns_number,
        view_type: draftPEI?.view_type,
        tableau_inclusion_status: draftPEI?.tableau_inclusion_status,
        requested_by_team: draftPEI?.requested_by_team,
        contact_email: draftPEI?.contact_email,
        priority_for_feedback: draftPEI?.priority_for_feedback,
        fy_period_added: draftPEI?.fy_period_added,
        reporting_team: draftPEI?.reporting_team,
        gmdm_legal_name: draftPEI?.gmdm_legal_name,
        pb_name: draftPEI?.pb_name,
        sources: draftPEI?.sources
      })
  }, [state])

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    // Fetch data from your API here.
    setData([
      {
        id: '728ed52f1',
        color: 'Black',
        company: 'Street Pulse Hoodie',
        inStock: 150,
        material: 'Cotton',
        type: 'Hoodie',
        unitCost: 50,
        vendor: 'StreetGear'
      },
      {
        id: '728ed52f2',
        color: 'Black',
        company: 'Street Pulse Hoodie',
        inStock: 150,
        material: 'Cotton',
        type: 'Hoodie',
        unitCost: 50,
        vendor: 'StreetGear'
      },
      {
        id: '728ed52f3',
        color: 'Black',
        company: 'Street Pulse Hoodie',
        inStock: 150,
        material: 'Cotton',
        type: 'Hoodie',
        unitCost: 50,
        vendor: 'StreetGear'
      },
      {
        id: '728ed52f4',
        color: 'Black',
        company: 'Street Pulse Hoodie',
        inStock: 150,
        material: 'Cotton',
        type: 'Hoodie',
        unitCost: 50,
        vendor: 'StreetGear'
      },
      {
        id: '728ed52f5',
        color: 'Black',
        company: 'Street Pulse Hoodie',
        inStock: 150,
        material: 'Cotton',
        type: 'Hoodie',
        unitCost: 50,
        vendor: 'StreetGear'
      },
      {
        id: '728ed52f6',
        color: 'Black',
        company: 'Street Pulse Hoodie',
        inStock: 150,
        material: 'Cotton',
        type: 'Hoodie',
        unitCost: 50,
        vendor: 'StreetGear'
      },
      {
        id: '728ed52f7',
        color: 'Black',
        company: 'Street Pulse Hoodie',
        inStock: 150,
        material: 'Cotton',
        type: 'Hoodie',
        unitCost: 50,
        vendor: 'StreetGear'
      },
      {
        id: '728ed52f8',
        color: 'Black',
        company: 'Street Pulse Hoodie',
        inStock: 150,
        material: 'Cotton',
        type: 'Hoodie',
        unitCost: 50,
        vendor: 'StreetGear'
      },
      {
        id: '728ed52f9',
        color: 'Black',
        company: 'Street Pulse Hoodie',
        inStock: 150,
        material: 'Cotton',
        type: 'Hoodie',
        unitCost: 50,
        vendor: 'StreetGear'
      },
      {
        id: '728ed52f10',
        color: 'Black',
        company: 'Street Pulse Hoodie',
        inStock: 150,
        material: 'Cotton',
        type: 'Hoodie',
        unitCost: 50,
        vendor: 'StreetGear'
      },
      {
        id: '728ed52f11',
        color: 'Black',
        company: 'Street Pulse Hoodie',
        inStock: 150,
        material: 'Cotton',
        type: 'Hoodie',
        unitCost: 50,
        vendor: 'StreetGear'
      },
      {
        id: '728ed52f12',
        color: 'Black',
        company: 'Street Pulse Hoodie',
        inStock: 150,
        material: 'Cotton',
        type: 'Hoodie',
        unitCost: 50,
        vendor: 'StreetGear'
      },
      {
        id: '728ed52f13',
        color: 'Black',
        company: 'Street Pulse Hoodie',
        inStock: 150,
        material: 'Cotton',
        type: 'Hoodie',
        unitCost: 50,
        vendor: 'StreetGear'
      },
      {
        id: '728ed52f14',
        color: 'Black',
        company: 'Street Pulse Hoodie',
        inStock: 150,
        material: 'Cotton',
        type: 'Hoodie',
        unitCost: 50,
        vendor: 'StreetGear'
      },
      {
        id: '728ed52f15',
        color: 'Black',
        company: 'Street Pulse Hoodie',
        inStock: 150,
        material: 'Cotton',
        type: 'Hoodie',
        unitCost: 50,
        vendor: 'StreetGear'
      }
    ])
  }

  async function handleSubmit() {
    console.log('Submit')
  }

  async function handleDraft(values: IPeiFields) {
    dispatch(setPeiDraft({ pei: values }))
    navigate('/pei-companies', { state: { draft: false } })
  }
  async function handleCancel() {
    navigate('/pei-companies', { state: { draft: false } })
  }

  return (
    <div className='w-full py-2 px-2 space-y-2'>
      <div className='w-full flex justify-end'>
        <FormModal
          title='Add PEI'
          description='Create a new PEI company from scratch'
          formik={formik}
          onDraft={handleDraft}
          defaultOpen={state?.draft || false}
          onCancel={handleCancel}
        >
          <AddForm formik={formik} handleSubmit={handleSubmit} />
        </FormModal>
      </div>
      <DataTable columns={columns} data={data} />
    </div>
  )
}

export default PEIListingPage
