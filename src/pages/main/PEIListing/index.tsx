import React, { useEffect, useRef, useState } from 'react'
import { columns } from './columns'
import { DataTable } from '../../../components/dataTable/data-table'
import { FormModal } from '@/components/formModal/FormModal'
import { useFormik } from 'formik'
import { object, string } from 'yup'
import AddForm from './AddForm'
import { ActionTypes, IPeiFields } from './types'
import { setPeiDraft } from '@/store/reducers/draftSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/storeHooks'
import { useLocation, useNavigate } from 'react-router'
import { PEIData } from '@/config/stub'
import { peiFormTexts } from '@/config/constants'

function PEIListingPage() {
  const [data, setData] = useState<IPeiFields[]>([])
  const [defaultFormOpen, setDefaultFormOpen] = useState<boolean>(false)
  const [actionType, setActionType] = useState<ActionTypes | undefined>()
  const [highlightedItem, setHighlightedItem] = useState<string | undefined>()

  const formRef = useRef<HTMLFormElement | null>(null)

  const { state } = useLocation()
  const navigate = useNavigate()

  const draftPEI = useAppSelector((state) => state.draft.pei)
  const dispatch = useAppDispatch()

  const validationSchema = object().shape({
    pb_id: string().required().label('Pitchbook ID'),
    swift_client_number: string().required().label('Swift Client Number'),
    swift_client_name: string().required().label('Swift Client Name'),
    gmdm_id: string().required().label('GMDM ID'),
    dgmf_id: string().required().label('DGMF ID'),
    duns_number: string().required().label('DUNS Number'),
    view_type: string().required().label('View Type'),
    tableau_inclusion_status: string()
      .required()
      .label('Tableau Inclusion Status'),
    requested_by_team: string().required().label('Requested By Team'),
    contact_email: string().required().email().label('Contact Email'),
    priority_for_feedback: string().required().label('Priority for Feedback'),
    fy_period_added: string().required().label('FY Period Added'),
    reporting_team: string().required().label('Reporting Team'),
    gmdm_legal_name: string().required().label('GMDM Legal Name'),
    pb_name: string().required().label('Pitchbook Name'),
    sources: string().required().label('Sources')
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

  // useEffect(() => {
  //   setDefaultFormOpen(state?.draft)
  //   if (state?.draft && draftPEI)

  // }, [state?.draft, draftPEI])

  useEffect(() => {
    setActionType(state?.actionType)
    if (
      state?.actionType === undefined ||
      state.actionType === ActionTypes.RELATIONSHIP
    )
      return
    else if (state.actionType === ActionTypes.CLOSE) setDefaultFormOpen(false)
    else if (state.actionType === ActionTypes.DRAFT && draftPEI) {
      setDefaultFormOpen(true)
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
    } else {
      const foundIndex = data.findIndex((d) => d.pb_id === state.pb_id)
      if (state.actionType === ActionTypes.SEARCH)
        setHighlightedItem(state.pb_id)
      if (foundIndex !== -1) {
        setDefaultFormOpen(true)
        formik.setValues({
          pb_id: data[foundIndex].pb_id,
          swift_client_number: data[foundIndex].swift_client_number,
          swift_client_name: data[foundIndex].swift_client_name,
          gmdm_id: data[foundIndex].gmdm_id,
          dgmf_id: data[foundIndex].dgmf_id,
          duns_number: data[foundIndex].duns_number,
          view_type: data[foundIndex].view_type,
          tableau_inclusion_status: data[foundIndex].tableau_inclusion_status,
          requested_by_team: data[foundIndex].requested_by_team,
          contact_email: data[foundIndex].contact_email,
          priority_for_feedback: data[foundIndex].priority_for_feedback,
          fy_period_added: data[foundIndex].fy_period_added,
          reporting_team: data[foundIndex].reporting_team,
          gmdm_legal_name: data[foundIndex].gmdm_legal_name,
          pb_name: data[foundIndex].pb_name,
          sources: data[foundIndex].sources
        })
      }
    }
  }, [state?.pb_id, state?.actionType, data, draftPEI])

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    // Fetch data from your API here.
    setData(PEIData)
  }

  async function handleDraft(values: IPeiFields) {
    dispatch(setPeiDraft({ pei: values }))
    navigate('/pei-companies', { state: { actionType: ActionTypes.CLOSE } })
  }
  async function handleCancel() {
    navigate('/pei-companies', { state: { actionType: ActionTypes.CLOSE } })
  }
  async function handleRelationship(pb_id: string) {
    navigate('/pei-companies', {
      state: { pb_id, actionType: ActionTypes.RELATIONSHIP }
    })
  }
  async function handleSubmit(values: IPeiFields) {
    console.log('🚀 ~ handleSubmit ~ values:', values)
    navigate('/pei-companies', { state: { actionType: ActionTypes.CLOSE } })
  }
  const handleReset = () => {
    formRef.current?.scroll({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className='h-full w-full py-2 px-2 space-y-2'>
      {/* <RelationshipFormModal /> */}

      <div className='w-full flex justify-end'>
        <FormModal
          defaultOpen={defaultFormOpen}
          formik={formik}
          onDraft={handleDraft}
          onCancel={handleCancel}
          onRelationship={handleRelationship}
          onSubmit={handleSubmit}
          onReset={handleReset}
          title={
            actionType === ActionTypes.VIEW || actionType === ActionTypes.SEARCH
              ? peiFormTexts.view.title
              : actionType === ActionTypes.EDIT
              ? peiFormTexts.edit.title
              : actionType === ActionTypes.DRAFT
              ? peiFormTexts.draft.title
              : peiFormTexts.add.title
          }
          description={
            actionType === ActionTypes.VIEW || actionType === ActionTypes.SEARCH
              ? peiFormTexts.view.description
              : actionType === ActionTypes.EDIT
              ? peiFormTexts.edit.description
              : actionType === ActionTypes.DRAFT
              ? peiFormTexts.draft.description
              : peiFormTexts.add.description
          }
          cancelText={
            actionType === ActionTypes.VIEW || actionType === ActionTypes.SEARCH
              ? 'Close'
              : 'Cancel'
          }
          showDraft={
            !(
              actionType === ActionTypes.VIEW ||
              actionType === ActionTypes.SEARCH ||
              actionType === ActionTypes.RELATIONSHIP
            )
          }
          showSubmit={
            !(
              actionType === ActionTypes.VIEW ||
              actionType === ActionTypes.SEARCH ||
              actionType === ActionTypes.RELATIONSHIP
            )
          }
          showRelationship={
            actionType === ActionTypes.VIEW || actionType === ActionTypes.SEARCH
          }
          showReset={
            actionType === ActionTypes.VIEW || actionType === ActionTypes.SEARCH
          }
        >
          <AddForm
            formik={formik}
            formRefSetter={(ref: React.RefObject<HTMLFormElement | null>) =>
              (formRef.current = ref.current)
            }
            disabled={
              actionType === ActionTypes.VIEW ||
              actionType === ActionTypes.SEARCH
            }
          />
        </FormModal>
      </div>

      <DataTable
        columns={columns}
        data={data}
        highlightedItem={highlightedItem}
      />
    </div>
  )
}

export default PEIListingPage
