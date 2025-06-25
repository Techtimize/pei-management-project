import React, { useEffect, useRef, useState } from 'react'
import { columns } from './columns'
import { DataTable } from '../../../components/dataTable/data-table'
import { FormModal } from '@/components/formModal/FormModal'
import { useFormik } from 'formik'
import { object, string } from 'yup'
import AddForm from './AddForm'
import { ActionTypes, IPeiFields } from './types'
import { clearPeiDraft, setPeiDraft } from '@/store/reducers/draftSlice'
import { useAppDispatch, useAppSelector } from '@/hooks/storeHooks'
import { useLocation, useNavigate } from 'react-router'
import { peiFormTexts } from '@/config/constants'
import {
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable
} from '@tanstack/react-table'
import { axiosInstance } from '@/config/axiosConfig'

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

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  })

  const validationSchema = object().shape({
    pei_pb_id: string().required().label('Pitchbook ID'),
    pei_swift_client_number: string().required().label('Swift Client Number'),
    pei_swift_client_name: string().required().label('Swift Client Name'),
    pei_gmdm_id: string().required().label('GMDM ID'),
    pei_dgmf_id: string().required().label('DGMF ID'),
    pei_duns_number: string().required().label('DUNS Number'),
    view_type: string().required().label('View Type'),
    tableau_inclusion_status: string()
      .required()
      .label('Tableau Inclusion Status'),
    requested_by_team: string().required().label('Requested By Team'),
    contact_email: string().required().email().label('Contact Email'),
    priority_for_feedback: string().required().label('Priority for Feedback'),
    fy_period_added: string().required().label('FY Period Added'),
    reporting_team: string().required().label('Reporting Team'),
    pei_gmdm_legal_name: string().required().label('GMDM Legal Name'),
    pei_pb_name: string().required().label('Pitchbook Name'),
    sources: string().required().label('Sources')
  })

  const formik = useFormik<IPeiFields>({
    initialValues: {
      pei_pb_id: '',
      pei_swift_client_number: '',
      pei_swift_client_name: '',
      pei_gmdm_id: '',
      pei_dgmf_id: '',
      pei_duns_number: '',
      view_type: '',
      tableau_inclusion_status: '',
      requested_by_team: '',
      contact_email: '',
      priority_for_feedback: '',
      fy_period_added: '',
      reporting_team: '',
      pei_gmdm_legal_name: '',
      pei_pb_name: '',
      sources: ''
    },
    onSubmit: async (values) => {
      console.log('Submitting')
      console.log(values)
    },
    validationSchema
  })

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
        id: draftPEI.id,
        pei_pb_id: draftPEI.pei_pb_id,
        pei_swift_client_number: draftPEI?.pei_swift_client_number,
        pei_swift_client_name: draftPEI?.pei_swift_client_name,
        pei_gmdm_id: draftPEI?.pei_gmdm_id,
        pei_dgmf_id: draftPEI?.pei_dgmf_id,
        pei_duns_number: draftPEI?.pei_duns_number,
        view_type: draftPEI?.view_type,
        tableau_inclusion_status: draftPEI?.tableau_inclusion_status,
        requested_by_team: draftPEI?.requested_by_team,
        contact_email: draftPEI?.contact_email,
        priority_for_feedback: draftPEI?.priority_for_feedback,
        fy_period_added: draftPEI?.fy_period_added,
        reporting_team: draftPEI?.reporting_team,
        pei_gmdm_legal_name: draftPEI?.pei_gmdm_legal_name,
        pei_pb_name: draftPEI?.pei_pb_name,
        sources: draftPEI?.sources
      })
    } else {
      const foundIndex = data.findIndex((d) => d.pei_pb_id === state.pei_pb_id)
      if (state.actionType === ActionTypes.SEARCH)
        setHighlightedItem(state.pei_pb_id)
      if (foundIndex !== -1) {
        setDefaultFormOpen(true)
        formik.setValues({
          id: data[foundIndex].id,
          pei_pb_id: data[foundIndex].pei_pb_id,
          pei_swift_client_number: data[foundIndex].pei_swift_client_number,
          pei_swift_client_name: data[foundIndex].pei_swift_client_name,
          pei_gmdm_id: data[foundIndex].pei_gmdm_id,
          pei_dgmf_id: data[foundIndex].pei_dgmf_id,
          pei_duns_number: data[foundIndex].pei_duns_number,
          view_type: data[foundIndex].view_type,
          tableau_inclusion_status: data[foundIndex].tableau_inclusion_status,
          requested_by_team: data[foundIndex].requested_by_team,
          contact_email: data[foundIndex].contact_email,
          priority_for_feedback: data[foundIndex].priority_for_feedback,
          fy_period_added: data[foundIndex].fy_period_added,
          reporting_team: data[foundIndex].reporting_team,
          pei_gmdm_legal_name: data[foundIndex].pei_gmdm_legal_name,
          pei_pb_name: data[foundIndex].pei_pb_name,
          sources: data[foundIndex].sources
        })
      }
    }
  }, [state?.pei_pb_id, state?.actionType, data, draftPEI])

  useEffect(() => {
    getData()
  }, [state?.actionType])

  async function getData() {
    // Fetch data from your API here.
    const res = await axiosInstance.get('/pei-company/searchPieCompany', {
      params: {
        pageNo: 1,
        limit: table.getState().pagination.pageSize ?? 10
      }
    })
    if (res.status === 200) setData(res.data.data)
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
    const { id, ...newData } = values

    if (state.actionType === ActionTypes.DRAFT && !id) {
      const res = await axiosInstance.post('/pei-company', newData)
      if (res.status === 201) dispatch(clearPeiDraft())
    } else if (
      (state.actionType === ActionTypes.EDIT && id) ||
      (state.actionType === ActionTypes.DRAFT && id)
    ) {
      await axiosInstance.put(`/pei-company/${id}`, newData)
    } else {
      await axiosInstance.post('/pei-company', newData)
    }

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

      <DataTable highlightedItem={highlightedItem} table={table} />
    </div>
  )
}

export default PEIListingPage
